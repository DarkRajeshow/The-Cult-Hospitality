import { motion, type Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import React from 'react';

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier for 'easeInOut'
    },
  },
};

interface BrandIntroductionContent {
  badge: string;
  heading: string[];
  gradient: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

const BrandIntroduction: React.FC<{ content: BrandIntroductionContent }> = ({ content }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs sm:text-sm lg:text-base px-3 sm:px-4 py-1 sm:py-2">
                {content.badge}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                {content.heading[0]}
                <span className={content.gradient}>{content.heading[1]}</span>
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              {content.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="relative mt-8 lg:mt-0">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={content.image}
                alt={content.imageAlt}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Image+Unavailable';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full blur-xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-40 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroduction; 