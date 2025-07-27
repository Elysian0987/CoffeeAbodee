import React from 'react';
import '../components/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MerchItems from '../components/MerchItems'; // Import your new MerchItems component
import { Link } from 'react-router-dom'; // Import Link for navigation between pages

// Updated Navigation Component for MerchPage
const Navigation = () => {
  return (
    <section id="navigation">
      <nav>
        <Link to="/menu">Coffee Menu</Link> | {/* Link to your food/drink menu */}
        <a href="#coffee-mugs">Coffee Mugs</a> | {/* Matches ID in MerchItems.jsx */}
        <a href="#t-shirts-with-coffee-quotes">T-shirts with Coffee Quotes</a> | {/* Placeholder for future sections */}
        <a href="#coffee-themed-artwork">Coffee-themed Artwork</a> | {/* Placeholder for future sections */}
        <a href="#brewing-accessories">Brewing Accessories</a> {/* Matches ID in MerchItems.jsx */}
      </nav>
    </section>
  );
};

const MerchPage = () => {
  return (
    <div>
      <Header />
      <Navigation /> {/* Use the updated navigation specific for MerchPage */}
      <MerchItems />
      <Footer />
    </div>
  );
};

export default MerchPage;