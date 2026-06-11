import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="hero">
      {/* Decorative Glow Orbs */}
      <div className="glow-orb hero-glow-1"></div>
      <div className="glow-orb hero-glow-2"></div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <div className="badge-glow"></div>
          <Code2 size={16} className="badge-icon" /> 
          <span className="badge-text">The Elite White-Label Tech Partner</span>
        </motion.div>
        
        <motion.h1 className="hero-title" variants={itemVariants}>
          We Build The <span className="title-highlight-blue">Tech</span>. <br/> 
          You Scale Your <span className="title-highlight-purple">Agency</span>.
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Edzzy provides comprehensive technical firepower for marketing and design agencies. 
          From churning out hundreds of high-converting websites to architecting complex custom web apps 
          and executing rigorous technical SEO—we do the heavy lifting silently under your brand. 
          Enjoy pure profit margins with our flat, per-project pricing.
        </motion.p>
        
        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.a 
            href="#pricing"
            className="btn-primary flex items-center justify-center gap-2 hero-btn-main"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ textDecoration: 'none' }}
          >
            View Our Pricing <ArrowRight size={18} />
          </motion.a>
          <motion.a 
            href="#services"
            className="btn-secondary hero-btn-sub"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ textDecoration: 'none' }}
          >
            Explore Services
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Decorative grid pattern in background */}
      <div className="hero-grid-pattern"></div>
    </section>
  );
};

export default Hero;
