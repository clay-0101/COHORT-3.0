# Carry — Developer Portfolio

A motion-driven personal portfolio built with React, Vite, and GSAP. Every section is scroll-choreographed — from the hero reveal to a stacked project showcase and an interactive footer — designed to feel closer to an award-winning agency site than a template.

**Live demo:** _add your deployed link here_

---

## ✨ Features

- **Cinematic hero** — animated background, staggered hero text, and a floating status badge
- **Scroll-orchestrated sections** — GSAP `ScrollTrigger` timelines drive card carousels, circular image arrangements, and text reveals as you scroll
- **Rotating word / phrase animation** — character-level split-text animation for dynamic taglines
- **Interactive "Bio" panel** — an accordion-style stack of cards that expands based on scroll position
- **Project showcase** — a dedicated `/projects` route listing real shipped projects with live demo and GitHub links
- **About page** — a styled "profile card" layout with tech stack, current status, and personal details
- **Custom animated footer** — a full-screen reveal footer with a giant interactive wordmark, magnetic hover effects on social links, and a smooth "back to top" scroll
- **Buttery smooth scrolling** — powered by [Lenis](https://github.com/darkroomengineering/lenis)
- **Fully responsive** — Tailwind CSS v4 utility-first styling across breakpoints

---

## 🛠️ Tech Stack

| Category         | Tools                                   |
| ----------------- | ---------------------------------------- |
| Framework          | [React 19](https://react.dev)            |
| Build tool          | [Vite 7](https://vitejs.dev)            |
| Routing             | [React Router 8](https://reactrouter.com) |
| Styling             | [Tailwind CSS 4](https://tailwindcss.com) |
| Animation           | [GSAP 3](https://gsap.com) (`ScrollTrigger`, `SplitText`, `MotionPathPlugin`, `ScrollToPlugin`) |
| Smooth scroll       | [Lenis](https://github.com/darkroomengineering/lenis) |
| Icons               | [Lucide React](https://lucide.dev)      |
| Linting             | ESLint 9                                |

---

## 📂 Project Structure

```
PortFolio/
├── public/
│   └── vite.svg
├── src/
│   ├── Pages/
│   │   ├── Main/            # Hero section (navbar, background, hero text, badge)
│   │   │   ├── components/
│   │   │   └── hooks/
│   │   ├── Second/          # Scroll-driven circular image showcase
│   │   │   └── components/
│   │   ├── Third/           # Rotating / split-text phrase animation
│   │   ├── Bio/              # Scroll-accordion info cards
│   │   ├── Project/          # /projects — full project showcase (ShowCase.jsx)
│   │   ├── About/             # /about — profile & tech stack page
│   │   └── Footer/            # Animated full-screen footer
│   ├── Routes/
│   │   └── MyRoute.jsx        # App routing + Lenis smooth-scroll setup
│   ├── assets/                 # Images used across the site
│   ├── App.jsx                  # Landing page composition (Main + Second + Rotating + Bio)
│   ├── main.jsx                  # App entry point
│   └── index.css                  # Global styles / Tailwind entry
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# clone the repo
git clone https://github.com/clay-0101/COHORT-3.0.git

# move into the portfolio folder
cd COHORT-3.0/PortFolio

# install dependencies
npm install

# start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Available Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`        | Start the local development server    |
| `npm run build`       | Build the app for production          |
| `npm run preview`      | Preview the production build locally  |
| `npm run lint`          | Run ESLint across the project         |

---

## 🧭 Routes

| Path         | Page                                             |
| ------------ | ------------------------------------------------- |
| `/`            | Landing page — Hero, showcase, rotating words, bio |
| `/about`         | Profile / tech stack page                          |
| `/projects`        | Full project showcase                                |

---

## 📌 Featured Projects (shown on `/projects`)

| # | Project | Category |
|---|---------|----------|
| 01 | [SkyMart](https://skymart-beta.vercel.app/) | E-Commerce |
| 02 | [Sundown](https://clay-0101.github.io/Sundown-Studio-Clone/) | Clone |
| 03 | [Expense Tracker](https://spendly-kappa-vert.vercel.app/) | Web Application |
| 04 | [Clone UI](https://two-leaves-and-a-bud-sigma.vercel.app/) | Clone |
| 05 | [Productive Dashboard](https://productive-dashboard-two.vercel.app/) | Creative Development |
| 06 | [Quizly](https://quizly-azure-nine.vercel.app/) | Quiz |
| 07 | [EMS](https://emstool.vercel.app/) | Management |

---

## 🎨 Design Notes

- Typography mixes **Barlow Condensed** (display), **Inter** (body), and **DM Mono** (labels/meta text) for a technical-yet-premium feel.
- Motion respects `prefers-reduced-motion` — animations are disabled for users who request reduced motion.
- The footer uses a fixed full-screen layout with a scroll-driven wordmark reveal, so the rest of the page scrolls past it like a curtain lifting.

---

## 📬 Contact

- **GitHub:** [@clay-0101](https://github.com/clay-0101)
- **Email:** sainicarry@gmail.com

---

## 📄 License

This project is open source. Feel free to explore the code, but please don't republish it as your own portfolio.