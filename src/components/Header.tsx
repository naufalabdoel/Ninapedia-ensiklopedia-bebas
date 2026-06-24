import React, { useState, useMemo, useRef, useEffect } from "react";
import { Menu, Search, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import MainMenu from "./MainMenu";
import { wikiArticles } from "../data/articles";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isMenuPinned: boolean;
  setIsMenuPinned: (pinned: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenAZSearch: () => void;
  currentUser?: string | null;
  onLogout?: () => void;
}

interface SearchItem {
  title: string;
  description: string;
  image: string | null;
  target: string;
}

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
  isMenuPinned,
  setIsMenuPinned,
  currentPage,
  setCurrentPage,
  onOpenAZSearch,
  currentUser,
  onLogout,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsSuggestionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Comprehensive static index for fast/awesome search autocomplete (including values from Wikipedia "rock" search screenshot)
  const searchItems = useMemo<SearchItem[]>(() => {
    const core: SearchItem[] = [
      {
        title: "Halaman Utama",
        description: "Halaman utama ensiklopedia bebas beraliran akal sehat",
        image: null,
        target: "Halaman Utama",
      },
      {
        title: "Rocky Gerung",
        description: "filsuf dan akademikus Indonesia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg/250px-Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg",
        target: "Rocky Gerung",
      },
      {
        title: "Piagam Jakarta",
        description: "rancangan pembukaan Undang-Undang Dasar 1945 kompromi Panitia Sembilan",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Naskah_Asli_Piagam_Jakarta.jpg/250px-Naskah_Asli_Piagam_Jakarta.jpg",
        target: "Piagam Jakarta",
      },
      {
        title: "Musik rok",
        description: "genre musik populer yang berasal dari \"rock and roll\" pada pertengahan 1950-an",
        image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=100&h=100&fit=crop",
        target: "Musik rok",
      },
      {
        title: "Rock and roll",
        description: "genre musik populer yang berkembang di Amerika Serikat",
        image: "https://images.unsplash.com/photo-1487180142328-054b783ef471?w=100&h=100&fit=crop",
        target: "Rock and roll",
      },
      {
        title: "Rockstar Games",
        description: "perusahaan divisi penerbit permainan video asal Amerika Serikat",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rockstar_Games_Logo.svg/200px-Rockstar_Games_Logo.svg.png",
        target: "Rockstar Games",
      },
      {
        title: "Rockmelt",
        description: "perangkat lunak peramban web sosial berbasis Chromium",
        image: null,
        target: "Rockmelt",
      },
      {
        title: "Rockabye (lagu)",
        description: "lagu hit karya Clean Bandit tahun 2016",
        image: null,
        target: "Rockabye (lagu)",
      },
      {
        title: "Rock Lee",
        description: "karakter fiksi shinobi tangguh dari serial anime Naruto",
        image: null,
        target: "Rock Lee",
      },
      {
        title: "Rockstar North",
        description: "pengembang permainan video asal Edinburgh, Inggris Raya",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Rockstar_North_logo.svg/200px-Rockstar_North_logo.svg.png",
        target: "Rockstar North",
      },
      {
        title: "Rocket Punch",
        description: "Girlgroup Korea Selatan bentukan Woollim Entertainment",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop",
        target: "Rocket Punch",
      },
      {
        title: "Rocket Rockers",
        description: "grup musik pop punk asal Bandung, Indonesia",
        image: null,
        target: "Rocket Rockers",
      },
      {
        title: "Bantuan",
        description: "Panduan navigasi dasar, rujukan ilmiah, dan bantuan Ninapedia",
        image: null,
        target: "Bantuan",
      },
      {
        title: "Pancapilar",
        description: "Prinsip dasar kode perilaku penulisan nalar sehat",
        image: null,
        target: "Pancapilar",
      },
      {
        title: "Tentang Ninapedia",
        description: "Deskripsi profil dan sejarah platform kebebasan nalar",
        image: null,
        target: "Tentang Ninapedia",
      },
      {
        title: "Bak pasir",
        description: "Halaman uji coba terbuka latihan pemformatan artikel",
        image: null,
        target: "Bak pasir",
      },
      {
        title: "Hubungi kami",
        description: "Akses kontak resmi, redaksi, dan pengaduan administratif",
        image: null,
        target: "Hubungi kami",
      }
    ];

    const dynamic: SearchItem[] = Object.values(wikiArticles).map((art) => ({
      title: art.title,
      description: art.subheading || art.summary,
      image: art.infobox?.image || null,
      target: art.title,
    }));

    // Combine and remove duplicate keys by lowercase title
    const combined = [...core, ...dynamic];
    const uniqueMap = new Map<string, SearchItem>();
    combined.forEach((item) => {
      uniqueMap.set(item.title.toLowerCase(), item);
    });

    return Array.from(uniqueMap.values()).sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  // Filter matching suggestions strictly on typing
  const filteredSuggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return searchItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [searchQuery, searchItems]);

  const handleSearchSubmit = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return;

    // Direct/closest search redirection
    const matched = searchItems.find((item) => item.title.toLowerCase() === trimmed.toLowerCase());
    if (matched) {
      setCurrentPage(matched.target);
    } else {
      const partial = searchItems.find((item) => item.title.toLowerCase().includes(trimmed.toLowerCase()));
      if (partial) {
        setCurrentPage(partial.target);
      } else {
        // Jump directly to a dynamically fallback wiki key
        setCurrentPage(trimmed);
      }
    }
    setIsSuggestionsOpen(false);
    setActiveIndex(-1);
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < filteredSuggestions.length) {
        const item = filteredSuggestions[activeIndex];
        setCurrentPage(item.target);
        setSearchQuery("");
        setIsSuggestionsOpen(false);
        setActiveIndex(-1);
      } else if (activeIndex === filteredSuggestions.length && searchQuery.trim()) {
        handleSearchSubmit(searchQuery);
        setSearchQuery("");
      } else {
        handleSearchSubmit(searchQuery);
        setSearchQuery("");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsSuggestionsOpen(true);
      setActiveIndex((prev) => {
        const limit = searchQuery.trim() ? filteredSuggestions.length : filteredSuggestions.length - 1;
        return prev < limit ? prev + 1 : prev;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > -1 ? prev - 1 : prev));
    } else if (e.key === "Escape") {
      setIsSuggestionsOpen(false);
      setActiveIndex(-1);
    }
  };

  const handleSelectItem = (item: SearchItem) => {
    setCurrentPage(item.target);
    setSearchQuery("");
    setIsSuggestionsOpen(false);
    setActiveIndex(-1);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#a2a9b1] h-14 flex items-center px-4 justify-between gap-4">
      <div className="flex items-center gap-4 w-64 relative">
        <AnimatePresence mode="wait">
          {!isMenuPinned && (
            <motion.button
              key="hamburger"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 hover:bg-gray-100 rounded focus:outline-none transition-all cursor-pointer ${
                isMenuOpen ? "bg-gray-100 ring-2 ring-blue-500/50" : ""
              }`}
              id="main-menu-trigger"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-[#202122]" /> : <Menu className="w-5 h-5 text-[#202122]" />}
            </motion.button>
          )}
        </AnimatePresence>

        <div 
          className={`flex items-center gap-2 cursor-pointer select-none transition-all duration-300 ${isMenuPinned ? "pl-2" : "pl-0"}`}
          onClick={() => {
            setCurrentPage("Halaman Utama");
            setIsMenuOpen(false);
          }}
        >
          <svg width="32" height="32" viewBox="0 0 100 100" className="text-gray-400">
             <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
             <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="currentColor" strokeWidth="2"/>
             <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2"/>
             <rect x="35" y="5" width="30" height="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <div className="flex flex-col">
             <span className="font-serif text-xl tracking-tight text-black" style={{fontFamily: "'Times New Roman', Times, serif"}}>
               NINAPEDIA
             </span>
             <span className="text-[10px] text-gray-800 -mt-1 font-sans">
               Ensiklopedia Bebas
             </span>
          </div>
        </div>

        {/* Floating Page Dropdown menu container */}
        <AnimatePresence>
          {isMenuOpen && !isMenuPinned && (
            <>
              {/* Overlay transparent layer for easy closing */}
              <div 
                className="fixed inset-0 z-40 bg-transparent cursor-default" 
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
                className="absolute left-0 top-12 z-50 bg-white border border-[#a2a9b1] rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.15)] max-h-[85vh] overflow-y-auto"
              >
                <MainMenu
                  layout="popup"
                  onDockToggle={() => {
                    setIsMenuPinned(true);
                    setIsMenuOpen(false);
                  }}
                  onClose={() => setIsMenuOpen(false)}
                  activeItem={currentPage}
                  onItemClick={setCurrentPage}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 max-w-3xl relative flex items-center justify-center">
        <div ref={containerRef} className="relative w-full max-w-[600px] flex flex-col">
          <div className="relative w-full flex">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Search className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              placeholder="Telusuri Ninapedia" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSuggestionsOpen(true);
                setActiveIndex(-1);
              }}
              onFocus={() => setIsSuggestionsOpen(true)}
              onKeyDown={handleSearchKeyPress}
              className="w-full h-8 pl-10 pr-28 bg-white border border-[#a2a9b1] rounded focus:outline-none focus:border-[#3366cc] focus:ring-1 focus:ring-[#3366cc] text-sm text-[#202122] transition-colors"
            />
            <div className="absolute right-16 top-1/2 -translate-y-1/2 flex items-center">
              <button 
                onClick={onOpenAZSearch}
                className="px-2 py-0.5 border border-[#a2a9b1] bg-[#f8f9fa] hover:bg-[#eaecf0] hover:text-[#3366cc] hover:border-[#3366cc] text-[11px] text-[#0645ad] font-bold rounded cursor-pointer select-none transition-colors active:scale-95"
                title="Indeks Informasi Alfabetis A-Z"
              >
                A-Z
              </button>
            </div>
            <button 
              onClick={() => handleSearchSubmit(searchQuery)}
              className="absolute right-0 top-0 bottom-0 px-4 bg-[#f8f9fa] border-l border-[#a2a9b1] text-[#202122] text-sm font-medium rounded-r hover:bg-[#eaecf0]"
            >
              Cari
            </button>
          </div>

          {/* Real-time search suggestions popup */}
          <AnimatePresence>
            {isSuggestionsOpen && searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.1 }}
                className="absolute left-0 right-0 top-9 z-50 bg-white border border-[#a2a9b1] rounded shadow-[0_4px_16px_rgba(0,0,0,0.15)] overflow-hidden text-left"
              >
                {/* Suggestions list */}
                {filteredSuggestions.length > 0 && (
                  <div className="flex flex-col py-1">
                    {filteredSuggestions.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSelectItem(item)}
                        className={`flex items-center px-3 py-1.5 cursor-pointer transition-colors duration-100 ${
                          idx === activeIndex
                            ? "bg-[#e0e2e6] text-black"
                            : "hover:bg-gray-100 text-[#202122]"
                        }`}
                      >
                        {/* Thumbnail image box */}
                        <div className="w-[38px] h-[38px] shrink-0 border border-gray-200 bg-[#f8f9fa] flex items-center justify-center rounded-sm mr-3 overflow-hidden">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                            </svg>
                          )}
                        </div>

                        {/* Title & Description stack */}
                        <div className="flex-1 min-w-0">
                          <b className="font-sans text-[13px] text-gray-900 block font-semibold leading-tight truncate">
                            {item.title}
                          </b>
                          <p className="font-sans text-[11px] text-[#72777d] mt-0.5 leading-normal truncate">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer search query line ("Cari halaman yang berisi...") */}
                <div
                  onClick={() => handleSearchSubmit(searchQuery)}
                  className={`flex items-center px-3 py-1.5 border-t border-[#eaecf0] cursor-pointer transition-colors duration-100 ${
                    activeIndex === filteredSuggestions.length
                      ? "bg-[#e0e2e6]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="w-[38px] h-[38px] shrink-0 border border-gray-200 bg-[#f8f9fa] flex items-center justify-center rounded-sm mr-3">
                    <Search className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="font-sans text-xs text-gray-700">
                    Cari halaman yang berisi <span className="font-bold text-black italic">"{searchQuery}"</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center gap-4 text-[13px] justify-end whitespace-nowrap">
        {currentUser ? (
          <>
            <span className="flex items-center gap-1 text-gray-700 font-medium">
              <User className="w-4 h-4 text-gray-400" />
              {currentUser}
            </span>
            <span className="text-gray-300">|</span>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onLogout?.(); }}
              className="text-[#0645ad] hover:underline"
            >
              Keluar
            </a>
          </>
        ) : (
          <>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("Terima kasih atas niat baik Anda untuk menyumbang!"); }}
              className="text-[#0645ad] hover:underline"
            >
              Sumbangi
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentPage("Buat akun baru"); }}
              className={`text-[#0645ad] hover:underline ${currentPage === "Buat akun baru" ? "font-bold" : ""}`}
            >
              Buat akun baru
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentPage("Masuk log"); }}
              className={`text-[#0645ad] hover:underline flex items-center gap-1 font-bold ${currentPage === "Masuk log" ? "text-blue-700" : ""}`}
            >
              <User className="w-4 h-4 text-gray-500" />
              Masuk log
            </a>
          </>
        )}
      </div>
    </header>
  );
}
