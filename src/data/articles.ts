export interface ArticleSection {
  title: string;
  content: string;
}

export interface WikiArticle {
  title: string;
  subheading: string;
  category: string;
  summary: string;
  infobox?: {
    title: string;
    image?: string;
    imageCaption?: string;
    data: { label: string; value: string }[];
  };
  paragraphs: string[];
  sections?: ArticleSection[];
}

export const wikiArticles: Record<string, WikiArticle> = {
  "Abikoesno Tjokrosoejoso": {
    title: "Abikoesno Tjokrosoejoso",
    subheading: "Politikus, Arsitek, dan Tokoh Pergerakan Nasionalis Islam Indonesia",
    category: "Tokoh Sejarah",
    summary: "Seorang tokoh nasionalis Islam, salah satu perumus Piagam Jakarta, ketua PSII, dan Menteri Perhubungan pertama Republik Indonesia.",
    infobox: {
      title: "Abikoesno Tjokrosoejoso",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/RM_Abikusno_Tjokrosujoso%2C_Pekan_Buku_Indonesia_1954%2C_p247.jpg/180px-RM_Abikusno_Tjokrosujoso%2C_Pekan_Buku_Indonesia_1954%2C_p247.jpg",
      imageCaption: "Abikoesno Tjokrosoejoso pada tahun 1954",
      data: [
        { label: "Lahir", value: "15 Juni 1897, Kebumen, Hindia Belanda" },
        { label: "Wafat", value: "1968 (Umur 71), Jakarta, Indonesia" },
        { label: "Organisasi", value: "Partai Syarikat Islam Indonesia (PSII)" },
        { label: "Jabatan", value: "Menteri Perhubungan RI pertama (1945)" },
        { label: "Golongan", value: "Nasionalis Islam (Panitia Sembilan)" }
      ]
    },
    paragraphs: [
      "Raden Mas Abikoesno Tjokrosoejoso adalah salah satu tokoh penting pejuang kemerdekaan yang juga tergabung dalam Panitia Sembilan perumus ideologi negara Indonesia. Sebagai representasi dari kalangan Islam sayap politik Syarikat Islam, ia gigih memastikan aspirasi umat terakomodasi dalam tata dasar konstitusi Indonesia merdeka.",
      "Abikoesno merupakan adik kandung dari pemimpin legendaris pergerakan Islam Nusantara, H.O.S. Tjokroaminoto. Latar belakang keluarganya membekalinya dengan pemikiran keIslaman yang kokoh sekaligus visi kebangsaan yang modern."
    ],
    sections: [
      {
        title: "Peran di Panitia Sembilan",
        content: "Dalam perumusan dasar negara yang berlangsung tegang pada pertengahan 1945, Abikoesno bersama para tokoh Islam membela pencantuman kalimat syariat Islam bagi para pemeluknya. Kompromi ini melahirkan Piagam Jakarta pada 22 Juni 1945 yang kelak menjadi cikal bakal rancangan konsensus kebangsaan."
      },
      {
        title: "Karier Pasca-Kemerdekaan",
        content: "Setelah proklamasi kemerdekaan 17 Agustus 1945, Abikoesno dipercaya menjabat sebagai Menteri Perhubungan (Menteri Pekerjaan Umum) pertama dalam Kabinet Presidensial pimpinan Ir. Soekarno."
      }
    ]
  },

  "Abdul Kahar Muzakkir": {
    title: "Abdul Kahar Muzakkir",
    subheading: "Pendidik Islam, Cendekiawan, dan Tokoh Pendiri Universitas Islam Indonesia",
    category: "Tokoh Sejarah",
    summary: "Seorang cendekiawan Islam, tokoh terkemuka Muhammadiyah, anggota Panitia Sembilan, dan rektor legendaris.",
    infobox: {
      title: "Prof. K.H. Abdul Kahar Muzakkir",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Abdul_Kahar_Mudzakkir.jpg/180px-Abdul_Kahar_Mudzakkir.jpg",
      imageCaption: "Abdul Kahar Muzakkir, tokoh pejuang pendidikan Islam",
      data: [
        { label: "Lahir", value: "16 April 1907, Kotagede, Yogyakarta" },
        { label: "Wafat", value: "2 Desember 1973 (Umur 66), Yogyakarta" },
        { label: "Organisasi", value: "Muhammadiyah" },
        { label: "Profesi", value: "Rektor, Ulama, Politikus" },
        { label: "Penghargaan", value: "Pahlawan Nasional Indonesia" }
      ]
    },
    paragraphs: [
      "Profesor K.H. Abdul Kahar Muzakkir adalah ulama besar, pemikir Islam, dan akademisi Indonesia yang menjadi figur penting pembentuk sendi dasar sistem republik melalui keterlibatannya dalam Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan (BPUPK). Ia merupakan kader andalan Muhammadiyah yang disegani di tingkat internasional.",
      "Ia menyelesaikan studi diplomasinya di Universitas Al-Azhar, Kairo, Mesir. Pengalaman internasional ini menjadikannya salah satu utusan diplomasi awal yang memperkenalkan hak kedaulatan Indonesia ke dunia Timur Tengah."
    ],
    sections: [
      {
        title: "Perumusan Dasar Negara",
        content: "Bersama kelompok nasionalis Islam seperti K.H. Wahid Hasyim dan H. Agus Salim, beliau menyumbang pemikiran teologis yang moderat namun memegang teguh identitas keIslaman kepulauan demi meredam dikotomi antara konsep negara sekuler dan negara teokratis murni."
      },
      {
        title: "Dedikasi Pendidikan",
        content: "Pasca-kemerdekaan, ia memusatkan hampir seluruh hidupnya untuk membangun Sekolah Tinggi Islam (STI) di Yogyakarta, yang bertransformasi menjadi Universitas Islam Indonesia (UII), salah satu perguruan tinggi islam swasta tertua di tanah air."
      }
    ]
  },

  "Achmad Soebardjo": {
    title: "Achmad Soebardjo",
    subheading: "Diplomat Utama, Pejuang Kemerdekaan, dan Menteri Luar Negeri Pertama Indonesia",
    category: "Tokoh Sejarah",
    summary: "Diplomat ulung, perumus naskah proklamasi sekutu kemerdekaan, tokoh golongan nasionalis di Panitia Sembilan.",
    infobox: {
      title: "Mr. Raden Achmad Soebardjo Djojoadisoerjo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Achmad_soebardjo.jpg/180px-Achmad_soebardjo.jpg",
      imageCaption: "Achmad Soebardjo, pelopor kedaulatan luar negeri",
      data: [
        { label: "Lahir", value: "23 Maret 1896, Karawang, Jawa Barat" },
        { label: "Wafat", value: "15 Desember 1978 (Umur 82), Jakarta" },
        { label: "Pendidikan", value: "Universitas Leiden, Belanda" },
        { label: "Jabatan", value: "Menteri Luar Negeri RI pertama" },
        { label: "Gelar", value: "Pahlawan Nasional Indonesia" }
      ]
    },
    paragraphs: [
      "Mr. Raden Achmad Soebardjo Djojoadisoerjo adalah salah seorang tokoh nasionalis kebangsaan terkemuka yang meletakkan fondasi diplomasi internasional Republik Indonesia. Lulusan hukum dari Universitas Leiden Belanda, ia bertindak sebagai jembatan negosiasi krusial antara golongan muda dan golongan tua pada detik-detik proklamasi Agustus 1945.",
      "Ia sangat berperan dalam mengakhiri ketegangan peristiwa Rengasdengklok dengan memberikan jaminan nyawa kepada para pemuda bahwa proklamasi akan dilaksanakan selambat-lambatnya tanggal 17 Agustus 1945."
    ],
    sections: [
      {
        title: "Peran dalam Panitia Sembilan",
        content: "Sebagai perwakilan kubu nasionalis sekuler yang luwes, Soebardjo kerap menawarkan kompromi linguistik yang berbobot hukum tinggi agar dapat mempertemukan kepentingan nasionalis sekuler dangan kalangan Islamis yang menginginkan syariat terakomodasi dalam dasar negara."
      }
    ]
  },

  "Alexander Andries Maramis": {
    title: "Alexander Andries Maramis",
    subheading: "Pakar Hukum, Menteri Keuangan Indonesia, dan Diplomat Lintas Rezim",
    category: "Tokoh Sejarah",
    summary: "Satu-satunya wakil non-Muslim dalam Panitia Sembilan, perancang Oeang Republik Indonesia (ORI), dan Menteri Keuangan pertama.",
    infobox: {
      title: "Mr. Alexander Andries Maramis",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alexander_andries_maramis.jpg/180px-Alexander_andries_maramis.jpg",
      imageCaption: "A.A. Maramis, pakar hukum keuangan",
      data: [
        { label: "Lahir", value: "20 Juni 1897, Manado, Sulawesi Utara" },
        { label: "Wafat", value: "31 Juli 1974 (Umur 77), Jakarta" },
        { label: "Almamater", value: "Universitas Leiden, Belanda" },
        { label: "Afiliasi", value: "Nasionalis Kebangsaan" },
        { label: "Karya Agung", value: "Menerbitkan Oeang Republik Indonesia (ORI)" }
      ]
    },
    paragraphs: [
      "Mr. Alexander Andries Maramis adalah pejuang kemerdekaan asal Minahasa yang bertindak sebagai penjaga kesatuan nasional dalam perumusan dasar negara. Sebagai penganut Kristen satu-satunya dalam keanggotaan Panitia Sembilan, eksistensinya menjadi penegas bahwa Indonesia merdeka didirikan di atas pluralisme rasial dan keagamaan yang utuh.",
      "Keahlian hukumnya yang luas dari pendidikan Belanda membantu merapikan sendi-sendi konstitusionalisme dasar negara Indonesia."
    ],
    sections: [
      {
        title: "Penerbitan ORI (Mata Uang Republik)",
        content: "Menjabat sebagai Menteri Keuangan pada masa kepemimpinan Soekarno, Maramis mengambil keputusan berani untuk mencetak uang sendiri (Oeang Republik Indonesia/ORI) guna menandingi peredaran mata uang NICA, memicu penguatan kedaulatan ekonomi rakyat secara signifikan."
      }
    ]
  },

  "Agus Salim": {
    title: "Agus Salim",
    subheading: "The Grand Old Man, Negosiator Internasional, dan Ulama Intelektual",
    category: "Tokoh Sejarah",
    summary: "Diplomat legendaris, jurnalis kawakan, menguasai sembilan bahasa asing, pembela utama rumusan Piagam Jakarta.",
    infobox: {
      title: "Haji Agus Salim",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Agus_Salim_headshot.jpg/180px-Agus_Salim_headshot.jpg",
      imageCaption: "H. Agus Salim, sang diplomat bersahaja",
      data: [
        { label: "Lahir", value: "8 Oktober 1884, Koto Gadang, Sumatera Barat" },
        { label: "Wafat", value: "4 November 1954 (Umur 70), Jakarta" },
        { label: "Julukan", value: "The Grand Old Man" },
        { label: "Keahlian", value: "Poliglot (9 Bahasa Asing)" },
        { label: "Status", value: "Pahlawan Nasional Indonesia" }
      ]
    },
    paragraphs: [
      "Haji Agus Salim (lahir dengan nama Mashudul Haq) adalah seorang intelektual muslim, diplomat, dan pemimpin politik legendaris Indonesia. Terkenal karena kesederhanaan hidupnya yang radikal namun memiliki kecerdasan retorika dan penguasaan bahasa asing yang luar biasa, ia kerap mementahkan argumen diplomat Barat di forum global.",
      "Dalam perdebatan di BPUPK, ia menjadi benteng pertahanan argumentasi kalangan Islamis dalam merumuskan syariat, sembari mengedepankan hak konstitusional kelompok minoritas."
    ],
    sections: [
      {
        title: "Perjuangan Pengakuan Kemerdekaan",
        content: "Agus Salim memimpin misi diplomatik bersejarah ke Mesir, Suriah, dan Arab Saudi pada 1947, berhasil meraih pengakuan kedaulatan de jure pertama bagi Indonesia dari liga negara-negara Arab."
      }
    ]
  },

  "Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan": {
    title: "Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan",
    subheading: "Majelis Agung Pendiri Konstitusi dan Dasar Negara Indonesia",
    category: "Sejarah",
    summary: "Sidang kolosal sejarah yang mempersiapkan perumusan Pancasila, wilayah negara, bentuk negara, dan naskah awal konstitusi.",
    paragraphs: [
      "Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan (BPUPK) - dalam bahasa Jepang disebut Dokuritsu Junbi Cosakai - adalah badan yang dibentuk oleh pemerintah pendudukan militer Kekaisaran Jepang pada 29 April 1945 sebagai wujud realisasi janji kemerdekaan bagi bangsa Indonesia.",
      "Majelis ini beranggotakan para pemikir terbesar zamannya, mulai dari nasionalis kebangsaan hingga ulama tradisionalis, yang didelegasikan untuk berdebat secara mendalam, rasional, dan komparatif guna merancang falsafah luhur Indonesia merdeka."
    ],
    sections: [
      {
        title: "Sidang Pertama: Menemukan Dasar Negara",
        content: "Berlangsung dari 29 Mei hingga 1 Juni 1945, sidang ini menjadi panggung lahirnya gagasan dasar negara. Puncaknya terjadi pada 1 Juni, ketika Ir. Soekarno menyampaikan pidato monumental mengenai gagasan lima prinsip kebangsaan yang dinamakannya Pancasila."
      },
      {
        title: "Lahirnya Panitia Sembilan",
        content: "Untuk menyinkronkan perbedaan pandangan tajam antara pembela konsep negara Islam dan negara kebangsaan, dibentuklah Panitia Sembilan kecil di luar sidang formal, menghasilkan rumusan Piagam Jakarta pada 22 Juni 1945."
      }
    ]
  },

  "Bung Hatta": {
    title: "Bung Hatta",
    subheading: "Proklamator, Bapak Koperasi Indonesia, dan Pemikir Ekonomi Kerakyatan",
    category: "Tokoh Sejarah",
    summary: "Negarawan teladan, Wakil Presiden pertama Republik Indonesia, penjaga moral demokrasi konstitusional, penyusun konsensus 18 Agustus.",
    infobox: {
      title: "Dr. H. Mohammad Hatta (Bung Hatta)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hatta-1.jpg/180px-Hatta-1.jpg",
      imageCaption: "Drs. Mohammad Hatta pada masa perjuangan",
      data: [
        { label: "Lahir", value: "12 Agustus 1902, Bukittinggi, Sumatera Barat" },
        { label: "Wafat", value: "14 Maret 1980 (Umur 77), Jakarta" },
        { label: "Julukan", value: "Bapak Koperasi Indonesia" },
        { label: "Jabatan", value: "Wakil Presiden RI Pertama (1945–1956)" },
        { label: "Pasangan", value: "Siti Rahmiati Hatta" }
      ]
    },
    paragraphs: [
      "Dr. Mohammad Hatta adalah negarawan, ekonom, intelektual, dan pejuang kemerdekaan Indonesia yang menjabat sebagai Wakil Presiden pertama. Bersama Soekarno, ia memproklamasikan Kemerdekaan Indonesia atas nama bangsa pada 17 Agustus 1945.",
      "Hatta dikenal karena disiplin hidupnya yang super ketat, kejujuran finansialnya yang absolut, serta pembelaannya yang tekun terhadap konsep Demokrasi Deliberatif dan keadilan sosial berasas kekeluargaan."
    ],
    sections: [
      {
        title: "Konsensus 18 Agustus 1945",
        content: "Pada sore hari tanggal 17 Agustus 1945, Hatta menerima asisten angkatan laut Jepang yang membawa aspirasi keberatan tokoh Indonesia Timur atas 'tujuh kata' syariat Islam dalam Piagam Jakarta. Keesokan mulanya, dengan kearifan konstitusional tinggi, Hatta meyakinkan tokoh-tokoh Islam terkemuka seperti Ki Bagus Hadikusumo untuk menghapus frasa tersebut demi mengikat seluruh Nusantara dalam satu republik."
      }
    ]
  },

  "Chelsie Monica": {
    title: "Chelsie Monica Ignesias Sihite",
    subheading: "Pecatur Putri Berprestasi Tinggi Kebanggaan Indonesia",
    category: "Olahraga & Tokoh",
    summary: "Seorang pecatur putri terkemuka Indonesia pemegang gelar Woman International Master (WIM) dengan deretan prestasi gemilang nasional dan internasional.",
    infobox: {
      title: "Chelsie Monica Ignesias Sihite",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Chelsie_Monica_Ignesias_Sihite.jpg",
      imageCaption: "Chelsie di Olimpiade Catur ke-43",
      data: [
        { label: "Lahir", value: "2 November 1995 (umur 30)\nBalikpapan, Kalimantan Timur, Indonesia" },
        { label: "Pendidikan", value: "Sekolah Catur Utut Adianto" },
        { label: "Almamater", value: "Perbanas Institute" },
        { label: "Pekerjaan", value: "Pecatur" },
        { label: "Tahun aktif", value: "2003–sekarang" },
        { label: "Gelar", value: "Women International Master" },
        { label: "Rating FIDE", value: "2252 (Maret 2021)" },
        { label: "Rating tertinggi", value: "2290 (Mei 2013)" }
      ]
    },
    paragraphs: [
      "Ini adalah nama Batak Toba, marganya adalah Sihite.",
      "Chelsie Monica Ignesias Sihite, S.E. (lahir 2 November 1995) adalah salah satu pecatur putri asal Indonesia. Bungsu dari 3 bersaudara ini tertarik pada catur sejak kanak-kanak. Awalnya, Chelsie tertarik melihat keasyikan sang ayah bermain catur."
    ],
    sections: [
      {
        title: "Karier dan Prestasi",
        content: "Chelsie mendapat gelar WIM (Woman International Master) atau MIW (Master Internasional Wanita) tanpa harus melalui tiga kali norma MIW pada ASEAN+ Age Group Chess Championship 2011 di Tarakan, Kalimantan Utara, 13–19 Juni 2011.\n\nPada World Junior Chess Championship 2012 Girls Under 20 di Yunani, Chelsie yang turun sebagai unggulan 24 (elo rating 2162) tampil dengan finis pada urutan kedelapan dengan poin 8,5/13 dan rating performance 2319. Hasil ini diperoleh dari delapan kali menang, satu kali seri, dan empat kali kalah dari (WGM Kashlinskaya Alina (2391), WFM Kulon Klaudia (2259), WIM Arabidze Meri (2379) dan IM Bodnaruk Anastasia (2414)). Ia juga berhasil menumbangkan beberapa pecatur yang ratingnya jauh lebih tinggi seperti WGM Goryachkina Aleksandra (2361), WGM Vojinovic Jovana (2337) dan WIM Schut Lisa (2305). Dengan hasil ini, Chelsie mendapat tambahan elo rating 41,8. Pada Olimpiade Catur 2012 di Istanbul, Turki, Chelsie mendapatkan norma grandmaster pertamanya.\n\nTampil di papan dua (elo rating 2162), Chelsie mengumpulkan poin 8/10 (7 kali menang dari Sukhu Gloria (1528), WGM Pina Vega Sulennis (2345), Sultana Sharmin Shirin (2002), WCM Sanchez Oliva Ingrid Lizeth (1992), IM Zimina Olga (2327), WFM Guindy Esmat Susanne (2132), dan WGM Botsari Anna-Maria (2336), dua kali remis dari WGM Nikolova Adriana (2299), dan kalah dari WGM Nemcova Katerina (2276). Rating performance Chelsia mencapai 2370 dan memperoleh tambahan elo rating +45 poin.\n\nTujuh tahun kemudian, Chelsie berhasil mendapatkan norma WGM keduanya pada turnamen Japfa Women Grand Master 2019 di Yogyakarta.\n\nChelsie terdaftar pada situs resmi FIDE dengan nomor kode 7101198 dan memiliki rating 2.252 pada Maret 2021."
      },
      {
        title: "Daftar Prestasi Utama",
        content: "• Juara 2 ASEAN Age Group Chess Championship di Muangthai 2005\n• Juara 2 di 6th World School Chess Festival di Singapura 2006\n• Juara 2 ASEAN Age Group Chess Championship di Indonesia 2006\n• Juara World School Chess Championship di Singapura 2008\n• Juara ASEAN Age Group Girl Under-16 di Filipina 2011\n• Juara 1 Turnamen Catur Piala Gubernur Chelyabinsk, Rusia, 2011\n• Juara 1 Sea Games di Myanmar 2013\n• Juara 3 Asian Indoor Martial Art Games di Korea Selatan 2013\n• Juara 3 Asian Indoor Martial Art Games di Turkmenistan 2017\n• Juara 2 Sea Games di Filipina 2019"
      }
    ]
  },

  "Dekret Presiden 1959": {
    title: "Dekret Presiden 1959",
    subheading: "Keputusan Darurat Kemandekaan Konstituante dan Lahirnya Demokrasi Terpimpin",
    category: "Sejarah",
    summary: "Dekret monumental Soekarno pada 5 Juli 1959 yang menetapkan kembalinya UUD 1945 dan menyatakan spirit Piagam Jakarta menjiwai konstitusi.",
    paragraphs: [
      "Dekret Presiden 5 Juli 1959 adalah dekret yang dikeluarkan oleh Presiden RI pertama Soekarno guna mengatasi kebuntuan politik berkepanjangan di dalam Majelis Konstituante hasil Pemilu 1955. Kegagalan melahirkan dasar negara definitif yang baru memicu krisis keamanan nasional yang hebat.",
      "Dekret ini secara hukum menetapkan pembubaran Konstituante, berlakunya kembali Undang-Undang Dasar 1945, serta matinya secara resmi amanat UUDS 1950."
    ],
    sections: [
      {
        title: "Frasa Piagam Jakarta Menjiwai UUD 1945",
        content: "Guna meredam amarah dan menjaga inklusivitas kekuatan politik Islam pasca-pembubaran konstituante, Soekarno mengemas jaminan politik dalam Dekret dengan konsideran berbobot hukum tinggi: 'Bahwa kami berkeyakinan bahwa Piagam Jakarta tertanggal 22 Juni 1945 menjiwai Undang-Undang Dasar 1945 dan adalah merupakan suatu rangkaian kesatuan dengan konstitusi tersebut.'"
      }
    ]
  },

  "Demokrasi": {
    title: "Demokrasi",
    subheading: "Sistem Kedaulatan Rakyat, Pembagian Kekuasaan, dan Perlindungan Hak Sipil",
    category: "Filsafat & Politik",
    summary: "Falsafah kepemimpinan publik di mana kendali hukum tertinggi berada di tangan kehendak kolektif masyarakat sipil.",
    paragraphs: [
      "Demokrasi secara etimologis berasal dari bahasa Yunani 'demos' (rakyat) dan 'kratos' (kekuasaan), merujuk pada sistem pemerintahan yang menempatkan rakyat sebagai penentu kebijakan publik tertinggi baik secara langsung maupun lewat perwakilan.",
      "Di Indonesia, integrasi demokrasi berpadu erat dengan kearifan musyawarah mufakat, melahirkan demokrasi Pancasila yang menjunjung gotong-royong sosial dan menghindari absolutisme kepemimpinan mayoritas murni."
    ]
  },

  "Etika": {
    title: "Etika",
    subheading: "Filsafat Moral, Penilaian Kebajikan, dan Penentu Standar Kelakuan Baik",
    category: "Filsafat & Politik",
    summary: "Cabang ilmu kemanusiaan klasik yang meneliti kriteria kebenaran tindakan manusia ditinjau secara rasional.",
    paragraphs: [
      "Etika adalah cabang utama filsafat yang mempelajari nilai atau kualitas moral, berupa studi sistematis mengenai kebaikan, keburukan, kebenaran dari tindakan, serta tanggung jawab kebebasan manusia.",
      "Di era peradaban modern, etika menjadi tali kekang kritis bagi pengembangan sains, teknologi, hukum, dan politik agar tidak melupakan hak harkat martabat kodrati kemanusiaan."
    ]
  },

  "Filsafat": {
    title: "Filsafat",
    subheading: "Seni Berpikir Radikal, Pencarian Hakikat Eksistensi, dan Landasan Akal Sehat",
    category: "Filsafat & Politik",
    summary: "Metodologi berpikir mendalam yang melacak akar purba kebenaran, epistemologi sains, dan landasan moralitas manusia.",
    paragraphs: [
      "Filsafat (dari bahasa Yunani: philosophia, bermakna 'cinta akan kebijaksanaan') adalah aktivitas refleksi intelektual yang menyelidiki secara komparatif, kritis, radikal, dan sistematis mengenai persoalan eksistensial, bahasa, pengetahuan, nilai moral, budi, dan akal sehat.",
      "Sejarah perkembangan peradaban manusia menunjukkan bahwa bangunan hukum sipil, tatanan negara, logika digital ilmiah, hingga etika kemanusiaan dirumuskan pertama kali oleh buah penalaran filosofis."
    ],
    sections: [
      {
        title: "Metode Berpikir Kritis",
        content: "Filsafat bekerja dengan mendeteksi berbagai sesat pikir (logical fallacy) dalam retorika publik, membersihkan prasangka dogma buta, dan merevitalisasi kemampuan berpikir rasional yang argumentatif."
      }
    ]
  },

  "Gedung Dwiwarna": {
    title: "Gedung Dwiwarna",
    subheading: "Situs Historis Sidang Konstituante Bandung",
    category: "Sejarah",
    summary: "Gedung bersejarah di Kota Bandung tempat diselenggarakannya perdebatan filosofis konstitusi Indonesia oleh Konstituante (1956–1959).",
    paragraphs: [
      "Gedung Dwiwarna yang berlokasi di Jalan Diponegoro, Bandung adalah kompleks cagar budaya historis agung tempat berlangsungnya persidangan legendaris Majelis Konstituante Republik Indonesia dari tahun 1956 hingga 1959.",
      "Di gedung inilah, para ideolog dan pemikir besar bangsa, dari Mohammad Natsir, Sukiman, hingga Soetan Sjahrir, beradu argumen teoritis tingkat tinggi merancang konstitusi yang dicita-citakan Indonesia merdeka."
    ]
  },

  "Johannes Latuharhary": {
    title: "Johannes Latuharhary",
    subheading: "Mr. J. Latuharhary, Negosiator Federal, dan Pelopor Inklusi Indonesia Timur",
    category: "Tokoh Sejarah",
    summary: "Tokoh nasionalis kristen Maluku, penyuara keberatan pertama atas tujuh kata Piagam Jakarta di sidang BPUPK.",
    infobox: {
      title: "Mr. Johannes Latuharhary",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuEUMFd9qFN1aSNjc8TQ-wncl8IlvoU2av5nnT6qtVo5DXOq1ezLp1yZt&s=10",
      imageCaption: "Johannes Latuharhary, tokoh konstitusionalis Maluku",
      data: [
        { label: "Lahir", value: "6 Juli 1900, Saparua, Maluku" },
        { label: "Wafat", value: "11 November 1948 (Umur 48), Jakarta" },
        { label: "Partai", value: "Parindra" },
        { label: "Status", value: "Pahlawan Nasional Indonesia" },
        { label: "Jabatan", value: "Gubernur Maluku pertama" }
      ]
    },
    paragraphs: [
      "Mr. Johannes Latuharhary adalah pakar hukum dan negarawan perintis kemerdekaan Indonesia yang vokal menjaga keutuhan pluralisme nusantara. Mewakili komunitas kepulauan timur Indonesia, ia merupakan figur pertama yang menyampaikan keberatan hukum terbuka atas pembatasan hak keagamaan sektoral dalam draf pertama rancangan Undang-Undang Dasar.",
      "Ia meyakini bahwa penulisan frasa kewajiban syariat bagi pemeluk tertentu dalam hukum dasar negara berpotensi memicu diskriminasi sosiopolitik yang memecah-belah kepulauan nusantara."
    ]
  },

  "Logika": {
    title: "Logika",
    subheading: "Sains Penalaran Valid, Kebenaran Silogisme, dan Filter Falasi Argumen",
    category: "Filsafat & Politik",
    summary: "Cabang filsafat matematika yang membedakan kesimpulan absah dari inferensi yang cacat nalar.",
    paragraphs: [
      "Logika berasal dari kata 'logos' yang berarti sabda, pikiran, atau hukum akal budi. Logika adalah alat mutlak dalam filsafat dan sains untuk memastikan penalaran ditarik secara valid, mencegah kesesatan berpikir, serta melacak keabsahan premis-premis pembangun argumen mufakat.",
      "Filsafat tanpa logika tidak akan mencapai bobot ilmiah, sedangkan politik tanpa logika akan merosot menjadi sekadar demagog pencari simpati khalayak tanpa rujukan valid."
    ]
  },

  "Mohammad Natsir": {
    title: "Mohammad Natsir",
    subheading: "Perdana Menteri Masyumi, Pembela Konstitusionalisme, dan Diplomat Ulung",
    category: "Tokoh Sejarah",
    summary: "Tokoh utama Masyumi, Perdana Menteri Indonesia kelima, pencetus Mosi Integral Natsir 1950, pejuang hak legislasi syariah.",
    infobox: {
      title: "Mohammad Natsir",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Mohammad_Natsir_2011_Indonesia_stamp.jpg",
      imageCaption: "Mohammad Natsir, intelektual ulung pejuang keadilan",
      data: [
        { label: "Lahir", value: "17 Juli 1908, Alahan Panjang, Sumatera Barat" },
        { label: "Wafat", value: "6 Februari 1993 (Umur 84), Jakarta" },
        { label: "Partai", value: "Masyumi" },
        { label: "Jabatan", value: "Perdana Menteri RI ke-5 (1950–1951)" },
        { label: "Karya", value: "Mosi Integral Natsir (NKRI)" }
      ]
    },
    paragraphs: [
      "Mohammad Natsir adalah intelektual muslim terkemuka, pemimpin legendaris partai politik Masyumi, ulama pemikir, serta mantan Perdana Menteri Indonesia yang berjasa besar dalam mengembalikan bentuk negara Republik Indonesia Serikat (RIS) ke dalam Negara Kesatuan Republik Indonesia (NKRI) secara damai melalui 'Mosi Integral Natsir' pada tahun 1950.",
      "Sebagai politisi muslim, Natsir berjuang gigih di jalur parlementer dan sidang Konstituante demi meletakkan syariat islam sebagai rujukan hukum luhur mufakat konstitusi nasional secara legal dan akademis."
    ]
  },

  "Muhammad Yamin": {
    title: "Muhammad Yamin",
    subheading: "Sastrawan Pelopor, Perumus Sumpah Pemuda, Serta Bapak Historiografi Konstitusi",
    category: "Tokoh Sejarah",
    summary: "Perintis Sumpah Pemuda, sastrawan pengobar semangat revolusi, sejarawan perancang lambang negara Indonesia.",
    infobox: {
      title: "Prof. Mr. Mohammad Yamin, S.H.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mohammad_Yamin_%281954%29.jpg/180px-Mohammad_Yamin_%281954%29.jpg",
      imageCaption: "Mohammad Yamin pada tahun 1954",
      data: [
        { label: "Lahir", value: "24 Agustus 1903, Sawahlunto, Sumatera Barat" },
        { label: "Wafat", value: "17 Oktober 1962 (Umur 59), Jakarta" },
        { label: "Golongan", value: "Nasionalis Kebangsaan" },
        { label: "Penghargaan", value: "Pahlawan Nasional Indonesia" },
        { label: "Pendidikan", value: "RHS Jakarta (Sekolah Tinggi Hukum)" }
      ]
    },
    paragraphs: [
      "Prof. Mr. Mohammad Yamin adalah seorang sastrawan, pengacara, kritikus sastra, dan politisi ulung Indonesia yang meletakkan pilar awal persatuan nasional bahasa Indonesia lewat rumusan Sumpah Pemuda 1928.",
      "Sebagai sejarawan dan ahli hukum terkemuka di BPUPK, Yamin menyusun argumen akademis yang puitis dan teoretis berjangka panjang tentang konsepsi kedaulatan nusantara raya demi mempercepat terwujudnya kemerdekaan."
    ]
  },

  "Pancasila": {
    title: "Pancasila",
    subheading: "Sila-Sila Filsafat Pemersatu Hidup Berbangsa",
    category: "Filsafat & Politik",
    summary: "Dasar falsafah tertinggi negara kesatuan Republik Indonesia yang disepakati luhur pada 18 Agustus 1945.",
    paragraphs: [
      "Pancasila (berasal dari bahasa Sanskerta: 'panca' berarti lima dan 'sila' berarti prinsip/dasar) adalah ideologi dasar tertinggi negara Indonesia serta pandangan hidup luhur seluruh elemen bangsa sipil.",
      "Konsensus final Pancasila diratifikasi dalam sidang Panitia Persiapan Kemerdekaan Indonesia pada 18 Agustus 1945, menyatukan kedaulatan nasionalitas di atas tatanan keberagaman spiritual yang agung dan seimbang."
    ]
  },

  "Quran": {
    title: "Quran",
    subheading: "Kitab Wahyu, Tuntunan Kebajikan, dan Fondasi Jurisprudensi Syariah",
    category: "Filsafat & Politik",
    summary: "Kitab suci utama umat Islam yang mendasari perjuangan konstitusional legislasi syariat di sidang-sidang kebangsaan RI.",
    paragraphs: [
      "Al-Qur'an adalah kitab suci utama bagi penganut agama Islam yang dipercayai diturunkan sebagai mukjizat wahyu kebenaran mutlak. Kandungan hukum dan risalah sosial Al-Qur'an melandasi argumentasi kalangan Islamis dalam sidang BPUPK dan Konstituante mengenai kewajiban syariat bagi pemeluknya.",
      "Para ulama pejuang kemerdekaan meyakini Al-Qur'an memberikan koridor kemerdekaan, pembelaan kemanusiaan tertindas, serta tatanan keadilan sosial hukum yang kokoh."
    ]
  },

  "Soekarno": {
    title: "Soekarno",
    subheading: "Ir. Soekarno, Penyambung Lidah Rakyat, Proklamator, dan Orator Revolusioner",
    category: "Tokoh Sejarah",
    summary: "Bapak Proklamator, Presiden pertama RI, pencetus pidato Pancasila 1 Juni 1945, ketua Panitia Sembilan.",
    infobox: {
      title: "Ir. Soekarno (Bung Karno)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/1959_Sukarno%27s_Presidential_Decree.jpg/180px-1959_Sukarno%27s_Presidential_Decree.jpg",
      imageCaption: "Sukarno membacakan naskah dekret kepemimpinan",
      data: [
        { label: "Lahir", value: "6 Juni 1901, Surabaya, Hindia Belanda" },
        { label: "Wafat", value: "21 Juni 1970 (Umur 69), Jakarta" },
        { label: "Jabatan", value: "Presiden Indonesia Pertama (1945–1967)" },
        { label: "Sila Luhur", value: "Pencetus Pancasila 1 Juni 1945" },
        { label: "Almamater", value: "Technische Hoogeschool (sekarang ITB)" }
      ]
    },
    paragraphs: [
      "Ir. Soekarno adalah tokoh perjuangan revolusioner kemerdekaan agung yang membidani kelahiran Republik Indonesia sekaligus Presiden pertamanya. Sebagai orator ulung dunia dengan karisma kepemimpinan magis, ia menyuarakan perang anti-imperialisme radikal di lintasan Benua Asia-Afrika.",
      "Di dalam persidangan awal BPUPK pada 1 Juni 1945, Sukarno membacakan rumusan tertulis dasar pemikirannya yang melahirkan sila dasar Pancasila."
    ]
  },

  "Syarifuddin Prawiranegara": {
    title: "Syarifuddin Prawiranegara",
    subheading: "Mr. Sjafruddin Prawiranegara, Pemimpin PDRI, dan Penyelamat Eksistensi Republik",
    category: "Tokoh Sejarah",
    summary: "Ketua Pemerintah Darurat Republik Indonesia (PDRI) 1948, penyelamat kedaulatan negara saat Soekarno-Hatta ditawan Belanda.",
    infobox: {
      title: "Mr. Sjafruddin Prawiranegara",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Syafruddin_Prawiranegara%2C_minister_van_Financi%C3%ABn_%28Menteri_Keuangan%29_in_het_kabin%2C_Bestanddeelnr_11876_%28cropped%29.jpg/250px-Syafruddin_Prawiranegara%2C_minister_van_Financi%C3%ABn_%28Menteri_Keuangan%29_in_het_kabin%2C_Bestanddeelnr_11876_%28cropped%29.jpg",
      imageCaption: "Sjafruddin Prawiranegara pada masa awal kabinet",
      data: [
        { label: "Lahir", value: "28 Februari 1911\nAnyer Kidul, Serang, Banten, Hindia Belanda" },
        { label: "Meninggal", value: "15 Februari 1989 (umur 77)\nJakarta, Indonesia" },
        { label: "Kebangsaan", value: "Indonesia" },
        { label: "Partai politik", value: "Masyumi" },
        { label: "Pasangan", value: "Tengku Halimah" },
        { label: "Hubungan", value: "Farid Prawiranegara (anak)" },
        { label: "Almamater", value: "Rechtshogeschool (RHS), Batavia" },
        { label: "Pekerjaan", value: "Politikus, bankir, pengacara" },
        { label: "Agama", value: "Islam" },
        { label: "Gelar", value: "Pahlawan Nasional Indonesia" }
      ]
    },
    paragraphs: [
      "Mr. Sjafruddin Prawiranegara (lahir 28 Februari 1911 – meninggal 15 Februari 1989) adalah seorang negarawan, ekonom, dan tokoh Islam terkemuka di Indonesia. Sjafruddin dikenal luas atas jasa kepemimpinannya sebagai Ketua Pemerintah Darurat Republik Indonesia (PDRI) selama masa kritis Agresi Militer Belanda II.",
      "Selain menyelamatkan eksistensi Republik Indonesia di kancah internasional, ia juga memberikan sumbangsih besar di bidang moneter sebagai Menteri Keuangan Indonesia dan menjabat sebagai Gubernur Bank Indonesia yang pertama."
    ],
    sections: [
      {
        title: "Masa Muda dan Pendidikan",
        content: "Sjafruddin lahir di Anyer Kidul, Serang, Banten, pada tanggal 28 Februari 1911. Ia memiliki darah campuran Minangkabau (dari kakeknya) dan Banten (dari ibunya). Ayahnya, Karta Ardiwinata, bekerja sebagai seorang jaksa dan merupakan keturunan dari keluarga priyayi di Banten.\n\nSjafruddin menempuh pendidikan dasar di ELS (Europeesche Lagere School), kemudian melanjutkan ke MULO (Meer Uitgebreid Lager Onderwijs) di Madiun, dan AMS (Algemeene Middelbare School) di Bandung. Setelah lulus dari AMS pada tahun 1931, ia melanjutkan studinya ke Rechtshogeschool (Sekolah Tinggi Hukum) di Batavia (sekarang Jakarta) dan berhasil meraih gelar Meester in de Rechten (Mr.) pada tahun 1939."
      },
      {
        title: "Karier Politik dan Awal Revolusi",
        content: "Sebelum masa kemerdekaan, Sjafruddin bekerja sebagai pegawai di departemen keuangan pemerintahan Hindia Belanda di Batavia. Ia juga aktif dalam pergerakan nasionalis, termasuk bergabung dengan organisasi pemuda Paguyuban Pasundan.\n\nSetelah kemerdekaan Indonesia diproklamasikan pada 17 Agustus 1945, Sjafruddin bergabung dengan Komite Nasional Indonesia Pusat (KNIP) dan menjadi salah satu anggota Badan Pekerja KNIP. Kiprahnya yang cemerlang di bidang ekonomi dan keuangan membuatnya dipercaya menjabat sebagai Menteri Keuangan dalam Kabinet Sjahrir II (1946) dan Kabinet Sjahrir III."
      },
      {
        title: "Pemerintah Darurat Republik Indonesia (PDRI)",
        content: "Puncak pengabdian Sjafruddin terjadi pada Desember 1948, ketika Belanda melancarkan Agresi Militer Belanda II dan menduduki ibu kota RI di Yogyakarta. Soekarno, Hatta, dan jajaran menteri kabinet ditawan oleh Belanda.\n\nSebelum ditawan, Soekarno mengirimkan mandat kawat kepada Sjafruddin yang saat itu berada di Bukittinggi, Sumatera Barat, untuk membentuk pemerintahan darurat. Sjafruddin segera mengambil langkah cepat bersama pimpinan militer dan sipil setempat di Halaban, dekat Payakumbuh, untuk mendeklarasikan berdirinya Pemerintah Darurat Republik Indonesia (PDRI) pada 22 Desember 1948.\n\nMelalui PDRI, Sjafruddin memimpin perjuangan bersenjata dan diplomasi gerilya dari belantara Sumatera. Kepemimpinannya berhasil menjaga eksistensi dan legitimasi Republik Indonesia di mata dunia internasional hingga penandatanganan Perjanjian Roem-Royen, di mana Belanda setuju untuk membebaskan para pemimpin RI dan mengembalikan ibu kota ke Yogyakarta."
      },
      {
        title: "Kebijakan Moneter dan Bank Indonesia",
        content: "Setelah penyerahan kekuasaan PDRI kembali kepada Soekarno-Hatta pada Juli 1949, Sjafruddin menjabat sebagai Wakil Perdana Menteri dan kemudian Menteri Keuangan di era Kabinet Natsir (1950–1951). Salah satu kebijakan moneter terkenalnya adalah 'Gunting Sjafruddin', yaitu kebijakan pemotongan nilai uang kertas NICA dan uang De Javasche Bank di atas nilai tertentu untuk mengatasi inflasi dan mengurangi defisit anggaran negara.\n\nPada tanggal 1 Juli 1953, Sjafruddin diangkat menjadi Gubernur Bank Indonesia yang pertama (setelah nasionalisasi De Javasche Bank). Di bawah kepemimpinannya, ia mengukuhkan fondasi kebijakan moneter nasional yang mandiri, berintegritas tinggi, dan menentang intervensi politik yang merusak stabilitas nilai mata uang."
      },
      {
        title: "Keterlibatan dalam PRRI dan Masa Orde Baru",
        content: "Sebagai seorang demokrat dan penganut otonomi daerah yang kuat, Sjafruddin merasa kecewa dengan sentralisasi kekuasaan dan kecenderungan otoriter Presiden Soekarno di era Demokrasi Terpimpin. Rasa frustrasi ini membawanya bergabung dengan Pemerintah Revolusioner Republik Indonesia (PRRI) di Sumatera pada tahun 1958.\n\nSetelah gerakan PRRI berakhir, Sjafruddin ditahan dari tahun 1962 hingga dibebaskan pada tahun 1966 pasca-jatuhnya Soekarno.\n\nPada masa Orde Baru, Sjafruddin tetap vokal mengkritik kebijakan Presiden Soeharto yang dinilainya melenceng dari nilai-nilai demokrasi dan Pancasila. Meskipun ruang gerak politiknya dibatasi, ia aktif dalam kegiatan keagamaan dan sosial sebagai ketua Korps Mubaligh Indonesia."
      },
      {
        title: "Meninggal dan Penghargaan",
        content: "Mr. Sjafruddin Prawiranegara wafat di Jakarta pada tanggal 15 Februari 1989 pada usia 77 tahun akibat serangan jantung. Ia dimakamkan di Taman Pemakaman Umum Tanah Kusir, Jakarta.\n\nSebagai bentuk penghormatan atas jasa-jasanya yang luar biasa dalam menyelamatkan kedaulatan negara, pada tanggal 8 November 2011, Presiden Susilo Bambang Yudhoyono menganugerahkan gelar Pahlawan Nasional Indonesia secara anumerta kepada Mr. Sjafruddin Prawiranegara."
      }
    ]
  },

  "Undang-Undang Dasar 1945": {
    title: "Undang-Undang Dasar 1945",
    subheading: "Hukum Dasar Tertulis Tertinggi Konstitusi Republik Indonesia",
    category: "Sejarah",
    summary: "Konstitusi tertulis Indonesia yang disahkan pada 18 Agustus 1945 setelah draf dasar rancangan Piagam Jakarta disunting harmonis.",
    paragraphs: [
      "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 (UUD 1945) adalah konstitusi dasar tertulis tertinggi nasional yang mengatur pembidangan kewenangan kekuasaan lembaga kepemimpinan, kepatuhan masyarakat sipil, perlindungan hak warga sipil.",
      "Lahir dari proses perdebatan dialektika sengit di BPUPK, naskah ini mewakili kedaulatan luhur hukum yang dinamis."
    ]
  },

  "Xenofobia": {
    title: "Xenofobia",
    subheading: "Prasangka Rasial Terhadap Aspek Budaya Bersifat Asing",
    category: "Filsafat & Politik",
    summary: "Penolakan, ketakutan, atau kecemburuan sosiologis sepihak umat manusia terhadap kehadiran entitas budaya luar negeri.",
    paragraphs: [
      "Xenofobia adalah suatu sikap psikologis permusuhan, ketakutan, ketidakpercayaan patologis, kebencian mendalam masyarakat lokal terhadap orang asing, kebudayaan imigran asing, maupun sistem asing.",
      "Filsafat kebudayaan yang mawas diri berupaya menolak xenofobia demi menjalin kesetaraan peradaban kerja sama universal berakhlak mulia."
    ]
  },

  "Yogyakarta": {
    title: "Yogyakarta",
    subheading: "Daerah Istimewa Yogyakarta, Ibukota Perjuangan Darurat Republik",
    category: "Sejarah",
    summary: "Kota pusaka kraton pelindung kedaulatan tempat pemindahan pusat kendali kabinet nasional di kala revolusi fisik (1946–1949).",
    paragraphs: [
      "Daerah Istimewa Yogyakarta adalah kota wilayah kediaman sultan Kraton Ngayogyakarta Hadiningrat yang memberikan kontribusi berdaulat tak terhingga pada era revolusi bersenjata kemerdekaan Republik Indonesia.",
      "Ketika Jakarta jatuh dalam cengkeraman militer NICA-Sekutu pada awal 1946, Sultan Hamengkubuwana IX membukakan pintu gerbang keratin menampung segenap jajaran birokrasi pemerintahan pusat dan membiayai seluruh administrasi kabinet Soekarno-Hatta."
    ]
  },

  "Zonder": {
    title: "Zonder",
    subheading: "Istilah Jurisprudensi Tanpa Beban Kewajiban Mengikat",
    category: "Filsafat & Politik",
    summary: "Konsepsi terminologi hukum serapan kontroversial dari peninggalan legasi perundang-undangan bahasa Belanda kuno.",
    paragraphs: [
      "Zonder (serapan dari kosakata Netherland berarti 'tanpa') adalah istilah hukum legal formal lama sisa kolonial Hindia Belanda yang bermakna tanpa beban keterikatan pemenuhan konsekuensi tertentu dalam kontrak mufakat perkara perdata.",
      "Di dalam perdebatan dasar negara di sidang Konstituante, draf kewajiban hukum terkadang diuji menggunakan padanan istilah-istilah Belanda klasik seperti zonder."
    ]
  },

  "Aksara Jawa": {
    title: "Aksara Jawa",
    subheading: "Sistem Tulisan Tradisional Jawa yang Berkembang di Pulau Jawa",
    category: "Budaya & Sejarah",
    summary: "Sistem aksara abugida turunan aksara Brahmi yang digunakan untuk menulis bahasa Jawa dan bahasa daerah lainnya.",
    infobox: {
      title: "Aksara Jawa",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Aji_Saka.jpg/120px-Aji_Saka.jpg",
      imageCaption: "Bait pertama aksara Jawa",
      data: [
        { label: "Jenis", value: "Abugida" },
        { label: "Asal usul", value: "Aksara Brahmi → Aksara Kawi → Aksara Jawa" },
        { label: "Jumlah Huruf", value: "20 aksara utama (Carakan)" },
        { label: "Wilayah", value: "Pulau Jawa, Indonesia" }
      ]
    },
    paragraphs: [
      "Aksara Jawa (dikenal juga sebagai Hanacaraka atau Carakan) adalah salah satu aksara tradisional Nusantara yang berkembang di Pulau Jawa. Aksara ini digunakan untuk menulis bahasa Jawa, bahasa Madura, bahasa Sunda, bahasa Bali, dan bahasa Sasak.",
      "Susunan aksara Jawa terdiri dari 20 huruf utama yang melambangkan legenda pertarungan dua utusan setia Aji Saka, yaitu Dora dan Sembada, memperebutkan keris pusaka sang raja di bumi Majethi."
    ],
    sections: [
      {
        title: "Legenda Puisi Hanacaraka",
        content: "Susunan huruf Carakan membentuk sebuah puisi naratif empat baris yang menceritakan kesetiaan dan kesalahpahaman tragis:\n\n1. Ha-Na-Ca-Ra-Ka (Ada dua utusan)\n2. Da-Ta-Sa-Wa-La (Saling beradu argumen/pendapat)\n3. Pa-Dha-Ja-Ya-Nya (Sama-sama sakti/kuat)\n4. Ma-Ga-Ba-Tha-Nga (Keduanya mati menjadi mayat)"
      }
    ]
  },

  "Aji Saka": {
    title: "Aji Saka",
    subheading: "Raja Legendaris Pembawa Peradaban dan Aksara ke Pulau Jawa",
    category: "Mitologi & Sejarah",
    summary: "Tokoh legendaris dalam tradisi Jawa yang dikisahkan mengalahkan Prabu Dewata Cengkar dan menciptakan kalender Saka serta aksara Jawa.",
    infobox: {
      title: "Aji Saka",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Aji_Saka.jpg/120px-Aji_Saka.jpg",
      imageCaption: "Prabu Aji Saka bersama para abdinya",
      data: [
        { label: "Asal", value: "Bumi Majethi" },
        { label: "Gelar", value: "Prabu Aji Saka" },
        { label: "Pencapaian", value: "Menciptakan Aksara Jawa, Mengalahkan Dewata Cengkar, Memulai Kalender Saka (78 M)" }
      ]
    },
    paragraphs: [
      "Aji Saka adalah seorang pahlawan budaya legendaris dalam mitologi Jawa. Ia dikisahkan datang dari negeri asing menuju Medang Kamulan untuk membebaskan rakyat dari tirani Prabu Dewata Cengkar yang gemar memakan daging manusia.",
      "Ia berhasil mengalahkan Dewata Cengkar menggunakan ikat kepalanya yang ajaib, yang meluas hingga menjatuhkan sang raksasa ke Laut Selatan, di mana ia berubah menjadi buaya putih."
    ],
    sections: [
      {
        title: "Penciptaan Aksara",
        content: "Untuk memperingati kematian dua utusan setianya, Dora dan Sembada, yang gugur karena memegang teguh amanatnya yang kontradiktif, Aji Saka menyusun sebuah puisi 20 suku kata yang kemudian menjadi urutan huruf aksara Jawa kuno."
      }
    ]
  },

  "Pele": {
    title: "Pelé",
    subheading: "Pemain Sepak Bola Legendaris Asal Brasil dan Raja Sepak Bola",
    category: "Tokoh Olahraga",
    summary: "Edson Arantes do Nascimento, dikenal sebagai Pelé, adalah salah satu pemain sepak bola terbesar sepanjang masa yang memenangkan tiga Piala Dunia.",
    paragraphs: [
      "Edson Arantes do Nascimento (lebih dikenal sebagai Pelé) adalah legenda sepak bola dunia asal Brasil yang dinobatkan sebagai salah satu atlet terbaik abad ke-20.",
      "Ia memulai karier profesionalnya bersama klub Santos pada usia 15 tahun dan mencetak lebih dari 1000 gol resmi serta tidak resmi sepanjang kariernya yang gemilang."
    ]
  },

  "Santos": {
    title: "Santos FC",
    subheading: "Klub Sepak Bola Profesional asal Santos, São Paulo, Brasil",
    category: "Olahraga",
    summary: "Klub sepak bola Brasil yang terkenal karena menjadi klub tempat Pelé menghabiskan sebagian besar kariernya.",
    paragraphs: [
      "Santos Futebol Clube adalah sebuah klub olahraga Brasil yang berbasis di Santos, São Paulo. Klub ini didirikan pada tahun 1912 dan terkenal karena gaya permainan menyerang serta pembinaan bakat pemain muda.",
      "Klub ini menjadi sangat populer di seluruh dunia pada era 1960-an berkat kehadiran bintang sepak bola dunia, Pelé."
    ]
  },

  "Brasil": {
    title: "Brasil",
    subheading: "Republik Federasi Brasil, Negara Terbesar di Amerika Selatan",
    category: "Geografi",
    summary: "Negara terbesar di wilayah Amerika Selatan dan Amerika Latin yang terkenal dengan hutan Amazon dan prestasi sepak bolanya.",
    paragraphs: [
      "Brasil adalah negara paling timur di benua Amerika dan merupakan negara dengan luas wilayah terbesar kelima di dunia.",
      "Negara ini memiliki budaya yang sangat kaya, dipengaruhi oleh imigran Portugis, Afrika, dan suku asli setempat. Brasil juga memegang rekor sebagai tim nasional sepak bola tersukses dengan lima gelar juara Piala Dunia."
    ]
  },

  "Piala Dunia": {
    title: "Piala Dunia FIFA",
    subheading: "Turnamen Kejuaraan Sepak Bola Internasional Terbesar di Dunia",
    category: "Olahraga",
    summary: "Kompetisi sepak bola internasional empat tahunan yang diikuti oleh tim nasional pria anggota FIFA.",
    paragraphs: [
      "Piala Dunia FIFA adalah kompetisi olahraga paling banyak ditonton di dunia, melampaui bahkan Olimpiade.",
      "Pertama kali diselenggarakan pada tahun 1930 di Uruguay, turnamen ini telah melahirkan berbagai legenda olahraga legendaris termasuk Pelé, Diego Maradona, dan Lionel Messi."
    ]
  },

  "Perang Saudara AS": {
    title: "Perang Saudara Amerika",
    subheading: "Perang Saudara Terbesar di Amerika Serikat (1861–1865)",
    category: "Sejarah",
    summary: "Perang saudara antara negara bagian Utara (Union) dan Selatan (Confederate) yang dipicu oleh isu perbudakan dan hak-hak negara bagian.",
    paragraphs: [
      "Perang Saudara Amerika (American Civil War) berlangsung dari tahun 1861 hingga 1865 antara Union ('Utara') di bawah kepemimpinan Presiden Abraham Lincoln melawan Konfederasi ('Selatan') yang memisahkan diri.",
      "Perang ini berakhir dengan kemenangan mutlak pihak Utara, yang mengakibatkan dihapuskannya sistem perbudakan di seluruh wilayah Amerika Serikat."
    ]
  },

  "kulit hitam": {
    title: "Orang Kulit Hitam (Afrika-Amerika)",
    subheading: "Demografi dan Perjuangan Hak-Hak Sipil Kulit Hitam di Amerika Serikat",
    category: "Sosiologi & Sejarah",
    summary: "Sejarah kontribusi penting warga keturunan Afrika dalam pembangunan, militer, dan perjuangan kesetaraan hak sipil di Amerika Serikat.",
    paragraphs: [
      "Warga Kulit Hitam (terutama keturunan Afrika-Amerika) memiliki peran yang sangat signifikan dalam sejarah Amerika Serikat, termasuk keikutsertaan mereka dalam Perang Saudara Amerika.",
      "Sekitar 200.000 tentara kulit hitam berdinas dengan gagah berani membela pihak Utara (Union) demi memperjuangkan pembebasan ras mereka dari belenggu perbudakan."
    ]
  },

  "Medali Kehormatan": {
    title: "Medal of Honor (Medali Kehormatan)",
    subheading: "Penghargaan Militer Tertinggi di Amerika Serikat",
    category: "Militer",
    summary: "Penghargaan dekorasi militer tertinggi yang diberikan oleh Pemerintah Amerika Serikat kepada prajurit atas tindakan keberanian luar biasa.",
    paragraphs: [
      "Medal of Honor (Medali Kehormatan) didirikan selama masa Perang Saudara Amerika untuk memberikan penghargaan khusus kepada tentara yang menonjolkan keberanian melebihi panggilan tugas resmi mereka.",
      "Selama Perang Saudara Amerika, sebanyak 22 prajurit kulit hitam dianugerahi penghargaan ini atas jasa luar biasa mereka di medan pertempuran."
    ]
  }
};
