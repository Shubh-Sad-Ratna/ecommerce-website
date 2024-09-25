import React from 'react';
import './Product.css'; // Optional for styling

const Product = ({ title, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
