# RCH ID Simple Guide

**A Public Interest Initiative for Pregnant Women in Tamil Nadu**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## 🎯 Purpose

This is a **community-driven, informational web application** designed to help first-time pregnant women and their families understand the **RCH ID (Reproductive and Child Health ID)** registration process at Government Hospitals in Tamil Nadu.

### Why This App?

Many families face confusion and anxiety when visiting Government Hospitals for the first time. This app aims to:

- ✅ **Reduce Anxiety** by explaining the hospital process step-by-step
- ✅ **Prevent Repeat Visits** by clarifying document requirements upfront
- ✅ **Save Time** by preparing families with realistic expectations
- ✅ **Support Multiple Languages** (Tamil & English) for wider accessibility

> **Important**: This app is purely informational. It does **NOT** generate RCH IDs, collect personal data, or replace official government systems.

---

## 🚀 Features

### Core Features
- 🌐 **Bilingual Support**: Instant toggle between Tamil and English
- 📋 **Document Checklist**: Clear list of required documents (Aadhaar, IPPB Card, E-Shram Card, etc.)
- 🏥 **Hospital Flow Guide**: Step-by-step walkthrough of what happens inside the hospital
- ❓ **FAQ Section**: Answers to common questions about Marriage Certificates, waiting times, etc.
- 📱 **Mobile-First Design**: Optimized for smartphone access
- 🔒 **Privacy-First**: No login, no forms, no data collection
- ⚡ **Offline-Capable**: Static content that loads fast even on slow networks

### Technical Features
- Modern, accessible UI following latest design trends
- Smooth animations and transitions
- Touch-friendly buttons (64px minimum height)
- Responsive layout (max-width: 420px for mobile simulation)
- Government-friendly professional design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Angular** (Latest) | Frontend Framework |
| **TypeScript** | Type-safe development |
| **Vanilla CSS** | Custom styling with CSS variables |
| **Google Fonts** | Mukta Malar (Tamil) + Roboto |
| **Static Hosting** | GitHub Pages / Netlify / Vercel compatible |

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rch-id-simple-guide.git
   cd rch-id-simple-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`

### Build for production
   ```bash
   npm run build
   ```
   Output will be in `dist/rch-id-simple-guide/browser` directory.

---

## ☁️ Vercel Deployment

For successful deployment on Vercel, use these settings:

- **Framework Preset**: `Angular`
- **Build Command**: `npm run build`
- **Output Directory**: `dist/rch-id-simple-guide/browser`
- **Install Command**: `npm install`

The included `vercel.json` ensures that all routes redirect to `index.html` for a smooth Single Page Application (SPA) experience.

---

## 📱 User Journey

```
Landing Page (Language Selection)
    ↓
What is RCH ID? (Explanation)
    ↓
Preparation (Document Checklist)
    ↓
Hospital Flow (Step-by-Step Guide)
    ↓
FAQ (Common Questions)
    ↓
Disclaimer (Legal Notice)
```

---

## 🤝 Contributing

This is a **public interest project** and we welcome contributions from:

- Healthcare professionals
- Government employees
- Social workers (ASHA, ANM)
- Developers
- Translators
- UX designers

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add helpful feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Areas for Contribution
- [ ] Add more regional languages (Hindi, Telugu, Kannada, etc.)
- [ ] Improve Tamil translations
- [ ] Add district-specific variations
- [ ] Create printable PDF guides
- [ ] Add voice-over support for accessibility

---

## 🏛️ Government Collaboration

This project is **open for collaboration** with:

- Department of Public Health, Tamil Nadu
- National Health Mission (NHM)
- Primary Health Centers (PHCs)
- Urban Primary Health Centers (UPHCs)
- ASHA Workers and ANMs

If you're a government official interested in adopting or improving this tool, please reach out via Issues or email.

---

## ⚠️ Disclaimer

**PLEASE READ CAREFULLY**

1. **No Government Affiliation**: This app is NOT an official platform of the Government of Tamil Nadu or Government of India.

2. **Informational Use Only**: Content is based on user experiences and may vary by district.

3. **No Data Collection**: This app does NOT collect, store, or transmit any personal data.

4. **No Service Delivery**: This app CANNOT generate RCH IDs. Users must visit their PHC/Hospital for official registration.

5. **Accuracy**: While we strive for accuracy, government procedures may change. Always verify with official sources.

For full disclaimer, see [DISCLAIMER.md](DISCLAIMER.md)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Why MIT?**
- Allows government adoption without restrictions
- Enables commercial use for CSR initiatives
- Permits modifications and redistribution
- Requires attribution only

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/your-username/rch-id-simple-guide/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/rch-id-simple-guide/discussions)
- Contact
📧 Email: thangamariappancse@gmail.com
🔗 LinkedIn: [thanga-mariappan-pandian](https://www.linkedin.com/in/thangamariappanpandian/)
🐙 GitHub: [thangamariappan19](https://github.com/thangamariappan19)

---

## 🙏 Acknowledgments

- Inspired by real-life experiences of families navigating the RCH ID process
- Built with the goal of reducing healthcare access barriers
- Dedicated to all ASHA workers, ANMs, and healthcare professionals who serve communities daily

---

**Made with ❤️ for Public Health in India**
