// src/context/ProductContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { products as initialProducts } from '../data/mockData';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <ProductContext.Provider 
      value={{ 
        products, 
        cart, 
        addToCart, 
        removeFromCart 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}