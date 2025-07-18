import React from 'react';
import './Home.css'; // Or separate MerchAndBrews.css if needed

function MerchAndBrews() {
  return (
    <section className="MerchBrews">
      <div className="merch">
        <h2>Coffee Merchandise</h2>
        <p>Explore our collection of coffee-related merchandise...</p>
        <ul>
          <li>Coffee Mugs</li>
          <li>T-shirts with Coffee Quotes</li>
          <li>Coffee-themed Artwork</li>
          <li>Brewing Accessories</li>
        </ul>
        <a href="/merch" className="buy-btn">Shop Merchandise</a>
      </div>
      
      <div className="Brews">
        <h2>Explore Different Brews</h2>
        <p>Discover a variety of coffee brews...</p>
        <ul>
          <li>Espresso Blends</li>
          <li>Single-Origin Brews</li>
          <li>Decaf Options</li>
          <li>Seasonal Specials</li>
        </ul>
        <a href="/menu" className="buy-btn">Shop Brews</a>
      </div>
    </section>
  );
}

export default MerchAndBrews;
