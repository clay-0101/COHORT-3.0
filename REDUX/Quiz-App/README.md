# Quizly 🧠

A clean, minimal quiz app built with **React**, **Tailwind CSS**, **React Router**, and **Redux Toolkit**. Create a quiz with your own preferences, answer questions, save the ones you like, and check your final score — all wrapped in a warm, minimal cream & lime-green theme.

---

## ✨ Features

- **Home page** — quick intro to the app with a "Start Quiz" call to action
- **Quiz setup form** — choose number of questions, difficulty, category, and question type (True/False or Multiple Choice)
- **Question card** — one question at a time, radio-style options, progress via question number, bookmark/save toggle, Back / Next / Submit navigation
- **Saved questions** — revisit bookmarked questions later, view the correct answer, or remove them
- **Score screen** — final result with a blurred backdrop, correct/wrong breakdown, and accuracy
- **Responsive sidebar layout** — collapsible sidebar on mobile (Home / Start Quiz / Saved) with a hamburger toggle
- **Custom favicon** — minimal question-mark mark matching the app theme

---

## 🎨 Theme

| Token | Color | Usage |
|---|---|---|
| Background | `#E7E4D5` | Page background |
| Card | `#FFFFFF` | Cards, sidebar content area |
| Text primary | `#1C2B1E` | Headings, primary text |
| Text muted | `#8A8879` / `#5E5C50` | Secondary text, labels |
| Accent | `#A6E65C` | Buttons, active states, highlights |
| Accent soft | `#EAF3DE` | Badges, subtle highlight backgrounds |
| Border | `#DAD7C7` | Card borders, dividers |

---

## 🛠 Tech Stack

- **React** — UI library
- **Tailwind CSS** — utility-first styling
- **React Router** — routing (`Home`, `Start Quiz`, `Saved`, `Score`)
- **Redux Toolkit** — quiz state (`quizSlice`) and saved questions (`saveQuiz`)
- **lucide-react** — icon set

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── MainLayout.jsx      # Sidebar + Outlet
│   ├── quiz/
│   │   ├── QuestionCard.jsx    # Single question view
│   │   ├── QuizForm.jsx        # Quiz setup form
│   │   └── ScoreScreen.jsx     # Final score overlay
│   └── saved/
│       └── SavedQuestionCard.jsx  # Saved question list item
├── pages/
│   └── home/
│       └── HomePage.jsx
├── features/
│   ├── quizSlice.js            # Quiz state, question flow
│   └── saveQuiz.js             # Saved/bookmarked questions
└── App.jsx
```

> Folder names above match imports already used in the components — adjust paths if your structure differs.

---

## 🚀 Getting Started

```bash
# install dependencies
npm install

# run dev server
npm run dev
```

Make sure the following packages are installed:

```bash
npm install react-router react-redux @reduxjs/toolkit lucide-react
```

---

## 🧩 Components Overview

| Component | Purpose |
|---|---|
| `MainLayout` | Sidebar navigation (Home / Start Quiz / Saved) with responsive mobile toggle |
| `HomePage` | Landing section with title, description, and Start Quiz button |
| `QuizForm` | Collects quiz preferences before starting |
| `QuestionCard` | Displays one question, choices, save/bookmark, and navigation |
| `ScoreScreen` | Blurred overlay showing final score and stats |
| `SavedQuestionCard` | Horizontal card for a saved question with show/hide answer and delete |



Made with 🍃 and Tailwind CSS.