import React from 'react';
import { motion } from 'framer-motion';

interface CareersHeroProps {
  content: {
    heading: string[];
    subtitle: string;
  };
}

const CareersHero: React.FC<CareersHeroProps> = ({ content }) => {
  return (
    <section className="relative px-6 py-24 overflow-hidden h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full blur-3xl transform -rotate-6 scale-150"></div>
      <div className="relative max-w-4xl top-1/2 -translate-y-1/2 mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black/80 mb-6 leading-tight">
            {content.heading[0]}
            <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent"> {content.heading[1]}</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-black/80/90 max-w-2xl mx-auto leading-relaxed"
        >
          {content.subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default CareersHero;
