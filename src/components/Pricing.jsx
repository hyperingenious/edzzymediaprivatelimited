import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone, LayoutTemplate, Palette, Database } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
  {
    title: 'Landing Page',
    price: '₹15,000',
    description: 'High-converting, single-page marketing sites designed to capture leads.',
    icon: <LayoutTemplate size={28} />,
    features: [
      'Custom UI/UX Design',
      'Mobile Responsive',
      'Free Domain Name (1 yr)',
      'Free Premium Hosting (1 yr)'
    ]
  },
  {
    title: 'Web Design',
    price: '₹15,000',
    description: 'Beautiful, multi-page company websites optimized for trust and conversions.',
    icon: <Palette size={28} />,
    features: [
      'Up to 5 Pages',
      'CMS Integration',
      'Free Domain Name (1 yr)',
      'Free Premium Hosting (1 yr)'
    ]
  },
  {
    title: 'Backend Dev',
    price: '₹25,000',
    description: 'Robust server-side architecture, APIs, and database design for complex apps.',
    icon: <Database size={28} />,
    features: [
      'Custom API Development',
      'Database Architecture',
      'Authentication Systems',
      'Scalable Infrastructure'
    ]
  },
  {
    title: 'Mobile App',
    price: '₹25,000',
    description: 'Native-feel iOS and Android applications built for performance and scale.',
    icon: <Smartphone size={28} />,
    features: [
      'Cross-Platform Build',
      'App Store Submission',
      'Push Notifications',
      'Smooth Animations'
    ]
  }
];

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="pricing section-container" id="pricing">
      <motion.div 
        className="pricing-header text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">Transparent Pricing.</h2>
        <p className="section-subtitle">
          Predictable, flat-rate costs that give your agency maximum margin control.
        </p>
      </motion.div>

      <motion.div 
        className="pricing-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {pricingPlans.map((plan, index) => (
          <motion.div 
            key={index}
            className="bento-card pricing-card"
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: 'var(--shadow-hover)' }}
          >
            <div className="pricing-card-header">
              <div className="pricing-icon text-blue">
                {plan.icon}
              </div>
              <h3 className="pricing-plan-title">{plan.title}</h3>
              <p className="pricing-plan-desc">{plan.description}</p>
            </div>
            
            <div className="pricing-price-container">
              <span className="pricing-price">{plan.price}</span>
              <span className="pricing-per">/project</span>
            </div>

            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <Check size={18} className="text-blue feature-check" strokeWidth={3} />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.a 
              href="#contact"
              className="btn-primary w-full flex items-center justify-center mt-auto"
              style={{ padding: '12px 0' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
