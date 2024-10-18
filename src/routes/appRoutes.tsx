import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Footer from "../components/Footer/Footer";
import Clientes from "../pages/Clientes/Clientes";
import CadastroCliente from "../pages/CadastroCliente/CadastroCliente";

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/cadastro" element={<CadastroCliente />} />
        </Routes>
        <Footer />
    </Router>
  );
}