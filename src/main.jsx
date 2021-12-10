import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/main.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const BASE_URL = import.meta.env.BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
