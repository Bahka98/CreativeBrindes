// src/pages/Home.jsx
import React from 'react';
import SubHeader from '../components/layout/SubHeader';
import FeaturedCarousel from '../components/home/FeaturedCarousel';
import CategorySection from '../components/home/CategorySection';
import BestSellers from '../components/home/BestSellers';
import AboutPreview from '../components/home/AboutPreview';
import HomeLettering from '../components/home/HomeLettering';

function Home() {
  return (
    <div>
      <SubHeader />
      <FeaturedCarousel />
      <CategorySection />
      <BestSellers />
      <HomeLettering />
      <AboutPreview />
    </div>
  );
}

export default Home;