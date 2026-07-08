# 🗂️ Productive Dashboard

A single-page productivity web app built using **HTML, CSS, and JavaScript** that brings together multiple daily-use tools into one dashboard — manage tasks, plan your day, stay motivated, track focus time, check the weather, and set daily goals, all from one screen.

---

## 📖 Overview

Productive Dashboard follows a simple, repeating flow:

1. **Dashboard loads** — user sees feature cards (Todo, Planner, Motivation, Timer, Goals) along with always-visible widgets (Date & Time, Weather).
2. **User selects a feature** — clicking a card opens that feature in full view.
3. **User interacts with it** — adding tasks, starting a timer, marking goals complete, etc.
4. **Data is saved** — changes are stored in `localStorage` so nothing is lost on refresh.
5. **User returns to dashboard** — a back/close button brings them back to pick another feature.

---

## ✨ Features

### 🏠 Dashboard Navigation
- Circular wheel-style feature cards, rotatable via mouse scroll.
- Only one feature view is active at a time.
- Last opened section persists across page refresh (via `localStorage`).

### ✅ Todo List
- Add tasks with description, category, due date, and importance level.
- Mark tasks as complete or delete them.
- Tasks auto-grouped by category.
- Filter tasks by date using the date bar.
- Hover on a task to preview its description.
- Data persisted in `localStorage`.

### 🗓️ Daily Planner
- Hour-by-hour time slots from 6:00 AM to 10:00 PM.
- Mark a task as important by starting it with `!`.
- Mark slots as complete.
- "Reset All" button to clear the entire day's plan.
- Data persisted in `localStorage`.

### 💡 Motivation Quotes
- Fetches a random motivational quote (with author) from a live API.
- "New Quote" button to fetch another quote on demand.

### ⏱️ Focus / Pomodoro Timer
- 25-minute countdown timer with Start, Pause, and Reset controls.
- Last 10 seconds turn red as a visual warning.
- Dedicated "Session Complete" screen once the timer ends.

### 🌤️ Weather Widget
- Fetches live weather data based on the user's geolocation.
- Displays temperature, condition, heat index, humidity, and wind speed.

### 🕒 Date & Time Display
- Live-updating current day, date, and time.
- Updates every second using the `Date` object and `setInterval`.

### 🌄 Dynamic Background
- Background image changes automatically based on time of day (dawn, day, dusk, night).
- When Dark Theme is enabled, background always shows the night image regardless of actual time.

### 🌗 Theme Switch (Light/Dark)
- Toggle between light and dark themes.
- Theme preference saved in `localStorage` and applied on page load.

### 🎯 Daily Goals
- Add short-term daily goals via an inline "+" card.
- Mark goals as complete with a checkbox.
- Delete goals individually.
- Live progress indicator ("X of Y completed").
- Each goal card gets a unique pastel color.

---

## 🗃️ Project Structure

```
├── index.html      # Structure of the dashboard and all feature sections
├── style.css       # Layout, colors, light/dark theme variables, responsive design
├── script.js       # Navigation logic, event listeners, localStorage handling, API calls, timers
└── assets/         # Images, icons, and other static assets
```

---

## 🧰 Tech Stack

- **HTML5** — Page structure
- **CSS3** — Styling, theming (CSS variables), responsive layout
- **JavaScript (Vanilla)** — DOM manipulation, event handling, app logic
- **Local Storage** — Persisting tasks, planner data, goals, and theme
- **Fetch API** — Live data from Weather API and Quotes API
- **Geolocation API** — Detecting user's location for weather
- **Remix Icon** — Icon library

---

## 🔌 APIs Used

| Feature | API |
|---|---|
| Weather Widget | [WeatherAPI](https://www.weatherapi.com/) |
| Motivation Quotes | [DummyJSON Quotes](https://dummyjson.com/quotes/random) |

> ⚠️ Note: The Weather API key is currently hardcoded in `script.js`. For production use, this should be moved to an environment variable / backend proxy.

---

## 🚀 Getting Started

1. Clone or download this repository.
2. Open `index.html` directly in your browser — no build step or server required.
3. Allow location access when prompted, to enable the Weather Widget.

```bash
git clone <your-repo-url>
cd productive-dashboard
open index.html
```

---

## 🧠 Key Concepts Practiced

- DOM Manipulation & Dynamic Rendering
- Event Listeners & Event Delegation
- Local Storage (state persistence)
- Fetch API & handling async data
- Timers (`setInterval` / `clearInterval`)
- Date Object usage
- CSS Variables for theming
- Building a multi-section single-page app

---

## 🙌 Author

Built as a hands-on project to practice core JavaScript, DOM, and browser storage concepts by combining several independent mini-features into one cohesive dashboard.
