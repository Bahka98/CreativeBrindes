// src/pages/About.jsx
import React from 'react';
import infosEmpresa from '../utils/infosEmpresa';
import CardsPilares from '../components/ui/CardsPilares';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className="container mx-auto px-6 pt-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="title2">Brindes que marcam. Presentes que conectam.</h1>
          <img
            src="https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
          />
          <div className="prose lg:prose-xl">
            <p className="mb-6">
              Somos mais do que uma loja de brindes: somos especialistas em criar conexões. Acreditamos que cada presente tem o poder de contar uma história, fortalecer laços e deixar uma marca positiva — na memória e no coração.
            </p>
            <p className="mb-6">
              Na <b>{infosEmpresa.name}</b>, você encontra uma curadoria de brindes personalizados pensados para encantar, surpreender e comunicar o que sua marca tem de melhor. Atendemos empresas de todos os tamanhos, com soluções criativas, práticas e com aquele toque de carinho que faz toda a diferença.
            </p>
            <p>
              Combinamos qualidade, design e propósito para transformar simples objetos em experiências memoráveis. Seja para ações promocionais, datas comemorativas, eventos corporativos ou agradecimentos especiais, aqui você encontra o brinde certo para cada ocasião.

              Porque para nós, presentear é mais do que entregar algo bonito — é criar um momento de conexão.
            </p>
          </div>
        </div>

        <div className='max-w-3xl mx-auto'>
          <h2 className='title2 mt-10'>Nossa missão</h2>

          <div className="prose lg:prose-xl">
            <p className="mb-6">
              Nossa missão é transformar brindes em pontes de conexão entre marcas e pessoas.
            </p>
            <p className="mb-6">
              Acreditamos que cada presente carrega um significado — um gesto de cuidado, um agradecimento, uma lembrança que permanece. Por isso, trabalhamos todos os dias para oferecer soluções criativas, de qualidade e com propósito, que valorizem a experiência de quem dá e de quem recebe.
            </p>
            <p>
              Queremos ir além do produto: queremos criar momentos que emocionam, fortalecem relações e deixam marcas positivas.

              Mais do que entregar brindes, entregamos conexões.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <CardsPilares></CardsPilares>
        </div>
      </div>

      <div className='bg-gray-100 pt-[160px] pb-[160px] mt-[160px] w-screen'>
          <div className='max-w-3xl mx-auto'>
            <div>
              <h2 className='title2'>Tudo o que sua marca precisa para se destacar, do papel ao presente.</h2>
            </div>
            <div className='flex justify-center'>
              <Link to={'/products'}>
                <button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded btnHover">
                  Ver todos
                </button>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default About;