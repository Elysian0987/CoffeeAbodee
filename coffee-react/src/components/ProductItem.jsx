import React, { useState } from 'react';

const ProductItem = ({ imageSrc, altText, title, description, price }) => {
  const [quantity, setQuantity] = useState(0); // State to manage the quantity of the item

  const handleBuyClick = () => {
    setQuantity(1); // When "Buy" is clicked, set quantity to 1
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1); // Decrement quantity
    }
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1); // Increment quantity
  };

  return (
    <div className="product-item">
      <img className="product-image" src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <div className="toggle-buy-btn">
        {quantity === 0 ? ( // Conditionally render "Buy" button or quantity controls
          <button onClick={handleBuyClick}>Buy</button>
        ) : (
          <div>
            <button onClick={handleDecrement}>-</button>
            <span> {quantity} </span>
            <button onClick={handleIncrement}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;