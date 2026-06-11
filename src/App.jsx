import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactCTA from './components/ContactCTA';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <ContactCTA />
    </>
  );
}

export default App;
