import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import Header from "./components/Header/Header.tsx";
import { BrowserRouter } from "react-router-dom";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
