import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button 
      className="btn btn-outline-light" 
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? "🌙" : "☀️"} {/* El ícono cambia dependiendo del estado */}
    </button>
  );
};

export default DarkModeToggle;
