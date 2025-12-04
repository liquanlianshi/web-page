import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';

const BATCH_SIZE = 6;
const MAX_LOAD_MORE_CLICKS = 6;

const Portfolio: React.FC = () => {
  const [displayedItems, setDisplayedItems] = useState<PortfolioItem[]>([]);
  const [bufferedItems, setBufferedItems] = useState<PortfolioItem[]>([]);
  const [loadCount, setLoadCount] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Helper to generate portfolio items based on the seed constants
  const generateItems = (startIndex: number, count: number): PortfolioItem[] => {
    return Array.from({ length: count }).map((_, index) => {
      const id = startIndex + index + 1; // 1-based ID
      // Cycle through the static items for templates
      const template = PORTFOLIO_ITEMS[index % PORTFOLIO_ITEMS.length];
      return {
        id,
        title: `${template.title} ${Math.floor((id - 1) / PORTFOLIO_ITEMS.length) + 1}`,
        category: template.category,
        // Use specific random seeds to ensure consistency but variety
        imageUrl: `https://picsum.photos/800/600?random=${id + 100}`
      };
    });
  };

  const preloadImages = (items: PortfolioItem[]) => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.imageUrl;
    });
  };

  useEffect(() => {
    // Initial load: Generate 12 items (6 for display, 6 for buffer)
    const initialTotal = BATCH_SIZE * 2;
    const allInitialItems = generateItems(0, initialTotal);
    
    const initialDisplay = allInitialItems.slice(0, BATCH_SIZE);
    const initialBuffer = allInitialItems.slice(BATCH_SIZE, initialTotal);

    setDisplayedItems(initialDisplay);
    setBufferedItems(initialBuffer);
    
    // Preload the buffer immediately
    preloadImages(initialBuffer);
    
    setIsInitialLoading(false);
  }, []);

  const handleLoadMore = () => {
    if (loadCount >= MAX_LOAD_MORE_CLICKS) return;

    // 1. Move buffer to display
    const newDisplayed = [...displayedItems, ...bufferedItems];
    setDisplayedItems(newDisplayed);

    // 2. Increment click count
    const newLoadCount = loadCount + 1;
    setLoadCount(newLoadCount);

    // 3. If we haven't reached the limit, generate and buffer next batch
    if (newLoadCount < MAX_LOAD_MORE_CLICKS) {
      // Calculate start index based on what we have now + what we just moved
      const nextStartIndex = newDisplayed.length; 
      const nextBatch = generateItems(nextStartIndex, BATCH_SIZE);
      
      setBufferedItems(nextBatch);
      preloadImages(nextBatch);
    } else {
      setBufferedItems([]);
    }
  };

  return (
    <AnimatedPage>
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
          >
            精选案例
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-primary mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % BATCH_SIZE) * 0.1 }} // Stagger animation for each batch
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay content on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col justify-end p-8">
                     <p className="text-primary text-sm tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                       {item.category}
                     </p>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-500 mt-2 text-sm">{item.category}</p>
              </motion.div>
            ))}
          </div>

          {!isInitialLoading && loadCount < MAX_LOAD_MORE_CLICKS && (
            <div className="flex justify-center">
              <motion.button
                onClick={handleLoadMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
              >
                展示更多
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Portfolio;
