import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Alumnos from "./pages/Alumnos";
import Background from "./components/Background"; // Componente que maneja el fondo de la página

const App = () => {
  // Estado para manejar el modo oscuro
  const [darkMode, setDarkMode] = useState(false); // Estado para controlar el modo oscuro

  // Función para alternar entre modo oscuro y modo claro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Estilo condicional dependiendo del modo
  const appStyles = {
    backgroundColor: darkMode ? "#121212" : "", // Fondo oscuro o claro
    color: darkMode ? "#ffffff" : "#000000", // Texto blanco para el modo oscuro
    transition: "all 0.3s ease", // Transición suave entre los modos
    minHeight: "100vh",
  };

  return (
    <Router>
      {/* Componente que maneja el fondo de la página */}
      <Background 
        backgroundImage=""
        // backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGYRjTq0mBz7aFF3uvE86ss5JbA16WSHiWw&s"  
      />

      {/* Navbar pasando la función toggleDarkMode */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Contenido de la aplicación */}
      <div className="container mt-5" style={appStyles}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/alumnos" element={<Alumnos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
