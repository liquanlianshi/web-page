import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-20 px-6 min-h-screen">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to start your next project? We would love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
               <div className="space-y-8">
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <Mail />
                    </div>
                    <div>
                      <h3 className="text-xl text-white font-medium mb-2">Email Us</h3>
                      <p className="text-gray-400">hello@aetheria.com</p>
                      <p className="text-gray-400">careers@aetheria.com</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <Phone />
                    </div>
                    <div>
                      <h3 className="text-xl text-white font-medium mb-2">Call Us</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">Mon-Fri, 9am - 6pm EST</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin />
                    </div>
                    <div>
                      <h3 className="text-xl text-white font-medium mb-2">Visit Us</h3>
                      <p className="text-gray-400">123 Design Avenue, Suite 101</p>
                      <p className="text-gray-400">New York, NY 10012</p>
                    </div>
                 </div>
               </div>
            </motion.div>

            {/* Form */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-surface p-8 md:p-10 border border-white/5 rounded-sm"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400 uppercase tracking-wide">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400 uppercase tracking-wide">Subject</label>
                  <select 
                    id="subject"
                    className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Career Opportunity</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400 uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="button" 
                  className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-primary transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;