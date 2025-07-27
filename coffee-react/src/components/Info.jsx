import React from 'react';
import './Home.css'; // Or create Info.css if you modularize later

function Info() {
  return (
    <>
      <div className="info">
        <h2>Welcome to Coffee Abode</h2>
        <p>Discover the finest coffee beans and blends curated just for you. At Coffee Abode, we take pride in sourcing high-quality coffee from around the world to bring you a delightful and authentic coffee experience.</p>
        <p>Explore our selection of premium coffee beans, indulge in the richness of our ground coffee, and find the perfect accessories to elevate your brewing ritual. Join us in a journey of flavor, aroma, and satisfaction.</p>
      </div>

      <section>
        <h2>Coffee Products Information</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Classic Blend</td>
              <td>A well-balanced blend of Arabica and Robusta beans...</td>
              <td>₹1,199.00</td>
            </tr>
            <tr>
              <td>Single Origin Ethiopia</td>
              <td>100% Ethiopian Arabica beans...</td>
              <td>₹1,499.00</td>
            </tr>
            <tr>
              <td>Decaf Espresso</td>
              <td>Espresso blend without the caffeine...</td>
              <td>₹999.00</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Info;
