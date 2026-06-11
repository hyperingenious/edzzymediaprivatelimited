import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="badge" variants={itemVariants}>
          <Code2 size={16} className="mr-2" /> 
          The Elite White-Label Tech Partner
        </motion.div>
        
        <motion.h1 className="hero-title" variants={itemVariants}>
          We Build The Tech. <br/> 
          You Scale Your Agency.
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Edzzy provides comprehensive technical firepower for marketing and design agencies. 
          From churning out hundreds of high-converting websites to architecting complex custom web apps 
          and executing rigorous technical SEO—we do the heavy lifting silently under your brand. 
          Enjoy pure profit margins with our flat, per-project pricing.
        </motion.p>
        
        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.button 
            className="btn-primary flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Pricing <ArrowRight size={18} />
          </motion.button>
          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.05, backgroundColor: 'var(--bg-primary)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Decorative clean light background element */}
      <motion.div 
        className="hero-bg-shape"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
    </section>
  );
};

export default Hero;
