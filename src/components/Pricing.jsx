import { motion } from 'framer-motion';
import { Check, Smartphone, LayoutTemplate, Palette, Database } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
  {
    title: 'Landing Page',
    price: '₹15,000',
    description: 'High-converting, single-page marketing sites designed to capture leads.',
    icon: <LayoutTemplate size={24} />,
    features: [
      'Custom UI/UX Design',
      'Mobile Responsive',
      'Free Domain Name (1 yr)',
      'Free Premium Hosting (1 yr)'
    ],
    popular: false
  },
  {
    title: 'Web Design',
    price: '₹15,000',
    description: 'Beautiful, multi-page company websites optimized for trust and conversions.',
    icon: <Palette size={24} />,
    features: [
      'Up to 5 Pages',
      'CMS Integration',
      'Free Domain Name (1 yr)',
      'Free Premium Hosting (1 yr)'
    ],
    popular: true
  },
  {
    title: 'Backend Dev',
    price: '₹25,000',
    description: 'Robust server-side architecture, APIs, and database design for complex apps.',
    icon: <Database size={24} />,
    features: [
      'Custom API Development',
      'Database Architecture',
      'Authentication Systems',
      'Scalable Infrastructure'
    ],
    popular: false
  },
  {
    title: 'Mobile App',
    price: '₹25,000',
    description: 'Native-feel iOS and Android applications built for performance and scale.',
    icon: <Smartphone size={24} />,
    features: [
      'Cross-Platform Build',
      'App Store Submission',
      'Push Notifications',
      'Smooth Animations'
    ],
    popular: false
  }
];

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="pricing section-container" id="pricing">
      <div className="glow-orb pricing-glow"></div>
      
      <motion.div 
        className="pricing-header text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
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
            className={`glass-card pricing-card ${plan.popular ? 'popular' : ''} group`}
            variants={itemVariants}
          >
            {plan.popular && (
              <div className="popular-badge">
                <span>Best Value</span>
              </div>
            )}
            
            <div className="pricing-card-header">
              <div className="pricing-icon text-blue">
                {plan.icon}
              </div>
              <h3 className="pricing-plan-title">{plan.title}</h3>
              <p className="pricing-plan-desc">{plan.description}</p>
            </div>
            
            <div className="pricing-price-container">
              <span className="pricing-price text-gradient-blue">{plan.price}</span>
              <span className="pricing-per">/project</span>
            </div>

            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <Check size={16} className="feature-check" strokeWidth={3} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <motion.a 
              href="#contact"
              className={`btn-primary w-full flex items-center justify-center mt-auto pricing-btn ${plan.popular ? 'popular-btn' : ''}`}
              style={{ padding: '14px 0', textDecoration: 'none' }}
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
