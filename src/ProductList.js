import React from 'react';
import Product from './Product';
import './productList.css';
const ProductList = ({ products, addToCart }) => {
  console.log("hheheh");
  console.log(products);
  return (
    <div className="product-list-container">
      {products.map(product => (
        <Product product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
