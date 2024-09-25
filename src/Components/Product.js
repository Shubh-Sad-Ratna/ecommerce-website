import React from 'react';
import './Product.css'; // Ensure the styles are applied properly

const Product = ({ title, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
