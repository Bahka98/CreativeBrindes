// src/components/home/BestSellers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/mockData';
import ProductCard from '../products/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function BestSellers() {
  // temporary
  const firstFiveCategories = products.slice(6, 15);
  const bestSellers = products.filter(product => product.bestSeller);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="title">Mais Vendidos</h2>
            <p className="text-gray-600 max-w-2xl">Conheça os queridinhos dos nossos clientes — os brindes que conquistam corações!</p>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-200">
            Ver todos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="">
          <Swiper 
            slidesPerView={3}
            spaceBetween={1}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              1536: {
                slidesPerView: 4,
                spaceBetween: 1,
              },
              1030: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            className="w-full h-full"
          >
            {firstFiveCategories.map((product, index) => (
            // <ProductCard key={product.id} product={product} />
              <SwiperSlide key={index}><ProductCard product={product} /></SwiperSlide>
          ))}
          </Swiper>
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link to="/products" className="inline-block px-6 py-3 border border-gray-300 rounded-lg text-black font-medium hover:bg-gray-50 transition-colors duration-200">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BestSellers;