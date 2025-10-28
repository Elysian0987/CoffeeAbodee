import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductItem = ({ imageSrc, altText, title, description, price }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleBuyClick = () => {
    setQuantity(1);
    addToCart({ imageSrc, altText, title, description, price, quantity: 1 });
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (newQuantity > 0) {
        addToCart({ imageSrc, altText, title, description, price, quantity: -1 });
      }
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCart({ imageSrc, altText, title, description, price, quantity: 1 });
  };

  return (
    <div className="product-item">
      <img className="product-image" src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="product-price">{price}</p>
      <div className="toggle-buy-btn">
        {quantity === 0 ? (
          <button className="buy-button" onClick={handleBuyClick}>Add to Cart</button>
        ) : (
          <div className="quantity-controls">
            <button className="qty-btn" onClick={handleDecrement}>−</button>
            <span className="quantity-display">{quantity}</span>
            <button className="qty-btn" onClick={handleIncrement}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;