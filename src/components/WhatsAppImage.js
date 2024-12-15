import React from 'react';

function WhatsAppImage({
  size = '50px', 
  verticalPosition = 'bottom', 
  horizontalPosition = 'center', 
  phoneNumber = '1234567890'
}) {
  // Establecer la posición vertical
  const verticalPositionValue = verticalPosition === 'top' 
    ? 'top' 
    : verticalPosition === 'center' 
    ? '50%' 
    : 'bottom'; 

  // Establecer la posición horizontal
  const horizontalPositionValue = horizontalPosition === 'left' 
    ? 'left' 
    : horizontalPosition === 'right' 
    ? 'right' 
    : '50%'; // Para centrar, usamos 50%

  // Establecer el estilo para posicionarlo
  const positionStyle = {
    position: 'fixed',
    [verticalPositionValue]: verticalPosition === 'center' ? '50%' : '20px', // Ajuste de 20px si no es 'center'
    [horizontalPositionValue]: horizontalPosition === '50%' ? '50%' : '20px', // Ajuste de 20px si no está centrado
    transform: verticalPosition === 'center' && horizontalPosition === 'center'
      ? 'translate(-50%, -50%)' // Centrado tanto vertical como horizontal
      : '', 
    zIndex: 9999, // Asegurarse de que el icono esté encima de otros elementos
  };

  // Establecer el tamaño de la imagen
  const imageStyle = {
    width: size,
    height: size,
  };

  // Crear el enlace de WhatsApp con el número de teléfono
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola,%20me%20interesa%20tu%20producto`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      style={positionStyle} // Aplicar la posición
    >
      <img 
        className="whatsapp whatsapp-image" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" 
        alt="WhatsApp Logo"
        style={imageStyle} // Aplicar el tamaño
      />
    </a>
  );
}

export default WhatsAppImage;
