import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import NoNavbarPage from './pages/NoNavbarPage'; // Importar la nueva página
import WhatsAppImage from './components/WhatsAppImage'; // Importar el componente WhatsAppImage
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const appClasses = darkMode ? "bg-dark text-white" : "bg-light text-dark";

  return (
    <Router>
      <div className={`min-vh-100 ${appClasses}`}>
        {/* Renderizamos el Navbar solo si la ruta no es "/no-navbar" */}
        <Routes>
          {/* Si la ruta no es '/no-navbar', mostramos el Navbar */}
          <Route path="/" element={<><Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /><Home /></>} />
          <Route path="/about" element={<><Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /><About /></>} />
          <Route path="/services" element={<><Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /><Services /></>} />
          <Route path="/login" element={<><Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /><Login /></>} />
          {/* Página sin Navbar */}
          <Route path="/no-navbar" element={<NoNavbarPage />} />
        </Routes>

        {/* El componente WhatsAppImage se renderiza en todas las páginas */}
        <WhatsAppImage
          size="90px"
          verticalPosition="bottom"
          horizontalPosition="right"
          phoneNumber="9876543210"
        />
      </div>
    </Router>
  );
};

export default App;
