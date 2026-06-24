import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Star, 
  HelpCircle, 
  Clock, 
  Image as ImageIcon, 
  Sparkles, 
  Flame, 
  Heart, 
  X,
  BookOpen,
  MessageSquare,
  Globe,
  Database,
  Quote,
  Compass,
  GraduationCap,
  Navigation,
  FileText,
  Workflow,
  Settings,
  AlertTriangle,
  Info
} from "lucide-react";

import { openAppImage } from "./ImageLightbox";

interface HalamanUtamaProps {
  onNavigate: (page: string) => void;
}

export default function HalamanUtama({ onNavigate }: HalamanUtamaProps) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Dynamic Date calculations for "Hari ini dalam sejarah"
  const today = new Date();
  const day = today.getDate();
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const month = monthNames[today.getMonth()];

  const sisterProjects = [
    {
      name: "Commons",
      desc: "Repositori media bebas",
      icon: <ImageIcon className="w-5 h-5 text-blue-600 shrink-0" />,
      link: "https://commons.wikimedia.org"
    },
    {
      name: "Ninakamus",
      desc: "Kamus multibahasa bebas",
      icon: <BookOpen className="w-5 h-5 text-green-600 shrink-0" />,
      link: "https://id.wiktionary.org"
    },
    {
      name: "Ninasumber",
      desc: "Naskah sumber bebas",
      icon: <FileText className="w-5 h-5 text-amber-600 shrink-0" />,
      link: "https://id.wikisource.org"
    },
    {
      name: "Ninabuku",
      desc: "Sumber buku bebas",
      icon: <BookOpen className="w-5 h-5 text-purple-600 shrink-0" />,
      link: "https://id.wikibooks.org"
    },
    {
      name: "Ninadata",
      desc: "Basis data terbuka",
      icon: <Database className="w-5 h-5 text-sky-600 shrink-0" />,
      link: "https://www.wikidata.org"
    },
    {
      name: "Ninakutip",
      desc: "Koleksi kutipan",
      icon: <Quote className="w-5 h-5 text-rose-600 shrink-0" />,
      link: "https://id.wikiquote.org"
    },
    {
      name: "Ninaspesies",
      desc: "Direktori spesies",
      icon: <Workflow className="w-5 h-5 text-emerald-600 shrink-0" />,
      link: "https://species.wikimedia.org"
    },
    {
      name: "Ninaversitas",
      desc: "Materi belajar",
      icon: <GraduationCap className="w-5 h-5 text-indigo-600 shrink-0" />,
      link: "https://id.wikiversity.org"
    },
    {
      name: "Ninawisata",
      desc: "Panduan perjalanan wisata",
      icon: <Navigation className="w-5 h-5 text-teal-600 shrink-0" />,
      link: "https://id.wikivoyage.org"
    },
    {
      name: "Ninaberita",
      desc: "Sumber berita bebas",
      icon: <FileText className="w-5 h-5 text-orange-600 shrink-0" />,
      link: "https://id.wikinews.org"
    },
    {
      name: "Meta-Nina",
      desc: "Koordinasi proyek Ninamedia",
      icon: <Settings className="w-5 h-5 text-neutral-600 shrink-0" />,
      link: "https://meta.wikimedia.org"
    },
    {
      name: "MediaNina",
      desc: "Perangkat lunak MediaNina",
      icon: <Workflow className="w-5 h-5 text-[#3c78cf] shrink-0" />,
      link: "https://www.mediawiki.org"
    },
    {
      name: "Inkubator",
      desc: "Situs untuk mempersiapkan proyek baru",
      icon: <Compass className="w-5 h-5 text-lime-600 shrink-0" />,
      link: "https://incubator.wikimedia.org"
    },
    {
      name: "Ninamania",
      desc: "Konferensi internasional tahunan",
      icon: <Globe className="w-5 h-5 text-cyan-600 shrink-0" />,
      link: "https://wikimania.wikimedia.org"
    },
    {
      name: "Ninamedia Foundation",
      desc: "Organisasi yang menaungi proyek-proyek di atas",
      icon: <Globe className="w-5 h-5 text-blue-800 shrink-0" />,
      link: "https://wikimediafoundation.org"
    },
    {
      name: "Ninamedia Indonesia",
      desc: "Afiliasi Ninamedia Foundation di Indonesia",
      icon: <Heart className="w-5 h-5 text-red-600 shrink-0" />,
      link: "https://wikimedia.or.id"
    }
  ];

  return (
    <div className="space-y-5 font-sans text-[13px] text-[#202122] leading-relaxed pb-16">
      
      {/* Top Banner Social Media */}
      {isBannerVisible && (
        <div className="bg-[#f8f9fa] border border-[#a2a9b1] px-4 py-2 text-xs flex items-center justify-between text-gray-700 rounded-sm">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-1.5">
            <span>Ikuti Ninapedia bahasa Indonesia di</span>
            <a href="https://t.me/WikipediaID" className="text-[#0645ad] hover:underline inline-flex items-center gap-0.5">Telegram</a>,
            <a href="https://facebook.com/wikipedia.id" className="text-[#0645ad] hover:underline inline-flex items-center gap-0.5">Facebook</a>,
            <a href="https://twitter.com/wikipedia_id" className="text-[#0645ad] hover:underline inline-flex items-center gap-0.5">Twitter/X</a>,
            <a href="https://instagram.com/gawairakyat" className="text-[#0645ad] hover:underline inline-flex items-center gap-0.5">Instagram</a>,
            <span>dan</span>
            <a href="https://discord.gg/wikipedia-id" className="text-[#0645ad] hover:underline inline-flex items-center gap-0.5">Discord</a>
          </div>
          <button 
            onClick={() => setIsBannerVisible(false)}
            className="text-gray-400 hover:text-gray-700 border-none bg-none p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Welcome Banner */}
      <div className="border border-[#a2a9b1] bg-white p-5 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="hidden sm:block shrink-0">
            {/* Wikipedia-esque logo badge */}
            <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center bg-[#f8f9fa] text-gray-400 select-none overflow-hidden">
              <motion.svg 
                width="40" 
                height="40" 
                viewBox="0 0 100 100" 
                className="text-gray-400 origin-center"
                animate={{
                  rotate: 360
                }}
                transition={{
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear"
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 360 + 90,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
              >
                 <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                 <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                 <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2"/>
                 <rect x="35" y="5" width="30" height="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              </motion.svg>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-serif font-normal text-[#202122]" style={{ fontFamily: "'Linux Libertine','Georgia','Times',serif" }}>
              Selamat datang di <span className="font-bold text-[#3366cc]">Ninapedia</span>,
            </h1>
            <p className="text-[13px] text-gray-600">
              sebuah <span className="text-[#0645ad] hover:underline cursor-pointer" onClick={() => onNavigate("Tentang Ninapedia")}>ensiklopedia bebas</span> yang <span className="text-[#0645ad] hover:underline cursor-pointer" onClick={() => onNavigate("Bak pasir")}>bisa disunting oleh siapa saja</span>.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium pt-1 text-gray-500">
              <span className="text-[#0645ad] hover:underline cursor-pointer">Biografi</span> &bull;
              <span className="text-[#0645ad] hover:underline cursor-pointer">Geografi</span> &bull;
              <span className="text-[#0645ad] hover:underline cursor-pointer">Ilmu</span> &bull;
              <span className="text-[#0645ad] hover:underline cursor-pointer">Sejarah</span> &bull;
              <span className="text-[#0645ad] hover:underline cursor-pointer">Kimia</span> &bull;
              <span className="text-[#0645ad] hover:underline cursor-pointer">Teknologi</span> &bull;
              <span className="text-[#0645ad] hover:underline cursor-pointer">Komunitas</span> &bull;
              <span className="text-[#0645ad] hover:underline cursor-pointer">Seni</span> &bull;
              <span className="text-[#0645ad] hover:underline cursor-pointer font-bold text-gray-700">Semua portal</span>
            </div>
          </div>
        </div>
        <div className="text-center md:text-right shrink-0 border-t md:border-t-0 md:border-l border-[#eaecf0] pt-3 md:pt-0 pl-0 md:pl-6 space-y-1 text-xs text-gray-500">
          <div><b className="text-gray-800 text-sm">45</b> artikel dalam <span className="text-[#0645ad] hover:underline cursor-pointer">bahasa Indonesia</span></div>
          <div><b className="text-gray-800 text-sm">1</b> penyunting aktif</div>
        </div>
      </div>

      {/* Main Container: 2-Column responsive grid matching Wikipedia */}
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-5 items-stretch">
        
        {/* LEFT COLUMN: Featured Article, Current Events, Did you know */}
        <div className="flex flex-col gap-5 h-full">
          
          {/* Section: Artikel Pilihan */}
          <div className="border border-[#a2a9b1] rounded-sm bg-white overflow-hidden">
            <div className="bg-[#eaecf0] border-b border-[#a2a9b1] px-4 py-2 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center bg-blue-100 rounded-full border border-blue-300">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              </div>
              <span className="font-bold text-gray-800 text-sm">Artikel pilihan</span>
            </div>
            
            <div className="p-4 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <div className="shrink-0 flex items-center justify-center bg-[#f8f9fa] border border-gray-200 p-1 rounded-sm shadow-xs self-center sm:self-start">
                  {/* Piagam Jakarta image from Wikipedia */}
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Naskah_Asli_Piagam_Jakarta.jpg/250px-Naskah_Asli_Piagam_Jakarta.jpg" 
                    alt="Piagam Jakarta" 
                    referrerPolicy="no-referrer"
                    className="w-[100px] sm:w-[115px] h-auto object-contain border border-gray-300 cursor-zoom-in hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                    onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Naskah_Asli_Piagam_Jakarta.jpg/250px-Naskah_Asli_Piagam_Jakarta.jpg")}
                  />
                </div>
                <div className="space-y-2">
                  <p>
                    <b className="text-[#0645ad] hover:underline cursor-pointer" onClick={() => onNavigate("Piagam Jakarta")}>Piagam Jakarta</b> adalah rancangan Pembukaan <span className="text-[#0645ad] hover:underline">Undang-Undang Dasar Negara Republik Indonesia Tahun 1945</span> (UUD 1945). Rancangan ini dirumuskan oleh Panitia Sembilan Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan (BPUPK) di Jakarta pada tanggal 22 Juni 1945. Piagam ini mengandung lima sila yang menjadi bagian dari ideologi <span className="text-[#0645ad] hover:underline">Pancasila</span>, tetapi pada sila pertama juga tercantum frasa "dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya".
                  </p>
                  <p>
                    Frasa ini, yang juga dikenal dengan sebutan "tujuh kata", pada akhirnya dihapus dari Pembukaan UUD 1945 pada tanggal 18 Agustus 1945 oleh <span className="text-[#0645ad] hover:underline">Panitia Persiapan Kemerdekaan Indonesia</span>. Pada 5 Juli 1959, Presiden <span className="text-[#0645ad] hover:underline">Soekarno</span> mengumumkan dalam Dekret Presiden bahwa Piagam Jakarta "menjiwai" UUD 1945 dan "merupakan suatu rangkaian kesatuan dengan konstitusi tersebut". (<span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Piagam Jakarta")}>Selengkapnya...</span>)
                  </p>
                </div>
              </div>
              
              <div className="text-[12px] text-gray-500 pt-1 border-t border-[#eaecf0]">
                Artikel pilihan sebelumnya: <span className="text-[#0645ad] hover:underline cursor-pointer">Al-Mukhtar ats-Tsaqafi</span> &bull; <span className="text-[#0645ad] hover:underline cursor-pointer">Kontroversi upacara adat Tionghoa</span> &bull; <span className="text-[#0645ad] hover:underline cursor-pointer">Pengepungan Bukhara</span>
              </div>
              
              <div className="text-xs pt-1 flex justify-between text-gray-600 font-bold border-t border-dashed border-[#eaecf0]">
                <span className="text-[#0645ad] hover:underline cursor-pointer">Arsip</span>
                <span className="text-gray-400">&bull;</span>
                <span className="text-[#0645ad] hover:underline cursor-pointer">Artikel pilihan lainnya</span>
                <span className="text-gray-400">(</span>
                <span className="text-[#0645ad] hover:underline cursor-pointer font-normal">Daftar</span>
                <span className="text-gray-400">&mdash;</span>
                <span className="text-[#0645ad] hover:underline cursor-pointer font-normal" onClick={() => onNavigate("Rocky Gerung")}>Sembarang</span>
                <span className="text-gray-400">)</span>
              </div>
            </div>
          </div>

          {/* Section: Peristiwa Terkini */}
          <div className="border border-[#a2a9b1] rounded-sm bg-white overflow-hidden">
            <div className="bg-[#eaecf0] border-b border-[#a2a9b1] px-4 py-2 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center bg-blue-100 rounded-full border border-blue-300">
                <Flame className="w-3.5 h-3.5 text-blue-600 fill-blue-100" />
              </div>
              <span className="font-bold text-gray-800 text-sm">Peristiwa terkini</span>
            </div>
            
            <div className="p-4 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-1 space-y-2">
                  <ul className="list-disc pl-5 space-y-2 text-[#202122]">
                    <li>
                      <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Abelardo de la Espriella")}>Abelardo de la Espriella terpilih</span> sebagai Presiden Kolombia mengungguli Iván Cepeda.
                    </li>
                    <li>
                      <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Nusrat al-Islam")}>Nusrat al-Islam</span> meluncurkan <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Serangan Bandar Udara Niamey")}>serangan</span> di Bandar Udara Internasional Diori Hamani, Niamey menewaskan 35 orang.
                    </li>
                    <li>
                      <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Chelsie Monica Ignesias Sihite")}>Chelsie Monica</span> (<i>gambar</i>) menjadi pecatur Indonesia pertama yang berhasil mengalahkan Magnus Carlsen di Kejuaraan Dunia Catur Beregu.
                    </li>
                    <li>
                      <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Gempa bumi")}>Gempa bumi</span> yang berkekuatan 6.7 M<sub>w</sub> mengguncang Kabupaten Sigi, Sulawesi Tengah, menewaskan 3 orang dan 111 lainnya luka-luka.
                    </li>
                    <li>
                      <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Marius Borg Høiby")}>Marius Borg Høiby</span> anak angkat Putra Mahkota Haakon, dijatuhi hukuman empat tahun penjara karena kekerasan seksual.
                    </li>
                  </ul>
                </div>
                <div className="w-[110px] shrink-0 text-center space-y-1 mx-auto sm:mx-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chelsie_Monica_Ignesias_Sihite.jpg/120px-Chelsie_Monica_Ignesias_Sihite.jpg" 
                    alt="Chelsie Monica placeholder" 
                    referrerPolicy="no-referrer"
                    className="w-full h-[130px] object-cover border border-gray-300 rounded-sm cursor-zoom-in hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                    onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chelsie_Monica_Ignesias_Sihite.jpg/120px-Chelsie_Monica_Ignesias_Sihite.jpg")}
                  />
                  <div className="text-[11px] text-gray-500 leading-tight">Chelsie Monica</div>
                </div>
              </div>

              <div className="text-xs space-y-1 pt-2 border-t border-[#eaecf0] text-gray-600">
                <div>
                  <b>Sedang berlangsung</b>: <span className="text-[#0645ad] hover:underline">Wabah Ebola</span> &bull; <span className="text-[#0645ad] hover:underline">Piala Dunia FIFA</span> &bull; <span className="text-[#0645ad] hover:underline">Perang Iran 2026</span> &bull; <span className="text-[#0645ad] hover:underline">Perang Lebanon 2026</span> &bull; <span className="text-[#0645ad] hover:underline">Perang Sudan</span> &bull; <span className="text-[#0645ad] hover:underline">Invasi Ukraina oleh Rusia</span>
                </div>
                <div className="pt-1">
                  <b>Kematian terkini</b>: <span className="text-[#0645ad] hover:underline">Francisco Guterres</span> &bull; <span className="text-[#0645ad] hover:underline">Icuk Baros</span> &bull; <span className="text-[#0645ad] hover:underline">Igor Protti</span> &bull; <span className="text-[#0645ad] hover:underline">François Englert</span> &bull; <span className="text-[#0645ad] hover:underline">Achmad Sutjipto</span> &bull; <span className="text-[#0645ad] hover:underline">Daveigh Chase</span>
                </div>
              </div>

              <div className="text-right text-xs pt-1 border-t border-dashed border-[#eaecf0]">
                <a href="#" className="text-[#0645ad] hover:underline font-bold">Peristiwa terkini lainnya...</a>
              </div>
            </div>
          </div>

          {/* Section: Tahukah Anda */}
          <div className="border border-[#a2a9b1] rounded-sm bg-white overflow-hidden flex-1 flex flex-col">
            <div className="bg-[#eaecf0] border-b border-[#a2a9b1] px-4 py-2 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center bg-blue-100 rounded-full border border-blue-300">
                <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
              </div>
              <span className="font-bold text-gray-800 text-sm">Tahukah Anda</span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-stretch items-start">
                <div className="flex-1 space-y-2">
                  <ul className="list-disc pl-5 space-y-2.5 text-[#202122] text-[13px] leading-relaxed">
                    <li>
                      "... bahwa urutan <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Aksara Jawa")}>aksara Jawa</span> (<i>gambar</i>) yang disusun dapat membentuk sebuah puisi yang menceritakan tentang dua utusan <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Aji Saka")}>Aji Saka</span>?"
                    </li>
                    <li>
                      "... bahwa <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Pele")}>Pele</span> menandatangani kontrak sebagai pemain profesional dengan klub <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Santos")}>Santos</span> pada usia 15 tahun, dan 10 bulan kemudian dipanggil untuk bergabung dengan tim nasional <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Brasil")}>Brasil</span>? Ia ikut bertanding dalam empat <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Piala Dunia")}>Piala Dunia</span> dan mencetak lebih dari 1000 gol selama kariernya hingga ia pensiun pada <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("1977")}>1977</span>."
                    </li>
                    <li>
                      "... bahwa pada masa <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Perang Saudara AS")}>Perang Saudara AS</span>, 200.000 orang <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("kulit hitam")}>kulit hitam</span> berdinas di Tentara Utara (Union), 38.000 mengorbankan nyawanya, 22 orang memperoleh <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Medali Kehormatan")}>Medali Kehormatan</span>?"
                    </li>
                    <li>
                      "... bahwa pada tahun 1678-1679, Pasukan Bugis di bawah pimpinan <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Arung Palakka")}>Arung Palakka</span> (<span className="text-[#0645ad] hover:underline cursor-pointer italic" onClick={(e) => { e.stopPropagation(); openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Arung_Palakka_-_The_conquest_of_Macassar.png/120px-Arung_Palakka_-_The_conquest_of_Macassar.png"); }}>gambar</span>) termasuk di antara mereka yang bersekutu dengan VOC untuk memadamkan <span className="text-[#0645ad] hover:underline">Pemberontakan Trunajaya</span> di Jawa?"
                    </li>
                    <li>
                      "... bahwa sepertiga Presiden Indonesia mempunyai gelar akademik? Keduanya adalah <span className="text-[#0645ad] hover:underline">BJ Habibie</span> dan <span className="text-[#0645ad] hover:underline">Susilo Bambang Yudhoyono</span>, sementara itu, dari 43 orang Presiden AS hanya <span className="text-[#0645ad] hover:underline">Woodrow Wilson</span> yang mempunyai gelar doktor akademik saja."
                    </li>
                    <li>
                      "... bahwa nama asli keluarga kerajaan <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Britania Raya")}>Britania Raya</span> yang sekarang adalah Sachsen-Coburg-Gotha? Nama ini diganti pada masa Perang Dunia I karena berbau Jerman. Salah seorang stafnya mengusulkan nama Windsor. Pada saat yang sama, keluarga Battenberg mengganti nama mereka menjadi <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Mountbatten")}>Mountbatten</span>."
                    </li>
                    <li>
                      "... bahwa pada <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("28 Juli")}>28 Juli</span> <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("1945")}>1945</span>, sebuah <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("pesawat pengebom")}>pesawat pengebom</span> Angkatan Udara AS menabrak lantai ke-78 <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Empire State Building")}>Empire State Building</span> (<i>gambar</i>) di <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("New York City")}>New York City</span> dan menewaskan 14 orang?"
                    </li>
                    <li>
                      "... bahwa setiap satuan pada <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Skala Richter")}>Skala Richter</span> sama dengan 32 kali satuan sebelumnya?"
                    </li>
                    <li>
                      "... bahwa batas kecepatan kendaraan pertama kali diperkenalkan di <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Inggris")}>Inggris</span> pada <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("1903")}>1903</span>? Batas yang ditetapkan adalah 20 mil atau 32,19 km per jam."
                    </li>
                    <li>
                      "... bahwa <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("jam tangan")}>jam tangan</span> yang pertama di dunia diciptakan oleh <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Louis Cartier")}>Louis Cartier</span> pada <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("1904")}>1904</span>?"
                    </li>
                    <li>
                      "... bahwa <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Bahasa Lengilu")}>Bahasa Lengilu</span> mempunyai penutur hanya 4 orang di <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Kalimantan Timur")}>Kalimantan Timur</span> dan menjadi bahasa yang paling terancam punah di <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Indonesia")}>Indonesia</span>."
                    </li>
                  </ul>
                </div>
                <div className="w-[110px] shrink-0 flex flex-col justify-between text-center mx-auto sm:mx-0 py-1 gap-4">
                  <div className="space-y-1">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Hanacaraka_legend_1.png/250px-Hanacaraka_legend_1.png" 
                      alt="Aksara Jawa" 
                      referrerPolicy="no-referrer"
                      className="w-full h-[100px] object-cover border border-gray-300 rounded-sm cursor-zoom-in hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                      onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Hanacaraka_legend_1.png/250px-Hanacaraka_legend_1.png")}
                    />
                    <div className="text-[10px] text-gray-500 leading-tight">
                      Bait pertama <span className="text-[#0645ad] hover:underline cursor-pointer" onClick={() => onNavigate("Aksara Jawa")}>aksara Jawa</span>
                    </div>
                  </div>
                  <div className="space-y-1 border-t border-gray-100 pt-3">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Arung_Palakka_-_The_conquest_of_Macassar.png/120px-Arung_Palakka_-_The_conquest_of_Macassar.png" 
                      alt="Arung Palakka" 
                      referrerPolicy="no-referrer"
                      className="w-full h-[100px] object-cover border border-gray-300 rounded-sm cursor-zoom-in hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                      onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Arung_Palakka_-_The_conquest_of_Macassar.png/120px-Arung_Palakka_-_The_conquest_of_Macassar.png")}
                    />
                    <div className="text-[10px] text-gray-500 leading-tight">
                      Lukisan <span className="text-[#0645ad] hover:underline cursor-pointer" onClick={() => onNavigate("Arung Palakka")}>Arung Palakka</span>
                    </div>
                  </div>
                  <div className="space-y-1 border-t border-gray-100 pt-3">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Manhattan_at_Dusk_by_slonecker.jpg/120px-Manhattan_at_Dusk_by_slonecker.jpg" 
                      alt="Empire State Building" 
                      referrerPolicy="no-referrer"
                      className="w-full h-[100px] object-cover border border-gray-300 rounded-sm cursor-zoom-in hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                      onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Manhattan_at_Dusk_by_slonecker.jpg/120px-Manhattan_at_Dusk_by_slonecker.jpg")}
                    />
                    <div className="text-[10px] text-gray-500 leading-tight">
                      <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Empire State Building")}>Empire State Building</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs pt-1 border-t border-dashed border-[#eaecf0] flex justify-between font-bold">
                <span className="text-[#0645ad] hover:underline cursor-pointer">Arsip</span>
                <span className="text-[#0645ad] hover:underline cursor-pointer" onClick={() => onNavigate("Bak pasir")}>Memulai artikel baru</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Collaboration Challenge, History, Picture of the day */}
        <div className="space-y-5">
          
          {/* Section: Artikel Terbaru */}
          <div className="border border-[#a2a9b1] rounded-sm bg-white overflow-hidden shadow-xs">
            <div className="bg-[#eaecf0] border-b border-[#a2a9b1] px-4 py-2 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center bg-green-100 rounded-full border border-green-300">
                <BookOpen className="w-3.5 h-3.5 text-green-700" />
              </div>
              <span className="font-bold text-gray-800 text-sm">Artikel terbaru</span>
            </div>

            <div className="p-4 space-y-3.5">
              <p className="text-xs text-gray-600 leading-normal">
                Daftar rintisan artikel berkualitas tinggi yang baru ditambahkan ke dalam indeks nalar ilmiah Ninapedia:
              </p>

              <div className="space-y-3">
                {/* Item 1: Rocky Gerung */}
                <div className="flex gap-3 items-start p-1.5 hover:bg-gray-50 rounded transition-colors group">
                  <div className="w-11 h-11 shrink-0 border border-gray-200 rounded-sm bg-[#f8f9fa] overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg/250px-Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg"
                      alt="Rocky Gerung"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover cursor-zoom-in hover:opacity-90"
                      onClick={(e) => {
                        e.stopPropagation();
                        openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg/250px-Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg");
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      onClick={() => onNavigate("Rocky Gerung")}
                      className="font-bold text-xs text-[#0645ad] hover:underline cursor-pointer leading-tight"
                    >
                      Rocky Gerung
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                      Seorang akademikus, filsuf kontemporer, budayawan, dan intelektual publik terkemuka Indonesia yang dikenal luas karena pemikiran kritisnya.
                    </p>
                  </div>
                </div>

                {/* Item 2: Chelsie Monica */}
                <div className="flex gap-3 items-start p-1.5 hover:bg-gray-50 rounded transition-colors group">
                  <div className="w-11 h-11 shrink-0 border border-gray-200 rounded-sm bg-[#f8f9fa] overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chelsie_Monica_Ignesias_Sihite.jpg/120px-Chelsie_Monica_Ignesias_Sihite.jpg"
                      alt="Chelsie Monica"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover cursor-zoom-in hover:opacity-90"
                      onClick={(e) => {
                        e.stopPropagation();
                        openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chelsie_Monica_Ignesias_Sihite.jpg/120px-Chelsie_Monica_Ignesias_Sihite.jpg");
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      onClick={() => onNavigate("Chelsie Monica")}
                      className="font-bold text-xs text-[#0645ad] hover:underline cursor-pointer leading-tight"
                    >
                      Chelsie Monica
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                      Pecatur berprestasi Indonesia penyandang gelar Woman International Master (WIM) dengan reputasi tanding gemilang di ajang SEA Games dan kejuaraan tingkat dunia.
                    </p>
                  </div>
                </div>

                {/* Item 3: Syarifuddin Prawiranegara */}
                <div className="flex gap-3 items-start p-1.5 hover:bg-gray-50 rounded transition-colors group">
                  <div className="w-11 h-11 shrink-0 border border-gray-200 rounded-sm bg-[#f8f9fa] overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Syafruddin_Prawiranegara%2C_minister_van_Financi%C3%ABn_%28Menteri_Keuangan%29_in_het_kabin%2C_Bestanddeelnr_11876_%28cropped%29.jpg/250px-Syafruddin_Prawiranegara%2C_minister_van_Financi%C3%ABn_%28Menteri_Keuangan%29_in_het_kabin%2C_Bestanddeelnr_11876_%28cropped%29.jpg"
                      alt="Syarifuddin Prawiranegara"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover cursor-zoom-in hover:opacity-90"
                      onClick={(e) => {
                        e.stopPropagation();
                        openAppImage("https://upload.wikimedia.org/wikipedia/commons/2/22/Sjafruddin_Prawiranegara.jpg");
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      onClick={() => onNavigate("Syarifuddin Prawiranegara")}
                      className="font-bold text-xs text-[#0645ad] hover:underline cursor-pointer leading-tight"
                    >
                      Syarifuddin Prawiranegara
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                      Negarawan agung, ekonom kawakan, dan Ketua Pemerintah Darurat Republik Indonesia (PDRI) tahun 1948 penyelamat kelangsungan kedaulatan RI.
                    </p>
                  </div>
                </div>

                {/* Item 4: Mohammad Natsir */}
                <div className="flex gap-3 items-start p-1.5 hover:bg-gray-50 rounded transition-colors group">
                  <div className="w-11 h-11 shrink-0 border border-gray-200 rounded-sm bg-[#f8f9fa] overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Mohammad_Natsir_2011_Indonesia_stamp.jpg"
                      alt="Mohammad Natsir"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover cursor-zoom-in hover:opacity-90"
                      onClick={(e) => {
                        e.stopPropagation();
                        openAppImage("https://upload.wikimedia.org/wikipedia/commons/9/91/Mohammad_Natsir_2011_Indonesia_stamp.jpg");
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      onClick={() => onNavigate("Mohammad Natsir")}
                      className="font-bold text-xs text-[#0645ad] hover:underline cursor-pointer leading-tight"
                    >
                      Mohammad Natsir
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                      Perdana Menteri Indonesia kelima, pemimpin kharismatik Masyumi, dan pembuat sejarah lewat Mosi Integral Natsir 1950 yang memulihkan kesatuan NKRI.
                    </p>
                  </div>
                </div>

                {/* Item 5: Filsafat */}
                <div className="flex gap-3 items-start p-1.5 hover:bg-gray-50 rounded transition-colors group">
                  <div className="w-11 h-11 shrink-0 border border-gray-200 rounded-sm bg-[#f8f9fa] overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Le_Penseur_by_Rodin_%28Kunsthalle_Bielefeld%29_2014-04-10.JPG/330px-Le_Penseur_by_Rodin_%28Kunsthalle_Bielefeld%29_2014-04-10.JPG"
                      alt="Filsafat"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover cursor-zoom-in hover:opacity-90"
                      onClick={(e) => {
                        e.stopPropagation();
                        openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Le_Penseur_by_Rodin_%28Kunsthalle_Bielefeld%29_2014-04-10.JPG/330px-Le_Penseur_by_Rodin_%28Kunsthalle_Bielefeld%29_2014-04-10.JPG");
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      onClick={() => onNavigate("Filsafat")}
                      className="font-bold text-xs text-[#0645ad] hover:underline cursor-pointer leading-tight"
                    >
                      Filsafat
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                      Kajian sistematis mengenai eksistensi pengetahuan, nilai moralitas, penalaran logis, dan pembetulan sesat pikir demi melatih nalar yang jernih.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-right text-xs pt-2 border-t border-dashed border-[#eaecf0]">
                <button 
                  onClick={() => onNavigate("Tentang Ninapedia")}
                  className="text-[#0645ad] hover:underline font-bold bg-transparent border-none p-0 cursor-pointer text-xs"
                >
                  Selengkapnya tentang indeks kami...
                </button>
              </div>
            </div>
          </div>

          {/* Section: Tantangan Kolaborasi */}
          <div className="border border-[#a2a9b1] rounded-sm bg-white overflow-hidden">
            <div className="bg-[#eaecf0] border-b border-[#a2a9b1] px-4 py-2 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center bg-orange-100 rounded-full border border-orange-300 animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <span className="font-bold text-gray-800 text-sm">Tantangan kolaborasi</span>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-600">
                <Heart className="w-4 h-4 fill-red-600" />
                <span>Kolaborasi artikel baru</span>
              </div>
              <p className="text-xs text-gray-600 leading-normal">
                Ninapedia membutuhkan artikel-artikel berikut. Mari bersama-sama merintisnya pada <b>Juni 2026</b>.
              </p>

              <div className="bg-[#f8f9fa] border border-gray-200 p-2.5 rounded-sm space-y-2">
                <h4 className="font-bold text-[11px] text-gray-600 uppercase tracking-wider">Tantangan Kolaborasi</h4>
                <div className="text-[11.5px] leading-relaxed flex flex-wrap gap-1.5 text-[#0645ad]">
                  <span className="hover:underline cursor-pointer">Grup Santana (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Biara Mar Elias (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Batu Portland (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Gopher kantung dataran (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Tikus tanah cape (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Seni rupa tentara salib (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Resimen Kaki ke-95 (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Tata cara berperang (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Denver Museum (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Glosarium dinosaurus (en)</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-gray-600">
                <p className="font-bold text-[#202122]">Hasil kolaborasi terbaru:</p>
                <div className="flex flex-wrap gap-1 text-[#0645ad] text-[11.5px]">
                  <span className="hover:underline cursor-pointer">Huguccio (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Pertempuran Biara (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Dispersi samudra (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Zhanghenglong (en)</span> &bull;
                  <span className="hover:underline cursor-pointer">Neocallimastigomycota (en)</span>
                </div>
              </div>

              <div className="text-xs pt-1 border-t border-dashed border-[#eaecf0] text-gray-500 font-bold flex flex-wrap justify-between">
                <span className="text-[#0645ad] hover:underline cursor-pointer" onClick={() => onNavigate("Bantuan")}>Panduan menerjemahkan artikel</span>
                <span className="text-[#0645ad] hover:underline cursor-pointer">Arsip halaman</span>
              </div>
            </div>
          </div>

          {/* Section: Hari Ini Dalam Sejarah */}
          <div className="border border-[#a2a9b1] rounded-sm bg-white overflow-hidden">
            <div className="bg-[#eaecf0] border-b border-[#a2a9b1] px-4 py-2 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center bg-violet-100 rounded-full border border-violet-300">
                <Clock className="w-3.5 h-3.5 text-violet-700" />
              </div>
              <span className="font-bold text-gray-800 text-sm">Hari ini dalam sejarah</span>
            </div>

            <div className="p-4 space-y-4">
              <div className="font-bold border-b border-[#eaecf0] pb-1.5 text-[#202122] text-xs">
                {day} {month}: <span className="text-[#0645ad] hover:underline">Hari Janda Internasional</span>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-[#202122]">
                <li>
                  <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("1596")}>1596</span> &mdash; Ekspedisi Belanda pertama yang dipimpin oleh <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Cornelis de Houtman")}>Cornelis de Houtman</span> tiba di Banten, memulai kontak awal kolonialisme Belanda di Nusantara.
                </li>
                <li>
                  <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("1894")}>1894</span> &mdash; <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Komite Olimpiade Internasional")}>Komite Olimpiade Internasional</span> didirikan di Sorbonne, Paris, atas prakarsa Pierre de Coubertin.
                </li>
                <li>
                  <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("1993")}>1993</span> &mdash; Matematikawan Andrew Wiles mempresentasikan pembuktian atas <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Teorema Terakhir Fermat")}>Teorema Terakhir Fermat</span> di Universitas Cambridge.
                </li>
                <li>
                  <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("2016")}>2016</span> &mdash; Britania Raya mengadakan <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Referendum Brexit")}>referendum Brexit</span> yang menghasilkan keputusan bersejarah untuk keluar dari Uni Eropa.
                </li>
                <li>
                  <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("2018")}>2018</span> &mdash; Penyelamatan <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate("Gua Tham Luang")}>gua Tham Luang</span> dimulai setelah dua belas anggota tim sepak bola remaja dan asisten pelatih mereka terjebak.
                </li>
              </ul>

              <div className="text-xs space-y-1 pt-2 border-t border-[#eaecf0] text-gray-500">
                <div>
                  Tanggal lain: <span className="text-[#0645ad] hover:underline cursor-pointer" onClick={() => onNavigate(`${(day - 1 + 30) % 30 || 30} ${month}`)}>{(day - 1 + 30) % 30 || 30} {month}</span> &bull; <span className="text-[#0645ad] hover:underline cursor-pointer font-bold" onClick={() => onNavigate(`${day} ${month}`)}>{day} {month}</span> &bull; <span className="text-[#0645ad] hover:underline cursor-pointer" onClick={() => onNavigate(`${(day + 1) % 30 || 1} ${month}`)}>{(day + 1) % 30 || 1} {month}</span>
                </div>
              </div>

              <div className="text-xs pt-1 border-t border-dashed border-[#eaecf0] flex justify-between font-bold">
                <span className="text-[#0645ad] hover:underline cursor-pointer">Kirim via surel</span>
                <span className="text-gray-400">&bull;</span>
                <span className="text-[#0645ad] hover:underline cursor-pointer">Daftar tanggal</span>
                <span className="text-gray-400">&bull;</span>
                <span className="text-[#0645ad] hover:underline cursor-pointer">Ulang tahun</span>
              </div>
            </div>
          </div>

          {/* Section: Gambar Pilihan */}
          <div className="border border-[#a2a9b1] rounded-sm bg-white overflow-hidden">
            <div className="bg-[#eaecf0] border-b border-[#a2a9b1] px-4 py-2 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center bg-emerald-100 rounded-full border border-emerald-300">
                <ImageIcon className="w-3.5 h-3.5 text-emerald-700" />
              </div>
              <span className="font-bold text-gray-800 text-sm">Gambar pilihan</span>
            </div>

            <div className="p-4 space-y-3.5 text-center">
              <div className="border border-gray-200 p-1.5 rounded-sm bg-[#f8f9fa] inline-block w-full">
                {/* Image of the Banna children on stilts as seen in the users' wiki screenshot */}
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ethiopia_Banna_tribe_kids.jpg/500px-Ethiopia_Banna_tribe_kids.jpg" 
                  alt="Anak-anak Suku Banna di Ethiopia bermain egrang" 
                  referrerPolicy="no-referrer"
                  className="mx-auto rounded-sm border border-gray-300 max-h-[220px] object-cover w-full cursor-zoom-in hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                  onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ethiopia_Banna_tribe_kids.jpg/500px-Ethiopia_Banna_tribe_kids.jpg")}
                />
              </div>
              
              <p className="text-xs text-gray-700 text-justify leading-relaxed">
                Anak-anak Suku Banna di Ethiopia dengan lukisan tubuh tradisional sedang bermain menggunakan egrang kayu. Aktivitas ini mencerminkan ekspresi budaya dan permainan tradisional yang masih lestari.
              </p>

              <div className="text-[11px] text-gray-500 space-y-0.5 text-left bg-gray-50 p-2 rounded-sm border border-gray-200">
                <div><b>Oleh:</b> WAVRIK</div>
                <div><b>Lisensi:</b> <span className="text-[#0645ad] hover:underline cursor-pointer">CC BY-SA 4.0</span></div>
              </div>

              <div className="text-xs pt-1 border-t border-dashed border-[#eaecf0] flex flex-wrap justify-between font-bold">
                <span className="text-[#0645ad] hover:underline cursor-pointer">Arsip Gambar Pilihan</span>
                <span className="text-gray-400">&bull;</span>
                <span className="text-[#0645ad] hover:underline cursor-pointer font-normal">Kalkulator mekanis Brunsviga</span>
                <span className="text-gray-400">&bull;</span>
                <span className="text-[#0645ad] hover:underline cursor-pointer">Lainnya</span>
              </div>
            </div>
          </div>

          {/* Section: Unduh Ninapedia App */}
          <div className="border border-[#a2a9b1] rounded-sm bg-[#f8f9fa] p-4 flex gap-4">
            <div className="shrink-0">
              <div className="w-14 h-14 bg-white border border-gray-300 rounded-xl shadow-md flex items-center justify-center relative overflow-hidden select-none">
                {/* Wikipedia-esque globe icon/letter as app icon */}
                <span className="font-serif text-3xl font-bold text-[#202122] tracking-tighter" style={{ fontFamily: "Georgia, serif" }}>N</span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#3366cc]"></div>
              </div>
            </div>
            
            <div className="space-y-3 flex-1">
              <div>
                <h3 className="font-bold text-[#0645ad] hover:underline cursor-pointer text-sm sm:text-base leading-tight">
                  Unduh Ninapedia untuk Android atau iOS
                </h3>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed text-justify">
                  Simpan artikel favorit Anda untuk dibaca luring, selaraskan daftar bacaan Anda di berbagai perangkat, dan sesuaikan pengalaman membaca Anda dengan aplikasi resmi Ninapedia.
                </p>
              </div>

              {/* Badges container */}
              <div className="flex flex-wrap gap-2 pt-1">
                {/* Google Play badge */}
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Mengunduh aplikasi Ninapedia untuk Android...");
                  }}
                  className="bg-black hover:bg-gray-900 text-white rounded-md px-3 py-1.5 flex items-center gap-2 border border-gray-800 transition-colors shadow-sm select-none"
                >
                  {/* Google Play Play Icon SVG */}
                  <svg viewBox="0 0 512 512" width="16" height="16" className="shrink-0">
                    <path fill="#00e5ff" d="M30 42.12a20.48 20.48 0 0 1 .53-3.66L239 256.5 30.54 464.9a20.5 20.5 0 0 1-.54-3.66v-419.1z"/>
                    <path fill="#00e676" d="M30.54 464.9l208.46-208.4L372 389.5l-320.1 120a21 21 0 0 1-21.36-4.6z"/>
                    <path fill="#ffd600" d="M372 389.5L239 256.5 372 123.5l104.7 61.2a21 21 0 0 1 0 35.6z"/>
                    <path fill="#ff1744" d="M30.54 42.12l208.46 208.38L372 123.5L51.9 3.5A21 21 0 0 1 30.54 42.12z"/>
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[8px] uppercase font-semibold text-gray-400 tracking-wider">GET IT ON</div>
                    <div className="text-xs font-bold text-white font-sans mt-0.5">Google Play</div>
                  </div>
                </a>

                {/* App Store badge */}
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Mengunduh aplikasi Ninapedia untuk iOS...");
                  }}
                  className="bg-black hover:bg-gray-900 text-white rounded-md px-3 py-1.5 flex items-center gap-2 border border-gray-800 transition-colors shadow-sm select-none"
                >
                  {/* Apple Icon SVG */}
                  <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor" className="shrink-0">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.9-84.5-22.4-45.3.6-87.3 26.2-110.5 66.2-47.4 81.9-12.1 202.9 33.6 268.7 22.4 32.2 48.9 67.7 83.8 66.4 33.3-1.3 46-21.4 86.4-21.4 40.4 0 52 21.4 86.4 20.2 35.5-1.3 59.2-32.2 81.4-64.4 25.7-37.1 36.3-73 36.8-74.9-.8-.4-71.1-27.2-71.3-108.4zM240.4 97.4c28.2-34 18-69.8 18-69.8S222.8 33 194.2 68.4c-25.1 31-16.4 66.2-16.4 66.2s34.4 1.2 62.6-37.2z"/>
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[8px] text-gray-400 tracking-wider">Download on the</div>
                    <div className="text-xs font-bold text-white font-sans mt-0.5">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Section: Proyek Wikimedia Lain (Sister Projects) */}
      <div className="border border-[#a2a9b1] rounded-sm bg-white overflow-hidden mt-6">
        <div className="bg-[#eaecf0] border-b border-[#a2a9b1] px-4 py-2 flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#3366cc]" />
          <span className="font-bold text-gray-800 text-sm">Proyek Ninamedia lain</span>
        </div>
        
        <div className="p-5 space-y-4">
          <p className="text-[12.5px] text-gray-700">
            <b>Ninapedia bahasa Indonesia</b>, ensiklopedia bebas dalam bahasa Indonesia, disediakan secara gratis oleh <a href="https://wikimediafoundation.org" target="_blank" rel="noreferrer" className="text-[#0645ad] hover:underline">Ninamedia Foundation</a>, sebuah organisasi nirlaba. Selain dalam bahasa Indonesia, Ninapedia tersedia dalam beberapa bahasa lain di Indonesia: <span className="text-[#0645ad] hover:underline cursor-pointer">Aceh</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Bali</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Banjar</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Banyumas</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Batak Toba</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Betawi</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Bugis</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Gorontalo</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Iban</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Jawa</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Komering</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Madura</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Batak Mandailing</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Melayu</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Minangkabau</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Nias</span>, <span className="text-[#0645ad] hover:underline cursor-pointer">Sunda</span>, dan <span className="text-[#0645ad] hover:underline cursor-pointer">Tetun</span>.
          </p>

          <p className="text-[12.5px] text-gray-700 border-t border-[#eaecf0] pt-3">
            Ninamedia Foundation juga mengoperasikan sejumlah <a href="https://wikimediafoundation.org" target="_blank" rel="noreferrer" className="text-[#0645ad] hover:underline">proyek multibahasa</a> lain:
          </p>

          {/* Grid of sister projects web links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {sisterProjects.map((project, idx) => (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                key={idx}
                className="flex items-start gap-2.5 p-2 hover:bg-[#f8f9fa] border border-transparent hover:border-[#eaecf0] rounded-sm transition-all"
              >
                {project.icon}
                <div className="space-y-0.5">
                  <div className="font-bold text-[#0645ad] text-xs leading-none hover:underline">{project.name}</div>
                  <div className="text-[11px] text-gray-500 leading-tight">{project.desc}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-[#f8f9fa] text-center border border-[#a2a9b1] text-[11px] text-gray-500 p-3 rounded-sm leading-normal mt-2 space-y-1">
            <p className="font-bold text-red-600">Ninapedia tidak menjamin keabsahan isi artikel.</p>
            <p className="max-w-2xl mx-auto">Ninamedia Foundation tidak bertanggung jawab atas isi di Ninapedia. Setiap penulis bertanggung jawab atas suntingannya masing-masing.</p>
          </div>

          <div className="border-t border-[#eaecf0] pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="text-gray-400">💬</span>
              <button 
                onClick={() => onNavigate("Bantuan")}
                className="font-bold text-[#0645ad] hover:underline cursor-pointer bg-transparent border-none p-0 inline"
              >
                Butuh bantuan? Hubungi kami!
              </button>
            </div>
            <div className="flex items-center gap-1 text-[#0645ad] font-bold">
              <span>🌐</span>
              <span className="hover:underline cursor-pointer">346 bahasa</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
