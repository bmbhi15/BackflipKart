import React from 'react';
import './product.css';

const Product = ({ product, addToCart }) => {
  const id=product.id;
  const name=product.title;
  const price=product.price;
  const image=product.images[0];

  return (
    <div className="product-container">
      <img src={image} alt={name} className="product-image"/>
      <h2  className="product-name">{name}</h2>
      <p className="product-price">${price}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
