========================================================================
       SKOLAH - Aplikasi Pembelajaran Bahasa Tergamifikasi
========================================================================

Skolah adalah platform pembelajaran bahasa asing berbasis web yang dirancang 
dengan sistem gamifikasi yang interaktif dan menyenangkan. Berbeda dengan 
aplikasi belajar konvensional yang monoton, Skolah menggabungkan pelajaran 
interaktif, quest harian, perolehan koin, toko reward (shop), papan peringkat 
(leaderboard), serta ruang komunitas untuk memberikan pengalaman belajar yang 
adiktif, interaktif, dan produktif.

------------------------------------------------------------------------
🌟 FITUR UTAMA
------------------------------------------------------------------------

1. Pelajaran Interaktif (Interactive Lessons & Courses)
   Jalur belajar terstruktur untuk menguasai berbagai bahasa asing secara 
   efektif (/courses, /lesson).

2. Quest & Tantangan Harian (Daily Quests)
   Selesaikan tugas harian untuk melacak progres belajar serta mendapatkan 
   koin (/quests).

3. Toko Reward (Shop)
   Tukarkan koin yang didapatkan untuk membeli booster harian, streak freeze, 
   atau item kustomisasi menarik lainnya (/shop).

4. Papan Peringkat (Leaderboard)
   Bersaing secara sehat dengan pembelajar lain dari seluruh dunia untuk 
   menduduki peringkat teratas liga (/leaderboard).

5. Komunitas Belajar (Community Hub)
   Berinteraksi, berdiskusi, dan melatih kemampuan berbahasa langsung 
   dengan sesama pengguna (/community).

6. Profil & Dasbor Pengguna (User Dashboard & Profile)
   Visualisasi pencapaian, statistik harian, pengaturan bahasa, dan status 
   kustomisasi Anda (/profile).

------------------------------------------------------------------------
🛠️ TEKNOLOGI YANG DIGUNAKAN
------------------------------------------------------------------------

- Framework Utama : Next.js 16 (App Router)
- Library Client   : React 19 & TypeScript
- Styling & Desain : Tailwind CSS v4 & PostCSS
- Animasi          : GSAP (GreenSock Animation Platform) & @gsap/react
- Ikon             : FontAwesome (@fortawesome/...)

------------------------------------------------------------------------
🚀 CARA MENJALANKAN PROJECT SECARA LOKAL
------------------------------------------------------------------------

Ikuti panduan di bawah ini untuk memasang dan menjalankan website Skolah 
di komputer Anda.

1. Prasyarat (Prerequisites)
   Sebelum memulai, pastikan komputer Anda telah terinstal perangkat lunak berikut:
   - Node.js (Versi 20 ke atas sangat direkomendasikan)
   - npm (biasanya terinstal secara otomatis bersama Node.js)

2. Kloning Repositori
   Unduh kode sumber project ke komputer lokal Anda menggunakan Git:
   $ git clone https://github.com/anggasaputra25/skolah.git
   $ cd skolah

3. Instalasi Dependensi
   Jalankan perintah berikut untuk menginstal semua pustaka (packages) yang 
   dibutuhkan oleh project:
   $ npm install

4. Menjalankan Server Pengembangan (Local Dev Server)
   Jalankan server lokal pengembangan dengan perintah berikut:
   $ npm run dev

   Setelah server berhasil dijalankan, buka browser Anda dan akses tautan berikut:
   -> http://localhost:3000

------------------------------------------------------------------------
📂 STRUKTUR DIREKTORI UTAMA
------------------------------------------------------------------------

Berikut adalah gambaran struktur direktori pada project Skolah:

- app/         : Halaman-halaman utama (Autentikasi, Landing Page, dan 
                 Dashboard) dengan konsep App Router.
- components/  : Kumpulan komponen React yang dapat digunakan kembali 
                 (dibagi menjadi forms, layout, dan ui).
- constants/   : Berkas penyimpanan data statis seperti testimoni, artikel 
                 blog, dll.
- hooks/       : Custom React Hooks (misalnya useScroll untuk manajemen 
                 animasi gulir).
- lib/         : Utilitas pembantu (helper functions) dan konfigurasi pustaka global.
- public/      : Berkas statis seperti gambar (screenshots), ikon svg, font, 
                 dan aset visual lainnya.
- types/       : Definisi tipe data TypeScript global.

========================================================================
Dibuat dengan 💙 oleh Angga Saputra
========================================================================
