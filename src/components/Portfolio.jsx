import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, Briefcase, GraduationCap, Users, Building2 } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    title: 'Cardgen AI',
    description: 'AI-powered Business card generator. Instantly create professional digital business cards.',
    link: 'https://cardgen.edzzy.com',
    icon: <Briefcase size={24} />,
    tags: ['AI', 'SaaS', 'Web']
  },
  {
    title: 'UNILINK',
    description: 'A comprehensive social media application designed specifically for college ecosystems.',
    link: 'https://play.google.com/store/apps/details?id=com.unilinkmediaapp.techapp',
    icon: <Smartphone size={24} />,
    tags: ['Mobile App', 'Social Network']
  },
  {
    title: 'MentorXchange',
    description: 'A dedicated SaaS platform connecting ambitious individuals with industry mentors.',
    link: null, // User specifically requested NOT to link this URL
    icon: <Users size={24} />,
    tags: ['SaaS', 'Platform']
  },
  {
    title: 'Resell Again',
    description: 'An OLX-style marketplace for college students to buy and sell second-hand goods securely.',
    link: 'https://resell-again.vercel.app',
    icon: <GraduationCap size={24} />,
    tags: ['Marketplace', 'Web App']
  },
  {
    title: 'Modern Resume Builder',
    description: 'Free resume builder application featuring modern, ATS-friendly themes and real-time preview.',
    link: 'https://resume-builder-next-client.vercel.app',
    icon: <Globe size={24} />,
    tags: ['Web Tool', 'Next.js']
  },
  {
    title: 'KampusOne',
    description: 'A fully-fledged ERP system designed specifically for managing complex school operations.',
    link: 'https://kampusone.com',
    icon: <Building2 size={24} />,
    tags: ['ERP', 'SaaS', 'Web']
  }
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="portfolio section-container" id="portfolio">
      <motion.div 
        className="portfolio-header text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">Our Work Speaks.</h2>
        <p className="section-subtitle">
          Explore a selection of high-performance products we've architected and built from scratch.
        </p>
      </motion.div>

      <motion.div 
        className="portfolio-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="bento-card portfolio-card"
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: 'var(--shadow-hover)' }}
          >
            <div className="portfolio-icon-wrapper text-blue mb-4">
              {project.icon}
            </div>
            
            <h3 className="portfolio-title">{project.title}</h3>
            <p className="portfolio-desc mb-4">{project.description}</p>
            
            <div className="portfolio-tags mb-6">
              {project.tags.map((tag, i) => (
                <span key={i} className="portfolio-tag">{tag}</span>
              ))}
            </div>

            {project.link ? (
              <a 
                href={project.link.startsWith('http') ? project.link : `https://${project.link}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="portfolio-link flex items-center gap-2"
              >
                View Live <ExternalLink size={16} />
              </a>
            ) : (
              <span className="portfolio-link-disabled flex items-center gap-2">
                Private Project
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
