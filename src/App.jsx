import React from 'react';
import Brands from './components/Brands/Brands';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Brands />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;