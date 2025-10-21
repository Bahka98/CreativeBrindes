// src/components/home/CategorySection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { categories, categoriasPrincipais } from '../../data/mockData';

function CategorySection() {
  const firstFiveCategories = categories.slice(0, 5);
  const categoria = categoriasPrincipais

  return (
    <section className="py-16" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container mx-auto px-6">
        <h2 className="title">Categorias populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {categoria.map((category, index) => (
            <Link 
              key={index}
              to={`/products?category=${category.titulo}`}
              className="relative overflow-hidden rounded-xl group"
            >
              <div className="aspect-[4/5] relative">
                {
                  category.image ? (
                    <img 
                      src={category.image[0]}
                      alt={category.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200"></div>
                  )
                }
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-[1.2rem] font-bold mb-2">{category.titulo}</h3>
                    <span className="text-white/90 text-sm font-medium inline-flex items-center">
                      Ver mais
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;