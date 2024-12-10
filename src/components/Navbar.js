import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const location = useLocation();

  // Arreglo de elementos del menú
  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/about", label: "Acerca de" },
    { path: "/contact", label: "Contacto" },
    { path: "/productos", label: "Productos" },
    { path: "/alumnos", label: "Alumnos" },
  ];

  // Definir colores dinámicos dependiendo del modo
  const navbarBackgroundColor = darkMode ? "#343a40" : "#ffb6c1"; // Rosa más oscuro en modo oscuro
  const navbarTextColor = darkMode ? "#ffffff" : "#000000"; // Texto blanco en modo oscuro, negro en modo claro
  const navbarLinkColor = darkMode ? "#ffffff" : "#d500f9"; // Color de los enlaces (blanco en modo oscuro, rosa fucsia en modo claro)

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top`}
      style={{
        backgroundColor: navbarBackgroundColor, // Fondo dinámico
        color: navbarTextColor, // Color de texto dinámico
      }}
    >
      <div className="container-fluid">
        {/* Logo a la izquierda */}
        <Link className="navbar-brand" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
            <circle cx="50" cy="50" r="40" fill="pink" />
            <circle cx="50" cy="50" r="30" fill="red" />
            <circle cx="50" cy="50" r="20" fill="white" />
            <path d="M50 10 Q60 25 50 40 Q40 25 50 10 Z" fill="green" />
            <path d="M50 40 Q60 55 50 70 Q40 55 50 40 Z" fill="green" />
            <path d="M50 70 Q60 85 50 100 Q40 85 50 70 Z" fill="green" />
          </svg>
        </Link>


        {/* Botón de menú para dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                  style={{
                    color: navbarLinkColor, // Enlaces de colores dinámicos
                    padding: "10px 15px", // Relleno para aumentar el espacio alrededor del enlace
                    margin: "0 8px", // Espaciado entre los enlaces
                    transition: "transform 0.3s ease, border-bottom 0.3s ease", // Transición para el zoom y el borde
                    position: "relative", // Necesario para el borde
                    display: "inline-block", // Asegura que el borde se ajuste correctamente al enlace
                    borderRadius: "5px", // Esquinas redondeadas para el enlace
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)"; // Aumentar el tamaño del enlace al pasar el mouse
                    e.target.style.borderBottom = `2px solid ${navbarLinkColor}`; // Añadir el borde en hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)"; // Restaurar el tamaño original
                    e.target.style.borderBottom = "none"; // Quitar el borde
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón para cambiar el modo */}
        <button
          className={`btn ${darkMode ? "btn-light" : "btn-dark"} rounded-pill shadow-sm`}
          onClick={toggleDarkMode}
          style={{
            padding: "10px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
        >
          <i className={`fa ${darkMode ? "fa-sun" : "fa-moon"} me-2`}></i>
          {darkMode ? "Modo Claro" : "Modo Oscuro"} {/* Texto dinámico */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
