import "@fontsource/montserrat";
import { About } from "@pages/About";
import { Home } from "@pages/Home";
import { Logement } from "@pages/Logement";
import { Notfound } from "@pages/Notfound";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename={import.meta.env.VITE_PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
