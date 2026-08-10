# 📊 UNIDA Tahfidz Analytics Dashboard

> Dashboard interaktif untuk visualisasi dan analisis data kehadiran mahasiswa Teknik Informatika pada program Karantina Tahfidz UNIDA Gontor Tahun 2022.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-F5788D?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

---

## 🔗 Repository

**GitHub:**  
https://github.com/ahnfsdqi/Dashboard_Data_Tahfidz

---

## 📖 Tentang Project

**UNIDA Tahfidz Analytics Dashboard** merupakan dashboard berbasis web yang dibuat untuk menyajikan data kehadiran mahasiswa Teknik Informatika pada kegiatan Karantina Tahfidz tahun 2022 dalam bentuk visualisasi yang lebih mudah dipahami.

Dashboard ini mengubah data rekapitulasi kehadiran menjadi beberapa bentuk informasi, seperti:

- Ringkasan jumlah mahasiswa.
- Jumlah mahasiswa hadir dan tidak hadir.
- Persentase kehadiran.
- Perbandingan kehadiran antar semester.
- Proporsi kehadiran secara keseluruhan.
- Analisis diagnostik terhadap kesenjangan kehadiran.
- Proyeksi risiko berdasarkan kondisi kehadiran.
- Rekomendasi solusi strategis.

Project ini dibuat sebagai implementasi **Sains Data / Data Analytics** dalam bentuk dashboard interaktif.

---

## 🎯 Tujuan

Tujuan utama project ini adalah:

1. Menyajikan data absensi secara visual dan informatif.
2. Mempermudah identifikasi semester dengan tingkat kehadiran rendah.
3. Membandingkan tingkat kehadiran dan ketidakhadiran antar semester.
4. Memberikan insight berdasarkan data yang tersedia.
5. Menyediakan rekomendasi strategis yang dapat digunakan sebagai bahan evaluasi program Tahfidz.

---

## 📊 Ringkasan Data

Dashboard menggunakan data rekapitulasi **141 mahasiswa** yang terbagi dalam 5 kelompok semester.

| Semester | Total Mahasiswa | Hadir | Tidak Hadir | Kehadiran |
|----------|----------------:|------:|------------:|----------:|
| Semester 1 | 51 | 46 | 5 | 90.2% |
| Semester 3 | 24 | 16 | 8 | 66.7% |
| Semester 5 | 29 | 2 | 27 | 6.9% |
| Semester 7 | 29 | 4 | 25 | 13.8% |
| Semester 9 | 8 | 1 | 7 | 12.5% |
| **Total** | **141** | **69** | **72** | **48.9%** |

### 📌 Insight Utama

- Total mahasiswa: **141**
- Total hadir: **69 mahasiswa (48.9%)**
- Total tidak hadir: **72 mahasiswa (51.1%)**
- Tingkat kehadiran tertinggi terdapat pada **Semester 1 (90.2%)**.
- Tingkat kehadiran terendah terdapat pada **Semester 5 (6.9%)**.
- Semester 7 dan Semester 9 juga menunjukkan tingkat kehadiran yang rendah.

> **Catatan:** Analisis dan interpretasi pada dashboard mengikuti data yang digunakan dalam project dan ditujukan sebagai bahan analisis akademik.

---

## ✨ Fitur Dashboard

### 1. 📌 Executive Summary

Menampilkan KPI utama secara ringkas:

- Total mahasiswa.
- Total presensi hadir.
- Total tidak hadir.
- Status khusus/delegasi.

### 2. 📈 Descriptive Analytics

Menyajikan:

- Bar chart perbandingan persentase kehadiran dan ketidakhadiran.
- Doughnut chart proporsi kehadiran keseluruhan.
- Tabel rekapitulasi berdasarkan semester.

### 3. 🔎 Diagnostic Analytics

Membantu menjelaskan kemungkinan faktor yang berkaitan dengan kesenjangan kehadiran, termasuk:

- Efek transisi mahasiswa baru.
- Beban akademik dan non-akademik semester lanjut.
- Keterbatasan informasi pada data absensi.

### 4. 🔮 Predictive Analytics

Menyajikan proyeksi risiko apabila kondisi kehadiran tidak mendapatkan evaluasi atau perbaikan.

### 5. ✅ Prescriptive Analytics

Menyediakan beberapa rekomendasi strategis:

1. **Audit Kehadiran & Pemutihan Data**
2. **Sesi Fleksibel / Makeup Session**
3. **Pendampingan Murobbi / Pembimbing**
4. **Evaluasi & Penyesuaian Jadwal**

