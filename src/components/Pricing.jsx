import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing section-container" id="pricing">
      <motion.div 
        className="pricing-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">Transparent & Predictable.</h2>
        <p className="section-subtitle">
          No complex retainers. Just clean, per-project billing designed to protect your agency margins.
        </p>
      </motion.div>

      <motion.div 
        className="bento-card pricing-card-light"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
        transition={{ duration: 0.4 }}
      >
        <div className="pricing-split-light">
          <div className="pricing-left-light">
            <h3>Per-Project Delivery</h3>
            <div className="price-tag-light">
              Agency <span>Pricing</span>
            </div>
            <p className="pricing-desc-light">
              Edzzy provides fixed quotes for your client briefs. You add your markup. We build. Everyone wins. 
              Our efficiency translates directly to your bottom line.
            </p>
          </div>
          <div className="pricing-right-light">
            <ul className="pricing-features-light">
              <li>
                <Check size={20} className="text-blue" strokeWidth={3} />
                100% White-labeled delivery
              </li>
              <li>
                <Check size={20} className="text-blue" strokeWidth={3} />
                Dedicated project manager
              </li>
              <li>
                <Check size={20} className="text-blue" strokeWidth={3} />
                Source code ownership
              </li>
              <li>
                <Check size={20} className="text-blue" strokeWidth={3} />
                NDA protected
              </li>
            </ul>
            <motion.button 
              className="btn-primary flex items-center justify-center gap-2" 
              style={{ width: '100%', marginTop: '24px' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Quote <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
