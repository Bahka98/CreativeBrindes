// src/components/products/ProductFilter.jsx
import React from 'react';
import { categories, products } from '../../data/mockData';
import { useEffect } from 'react';
import Fuse from 'fuse.js';

function ProductFilter({ selectedCategory, onCategoryChange, onPriceRangeChange }) {
  const fuse = new Fuse(products, {
    keys: ['titulo', 'categorias'],
    threshold: 0.2
  })
  useEffect(() => {
    //console.log(selectedCategory);
  })

  return (
    <div id='filter' className="mt-20 md:space-y-8 md:bg-white md:p-6 mdrounded-xl md:shadow-sm md:border">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categorias</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('')}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${!selectedCategory ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            Todos os produtos
          </button>
        </div>
        <div className="max-h-[400px] overflow-y-auto mt-4">
        {categories[0].categoria.map((category, index) => (
            <button
              key={index}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${selectedCategory === category ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* <div className="border-t pt-8">
        <h3 className="text-lg font-semibold mb-4">Range de preços</h3>
        <div className="space-y-2">
          <button
            onClick={() => onPriceRangeChange('')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Todos os preços
          </button>
          <button
            onClick={() => onPriceRangeChange('0-50')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            menor que $50
          </button>
          <button
            onClick={() => onPriceRangeChange('50-100')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            $50 - $100
          </button>
          <button
            onClick={() => onPriceRangeChange('100-200')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            $100 - $200
          </button>
          <button
            onClick={() => onPriceRangeChange('200+')}
            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            maior que $200
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default ProductFilter;