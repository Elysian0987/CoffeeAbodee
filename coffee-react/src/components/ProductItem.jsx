import React from 'react';

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

export default ProductItem;