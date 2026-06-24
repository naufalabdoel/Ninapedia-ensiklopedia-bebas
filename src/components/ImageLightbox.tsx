import React, { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, Download, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
  author?: string;
  license?: string;
  originalUrl?: string;
}

// Global list of all images across the app to support next/prev navigation in the lightbox!
export const ALL_APP_IMAGES: LightboxImage[] = [
  // Halaman Utama Images
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Naskah_Asli_Piagam_Jakarta.jpg/250px-Naskah_Asli_Piagam_Jakarta.jpg",
    alt: "Naskah Asli Piagam Jakarta",
    caption: "Naskah asli Piagam Jakarta rujukan yang ditandatangani pada 22 Juni 1945 oleh Panitia Sembilan.",
    author: "Panitia Sembilan BPUPK / Arsip Nasional RI",
    license: "Domain Publik",
    originalUrl: "https://commons.wikimedia.org/wiki/File:Naskah_Asli_Piagam_Jakarta.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chelsie_Monica_Ignesias_Sihite.jpg/120px-Chelsie_Monica_Ignesias_Sihite.jpg",
    alt: "Chelsie Monica",
    caption: "Chelsie Monica Ignesias Sihite dalam Kejuaraan Dunia Catur Beregu.",
    author: "Kementerian Pemuda dan Olahraga RI",
    license: "CC BY-SA 4.0",
    originalUrl: "https://commons.wikimedia.org/wiki/File:Chelsie_Monica_Ignesias_Sihite.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Arung_Palakka_-_The_conquest_of_Macassar.png/120px-Arung_Palakka_-_The_conquest_of_Macassar.png",
    alt: "Arung Palakka",
    caption: "Arung Palakka, Raja Bone yang bersekutu dengan VOC untuk memadamkan Pemberontakan Trunajaya.",
    author: "Pelukis Dinasti Bone / VOC Archives",
    license: "Domain Publik",
    originalUrl: "https://commons.wikimedia.org/wiki/File:Arung_Palakka_-_The_conquest_of_Macassar.png"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ethiopia_Banna_tribe_kids.jpg/500px-Ethiopia_Banna_tribe_kids.jpg",
    alt: "Anak-anak Suku Banna di Ethiopia",
    caption: "Anak-anak Suku Banna di Ethiopia dengan lukisan tubuh tradisional sedang bermain menggunakan egrang kayu.",
    author: "Rod Waddington from Kerikeri, New Zealand",
    license: "CC BY-SA 2.0",
    originalUrl: "https://commons.wikimedia.org/wiki/File:Ethiopia_Banna_tribe_kids.jpg"
  },
  // Rocky Gerung Images
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rocky_Gerung%2C_Sorgemagz.com_-_Rocky_Gerung_%22Perempuan_Punya_Pengetahuan_Riil_Tentang_Keadilan%22.jpg/500px-Rocky_Gerung%2C_Sorgemagz.com_-_Rocky_Gerung_%22Perempuan_Punya_Pengetahuan_Riil_Tentang_Keadilan%22.jpg",
    alt: "Rocky Gerung",
    caption: "Rocky Gerung memberikan ceramah dalam acara bertema emansipasi dan keadilan jender, 2015.",
    author: "Sorgemagz.com",
    license: "CC BY 3.0",
    originalUrl: "https://commons.wikimedia.org/wiki/File:Rocky_Gerung,_Sorgemagz.com_-_Rocky_Gerung_%22Perempuan_Punya_Pengetahuan_Riil_Tentang_Keadilan%22.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg/250px-Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg",
    alt: "Rocky Gerung dalam Persidangan",
    caption: "Rocky Gerung saat hadir dan memberikan kesaksian ahli dalam persidangan kasus Ratna Sarumpaet di Jakarta Selatan, 2019.",
    author: "Dwipayana / Media Kita",
    license: "CC BY-SA 4.0",
    originalUrl: "https://commons.wikimedia.org/wiki/File:Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial,_2019.jpg"
  }
];

// Custom trigger helper for other files
export function openAppImage(src: string) {
  const event = new CustomEvent("open-app-lightbox", { detail: { src } });
  window.dispatchEvent(event);
}

