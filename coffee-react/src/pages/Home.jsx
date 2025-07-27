import React from 'react';
import '../components/Home.css';

import Info from '../components/Info';
import SignatureDrinks from '../components/SignatureDrinks';
import MerchAndBrews from '../components/MerchAndBrews';
import Video from '../components/Video';
import Story from '../components/Story';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <header>
        <img src={process.env.PUBLIC_URL + '/img/LOGO.png'} alt="Logo" />
        <h1>Coffee Abode</h1>
      </header>
      <nav>
        <a href="/">Home</a> |
        <a href="/menu">Menu</a> |
        <a href="/merch">Merchandise</a> |
        <a href="/login">Login</a>
      </nav>

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