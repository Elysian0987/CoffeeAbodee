import React from 'react';
import '../components/Home.css';
import MenuItems from '../components/MenuItems';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- Navigation Component (reused from previous response) ---
const Navigation = () => {
  return (
    <section id="navigation">
      <nav>
        <a href="#coffee-products">Coffee Products</a> |
        <a href="#signature-drinks">Signature Drinks</a> |
        <a href="#pastries-cookies-cupcakes">Pastries & Cookies</a> |
        <a href="#sandwiches-wraps">Sandwiches & Wraps</a>
      </nav>
    </section>
  );
}

const MenuPage = () => {
  return (
    <div>
        <Header />
      <Navigation />
      <MenuItems /> 
      <Footer/>
    </div>
  );
};

export default MenuPage;