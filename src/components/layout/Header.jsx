// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import infosEmpresa from '../../utils/infosEmpresa';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoSearchSharp } from "react-icons/io5";
import { products } from '@/data/mockData';
import { useEffect } from 'react';
import Fuse from 'fuse.js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const primeirosCincos = products.slice(0, 10);

  const fuse = new Fuse(products, {
    keys: ['titulo'],
    threshold: 0.2
  })

  const searchingProducts = fuse.search(inputValue.toLowerCase());

  return (
    <header className="fixed bg-white w-full z-50">
      <nav className="container mx-auto px-6 py-3 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-3xl font-extrabold text-gray-900 tracking-tighter">
              {infosEmpresa.name}
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 texthover transition-colors duration-200 font-normal">Inicio</Link>
              <Link to="/products" className="text-gray-700 texthover transition-colors duration-200 font-normal">Produtos</Link>
              <Link to="/about" className="text-gray-700 texthover transition-colors duration-200 font-normal">Sobre</Link>
              <Link to="/contact" className="text-gray-700 texthover transition-colors duration-200 font-normal">Contato</Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex flex w-full max-w-sm items-center space-x-2">
              <Input onChange={(e) => setInputValue(e.target.value)} onFocus={() => setIsSearchOpen(true)} onBlur={() => setTimeout(() => setIsSearchOpen(false), 100)} className="w-[18rem]" type="text" placeholder="Procurar um produto" />
              <Button type="submit">
                <IoSearchSharp />
              </Button>

              {
                isSearchOpen && (
                  searchingProducts.length > 0 ? (
                    inputValue.length > 0 ? (
                      <div className='fixed w-[20rem] max-h-[30rem] overflow-auto top-[4rem] bg-black wrapperSearch px-4 py-4 rounded shadow-lg'>
                        {searchingProducts.map((product, index) => (
                          <Link key={product.item.id} to={`/products/${product.item.id}`}>
                            <div className='card flex gap-2 mb-4'>
                              <div>
                                <img className='w-[4rem] h-[4rem] rounded' src={product.item.image[0]} alt="" />
                              </div>
                              <div className='text-white flex flex-col'>
                                <span className='font-bold'>{product.item.titulo}</span>
                                <span className="flex gap-2">{product.item.categorias[0]}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className='fixed w-[20rem] max-h-[30rem] overflow-auto top-[4rem] bg-black wrapperSearch px-4 py-4 rounded shadow-lg'>
                        {primeirosCincos.map((product, index) => (
                          <Link key={product.id} to={`/products/${product.id}`}>
                            <div className='card flex gap-2 mb-4'>
                              <div>
                                <img className='w-[4rem] h-[4rem] rounded' src={product.image[0]} alt="" />
                              </div>
                              <div className='text-white flex flex-col'>
                                <span className='font-bold'>{product.titulo}</span>
                                <span>{product.categorias[0]}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )
                  ) : null
                )
              }
            </div>
            <a target='_blank' href="https://wa.me/5511962492213?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <FaWhatsapp className="h-6 w-6" fill="green" />
              </button>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>Creative brindes</Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/products"
                className="block text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                to="/about"
                className="block text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                to="/contact"
                className="block text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;