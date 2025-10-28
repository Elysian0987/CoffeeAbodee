import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleBuyClick = () => {
    setQuantity(1);
    addToCart({
      imageSrc: product.image,
      altText: product.name,
      title: product.name,
      description: product.description || '',
      price: product.price,
      quantity: 1
    });
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (newQuantity > 0) {
        addToCart({
          imageSrc: product.image,
          altText: product.name,
          title: product.name,
          description: product.description || '',
          price: product.price,
          quantity: -1
        });
      }
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCart({
      imageSrc: product.image,
      altText: product.name,
      title: product.name,
      description: product.description || '',
      price: product.price,
      quantity: 1
    });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
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
}

export default ProductCard;
