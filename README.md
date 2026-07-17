<div align="center">

# 🚀 Sivaramakrishna Durgaprasad — Personal Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

**A modern, animated, dark-themed personal portfolio built with React + TypeScript + Vite.**

[🌐 Live Demo](https://github.com/Godesivaramakrishna/personal_portfolio) · [📧 Contact](mailto:goderaja288@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/gsrk-durgaprasad-a00451291/)

</div>

---

## ✨ Features

- 🎨 **Dark-themed premium UI** with glassmorphism, gradient accents & micro-animations
- 🤖 **AI Portfolio Chatbot** powered by a client-side RAG (Retrieval-Augmented Generation) engine — no API key needed
- 📱 **Fully responsive** — works perfectly on mobile, tablet & desktop
- ⚡ **Lightning fast** — code-split lazy loading for every section
- 🖱️ **Custom animated cursor** with smooth scroll progress indicator
- 📜 **Resume viewer** — view & download PDF directly in the browser
- 🏅 **Certifications modal** — interactive badge & certificate PDF viewer
- 🔗 **Coding profiles** — LeetCode, GeeksForGeeks, CodeChef, HackerRank
- 📬 **Contact form** integrated with [Formspree](https://formspree.io/)
- 🧭 **Smooth-scroll navigation** with animated navbar

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS v3, shadcn/ui, Framer Motion |
| **Routing** | React Router DOM v6 |
| **Form** | React Hook Form, Zod, Formspree |
| **State/Query** | TanStack React Query v5 |
| **Icons** | Lucide React |
| **Chatbot** | Client-side RAG (cosine similarity) |
| **Build** | Vite, ESLint, TypeScript ESLint |

---

## 📂 Project Structure

```
cozy-cloud-craft/
├── public/
│   ├── profile.jpg          # Profile photo
│   ├── resume.pdf           # Resume PDF
│   └── certificates/        # Certificate PDFs & badge images
├── src/
│   ├── components/
│   │   ├── portfolio/       # Section components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── CodingProfiles.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── ChatBot.tsx
│   │   ├── ui/              # shadcn/ui components
│   │   └── CustomCursor.tsx
│   ├── pages/
│   │   ├── Index.tsx        # Main page (lazy-loads all sections)
│   │   └── NotFound.tsx
│   ├── services/
│   │   └── ragService.ts    # Client-side RAG chatbot engine
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# Clone the repository
git clone https://github.com/Godesivaramakrishna/personal_portfolio.git
cd personal_portfolio/cozy-cloud-craft

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `cozy-cloud-craft/dist/`.

---

## 📋 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest test suite |

---

## 🤖 Portfolio Chatbot (RAG)

The chatbot uses a **fully client-side RAG pipeline** — no backend or API key required:

1. **Knowledge base** — Portfolio content is pre-indexed in `ragService.ts`
2. **Retrieval** — Cosine similarity search finds the most relevant chunks
3. **Generation** — Rule-based intent detection returns accurate, personalized answers

To integrate a real LLM (e.g., OpenAI), call `queryWithLLM(query, apiKey)` from `ragService.ts`.

---

## 🌐 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Name, tagline, social links, resume download |
| 2 | **About** | Profile summary, education |
| 3 | **Skills** | Technical expertise by category |
| 4 | **Projects** | Featured projects with tech stack |
| 5 | **Experience** | Work experience / internships |
| 6 | **Certifications** | Badges & certificate PDFs |
| 7 | **Coding Profiles** | Competitive programming stats |
| 8 | **Contact** | Formspree-powered contact form |

---

## 📸 Screenshots

> **Hero Section** — Animated headline with gradient text and social links  
> **Projects** — Cards with glowing tech tags and GitHub links  
> **Chatbot** — Floating AI assistant with suggested questions  

---

## 📦 Deployment

This project is ready to deploy to any static hosting platform:

| Platform | Command |
|---|---|
| **Vercel** | `vercel --prod` |
| **Netlify** | Drag & drop `dist/` folder |
| **GitHub Pages** | Use `gh-pages` branch |
| **Docker** | `docker-compose up` (Dockerfile included) |

---

## 🔧 Customization

To make this portfolio your own:

1. Update personal info in each section component under `src/components/portfolio/`
2. Replace `public/profile.jpg` with your photo
3. Replace `public/resume.pdf` with your resume
4. Update the Formspree form ID in `Contact.tsx` (line 14)
5. Update the RAG knowledge base in `src/services/ragService.ts`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ in India by **Sivaramakrishna Durgaprasad**

[![GitHub](https://img.shields.io/badge/GitHub-Godesivaramakrishna-181717?style=flat-square&logo=github)](https://github.com/Godesivaramakrishna)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-gsrk--durgaprasad-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/gsrk-durgaprasad-a00451291/)
[![Email](https://img.shields.io/badge/Email-goderaja288@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:goderaja288@gmail.com)

</div>
