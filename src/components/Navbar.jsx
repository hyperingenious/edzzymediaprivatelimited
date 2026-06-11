import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing', label: 'Pricing' }
  ];

  return (
    <>
      <motion.div 
        className="navbar-wrapper"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      >
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <motion.div 
              className="logo cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img src="/edzzy-mark.webp" alt="Edzzy" style={{ height: '36px', width: 'auto' }} />
            </motion.div>
            
            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                  <span className="nav-link-dot"></span>
                </a>
              ))}
            </div>

            <div className="nav-actions">
              <motion.a 
                href="#contact"
                className="btn-secondary nav-action-btn flex items-center justify-center" 
                style={{ padding: '8px 20px', fontSize: '0.9rem', textDecoration: 'none' }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Client Portal
              </motion.a>
              <motion.a 
                href="#contact"
                className="btn-primary nav-action-btn flex items-center justify-center" 
                style={{ padding: '8px 20px', fontSize: '0.9rem', textDecoration: 'none' }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.a>

              <button 
                className="mobile-toggle cursor-pointer" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-menu-container">
              <div className="mobile-menu-links">
                {navLinks.map((link, idx) => (
                  <motion.a 
                    key={link.href} 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                <div className="mobile-menu-actions">
                  <a href="#contact" className="btn-secondary w-full flex items-center justify-center" style={{ textDecoration: 'none', padding: '12px 0' }} onClick={() => setMobileMenuOpen(false)}>
                    Client Portal
                  </a>
                  <a href="#contact" className="btn-primary w-full flex items-center justify-center" style={{ textDecoration: 'none', padding: '12px 0' }} onClick={() => setMobileMenuOpen(false)}>
                    Partner With Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
