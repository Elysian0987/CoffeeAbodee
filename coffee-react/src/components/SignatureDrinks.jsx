import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Home.css';

function SignatureDrinks() {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const drinks = [
    {
      id: 1,
      imageSrc: `${process.env.PUBLIC_URL}/img/coffee1.png`,
      title: 'Double Choco Chip Frappaccino',
      description: 'Rich mocha-flavored sauce meets up with chocolaty chips...',
      price: '₹399.00'
    },
    {
      id: 2,
      imageSrc: `${process.env.PUBLIC_URL}/img/coffee2.png`,
      title: 'Vienna Creamy Latte',
      description: 'Silky smooth delicious beverage combines...',
      price: '₹472.50'
    },
    {
      id: 3,
      imageSrc: `${process.env.PUBLIC_URL}/img/coffee3.2.1.png`,
      title: 'Cortado',
      description: 'A perfect espresso shot topped with steamed milk.',
      price: '₹278.25'
    }
  ];

  const handleBuyClick = (drink) => {
    setQuantities({ ...quantities, [drink.id]: 1 });
    addToCart({
      imageSrc: drink.imageSrc,
      altText: drink.title,
      title: drink.title,
      description: drink.description,
      price: drink.price,
      quantity: 1
    });
  };

  const handleDecrement = (drink) => {
    const currentQty = quantities[drink.id] || 0;
    if (currentQty > 0) {
      const newQuantity = currentQty - 1;
      setQuantities({ ...quantities, [drink.id]: newQuantity });
      if (newQuantity > 0) {
        addToCart({
          imageSrc: drink.imageSrc,
          altText: drink.title,
          title: drink.title,
          description: drink.description,
          price: drink.price,
          quantity: -1
        });
      }
    }
  };

  const handleIncrement = (drink) => {
    const currentQty = quantities[drink.id] || 0;
    const newQuantity = currentQty + 1;
    setQuantities({ ...quantities, [drink.id]: newQuantity });
    addToCart({
      imageSrc: drink.imageSrc,
      altText: drink.title,
      title: drink.title,
      description: drink.description,
      price: drink.price,
      quantity: 1
    });
  };

  return (
    <section className="drinks">
      <h2>Signature Drinks</h2>
      <div className="product">
        {drinks.map((drink) => (
          <div key={drink.id} className="product-item">
            <img
              className="product-image"
              src={drink.imageSrc}
              alt={drink.title}
              width="500"
              height="600"
            />
            <h3>{drink.title}</h3>
            <p>{drink.description}</p>
            <p className="product-price">{drink.price}</p>
            <div className="toggle-buy-btn">
              {(!quantities[drink.id] || quantities[drink.id] === 0) ? (
                <button className="buy-button" onClick={() => handleBuyClick(drink)}>
                  Add to Cart
                </button>
              ) : (
                <div className="quantity-controls">
                  <button className="qty-btn" onClick={() => handleDecrement(drink)}>−</button>
                  <span className="quantity-display">{quantities[drink.id]}</span>
                  <button className="qty-btn" onClick={() => handleIncrement(drink)}>+</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SignatureDrinks;
