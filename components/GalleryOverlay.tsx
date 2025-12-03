import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';

const CARD_WIDTH = 400;
const CARD_HEIGHT = 300;

interface GalleryOverlayProps {
  onClose: () => void;
}

const GalleryOverlay: React.FC<GalleryOverlayProps> = ({ onClose }) => {
  const [activeZone, setActiveZone] = useState<'left' | 'center' | 'right'>('center');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const animationFrameRef = useRef<number>();
  const rotation = useMotionValue(0);
  
  const itemsCount = PORTFOLIO_ITEMS.length;
  const theta = 360 / itemsCount;
  // Calculate radius to form a nice circle
  const radius = Math.round((CARD_WIDTH + 60) / 2 / Math.tan(Math.PI / itemsCount));

  useEffect(() => {
    let controls: any;

    const updateLoop = () => {
      const current = rotation.get();
      
      if (activeZone === 'left') {
        rotation.set(current + 0.5); 
        setFocusedIndex(null);
        animationFrameRef.current = requestAnimationFrame(updateLoop);
      } else if (activeZone === 'right') {
        rotation.set(current - 0.5); 
        setFocusedIndex(null);
        animationFrameRef.current = requestAnimationFrame(updateLoop);
      } else {
        // Center zone: snap to nearest card
        const snappedAngle = Math.round(current / theta) * theta;
        
        // Calculate which item is in front
        // rotation = -index * theta  => index = -rotation / theta
        const rawIndex = Math.round(-snappedAngle / theta);
        // Handle wrap-around for positive/negative indices
        const normalizedIndex = ((rawIndex % itemsCount) + itemsCount) % itemsCount;
        
        setFocusedIndex(normalizedIndex);

        controls = animate(rotation, snappedAngle, {
          type: "spring",
          stiffness: 40,
          damping: 15,
          mass: 1
        });
      }
    };

    // Start loop or snap
    // If switching to center, we don't need the loop, just the snap (which is triggered once)
    if (activeZone !== 'center') {
      updateLoop();
    } else {
      updateLoop(); // Run once to trigger snap
    }

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (controls) controls.stop();
    };
  }, [activeZone, itemsCount, theta, rotation]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const width = window.innerWidth;
    const x = e.clientX;
    
    // Define zones (1/3 of screen each)
    if (x < width / 3) {
      if (activeZone !== 'left') setActiveZone('left');
    } else if (x > (width * 2) / 3) {
      if (activeZone !== 'right') setActiveZone('right');
    } else {
      if (activeZone !== 'center') setActiveZone('center');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-8 right-8 z-50 text-white p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
      >
        <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <div className="absolute top-8 left-8 text-white/50 text-sm tracking-widest uppercase pointer-events-none">
        {activeZone === 'center' ? 'Focus Mode' : activeZone === 'left' ? 'Rotating Left' : 'Rotating Right'}
      </div>

      {/* 3D Scene Container */}
      <div className="relative w-full h-full flex items-center justify-center perspective-[2000px]">
        <motion.div 
          style={{ 
            rotateY: rotation,
            transformStyle: "preserve-3d" 
          }}
          className="relative w-0 h-0"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <Card3D 
              key={item.id}
              item={item}
              index={index}
              angle={index * theta}
              radius={radius}
              isFocused={focusedIndex === index}
              activeZone={activeZone}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

interface Card3DProps {
  item: PortfolioItem;
  index: number;
  angle: number;
  radius: number;
  isFocused: boolean;
  activeZone: string;
}

const Card3D: React.FC<Card3DProps> = ({ item, angle, radius, isFocused, activeZone }) => {
  const isCenter = activeZone === 'center';

  return (
    <motion.div
      className="absolute left-0 top-0 bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginLeft: -CARD_WIDTH / 2,
        marginTop: -CARD_HEIGHT / 2,
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
        backfaceVisibility: "hidden" // Hide back for cleaner look, or visible for realism
      }}
      animate={{
        scale: isCenter ? (isFocused ? 1.2 : 0.8) : 1,
        opacity: isCenter ? (isFocused ? 1 : 0.4) : 1,
        filter: isCenter ? (isFocused ? "blur(0px)" : "blur(4px)") : "blur(0px)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-primary text-xs tracking-widest uppercase mb-2">{item.category}</p>
        <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
        <div className="flex items-center gap-2 text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Project <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryOverlay;
