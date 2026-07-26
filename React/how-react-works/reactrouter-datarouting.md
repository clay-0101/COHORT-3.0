# React Router Data Routing

## Introduction

Modern React applications usually behave like **Single Page Applications (SPA)**.

Instead of loading a new HTML page every time a user navigates to a different URL, React **updates the UI dynamically**.

To manage navigation and URLs in React applications, we use a library called **React Router**.

React Router allows developers to:

- Navigate between pages without reloading the browser
- Connect URLs with specific React components
- Fetch data before rendering a page
- Handle loading and error states

One of the most powerful features of modern React Router is **Data Routing**.

This documentation explains **Data Routing from scratch in simple language**, including **how to install and set it up**.

---

# 1. Installing React Router

Before using Data Routing, we need to install **react-router-dom**.

### Step 1 — Create a React Project

If you don’t already have a React project, create one using Vite:

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

---

### Step 2 — Install React Router

Install React Router in your project:

```bash
npm install react-router
```

This package provides routing tools such as:

- createBrowserRouter
- RouterProvider
- Link
- NavLink
- Outlet
- useLoaderData

---

# 2. Basic Project Structure

A simple project structure for routing:

```
src
 ├── main.jsx
 ├── App.jsx
 ├── router.jsx
 ├── layouts
 │     └── MainLayout.jsx
 ├── pages
 │     ├── Home.jsx
 │     ├── About.jsx
 │     └── Movies.jsx
 └── components
       └── Navbar.jsx
```

Explanation:

