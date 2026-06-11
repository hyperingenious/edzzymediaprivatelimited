import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

export default App;
