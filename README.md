# Ninapedia 🌐

Ninapedia adalah sebuah aplikasi web ensiklopedia bebas berbasis React yang terinspirasi dari Wikipedia. Proyek ini dirancang dengan antarmuka pengguna yang bersih, responsif, dan interaktif, lengkap dengan dukungan mode gelap (dark mode), pengaturan tata letak dinamis, serta sistem autentikasi pengguna yang otentik.

## ✨ Fitur Utama

### 1. Sistem Autentikasi "Wikipedia Vibe"
* **Registrasi & Login Berbasis Nama Pengguna:** Pengguna dapat masuk dan mendaftar menggunakan "Nama Pengguna" (Username) dan Kata Sandi, tanpa perlu mengekspos email secara publik.
* **Pemetaan Email Dinamis:** Di balik layar, sistem secara cerdas memetakan nama pengguna menjadi format surel internal (`{username}@ninapedia.com`) untuk diproses oleh **Firebase Authentication** (`createUserWithEmailAndPassword` & `signInWithEmailAndPassword`).
* **Validasi Nama Pengguna Unik:** Mengecek ketersediaan nama pengguna di database Firestore sebelum pendaftaran untuk mencegah duplikasi.

### 2. Pengaturan Tampilan Dinamis (Real-time)
Aplikasi menyediakan panel pengaturan **Tampilan** yang stateful dan persisten (menyimpan preferensi di `localStorage`):
* **Ukuran Teks:** Pilihan dinamis antara Kecil (`text-sm`), Standar (`text-base`), dan Besar (`text-lg`).
* **Lebar Tata Letak:** Opsi untuk membatasi lebar artikel agar nyaman dibaca (Standar / `max-w-[960px]`) atau memanfaatkan seluruh layar (Lebar / `w-full`).
* **Tema Warna:** Mendukung mode **Terang**, **Gelap**, dan **Otomatis** (mengikuti preferensi OS pengguna menggunakan `window.matchMedia('(prefers-color-scheme: dark)')`). Diintegrasikan penuh dengan fitur *dark mode* bawaan Tailwind CSS.

### 3. Keamanan Tingkat Lanjut (Firestore Rules)
Database dilindungi oleh aturan keamanan yang ketat (`firestore.rules`):
* **Identity Segregation & PII Harvesting Guard:** Mencegah *scraping* data publik dan mengamankan informasi pribadi pengguna.
* **Size Checks & Field Validation:** Mencegah serangan *Denial of Wallet* dengan membatasi ukuran input dan tipe data.

### 4. Konten & Interaksi UI
* **Navigasi Interaktif:** Tautan artikel berwarna biru khas ensiklopedia yang mengarahkan pengguna ke halaman rujukan atau pratinjau (seperti fitur *Tahukah Anda*, *Peristiwa Terkini*, dll).
* **Animasi Cerdas:** Logo bola dunia (Globe SVG) dilengkapi dengan animasi rotasi ambien 360 derajat yang halus dan efek *scale-up* interaktif saat di-hover menggunakan *spring physics*.

## 🛠️ Teknologi yang Digunakan

* **Frontend:** React (dengan TypeScript), Tailwind CSS.
* **Backend & Database:** Firebase Authentication (Email/Password), Google Cloud Firestore.
* **Ikon & Aset:** SVG kustom berkualitas tinggi.

## 📁 Struktur Direktori Utama

```text
├── public/
├── src/
│   ├── components/
│   │   ├── HalamanUtama.tsx    # Komponen beranda ensiklopedia
│   │   ├── BuatAkun.tsx        # Formulir registrasi pengguna
│   │   ├── MasukLog.tsx        # Formulir login pengguna
│   │   └── SidebarRight.tsx    # Panel pengaturan tampilan
│   ├── data/
│   │   └── articles.ts         # Basis data statis untuk artikel/konten
│   ├── lib/
│   │   └── firebase.ts         # Konfigurasi dan inisialisasi Firebase
│   ├── App.tsx                 # Root komponen dan state management tampilan
│   └── index.css               # Gaya global dan konfigurasi Dark Mode Tailwind
├── firestore.rules             # Aturan keamanan database Firestore
├── firebase-blueprint.json     # Cetak biru arsitektur Firebase
└── package.json

🚀 Instalasi & Setup Lokal
Ikuti langkah-langkah berikut untuk menjalankan Ninapedia di mesin lokal Anda:
1. Kloning Repositori
git clone [https://github.com/username/ninapedia.git](https://github.com/username/ninapedia.git)
cd ninapedia
2.Instal Dependensi
npm install
3.Konfigurasi Firebase
- Buat proyek baru di Firebase Console.
- Aktifkan layanan Authentication (Email/Password) dan Firestore Database.
- Salin konfigurasi Firebase Anda dan letakkan di dalam file .env atau langsung sesuaikan di src/lib/firebase.ts.
- Deploy aturan keamanan Firestore:
firebase deploy --only firestore:rules
4. Jalankan Development Server
npm run dev
Aplikasi akan berjalan di http://localhost:5173 (atau port default Vite/React Anda).

MIT License
naufalabdoel 2026
