// src/pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductFilter from '../components/products/ProductFilter';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/mockData';
import Brandcrumbs from '../components/ui/Brandcrumbs';
import Fuse from 'fuse.js';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

function Products() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || '';
  const [closeFilterMobile, setCloseFilterMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [VisibleCount, setVisibleCount] = useState(20);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('');

  const fuse = new Fuse(products, {
    keys: ['categorias'],
    threshold: 0.2
  })

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  const filteredProducts = fuse.search(selectedCategory)
  console.log(filteredProducts)
  console.log(products.length)
  console.log(selectedCategory)
  return (
    <>
      {/* <div className='container mx-auto px-6 mt-10'>
        <Brandcrumbs product={null} page={'products'}></Brandcrumbs>
      </div> */}
      <div className="container mx-auto px-6 pb-12 pt-16">
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h1 className="text-2xl font-bold">Seus produtos</h1>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="px-4 py-2 border rounded-lg flex items-center space-x-2 hover:bg-gray-50 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>Filters</span>
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`${isFilterOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'} fixed inset-0 bg-black transition-opacity duration-300 md:hidden z-30`}
          onClick={() => setIsFilterOpen(false)}
        ></div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className={`${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 w-full md:w-64 flex-shrink-0 bg-white md:bg-transparent p-6 md:p-0 transition-transform duration-300 ease-in-out z-40 md:z-0`}>
            <div className="relative md:sticky top-[100px]">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="absolute right-0 top-0 p-2 rounded-full hover:bg-gray-100 md:hidden transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ProductFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onPriceRangeChange={setPriceRange}
              />
            </div>
          </aside>
          <main className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Produtos</h1>
              <div className="text-gray-600">{filteredProducts == 0 ? products.length : filteredProducts.length} brindes</div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-14 gap-y-10 justify-items-center pl-4">

              {filteredProducts.length === 0 && (
                products.slice(0, VisibleCount).map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))
              )}

              {
                selectedCategory && (
                  filteredProducts.slice(0, VisibleCount).map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))
                )
              }
            </div>
            <div className='flex justify-center mt-10'>
              <button onClick={handleLoadMore} className="w-full md:w-auto px-8 py-3 bg-black text-white rounded btnHover">
                Carregar mais
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Products;