import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import NextSupplySection from './components/NextSupplySection';
import Products from './components/Products';
import BrewingGuide from './components/BrewingGuide';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import Distribution from './components/Distribution';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <NextSupplySection />
          <Products />
          <BrewingGuide />
          <Sustainability />
          <Testimonials />
          <Distribution />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;