import React from 'react';
import '../components/Home.css'; // Assuming you'll have a CSS file for styling
import Header from '../components/Header';
// --- Navigation Component ---
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
};

// --- Product Item Component ---
const ProductItem = ({ imageSrc, altText, title, description, price }) => {
  return (
    <div className="product-item">
      <img className="product-image" src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <div className="toggle-buy-btn">Buy</div>
    </div>
  );
};

// --- Coffee Products Section Component ---
const CoffeeProducts = () => {
  // You might fetch this data from an API or a local JSON file in a real application
  const coffeeItems = [
    {
      image: 'img/Espresso.jpeg',
      alt: 'Espresso',
      title: 'Premium Espresso Blend',
      description: 'A well-balanced blend of Arabica and Robusta beans with a rich flavor profile.',
      price: '₹262.50',
    },
    {
      image: 'img/Affogato.jpeg',
      alt: 'Affogato',
      title: 'Indulgent Affogato',
      description: 'A luxurious treat featuring a scoop of velvety vanilla ice cream drowned in a shot of rich espresso.',
      price: '₹899.00',
    },
    {
      image: 'img/Cappuccino.jpeg',
      alt: 'Cappuccino',
      title: 'Classic Cappuccino',
      description: 'Espresso blend without the caffeine, perfect for late-night indulgence.',
      price: '₹492.00',
    },
  ];

  return (
    <section id="coffee-products">
      <h2>Coffee Products</h2>
      <div className="product">
        {coffeeItems.map((item, index) => (
          <ProductItem
            key={index} // In a real app, use a unique ID from your data
            imageSrc={item.image}
            altText={item.alt}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

// --- Main Menu Page Component ---
const Menu = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <CoffeeProducts />
      {/* You'll add similar components for other sections like Signature Drinks, Pastries, Sandwiches */}
      {/*
      <section id="signature-drinks">
        <h2>Signature Drinks</h2>
        // ... ProductItem components for signature drinks
      </section>

      <section id="pastries-cookies-cupcakes">
        <h2>Pastries & Cookies</h2>
        // ... ProductItem components for pastries
      </section>

      <section id="sandwiches-wraps">
        <h2>Sandwiches & Wraps</h2>
        // ... ProductItem components for sandwiches
      </section>
      */}
    </div>
  );
};

export default Menu;