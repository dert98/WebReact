import React from 'react';

function Background({ backgroundColor, backgroundImage }) {
  // Estilos para el fondo
  const backgroundStyle = {
    backgroundColor: backgroundColor || "#ffb6c1", // Valor por defecto si no se pasa un color
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none", // Imagen si se pasa
    backgroundSize: "cover", // La imagen cubre toda la pantalla
    backgroundPosition: "center", // Centrar la imagen
    position: "fixed", // Usamos fixed para que el fondo no se mueva al hacer scroll
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh", // Asegura que ocupe toda la altura del viewport
    zIndex: -1, // Asegura que el fondo quede detrás del contenido
  };

  return <div style={backgroundStyle}></div>;
}

export default Background;
