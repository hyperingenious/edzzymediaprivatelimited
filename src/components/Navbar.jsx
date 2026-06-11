import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img src="/edzzy-mark.webp" alt="Edzzy" style={{ height: '36px', width: 'auto' }} />
        </motion.div>
        
        <div className="nav-links">
          <a href="#services" className="nav-link">Services</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>

        <div className="nav-actions">
          <motion.button 
            className="btn-secondary" 
            style={{ padding: '8px 24px' }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Client Portal
          </motion.button>
          <motion.button 
            className="btn-primary" 
            style={{ padding: '8px 24px' }}
            whileHover={{ y: -2, boxShadow: 'var(--shadow-md)' }}
            whileTap={{ scale: 0.95 }}
          >
            Partner With Us
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
