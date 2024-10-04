import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Footer from "../components/Footer/Footer";
import Clientes from "../pages/Clientes/Clientes";

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
        <Footer />
    </Router>
  );
}