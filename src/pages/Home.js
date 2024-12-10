import React from "react";
import FlorianaText from "../components/FlorianaText";
import WhatsAppImage from "../components/WhatsAppImage";

const Home = () => {
  return (
    <div className="">
      <div className="row">
        <div className="col-12">
          <FlorianaText texto="Bienvenido al mundo Floriano" />
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
        <WhatsAppImage />
      </div>
    </div>
  );
};

export default Home;
