import React from 'react';
import '../components/Home.css';

import Header from '../components/Header';
import Info from '../components/Info';
import SignatureDrinks from '../components/SignatureDrinks';
import MerchAndBrews from '../components/MerchAndBrews';
import Video from '../components/Video';
import Story from '../components/Story';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />

      <Info />

      <SignatureDrinks />

      <MerchAndBrews />

      <Video /> 

      <Story />
      
      <Footer/>
    </>
  );
}

export default Home;