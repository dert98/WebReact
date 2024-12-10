import React from 'react';

const HouseWithText = () => {
  return (
    <div className="container col-md-8">
      <div className="row align-items-center p-5 bb2 mb-5">
        <div className="col-md-6">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhAl7TBg0RxqYfygc9TEApCD6xaoevzNCTw&s" 
            alt="House" 
            className="img-fluid rounded s1"
          />
        </div>
        <div className="col-md-6">
          <p className="mt-3">
            Esta es una casa acogedora con un hermoso jardín. El diseño es simple y cómodo, ideal para una vida tranquila en el campo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseWithText;
