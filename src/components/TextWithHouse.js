import React from 'react';

const TextWithHouse = () => {
  return (
    <div className="container col-md-8">
      <div className="row align-items-center p-5 bt2 mb-5">
      <div className="col-md-6">
          <p className="mt-3">
            Esta es una casa acogedora con un hermoso jardín. El diseño es simple y cómodo, ideal para una vida tranquila en el campo.
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src="https://s1.elespanol.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-naturaleza_y_planeta_tierra_499960581_154305912_1706x960.jpg"
            alt="House" 
            className="img-fluid rounded s1"
          />
        </div>
      </div>
    </div>
  );
};

export default TextWithHouse;
