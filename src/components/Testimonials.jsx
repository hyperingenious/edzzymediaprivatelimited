import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Edzzy operates like an in-house engineering team. We handed them a complex SaaS build that was bottlenecking our agency, and they delivered it fully white-labeled in half our projected timeline.",
    name: "Priya Sharma",
    role: "Founder, GrowthOps Digital",
    initials: "PS",
    rating: 5
  },
  {
    quote: "The ability to scale our web development offering without hiring full-time developers has transformed our business. We now confidently pitch bulk packages knowing Edzzy can handle the execution flawlessly.",
    name: "Arjun Patel",
    role: "Managing Director, Elevate Marketing",
    initials: "AP",
    rating: 5
  },
  {
    quote: "Their technical SEO knowledge is unmatched. We outsourced a major client's architectural overhaul to them, and the resulting Core Web Vitals improvements single-handedly saved the account.",
    name: "Rajesh Kumar",
    role: "Head of Strategy, Nexus Creative",
    initials: "RK",
    rating: 5
  },
  {
    quote: "Working with Edzzy feels completely seamless. They took our Figma designs and built a pixel-perfect, highly animated React frontend. Highly recommended for any agency looking to scale.",
    name: "Neha Gupta",
    role: "Design Lead, Studio Nova",
    initials: "NG",
    rating: 5
  },
  {
    quote: "They developed our client's mobile app natively for iOS and Android. The performance is incredibly smooth and the process was fully transparent. True professionals.",
    name: "Vikram Singh",
    role: "Technical Director, Apex Solutions",
    initials: "VS",
    rating: 5
  },
  {
    quote: "Outsourcing backend development used to be a headache until we found Edzzy. Their scalable database architectures have handled everything we've thrown at them with zero downtime.",
    name: "Anjali Desai",
    role: "CEO, InnovateTech",
    initials: "AD",
    rating: 5
  }
];

const Testimonials = () => {
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
    <section className="testimonials section-container" id="testimonials">
      <div className="glow-orb testimonials-glow"></div>
      
      <motion.div 
        className="testimonials-header text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
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
          >
            {/* Elegant Quotation Mark Background */}
            <div className="quote-mark-bg">
              <Quote size={120} />
            </div>

            <div className="stars-container mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={15} fill="#3b82f6" color="#3b82f6" className="star-icon" />
              ))}
            </div>

            <p className="testimonial-quote mb-6">"{testimonial.quote}"</p>
            
            <div className="testimonial-author-wrapper">
              <div className="author-avatar-initials">
                {testimonial.initials}
              </div>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
