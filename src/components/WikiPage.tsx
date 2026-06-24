import { HelpCircle, Star, PhoneCall, ShieldCheck, Heart } from "lucide-react";
import { wikiArticles } from "../data/articles";
import { openAppImage } from "./ImageLightbox";

interface WikiPageProps {
  page: string;
}

export default function WikiPage({ page }: WikiPageProps) {
  // Check if we have the article in our new A-Z database
  const dynamicArticle = wikiArticles[page];
  if (dynamicArticle) {
    return (
      <div className="space-y-4 leading-relaxed animate-fade-in text-[14px]">
        {/* Header section style */}
        <div className="border-b border-[#a2a9b1] pb-1">
          <h1 className="text-2xl md:text-3xl font-serif font-normal" style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}>
            {dynamicArticle.title}
          </h1>
          <p className="text-xs text-gray-500 mt-1">Dari Ninapedia, ensiklopedia bebas beraliran akal sehat</p>
        </div>

        {/* Infobox if present */}
        {dynamicArticle.infobox && (
          <table className="float-right clear-right ml-6 mb-4 border border-[#a2a9b1] bg-[#f8f9fa] w-full sm:w-[260px] text-[12px] leading-normal border-spacing-0 border-collapse table-auto rounded-sm shadow-xs">
            <tbody>
              <tr>
                <th colSpan={2} className="text-center font-bold text-[1.15em] bg-[#eaecf0] py-1.5 px-2 border-b border-[#a2a9b1]">
                  {dynamicArticle.infobox.title}
                </th>
              </tr>
              {dynamicArticle.infobox.image && (
                <tr>
                  <td colSpan={2} className="text-center p-2 border-b border-[#a2a9b1]/30">
                    <img 
                      src={dynamicArticle.infobox.image} 
                      alt={dynamicArticle.infobox.title}
                      referrerPolicy="no-referrer"
                      className="mx-auto max-w-[180px] h-auto object-contain border border-gray-300 cursor-zoom-in hover:opacity-95 rounded-xs"
                      onClick={() => openAppImage && openAppImage(dynamicArticle.infobox!.image!)}
                    />
                    {dynamicArticle.infobox.imageCaption && (
                      <div className="text-[10px] text-gray-600 mt-1 align-middle leading-snug">
                        {dynamicArticle.infobox.imageCaption}
                      </div>
                    )}
                  </td>
                </tr>
              )}
              {dynamicArticle.infobox.data.map((row, idx) => (
                <tr key={idx} className="border-b border-[#a2a9b1]/20">
                  <th className="text-left py-1.5 pl-3 align-top font-bold text-[#202122] w-[35%]">
                    {row.label}
                  </th>
                  <td className="py-1.5 px-3 align-top text-gray-700">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Introduction text */}
        <p className="italic text-gray-500 text-xs mb-3">
          Artikel ini membahas mengenai <b>{dynamicArticle.title}</b>. Bagian dari indeks pencarian abjad A-Z Ninapedia.
        </p>

        {dynamicArticle.paragraphs.map((p, idx) => (
          <p key={idx} className="text-justify leading-relaxed whitespace-pre-wrap">
            {p}
          </p>
        ))}

        {/* Sections */}
        {dynamicArticle.sections && dynamicArticle.sections.map((sec, idx) => (
          <div key={idx} className="space-y-2 mt-6">
            <h3 className="text-lg font-serif font-semibold text-gray-800 border-b border-[#eaecf0] pb-1">
              {sec.title}
            </h3>
            <div className="text-justify leading-relaxed space-y-3 whitespace-pre-wrap">
              {sec.content}
            </div>
          </div>
        ))}

        <div className="border-t border-[#eaecf0] pt-4 mt-8 text-xs text-gray-500">
          Kategori: <span className="text-[#0645ad] hover:underline cursor-pointer">{dynamicArticle.category}</span> | Halaman Indeks A-Z Ninapedia
        </div>
      </div>
    );
  }
  if (page === "Tentang Ninapedia") {
    return (
      <div className="space-y-4 leading-relaxed animate-fade-in text-[14px]">
        <div className="border-b border-[#a2a9b1] pb-1">
          <h1 className="text-2xl md:text-3xl font-serif font-normal" style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}>
            Tentang Ninapedia
          </h1>
          <p className="text-xs text-gray-500 mt-1">Dari Ninapedia, ensiklopedia bebas berkekuatan komunitas</p>
        </div>

        <p>
          <b>Ninapedia</b> adalah sebuah proyek ensiklopedia multibahasa dalam jaringan yang bebas dan terbuka, yang dioperasikan atas prinsip kolaboratif sukarela oleh para penyumbang di dunia. Nama "Ninapedia" terinspirasi dari semangat ketelitian, dedikasi, serta kebebasan berpendapat ilmiah.
        </p>

        <h3 className="text-lg font-serif font-semibold text-gray-800 border-b border-[#eaecf0] pb-1 mt-6">Filosofi Utama</h3>
        <p>
          Siapa pun yang memiliki akses ke internet dapat menyunting artikel-artikel yang ada di Ninapedia. Pendekatan desentralistik kolaboratif ini memastikan bahwa informasi dapat tumbuh dengan sangat cepat, diperbarui secara seketika ketika ada penemuan atau peristiwa baru, dan bersumber dari sudut pandang netral yang berimbang.
        </p>

        <div className="bg-[#f8f9fa] border-l-4 border-[#3366cc] p-4 text-xs italic text-gray-700 my-4">
          "Pengetahuan sejati bukanlah apa yang disimpan sendiri, melainkan apa yang dibagikan secara bebas guna mengangkat akal sehat peradaban manusia."
        </div>

        <h3 className="text-lg font-serif font-semibold text-gray-800 border-b border-[#eaecf0] pb-1 mt-6">Bagaimana Anda Bisa Membantu?</h3>
        <p>
          Anda dapat berkontribusi dengan menyusun artikel baru, melakukan verifikasi artikel lama dengan rujukan terpercaya, memperbaiki tata bahasa atau kesalahan ketik (tipografi), serta menyumbangkan gambar representatif berkualitas tinggi.
        </p>
      </div>
    );
  }

  if (page === "Bantuan") {
    return (
      <div className="space-y-4 leading-relaxed animate-fade-in text-[14px]">
        <div className="border-b border-[#a2a9b1] pb-1 border-dotted">
          <h1 className="text-2xl md:text-3xl font-serif font-normal flex items-center gap-2" style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}>
            <HelpCircle className="w-7 h-7 text-[#3366cc]" />
            <span>Pusat Bantuan Ninapedia</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">Menemukan navigasi, panduan penyuntingan, dan pemecahan masalah</p>
        </div>

        <p>
          Apakah Anda baru di Ninapedia? Bagian ini dirancang untuk menuntun Anda mempelajari dasar-dasar penjelajahan dan kontribusi artikel ilmiah secara mandiri.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="border border-[#eaecf0] p-4 hover:border-[#3366cc] rounded-sm transition-colors bg-white">
            <h4 className="font-bold text-[#0645ad] mb-1">Cara Menyunting</h4>
            <p className="text-xs text-gray-600">Klik "Lihat sumber" atau gunakan "Bak pasir" untuk memahami pemformatan dasar teks cetak tebal, miring, dan pembuatan judul bagian.</p>
          </div>
          <div className="border border-[#eaecf0] p-4 hover:border-[#3366cc] rounded-sm transition-colors bg-white">
            <h4 className="font-bold text-[#0645ad] mb-1">Kebijakan Hak Cipta</h4>
            <p className="text-xs text-gray-600">Seluruh tulisan wajib didasarkan pada rujukan valid yang dapat diverifikasi secara ilmiah. Plagiarisme dilarang keras.</p>
          </div>
          <div className="border border-[#eaecf0] p-4 hover:border-[#3366cc] rounded-sm transition-colors bg-white">
            <h4 className="font-bold text-[#0645ad] mb-1">Mencari Informasi</h4>
            <p className="text-xs text-gray-600">Gunakan kolom telusur di sisi atas untuk mencari ribuan topik atau tokoh sains, budaya, politik, dan sejarah.</p>
          </div>
          <div className="border border-[#eaecf0] p-4 hover:border-[#3366cc] rounded-sm transition-colors bg-white">
            <h4 className="font-bold text-[#0645ad] mb-1">Hubungi Administrator</h4>
            <p className="text-xs text-gray-600">Jika Anda menemukan vandalisme, laporan palsu, atau memerlukan perlindungan artikel khusus dari serangan bot.</p>
          </div>
        </div>
      </div>
    );
  }

  if (page === "Pancapilar") {
    return (
      <div className="space-y-4 leading-relaxed animate-fade-in text-[14px]">
        <div className="border-b border-[#a2a9b1] pb-1">
          <h1 className="text-2xl md:text-3xl font-serif font-normal flex items-center gap-2" style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}>
            <ShieldCheck className="w-7 h-7 text-emerald-600" />
            <span>Pancapilar</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">Prinsip fundamental penyusunan ensiklopedia bebas</p>
        </div>

        <p className="italic text-gray-600">
          Seluruh aturan, pedoman, dan konvensi komunitas Ninapedia didasarkan pada lima pilar utama yang tak tergoyahkan:
        </p>

        <ol className="list-decimal pl-6 space-y-4 mt-4 font-normal text-gray-800">
          <li>
            <b>Ninapedia adalah sebuah ensiklopedia:</b> Ia merangkum pengetahuan tepercaya secara ringkas dan faktual. Ia bukan kamus, media promosi, ataupun tempat menulis opini subyektif.
          </li>
          <li>
            <b>Ninapedia ditulis dari sudut pandang netral (NPOV):</b> Kami berupaya menyajikan informasi tanpa bias partisipan, mewakili seluruh fakta yang diverifikasi dengan rujukan tepercaya secara seimbang.
          </li>
          <li>
            <b>Ninapedia berisi kandungan bebas:</b> Seluruh isi materi berlisensi di bawah lisensi terbuka Atribusi-BerbagiSerupa Creative Commons, sehingga bebas disebarluaskan demi mencerdaskan bangsa.
          </li>
          <li>
            <b>Penyunting harus saling menghormati:</b> Hargai perbedaan pendapat ilmiah, dilarang meluncurkan hinaan pribadi, dan pertahankan komunikasi yang profesional di ruang pembicaraan.
          </li>
          <li>
            <b>Ninapedia tidak memiliki aturan baku yang kaku:</b> Aturan dibuat untuk mendukung kelancaran kolaborasi, bukan menghambat kontribusi positif demi menyempurnakan nalar publik.
          </li>
        </ol>
      </div>
    );
  }

  if (page === "Hubungi kami") {
    return (
      <div className="space-y-4 leading-relaxed animate-fade-in text-[14px]">
        <div className="border-b border-[#a2a9b1] pb-1">
          <h1 className="text-2xl md:text-3xl font-serif font-normal flex items-center gap-2" style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}>
            <PhoneCall className="w-6 h-6 text-[#3366cc]" />
            <span>Hubungi Kami</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">Kontak resmi, surat-menyurat, serta koordinasi teknis</p>
        </div>

        <p>
          Apakah Anda memiliki keluhan, keperluan klarifikasi naskah, atau ingin bekerja sama secara formal dengan pengembang Ninapedia?
        </p>

        <div className="border border-[#eaecf0] bg-[#f8f9fa] p-4 rounded-sm space-y-2 mt-4 text-xs font-mono">
          <p><b>Surel Resmi:</b> kontak@ninapedia.org</p>
          <p><b>Alamat Koordinasi:</b> Graha Akal Sehat, Blok IV, Kebayoran Baru, Jakarta Selatan, DKI Jakarta</p>
          <p><b>Telepon Humas:</b> +62 (21) 500-NINA</p>
        </div>

        <h3 className="text-lg font-serif font-semibold text-gray-800 border-b border-[#eaecf0] pb-1 mt-6">Pertanyaan Terkait Artikel Tertentu</h3>
        <p className="text-gray-700">
          Silakan gunakan bilah tab <b>"Pembicaraan"</b> di bagian atas setiap artikel untuk mendiskusikan konten, ralat, atau pembaruan rujukan langsung bersama kontributor artikel terkait demi keterbukaan informasi.
        </p>
      </div>
    );
  }

  // Fallback / Unknown page
  return (
    <div className="p-6 text-center space-y-3">
      <h2 className="text-xl font-serif text-gray-700">Halaman Tidak Ditemukan</h2>
      <p className="text-xs text-gray-500">Halaman "{page}" sedang dalam proses penyusunan rujukan oleh komunitas.</p>
    </div>
  );
}
