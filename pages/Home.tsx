import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, TrendingUp, Layers, Code, Play } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { FEATURES, PORTFOLIO_ITEMS } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
};

const Home: React.FC = () => {
  // Preload portfolio images when Home component mounts
  useEffect(() => {
    const preloadImages = () => {
      PORTFOLIO_ITEMS.forEach((item) => {
        const img = new Image();
        img.src = item.imageUrl;
      });
    };

    // Use requestIdleCallback if available to not block the main thread
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => preloadImages());
    } else {
      // Fallback: small timeout to let the page render first
      setTimeout(preloadImages, 1000);
    }
  }, []);

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary/10 to-transparent blur-[120px] opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent blur-[100px] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-[0.2em] uppercase mb-6"
            >
              重塑数字艺术边界
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-10"
            >
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Digital Presence</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <NavLink 
                to="/portfolio"
                className="group relative px-8 py-4 bg-white text-black font-semibold tracking-wide overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  探索作品 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
              </NavLink>
              
              <button className="flex items-center gap-4 text-white group hover:text-primary transition-colors">
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </span>
                <span className="font-medium tracking-wide">品鉴影像</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-[10px] tracking-widest uppercase writing-mode-vertical">滑动</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
             <div className="max-w-xl">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">重新定义 · 数字交互</h2>
               <p className="text-gray-400 leading-relaxed">
                 我们融汇极致美学与精湛技艺，打造兼具视觉震撼与卓越功能的数字杰作。
               </p>
             </div>
             <NavLink to="/services" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors mt-6 md:mt-0">
               查看服务 <ArrowRight className="w-4 h-4" />
             </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 border border-white/5 hover:border-primary/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="mb-6 text-gray-400 group-hover:text-primary transition-colors">
                  {iconMap[feature.iconName]}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:translate-x-1 transition-transform">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works Teaser */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-12">精选 · 案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="group relative aspect-[4/3] overflow-hidden bg-gray-800"
            >
              <img 
                src="https://picsum.photos/800/600?random=10" 
                alt="Project 1" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-2xl font-serif text-white italic">Lumina Workspace</span>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.2 }}
               className="group relative aspect-[4/3] overflow-hidden bg-gray-800 md:mt-24"
            >
              <img 
                src="https://picsum.photos/800/600?random=11" 
                alt="Project 2" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <span className="text-2xl font-serif text-white italic">Apex Finance</span>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-20">
            <NavLink to="/portfolio" className="border border-white/20 px-10 py-4 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm">
              浏览全部案例
            </NavLink>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;