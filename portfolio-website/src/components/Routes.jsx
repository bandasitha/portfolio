import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

export default function NavLinks() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
