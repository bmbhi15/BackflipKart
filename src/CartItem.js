import React from 'react';
import './cartItem.css';

const CartItem = ({ product, removeFromCart }) => {
  const id=product.id;
  const name=product.title;
  const price=product.price;
  const image=product.images[0];

  return (
    <div  className="cart-item-container">
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
      <h2 className="cart-item-name">{name}</h2>
      <p className="cart-item-price">${price}</p>
      </div>
      <button className="remove-button" onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
};

export default CartItem;
