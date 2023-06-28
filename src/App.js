import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import './app.css'; 

const App = () => {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => setProducts(json))
      .catch(error => console.error(error));
  },[]);


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };
  
  if (products === null) {
    console.log("hello");
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="container">
      <header className="header">
        <h1 className="heading">BackflipKart</h1>
      </header>
      <section className="content">
        <h2 className="section-heading">Product List</h2>
        <ProductList products={products.products} addToCart={addToCart} />
        <h2 className="section-heading">Shopping Cart</h2>
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      </section>
    </div>
  );
};

export default App;
