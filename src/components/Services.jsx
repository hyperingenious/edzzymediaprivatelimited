import { motion } from 'framer-motion';
import { Globe, Smartphone, Search, Database, CheckCircle2, TrendingUp } from 'lucide-react';
import './Services.css';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="services section-container" id="services">
      <div className="glow-orb services-glow-1"></div>
      
      <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">A Full-Stack Arsenal For Your Agency.</h2>
        <p className="section-subtitle">
          Edzzy provides the elite technical capabilities your agency needs to win bigger contracts, 
          without the overhead of hiring an in-house engineering team.
        </p>
      </motion.div>

      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Bulk Website Deployment Card (bento-large) */}
        <motion.div 
          className="glass-card bento-card bento-large group"
          variants={cardVariants}
        >
          <div className="bento-card-glow"></div>
          <div className="bento-icon-wrapper text-blue mb-4">
            <Globe size={32} className="bento-svg-icon" />
          </div>
          <h3 className="bento-card-title">Bulk Website Deployment</h3>
          <p className="bento-card-desc mb-6">
            Rapid deployment of high-quality, high-converting websites at scale. We build systems that let you deliver dozens of sites a month.
          </p>
          <ul className="service-feature-list">
            <li>
              <CheckCircle2 size={16} className="feature-check-icon" /> 
              <span>Automated QA testing</span>
            </li>
            <li>
              <CheckCircle2 size={16} className="feature-check-icon" /> 
              <span>Custom CMS integrations</span>
            </li>
            <li>
              <CheckCircle2 size={16} className="feature-check-icon" /> 
              <span>Lightning fast load times</span>
            </li>
          </ul>
        </motion.div>

        {/* Mobile App Dev Card (bento-small) */}
        <motion.div 
          className="glass-card bento-card bento-small group"
          variants={cardVariants}
        >
          <div className="bento-card-glow"></div>
          <div className="bento-icon-wrapper text-blue mb-4">
            <Smartphone size={32} className="bento-svg-icon" />
          </div>
          <h3 className="bento-card-title">Mobile App Dev</h3>
          <p className="bento-card-desc">
            Native iOS & Android apps built for performance and flawless UX. We handle the entire lifecycle to App Store approval.
          </p>
        </motion.div>

        {/* Technical SEO Card (bento-small) */}
        <motion.div 
          className="glass-card bento-card bento-small group"
          variants={cardVariants}
        >
          <div className="bento-card-glow"></div>
          <div className="bento-icon-wrapper text-blue mb-4">
            <Search size={32} className="bento-svg-icon" />
          </div>
          <h3 className="bento-card-title">Technical SEO</h3>
          <p className="bento-card-desc">
            Deep optimization for speed, core web vitals, rich snippets, and architectural ranking factors that drive traffic.
          </p>
        </motion.div>

        {/* Custom Web Apps & SaaS Card (bento-wide) */}
        <motion.div 
          className="glass-card bento-card bento-wide group"
          variants={cardVariants}
        >
          <div className="bento-card-glow"></div>
          <div className="bento-content-flex">
            <div className="bento-text">
              <div className="bento-icon-wrapper text-blue mb-4">
                <Database size={32} className="bento-svg-icon" />
              </div>
              <h3 className="bento-card-title">Custom Web Apps & SaaS</h3>
              <p className="bento-card-desc">
                From internal dashboards to complex multi-tenant SaaS architectures, we architect and build bespoke software solutions using React, Node.js, and modern cloud infrastructure.
              </p>
            </div>
            
            <div className="bento-visual">
              <motion.div 
                className="mock-ui-wrapper"
                whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <div className="mock-ui-card">
                  <div className="mock-header flex items-center px-2">
                    <div className="mock-dot" style={{ background: '#ff5f56' }}></div>
                    <div className="mock-dot" style={{ background: '#ffbd2e' }}></div>
                    <div className="mock-dot" style={{ background: '#27c93f' }}></div>
                    <div className="mock-title">edzzy-dashboard-v1</div>
                  </div>
                  <div className="mock-body">
                    <div className="mock-sidebar">
                      <div className="sidebar-item active"></div>
                      <div className="sidebar-item"></div>
                      <div className="sidebar-item"></div>
                    </div>
                    <div className="mock-content">
                      <div className="mock-widgets">
                        <div className="mock-widget">
                          <span className="widget-label">Users</span>
                          <span className="widget-value text-gradient-blue">12.5k</span>
                        </div>
                        <div className="mock-widget">
                          <span className="widget-label">Sales</span>
                          <span className="widget-value text-gradient-pink">₹1.2M</span>
                        </div>
                      </div>
                      <div className="mock-chart">
                        <TrendingUp size={16} className="chart-icon" />
                        <div className="chart-bar-container">
                          <div className="chart-bar" style={{ height: '40%' }}></div>
                          <div className="chart-bar" style={{ height: '60%' }}></div>
                          <div className="chart-bar" style={{ height: '50%' }}></div>
                          <div className="chart-bar" style={{ height: '80%' }}></div>
                          <div className="chart-bar animate-grow" style={{ height: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
