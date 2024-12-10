// src/pages/About.js
import React from "react";
import HouseWithText from "../components/HouseWithText"
import TextWithHouse from "../components/TextWithHouse"


const About = () => {
  return (
    <div className="text-center">
      <h1 className="t4 pt-5 bb4">
        Caracteristicas Principales de las Flores
      </h1>
      <HouseWithText />
      <h2 className="text-center p-3 t4 mb-5">Los sueño dejan de ser sueños aveces</h2>
      <TextWithHouse />
    </div>
  );
};

export default About;

