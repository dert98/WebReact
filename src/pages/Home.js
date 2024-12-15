import React from 'react';
import TextWithHouse from '../components/TextWithHouse';  // Ruta relativa
import HouseWithText from '../components/HouseWithText';  // Ruta relativa
import FlorianaText from '../components/FlorianaText';

const Home = () => {
  return (
    <div className='text-center'>
      <div className="col-12">
        <FlorianaText texto="Bienvenido al mundo Floriano" />
      </div>
      <TextWithHouse />
      <HouseWithText />
    </div>
  );
};


export default Home;
