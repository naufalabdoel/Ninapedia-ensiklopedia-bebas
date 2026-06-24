import React, { useState } from "react";
import { User, Lock, HelpCircle, ChevronDown, Keyboard, AlertCircle, Loader2 } from "lucide-react";
import { auth, db, doc, setDoc, getDoc, handleFirestoreError, OperationType, signInWithEmailAndPassword } from "../lib/firebase";

interface MasukLogProps {
  onNavigate: (page: string) => void;
  onLoginSuccess: (username: string) => void;
}

export default function MasukLog({ onNavigate, onLoginSuccess }: MasukLogProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
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
    if (!password) {
      setError("Kata sandi tidak boleh kosong.");
      return;
    }
    if (password.length < 6) {
      setError("Kata sandi yang dimasukkan terlalu pendek (minimal 6 karakter).");
      return;
    }

    setIsLoading(true);

    try {
      // Check user record in Firestore
      const docId = cleanUsername.toLowerCase();
      const userRef = doc(db, "users", docId);
      let userSnap;
      try {
        userSnap = await getDoc(userRef);
      } catch (err) {
        handleFirestoreError(err, OperationType.GET, `users/${docId}`);
      }

      if (!userSnap || !userSnap.exists()) {
        setError("Nama pengguna tidak ditemukan. Silakan buat akun terlebih dahulu.");
        setIsLoading(false);
        return;
      }

      const userData = userSnap.data();

      // Sign in to Firebase Authentication in the background using transformed email
      const backgroundEmail = `${docId}@ninapedia.com`;
      try {
        await signInWithEmailAndPassword(auth, backgroundEmail, password);
      } catch (err: any) {
        console.error("Firebase auth sign in error:", err);
        if (
          err.code === "auth/invalid-credential" || 
          err.code === "auth/wrong-password" || 
          err.code === "auth/user-not-found" || 
          err.code === "auth/invalid-email"
        ) {
          setError("Kata sandi salah atau nama pengguna tidak cocok. Silakan coba lagi.");
        } else if (err.code === "auth/user-disabled") {
          setError("Akun ini telah dinonaktifkan.");
        } else {
          setError(`Gagal masuk log: ${err.message || err}`);
        }
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      // Login success! Trigger callback
      onLoginSuccess(userData.username || cleanUsername);
    } catch (err: any) {
      console.error("Authentication check failed:", err);
      setError(err.message || "Gagal menghubungkan database Firebase. Silakan coba masuk kembali beberapa saat lagi.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 max-w-[650px] mx-auto text-[#202122] font-sans pb-12">
      {/* Upper header section with title and tools dropdown */}
      <div className="flex justify-between items-end border-b border-[#a2a9b1] pb-1 mb-4">
        <h1 
          className="text-2xl md:text-3xl font-serif font-normal"
          style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}
        >
          Masuk log
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

      {/* Main Login Form Block */}
      <div className="pt-4 space-y-6">
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3.5 rounded-sm text-sm flex items-start gap-2">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
            <div>
              <p className="font-bold">Galat Autentikasi</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username field */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-bold text-gray-800 flex justify-between items-center">
              Nama pengguna
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan nama pengguna Anda"
                className="w-full bg-white border border-[#a2a9b1] rounded p-2 pr-10 text-sm text-[#202122] focus:outline-none focus:border-[#3366cc] focus:ring-1 focus:ring-[#3366cc] transition-all"
              />
              <Keyboard className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-600" />
            </div>
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
          </div>

          {/* Keep me logged in checkbox */}
          <div className="flex items-center gap-2 pt-1 select-none">
            <input
              type="checkbox"
              id="keep_logged_in"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
              className="w-4 h-4 text-[#3366cc] focus:ring-[#3366cc] border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="keep_logged_in" className="text-sm text-gray-700 cursor-pointer">
              Biarkan saya tetap masuk log
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 bg-[#3366cc] hover:bg-[#2a52be] text-white text-sm font-bold rounded-sm transition-colors cursor-pointer shadow-sm text-center mt-2 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin text-white" />}
            Masuk log
          </button>
        </form>

        {/* Support Links */}
        <div className="flex flex-col items-center justify-center gap-2 pt-2 text-[13px]">
          <a 
            href="#" 
            className="text-[#0645ad] hover:underline"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("Bantuan");
            }}
          >
            Bantuan masuk log
          </a>
          <a 
            href="#" 
            className="text-[#0645ad] hover:underline"
            onClick={(e) => {
              e.preventDefault();
              alert("Fitur pemulihan kata sandi sedang dalam pengembangan.");
            }}
          >
            Lupa kata sandi?
          </a>
        </div>

        {/* Separator / Call to register */}
        <div className="border-t border-[#eaecf0] pt-6 mt-6 text-center space-y-4">
          <div className="inline-block relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-xs text-gray-500 font-medium">
              Belum punya akun?
            </div>
          </div>
          
          <div className="pt-2">
            <button
              onClick={() => onNavigate("Buat akun baru")}
              className="inline-block px-8 py-2.5 border border-[#3366cc] hover:bg-blue-50/40 text-[#3366cc] text-sm font-bold rounded-sm transition-colors cursor-pointer text-center"
            >
              Gabung Ninapedia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
