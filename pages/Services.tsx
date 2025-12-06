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
               网页设计介绍
             </motion.h1>
          </div>

          <div className="space-y-32">
            {FEATURES.map((feature, index) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
                whileInView={index !== 0 ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-video bg-surface border border-white/5 relative overflow-hidden group rounded-sm">
                     {/* Background Image with Premium Hover Effect */}
                     <div className="absolute inset-0 bg-black">
                       <img 
                         src={feature.imageUrl} 
                         alt={feature.title}
                         className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                       />
                     </div>

                     {/* Overlay gradient */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                     
                     {/* Decorative Number */}
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-9xl font-serif text-white/10 group-hover:text-white/30 transition-colors duration-500 font-bold tracking-tighter">
                          0{index + 1}
                        </span>
                     </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                   <h2 className="text-3xl font-serif text-white mb-6">{feature.title}</h2>
                   <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                     {feature.description}
                   </p>
                   <ul className="space-y-4">
                     {/* 如果有 points 则显示 points，否则显示默认的占位符 */}
                     {(feature.points || ["核心优势 1", "核心优势 2", "核心优势 3"]).map((point, i) => (
                       <li key={i} className="flex items-center gap-3 text-gray-300">
                         <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                         <span>{point}</span>
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