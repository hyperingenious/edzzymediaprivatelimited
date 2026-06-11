import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Search, Database, Layers, CheckCircle2 } from 'lucide-react';
import './Services.css';

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="services section-container" id="services">
      <motion.div 
        className="services-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
        }}
      >
        <motion.h2 className="section-title" variants={cardVariants}>A Full-Stack Arsenal For Your Agency.</motion.h2>
        <motion.p className="section-subtitle" variants={cardVariants}>
          Edzzy provides the elite technical capabilities your agency needs to win bigger contracts, 
          without the overhead of hiring an in-house engineering team.
        </motion.p>
      </motion.div>

      <div className="bento-grid">
        <motion.div 
          className="bento-card bento-large group"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
        >
          <div className="bento-icon-wrapper text-blue mb-4">
            <Globe size={40} className="stroke-current" />
          </div>
          <h3>Bulk Website Deployment</h3>
          <p className="mb-4">
            Rapid deployment of high-quality, high-converting websites at scale. We build systems that let you deliver dozens of sites a month.
          </p>
          <ul className="service-feature-list">
            <li><CheckCircle2 size={16} /> Automated QA testing</li>
            <li><CheckCircle2 size={16} /> Custom CMS integrations</li>
            <li><CheckCircle2 size={16} /> Lightning fast load times</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bento-card bento-small"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
        >
          <div className="bento-icon-wrapper mb-4">
            <Smartphone size={32} />
          </div>
          <h3>Mobile App Dev</h3>
          <p>Native iOS & Android apps built for performance and flawless UX. We handle the entire lifecycle to App Store approval.</p>
        </motion.div>

        <motion.div 
          className="bento-card bento-small"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
        >
          <div className="bento-icon-wrapper mb-4">
            <Search size={32} />
          </div>
          <h3>Technical SEO</h3>
          <p>Deep optimization for speed, core web vitals, rich snippets, and architectural ranking factors that drive traffic.</p>
        </motion.div>

        <motion.div 
          className="bento-card bento-wide"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
        >
          <div className="bento-content-flex">
            <div className="bento-text">
              <div className="bento-icon-wrapper mb-4">
                <Database size={32} />
              </div>
              <h3>Custom Web Apps & SaaS</h3>
              <p>
                From internal dashboards to complex multi-tenant SaaS architectures, we architect and build bespoke software solutions using React, Node.js, and modern cloud infrastructure.
              </p>
            </div>
            <div className="bento-visual">
              <motion.div 
                className="mock-ui"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mock-header flex items-center px-2">
                  <div className="mock-dot" style={{ background: '#ff5f56' }}></div>
                  <div className="mock-dot" style={{ background: '#ffbd2e' }}></div>
                  <div className="mock-dot" style={{ background: '#27c93f' }}></div>
                </div>
                <div className="mock-body flex items-center justify-center">
                  <Layers size={48} color="var(--text-muted)" opacity={0.5} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
