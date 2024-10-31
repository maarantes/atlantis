import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Footer from "../components/Footer/Footer";
import Clientes from "../pages/Clientes/Clientes";
import CadastroCliente from "../pages/CadastroCliente/CadastroCliente";
import Documentos from "../pages/Documentos/Documentos";
import EditarDocumento from "../pages/EditarDocumentos/EditarDocumentos";
import Acomodacoes from "../pages/Acomodacoes/Acomodacoes";

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/cadastro" element={<CadastroCliente />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/documentos/editar" element={<EditarDocumento />} />
          <Route path="/acomodacoes" element={<Acomodacoes />} />
        </Routes>
        <Footer />
    </Router>
  );
}