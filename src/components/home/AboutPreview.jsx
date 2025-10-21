// src/components/home/AboutPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function AboutPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 lg:pr-12">
            <h2 className="text-[clamp(1rem,4vw,2.5rem)] font-medium mb-6 leading-tight">Quer conhecer a história por trás do que fazemos?</h2>
            <p className="text-gray-600 text-[clamp(1rem,4vw,1.125rem)] leading-relaxed mb-8">
              Por trás de cada projeto, existe uma equipe apaixonada, uma missão clara e muitos desafios superados. Aqui você vai entender de onde viemos, o que nos move e por que fazemos o que fazemos com tanta dedicação. Vem com a gente nessa jornada!
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium"
            >
              Sobre nós
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-center">
              <img 
                src={logo}
                alt="Logo da empresa Chronos Brindes"
                className="w-[clamp(30rem,10vw,50rem)] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;