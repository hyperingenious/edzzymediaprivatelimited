import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Edzzy operates like an in-house engineering team. We handed them a complex SaaS build that was bottlenecking our agency, and they delivered it fully white-labeled in half our projected timeline. Our profit margins on that project were incredible.",
    name: "Sarah Jenkins",
    role: "Founder, GrowthOps Digital",
    rating: 5
  },
  {
    quote: "The ability to scale our web development offering without hiring full-time developers has transformed our business. We now confidently pitch bulk website packages knowing Edzzy can handle the execution flawlessly in the background.",
    name: "Marcus Thorne",
    role: "Managing Director, Elevate Marketing",
    rating: 5
  },
  {
    quote: "Their technical SEO knowledge is unmatched. We outsourced a major client's architectural overhaul to them, and the resulting Core Web Vitals improvements single-handedly saved the account. Completely seamless partnership.",
    name: "Priya Sharma",
    role: "Head of Strategy, Nexus Creative",
    rating: 5
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="testimonials section-container" id="testimonials">
      <motion.div 
        className="testimonials-header text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">Trusted by Leading Agencies.</h2>
        <p className="section-subtitle">
          Real results from partners who scaled their operations using our white-label engineering.
        </p>
      </motion.div>

      <motion.div 
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="glass-card testimonial-card"
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
          >
            <div className="testimonial-icon mb-4">
              <Quote size={32} color="var(--accent-primary)" opacity={0.2} />
            </div>
            
            <div className="stars mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
              ))}
            </div>

            <p className="testimonial-quote mb-6">"{testimonial.quote}"</p>
            
            <div className="testimonial-author">
              <h4 className="author-name">{testimonial.name}</h4>
              <p className="author-role">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
