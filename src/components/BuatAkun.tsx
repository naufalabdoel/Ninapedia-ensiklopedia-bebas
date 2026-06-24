import React, { useState } from "react";
import { PenTool, FileText, Users, HelpCircle, ChevronDown, Check, AlertCircle, Loader2 } from "lucide-react";
import { auth, db, doc, setDoc, getDoc, handleFirestoreError, OperationType, createUserWithEmailAndPassword, updateProfile } from "../lib/firebase";

interface BuatAkunProps {
  onNavigate: (page: string) => void;
  onRegisterSuccess: (username: string) => void;
}

export default function BuatAkun({ onNavigate, onRegisterSuccess }: BuatAkunProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [isPerkakasOpen, setIsPerkakasOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Bahasa Indonesia");


  const languages = [
    { name: "Jawa", code: "jv" },
    { name: "Sunda", code: "su" },
    { name: "Banyumasan", code: "map-bms" },
    { name: "Bugis", code: "bug" },
    { name: "Aceh", code: "ace" },
    { name: "Banjar", code: "bjn" },
    { name: "Minang", code: "min" },
    { name: "Melayu", code: "ms" },
    { name: "Bali", code: "ban" },
    { name: "Gorontalo", code: "gor" },
    { name: "Madura", code: "mad" },
    { name: "Nias", code: "nia" },
    { name: "Deutsch", code: "de" },
    { name: "English", code: "en" },
    { name: "Español", code: "es" },
    { name: "Français", code: "fr" },
    { name: "Italiano", code: "it" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setError(null);

    const cleanUsername = username.trim();
    if (!cleanUsername) {
      setError("Nama pengguna tidak boleh kosong.");
      return;
    }
    if (cleanUsername.length < 3) {
      setError("Nama pengguna minimal terdiri dari 3 karakter.");
      return;
    }
    // Validation for allowed characters in IDs according to firestore.rules (^[a-zA-Z0-9_\-]+$)
    const idRegex = /^[a-zA-Z0-9_\-]+$/;
    if (!idRegex.test(cleanUsername)) {
      setError("Nama pengguna hanya boleh mengandung huruf, angka, garis bawah (_), atau tanda hubung (-).");
      return;
    }

    if (!password) {
      setError("Kata sandi tidak boleh kosong.");
      return;
    }
    if (password.length < 6) {
      setError("Kata sandi minimal terdiri dari 6 karakter untuk keamanan.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Konfirmasi kata sandi tidak cocok.");
      return;
    }

    setIsLoading(true);

    try {
      // 1. Check if username is already taken in our Firestore db
      const docId = cleanUsername.toLowerCase();
      const userRef = doc(db, "users", docId);
      let userSnap;
      try {
        userSnap = await getDoc(userRef);
      } catch (err) {
        handleFirestoreError(err, OperationType.GET, `users/${docId}`);
      }

      if (userSnap && userSnap.exists()) {
        setError("Nama pengguna sudah terdaftar. Silakan pilih nama lain.");
        setIsLoading(false);
        return;
      }

      // 2. Perform Real Firebase Auth Registration using background email transformation
      const backgroundEmail = `${docId}@ninapedia.com`;
      let userCredential;
      try {
        userCredential = await createUserWithEmailAndPassword(auth, backgroundEmail, password);
      } catch (err: any) {
        console.error("Firebase auth registration error:", err);
        if (err.code === "auth/email-already-in-use") {
          setError("Nama pengguna atau email ini sudah terdaftar.");
        } else if (err.code === "auth/weak-password") {
          setError("Kata sandi terlalu lemah.");
        } else if (err.code === "auth/invalid-email") {
          setError("Format nama pengguna tidak valid sebagai kredensial.");
        } else {
          setError(`Gagal mendaftarkan akun di sistem Auth: ${err.message || err}`);
        }
        setIsLoading(false);
        return;
      }

      const user = userCredential.user;

      // 3. Update the user's Display Name in Firebase Authentication profile
      try {
        await updateProfile(user, {
          displayName: cleanUsername
        });
      } catch (err) {
        console.warn("Gagal memperbarui display name di profil Firebase Auth:", err);
      }

      // 4. Save new user info to Firestore under users/{username_lowercase}
      try {
        await setDoc(userRef, {
          username: cleanUsername,
          email: email.trim(), // Save their actual optional recovery email if provided
          password: password, // Conforming to rules (optional string field)
          uid: user.uid, // Conforming to rules (optional uid string field)
          createdAt: new Date().toISOString(),
          authMethod: "email_password"
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, `users/${docId}`);
      }

      setIsLoading(false);
      // Success! Trigger parent success handler
      onRegisterSuccess(cleanUsername);
    } catch (err: any) {
      console.error("Firestore/Auth registration error:", err);
      setError(err.message || "Gagal menghubungi database Firebase. Silakan coba kembali beberapa saat lagi.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 max-w-[960px] mx-auto text-[#202122] font-sans pb-12">
      {/* Upper header section with title and tools dropdown */}
      <div className="flex justify-between items-end border-b border-[#a2a9b1] pb-1 mb-4">
        <h1 
          className="text-2xl md:text-3xl font-serif font-normal"
          style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}
        >
          Buat akun baru
        </h1>
        
        {/* Perkakas Dropdown Menu */}
        <div className="relative">
          <button 
            onClick={() => setIsPerkakasOpen(!isPerkakasOpen)}
            className="flex items-center gap-1.5 px-3 py-1 text-xs border border-gray-300 rounded bg-[#f8f9fa] hover:bg-gray-50 transition-colors text-[#202122] font-medium cursor-pointer"
          >
            Perkakas
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </button>
          
          {isPerkakasOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsPerkakasOpen(false)} />
              <div className="absolute right-0 mt-1 w-44 bg-white border border-[#a2a9b1] shadow-md rounded-sm py-1 z-20 text-[13px]">
                <a href="#" className="block px-3 py-1.5 hover:bg-gray-100 text-[#0645ad] hover:underline" onClick={(e) => { e.preventDefault(); onNavigate("Bantuan"); setIsPerkakasOpen(false); }}>Bantuan</a>
                <a href="#" className="block px-3 py-1.5 hover:bg-gray-100 text-[#0645ad] hover:underline" onClick={(e) => { e.preventDefault(); onNavigate("Pancapilar"); setIsPerkakasOpen(false); }}>Pancapilar</a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Language translation bar */}
      <div className="text-xs text-gray-600 flex items-center gap-2">
        <span className="font-semibold text-gray-500">Bahasa:</span>
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-gray-300 rounded bg-[#f8f9fa] hover:bg-gray-50 transition-colors text-[#202122] font-semibold cursor-pointer shadow-sm select-none"
          >
            {selectedLanguage}
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </button>
          
          {isLangOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
              <div className="absolute left-0 mt-1.5 w-48 max-h-60 overflow-y-auto bg-white border border-[#a2a9b1] shadow-lg rounded py-1 z-20 text-[13px] grid grid-cols-1">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLanguage("Bahasa Indonesia");
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 hover:bg-gray-50 transition-colors cursor-pointer ${selectedLanguage === "Bahasa Indonesia" ? "font-bold text-[#3366cc]" : "text-gray-700"}`}
                >
                  Bahasa Indonesia
                </button>
                {languages.map((lang) => (
                  <button
                    type="button"
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang.name);
                      setIsLangOpen(false);
                      alert(`Simulasi alih bahasa ke: ${lang.name}`);
                    }}
                    className={`w-full text-left px-3.5 py-2 hover:bg-gray-50 transition-colors cursor-pointer ${selectedLanguage === lang.name ? "font-bold text-[#3366cc]" : "text-gray-700"}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main two-column content block */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
        {/* Left Column: Register Form */}
        <div className="md:col-span-7 space-y-5">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3.5 rounded-sm text-sm flex items-start gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
              <div>
                <p className="font-bold">Galat Pendaftaran</p>
                <p>{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-gray-800">
                Nama pengguna
                <span className="text-[11px] font-normal text-[#0645ad] ml-1.5 hover:underline cursor-pointer">
                  (baca kebijakan nama pengguna untuk menghindari pembuatan nama terlarang)
                </span>
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan nama pengguna Anda"
                className="w-full bg-white border border-[#a2a9b1] rounded p-2 text-sm text-[#202122] focus:outline-none focus:border-[#3366cc] focus:ring-1 focus:ring-[#3366cc] transition-all"
              />
            </div>

            {/* Password field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-gray-800">Kata sandi</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi"
                className="w-full bg-white border border-[#a2a9b1] rounded p-2 text-sm text-[#202122] focus:outline-none focus:border-[#3366cc] focus:ring-1 focus:ring-[#3366cc] transition-all"
              />
              <p className="text-[11px] text-gray-500">
                Direkomendasikan membuat sandi yang tidak digunakan di situs yang lain.
              </p>
            </div>

            {/* Confirm password field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-gray-800">Konfirmasi kata sandi</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Masukkan lagi kata sandi"
                className="w-full bg-white border border-[#a2a9b1] rounded p-2 text-sm text-[#202122] focus:outline-none focus:border-[#3366cc] focus:ring-1 focus:ring-[#3366cc] transition-all"
              />
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-gray-800">
                Alamat surel (disarankan)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan alamat surel Anda"
                className="w-full bg-white border border-[#a2a9b1] rounded p-2 text-sm text-[#202122] focus:outline-none focus:border-[#3366cc] focus:ring-1 focus:ring-[#3366cc] transition-all"
              />
              <p className="text-[11px] text-gray-500">
                Surel diperlukan untuk memulihkan akun Anda jika kehilangan kata sandi.
              </p>
            </div>

            {/* Captcha representation */}
            <div className="border border-[#eaecf0] p-4 bg-gray-50 rounded text-xs text-gray-600 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-green-600 font-bold" />
                </div>
                <span className="font-semibold text-gray-700">Verifikasi keamanan terlewati</span>
              </div>
              <p className="leading-relaxed">
                Situs ini dilindungi oleh hCaptcha dan tunduk pada{" "}
                <a href="#" className="text-[#0645ad] hover:underline" onClick={(e) => e.preventDefault()}>Kebijakan Privasi</a>{" "}
                serta{" "}
                <a href="#" className="text-[#0645ad] hover:underline" onClick={(e) => e.preventDefault()}>Ketentuan Layanan</a>{" "}
                dari hCaptcha.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 bg-[#3366cc] hover:bg-[#2a52be] text-white text-sm font-bold rounded-sm transition-colors cursor-pointer shadow-sm text-center flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin text-white" />}
              Buat akun Anda
            </button>
          </form>

          {/* Underform link */}
          <p className="text-[13px] text-gray-600 text-center pt-2">
            Sudah memiliki akun?{" "}
            <a 
              href="#" 
              className="text-[#0645ad] hover:underline font-semibold"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("Masuk log");
              }}
            >
              Masuk log di sini
            </a>
          </p>
        </div>

        {/* Right Column: Information panel / Wikipedia stats details */}
        <div className="md:col-span-5 bg-white border border-gray-200 p-6 rounded-sm self-start shadow-sm space-y-6">
          <h2 className="text-lg font-serif font-semibold text-[#202122] border-b border-gray-100 pb-2">
            Ninapedia dibuat oleh orang-orang seperti Anda.
          </h2>

          <div className="space-y-6">
            {/* Stat Row 1 */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#f8f9fa] border border-gray-200/60 rounded-full shrink-0 text-gray-500">
                <PenTool className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#202122]" style={{ fontFamily: "Georgia, serif" }}>
                  6
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  suntingan
                </span>
              </div>
            </div>

            {/* Stat Row 2 */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#f8f9fa] border border-gray-200/60 rounded-full shrink-0 text-gray-500">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#202122]" style={{ fontFamily: "Georgia, serif" }}>
                  45
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  halaman
                </span>
              </div>
            </div>

            {/* Stat Row 3 */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#f8f9fa] border border-gray-200/60 rounded-full shrink-0 text-gray-500">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#202122]" style={{ fontFamily: "Georgia, serif" }}>
                  2
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  kontributor terakhir
                </span>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500 border-t border-gray-100 pt-4 leading-relaxed">
            Ninapedia adalah proyek kolaborasi terbuka yang dikembangkan secara sukarela oleh pembaca di seluruh Indonesia dan belahan dunia demi menyebarkan nalar sehat, ilmu pengetahuan bebas, dan literasi yang murni.
          </div>
        </div>
      </div>
    </div>
  );
}
