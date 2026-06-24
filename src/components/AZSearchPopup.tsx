import React, { useState, useMemo, useEffect } from "react";
import { X, Search, FileText, ChevronRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { wikiArticles } from "../data/articles";

interface AZSearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

interface IndexItem {
  title: string;
  summary: string;
  category: string;
  firstLetter: string;
}

export default function AZSearchPopup({ isOpen, onClose, onNavigate }: AZSearchPopupProps) {
  const [selectedLetter, setSelectedLetter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Complete index of all searchable items on the site
  const indexItems: IndexItem[] = useMemo(() => {
    // 1. Items from the custom database
    const dbItems = Object.values(wikiArticles).map((art) => ({
      title: art.title,
      summary: art.summary,
      category: art.category,
      firstLetter: art.title.charAt(0).toUpperCase(),
    }));

    // 2. Add application's other core pages manually with high-quality descriptions
    const coreItems: IndexItem[] = [
      {
        title: "Halaman Utama",
        summary: "Gerbang utama ensiklopedia bebas Ninapedia, memuat artikel pilihan dan peristiwa terkini.",
        category: "Navigasi",
        firstLetter: "H",
      },
      {
        title: "Rocky Gerung",
        summary: "Seorang akademikus, filsuf kontemporer, budayawan, dan intelektual publik terkemuka Indonesia.",
        category: "Biografi & Tokoh",
        firstLetter: "R",
      },
      {
        title: "Piagam Jakarta",
        summary: "Hasil kesepakatan kompromi luhur rancangan pembukaan konstitusi Republik tanggal 22 Juni 1945.",
        category: "Sejarah & Hukum",
        firstLetter: "P",
      },
      {
        title: "Bantuan",
        summary: "Panduan navigasi dasar, cara penulisan rujukan, kebijakan ilmiah, dan pusat pemecahan masalah.",
        category: "Meta-Ninapedia",
        firstLetter: "B",
      },
      {
        title: "Pancapilar",
        summary: "Lima sendi utama pedoman moral keadilan penulisan yang tak tergoyahkan bagi editor Ninapedia.",
        category: "Meta-Ninapedia",
        firstLetter: "P",
      },
      {
        title: "Tentang Ninapedia",
        summary: "Profil latar belakang gerakan terbuka, cita-cita kedaulatan nalar, serta sejarah berdirinya platform.",
        category: "Meta-Ninapedia",
        firstLetter: "T",
      },
      {
        title: "Bak pasir",
        summary: "Halaman uji coba terbuka bagi editor pemula untuk melakukan latihan pemformatan struktur artikel.",
        category: "Meta-Ninapedia",
        firstLetter: "B",
      },
      {
        title: "Hubungi kami",
        summary: "Akses kontak surel resmi, saluran sosial, alamat administratif, dan koordinasi dengan administrator.",
        category: "Meta-Ninapedia",
        firstLetter: "H",
      },
    ];

    // Merge and sort alphabetically
    const merged = [...dbItems, ...coreItems];
    
    // Ensure duplicates are eliminated (preferring db list if any duplicates arise)
    const uniqueMap = new Map<string, IndexItem>();
    merged.forEach(item => {
      uniqueMap.set(item.title, item);
    });

    return Array.from(uniqueMap.values()).sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  const alphabet = useMemo(() => {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }, []);

  // Filter items based on letter AND search query
  const filteredItems = useMemo(() => {
    return indexItems.filter((item) => {
      const matchesLetter = selectedLetter === "ALL" || item.firstLetter === selectedLetter;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesLetter && matchesSearch;
    });
  }, [indexItems, selectedLetter, searchQuery]);

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (title: string) => {
    onNavigate(title);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs"
          id="az-popup-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="bg-white border border-[#a2a9b1] rounded-lg shadow-2xl flex flex-col w-full max-w-3xl max-h-[85vh] overflow-hidden"
            id="az-popup-container"
          >
            {/* Modal Header */}
            <div className="bg-[#f8f9fa] border-b border-[#a2a9b1] py-3.5 px-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-xs bg-[#3366cc] text-white font-serif font-bold text-sm">
                  AZ
                </div>
                <div>
                  <h2 className="font-serif text-base md:text-lg font-bold text-[#202122]">
                    Indeks Alfabetis Ninapedia
                  </h2>
                  <p className="text-[10px] text-gray-500 font-sans -mt-0.5">
                    Telusuri glosarium nalar ilmiah secara alfabetis dari huruf A sampai Z
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-sm text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                id="az-popup-close-btn"
                title="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Saring Search Input & A-Z Buttons Row */}
            <div className="p-4 border-b border-[#eaecf0] bg-gray-50/50 space-y-3 shrink-0">
              {/* Dynamic Alphabet Selecter Row */}
              <div className="flex flex-wrap gap-1.5 md:gap-1 items-center justify-center pb-1">
                <button
                  onClick={() => {
                    setSelectedLetter("ALL");
                    setSearchQuery("");
                  }}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-all cursor-pointer ${
                    selectedLetter === "ALL"
                      ? "bg-[#3366cc] text-white shadow-sm font-bold"
                      : "bg-white border border-gray-200 text-[#0645ad] hover:bg-gray-100 hover:underline"
                  }`}
                >
                  Semua
                </button>
                {alphabet.map((letter) => {
                  const hasMatches = indexItems.some(item => item.firstLetter === letter);
                  return (
                    <button
                      key={letter}
                      onClick={() => {
                        setSelectedLetter(letter);
                        setSearchQuery("");
                      }}
                      disabled={!hasMatches}
                      className={`w-7 h-7 flex items-center justify-center text-xs rounded-xs font-semibold select-none transition-all cursor-pointer ${
                        selectedLetter === letter
                          ? "bg-[#3366cc] text-white shadow-sm font-bold"
                          : hasMatches
                          ? "bg-white border border-gray-200 text-[#0645ad] hover:bg-gray-100 hover:underline"
                          : "bg-gray-100/30 text-gray-300 border border-transparent cursor-not-allowed"
                      }`}
                      title={hasMatches ? `Huruf ${letter}` : `Tidak ada artikel berawal huruf ${letter}`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>

              {/* Real-time search filter */}
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder={`Menampilkan ${selectedLetter === "ALL" ? "semua" : `huruf ${selectedLetter}`}... Saring artikel di sini`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-10 py-1.5 bg-white border border-[#a2a9b1] text-xs font-sans rounded focus:outline-none focus:border-[#3366cc] text-[#202122] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-bold"
                  >
                    Hapus
                  </button>
                )}
              </div>
            </div>

            {/* List Results Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-white" id="az-results-container">
              {filteredItems.length === 0 ? (
                <div className="text-center py-12 space-y-2">
                  <HelpCircle className="w-10 h-10 text-gray-300 mx-auto" />
                  <p className="text-sm font-serif text-gray-800 font-semibold">Tidak Ada Hasil Ditemukan</p>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    Tidak ditemukan kecocokan untuk kata kunci "{searchQuery}" pada filter alfabet "{selectedLetter}". Silakan coba penelusuran lain.
                  </p>
                  {(selectedLetter !== "ALL" || searchQuery) && (
                    <button
                      onClick={() => {
                        setSelectedLetter("ALL");
                        setSearchQuery("");
                      }}
                      className="mt-3 text-xs text-[#0645ad] font-bold hover:underline"
                    >
                      Mulai ulang pencarian
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItems.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleLinkClick(item.title)}
                      className="group border border-gray-100 hover:border-[#a2a9b1] bg-[#f8f9fa] hover:bg-white p-3.5 rounded transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs select-none"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-sm md:text-base font-bold text-[#0645ad] group-hover:underline flex items-center gap-1">
                            {item.title}
                            <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-600" />
                          </span>
                          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider bg-gray-200/50 px-1.5 py-0.5 rounded-sm">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                      <div className="flex items-center justify-end text-[10px] text-gray-400 group-hover:text-blue-600 font-bold mt-2 gap-1 transition-colors">
                        <span>Baca artikel lengkap</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer Statistics */}
            <div className="bg-[#f8f9fa] border-t border-[#eaecf0] py-2.5 px-5 flex items-center justify-between text-[11px] text-gray-500">
              <div>
                Menampilkan <b>{filteredItems.length}</b> dari <b>{indexItems.length}</b> topik terdaftar
              </div>
              <div className="italic text-gray-400">
                Ninapedia &copy; 2026
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
