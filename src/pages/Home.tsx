import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
