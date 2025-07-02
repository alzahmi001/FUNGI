# JamurTiram Pro - Aplikasi Budidaya Jamur Tiram

Aplikasi mobile lengkap untuk budidaya jamur tiram yang menyediakan panduan, monitoring, dan manajemen produksi.

## 🍄 Fitur Utama

### 1. Dashboard
- **Weather Widget**: Monitoring cuaca real-time
- **Production Summary**: Ringkasan produksi bulanan
- **Quick Actions**: Akses cepat ke fitur utama
- **Recent Activity**: Aktivitas terbaru

### 2. Panduan Budidaya
- **6 Tahap Budidaya Lengkap**:
  1. Pemilihan Bibit
  2. Persiapan Media Tanam
  3. Pembuatan Baglog
  4. Sterilisasi
  5. Inokulasi
  6. Inkubasi
- **Progress Tracking**: Monitor kemajuan setiap tahap
- **FAQ**: Pertanyaan yang sering diajukan
- **Glossary**: Kamus istilah budidaya

### 3. Panduan Perawatan
- **Environment Monitoring**: 
  - Suhu (22-28°C)
  - Kelembaban (80-90%)
  - Sirkulasi udara
- **Maintenance Tasks**:
  - Pengecekan suhu & kelembaban
  - Penyiraman & pengabutan
  - Sirkulasi udara
  - Pengecekan hama & penyakit
  - Pembersihan kumbung
  - Pemanenan
- **Auto Reminder**: Pengingat otomatis untuk tugas perawatan
- **Troubleshooting Guide**: Panduan mengatasi masalah

### 4. Manajemen Produksi
- **Production Dashboard**: 
  - Summary harian, mingguan, bulanan
  - Grafik produktivitas
  - Metrics performa
- **Baglog Tracking**:
  - Status baglog (Produktif, Inkubasi, Siap Panen, Habis)
  - Lifecycle tracking
  - Productivity analysis
- **Harvest Records**: Pencatatan hasil panen
- **Reports & Analytics**: Laporan dan analisis data

### 5. Tools & Utilities
- **Kalkulator Baglog**: Hitung kebutuhan bahan
- **Kalkulator Biaya**: Estimasi biaya produksi
- **Kalkulator ROI**: Return on investment
- **Konverter Satuan**: Berat dan suhu
- **Timer & Reminder**: Timer sterilisasi dan pengingat
- **Knowledge Library**: Artikel dan tips budidaya

## 🛠️ Teknologi

- **Framework**: React Native dengan Expo
- **Navigation**: React Navigation v7
- **Icons**: Expo Vector Icons (Ionicons)
- **Platform**: iOS, Android, Web
- **Language**: TypeScript

## 📱 Instalasi

### Prasyarat
- Node.js 18+
- npm atau yarn
- Expo CLI

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd jamur_tiram_app_rn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan aplikasi**
   ```bash
   # Untuk web
   npm run web
   
   # Untuk Android (memerlukan Android Studio)
   npm run android
   
   # Untuk iOS (memerlukan Xcode - macOS only)
   npm run ios
   ```

## 🌐 Build untuk Production

### Web Build
```bash
npx expo export --platform web
```
File hasil build akan tersedia di folder `dist/`

### Android APK
Untuk membuat APK Android, diperlukan:
1. Akun Expo/EAS
2. Konfigurasi EAS Build
3. Build menggunakan EAS CLI

```bash
# Install EAS CLI
npm install -g eas-cli

# Login ke Expo
eas login

# Konfigurasi build
eas build:configure

# Build APK
eas build --platform android --profile preview
```

## 📊 Data dan Konten

### Data Budidaya
- 6 tahap budidaya lengkap dengan detail
- Material dan tools yang dibutuhkan
- Tips dan troubleshooting
- FAQ dan glossary

### Data Perawatan
- 6 kategori tugas perawatan
- Environment standards
- Troubleshooting guide
- Best practices

### Fitur Kalkulator
- Komposisi baglog optimal
- Perhitungan kebutuhan air
- Estimasi jumlah baglog
- Konversi satuan

## 🎨 Design System

### Color Palette
- **Primary**: #4CAF50 (Green)
- **Secondary**: #2196F3 (Blue)
- **Accent**: #FF9800 (Orange)
- **Background**: #f5f5f5 (Light Gray)
- **Text**: #333333 (Dark Gray)

### Typography
- **Headers**: Bold, 18-24px
- **Body**: Regular, 14-16px
- **Caption**: Regular, 12px

### Components
- Card-based layout
- Consistent spacing (8px grid)
- Rounded corners (8-12px)
- Shadow elevation
- Color-coded status indicators

## 📁 Struktur Proyek

```
jamur_tiram_app_rn/
├── App.tsx                 # Main app component
├── src/
│   ├── screens/           # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── BudidayaScreen.tsx
│   │   ├── PerawatanScreen.tsx
│   │   ├── ProduksiScreen.tsx
│   │   └── ToolsScreen.tsx
│   ├── components/        # Reusable components
│   ├── data/             # Static data
│   │   ├── budidayaData.ts
│   │   └── perawatanData.ts
│   └── utils/            # Utility functions
├── assets/               # Images and icons
└── dist/                # Build output
```

## 🔧 Konfigurasi

### Environment Variables
Tidak ada environment variables yang diperlukan untuk versi dasar.

### Platform Specific
- **iOS**: Memerlukan Xcode dan macOS
- **Android**: Memerlukan Android Studio
- **Web**: Berjalan di browser modern

## 📈 Roadmap

### Version 1.1
- [ ] Database lokal (SQLite)
- [ ] Sync data cloud
- [ ] Push notifications
- [ ] Camera integration untuk foto hasil panen

### Version 1.2
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Export data ke Excel/PDF
- [ ] Marketplace integration

### Version 2.0
- [ ] IoT sensor integration
- [ ] AI-powered recommendations
- [ ] Community features
- [ ] Advanced analytics

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Kontak

- **Developer**: Manus AI
- **Email**: support@manus.ai
- **Website**: https://manus.ai

## 🙏 Acknowledgments

- Expo team untuk framework yang luar biasa
- React Navigation untuk navigasi yang smooth
- Ionicons untuk icon set yang lengkap
- Komunitas React Native Indonesia

---

**JamurTiram Pro** - Solusi lengkap untuk budidaya jamur tiram modern! 🍄✨

