import React, { useState } from "react";
import { Languages, ChevronDown, ExternalLink, Landmark, Bookmark, FileText, Scale, Calendar, Users, ShieldAlert, FileClock } from "lucide-react";
import { openAppImage } from "./ImageLightbox";

export default function PiagamJakarta() {
  const [activeTab, setActiveTab] = useState<"baca" | "sumber" | "riwayat">("baca");

  const sembilanAnggota = [
    { 
      no: 1, 
      nama: "Ir. Soekarno", 
      peran: "Ketua", 
      lifespan: "1901–1970",
      golongan: "Nasionalis Kebangsaan", 
      organisasi: "Algemeene Studieclub / Pusat Tenaga Rakyat (Putera) / BPKP",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Presiden_Sukarno.jpg/120px-Presiden_Sukarno.jpg"
    },
    { 
      no: 2, 
      nama: "Drs. Mohammad Hatta", 
      peran: "Wakil Ketua", 
      lifespan: "1902–1980",
      golongan: "Nasionalis Kebangsaan", 
      organisasi: "Pendidikan Nasional Indonesia (PNI Baru) / Putera",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hatta-1.jpg/60px-Hatta-1.jpg"
    },
    { 
      no: 3, 
      nama: "Mr. Alexander Andries Maramis", 
      peran: "Anggota", 
      lifespan: "1897–1974",
      golongan: "Nasionalis Kebangsaan (Kristen)", 
      organisasi: "Perwakilan Umat Kristen / Keramahan Perjuangan Indonesia Timur",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alexander_andries_maramis.jpg/60px-Alexander_andries_maramis.jpg"
    },
    { 
      no: 4, 
      nama: "Abikoesno Tjokrosoejoso", 
      peran: "Anggota", 
      lifespan: "1897–1968",
      golongan: "Nasionalis Islam", 
      organisasi: "Partai Syarikat Islam Indonesia (PSII) / Majelis Islam A'la Indonesia (MIAI)",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/RM_Abikusno_Tjokrosujoso%2C_Pekan_Buku_Indonesia_1954%2C_p247.jpg/60px-RM_Abikusno_Tjokrosujoso%2C_Pekan_Buku_Indonesia_1954%2C_p247.jpg"
    },
    { 
      no: 5, 
      nama: "K.H. Abdul Kahar Muzakir", 
      peran: "Anggota", 
      lifespan: "1907–1973",
      golongan: "Nasionalis Islam", 
      organisasi: "Muhammadiyah / Partai Islam Indonesia (PII)",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Abdul_Kahar_Mudzakkir.jpg/60px-Abdul_Kahar_Mudzakkir.jpg"
    },
    { 
      no: 6, 
      nama: "H. Agus Salim", 
      peran: "Anggota", 
      lifespan: "1884–1954",
      golongan: "Nasionalis Islam", 
      organisasi: "Pergerakan Syarikat Islam / Tokoh Diplomasi Internasional Islam",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Agus_Salim_headshot.jpg/60px-Agus_Salim_headshot.jpg"
    },
    { 
      no: 7, 
      nama: "Mr. Achmad Soebardjo", 
      peran: "Anggota", 
      lifespan: "1896–1978",
      golongan: "Nasionalis Kebangsaan", 
      organisasi: "Perhimpunan Indonesia (PI) di Belanda / Persatuan Perjuangan",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Achmad_soebardjo.jpg/60px-Achmad_soebardjo.jpg"
    },
    { 
      no: 8, 
      nama: "K.H. Wahid Hasjim", 
      peran: "Anggota", 
      lifespan: "1914–1953",
      golongan: "Nasionalis Islam", 
      organisasi: "Nahdlatul Ulama (NU) / Kepala Kantor Urusan Agama (Shumubu)",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Wahid_Hasyim.jpg/60px-Wahid_Hasyim.jpg"
    },
    { 
      no: 9, 
      nama: "Mr. Muhammad Yamin", 
      peran: "Anggota", 
      lifespan: "1903–1962",
      golongan: "Nasionalis Kebangsaan", 
      organisasi: "Gerakan Rakyat Indonesia (Gerindo) / Jong Sumatranen Bond",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mohammad_Yamin_%281954%29.jpg/60px-Mohammad_Yamin_%281954%29.jpg"
    }
  ];

  return (
    <div className="pb-16 text-[#202122] leading-[1.6] text-[14px] font-sans antialiased animate-fade-in" id="awal">
      {/* Top Wikipedia Bar tabs */}
      <div className="flex justify-between items-end border-b border-[#a2a9b1] mb-6 pb-1 select-none">
        <div className="flex space-x-6 text-[13px] font-medium">
          <button className="text-[#202122] border-b-2 border-[#202122] pb-1 -mb-[3px] font-bold">Halaman</button>
          <button className="text-[#0645ad] hover:text-[#0b0080] pb-1 cursor-pointer">Pembicaraan</button>
        </div>
        <div className="flex items-center space-x-6 text-[13px]">
          <button className="flex items-center text-[#202122] bg-[#eaecf0] px-2.5 py-1 rounded-sm border border-[#a2a9b1] hover:bg-[#e0e2e5] font-semibold text-[12px] transition-colors cursor-pointer">
            <Languages className="w-3.5 h-3.5 mr-1" />
            14 bahasa <ChevronDown className="w-3 h-3 ml-1 text-gray-500" />
          </button>
          <div className="flex space-x-4 font-medium">
            <button 
              onClick={() => setActiveTab("baca")} 
              className={`pb-1 text-[13px] transition-all cursor-pointer ${activeTab === "baca" ? "text-[#202122] font-bold border-b-2 border-[#202122] -mb-[3px]" : "text-[#0645ad] hover:text-[#0b0080]"}`}
            >
              Baca
            </button>
            <button 
              onClick={() => setActiveTab("sumber")} 
              className={`pb-1 text-[13px] transition-all cursor-pointer ${activeTab === "sumber" ? "text-[#202122] font-bold border-b-2 border-[#202122] -mb-[3px]" : "text-[#0645ad] hover:text-[#0b0080]"}`}
            >
              Lihat sumber
            </button>
            <button 
              onClick={() => setActiveTab("riwayat")} 
              className={`pb-1 text-[13px] transition-all cursor-pointer ${activeTab === "riwayat" ? "text-[#202122] font-bold border-b-2 border-[#202122] -mb-[3px]" : "text-[#0645ad] hover:text-[#0b0080]"}`}
            >
              Lihat riwayat
            </button>
          </div>
          <button className="flex items-center text-[#0645ad] hover:underline font-medium cursor-pointer">
            Perkakas <ChevronDown className="w-3 h-3 ml-1" />
          </button>
        </div>
      </div>

      {activeTab !== "baca" ? (
        <div className="bg-[#f8f9fa] border border-[#a2a9b1] rounded p-6 my-4 transition-all">
          <div className="flex items-center gap-2 text-[#3366cc] font-bold mb-3">
            <InfoIcon className="w-5 h-5" />
            <span>Mode Demo Terproteksi</span>
          </div>
          <p className="text-sm text-gray-600">
            Anda sedang meninjau artikel model Wikipedia dalam mode <b>Pratinjau Interaktif</b>. Bagian penyuntingan markup wiki dinonaktifkan dalam simulasi ini untuk menjaga integritas naskah konsensus sejarah yang telah ditinjau sejawat ini. Silakan klik tab <b>Baca</b> untuk terus menjelajahi teks lengkap.
          </p>
          <button onClick={() => setActiveTab("baca")} className="mt-4 bg-[#3366cc] hover:bg-[#2a52be] text-white text-xs px-4 py-2 font-bold rounded shadow-sm">
            Kembali Membaca Artikel
          </button>
        </div>
      ) : (
        <div className="clearfix">
          {/* Main heading */}
          <h1 className="text-[1.8em] md:text-[2.2em] font-serif font-normal border-b border-[#a2a9b1] pb-1 mb-1" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            Piagam Jakarta
          </h1>
          <div className="text-[13px] text-[#54595d] mb-4">
            Dari Ninapedia bahasa Indonesia, ensiklopedia bebas berkekuatan komunitas
          </div>

          {/* Infobox */}
          <table className="float-right clear-right ml-6 mb-4 border border-[#a2a9b1] bg-[#f8f9fa] w-full sm:w-[28em] text-[13px] leading-[1.4] m-0 border-spacing-0 border-collapse table-auto mt-2 shadow-sm rounded-sm">
            <tbody>
              <tr>
                <th colSpan={2} className="text-center font-bold text-[1.25em] bg-[#eaecf0] py-2 px-1 border-b border-[#a2a9b1]">
                  Piagam Jakarta
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="text-center p-3 border-b border-[#a2a9b1]">
                  <div className="w-full flex flex-col items-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Naskah_Asli_Piagam_Jakarta.jpg/250px-Naskah_Asli_Piagam_Jakarta.jpg" 
                      alt="Naskah Asli Piagam Jakarta" 
                      referrerPolicy="no-referrer"
                      className="object-contain max-h-[320px] border border-gray-300 cursor-zoom-in hover:opacity-90 active:scale-[0.98] transition-all duration-200 p-1 bg-white shadow-xs"
                      onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Naskah_Asli_Piagam_Jakarta.jpg/250px-Naskah_Asli_Piagam_Jakarta.jpg")}
                    />
                    <div className="text-[11px] text-[#202122] mt-2 italic max-w-[285px]">
                      Naskah asli Piagam Jakarta rujukan yang ditandatangani pada 22 Juni 1945 oleh Panitia Sembilan.
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-[#a2a9b1]/30">
                <th className="text-left py-2 pl-3 align-top font-bold text-[#202122] w-[130px]">Jenis dokumen</th>
                <td className="py-2 pr-3 align-top">Rancangan Pembukaan Undang-Undang Dasar Republik Indonesia</td>
              </tr>
              <tr className="border-b border-[#a2a9b1]/30">
                <th className="text-left py-2 pl-3 align-top font-bold text-[#202122]">Tanggal disahkan</th>
                <td className="py-2 pr-3 align-top text-emerald-800 font-semibold">22 Juni 1945</td>
              </tr>
              <tr className="border-b border-[#a2a9b1]/30">
                <th className="text-left py-2 pl-3 align-top font-bold text-[#202122]">Lokasi penandatanganan</th>
                <td className="py-2 pr-3 align-top">Kediaman Ir. Soekarno, Jalan Pegangsaan Timur No. 56, Jakarta</td>
              </tr>
              <tr className="border-b border-[#a2a9b1]/30">
                <th className="text-left py-2 pl-3 align-top font-bold text-[#202122]">Badan perumus</th>
                <td className="py-2 pr-3 align-top font-bold text-[#0645ad] hover:underline">Panitia Sembilan BPUPK</td>
              </tr>
              <tr className="border-b border-[#a2a9b1]/30">
                <th className="text-left py-2 pl-3 align-top font-bold text-[#202122]">Tujuan formal</th>
                <td className="py-2 pr-3 align-top text-justify">Menyelesaikan kebuntuan ideologis (faksi Islam vs. faksi Kebangsaan) dalam merumuskan dasar falsafah negara.</td>
              </tr>
              <tr className="border-b border-[#a2a9b1]/30">
                <th className="text-left py-2 pl-3 align-top font-bold text-[#202122]">Klausul krusial</th>
                <td className="py-2 pr-3 align-top text-[12px] italic text-[#ba0000] font-mono leading-relaxed bg-red-50/50">
                  "dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya" (tujuh kata)
                </td>
              </tr>
              <tr className="border-b border-[#a2a9b1]/30">
                <th className="text-left py-2 pl-3 align-top font-bold text-[#202122]">Penamaan historis</th>
                <td className="py-2 pr-3 align-top">
                  <i>Jakarta Charter</i> (oleh Mr. Muhammad Yamin)
                </td>
              </tr>
              <tr>
                <th colSpan={2} className="text-center font-bold text-white bg-[#0645ad] p-1.5 border-y border-[#a2a9b1] shadow-xs">
                  Status Yuridis Modern
                </th>
              </tr>
              <tr>
                <th className="text-left py-2 pl-3 align-top font-bold text-[#202122] border-b border-[#a2a9b1]/30">Status kekuatan</th>
                <td className="py-2 pr-3 align-top border-b border-[#a2a9b1]/30 text-justify">
                  Secara formil tergolong <b>sumber sejarah konstitusi</b>. Tidak berkekuatan hukum legal-operasional mandiri yang mengikat secara pidana atau perdata di luar UUD 1945.
                </td>
              </tr>
              <tr>
                <th className="text-left py-2 pl-3 align-top font-bold text-[#202122]">Hubungan hukum</th>
                <td className="py-2 pr-3 align-top text-justify">
                  Diakui "menjiwai" Undang-Undang Dasar 1945 dan merupakan satu kesatuan dengan konstitusi berdasarkan <b>Dekret Presiden 5 Juli 1959</b>.
                </td>
              </tr>
            </tbody>
          </table>

          {/* Lead Paragraphs */}
          <p className="mb-[1.2em] text-justify leading-[1.6]">
            <b>Piagam Jakarta</b> (Inggris: <i>Jakarta Charter</i>) adalah naskah rancangan Pembukaan <span className="text-[#0645ad] hover:underline cursor-pointer">Undang-Undang Dasar Negara Republik Indonesia Tahun 1945</span> yang disusun dan ditandatangani oleh sembilan tokoh perjuangan nasional (Panitia Sembilan) pada tanggal 22 Juni 1945. Rumusan piagam ini merupakan tonggak konsensus revolusioner yang dirancang untuk menjembatani jurang teologis-politik yang teramat dalam antara kubu Nasionalis Kebangsaan (sekuler) dan kubu Nasionalis Islam (teokratis) di dalam <span className="text-[#0645ad] hover:underline">Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan (BPUPK)</span>.
          </p>

          <p className="mb-[1.2em] text-justify leading-[1.6]">
            Fokus utama perhatian historis terhadap Piagam Jakarta bersumber dari rumusan silanya yang pertama yang memuat frasa tujuh kata: <i className="bg-red-50 text-[#ba0000] px-1 rounded border border-red-200 font-medium">"dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya"</i>. Frasa ini dinilai memberikan kedudukan konstitusional khusus bagi syariat Islam di bawah struktur negara yang diusulkan. Naskah Piagam Jakarta secara keseluruhan kemudian dibahas dan diterima dalam sidang pleno BPUPK pada Juli 1945 sebagai naskah Pembukaan Konstitusi resmi.
          </p>

          <p className="mb-[1.2em] text-justify leading-[1.6]">
            Akan tetapi, pada 18 Agustus 1945—sehari setelah proklamasi kemerdekaan diumumkan—konflik kedaulatan baru mencuat. Perwakilan wilayah Indonesia bagian timur mengancam akan memisahkan diri dari Republik yang baru saja diproklamasikan jika hak teokratis golongan mayoritas ini dipaksakan. Hasilnya, melalui kenegarawanan agung para pendiri bangsa, tujuh kata tersebut dicoret demi menjaga keutuhan pluralisme geopolitik Indonesia, dan digantikan dengan rumusan universal: <b className="text-emerald-700 bg-emerald-50 px-1.5 rounded border border-emerald-200">"Ketuhanan Yang Maha Esa"</b>. Sepanjang sejarah kenegaraan Indonesia, dokumen ini berulang kali diuji kepastian hukumnya, memicu perdebatan parlemen, pertentangan bersenjata, hingga proses amendemen Undang-Undang Dasar pada era Reformasi.
          </p>

          {/* SECTION 1: Latar Belakang & Pembentukan Panitia Sembilan */}
          <h2 id="latar-belakang" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <Landmark className="w-5 h-5 text-gray-700" />
              1. Latar Belakang & Pembentukan Panitia Sembilan
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>

          {/* FLOATING IMAGE: Sidang BPUPK */}
          <div className="float-right ml-5 mb-4 border border-[#ccc] bg-[#f8f9fa] p-1 w-[250px] text-[11px] leading-normal shadow-xs rounded-sm">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sidang_BPUPKI_-_2.jpg/250px-Sidang_BPUPKI_-_2.jpg" 
              alt="Sidang BPUPK 1945" 
              referrerPolicy="no-referrer"
              className="w-full h-auto cursor-zoom-in hover:opacity-95 border border-gray-200" 
              onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sidang_BPUPKI_-_2.jpg/250px-Sidang_BPUPKI_-_2.jpg")}
            />
            <div className="p-1.5 text-gray-700 text-[11px] text-justify leading-tight">
              Suasana sidang BPUPK pada tahun 1945, majelis tempat perbincangan awal mengenai rancangan konstitusi dan dasar negara Indonesia merdeka.
            </div>
          </div>

          <p className="mb-[1em] text-justify leading-[1.6]">
            Pada tahun 1942, Kekaisaran Jepang resmi menduduki seluruh wilayah geopolitik Hindia Belanda. Sebelum invasi ini terjadi, pemerintah kolonial Belanda telah memenjarakan sekaligus mengasingkan beberapa tokoh pergerakan nasionalis terkemuka seperti Soekarno dan Mohammad Hatta. Di bawah kekuasaan militer Jepang, para elit cendekiawan nasionalis ini memilih jalur kerja sama taktis kooperatif dengan pemerintah pendudukan untuk terus memobilisasi kesadaran kemerdekaan masyarakat demi mendukung pertahanan perang luar raya Jepang di Pasifik.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            Memasuki kuartal akhir tahun 1944, akibat posisi militer Jepang yang kian terjepit dan terus mengalami kekalahan telak di berbagai front pertempuran melawan sisa pasukan Sekutu, Perdana Menteri Jepang Kuniaki Koiso pada tanggal 7 September 1944 memberikan janji politik kemerdekaan ("Janji Koiso") di hadapan parlemen Tokyo untuk seluruh wilayah Hindia Timur di masa mendatang. Sebagai realisasi dari komitmen tersebut, pada tanggal 1 Maret 1945 didirikanlah <b>Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan (BPUPK)</b> (Jepang: <i>Dokuritsu Junbi Chōsa-kai</i>) mendasari persidangan pembentukan undang-undang dasar negara Indonesia yang berdaulat.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            Sidang Pertama BPUPK yang diselenggarakan sejak tanggal 29 Mei hingga 1 Juni 1945 menjadi saksi konfrontasi teoretis-idiologis yang paling esensial dalam sejarah modern Indonesia. Pertanyaan mendasar mengenai "Apa yang akan menjadi dasar negara kebangsaan Indonesia kelak?" dijawab secara bertolak belakang oleh dua kekuatan politik utama. 
          </p>
          <p className="mb-[1em] text-justify leading-[1.6]">
            Golongan Islam yang dipelopori oleh tokoh-tokoh konservatif gigih seperti Ki Bagus Hadikoesoemo (Ketua Pengurus Besar Muhammadiyah) menetapkan posisi bahwa sebuah negara merdeka dengan penduduk mayoritas beragama Islam wajib didirikan di atas platform Ketuhanan yang mutlak berasaskan Syariah Islam. Sebaliknya, kubu Nasionalis Kebangsaan (sekuler) bersitegang menolak konsepsi tersebut. Mereka mendesak negara kebangsaan yang modern, netral, serta menjamin keadilan teologis yang murni inklusif bagi seluruh penganut kepercayaan, adat, ras, dan kebhinekaan daerah kepulauan Nusantara.
          </p>
          <p className="mb-[1em] text-justify leading-[1.6]">
            Di tengah kobaran perdebatan teologi politik yang hampir menemui jalan buntu (deadlock) itu, Ir. Soekarno pada tanggal 1 Juni 1945 menyampaikan pidatonya yang fenomenal mengenai Pancasila, di mana ia secara diplomatis memposisikan Sila Ketuhanan sebagai prinsip moral inklusif kebersamaan umat, yang dirumuskan melalui penegasan akomodatif toleran:
          </p>

          {/* BLOCKQUOTE PIDATO OTENTIK SOEKARNO */}
          <blockquote className="border-l-4 border-emerald-650 bg-emerald-50/40 italic px-6 py-4 text-[13px] text-gray-800 my-5 text-justify shadow-xs rounded-r-md">
            "Prinsip yang kelima daripada negara kita ialah Ketuhanan dengan cara berkebudayaan, Ketuhanan yang berbudi pekerti yang luhur, Ketuhanan yang menghormati satu sama lain. Segenap rakyat hendaknya ber-Tuhan. Bahwa prinsip Ketuhanan itu bukan saja bangsa Indonesia ber-Tuhan, tetapi masing-masing orang Indonesia hendaknya ber-Tuhan, Tuhannya sendiri. <b className="text-emerald-850">Yang Kristen menyembah Tuhan menurut petunjuk Isa al Masih, yang Islam bertuhan menurut petunjuk Nabi Muhammad s.a.w.</b>, yang Buddha menjalankan ibadatnya menurut kitab-kitab yang ada padanya. Tetapi marilah kita semuanya ber-Tuhan. Marilah kita di dalam Indonesia Merdeka yang kita susun ini menyatakan: bahwa prinsip kelima daripada negara kita ialah Ketuhanan Yang Maha Esa!"
            <span className="block text-right font-semibold text-xs mt-2 text-gray-600">— Ir. Soekarno, Lahirnya Pancasila, 1 Juni 1945</span>
          </blockquote>

          <p className="mb-[1em] text-justify leading-[1.6]">
            Mengingat sidang pertama BPUPK selesai tanpa menghasilkan draf tertulis konstitusi substantif yang bulat, Dr. K.R.T. Radjiman Wedyodiningrat mengumumkan pembentukan panitia kecil penampung usulan. Akan tetapi, kepengurusan ini dinilai kurang seimbang. Oleh sebab itu, sebelum sidang paripurna kedua diselenggarakan, diluncurkan sebuah komite kerja otonom yang representatif berisikan 9 orang perwakilan tokoh elit kebangsaan dan kaum Islam yang dinamakan <b>Panitia Sembilan</b>. Komite ini mengemban mandat vital untuk memformulasikan naskah konsensus agung proklamasi kemerdekaan.
          </p>

          <p className="mb-[0.8em] font-bold text-[13px] text-gray-800 mt-6 flex items-center gap-1.5">
            <Bookmark className="w-4 h-4 text-[#0645ad]" />
            Tabel Resmi Anggota Panitia Sembilan BPUPK beserta Data Kepemimpinan & Rentang Usia:
          </p>
          <div className="overflow-x-auto w-full my-4">
            <table className="w-full text-xs text-left border-collapse border border-[#a2a9b1] table-auto shadow-xs">
              <thead>
                <tr className="bg-[#eaecf0] border-b border-[#a2a9b1] text-gray-800 font-bold">
                  <th className="p-3 border-r border-[#a2a9b1] text-center w-12">No</th>
                  <th className="p-3 border-r border-[#a2a9b1] text-center w-16">Foto</th>
                  <th className="p-3 border-r border-[#a2a9b1] w-48 font-bold">Nama Tokoh Perumus</th>
                  <th className="p-3 border-r border-[#a2a9b1] w-36">Masa Hidup (Tahun)</th>
                  <th className="p-3 border-r border-[#a2a9b1] w-28">Kedudukan</th>
                  <th className="p-3 border-r border-[#a2a9b1] w-40">Kubu / Faksi Teologis</th>
                  <th className="p-3">Afiliasi Pergerakan / Organisasi Utama</th>
                </tr>
              </thead>
              <tbody>
                {sembilanAnggota.map((member) => (
                  <tr key={member.no} className="border-b border-[#a2a9b1]/40 hover:bg-gray-50/70">
                    <td className="p-2.5 border-r border-[#a2a9b1]/40 text-center font-mono font-semibold">{member.no}</td>
                    <td className="p-2 border-r border-[#a2a9b1]/40 text-center">
                      {member.foto && (
                        <img 
                          src={member.foto} 
                          alt={member.nama} 
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-full object-cover border border-gray-300 mx-auto cursor-zoom-in hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xs"
                          onClick={() => openAppImage(member.foto)}
                        />
                      )}
                    </td>
                    <td className="p-2.5 border-r border-[#a2a9b1]/40 font-bold text-[#0645ad] hover:underline cursor-pointer" onClick={() => member.foto && openAppImage(member.foto)}>{member.nama}</td>
                    <td className="p-2.5 border-r border-[#a2a9b1]/40 text-gray-700 font-mono">{member.lifespan}</td>
                    <td className="p-2.5 border-r border-[#a2a9b1]/40 font-medium">{member.peran}</td>
                    <td className="p-2.5 border-r border-[#a2a9b1]/40 text-gray-600">{member.golongan}</td>
                    <td className="p-2.5 italic text-gray-800 text-[11.5px]">{member.organisasi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-[1.2em] text-justify leading-[1.6]">
            Pertemuan bersejarah Panitia Sembilan ini mencapai puncaknya pada malam hari tanggal 22 Juni 1945 di Jalan Pegangsaan Timur 56, Jakarta. Hasil musyawarah politik ini meletakkan pondasi perjanjian terhormat bersama (<i>"Gentlemen's Agreement"</i>) yang diyakini adil untuk mengukuhkan persatuan nasional di bawah bayang-bayang berakhirnya Perang Asia Timur Raya.
          </p>

          {/* SECTION 2: Teks Piagam Jakarta & Ortografi */}
          <h2 id="perbandingan-naskah-pembukaan" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <FileText className="w-5 h-5 text-gray-700" />
              2. Teks Piagam Jakarta & Ortografi
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>
          <p className="mb-[1.2em] text-justify leading-[1.6]">
            Naskah Piagam Jakarta merupakan suatu kesatuan untaian kata yang sarat nuansa filosofis revolusioner, disusun menggunakan gaya bahasa proklamasi yang agung. Bagian paling bersejarah terdapat pada alinea keempat, di mana rincian Pancasila ditulis lengkap dengan klausa "tujuh kata" syariat di dalam Sila Kesatu. 
          </p>

          <p className="mb-[0.8em] font-semibold text-[13px] text-gray-700">Tabel Komparasi Tekstual Otentik (Ejaan Asli 1945 vs Ejaan Modern yang Disempurnakan):</p>
          <div className="overflow-x-auto w-full my-4">
            <table className="w-full text-xs text-left border-collapse border border-[#a2a9b1] table-fixed min-w-[700px] shadow-xs">
              <thead>
                <tr className="bg-[#f8f9fa] border-b-2 border-[#a2a9b1]">
                  <th className="p-3 border-r border-[#a2a9b1] w-1/2 font-bold text-gray-800 text-sm">Rumusan Hukum Asli (Ejaan Van Ophuijsen / Soewandi)</th>
                  <th className="p-3 w-1/2 font-bold text-gray-800 text-sm">Rumusan Disesuaikan (Ejaan yang Disempurnakan - EYD)</th>
                </tr>
              </thead>
              <tbody>
                {/* Paragraph 1 */}
                <tr className="border-b border-[#a2a9b1]/40 align-top hover:bg-gray-50/50">
                  <td className="p-4 border-r border-[#a2a9b1] leading-relaxed text-gray-700 font-serif text-[12.5px] italic text-justify">
                    "Bahwa sesoenggoehnja kemerdekaan itoe jalah hak segala bangsa, dan oleh sebab itoe maka pendjadjahan di atas doenia haroes dihapoeskan, karena tidak sesoeai dengan peri-kemanoesiaan dan peri-keadilan."
                  </td>
                  <td className="p-4 leading-relaxed text-gray-800 font-serif text-[12.5px] italic text-justify">
                    "Bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa, dan oleh sebab itu maka penjajahan di atas dunia harus dihapuskan, karena tidak sesuai dengan peri-kemanusiaan dan peri-keadilan."
                  </td>
                </tr>
                {/* Paragraph 2 */}
                <tr className="border-b border-[#a2a9b1]/40 align-top hover:bg-gray-50/50">
                  <td className="p-4 border-r border-[#a2a9b1] leading-relaxed text-gray-700 font-serif text-[12.5px] italic text-justify">
                    "Dan perdjoeangan pergerakan kemerdekaan Indonesia telah sampailah kepada saat jang berbahagia, dengan selamat-sentosa mengantarkan rakjat Indonesia ke depan pintoe gerbang kemerdekaan Negara Indonesia, jang merdeka, bersatoe, berdaoelat, adil dan makmoer."
                  </td>
                  <td className="p-4 leading-relaxed text-gray-800 font-serif text-[12.5px] italic text-justify">
                    "Dan perjuangan pergerakan kemerdekaan Indonesia telah sampailah kepada saat yang berbahagia, dengan selamat-sentosa mengantarkan rakyat Indonesia ke depan pintu gerbang kemerdekaan Negara Indonesia, yang merdeka, bersatu, berdaulat, adil dan makmur."
                  </td>
                </tr>
                {/* Paragraph 3 */}
                <tr className="border-b border-[#a2a9b1]/40 align-top hover:bg-gray-50/50">
                  <td className="p-4 border-r border-[#a2a9b1] leading-relaxed text-gray-700 font-serif text-[12.5px] italic text-justify">
                    "Atas berkat Rahmat Allah Jang Maha Koeasa, dan dengan didorongkan oleh keinginan léhoer, soepaja berkehidupan kebangsaan jang bebas, maka rakjat Indonesia menjatakan dengan ini kemerdekaannja."
                  </td>
                  <td className="p-4 leading-relaxed text-gray-800 font-serif text-[12.5px] italic text-justify">
                    "Atas berkat rahmat Allah Yang Maha Kuasa, dan dengan didorongkan oleh keinginan luhur, supaya berkehidupan kebangsaan yang bebas, maka rakyat Indonesia menyatakan dengan ini kemerdekaannya."
                  </td>
                </tr>
                {/* Paragraph 4 */}
                <tr className="align-top hover:bg-gray-50/50">
                  <td className="p-4 border-r border-[#a2a9b1] leading-relaxed text-gray-800 text-[12.5px] text-justify font-sans">
                    "Kemoedian daripada itoe oentoek membentoek soeatoe Pemerintah Negara Indonesia jang melindungi segenap bangsa Indonesia dan seloeroeh tumpah-darah Indonesia, dan oentoek memadjoekan kesejahteraan oemoem, mentjerdaskan kehidupan bangsa, dan ikoet melaksanakan ketertiban doenia jang berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial, maka dikoesoenlah kemerdekaan kebangsaan Indonesia itoe dalam soeatoe Hoekoem Dasar Negara Indonesia, jang terbentuk dalam soeatoe soesoenan negara Republik Indonesia jang berkedaulatan rakjat, dengan berdasar kepada: <b className="text-[#a51d24] underline bg-red-50 p-0.5 rounded font-bold font-mono">Ketoebanan, dengan kewadjiban mendjalankan sjari'at Islam bagi pemeloek-pemeloeknja</b>, menoeroet dasar kemanoesiaan jang adil dan beradab, persatoean Indonesia, dan kerakjatan jang dipimpin oleh hikmat kebidjaksanaan dalam permoesjawaratan perwakilan, serta dengan mewoedjoedkan soeatoe keadilan sosial bagi seloeroeh rakjat Indonesia."
                  </td>
                  <td className="p-4 leading-relaxed text-gray-900 text-[12.5px] text-justify font-sans">
                    "Kemudian daripada itu untuk membentuk suatu Pemerintah Negara Indonesia yang melindungi segenap bangsa Indonesia dan seluruh tumpah-darah Indonesia, dan untuk memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial, maka disusunlah kemerdekaan kebangsaan Indonesia itu dalam suatu Hukum Dasar Negara Indonesia, yang terbentuk dalam suatu susunan negara Republik Indonesia yang berkedaulatan rakyat, dengan berdasar kepada: <b className="text-[#a51d24] underline bg-red-50 p-0.5 rounded font-bold font-mono">Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya</b>, menurut dasar kemanusiaan yang adil dan beradab, persatuan Indonesia, dan kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan, serta dengan mewujudkan suatu keadilan sosial bagi seluruh rakyat Indonesia."
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#f0f4f8] border-l-4 border-[#3366cc] p-4 text-[13px] my-4 leading-relaxed rounded-r shadow-xs">
            <span className="font-bold text-gray-700 block mb-1">Catatan Transkripsi:</span>
            Ejaan asli naskah Piagam Jakarta menggunakan diakritik sirkumfleks léhoer/luhur dan pemakaian ejaan Van Ophuijsen lama ("hoekoem dasar", "sjar'iat"). Dokumen fotokopi naskah aslinya kini terawat dengan kualitas tinggi sebagai arsip negara.
          </div>

          {/* SECTION 3: Historiografi Sidang Resmi Kedua BPUPK (10-17 Juli 1945) */}
          <h2 id="sidang-kedua-bpupk" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <Scale className="w-5 h-5 text-gray-750" />
              3. Historiografi Sidang Resmi Kedua BPUPK (10-17 Juli 1945)
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>

          {/* FLOATING IMAGE: Johannes Latuharhary */}
          <div className="float-right ml-5 mb-4 border border-[#ccc] bg-[#f8f9fa] p-1 w-[200px] text-[11px] leading-normal shadow-xs rounded-sm">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuEUMFd9qFN1aSNjc8TQ-wncl8IlvoU2av5nnT6qtVo5DXOq1ezLp1yZt&s=10" 
              alt="Johannes Latuharhary" 
              referrerPolicy="no-referrer"
              className="w-full h-auto cursor-zoom-in hover:opacity-95 border border-gray-200" 
              onClick={() => openAppImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuEUMFd9qFN1aSNjc8TQ-wncl8IlvoU2av5nnT6qtVo5DXOq1ezLp1yZt&s=10")}
            />
            <div className="p-1.5 text-gray-700 text-[11px] text-justify leading-snug">
              Mr. Johannes Latuharhary, wakil daerah timur Indonesia yang menyampaikan keberatan hukum pertama terhadap tujuh kata dalam sidang BPUPK.
            </div>
          </div>

          <p className="mb-[1em] text-justify leading-[1.6]">
            Ketika rancangan naskah Pembukaan yang kemudian dinamakan Piagam Jakarta ini dibawa ke sidang pleno resmi yang kedua dari Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan (BPUPK) pada rentang tanggal 10 hingga 17 Juli 1945, atmosfer persidangan kembali memanas. Kompromi politik yang dirumuskan oleh semanan tokoh elit tersebut dihujani tanggapan kritis serta keberatan teologis-yuridis yang berbobot dari representasi daerah kepulauan.
          </p>

          <div className="float-left mr-5 mb-3 border border-[#c8ccd1] bg-[#f8f9fa] p-2.5 w-[260px] text-xs">
            <span className="font-bold text-[#b22222] block mb-1">Keberatan Krusial Latuharhary</span>
            <p className="text-gray-700 text-justify leading-relaxed">
              "Pencantuman syariat Islam bagi pemeluknya dapat memaksa hukum adat tunduk pada tafsir sepihak negara, serta memisahkan saudara-saudara non-Muslim di timur dari pangkuan Ibu Pertiwi."
            </p>
          </div>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Keberatan Utama Johannes Latuharhary:</b> Pada sidang tanggal 11 Juli 1945, Mr. Johannes Latuharhary—tokoh intelektual terkemuka asal Maluku—secara lugas menyampaikan keberatan fundamental terhadap pencantuman anak kalimat <i>"dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya"</i>. Beliau memperingatkan sidang bahwa regulasi teokratis semacam ini berpotensi membenturkan hukum syariah federal dengan hukum adat masyarakat yang telah lama harmonis di daerah-daerah luar Jawa, terutama di Maluku, Sulawesi, dan kepulauan timur. Latuharhary mensinyalir anak kalimat ini akan melahirkan sengketa komunal yang berimbas secara tidak langsung pada ancaman disintegrasi wilayah minoritas non-Muslim bahkan sebelum negara berdiri tegak.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Kekhawatiran Sosiologis Wongsonegoro dan Hoesein Djajadiningrat:</b> 
            Kritik Latuharhary disambut kuat oleh Mr. Wongsonegoro yang mengkhawatirkan bahwa rumusan ini akan memicu radikalisasi atau ketaatan beragama yang dipaksakan oleh aparatur pemerintah, yang akan mencederai tradisi toleransi kebudayaan Nusantara. Selanjutnya, Dr. K.H. R.T. Hoesein Djajadiningrat—tokoh cendekiawan Muslim dan pakar bahasa bercorak kosmopolitan—mempertanyakan aspek operasional dari klausa tersebut secara kritis:
          </p>

          <blockquote className="border-l-4 border-amber-600 bg-amber-50/40 italic px-5 py-3 text-[12.5px] text-gray-750 my-4 text-justify rounded-r">
            "Kalimat tersebut sangat berbahaya bagi kelangsungan batin umat. Siapakah kelak yang berhak merumuskan apakah seorang warga negara Muslim telah melaksanakan kewajiban syariatnya secara sah? Apakah negara akan membentuk kepolisian moral atau dewan kehakiman agama khusus yang berhak mengintervensi ibadah individu rakyat? Hal ini justru akan membidani lahirnya fanatisme beragama mutlak dan perpecahan mazhab internal di kalangan umat Islam sendiri."
            <span className="block text-right font-semibold text-xs mt-1 text-gray-550">— Dr. K.H. R.T. Hoesein Djajadiningrat, Sidang BPUPK, Juli 1945</span>
          </blockquote>

          <p className="mb-[1.2em] text-justify leading-[1.6]">
            <b>Retorika Konsiliatif Abikoesno Tjokrosoejoso:</b> Menanggapi badai keberatan tersebut, Abikoesno Tjokrosoejoso selaku perwakilan faksi Islam tampil memberikan pembelaan diplomatis yang meneduhkan suasana. Beliau menjamin bahwa penulisan frasa tersebut didorong oleh kewajiban moral sejarah umat Islam yang telah berkorban paling masif melawan kolonialisme, namun sama sekali tidak memuat niat pemaksaan minoritas penganut Kristen atau agama lain. Abikoesno meyakinkan sidang bahwa toleransi akan dipelihara seadil-adilnya dalam draf pembukaan tersebut. Atas argumen Bung Karno yang menyatakan bahwa draf hukum dasar ini merupakan kompromi politik terbaik (<i>Gentlemen's Agreement</i>) demi menghindari kepunahan persatuan, seluruh anggota sidang akhirnya menerima rancangan Piagam Jakarta secara utuh.
          </p>

          {/* SECTION 4: Kronologi Penghapusan Tujuh Kata (17-18 Agustus 1945) */}
          <h2 id="penghapusan-tujuh-kata" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-5 h-5 text-[#ba0000]" />
              4. Kronologi Penghapusan Tujuh Kata (17-18 Agustus 1945)
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>

          {/* FLOATING IMAGE: Proklamasi 17 Agustus 1945 */}
          <div className="float-right ml-5 mb-4 border border-[#ccc] bg-[#f8f9fa] p-1 w-[250px] text-[11px] leading-normal shadow-xs rounded-sm">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCB4Mdau-OBF2cSuppE6N2cp2oMjBqs3oBWlC0L02wZQ&s=10" 
              alt="Proklamasi Kemerdekaan 17 Agustus 1945" 
              referrerPolicy="no-referrer"
              className="w-full h-auto cursor-zoom-in hover:opacity-95 border border-gray-200" 
              onClick={() => openAppImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCB4Mdau-OBF2cSuppE6N2cp2oMjBqs3oBWlC0L02wZQ&s=10")}
            />
            <div className="p-1.5 text-gray-700 text-[11px] text-justify leading-snug">
              Pembacaan Proklamasi Kemerdekaan oleh Ir. Soekarno pada 17 Agustus 1945 di Jalan Pegangsaan Timur 56, Jakarta.
            </div>
          </div>

          <p className="mb-[1em] text-justify leading-[1.6]">
            Dinamika sejarah mengalir luar biasa cepat seketika setelah Bung Karno didampingi Bung Hatta memproklamasi Kemerdekaan Indonesia pada pagi hari Jumat, 17 Agustus 1945. Konsensus teologis Piagam Jakarta diuji oleh krisis kesetiaan nasional yang paling dramatis dalam beberapa jam berikutnya.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Laporan Petang Perwira Angkatan Laut Jepang (Kaigun):</b> Pada sore hari tanggal 17 Agustus 1945, Drs. Mohammad Hatta didatangi oleh seorang opsir penghubung dari Kantor Angkatan Laut Jepang (<i>Kaigun</i>) di Jakarta. Perwira tersebut membawa pesan kedaulatan mutlak dari para pemimpin Kristen dan kepala adat terpandang di wilayah Indonesia Timur (terutama dari Maluku, Minahasa, dan Nusa Tenggara). Mereka menyatakan secara lugas bahwa jika frasa tujuh kata bercorak eksklusif Islam itu tetap dipertahankan dalam konstitusi Republik Indonesia yang hendak ditetapkan keesokan harinya, maka perwakilan Indonesia Timur akan memilih berdiri di luar kedaulatan Republik serta mendeklarasikan kemerdekaan terpisah bagi wilayah-wilayah mereka.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Pertemuan Darurat Pagi Hari 18 Agustus 1945:</b> Menatap jurang perpecahan nasional di ambang kemerdekaan yang dinanti seabad lamanya, Mohammad Hatta bertindak cepat tanpa ragu. Pagi hari tanggal 18 Agustus 1945, pukul 08.00 WIB—dua jam sebelum rapat konstitusional resmi Panitia Persiapan Kemerdekaan Indonesia (PPKI) dimulai—Bung Hatta menggelar lobi darurat informal berskala terbatas. Tokoh perwakilan Islam garis depan yang ia kumpulkan secara mendesak di antaranya adalah Ki Bagus Hadikoesoemo, K.H. Wahid Hasjim, Mr. Kasman Singodimedjo, dan Teuku Mohammad Hasan.
          </p>

          <div className="bg-[#fffdf6] border border-[#f5b041] p-4 text-xs italic text-gray-800 my-4 text-justify rounded shadow-xs relative">
            <div className="absolute top-0 right-0 bg-[#f5b041] text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">RETORIKA PERSUASIF KASMAN</div>
            "Kami memohon keikhlasan terbesar dari para ulama pergerakan. Republik yang baru berusia belasan jam ini tengah dikelilingi oleh moncong meriam Sekutu (NICA) dan sisa kepedihan bala tentara Jepang. Bila perang saudara pecah di awal jalan karena kerasnya pertarungan kata-kata teologis di undang-undang dasar, kita semua akan kembali menjadi jajahan asing selamanya!"
            <span className="block text-right font-semibold text-[10px] mt-1 text-gray-600">— Mr. Kasman Singodimedjo kepada Ki Bagus Hadikoesoemo, 18 Agustus 1945</span>
          </div>

          <p className="mb-[1.2em] text-justify leading-[1.6]">
            Setelah melalui diplomasi kebangsaan yang menggetarkan sanubari, dibarengi jaminan sosiopolitik yang tulus dari Teuku Mohammad Hasan, Ki Bagus Hadikoesoemo menunjukkan kebesaran jiwa kenebyangkaraan yang tak ternilai harganya bagi bangsa. Demi kemaslahatan bersatunya segenap suku bangsa dari Sabang sampai Merauke, beliau merelakan pencoretan "tujuh kata" tersebut. Sebagai gantinya, rumusannya digeser menjadi <b>"Ketuhanan Yang Maha Esa"</b>, sebuah frasa inklusif berciri tauhid murni yang merangkul keanekaragaman teologis spiritual tanah air tanpa mencederai identitas keislaman mayoritas rakyat.
          </p>

          {/* SECTION 5: Era Penangguhan & Dekret Presiden 5 Juli 1959 */}
          <h2 id="dekret-presiden" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <FileClock className="w-5 h-5 text-gray-750" />
              5. Era Penangguhan & Dekret Presiden 5 Juli 1959
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>

          {/* FLOATING IMAGE: Dekret Presiden 1959 */}
          <div className="float-right ml-5 mb-4 border border-[#ccc] bg-[#f8f9fa] p-1 w-[250px] text-[11px] leading-normal shadow-xs rounded-sm">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/1959_Sukarno%27s_Presidential_Decree.jpg/250px-1959_Sukarno%27s_Presidential_Decree.jpg" 
              alt="Pembacaan Dekret Presiden 5 Juli 1959" 
              referrerPolicy="no-referrer"
              className="w-full h-auto cursor-zoom-in hover:opacity-95 border border-gray-200" 
              onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/1959_Sukarno%27s_Presidential_Decree.jpg/250px-1959_Sukarno%27s_Presidential_Decree.jpg")}
            />
            <div className="p-1.5 text-gray-700 text-[11px] text-justify leading-snug">
              Presiden Soekarno membacakan Dekret Presiden 5 Juli 1959 yang menetapkan kembali berlakunya UUD 1945 serta menyatakan Piagam Jakarta menjiwai UUD 1945.
            </div>
          </div>

          <p className="mb-[1em] text-justify leading-[1.6]">
            Pencoretan mendramatisir pada tanggal 18 Agustus 1945 menyisakan luka ideologis yang membara di kalangan intelektual dan ulama muslim terkemuka. Sebagian pemuka Islam memandang kompromi hari itu sebagai bentuk konsesi sementara atau "UUD kilat" darurat yang sewaktu-waktu wajib diperbaiki secara demokratis di masa damai.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Jalan Buntu Politik (Deadlock) di Konstituante Bandung (1956–1959):</b> 
            Setelah terselenggaranya Pemilu demokratis pertama pada tahun 1955, dibentuklah badan pembentuk konstitusi permanen bernama <b>Konstituante</b> di Bandung. Selama lebih dari tiga tahun bersidang, faksi-faksi politik Islam (Masyumi, Nahdlatul Ulama, PSII) bersikukuh menuntut pemulihan Piagam Jakarta sebagai landasan konstitusi legal formal. Mereka berargumen bahwa janji kedaulatan 1945 harus ditunaikan dalam parlemen perumus undang-undang kedaulatan yang murni representatif. 
            Perdebatan ideologis yang alot ini berujung pada jalan buntu yang akut karena faksi nasionalis-sekuler dan komunis menolak mentah-mentah ide teokratis tersebut. Pemungutan suara berkali-kali gagal mencapai ambang batas kuorum dua pertiga yang disepakati secara hukum.
          </p>

          {/* DEKRET 1959 INFOBOX */}
          <div className="bg-slate-100 border border-slate-350 p-5 font-sans my-5 rounded shadow-xs">
            <h3 className="font-bold text-slate-850 border-b border-slate-300 pb-1.5 mb-2.5 flex items-center gap-1.5 text-xs">
              <Landmark className="w-4.5 h-4.5 text-indigo-700" />
              KUTIPAN OTENTIK DIKTUM KONSIDERANS DEKRET PRESIDEN 5 JULI 1959:
            </h3>
            <p className="text-gray-805 leading-relaxed text-xs italic text-justify">
              "Bahwa kami berkejakinan bahwa <b>Piagam Djakarta tertanggal 22 Djuni 1945 menjiwai Undang-Undang Dasar 1945 dan adalah merupakan soeatoe rangkaian kesatoean dengan Konstitusi terseboet</b>; maka atas dasar terseboet di atas, Kami, Presiden Republik Indonesia/Panglima Tertinggi Angkatan Perang, menetapkan membubarkan Konstituante, menetapkan berlakunja kembali Undang-Undang Dasar 1945..."
            </p>
          </div>

          <p className="mb-[1.2em] text-justify leading-[1.6]">
            <b>Intervensi Konstitusional Dekret Presiden 5 Juli 1959:</b> Menghadapi instabilitas politik berkepanjangan ditambah krisis keamanan nasional berupa maraknya pemberontakan kedaulatan bersenjata di daerah-daerah (seperti PRRI, Permesta, dan DI/TII), Presiden Soekarno mengambil langkah dekretis ekstrim. Melalui <b>Dekret Presiden 5 Juli 1959</b>, Konstituante dibubarkan paksa dan UUD 1945 diberlakukan kembali di seluruh tanah air. 
          </p>
          
          <p className="mb-[1.2em] text-justify leading-[1.6]">
            Menariknya, sebagai titik temu penyeimbang untuk menghibur sekaligus meredam amuk kekecewaan faksi-faksi umat Islam, Bung Karno dengan jeli memasukkan penegasan yuridis historis di dalam konsiderans teks Dekret tersebut. Bunyi yang menegaskan bahwa <i>"Piagam Jakarta tertanggal 22 Juni 1945 menjiwai Undang-Undang Dasar 1945 dan merupakan satu kesatuan rangkaian konstitusi"</i> hingga detik ini bertahan sebagai doktrin tata negara yang memiliki penafsiran ganda yang dinamis di Indonesia.
          </p>
          <h2 id="penangguhan-dan-orde-baru" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <FileClock className="w-5 h-5 text-gray-750" />
              6. Pembahasan Masa Penangguhan UUD 1945 & Orde Baru
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>

          {/* FLOATING IMAGE: Gedung Dwiwarna Bandung */}
          <div className="float-right ml-5 mb-4 border border-[#ccc] bg-[#f8f9fa] p-1 w-[250px] text-[11px] leading-normal shadow-xs rounded-sm">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ConstitutionalAssemblyBldg.jpg/250px-ConstitutionalAssemblyBldg.jpg" 
              alt="Gedung Dwiwarna Bandung" 
              referrerPolicy="no-referrer"
              className="w-full h-auto cursor-zoom-in hover:opacity-95 border border-gray-200" 
              onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ConstitutionalAssemblyBldg.jpg/250px-ConstitutionalAssemblyBldg.jpg")}
            />
            <div className="p-1.5 text-gray-700 text-[11px] text-justify leading-snug">
              Gedung Dwiwarna di Bandung, tempat diselenggarakannya sidang-sidang Konstituante (1956–1959) yang membahas dasar negara secara komparatif.
            </div>
          </div>

          <p className="mb-[1em] text-justify leading-[1.6]">
            Setelah pembentukan Negara Kesatuan Republik Indonesia (NKRI) pada tahun 1950 pasca-era RIS, ketegangan politik ideologis antara kelompok Islam dan kelompok Kebangsaan kembali mencuat ke permukaan. Hal ini terutama dipicu oleh persiapan pemilihan umum pertama yang dijadwalkan pada tahun 1955. Tokoh-tokoh Islam memandang penghapusan tujuh kata pada 18 Agustus 1945 hanyalah pengorbanan taktis sementara demi keselamatan proklamasi kemerdekaan yang dikepung tentara asing.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Tuntutan Partai Islam (1950-1955):</b> Pada tahun 1953, salah satu perumus Piagam Jakarta dari Panitia Sembilan, Abikoesno Tjokrosoejoso, menerbitkan brosur atau pamflet bersejarah berjudul <i>“Ummat Islam Indonesia Menghadapi Pemilihan Umum”</i>. Dalam tulisan tersebut, Abikoesno secara vokal mendesak agar umat Islam bersatu memenangkan Pemilu agar mayoritas parlemen didominasi oleh perwakilan Islam. Ia menjabarkan bahwa Piagam Jakarta secara moral dan historis merupakan "kontrak sosial asli" bangsa yang secara sepihak dikhianati, dan Pemilu 1955 adalah sarana konstitusional terbaik untuk memulihkan kedaulatan syariat Islam secara legal dalam undang-undang dasar baru.
          </p>

          <div className="float-right ml-5 mb-3 border border-red-200 bg-red-50/40 p-3.5 w-[280px] text-xs rounded-sm shadow-xs">
            <span className="font-bold text-[#ba0000] block mb-1">Tuduhan Pengkhianatan di Konstituante</span>
            <p className="text-gray-700 text-justify leading-relaxed">
              "Penghapusan tujuh kata secara mendadak pada tanggal 18 Agustus 1945 adalah bentuk pengebirian hak sejarah umat Islam, sebuah pengkhianatan terhadap Pancasila yang dirumuskan secara sah oleh Panitia Sembilan."
              <span className="block text-right font-medium text-[10px] mt-1 text-gray-500">— K.H. Abdul Kahar Muzakir, Desember 1957</span>
            </p>
          </div>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Statistik dan Blok Islam di Konstituante:</b> Hasil Pemilu 1955 menghasilkan komposisi majelis pembuat UUD (Konstituante) di Bandung yang terbelah tajam. Blok Islam yang terdiri dari 8 partai politik keagamaan (dipelopori oleh Masyumi, Nahdlatul Ulama, PSII, dan Perti) berhasil menguasai <b>230 kursi Konstituante</b>, atau setara dengan <b>44,8%</b> dari total 514 anggota Konstituante yang aktif. Meskipun merupakan kekuatan mayoritas koalisi yang sangat solid, blok Islam tidak mampu menembus ambang batas <i>kuorum dua pertiga</i> (66,6% atau sekitar 343 suara) yang disyaratkan oleh UUDS 1950 untuk menetapkan dasar negara baru. Hal ini menciptakan polarisasi mutlak dengan Blok Kebangsaan (PNI, PKI, PSI, dan partai-partai Kristen/Katolik) yang bersitegang mempertahankan basis sekuler inklusif Pancasila 18 Agustus 1945.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Tuduhan Pengkhianatan Pancasila oleh K.H. Abdul Kahar Muzakir:</b> Dalam sidang paripurna Konstituante di Bandung pada bulan Desember 1957, K.H. Abdul Kahar Muzakir—tokoh penting Muhammadiyah dan mantan anggota Panitia Sembilan—menyampaikan pidato pembelaan Islam yang sangat revolusioner dan meledak-ledak. Ia menyatakan dengan tegas bahwa pencoretan sepihak klausul tujuh kata syariat pada tanggal 18 Agustus 1945, di bawah ancaman militer dan intimidasi spekulatif perwira laut Jepang, tidak lain adalah sebuah "tindakan pengkhianatan terhadap Pancasila" yang murni dan sah yang telah lahir melalui konsensus bersama tanggal 22 Juni 1945. Pidato ini memicu ketegangan emosional luar biasa di lantai sidang dan memperlebar jurang kompromi.
          </p>

          <p className="mb-[1.2em] text-justify leading-[1.6]">
            <b>Polemik Pasca-Dekret Presiden 1959 & Tafsir "Menjiwai":</b> Pasca-Dekret Presiden 5 Juli 1959 yang memberlakukan kembali UUD 1945 secara sepihak, polemik teologis bergeser pada status hukum kata "menjiwai" dalam konsiderans dekret tersebut.
          </p>

          <div className="bg-[#f0f4f8] border-l-4 border-indigo-700 p-4 text-[13px] my-4 leading-relaxed rounded-r shadow-xs text-justify">
            <b>Dinamika Pasca-Dekret & Perseteruan Tafsir Teologi-Hukum:</b>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>
                <b>Kubu Islam (K.H. Muhammad Dahlan & Buya Hamka):</b> Menteri Agama K.H. Muhammad Dahlan (tokoh NU) bersama Buya Hamka mempertahankan tafsir bahwa kata "menjiwai" bermakna legal-konstitutif yang imperatif. Artinya, Piagam Jakarta adalah roh dasar pembentukan hukum nasional, sehingga setiap undang-undang sektoral yang lahir di Indonesia (hukum keluarga, waris, peradilan) wajib diislamkan demi menyelaraskan dengan roh pembebas nilai-nilai dasar proklamasi.
              </li>
              <li>
                <b>Kubu Kristen & Kebangsaan (Fraksi Katolik / Majalah Peraba & Militer Baru):</b> Kelompok minoritas yang dimotori oleh Partai Katolik (melalui rilis opini berkala di Majalah <i>Peraba</i>) serta didukung oleh faksi perwira militer Angkatan Darat pasca-1968, menolak keras tafsir teokratis tersebut. Mereka berargumen bahwa penjiwaan Piagam Jakarta hanyalah bernilai sejarah pemikiran (historis-psikologis) untuk menghibur kelompok Islam yang kalah sidang, dan sama sekali tidak memiliki kekuatan kedaulatan perundang-undangan formal yang dapat mengikat secara paksa bagi warga negara non-Islam secara operasional. Hal ini didukung oleh pembentukan konsep militer orde baru yang antipasukan keagamaan ekstrim pasca-1968.
              </li>
            </ul>
          </div>

          {/* SECTION 7: Upaya Legislasi Syariat Orde Baru & Polemik Tokoh */}
          <h2 id="legislasi-syariat-orde-baru" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <Scale className="w-5 h-5 text-gray-750" />
              7. Upaya Legislasi Syariat Orde Baru & Polemik Tokoh
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>

          {/* FLOATING IMAGE: Mohammad Natsir */}
          <div className="float-right ml-5 mb-4 border border-[#ccc] bg-[#f8f9fa] p-1 w-[200px] text-[11px] leading-normal shadow-xs rounded-sm">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Mohammad_Natsir_2011_Indonesia_stamp.jpg" 
              alt="Mohammad Natsir" 
              referrerPolicy="no-referrer"
              className="w-full h-auto cursor-zoom-in hover:opacity-95 border border-gray-200" 
              onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/9/91/Mohammad_Natsir_2011_Indonesia_stamp.jpg")}
            />
            <div className="p-1.5 text-gray-700 text-[11px] text-justify leading-snug">
              Mohammad Natsir, tokoh utama pergerakan Masyumi dan mantan Perdana Menteri, pembela konstitusional hak yurisdiksi syariat dalam undang-undang sektoral.
            </div>
          </div>

          <p className="mb-[1em] text-justify leading-[1.6]">
            Di bawah kepemimpinan otoritarian Orde Baru pimpinan Presiden Soeharto, kebijakan penjinakan politik Islam (depolitisasi Islam) diterapkan secara masif demi stabilitas ekonomi dan geopolitik nasional. Walau demikian, ruang legislasi syariah dialihkan dari perjuangan konstitusional ke perjuangan hukum perdata sektoral, yang tetap memicu benturan keras antara kelompok keIslaman dan kelompok modernis sekuler.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Demonstrasi Santri seputar RUU Perkawinan 1974:</b> Pada tahun 1973, ketika pemerintah menyusulkan draf Rancangan Undang-Undang (RUU) Perkawinan yang dinilai sangat bermotif sekuler barat (seperti penyetaraan hak waris mutlak perempuan, pencatatan sipil murni, dan pembatasan ketat poligami), gelombang protes mahasiswa Islam dan ribuan santri pecah di jalanan Jakarta. Protes memuncak pada pendudukan paksa gedung DPR oleh massa pemuda Islam pada 27 September 1973. Kelompok Islam menuduh pemerintah sengaja meminggirkan asas syariat Islam yang dijiwai Piagam Jakarta. Mengalah pada amuk massa, Soeharto akhirnya melunakkan RUU tersebut dengan memasukkan pasal dalam UU Perkawinan No. 1 Tahun 1974 bahwa perkawinan sah apabila dilakukan menurut hukum masing-masing agama dan kepercayaannya—sebagai kristalisasi penting perlindungan syariah.
          </p>

          <p className="mb-[1.2em] text-justify leading-[1.6]">
            <b>Perdebatan Sengit RUU Peradilan Agama 1989 (Pastor Franz Magnis-Suseno vs Mohammad Natsir):</b> 
            Upaya formalisasi syariah kembali memanas dalam pembahasan RUU Peradilan Agama (UUPA) tahun 1989. Undang-undang ini bertujuan memberikan kemandirian penuh bagi Pengadilan Agama untuk mengadili sengketa perdata, waris, dan hibah di kalangan umat Islam tanpa perlu pengukuhan Pengadilan Negeri sipil. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 animate-fade-in">
            <div className="border border-red-200 bg-red-50/20 p-4 rounded text-xs text-justify leading-relaxed">
              <span className="font-bold text-[#ba0000] block mb-1">Pandangan Teologis Pastor Franz Magnis-Suseno</span>
              <p className="text-gray-700">
                Filsuf sekaligus rohaniwan Katolik terkemuka, Pastor Franz Magnis-Suseno, mengemukakan kritik keras secara terbuka di media nasional. Beliau mencurigai bahwa undang-undang peradilan agama ini merupakan penjelmaan halus, terselubung, dan taktik pintu belakang (<i>"backdoor integration"</i>) untuk memberlakukan kembali roh eksklusivitas Piagam Jakarta yang sengketa yurisdiksinya akan memecah kesatuan hukum nasional Indonesia yang tunggal.
              </p>
            </div>
            <div className="border border-emerald-250 bg-emerald-50/20 p-4 rounded text-xs text-justify leading-relaxed">
              <span className="font-bold text-emerald-850 block mb-1">Pembelaan Konstitusional Mohammad Natsir</span>
              <p className="text-gray-700">
                Mantan Perdana Menteri sekaligus sesepuh Masyumi, Mohammad Natsir, melayangkan pembelaan tertulis yang argumentatif. Natsir menegaskan bahwa mendirikan peradilan agama bagi pemeluk Islam bukanlah sekulerisasi ataupun diskriminasi teokratis, melainkan hak asasi pemeluk agama yang berketuhanan yang dijamin penuh oleh Pasal 29 ayat (2) UUD 1945, yang landasan morilnya sah bersumber dari penjiwaan Piagam Jakarta tanpa memaksakan non-Muslim tunduk.
              </p>
            </div>
          </div>

          {/* SECTION 8: Babak Amendemen Era Reformasi (1999–2002) */}
          <h2 id="sidang-reformasi-amandemen" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <Scale className="w-5 h-5 text-gray-750" />
              8. Babak Amendemen Era Reformasi (1999–2002)
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>
          <p className="mb-[1em] text-justify leading-[1.6]">
            Dinamika ketatanegaraan menemui puncaknya pada Sidang Tahunan MPR periode amandemen keempat tahun 2002. Faksi-faksi politik Islam kembali mengangkat panji Piagam Jakarta, mencoba merestorasi "tujuh kata" yang dinilai sebagai rukun iman kemerdekaan yang selama ini dipotong secara tidak sah.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Desakan Restorasi PPP dan PBB:</b> Fraksi Partai Persatuan Pembangunan (F-PPP) dan Fraksi Partai Bulan Bintang (F-PBB) mendesak keras agar naskah Pasal 29 ayat (1) UUD 1945 diamendemen berbunyi: <i>“Negara berdasar atas Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya”</i>. Mereka berargumentasi bahwa perubahan ini adalah tuntutan sejarah yang belum terselesaikan sejak 1945, dan pengakuan formal ini merupakan representasi sosiologis mayoritas rakyat Indonesia.
          </p>

          <p className="mb-[1em] text-justify leading-[1.6]">
            <b>Penolakan Fraksi Mayoritas Kebangsaan & Dua Ormas Terbesar:</b> 
            Usulan ini ditolak secara bulat dan gigih oleh koalisi fraksi nasionalis kebangsaan (PDIP, Golkar, Partai Demokrat) beserta perwakilan lintas iman demi keutuhan integrasi bangsa. Lebih lanjut, sikap kenegaraan yang progresif ditunjukkan oleh <b>Nahdlatul Ulama (NU)</b> dan <b>Muhammadiyah</b>. Melalui fatwa kepemimpinan KH Hasyim Muzadi (NU) dan Ahmad Syafii Maarif (Muhammadiyah), kedua ormas Islam terbesar ini menegaskan bahwa Pancasila dengan prinsip Ketuhanan Yang Maha Esa pada 18 Agustus 1945 sudah final dan memiliki kedudukan sah sebagai payung perdamaian sosiologis seluruh umat beriman di Indonesia. Memaksakan hukum teologis formal ke dalam konstitusi justru akan memorak-porandakan eksistensi teologis bangsa di luar wilayah Jawa.
          </p>

          <p className="mb-[0.8em] font-semibold text-[13px] text-gray-800 mt-6 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#0645ad]" />
            Tabel Tiga Alternatif Amendemen Pasal 29 Ayat (1) pada Sidang Tahunan MPR 2002:
          </p>
          <div className="overflow-x-auto w-full my-4">
            <table className="w-full text-xs text-left border-collapse border border-[#a2a9b1] table-auto shadow-xs">
              <thead>
                <tr className="bg-[#eaecf0] border-b border-[#a2a9b1] text-gray-800 font-bold">
                  <th className="p-3 border-r border-[#a2a9b1] text-center w-28">Opsi/Kategori</th>
                  <th className="p-3 border-r border-[#a2a9b1] w-72">Rumusan Teks Konsensus yang Diajukan</th>
                  <th className="p-3 border-r border-[#a2a9b1] w-48">Fraksi Pengusul di MPR</th>
                  <th className="p-3">Argumentasi Sejarah & Konsekuensi Hukum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#a2a9b1]/45 hover:bg-gray-50/50">
                  <td className="p-3 border-r border-[#a2a9b1]/40 font-bold text-gray-850">Alternatif I (Status Quo)</td>
                  <td className="p-3 border-r border-[#a2a9b1]/40 font-mono italic text-emerald-800 font-semibold bg-emerald-50/10">
                    "Negara berdasar atas Ketuhanan Yang Maha Esa."
                  </td>
                  <td className="p-3 border-r border-[#a2a9b1]/40">F-PDIP, F-Golkar, F-TNI/Polri, F-Kesatuan Kebangsaan</td>
                  <td className="p-3 text-gray-700">Mempertahankan asas kebangsaan yang inklusif untuk menjamin persatuan geopolitik seluruh wilayah NKRI. Hal ini didukung penuh oleh PB Nahdlatul Ulama dan PP Muhammadiyah.</td>
                </tr>
                <tr className="border-b border-[#a2a9b1]/45 hover:bg-gray-50/50">
                  <td className="p-3 border-r border-[#a2a9b1]/40 font-bold text-[#ba0000]">Alternatif II (Piagam Jakarta)</td>
                  <td className="p-3 border-r border-[#a2a9b1]/40 font-mono italic text-red-800 bg-red-50/10 font-bold">
                    "Negara berdasar atas Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya."
                  </td>
                  <td className="p-3 border-r border-[#a2a9b1]/40 font-medium">F-PPP & F-PBB</td>
                  <td className="p-3 text-gray-700 font-medium">Mengembalikan hak historis umat Islam berdasarkan kompromi orisinil Panitia Sembilan tanggal 22 Juni 1945. Mengikat kedaulatan moral hukum negara bagi pemeluk Islam.</td>
                </tr>
                <tr className="border-b border-[#a2a9b1]/45 hover:bg-gray-50/50">
                  <td className="p-3 border-r border-[#a2a9b1]/40 font-bold text-indigo-900">Alternatif III (Piagam Madinah)</td>
                  <td className="p-3 border-r border-[#a2a9b1]/40 font-mono italic text-indigo-800 bg-indigo-50/10">
                    "Negara berdasar atas Ketuhanan dengan kewajiban menjalankan syariat masing-masing penganut agamanya sesuai keyakinan agamanya."
                  </td>
                  <td className="p-3 border-r border-[#a2a9b1]/40">F-Reformasi (PAN), F-PKB</td>
                  <td className="p-3 text-gray-700">Klausul inklusif-pluralis sejajar terinspirasi dari traktat Konstitusi Madinah era Nabi Muhammad saw. Memberikan jaminan kemerdekaan syariat bagi seluruh penganut agama tanpa kecuali.</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3 border-r border-[#a2a9b1]/40 font-bold text-amber-700">Usul Kompromi Akhir</td>
                  <td className="p-3 border-r border-[#a2a9b1]/40 font-mono italic text-amber-900 bg-amber-50/10">
                    "Negara berdasar atas Ketuhanan Yang Maha Esa dengan penuh <b className="underline">kesungguhan</b> bagi pemeluk-pemeluknya."
                  </td>
                  <td className="p-3 border-r border-[#a2a9b1]/40">Diusulkan oleh K.H. Yusuf Muhammad (F-PKB)</td>
                  <td className="p-3 text-gray-700 italic text-[11px] leading-relaxed">
                    Upaya komprehensif diplomatis terakhir dari tokoh sosiolog Nahdliyin Yusuf Muhammad untuk memecah kejemukan sidang dengan kata moralis "kesungguhan", namun usulan ini ditarik secara sukarela demi menjaga mufakat persatuan yang utuh.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-[1.2em] text-justify leading-[1.6]">
            Pada akhirnya, Sidang Tahunan MPR 2002 secara bulat memilih kata mufakat naskah orisinil <b>Alternatif I (Status Quo)</b> tanpa dilakukan pemungutan suara (voting). F-PPP dan F-PBB sepakat menerima keputusan ini demi keutuhan nasional setelah mendapat penegasan resmi dari seluruh fraksi bahwa kedudukan teosentris UUD 1945, hukum perdata Islam, serta undang-undang relijius yang bersifat sektoral (seperti zakat, haji, perbankan syariah) tetap sah diakui penuh sebagai penjiwaan substansial dari Piagam Jakarta 22 Juni 1945.
          </p>

          {/* SECTION 9: Keterangan Astronomis & Kontekstual Sejarah */}
          <h2 id="keterangan" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <Landmark className="w-5 h-5 text-gray-750" />
              Keterangan & Glosarium Konstitusi
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>
          <div className="bg-[#f8f9fa] border border-[#a2a9b1] rounded p-4 text-[13px] text-justify leading-[1.6] space-y-2 mb-6">
            <p>
              <b>Gentlemen's Agreement (Persetujuan Terhormat):</b> Doktrin hukum ketatanegaraan yang menunjukkan perjanjian luhur yang mengikat secara moral, kehormatan, dan politik di luar kepastian legal-formal hitam di atas putih. Istilah ini dipopulerkan pertama kali oleh Mr. Muhammad Yamin untuk mendefinisikan Piagam Jakarta di hadapan sidang BPUPK.
            </p>
            <p>
              <b>Tujuh Kata:</b> Istilah simplifikasi populer sosiopolitik untuk merujuk pada anak kalimat eksklusif tujuh kata: <i>"dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya"</i> yang menjadi sumber dinamika konstitusi di Indonesia.
            </p>
            <p>
              <b>Kaigun:</b> Sebutan untuk Angkatan Laut Kekaisaran Jepang. Perwira penghubung Kaigun inilah yang secara historis menyampaikan keberatan teologis dari para pemuka Kristen di wilayah timur Indonesia ke hadapan Drs. Mohammad Hatta pada petang hari pembacaan proklamasi, 17 Agustus 1945.
            </p>
          </div>

          {/* SECTION 10: Catatan Kaki Akbar & Rujukan Anotasi Tokoh */}
          <h2 id="catatan-kaki" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <FileText className="w-5 h-5 text-gray-750" />
              Catatan Kaki & Anotasi Akademis
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>
          <div className="text-[12.5px] font-sans leading-[1.6] text-[#202122] bg-[#f8f9fa] p-5 border border-[#eaecf0] rounded mb-6">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <b><a href="#latar-belakang" className="text-[#0645ad] hover:underline">^</a></b> 
                <b>Anotasi Buku Saifuddin Anshari:</b> Saifuddin Anshari (1997). <i>The Jakarta Charter 1945: The Struggle for an Islamic Constitution in Indonesia</i>. Bandung: Penerbit Mizan. Buku ini memaparkan secara monumental bahwa pertentangan ideologi nasionalis versus teonomis Islam di BPUPK dan Konstituante bukanlah sekadar sengketa redaksional kalimat, melainkan pertarungan teologi masa depan eksistensi politik kedaulatan umat Muslim pasca-kolonial.
              </li>
              <li>
                <b><a href="#penghapusan-tujuh-kata" className="text-[#0645ad] hover:underline">^</a></b> 
                <b>Anotasi Studi Robert Edward Elson:</b> R.E. Elson (2009). <i>"Another Look at the Jakarta Charter"</i>. Journal of Southeast Asian Studies. Elson melakukan rujukan arsip Belanda-Jepang yang mengonfirmasi bahwa desakan opsir Kaigun pada petang 17 Agustus bukanlah rekayasa personal melainkan perwujudan kegelisahan geopolitik masyarakat non-Muslim di luar Jawa yang tidak bersedia tunduk pada hegemoni kedaulatan teologis Jakarta.
              </li>
              <li>
                <b><a href="#dekret-presiden" className="text-[#0645ad] hover:underline">^</a></b> 
                <b>Anotasi Studi B.J. Boland:</b> B.J. Boland (1971). <i>The Struggle of Islam in Modern Indonesia</i>. The Hague: Martinus Nijhoff. Kajian klasik yang menjelaskan bahwa keikhlasan bersedia menerima pencoretan tujuh kata oleh Ki Bagus Hadikoesoemo didorong oleh keyakinan murni bahwa esensi tauhid murni dari kalimat "Ketuhanan Yang Maha Esa" bernisbah ontologis setara dengan pemasyarakatan tauhid Islam murni.
              </li>
              <li>
                <b><a href="#sidang-reformasi-amandemen" className="text-[#0645ad] hover:underline">^</a></b> 
                <b>Anotasi Buku Arskal Salim:</b> Arskal Salim (2008). <i>Challenging the Secular State: The Islamization of Law in Modern Indonesia</i>. Honolulu: University of Hawaii Press. Salim menganalisis metamorfosis strategi islamisasi hukum di Indonesia, dari formalisasi konstitusional Piagam Jakarta yang gagal di MPR 2002, bergeser secara cerdas menjadi desentralisasi produk daerah syariah perdata sektoral di seluruh kabupaten/kota Indonesia pasca-otonomi daerah.
              </li>
              <li>
                <b><a href="#sidang-reformasi" className="text-[#0645ad] hover:underline">^</a></b> 
                <b>Anotasi Buku Nadirsyah Hosen:</b> Nadirsyah Hosen (2007). <i>Shari'a and Constitutional Reform in Indonesia</i>. Singapore: Institute of Southeast Asian Studies. Hosen membuktikan bahwa interpretasi elastis dari diktum "menjiwai" dalam Dekret Presiden 1959 memberikan fleksibilitas yuridis bagi mahkamah konstitusional untuk melegalkan produk perundang-undangan bernuansa Islam (seperti perbankan syariah) tanpa perlu amandemen tekstual dasar negara.
              </li>
            </ol>
          </div>

          {/* SECTION 11: Daftar Pustaka Sejarah Komplet */}
          <h2 id="daftar-pustaka" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <Bookmark className="w-5 h-5 text-gray-750" />
              Daftar Pustaka & Historiografi Rujukan
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[13px] mb-12 text-gray-800 text-justify">
            <li>
              Anshari, Saifuddin (1997). <i>Piagam Jakarta 22 Juni 1945: Sebuah Konsensus Nasional dan Sejarah Pergolakan Politik Republik Indonesia</i>. Jakarta: Gema Insani Press.
            </li>
            <li>
              Boland, B.J. (1971). <i>The Struggle of Islam in Modern Indonesia</i>. Verhandelingen van het Koninklijk Instituut voor Taal-, Land- en Volkenkunde. The Hague: Martinus Nijhoff.
            </li>
            <li>
              Elson, Robert Edward (2009). <i>The Jakarta Charter: Islam, State, and Constitution in the Formulation of Indonesia's Constitution</i>. Journal of Southeast Asian Studies, Vol. 40, No. 2.
            </li>
            <li>
              Hosen, Nadirsyah (2007). <i>Shari'a and Constitutional Reform in Indonesia</i>. Singapore: Institute of Southeast Asian Studies (ISEAS). ISBN 978-981-230-402-5.
            </li>
            <li>
              Natsir, Mohammad (1973). <i>Capita Selecta</i> (Koleksi Pemikiran Agama & Ketatanegaraan). Jilid 1, 2, dan 3. Jakarta: Media Dakwah.
            </li>
            <li>
              Salim, Arskal (2008). <i>Challenging the Secular State: The Islamization of Law in Modern Indonesia</i>. Honolulu: University of Hawaii Press. ISBN 975-0-8248-3153-0.
            </li>
            <li>
              Sekretariat Jenderal Majelis Permusyawaratan Rakyat RI (2002). <i>Risalah Lengkap Sidang Tahunan Majelis Permusyawaratan Rakyat Republik Indonesia Tahun 1999–2002 tentang Perubahan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945</i>. Jakarta: Secretariat Jenderal MPR RI.
            </li>
            <li>
              Yamin, Muhammad (1959). <i>Naskah Persiapan Undang-Undang Dasar 1945: Disusun Dengan Bahan-Bahan Dokumen Historis Sedjak Sidang Pertama BPUPKI Hingga Pembubaran Konstituante</i>. Jilid I, II, dan III. Jakarta: Penerbit Prapantja.
            </li>
          </ul>

          {/* SECTION 12: Pranala Luar Terverifikasi */}
          <h2 id="pranala-luar" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-10 mb-[0.4em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
            <span className="flex items-center gap-1.5">
              <ExternalLink className="w-5 h-5 text-gray-750" />
              Pranala Luar & Arsip Digital
            </span>
            <span className="text-[11px] font-sans text-gray-400 select-none opacity-0 group-hover:opacity-100 transition-opacity">
              [<span className="text-[#0645ad] hover:underline cursor-pointer">sunting</span>]
            </span>
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[13px] mb-12">
            <li>
              <a href="https://anri.go.id" target="_blank" rel="noopener noreferrer" className="text-[#0645ad] hover:underline flex items-center gap-1">
                Arsip Nasional Republik Indonesia (ANRI) - Naskah & Dokumen Arsip Foto Orisinil Kompromi Piagam Jakarta 1945
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a href="https://www.mahkamahkonstitusi.go.id" target="_blank" rel="noopener noreferrer" className="text-[#0645ad] hover:underline flex items-center gap-1">
                Pusat Penelitian Hukum & Konstitusi Mahkamah Konstitusi RI - Jurnal Hukum Amandemen Reformasi Penjiwaan Piagam Jakarta
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a href="https://www.perpusnas.go.id" target="_blank" rel="noopener noreferrer" className="text-[#0645ad] hover:underline flex items-center gap-1">
                Koleksi Naskah Pidato Tokoh Panitia Sembilan - Perpustakaan Nasional Republik Indonesia
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// Inline Icon to keep dependencies minimal yet fully compliant with TSX rules
function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