- **router.jsx** → defines all routes
- **layouts/** → shared UI layouts
- **pages/** → page components
- **components/** → reusable components like Navbar

---

# 3. Creating the Router

The router controls navigation in the application.

We create the router using **createBrowserRouter**.

### router.jsx

```jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]);
```

Here **MainLayout** wraps all the pages and provides shared UI.

---

# 4. What is `createBrowserRouter`?

`createBrowserRouter` creates a router that works with the **browser URL system**.

It handles:

- URL changes
- Route matching
- Navigation
- Data loading

Example:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);
```

Meaning:

When the user visits `/`, the **Home component** will render.

---

# 5. Connecting the Router to React

After creating the router, we must connect it to our React application using **RouterProvider**.

### main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

---

# 6. What is `RouterProvider`?

`RouterProvider` makes the router available to the entire application.

Without it:

- Navigation will not work
- Routes will not render

Flow:

```
React App
   ↓
RouterProvider
   ↓
Router controls navigation
```

---

# 7. What is a Route?

A **route** connects a URL to a React component.

Example:

```jsx
{
  path: "/movies",
  element: <Movies />
}
```

Meaning:

```
URL: /movies
Component: Movies
```

---

# 8. What is `path`?

`path` defines the **URL address**.

Example:

```jsx
path: "/profile"
```

The page will be available at:

```
website.com/profile
```

---

# 9. What is `element`?

`element` specifies which **React component should render**.

Example:

```jsx
element: <Home />
```

This means the **Home component** will display when the route is visited.

---

# 10. What is a Layout?

A **Layout** is a component that provides **shared UI for multiple pages**.

For example, many pages share:

- Navbar
- Footer
- Sidebar
- Header

Instead of repeating these components on every page, we place them inside a **layout component**.

Structure:

```
Layout
 ├── Navbar
 ├── Page Content
 └── Footer
```

The **page content changes**, but the layout remains the same.

---

# 11. Creating a Layout Component

Example layout:

### MainLayout.jsx

```jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
```

### What `Outlet` Does

`Outlet` is a placeholder where **child routes render**.

Example:

```
MainLayout
   ↓
Navbar
   ↓
Outlet
   ↓
Home Page
```

If the user navigates to `/about`, the outlet will render the **About page** instead.

---

# 12. What is `index: true`?

`index: true` defines the **default child route inside a layout**.

It means:

> "Render this component when the parent route is visited."
> 

Example router:

```jsx
{
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "about",
      element: <About />
	    }
  ]
}
```

How it works:

```
User visits "/"
↓
MainLayout renders
↓
Index route loads
↓
Home component appears inside Outlet
```

So the final UI becomes:

```
Navbar
Home Page
```

---

---

# 13. What is a Loader?

A **loader** is a function that fetches data before rendering the page.

Example:

```jsx
{
  path: "/movies",
  element: <Movies />,
  loader: async () => {
    const res = await fetch("/api/movies");
    return res.json();
  }
}
```

Flow:

```
User visits /movies
↓
Loader runs
↓
Data is fetched
↓
Movies component renders
```

---

# 14. What is `useLoaderData`?

`useLoaderData` is a hook used to access data returned by the loader.

Example:

```jsx
import { useLoaderData } from "react-router-dom";

function Movies() {
  const movies = useLoaderData();

  return (
    <div>
      {movies.map(movie => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}
```

Flow:

```
Loader fetches data
↓
Router stores the data
↓
Component reads data using useLoaderData
```

---

# 15. What is `Link`?

`Link` is used to navigate between pages **without refreshing the browser**.

Example:

```jsx
import { Link } from "react-router-dom";

<Link to="/movies">Movies</Link>
```

Instead of:

```
<a href="/movies">
```

React Router uses **Link** to maintain SPA behavior.

---

# 16. What is `NavLink`?

`NavLink` works like `Link`, but it knows when a link is **active**.

Example:

```jsx
<NavLink to="/movies">Movies</NavLink>
```

If the user is currently on `/movies`, the link becomes **active automatically**.

This is useful for navigation menus.

---

# 17. What is `Outlet`?

`Outlet` is used to display **child routes inside a parent layout**.

Example routes:

```
/dashboard
/dashboard/profile
/dashboard/settings
```

Router:

```jsx
{
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    { path: "profile", element: <Profile /> },
    { path: "settings", element: <Settings /> }
  ]
}
```

Layout component:

```jsx
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
```

`Outlet` displays whichever child route is active.

---

# 18. What is an Action?

An **action** handles form submissions.

Example:

```jsx
{
  path: "/add-movie",
  action: async ({ request }) => {
    const formData = await request.formData();

    await fetch("/api/movies", {
      method: "POST",
      body: formData
    });
  }
}
```

Actions allow routes to handle **POST, PUT, DELETE operations**.

---

# 19. What is `errorElement`?

`errorElement` displays an error UI when something fails.

Example:

```jsx
{
  path: "/movies",
  element: <Movies />,
  loader: moviesLoader,
  errorElement: <ErrorPage />
}
```

If the loader fails, React Router automatically shows the **ErrorPage**.

---

# 20. How Data Routing Works (Step by Step)

Example: user opens `/movies`.

Process:

```
1. URL changes
2. Router matches the route
3. Loader runs
4. Data is fetched
5. Component renders
```

Visual flow:

```
User Click
   ↓
Route Match
   ↓
Loader Fetch Data
   ↓
Component Render
```

---

# 21. Advantages of Data Routing

Data Routing improves applications by:

- Loading data before rendering UI
- Separating UI logic and data logic
- Built-in error handling
- Cleaner architecture
- Better performance

---

# 23. Simple Example

Router:

```jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "movies",
        element: <Movies />
      }
    ]
  }
]);
```

App entry:

```jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

---

## Key Differences

| Feature | Declarative Routing | Data Routing |
| --- | --- | --- |
| Focus | UI only | UI + Data + Logic |
| Data Fetching | Manual (useEffect) | Built-in (loader) |
| Form Handling | Custom | Built-in (action) |
| Complexity | Simple | Advanced |
| Best For | Small apps | Scalable apps |

# Conclusion

React Router Data Routing allows developers to build **clean, scalable, and maintainable React applications**.

Important concepts to remember:

- `createBrowserRouter` → creates the router
- `RouterProvider` → connects router with React
- `Route` → maps URL to component
- `Layout` → provides shared UI for multiple pages
- `index: true` → defines the default child route
- `loader` → fetches data before rendering
- `useLoaderData` → accesses loader data
- `Link` / `NavLink` → navigation
- `Outlet` → nested routes
- `action` → form handling
- `errorElement` → error UI

Using these features together helps developers build **modern React applications with powerful routing and data management**.