---

## 🛠️ Teknologi yang Digunakan

Project ini menggunakan teknologi frontend sederhana sehingga dapat dijalankan langsung melalui browser.

| Teknologi | Fungsi |
|----------|--------|
| **HTML5** | Struktur halaman dashboard |
| **CSS3** | Styling dan animasi tambahan |
| **JavaScript** | Interaksi dan logika dashboard |
| **Tailwind CSS** | Utility-first styling |
| **Chart.js** | Visualisasi grafik |
| **Lucide Icons** | Ikon antarmuka |
| **Google Fonts - Inter** | Tipografi |

Beberapa library eksternal dimuat melalui CDN sehingga koneksi internet diperlukan ketika dashboard dijalankan.

---

## 📁 Struktur Project

```text
Dashboard_Data_Tahfidz/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── tailwind.config.js
│
└── README.md
```

---

## 🚀 Cara Menjalankan

### Cara 1 — Menjalankan Secara Lokal

Clone repository:

```bash
git clone https://github.com/ahnfsdqi/Dashboard_Data_Tahfidz.git
```

Masuk ke folder project:

```bash
cd Dashboard_Data_Tahfidz
```

Kemudian buka:

```text
index.html
```

di browser.

Tidak diperlukan:

- Node.js
- PHP
- MySQL
- XAMPP
- Backend server

Dashboard merupakan aplikasi frontend statis.

---

## 🌐 Menjalankan dengan Live Server

Jika menggunakan **Visual Studio Code**:

1. Buka folder project.
2. Install extension **Live Server**.
3. Klik kanan `index.html`.
4. Pilih **Open with Live Server**.
5. Dashboard akan terbuka pada browser.

---

## ☁️ Deployment dengan GitHub Pages

Project ini dapat digunakan sebagai website statis menggunakan GitHub Pages.

Langkah umum:

1. Buka repository GitHub.
2. Masuk ke **Settings**.
3. Pilih **Pages**.
4. Pada bagian **Build and deployment**, pilih:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Simpan konfigurasi.
6. Tunggu proses deployment selesai.
7. GitHub akan menyediakan URL website.

---

## 🎨 Tampilan Dashboard

Dashboard menggunakan konsep desain:

- Dark sidebar.
- Lime accent.
- Card-based layout.
- Responsive grid.
- Interactive chart.
- Hover animation.
- Glassmorphism navigation.
- Minimalist academic analytics interface.

---

## 🧠 Konsep Analisis

Dashboard menggunakan pendekatan analitik:

```text
Data Absensi
     │
     ▼
Descriptive Analytics
     │
     ├── Jumlah Kehadiran
     ├── Persentase Kehadiran
     └── Perbandingan Semester
     │
     ▼
Diagnostic Analytics
     │
     └── Identifikasi kemungkinan penyebab
     │
     ▼
Predictive Analytics
     │
     └── Proyeksi risiko
     │
     ▼
Prescriptive Analytics
     │
     └── Rekomendasi solusi
```

Pendekatan tersebut membantu mengubah data mentah menjadi informasi yang lebih mudah digunakan untuk evaluasi.

---

## 👨‍💻 Pengembang

Project ini disusun oleh:

- **Naufal Ahnafussidqi P.**
- **Suryatama Widyadhana**
- **Haikal Rafi Pratama**
- **M. Hadi Ramadhan**

### Institusi

**Program Studi Teknik Informatika**  
**Fakultas Sains & Teknologi**  
**Universitas Darussalam Gontor**

---

## 👨‍🏫 Dosen Pengampu

**Ust. Dihin Muriyatmoko, M.T**

---

## 📚 Project Akademik

Project ini dikembangkan sebagai implementasi pembelajaran dan penerapan konsep **Sains Data / Data Analytics** untuk mengolah dan memvisualisasikan data kehadiran mahasiswa.

---

## ⚠️ Disclaimer

Data yang ditampilkan dalam dashboard merupakan data untuk kebutuhan project/analisis akademik.

Dashboard ini tidak dimaksudkan sebagai sistem resmi penilaian atau administrasi kehadiran institusi.

---

## 📄 Lisensi

Project ini dibuat untuk keperluan **akademik dan pembelajaran**.

Silakan gunakan dan kembangkan source code sesuai kebutuhan dengan tetap mencantumkan atribusi kepada pengembang.

---

## ⭐ Support

Jika project ini bermanfaat, jangan lupa memberikan ⭐ pada repository GitHub.

**Repository:**  
https://github.com/ahnfsdqi/Dashboard_Data_Tahfidz
