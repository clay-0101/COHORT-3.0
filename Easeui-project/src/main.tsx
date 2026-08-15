import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/Store.tsx";
import { setTheme } from "./features/ThemeSlice.tsx";

const savedTheme = localStorage.getItem("theme") || "light";
store.dispatch(setTheme(savedTheme));

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
