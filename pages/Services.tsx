import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { FEATURES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-24">
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-primary font-bold tracking-widest uppercase mb-4"
             >
               Expertise
             </motion.p>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight"
             >
               Comprehensive Design & Development Solutions
             </motion.h1>
          </div>

          <div className="space-y-32">
            {FEATURES.map((feature, index) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-video bg-surface border border-white/5 relative overflow-hidden group">
                     {/* Abstract decorative graphic */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/10 opacity-50"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-9xl font-serif text-white/5 group-hover:text-white/10 transition-colors duration-500 font-bold">
                          0{index + 1}
                        </span>
                     </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                   <h2 className="text-3xl font-serif text-white mb-6">{feature.title}</h2>
                   <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                     {feature.description} We dive deep into understanding your brand's core values to translate them into a coherent digital language.
                   </p>
                   <ul className="space-y-4">
                     {[1, 2, 3].map((i) => (
                       <li key={i} className="flex items-center gap-3 text-gray-300">
                         <CheckCircle2 className="text-primary w-5 h-5" />
                         <span>Specialized capability point {i}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Services;