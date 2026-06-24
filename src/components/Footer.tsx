import React from "react";

interface FooterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  triggerToast?: (msg: string) => void;
}

export default function Footer({ currentPage, onNavigate, triggerToast }: FooterProps) {
  // Map page names to their specific last modified metadata text
  const getLastModifiedText = () => {
    switch (currentPage) {
      case "Rocky Gerung":
        return "Halaman ini terakhir diubah pada 14 Juni 2026, pukul 15.51.";
      case "Piagam Jakarta":
        return "Halaman ini terakhir diubah pada 23 Juni 2026, pukul 11.20.";
      case "Halaman Utama":
        return "Halaman Utama terakhir diubah pada 20 Juni 2026, pukul 08.10.";
      case "Bak pasir":
        return "Ini adalah bak pasir komunitas Ninapedia. Halaman ini dirender berkala dan tidak memiliki riwayat permanen.";
      case "Tentang Ninapedia":
        return "Halaman ini terakhir diubah pada 18 Juni 2026, pukul 12.04.";
      case "Bantuan":
        return "Halaman ini terakhir diubah pada 21 Juni 2026, pukul 17.30.";
      case "Pancapilar":
        return "Halaman ini terakhir diubah pada 19 Juni 2026, pukul 09.45.";
      case "Hubungi kami":
        return "Halaman ini terakhir diubah pada 22 Juni 2026, pukul 14.15.";
      default:
        return "Halaman ini terakhir diubah pada 23 Juni 2026, pukul 07.18.";
    }
  };

  const handleFooterLinkClick = (pageName: string, e: React.MouseEvent) => {
    e.preventDefault();
    const playablePages = ["Halaman Utama", "Tentang Ninapedia", "Bantuan", "Pancapilar", "Hubungi kami", "Rocky Gerung", "Piagam Jakarta", "Bak pasir"];
    if (playablePages.includes(pageName)) {
      onNavigate(pageName);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (triggerToast) {
        triggerToast(`Membuka simulasi halaman "${pageName}"...`);
      } else {
        alert(`Membuka simulasi halaman "${pageName}"...`);
      }
    }
  };

  return (
    <footer className="text-[12px] leading-relaxed text-[#202122] mt-12 mb-8 pt-6 border-t border-[#eaecf0] select-none">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="space-y-2 flex-1">
          <p className="m-0 text-[#54595d]">
            {getLastModifiedText()}{" "}
            <span className="text-gray-400">
              Halaman dirender menggunakan <span className="hover:underline cursor-help">Parsoid-Nina</span>.
            </span>
          </p>
          <p className="m-0 text-[#54595d]">
            Teks tersedia di bawah{" "}
            <a
              href="#"
              onClick={(e) => handleFooterLinkClick("Lisensi Creative Commons", e)}
              className="text-[#0645ad] hover:underline"
            >
              Lisensi Atribusi-BerbagiSerupa Creative Commons
            </a>
            ; ketentuan tambahan mungkin berlaku. Dengan mengunjungi/menggunakan situs ini, Anda menyetujui Ketentuan Penggunaan dan Kebijakan Privasi.
            <br />
            Ninapedia® adalah merek dagang terdaftar dari{" "}
            <a
              href="#"
              onClick={(e) => handleFooterLinkClick("Tentang Ninapedia", e)}
              className="text-[#0645ad] hover:underline font-medium"
            >
              Ninamedia Foundation, Inc.
            </a>
            , sebuah organisasi nirlaba.
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-3 text-[11.5px]">
            {[
              { label: "Kebijakan privasi", page: "Kebijakan privasi" },
              { label: "Tentang Ninapedia", page: "Tentang Ninapedia" },
              { label: "Penyangkalan", page: "Penyangkalan" },
              { label: "Ketentuan Penggunaan", page: "Ketentuan Penggunaan" },
              { label: "Kode Etik", page: "Kode Etik" },
              { label: "Bantuan", page: "Bantuan" },
              { label: "Pancapilar", page: "Pancapilar" },
              { label: "Hubungi kami", page: "Hubungi kami" },
              { label: "Statistik", page: "Statistik" },
              { label: "Pernyataan kuki", page: "Pernyataan kuki" },
              { label: "Tampilan seluler", page: "Tampilan seluler" },
            ].map((link, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-gray-300">|</span>}
                <a
                  href="#"
                  onClick={(e) => handleFooterLinkClick(link.page, e)}
                  className="text-[#0645ad] hover:underline font-medium"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Wikipedia style badges */}
        <div className="flex sm:flex-row md:flex-col lg:flex-row gap-2 items-start md:items-end justify-start md:justify-end shrink-0 opacity-85">
          {/* Creative Commons Badge */}
          <div className="flex items-center border border-[#d5d5d5] bg-[#f8f9fa] text-[10px] leading-tight select-none">
            <div className="bg-[#e4e4e4] px-1.5 py-1 font-bold border-r border-[#d5d5d5] text-[#202122] flex items-center justify-center gap-0.5">
              <span>cc</span>
              <span className="text-[8px]">BY-SA</span>
            </div>
            <div className="px-1.5 py-1 text-gray-500 font-medium">
              Creative Commons
            </div>
          </div>

          {/* Powered by MediaWiki Badge */}
          <div className="flex items-center border border-[#d5d5d5] bg-[#f8f9fa] text-[10px] leading-tight select-none">
            <div className="bg-[#3366cc] text-white px-2 py-1 font-black italic tracking-tighter border-r border-[#d5d5d5]">
              Wiki
            </div>
            <div className="px-2 py-1 text-gray-700 font-bold">
              Media<span className="text-blue-600">Nina</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
