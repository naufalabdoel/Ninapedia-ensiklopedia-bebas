import React, { useEffect, useState } from "react";

interface SidebarLeftProps {
  currentPage?: string;
}

interface Section {
  title: string;
  id: string;
  sub?: { title: string; id: string }[];
}

export default function SidebarLeft({ currentPage = "Rocky Gerung" }: SidebarLeftProps) {
  const [activeSection, setActiveSection] = useState<string>("awal");

  const sections: Section[] = currentPage === "Piagam Jakarta"
    ? [
        { title: "Awal", id: "awal" },
        { title: "Latar Belakang & Panitia Sembilan", id: "latar-belakang" },
        { title: "Teks Pembukaan & Ortografi", id: "perbandingan-naskah-pembukaan" },
        { title: "Historiografi Sidang BPUPK", id: "sidang-kedua-bpupk" },
        { title: "Penghapusan Tujuh Kata", id: "penghapusan-tujuh-kata" },
        { title: "Era Penangguhan & Dekret 1959", id: "dekret-presiden" },
        { title: "Dinamika Pasca-Dekret", id: "penangguhan-dan-orde-baru" },
        { title: "Upaya Legislasi Orde Baru", id: "legislasi-syariat-orde-baru" },
        { title: "Amendemen Reformasi", id: "sidang-reformasi-amandemen" },
        { title: "Keterangan & Glosarium", id: "keterangan" },
        { title: "Catatan Kaki & Anotasi", id: "catatan-kaki" },
        { title: "Daftar Pustaka", id: "daftar-pustaka" },
        { title: "Pranala luar", id: "pranala-luar" },
      ]
    : [
        { title: "Awal", id: "awal-rocky" },
        { title: "Kehidupan awal dan pendidikan", id: "kehidupan-awal-dan-pendidikan" },
        { 
          title: "Karier", 
          id: "karier",
          sub: [
            { title: "Karier akademik", id: "karier-akademik" },
            { title: "Mendirikan partai politik", id: "mendirikan-partai-politik" }
          ]
        },
        { title: "Keorganisasian", id: "keorganisasian" },
        { title: "Pemikiran dan aktivitas", id: "pemikiran-dan-aktivitas" },
        { title: "Kontroversi", id: "kontroversi" },
        { title: "Warisan", id: "warisan" },
        { title: "Karya", id: "karya" },
        { title: "Referensi", id: "referensi-rocky" },
        { title: "Pranala luar", id: "pranala-luar-rocky" },
      ];

  // Set up scroll listener / scroll spy to automatically highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently closest to the top of the viewport
      let currentActive = sections[0]?.id || "awal";
      let closestDistance = Infinity;

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // We want the section whose top is close to the header (e.g. 80px)
          const distance = Math.abs(rect.top - 80);
          if (distance < closestDistance && rect.top < window.innerHeight / 2) {
            closestDistance = distance;
            currentActive = sec.id;
          }
        }
        if (sec.sub) {
          sec.sub.forEach((subSec) => {
            const subEl = document.getElementById(subSec.id);
            if (subEl) {
              const subRect = subEl.getBoundingClientRect();
              const subDistance = Math.abs(subRect.top - 80);
              if (subDistance < closestDistance && subRect.top < window.innerHeight / 2) {
                closestDistance = subDistance;
                currentActive = subSec.id;
              }
            }
          });
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70; // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <aside className="w-52 flex-shrink-0 hidden lg:block py-6 pr-6 sticky top-14 self-start h-[calc(100vh-3.5rem)] overflow-y-auto custom-scrollbar select-none">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-[#202122] text-xs uppercase tracking-wider text-gray-500">Daftar isi</h2>
        <button className="text-[11px] text-[#0645ad] hover:underline cursor-pointer">sembunyikan</button>
      </div>
      <nav className="text-[13px] border-l border-[#eaecf0]">
        <ul className="space-y-1">
          {sections.map((section) => {
            const isMainActive = activeSection === section.id || 
              (section.sub && section.sub.some(s => s.id === activeSection));

            return (
              <li key={section.id} className="relative">
                <a 
                  href={`#${section.id}`} 
                  onClick={(e) => handleScrollTo(e, section.id)}
                  className={`block px-3 py-1 cursor-pointer transition-all duration-150 leading-tight ${isMainActive ? 'text-[#202122] font-bold border-l-2 border-[#202122] -ml-[1px] bg-gray-50/50' : 'text-[#0645ad] hover:underline'}`}
                >
                  {section.title}
                </a>
                {section.sub && (
                  <ul className="ml-3 space-y-1 mt-1 border-l border-gray-100 pl-2">
                    {section.sub.map((sub) => (
                      <li key={sub.id}>
                        <a 
                          href={`#${sub.id}`} 
                          onClick={(e) => handleScrollTo(e, sub.id)}
                          className={`block py-0.5 text-[12px] cursor-pointer transition-colors leading-tight ${activeSection === sub.id ? 'text-[#202122] font-semibold underline' : 'text-[#0645ad] hover:underline'}`}
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
