// src/components/products/ProductCard.jsx
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const normalizedProduct = product.item ? product.item : product;
  return (
    <div className="group w-[300px]	h-full">
      <Link to={`/products/${normalizedProduct.id}`} className="block relative overflow-hidden rounded-xl bg-gray-100">
        <div className="aspect-[4/5] relative">
          <img
            src={normalizedProduct.image[0]}
            alt={normalizedProduct.titulo}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
          <button
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-lg 
                     font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                     transition-all duration-300 hover:bg-white shadow-lg"
          >
            Ver mais
          </button>
        </div>
      </Link>
      <div className="mt-4 space-y-2">
        <h3 className="font-medium text-gray-800 group-hover:text-black transition-colors duration-200">
          <Link to={`/products/${normalizedProduct.id}`}>{normalizedProduct.titulo}</Link>
        </h3>
        {/* <p className="text-gray-900 font-semibold">${product.price.toFixed(2)}</p> */}
        {/* <p className="text-gray-900 font-semibold">$10</p> */}
      </div>
    </div>
  );
}

export default ProductCard;