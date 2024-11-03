// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logobat.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">ZOTZ BARBER</span>
      </div>
      <nav className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/barberos">Barberos</Link>
        <Link to="/testimonios">Testimonios</Link>
        <div className="dropdown">
          <span>Contacto</span>
          <div className="dropdown-content">
            <Link to="/sucursales">Sucursales</Link>
            <Link to="/contacto">Información</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
