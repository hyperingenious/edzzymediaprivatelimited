import { motion } from 'framer-motion';
import { FileText, Code, Rocket, RefreshCcw } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: <FileText size={28} />,
    title: '1. The Brief',
    description: 'You send us the project requirements, wireframes, or designs. We review and ask any clarifying questions to ensure zero ambiguity.',
    num: '01'
  },
  {
    icon: <Code size={28} />,
    title: '2. We Build',
    description: 'Our engineering team gets to work. We use modern, scalable tech stacks to build your product while keeping you updated via your preferred channels.',
    num: '02'
  },
  {
    icon: <RefreshCcw size={28} />,
    title: '3. QA & Refine',
    description: 'Rigorous internal testing across devices and browsers. We refine the UX and ensure performance metrics are completely optimized.',
    num: '03'
  },
  {
    icon: <Rocket size={28} />,
    title: '4. White-Label Delivery',
    description: 'We hand over the source code, ready for you to present to your client under your own agency branding.',
    num: '04'
  }
];

const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="process section-container" id="process">
      {/* Decorative background glow */}
      <div className="glow-orb process-glow"></div>

      <motion.div 
        className="process-header text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">How Edzzy Works</h2>
        <p className="section-subtitle">A seamless, invisible extension of your agency.</p>
      </motion.div>

      <motion.div 
        className="process-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="process-timeline-line"></div>
        
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="process-step glass-card"
            variants={itemVariants}
            whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.2)' }}
          >
            <div className="step-number-bg">{step.num}</div>
            
            <div className="process-icon-circle text-blue">
              <div className="icon-glow"></div>
              {step.icon}
            </div>
            
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-desc">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;
