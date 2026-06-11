import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="cta section-container" id="contact">
      <motion.div 
        className="bento-card cta-card-light"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
      >
        <div className="cta-content-light">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
            transition={{ delay: 0.3 }}
          >
            <motion.button 
              className="btn-primary btn-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneCall size={20} /> Book a Strategy Call
            </motion.button>
            <motion.button 
              className="btn-secondary btn-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: 'white' }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
