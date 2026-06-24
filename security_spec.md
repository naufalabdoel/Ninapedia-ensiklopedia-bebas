# Security Specification & Threat Model (TDD)

## 1. Data Invariants
- **User Ownership**: A user profile document stored under `/users/{userId}` can only be read or written by the owner themselves (where `{userId}` matches `request.auth.uid` for Google users, or the logged-in session, and custom local usernames are checked).
- **Immutable Timestamps**: The `createdAt` field is set once upon document creation and can never be updated.
- **Strict Schema Enforcement**: Any written user document must contain only the whitelisted fields: `username`, `email`, `password`, `createdAt`, `authMethod`, and optional `uid`. Shadow fields like `role` or `isAdmin` must be rejected.
- **Value Limits**: All text inputs must be size-bounded (e.g., `username.size() <= 100`, `email.size() <= 200`) to prevent resource exhaustion attacks.

---

## 2. The "Dirty Dozen" Threat Payloads
The following payloads/actions represent attacks against the database rules that MUST return `PERMISSION_DENIED`.

### Payload 1: Unauthenticated Read
- **Action**: Unauthenticated `get` on `/users/john_doe`
- **Expected Result**: `PERMISSION_DENIED`

### Payload 2: Read Someone Else's PII
- **Actor**: Authenticated user `jane_doe` (`uid: "jane123"`)
- **Action**: `get` on `/users/john_doe` (`uid: "john456"`)
- **Expected Result**: `PERMISSION_DENIED`

### Payload 3: Spoofing Owner ID on Create (Identity Spoofing)
- **Actor**: Authenticated user `jane_doe` (`uid: "jane123"`)
- **Action**: `create` on `/users/john_doe` with payload:
  ```json
  {
    "username": "John Doe",
    "email": "john@example.com",
    "createdAt": "2026-06-23T13:58:26Z",
    "authMethod": "google_real"
  }
  ```
- **Expected Result**: `PERMISSION_DENIED` (cannot write to another user's document path)

### Payload 4: Value Poisoning (Denial of Wallet)
- **Actor**: Authenticated user `jane_doe` (`uid: "jane_doe"`)
- **Action**: `create` on `/users/jane_doe` with a 1MB string for `username`.
- **Expected Result**: `PERMISSION_DENIED` (violates `.size() <= 100` constraint)

### Payload 5: Shadow Update (Privilege Escalation / Ghost Fields)
- **Actor**: Authenticated user `jane_doe` (`uid: "jane_doe"`)
- **Action**: `update` on `/users/jane_doe` with payload:
  ```json
  {
    "username": "Jane Doe",
    "email": "jane@example.com",
    "createdAt": "2026-06-23T13:58:26Z",
    "authMethod": "google_real",
    "role": "admin",
    "isAdmin": true
  }
  ```
- **Expected Result**: `PERMISSION_DENIED` (affectedKeys contains forbidden fields)

### Payload 6: Modifying Immortal Field
- **Actor**: Authenticated user `jane_doe` (`uid: "jane_doe"`)
- **Action**: `update` on `/users/jane_doe` changing `createdAt` from `"2026-06-23T13:58:26Z"` to `"2026-01-01T00:00:00Z"`.
- **Expected Result**: `PERMISSION_DENIED` (createdAt is immutable)

### Payload 7: Invalid Auth Method Enum
- **Actor**: Authenticated user `jane_doe` (`uid: "jane_doe"`)
- **Action**: `create` on `/users/jane_doe` with `authMethod: "backdoor"`.
- **Expected Result**: `PERMISSION_DENIED` (authMethod must be in whitelist)

### Payload 8: Blanket Collection Query (PII Scraper)
- **Actor**: Authenticated user `jane_doe` (`uid: "jane_doe"`)
- **Action**: `list` / query `/users` without filtering.
- **Expected Result**: `PERMISSION_DENIED` (blanket reads strictly prohibited)

### Payload 9: Empty Credentials
- **Actor**: Authenticated user `jane_doe` (`uid: "jane_doe"`)
- **Action**: `create` with `username` or `email` as empty string `""`.
- **Expected Result**: `PERMISSION_DENIED` (must be at least 3 chars for username)

### Payload 10: Email Spoofing Attack
- **Actor**: Authenticated user with email `admin@ninapedia.org` but `email_verified == false` trying to gain admin privileges or make modifications.
- **Action**: `create` or `update` on user profile.
- **Expected Result**: `PERMISSION_DENIED` (must check `email_verified == true` for writing where applicable)

### Payload 11: Missing Required Fields
- **Actor**: Authenticated user `jane_doe` (`uid: "jane_doe"`)
- **Action**: `create` on `/users/jane_doe` with missing `authMethod` field.
- **Expected Result**: `PERMISSION_DENIED` (schema requires all core fields)

### Payload 12: Invalid ID Poisoning (Path Variable Attack)
- **Actor**: Authenticated user `jane_doe` (`uid: "jane_doe"`)
- **Action**: `create` on `/users/jane_doe_$$$___$$$` with special characters.
- **Expected Result**: `PERMISSION_DENIED` (violates alphanumeric ID constraint)

---

## 3. Test Suite Stub
Below is a conceptual test validation block for checking the rules:

```typescript
import { assertFails, assertSucceeds, initializeTestEnvironment } from "@firebase/rules-unit-testing";

describe("Ninapedia Security Rules", () => {
  it("denies unauthenticated read access to user profile", async () => {
    const testEnv = await initializeTestEnvironment({ projectId: "ai-studio-applet-webapp-4458b" });
    const context = testEnv.unauthenticatedContext();
    await assertFails(context.firestore().doc("users/any_user").get());
  });

  it("denies access to modify someone else's user profile", async () => {
    const testEnv = await initializeTestEnvironment({ projectId: "ai-studio-applet-webapp-4458b" });
    const aliceContext = testEnv.authenticatedContext("alice_id");
    await assertFails(aliceContext.firestore().doc("users/bob_id").set({
      username: "Bob",
      email: "bob@example.com",
      createdAt: "2026-06-23T13:58:26Z",
      authMethod: "google_real"
    }));
  });
});
```
