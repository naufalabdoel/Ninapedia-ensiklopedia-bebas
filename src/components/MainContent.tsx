import Infobox from './Infobox';
import { Languages, ChevronDown, ExternalLink } from 'lucide-react';
import { openAppImage } from './ImageLightbox';

export default function MainContent() {
  return (
    <div className="pb-16 text-[#202122] leading-[1.6] text-[14px] font-sans antialiased">
      <div className="flex justify-between items-end border-b border-[#a2a9b1] mb-4 pb-1">
        <div className="flex space-x-6 text-[13px] font-medium">
          <a href="#" className="text-[#202122] border-b-2 border-[#202122] pb-1 -mb-[3px]">Halaman</a>
          <a href="#" className="text-[#0645ad] hover:text-[#0b0080] pb-1">Pembicaraan</a>
        </div>
        <div className="flex items-center space-x-6 text-[13px]">
          <button className="flex items-center text-[#0645ad] hover:underline font-bold bg-[#eaecf0] px-2 py-1 rounded-sm">
            <Languages className="w-4 h-4 mr-1" />
            6 bahasa <ChevronDown className="w-3 h-3 ml-1" />
          </button>
          <div className="flex space-x-4 font-medium">
            <a href="#" className="text-[#202122] border-b-2 border-[#202122] pb-1 -mb-[3px]">Baca</a>
            <a href="#" className="text-[#0645ad] hover:text-[#0b0080] pb-1">Lihat sumber</a>
            <a href="#" className="text-[#0645ad] hover:text-[#0b0080] pb-1">Lihat riwayat</a>
          </div>
          <button className="flex items-center text-[#0645ad] hover:underline font-medium">
            Perkakas <ChevronDown className="w-3 h-3 ml-1" />
          </button>
        </div>
      </div>

      <h1 id="awal-rocky" className="text-[1.8em] md:text-[2.2em] font-serif font-normal border-b border-[#a2a9b1] pb-1 mb-1" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
        Rocky Gerung
      </h1>
      <div className="text-[13px] text-[#54595d] mb-4">
        Dari Ninapedia bahasa Indonesia, ensiklopedia bebas
      </div>

      <div className="clearfix">
        <Infobox />

        <p className="mb-[0.5em]">
          <b>Rocky Gerung</b> (lahir 20 Januari 1959)<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[2]</a></sup> adalah salah seorang komentator politik, akademikus, filsuf, dan intelektual publik Indonesia. Ia merupakan salah seorang pendiri <a href="#" className="text-[#0645ad] hover:underline">Setara Institute</a> dan <i>fellow</i> pada Perhimpunan Pendidikan Demokrasi (P2D).<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[3]</a></sup> Ia mengajar selama 15 tahun di <a href="#" className="text-[#0645ad] hover:underline">Universitas Indonesia</a>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[4]</a></sup>
        </p>

        <p className="mb-[0.5em]">
          Ia merupakan kakak dari <a href="#" className="text-[#ba0000] hover:underline">Grevo Gerung</a> yang saat ini menjadi dosen di <a href="#" className="text-[#0645ad] hover:underline">Universitas Sam Ratulangi</a>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[5]</a></sup>
        </p>

        <h2 id="kehidupan-awal-dan-pendidikan" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-8 mb-[0.25em] pb-1 flex justify-between items-end group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
          <span>Kehidupan awal dan pendidikan</span>
          <span className="text-[12px] font-sans text-gray-500 cursor-pointer hidden group-hover:inline-block">[<a href="#" className="text-[#0645ad] hover:underline">sunting</a> | <a href="#" className="text-[#0645ad] hover:underline">sunting sumber</a>]</span>
        </h2>
        <p className="mb-[0.5em]">
          Rocky mulai berkuliah di <a href="#" className="text-[#0645ad] hover:underline">Universitas Indonesia</a> (UI) pada tahun 1979. Ia pertama kali masuk ke Jurusan Ilmu Hubungan Internasional,<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[6]</a></sup> yang saat itu tergabung dalam <a href="#" className="text-[#0645ad] hover:underline">Fakultas Ilmu-ilmu Sosial</a>. Namun, Rocky tidak menyelesaikan kuliahnya di jurusan tersebut. Rocky lulus sebagai Sarjana Sastra dari Jurusan Ilmu Filsafat. Selama berkuliah, Rocky dekat dengan para aktivis berhaluan <a href="#" className="text-[#0645ad] hover:underline">sosialisme</a> seperti <a href="#" className="text-[#0645ad] hover:underline">Marsillam Simanjuntak</a> dan <a href="#" className="text-[#0645ad] hover:underline">Hariman Siregar</a>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[7]</a></sup>
        </p>

        <h2 id="karier" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-8 mb-[0.25em] pb-1 group" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>
          <div className="flex justify-between items-end">
             <span>Karier</span>
             <span className="text-[12px] font-sans text-gray-500 cursor-pointer hidden group-hover:inline-block">[<a href="#" className="text-[#0645ad] hover:underline">sunting</a> | <a href="#" className="text-[#0645ad] hover:underline">sunting sumber</a>]</span>
          </div>
        </h2>
        
        <h3 id="karier-akademik" className="text-[1.2em] font-bold mt-[0.3em] mb-[0.5em]">Karier akademik</h3>
        <p className="mb-[0.5em]">
          Setelah lulus, Rocky kembali ke UI dan mengajar di Departemen <a href="#" className="text-[#0645ad] hover:underline">Ilmu Filsafat</a>, yang kini tergabung di dalam <a href="#" className="text-[#0645ad] hover:underline">Fakultas Ilmu Pengetahuan Budaya</a>, sebagai dosen tidak tetap hingga awal 2015. Ia berhenti mengajar disebabkan keluarnya <a href="#" className="text-[#0645ad] hover:underline">UU No. 14 tahun 2005</a> yang mensyaratkan seorang dosen harus minimal bergelar magister; sedangkan Rocky hanya menyandang gelar sarjana. Ia tercatat mengampu mata-mata kuliah seperti Seminar Teori Keadilan, Filsafat Politik, dan Metode Penelitian Filsafat; ia juga pernah mengajar pada program pascasarjana. Salah seorang mahasiswa yang pernah ia bimbing ialah aktris <a href="#" className="text-[#0645ad] hover:underline">Dian Sastrowardoyo</a>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[8]</a><a href="#" className="text-[#0645ad] hover:underline">[9]</a></sup>
        </p>
        <p className="mb-[0.5em]">
          Bersama tokoh-tokoh seperti <a href="#" className="text-[#0645ad] hover:underline">Abdurrahman Wahid</a> dan <a href="#" className="text-[#0645ad] hover:underline">Azyumardi Azra</a>, Rocky ikut mendirikan <a href="#" className="text-[#0645ad] hover:underline">Setara Institute</a>, sebuah wadah pemikir di bidang demokrasi dan hak asasi manusia, pada 2005.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[10]</a></sup>
        </p>
        <p className="mb-[0.5em]">
          Rocky Gerung pernah mengajar di <a href="#" className="text-[#0645ad] hover:underline">Lembaga Ketahanan Nasional</a> (Lemhanas),<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[11]</a></sup> lalu mengajar dan memberikan materi para perwira Polri dan TNI<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[12]</a></sup> dan pernah pula mengajar di Megawati Institute.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[13]</a></sup>
        </p>

        <h3 id="mendirikan-partai-politik" className="text-[1.2em] font-bold mt-[0.3em] mb-[0.5em]">Mendirikan partai politik</h3>
        <p className="mb-[0.5em]">
          Dalam bidang politik, Rocky bersama <a href="#" className="text-[#0645ad] hover:underline">Sjahrir</a> dan istrinya, <a href="#" className="text-[#0645ad] hover:underline">Nurmala Kartini Sjahrir</a> pernah mendirikan <a href="#" className="text-[#0645ad] hover:underline">Partai Indonesia Baru</a> (PIB) pada 2002. Meski ikut mendirikan, ia tak aktif di kepengurusan partai. Belakangan, Rocky memutuskan keluar dan bergabung dengan <a href="#" className="text-[#0645ad] hover:underline">Partai Serikat Rakyat Independen</a> (SRI) pada 2011.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[14]</a></sup> Ia didapuk sebagai anggota Majelis Pertimbangan Partai SRI.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[15]</a><a href="#" className="text-[#0645ad] hover:underline">[16]</a></sup> Partai tersebut bermaksud mencalonkan <a href="#" className="text-[#0645ad] hover:underline">Sri Mulyani</a> untuk <a href="#" className="text-[#0645ad] hover:underline">pemilihan umum Presiden Indonesia 2014</a>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[17]</a></sup> Namun, SRI gagal melewati proses verifikasi administrasi <a href="#" className="text-[#0645ad] hover:underline">Kementerian Hukum dan Hak Asasi Manusia</a> sehingga tidak dapat mengikuti <a href="#" className="text-[#0645ad] hover:underline">pemilihan umum legislatif Indonesia 2014</a>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[18]</a></sup>
        </p>

        <h2 id="keorganisasian" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-8 mb-[0.25em] pb-1" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>Keorganisasian</h2>
        <p className="mb-[0.5em]">
          Rocky juga pernah mengetuai Sekolah Ilmu Sosial (SIS), sebuah sekolah nonformal yang mendidik siswanya untuk memahami realitas sosial secara interdisipliner. Di bawah Yayasan Padi dan Kapas yang juga diketuai oleh <a href="#" className="text-[#0645ad] hover:underline">Sjahrir</a>. Pengajar di SIS ada sepuluh orang, beberapa di antaranya adalah <a href="#" className="text-[#0645ad] hover:underline">Arief Budiman</a>, <a href="#" className="text-[#0645ad] hover:underline">Salim Said</a>, dan <a href="#" className="text-[#0645ad] hover:underline">Rahman Tolleng</a>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[19]</a></sup>
        </p>
        <p className="mb-[0.5em]">
          Ia juga menjabat sebagai Wakil Ketua Bidang Panjat Tebing Alam dan Rekreasi di <a href="#" className="text-[#0645ad] hover:underline">Federasi Panjat Tebing Indonesia</a> (FPTI) periode 2023–2027.
        </p>

        <h2 id="pemikiran-dan-aktivitas" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-8 mb-[0.25em] pb-1" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>Pemikiran dan aktivitas</h2>
        <div className="float-right ml-4 mb-4 border border-[#c8ccd1] bg-[#f8f9fa] p-1 w-[220px]">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg/250px-Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg" 
            alt="Rocky di kursi" 
            className="w-full border border-gray-300 cursor-zoom-in hover:opacity-90 active:scale-[0.98] transition-all duration-200" 
            onClick={() => openAppImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg/250px-Rocky_Gerung_Attended_Ratna_Sarumpaet_Trial%2C_2019.jpg")}
          />
          <div className="text-[12px] p-2 leading-[1.4]">
             Rocky saat menjadi saksi dalam persidangan <a href="#" className="text-[#0645ad] hover:underline">kasus kebohongan Ratna Sarumpaet</a>, 2019.
          </div>
        </div>
        <p className="mb-[0.5em]">
          Sebagai seorang ilmuwan filsafat, salah satu bidang kajian Rocky adalah filsafat <a href="#" className="text-[#0645ad] hover:underline">feminisme</a>. Ia banyak menulis di <i><a href="#" className="text-[#0645ad] hover:underline">Jurnal Perempuan</a></i>, sebuah terbitan ilmiah yang dikelola oleh <a href="#" className="text-[#ba0000] hover:underline">Yayasan Jurnal Perempuan</a> dan didirikan oleh <a href="#" className="text-[#0645ad] hover:underline">Gadis Arivia</a>, koleganya di Universitas Indonesia.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[20]</a></sup> Rocky juga seorang pengajar Kajian Filsafat dan Feminisme (Kaffe) yang merupakan salah satu program <i><a href="#" className="text-[#0645ad] hover:underline">Jurnal Perempuan</a></i>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[21]</a></sup> Selain itu, Rocky juga terlibat sebagai penulis di <i><a href="#" className="text-[#0645ad] hover:underline">Jurnal Prisma</a></i> terbitan <a href="#" className="text-[#0645ad] hover:underline">LP3ES</a> dengan menulis tentang <a href="#" className="text-[#0645ad] hover:underline">HAM</a> dan tentang <a href="#" className="text-[#0645ad] hover:underline">Pancasila</a>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[3]</a></sup>
        </p>

        <p className="mb-[0.5em]">
          Rocky pernah mendapat kehormatan untuk memberikan pidato kebudayaan akhir tahun rutinan yang diselenggarakan oleh <a href="#" className="text-[#0645ad] hover:underline">Dewan Kesenian Jakarta</a> di <a href="#" className="text-[#0645ad] hover:underline">Taman Ismail Marzuki</a> pada akhir tahun 2010.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[22]</a></sup> Saat itu, judul pidato Rocky adalah <i>Memelihara Republik, Mengaktifkan Akal Sehat</i>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[23]</a></sup>
        </p>

        <h2 id="kontroversi" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-8 mb-[0.25em] pb-1" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>Kontroversi</h2>
        <p className="mb-[0.5em]">
          Pada 10 April 2018, ia sempat melontarkan pernyataan kontroversial di <i><a href="#" className="text-[#0645ad] hover:underline">Indonesia Lawyers Club</a></i> yang menyebutkan bahwa "kitab suci itu fiksi".<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[30]</a></sup>
        </p>
        <p className="mb-[0.5em]">
          Ketua Umum Relawan Indonesia Bersatu, Lisman Hasibuan, melaporkan Rocky Gerung ke <a href="#" className="text-[#0645ad] hover:underline">Polda Metro Jaya</a> atas dugaan penghinaan terhadap <a href="#" className="text-[#0645ad] hover:underline">Presiden Joko Widodo</a>. Rocky Gerung dilaporkan usai ujaran yang dilontarkannya viral di <a href="#" className="text-[#0645ad] hover:underline">media sosial</a>, perkataan ini dinilai memiliki tendensi menghasut, kontroversial, dan memicu kegaduhan.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[31]</a></sup>
        </p>
        <p className="mb-[0.5em]">
          Rocky Gerung pernah hampir dipukul oleh <a href="#" className="text-[#0645ad] hover:underline">Silfester Matutina</a> saat siaran langsung di <a href="#" className="text-[#0645ad] hover:underline">iNews</a> dan sempat dihadang oleh <a href="#" className="text-[#0645ad] hover:underline">host</a> acara <i>Rakyat Bersuara</i> karena Matutina tidak dapat menjawab pertanyaan Rocky Gerung hingga keluarlah kata-kata "bodoh" pada Matutina hingga membuat Matutina naik pitam.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[32]</a></sup>
        </p>

        <h2 id="warisan" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-8 mb-[0.25em] pb-1" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>Warisan</h2>
        <p className="mb-[0.5em]">
          Narasi dan retorika "magis" ala Rocky Gerung di <i>Indonesia Lawyers Club</i> mengundang decak kagum para audiens di ruangan maupun di televisi. Hingga akhirnya penerbit <a href="#" className="text-[#0645ad] hover:underline">Komunitas Bambu</a> (Kobam) yang dikelola oleh sejarawan <a href="#" className="text-[#0645ad] hover:underline">JJ Rizal</a>, menjadikan retorika-retorika Rocky Gerung tersebut ke dalam sebuah buku yang diberi judul <i>Habis Dungu Terbitlah Bajingan Tolol: Filsafat untuk Indonesia Selamat</i>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[33]</a></sup> Buku ini dapat dikatakan buku lanjutan Rocky Gerung terbitan Kobam sebelumnya yaitu <i>Obat Dungu Resep Akal Sehat: Filsafat untuk Republik Kuat</i>.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[34]</a></sup> Hal yang membedakannya ialah buku terakhir ini resmi tulisan-tulisan Rocky Gerung sejak tahun 1985 yang telah ia publikasikan di berbagai surat kabar maupun artikel jurnal ilmiah.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[34]</a></sup>
        </p>
        
        <h2 id="karya" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-8 mb-[0.25em] pb-1" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>Karya</h2>
        <div className="mb-[0.5em]"><b>Buku:</b></div>
        <ul className="list-disc pl-6 mb-[0.5em] space-y-1">
           <li>Fay, Brian; Rocky Gerung; dan Budi Murdono (1991). <i>Teori Sosial dan Praktik Politik</i>. Jakarta: Penerbit Grafiti.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[35]</a></sup></li>
           <li><a href="#" className="text-[#0645ad] hover:underline">Saraswati, L. G.</a>; dan Rocky Gerung (2006). <i>Hak Asasi Manusia: Teori, Hukum, Kasus</i>. Depok: Filsafat UI Press.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[36]</a></sup></li>
           <li>Gerung, Rocky. "Mengaktifkan Politik." <i>Demokrasi dan Kekecewaan</i>, Centre for the Study of Islam and Democracy, 2009.<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[37]</a></sup></li>
           <li>Gerung, Rocky (2024). <i>"Obat Dungu Resep Akal Sehat: Filsafat untuk Republik Kuat"</i>. Depok: Penerbit Komunitas Bambu<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[34]</a></sup></li>
           <li>Gerung, Rocky (2024). <i>"Habis Dungu Terbitlah Bajingan Tolol"</i>, Depok: Penerbit Komunitas Bambu<sup className="text-[10px] leading-[0] align-baseline"><a href="#" className="text-[#0645ad] hover:underline">[33]</a></sup></li>
        </ul>
        <div className="mb-[0.5em] mt-4"><b>Artikel Jurnal:</b></div>
        <ul className="list-disc pl-6 mb-[0.5em] space-y-1">
           <li>Gerung, R. (2007). "Pluralisme dan Konsekuensinya: Catatan Kaki untuk <i>Filsafat Politik Nurcholish Madjid</i>'." <i>Paper PSIK Universitas Paramadina</i>.</li>
           <li>Gerung, R. (2008). "Feminisme versus Kearifan Lokal." <i>Jurnal Perempuan</i> 57.</li>
           <li>Gerung, R. (2010). "Representasi, Kedaulatan, dan Etika Publik." <i>Jentera Jurnal Hukum</i> 20 (5).</li>
           <li>Gerung, R. (2011). "<a href="#" className="text-[#0645ad] hover:underline">Komunitarianisme versus Hak Asasi Manusia</a><ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" />." <sup className="text-gray-500">[<i>pranala nonaktif permanen</i>]</sup> <i>Jurnal Prisma</i> 1 (2011)</li>
        </ul>

        {/* Referensi Section */}
        <h2 id="referensi-rocky" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-8 mb-[0.25em] pb-1" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>Referensi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-[13px] font-sans leading-[1.6] text-[#202122] bg-[#f8f9fa] p-4 border border-[#eaecf0] mb-6">
          <ol className="list-decimal pl-6 space-y-1 margin-0">
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">"About Rocky Gerung Official"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>YouTube</i>.</li>
            <li>^ <sup><a href="#" className="text-[#0645ad]">a</a> <a href="#" className="text-[#0645ad]">b</a></sup> <a href="#" className="text-[#0645ad] hover:underline">"Profil Rocky Gerung, Riwayat Pendidikan, dan Perjalanan Kariernya"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>kumparan</i>. Diakses tanggal 2025-04-30.</li>
            <li>^ <sup><a href="#" className="text-[#0645ad]">a</a> <a href="#" className="text-[#0645ad]">b</a></sup> <a href="#" className="text-[#0645ad] hover:underline">"Prisma Jurnal"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>www.prismajurnal.com</i>. Diakses tanggal 2024-04-21.</li>
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> Hudayanto, Ahmad (2021-11-23). <a href="#" className="text-[#0645ad] hover:underline">"Sumber Kekayaan Rocky Gerung"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>Okezone.com</i>. Diakses tanggal 2022-03-07.</li>
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">Adik Rocky Gerung Resmi Daftar Bakal Calon Rektor Unsrat Manado<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>Kumparan</i>. Diakses 28 April 2022.</li>
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">Rocky Gerung Bahas Jalan Berbatu Menuju Sehat Nalar di 2045 | Endgame S2E17<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. Diakses tanggal 2021-06-21</li>
             <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">"Koleksi tulisan Rocky"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a> di situs resmi <i>Jurnal Perempuan</i>. Diakses 7 Oktober 2018.</li>
             <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">"Profil Pengajar Kaffe"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>Jurnal Perempuan</i>. Diakses tanggal 2020-08-31.</li>
          </ol>
          <ol start={9} className="list-decimal pl-6 space-y-1 margin-0">
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> Yudono, Jodhi (ed.). <a href="#" className="text-[#0645ad] hover:underline">"Pidato Kebudayaan Rocky Gerung di TIM"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>Kompas.com</i>. Diakses tanggal 2020-08-29.</li>
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">"Rocky Gerung - Merawat republik, mengaktifkan akal sehat"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>Dewan Kesenian Jakarta</i>. Diakses tanggal 2020-08-29.</li>
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">"Profil Rocky Gerung - VIVA"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>VIVA.co.id</i>. 2018-04-12. Diakses tanggal 2020-08-29.</li>
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">"Kritik Keras Rocky Gerung kepada Pemerintahan Jokowi soal 'Hoax' di ILC - YouTube"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>www.youtube.com</i>. Diakses tanggal 2020-08-29.</li>
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">"Cerita Rocky Gerung Soal Gunung yang Berkesan Baginya"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>Tempo</i>. 11 Februari 2019 | 19.30 WIB. Diakses tanggal 2025-04-29.</li>
            <li><b><a href="#" className="text-[#0645ad]">^</a></b> <a href="#" className="text-[#0645ad] hover:underline">"Mendaki Ke-4 Kalinya ke Himalaya, Rocky Gerung Soroti Politik Indonesia: Hak Rakyat Demi Hidup Layak"<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a>. <i>Tribunjakarta.com</i>. Diakses tanggal 2025-04-29.</li>
          </ol>
        </div>

        <h2 id="pranala-luar-rocky" className="text-[1.5em] font-serif font-normal border-b border-[#a2a9b1] mt-8 mb-[0.25em] pb-1" style={{fontFamily: "'Linux Libertine','Georgia','Times',serif"}}>Pranala luar</h2>
        <div className="flex justify-between items-start mb-16">
          <ul className="list-disc pl-6 space-y-1">
            <li><a href="#" className="text-[#0645ad] hover:underline">Profil<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a> di Tirto.id</li>
            <li><a href="#" className="text-[#0645ad] hover:underline">Profil<ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a> di VIVA.co.id</li>
            <li><a href="#" className="text-[#0645ad] hover:underline">Koleksi karya ilmiah <ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a> di Google Scholar</li>
            <li><i><a href="#" className="text-[#0645ad] hover:underline">Lilin yang Kian Terang Menjelang Padam <ExternalLink className="w-3 h-3 inline ml-1 text-blue-500" /></a></i>, orasi kebudayaan Rocky pada 20 Mei 2017 di Jakarta.</li>
          </ul>
          <div className="border border-[#a2a9b1] bg-[#f8f9fa] p-3 flex items-center gap-3 text-xs w-[300px]">
             <div className="shrink-0 w-8 h-8 flex items-center justify-center font-serif text-2xl font-bold bg-[#eaecf0] rounded-sm text-gray-500">
               N
             </div>
             <div className="leading-tight">
               Ninamedia Commons memiliki media mengenai
               <br/>
               <b><a href="#" className="text-[#0645ad] hover:underline italic">Rocky Gerung</a>.</b>
             </div>
          </div>
        </div>
      </div>

      <div className="border border-[#a2a9b1] bg-[#f8f9fa] mt-8 mb-4">
        <div className="bg-[#eaecf0] px-4 py-2 text-center text-[13px] font-bold border-b border-[#a2a9b1] flex justify-between items-center cursor-pointer hover:bg-[#e0e2e6] transition-colors">
          <span className="flex-1 text-[#0645ad]">Basis data pengawasan otoritas ✎</span>
          <span className="text-[#0645ad] font-normal">[tampil]</span>
        </div>
      </div>

      <div className="border border-[#a2a9b1] bg-[#f8f9fa] p-3 text-[13px] mb-8">
        <div className="flex">
          <div className="w-32 text-[#0645ad] font-medium border-r border-[#a2a9b1] mr-2 pr-2">Kategori:</div>
          <div className="flex-1 flex flex-wrap gap-x-2 text-[#0645ad] leading-relaxed">
            <a href="#" className="hover:underline">Orang hidup berusia 67</a> |
            <a href="#" className="hover:underline">Kelahiran 1959</a> |
            <a href="#" className="hover:underline">Filsuf Indonesia</a> |
            <a href="#" className="hover:underline">Akademikus Indonesia</a> |
            <a href="#" className="hover:underline">Esais Indonesia</a> |
            <a href="#" className="hover:underline">Aktivis Indonesia</a> |
            <a href="#" className="hover:underline">Alumni Universitas Indonesia</a> |
            <a href="#" className="hover:underline">Tokoh dari Manado</a> |
            <a href="#" className="hover:underline">Dosen Universitas Indonesia</a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
