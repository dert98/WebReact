import React from 'react';

function WhatsAppImage() {
  return (
    <a 
      href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20tu%20producto" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img 
        className="whatsapp whatsapp-image" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" 
        alt="WhatsApp Logo" 
      />
    </a>
  );
}

export default WhatsAppImage;