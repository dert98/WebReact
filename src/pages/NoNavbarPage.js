import React from 'react';

const NoNavbarPage = ({ darkMode }) => {
  const homeStyles = {
    backgroundColor: darkMode ? "#121212" : "#ffffff", // Fondo oscuro o claro
    color: darkMode ? "#ffffff" : "#000000", // Texto blanco o negro según el modo
    padding: "20px", // Añadir algo de relleno para que se vea mejor
  };

  return (
    <div style={homeStyles}>
      <div className="container pt-5">
        <div className="row">
          <div className="container">
            <div className="h1 text-center">
              Hola
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card text-center s1">
              <div className="card-body">
                <h2 style={{ fontFamily: "'Dancing Script', cursive" }}>"Rosas" </h2>
                <p className="card-text">
                  Sencillas pero bellas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center s1">
              <div className="card-body">
                <h2 style={{ fontFamily: "'Dancing Script', cursive" }}>"Jasmines" </h2>
                <p className="card-text">
                  Dulces y penetrantes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center s1">
              <div className="card-body">
                <h2 style={{ fontFamily: "'Dancing Script', cursive" }}>"Claveles" </h2>
                <p className="card-text">
                  Optimiza tu trabajo con esta funcionalidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoNavbarPage;
