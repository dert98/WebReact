import React from 'react';
import './FlorianaText.css'; // Importamos el archivo de estilo

const FlorianaText = ({ texto }) => {
  return (
    <div className="floriana-container">
      <h1 className="floriana-text">{texto}</h1>
    </div>
  );
};

export default FlorianaText;
