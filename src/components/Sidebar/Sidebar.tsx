import React from "react";
import "./Sidebar.scss"; 
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="/img/Logo.png" />
        <p>Versão: 0.01</p>
      </div>
      <div className="sidebar_menu">
      <Link to="/"> <p>Dashboard</p> </Link>
        <Link to="/clientes"> <p>Clientes</p> </Link>
        <Link to="/documentos"> <p>Documentos</p> </Link>
        <Link to="/acomodacoes"> <p>Acomodações</p> </Link>
      </div>
    </div>
  );
};

export default Sidebar;
