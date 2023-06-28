import React from 'react';
import CartItem from './CartItem';
import './shoppingCart.css';

const ShoppingCart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="shopping-cart-container">
      <ul className="cart-item-list"> {cart.map(product => (
        <CartItem key={product.id} product={product} removeFromCart={removeFromCart} />
      ))}</ul>
     
      <p className="cart-total-price">Total Price: ${totalPrice}</p>
    </div>
  );
};

export default ShoppingCart;
