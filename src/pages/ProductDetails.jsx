// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import { useState, useEffect } from 'react';
import SocialIcons from '../components/ui/SocialIcons';
import Brandcrumbs from '../components/ui/Brandcrumbs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules';
import ProductCard from '../components/products/ProductCard';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function ProductDetails() {
  // temporary
  // const bestSellers = products.filter(product => product.bestSeller);
  const bestSellers = products.slice(6, 15);
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.image[0]);

  if (!product) {
    return <div className="container mx-auto px-6 py-8">Product not found</div>;
  }

  useEffect(() => {
    console.log(product.medidas[0].largura);
    setSelectedImage(product.image[0]);
  }, [product]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container flex-col mx-auto px-6 py-8 mt-4">
      {/* <Brandcrumbs product={product} page={'products/'}></Brandcrumbs> */}

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={selectedImage || product.image[0]}
            alt={product.titulo}
            className="w-full rounded-lg shadow-lg h-[clamp(1rem,100vw,30rem)] bg-cover"
          />

          <div className='subImages flex gap-2 flex-wrap'>
            {
              product.image.map((image, index) => (
                <img
                  onClick={() => handleImageClick(image)}
                  key={index}
                  src={image}
                  alt={product.titulo}
                  className="w-full rounded-lg shadow-lg mt-4 max-w-[80px] max-h-[80px] bg-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                />
              ))
            }
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.titulo}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className='medidas flex flex-col gap-2'>
            {
              product.medidas[0].pesoAproximado && (
                <>
                  <span className=""><span className='font-semibold'>Peso:</span> {product?.medidas[0]?.pesoAproximado}</span>
                </>
              )
            }
            {
              product.medidas[0].largura && (
                <>
                  <span className="">{product?.medidas[0]?.largura}</span>
                </>
              )
            }
            {
              product.medidas[0].comprimento && (
                <>
                  <span className="">{product?.medidas[0]?.comprimento}</span>
                </>
              )
            }
            {
              product.medidas[0].medidas_aproximada_gravacao && (
                <>
                  <span className="">{product?.medidas[0]?.medidas_aproximada_gravacao}</span>
                </>
              )
            }{
              product.medidas[0].circunferência && (
                <>
                  <span className="">{product?.medidas[0]?.circunferencia}</span>
                </>
              )
            }
            {
              product.medidas[0].Tamanho_total_aproximado && (
                <>
                  <span className="">{product?.medidas[0]?.Tamanho_total_aproximado}</span>
                </>
              )
            }

            <div className='disclaimer mt-4'>
              <span className='font-medium'>Medidas, peso e tonalidades podem variar pois o mesmo modelo é produzido por diversos fabricantes.</span>
            </div>
            <div className='flex justify-between items-center'>
              <SocialIcons></SocialIcons>
              <a  target='_blank' href={`https://wa.me/5511962492213?text=Gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20o%20pedido%20${product.titulo}(${product.id})`}>
              <button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded btnHover">
                Fazer orçamento
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="title">Conheça outros produtos</h2>
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
              {bestSellers.map((product, index) => (
                // <ProductCard key={product.id} product={product} />
                <SwiperSlide key={index}><ProductCard product={product} /></SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link to="/products" className="inline-block px-6 py-3 border border-gray-300 rounded-lg text-black font-medium hover:bg-gray-50 transition-colors duration-200">
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;