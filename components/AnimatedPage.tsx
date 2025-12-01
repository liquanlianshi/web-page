import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPageProps } from '../types';

const variants = {
  initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -20, filter: 'blur(10px)' },
};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for smooth feel
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;