export default function ImageLightbox() {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ src: string }>;
      const found = ALL_APP_IMAGES.find((img) => img.src === customEvent.detail.src);
      if (found) {
        setActiveImage(found);
      } else {
        // Fallback if not registered in predefined list
        setActiveImage({
          src: customEvent.detail.src,
          alt: "Gambar Ninapedia",
          caption: "Gambar dari artikel ensiklopedia Ninapedia.",
          author: "Kontributor Ninapedia",
          originalUrl: customEvent.detail.src
        });
      }
      setZoom(1);
    };

    window.addEventListener("open-app-lightbox", handleOpen);
    return () => window.removeEventListener("open-app-lightbox", handleOpen);
  }, []);

  const handleNext = () => {
    if (!activeImage) return;
    const currentIndex = ALL_APP_IMAGES.findIndex((img) => img.src === activeImage.src);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % ALL_APP_IMAGES.length;
      setActiveImage(ALL_APP_IMAGES[nextIndex]);
      setZoom(1);
    }
  };

  const handlePrev = () => {
    if (!activeImage) return;
    const currentIndex = ALL_APP_IMAGES.findIndex((img) => img.src === activeImage.src);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + ALL_APP_IMAGES.length) % ALL_APP_IMAGES.length;
      setActiveImage(ALL_APP_IMAGES[prevIndex]);
      setZoom(1);
    }
  };

  const handleDownload = () => {
    if (!activeImage) return;
    window.open(activeImage.src, "_blank");
  };

  // Listen to keyboard escape and arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeImage) return;
      if (e.key === "Escape") setActiveImage(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <AnimatePresence>
      {activeImage && (
        <motion.div
          id="lightbox-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-neutral-950/95 flex flex-col justify-between text-white font-sans select-none antialiased"
        >
          {/* Header controls bar */}
          <div className="flex justify-between items-center px-4 py-3 bg-neutral-900/80 border-b border-neutral-800 shrink-0 select-none">
            <div className="text-xs md:text-sm font-medium text-neutral-300 truncate max-w-[60%] flex items-center gap-2">
              <span className="font-bold text-white bg-blue-600 px-1.5 py-0.5 text-[10px] uppercase rounded-xs">
                {activeImage.license?.includes("Public") || activeImage.license?.includes("Domain") ? "Public domain" : "Licensed"}
              </span>
              <span className="truncate">{activeImage.alt}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                id="lightbox-zoom-out"
                onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
                className="p-2 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white transition-colors"
                title="Perkecil"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-[11px] font-mono font-medium text-neutral-400 px-1 min-w-[36px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                id="lightbox-zoom-in"
                onClick={() => setZoom(Math.min(3, zoom + 0.25))}
                className="p-2 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white transition-colors"
                title="Perbesar"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <div className="h-4 w-[1px] bg-neutral-800 mx-1" />
              <button
                id="lightbox-download"
                onClick={handleDownload}
                className="p-2 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold px-2.5"
                title="Buka Resolusi Penuh"
              >
                <Download className="w-5 h-5" />
                <span className="hidden sm:inline">Unduh</span>
              </button>
              {activeImage.originalUrl && (
                <a
                  id="lightbox-external"
                  href={activeImage.originalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold px-2.5"
                  title="Lihat di Wikimedia Commons"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="hidden sm:inline">Commons</span>
                </a>
              )}
              <div className="h-4 w-[1px] bg-neutral-800 mx-1" />
              <button
                id="lightbox-close"
                onClick={() => setActiveImage(null)}
                className="p-2 bg-neutral-800/80 hover:bg-red-600 rounded-full text-white transition-all scale-105"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Viewport */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden p-4 group">
            {/* Left controller */}
            <button
              id="lightbox-prev"
              onClick={handlePrev}
              className="absolute left-4 z-10 p-3 bg-neutral-900/60 hover:bg-neutral-800 hover:scale-105 border border-neutral-800 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Canvas with Motion container */}
            <div className="w-full h-full flex items-center justify-center relative select-none">
              <motion.img
                key={activeImage.src}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ 
                  scale: zoom, 
                  opacity: 1,
                  transition: { type: "spring", stiffness: 300, damping: 25 }
                }}
                exit={{ scale: 0.95, opacity: 0 }}
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[80vh] max-w-[90vw] object-contain select-none shadow-2xl pointer-events-none transition-shadow duration-300"
                style={{ 
                  cursor: zoom > 1 ? "grab" : "default",
                  maxWidth: "92vw",
                  maxHeight: "75vh"
                }}
              />
            </div>

            {/* Right controller */}
            <button
              id="lightbox-next"
              onClick={handleNext}
              className="absolute right-4 z-10 p-3 bg-neutral-900/60 hover:bg-neutral-800 hover:scale-105 border border-neutral-800 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Detailed Bottom Info Panel */}
          <div className="bg-neutral-900/95 border-t border-neutral-800 p-4 md:p-6 shrink-0 text-left">
            <div className="max-w-4xl mx-auto space-y-3">
              <p className="text-sm md:text-base leading-relaxed text-neutral-100 font-serif">
                {activeImage.caption}
              </p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-400">
                {activeImage.author && (
                  <div>
                    <span className="text-neutral-500 font-semibold mr-1">Pembuat:</span>{" "}
                    <span className="text-neutral-300 font-mono">{activeImage.author}</span>
                  </div>
                )}
                {activeImage.license && (
                  <div>
                    <span className="text-neutral-500 font-semibold mr-1">Lisensi:</span>{" "}
                    <span className="text-neutral-300 underline font-medium decoration-neutral-600">{activeImage.license}</span>
                  </div>
                )}
                <div>
                  <span className="text-neutral-500 font-semibold mr-1">Sumber:</span>{" "}
                  <span className="text-neutral-300">Wikimedia Commons</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
