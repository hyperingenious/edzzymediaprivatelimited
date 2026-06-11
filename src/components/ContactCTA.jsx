import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="cta section-container" id="contact">
      <div className="glow-orb cta-glow"></div>
      
      <motion.div 
        className="glass-card cta-card"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.12)' }}
      >
        <div className="cta-grid-overlay"></div>
        <div className="cta-gradient-overlay"></div>

        <div className="cta-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Scale Your Agency Today</h2>
            <p className="cta-subtitle">
              Partner with Edzzy. Stop turning away complex projects and start delivering exceptional tech.
              Our engineers are ready to act as your extended team.
            </p>
          </motion.div>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="tel:+918959262353"
              className="btn-primary btn-xl flex items-center justify-center gap-2 cta-btn-call"
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <PhoneCall size={20} />
              <span>+91 8959 262 353</span>
            </motion.a>
            <motion.a 
              href="#portfolio"
              className="btn-secondary btn-xl flex items-center justify-center gap-2 cta-btn-work"
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Portfolio</span>
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
