import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, MessageSquare, HelpCircle, FileText, Compass, Settings, Share2 } from "lucide-react";

interface MainMenuProps {
  layout: "popup" | "sidebar";
  onDockToggle: () => void;
  onClose?: () => void;
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

export default function MainMenu({
  layout,
  onDockToggle,
  onClose,
  activeItem = "Rocky Gerung",
  onItemClick,
}: MainMenuProps) {
  const sections = [
    {
      items: [
        { name: "Halaman Utama", label: "Halaman Utama" },
        { name: "Daftar isi", label: "Daftar isi" },
        { name: "Perubahan terbaru", label: "Perubahan terbaru" },
        { name: "Artikel pilihan", label: "Artikel pilihan" },
        { name: "Peristiwa terkini", label: "Peristiwa terkini" },
        { name: "Halaman baru", label: "Halaman baru" },
        { name: "Halaman sembarang", label: "Halaman sembarang" },
        { name: "Halaman istimewa", label: "Halaman istimewa" },
      ],
    },
    {
      title: "Komunitas",
      items: [
        { name: "Warung Kopi", label: "Warung Kopi" },
        { name: "Portal komunitas", label: "Portal komunitas" },
        { name: "Bantuan", label: "Bantuan" },
      ],
    },
    {
      title: "Ninapedia",
      items: [
        { name: "Tentang Ninapedia", label: "Tentang Ninapedia" },
        { name: "Pancapilar", label: "Pancapilar" },
        { name: "Kebijakan", label: "Kebijakan" },
        { name: "Hubungi kami", label: "Hubungi kami" },
        { name: "Bak pasir", label: "Bak pasir" },
      ],
    },
    {
      title: "Bagikan",
      items: [
        { name: "Facebook", label: "Facebook" },
        { name: "Twitter", label: "Twitter" },
      ],
    },
  ];

  const handleLinkClick = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onItemClick) {
      onItemClick(name);
    }
    if (onClose && layout === "popup") {
      onClose();
    }
  };

  return (
    <div className={`text-[13px] bg-white text-[#202122] select-none ${layout === "popup" ? "w-[240px] p-4" : "w-full py-4 px-2"}`}>
      {/* Header section with toggle button */}
      <div className="flex flex-col gap-2 mb-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#202122] text-sm">Menu utama</span>
          {layout === "popup" ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDockToggle();
              }}
              className="text-[11px] text-gray-500 bg-[#f8f9fa] hover:bg-[#eaecf0] border border-[#a2a9b1] rounded py-0.5 px-2 cursor-pointer transition-colors hover:text-gray-900 active:bg-gray-200"
              title="Pin Menu Utama ke Bilah Sisi"
            >
              pindah ke bilah sisi
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDockToggle();
              }}
              className="text-[11px] text-gray-500 bg-[#f8f9fa] hover:bg-[#eaecf0] border border-[#a2a9b1] rounded py-0.5 px-2 cursor-pointer transition-colors hover:text-gray-900 active:bg-gray-200"
              title="Sembunyikan menu ke laci"
            >
              pindah ke laci
            </button>
          )}
        </div>
      </div>

      <hr className="border-t border-[#eaecf0] my-3" />

      {/* Navigation Sections */}
      <div className="space-y-4">
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-1">
            {section.title && (
              <div className="text-gray-500 text-[12px] font-medium pt-2 pb-1 px-1">
                {section.title}
              </div>
            )}
            <ul className="space-y-[1px]">
              {section.items.map((item, itemIdx) => {
                const isActive = activeItem === item.name;
                return (
                  <li key={itemIdx}>
                    <a
                      href="#"
                      onClick={(e) => handleLinkClick(item.name, e)}
                      className={`block px-1 py-1 transition-colors leading-relaxed rounded-sm ${
                        isActive
                          ? "text-[#202122] font-bold bg-gray-50 border-l-2 border-[#3366cc]"
                          : "text-[#0645ad] hover:underline"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            {sectionIdx < sections.length - 1 && (
              <hr className="border-t border-[#eaecf0] mt-3" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
