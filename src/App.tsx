/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import MainContent from './components/MainContent';
import MainMenu from './components/MainMenu';
import HalamanUtama from './components/HalamanUtama';
import WikiPage from './components/WikiPage';
import BakPasir from './components/BakPasir';
import PiagamJakarta from './components/PiagamJakarta';
import BuatAkun from './components/BuatAkun';
import MasukLog from './components/MasukLog';
import Footer from './components/Footer';
import ImageLightbox from './components/ImageLightbox';
import { motion, AnimatePresence } from 'motion/react';
import { Info } from 'lucide-react';
import AZSearchPopup from './components/AZSearchPopup';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPinned, setIsMenuPinned] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ninapedia_menu_pinned") === "true";
    }
    return false;
  });

  const [currentPage, setCurrentPage] = useState<string>("Halaman Utama");
  const [isAZOpen, setIsAZOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ninapedia_user");
    }
    return null;
  });

  const [textSize, setTextSize] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ninapedia_text_size") || "base";
    }
    return "base";
  });

  const [layoutWidth, setLayoutWidth] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ninapedia_layout_width") || "standard";
    }
    return "standard";
  });

  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ninapedia_theme") || "auto";
    }
    return "auto";
  });

  useEffect(() => {
    localStorage.setItem("ninapedia_menu_pinned", String(isMenuPinned));
  }, [isMenuPinned]);

  useEffect(() => {
    localStorage.setItem("ninapedia_text_size", textSize);
  }, [textSize]);

  useEffect(() => {
    localStorage.setItem("ninapedia_layout_width", layoutWidth);
  }, [layoutWidth]);

  useEffect(() => {
    localStorage.setItem("ninapedia_theme", theme);
    
    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
      }
    };

    if (theme === "dark") {
      applyTheme(true);
    } else if (theme === "light") {
      applyTheme(false);
    } else {
      // auto
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(mediaQuery.matches);

      const listener = (e: MediaQueryListEvent) => {
        applyTheme(e.matches);
      };
      
      mediaQuery.addEventListener("change", listener);
      return () => {
        mediaQuery.removeEventListener("change", listener);
      };
    }
  }, [theme]);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("ninapedia_user");
    setCurrentUser(null);
    triggerToast("Anda telah keluar log.");
    setCurrentPage("Halaman Utama");
  };

  const handleItemClick = (pageName: string) => {
    if (pageName === "Facebook" || pageName === "Twitter") {
      triggerToast(`Membuka simulasi bagikan ke ${pageName}...`);
    } else {
      setCurrentPage(pageName);
      setIsMenuOpen(false);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case "Rocky Gerung":
        return <MainContent />;
      case "Piagam Jakarta":
        return <PiagamJakarta />;
      case "Halaman Utama":
        return <HalamanUtama onNavigate={setCurrentPage} />;
      case "Bak pasir":
        return <BakPasir />;
      case "Buat akun baru":
        return (
          <BuatAkun 
            onNavigate={setCurrentPage} 
            onRegisterSuccess={(username) => {
              setCurrentUser(username);
              localStorage.setItem("ninapedia_user", username);
              triggerToast(`Selamat datang di Ninapedia, ${username}! Akun Anda berhasil dibuat.`);
              setCurrentPage("Halaman Utama");
            }} 
          />
        );
      case "Masuk log":
        return (
          <MasukLog 
            onNavigate={setCurrentPage} 
            onLoginSuccess={(username) => {
              setCurrentUser(username);
              localStorage.setItem("ninapedia_user", username);
              triggerToast(`Selamat datang kembali, ${username}!`);
              setCurrentPage("Halaman Utama");
            }} 
          />
        );
      default:
        return <WikiPage page={currentPage} />;
    }
  };

  const showDaftarIsi = currentPage === "Rocky Gerung" || currentPage === "Piagam Jakarta";

  const textSizeClass = 
    textSize === "sm" ? "text-sm" : 
    textSize === "lg" ? "text-lg text-[17px]" : 
    "text-base";

  const widthClass = 
    layoutWidth === "wide" 
      ? "max-w-none w-full" 
      : (currentPage === "Piagam Jakarta" ? "max-w-none w-full" : "max-w-[960px] mx-auto");

  return (
    <div className="min-h-screen bg-white text-[#202122] font-sans selection:bg-[#3366cc] selection:text-white relative">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isMenuPinned={isMenuPinned}
        setIsMenuPinned={setIsMenuPinned}
        currentPage={currentPage}
        setCurrentPage={handleItemClick}
        onOpenAZSearch={() => setIsAZOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
      <div className="max-w-[1600px] mx-auto flex justify-center px-4">
        {/* Pinned left sidebar (MainMenu) */}
        <AnimatePresence initial={false}>
          {isMenuPinned && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 220, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-[220px] flex-shrink-0 hidden xl:block py-6 pr-4 sticky top-14 self-start h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-[#eaecf0] select-none"
            >
              <MainMenu
                layout="sidebar"
                onDockToggle={() => setIsMenuPinned(false)}
                activeItem={currentPage}
                onItemClick={handleItemClick}
              />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Table of contents sidebar (only on active articles like Rocky Gerung and Piagam Jakarta) */}
        <div className={`transition-all duration-300 ${showDaftarIsi ? "w-52 mr-2" : "w-0 overflow-hidden opacity-0 mr-0"}`}>
          {showDaftarIsi && <SidebarLeft currentPage={currentPage} />}
        </div>
        
        {/* Main Content Pane */}
        <main className={`flex-1 pt-8 px-6 lg:px-8 min-h-[calc(100vh-3.5rem)] ${widthClass}`}>
          <div className={textSizeClass}>
            {renderContent()}
          </div>
          <Footer currentPage={currentPage} onNavigate={handleItemClick} triggerToast={triggerToast} />
        </main>
        
        {/* Right styling/controls sidebar */}
        {currentPage !== "Piagam Jakarta" && (
          <SidebarRight 
            textSize={textSize}
            setTextSize={setTextSize}
            layoutWidth={layoutWidth}
            setLayoutWidth={setLayoutWidth}
            theme={theme}
            setTheme={setTheme}
          />
        )}
      </div>

      {/* Floating interactive toast notifications */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[999] flex items-center gap-2 bg-[#202122] text-white py-2.5 px-4 rounded shadow-lg text-sm font-medium"
          >
            <Info className="w-4 h-4 text-blue-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Image Lightbox Media Viewer */}
      <ImageLightbox />
      
      {/* Search Popup from A to Z */}
      <AZSearchPopup 
        isOpen={isAZOpen} 
        onClose={() => setIsAZOpen(false)} 
        onNavigate={handleItemClick} 
      />
    </div>
  );
}
