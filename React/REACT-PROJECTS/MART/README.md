# ⚡ SkyMart

A modern, full-featured e-commerce front-end built with **React 19**, **React Router v8**, and **Tailwind CSS v4**. SkyMart lets users sign up, browse products fetched live from the [DummyJSON API](https://dummyjson.com/), filter and search by category/price/rating, manage a persistent shopping cart, and check out — all wrapped in a sleek dark UI with a signature lime-green (`#c8f400`) accent.

---

## 🚀 Live Demo

Deployed on **Vercel** — SPA routing is handled via `vercel.json` rewrites so all routes work on refresh.

---

## ✨ Features

- **Authentication (client-side)**
  - Sign up with full name, email, and password
  - Live password strength meter (weak / medium / strong) based on length, casing, digits, and special characters
  - Confirm-password validation
  - Sign in with email/password against locally stored registered users
  - Protected routes — `/home`, `/shop`, and `/about` are only accessible once a user is signed in
  - Session persists across refreshes via `localStorage`
  - Logout clears the active profile and redirects to sign-in

- **Product Catalog**
  - Products fetched live from `https://dummyjson.com/products`
  - Category grid with product counts per category (Electronics, Clothing, Furniture, Home, Sports, Accessories)
  - **New Arrivals** section (sorted by creation date)
  - **Top Rated** section (sorted by rating)
  - Full **Shop** page with grid of all products
  - Dedicated **Product Detail** page per product (`/shop/product/:id`) with live data refetch

- **Search & Filter**
  - Real-time search by product title
  - Filter by category
  - Sort by: Featured, Price (Low → High / High → Low), Top Rated, Lowest Rated
  - Active filter chips with individual and "Clear All" removal

- **Shopping Cart**
  - Slide-in cart drawer (toggle from navbar)
  - Add / remove items, increment / decrement quantity
  - Live cart item count badge in navbar
  - Auto-calculated total price
  - Checkout flow with toast confirmation, clears cart and resets product state
  - Cart and product "added" state persist to `localStorage` per logged-in user

- **UI/UX Details**
  - Dark theme throughout with lime-green (`#c8f400`) brand accent
  - Toast notifications (`react-toastify`) for key actions: login, signup errors, add-to-cart, checkout, logout
  - Scroll-to-top on route change
  - Responsive layout (mobile → desktop) across navbar, product grids, and cart drawer
  - Custom fonts (Clash Display family) loaded locally

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 7](https://vite.dev/) |
| Routing | [React Router v8](https://reactrouter.com/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`) |
| Forms | [React Hook Form](https://react-hook-form.com/) |
| HTTP Client | [Axios](https://axios-http.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| Linting | ESLint 9 (flat config) |
| Deployment | Vercel |
| Data Source | [DummyJSON](https://dummyjson.com/) (products API) |

---

## 📂 Project Structure

```
MART/
├── public/
│   ├── Fonts/                     # Clash Display font family + fonts.css
│   └── logo.svg
├── src/
│   ├── Context/
│   │   └── MyContext.jsx          # Global state: auth, cart, products, filters
│   ├── PAGES/
│   │   ├── ABOUT/
│   │   │   └── About.jsx
│   │   ├── HOME/
│   │   │   ├── Home.jsx
│   │   │   └── Components/
│   │   │       ├── Navbar.jsx
│   │   │       ├── Footer.jsx
│   │   │       ├── WelcomeBanner.jsx
│   │   │       ├── StatCards.jsx
│   │   │       ├── CategoryGrid.jsx
│   │   │       ├── TopRated.jsx
│   │   │       ├── TopProducts.jsx
│   │   │       ├── NewArrivals.jsx
│   │   │       ├── NewProducts.jsx
│   │   │       ├── FeatureStrip.jsx
│   │   │       ├── Cart.jsx
│   │   │       └── CartItem.jsx
│   │   ├── SHOP/
│   │   │   ├── Shop.jsx
│   │   │   └── Components/
│   │   │       ├── ProductCard.jsx
│   │   │       ├── ProductDetail.jsx
│   │   │       └── SearchBarStrip.jsx
│   │   ├── SIGN-IN/
│   │   │   ├── SignIn.jsx
│   │   │   └── COMPONENTS/
│   │   │       ├── SignIn-Form.jsx
│   │   │       └── WelcomeBack.jsx
│   │   └── SIGN-UP/
│   │       ├── SignUp.jsx
│   │       └── SignUp-Form.jsx
│   ├── Routes/
│   │   ├── MyRoutes.jsx            # Route definitions
│   │   ├── ProtectedRoute.jsx      # Auth guard + shared layout (Navbar/Footer/Cart)
│   │   └── ScrollUpTo.jsx          # Scroll-to-top on navigation
│   ├── App.jsx
│   ├── main.jsx                    # Entry point (BrowserRouter, ContextProvider, ToastContainer)
│   └── index.css
├── index.html
├── vite.config.js
├── vercel.json                     # SPA rewrite rules for Vercel deployment
├── eslint.config.js
└── package.json
```

---

## 🧭 Routes

| Path | Page | Protected? |
|---|---|---|
| `/` | Sign In | ❌ |
| `/sign-up` | Sign Up | ❌ |
| `/home` | Home (banner, stats, categories, top rated & new arrivals) | ✅ |
| `/shop` | Full product catalog with search/filter/sort | ✅ |
| `/shop/product/:id` | Single product detail | ✅ |
| `/about` | About SkyMart | ✅ |

Protected routes redirect to `/` (Sign In) if no user profile is active.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/clay-0101/COHORT-3.0.git

# Navigate to the project
cd COHORT-3.0/React/REACT-PROJECTS/MART

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🌐 Deployment (Vercel)

This is a single-page application, so direct navigation or refreshing on any route (e.g. `/shop`) needs to be redirected to `index.html` so React Router can take over. This is handled by `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

To deploy:
1. Push the project to GitHub
2. Import the repo in [Vercel](https://vercel.com/)
3. Set the **root directory** to `React/REACT-PROJECTS/MART` (since this project lives in a monorepo)
4. Deploy — build command `vite build`, output directory `dist`

---

## 🗃️ Data Persistence

Since this project has no backend, all user and cart data is stored in the browser via `localStorage`:

| Key | Purpose |
|---|---|
| `registeredUser` | Array of all signed-up users |
| `userProfile` | Currently logged-in user's profile |
| `cartItems` | Current cart contents |
| `savedProducts` | Product list with `added` state (whether shown as "Add" or "Added!") |

Product data itself is always fetched fresh from the DummyJSON API on load.

---

## 🎨 Brand Identity

- **Primary accent color:** `#c8f400` (lime green)
- **Background:** Black / near-black neutrals
- **Logo:** Lightning bolt (⚡ `Zap` icon from Lucide) inside a rounded lime-green square
- **Fonts:** Clash Display (local, self-hosted)

---

## 📌 Known Notes / Improvement Ideas

- Authentication is fully client-side (no real backend/database) — data will not persist across different browsers/devices.
- Passwords are stored in plain text in `localStorage` — not suitable for production without a real auth backend.
- Consider adding pagination or infinite scroll for large product lists.
- Consider migrating auth/cart persistence to a real backend + database for multi-device support.

---

## 📄 License

This project is part of a personal learning/portfolio repository. Feel free to reference the structure, but please don't republish it as your own original work.