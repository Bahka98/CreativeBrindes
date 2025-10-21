// src/components/home/FeaturedCarousel.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products, featuredProducts } from '../../data/mockData';

function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const featuredProducts = products.filter(product => product.featured);
  const [isMobile, setIsMobile] = useState(false)
  const featured = featuredProducts;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featured.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? featured.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    handleResize(); // checa na primeira carga
    window.addEventListener('resize', handleResize); // escuta mudanças

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-100">
      <div className="flex transition-transform duration-700 ease-out" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {featured.map((product, index) => (
          <div key={index} className="min-w-full h-[600px] relative">
            <img 
              src={isMobile ? product.image[1] : product.image[0]} 
              alt={product.titulo}
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white max-w-6xl mx-auto">
                <h3 className="text-4xl font-bold mb-4 tracking-tight">{product.name}</h3>
                {/* <p className="text-1xl font-medium mb-6">
                  {product.description.length > 100 
                    ? `${product.description.slice(0, 100)}...` 
                    : product.description}
                </p> */}
                {/* <Link 
                  to={`/products?category=${product.link}`}
                  className="inline-block px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Ver produto
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default FeaturedCarousel;