import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import NextSupplySection from '../components/NextSupplySection';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <NextSupplySection />
      <Products />
      <Testimonials />
    </div>
  );
};

export default HomePage;

