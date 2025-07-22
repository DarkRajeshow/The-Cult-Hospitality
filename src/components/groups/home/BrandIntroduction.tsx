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

const BrandIntroduction: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs sm:text-base">
                WHO WE ARE
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Crafting Extraordinary
                <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent"> Experiences</span>
              </h2>
            </div>
            <div className="space-y-3 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                The Cult Hospitality represents a paradigm shift in luxury hospitality, where every touchpoint is meticulously designed to create emotional connections and lasting memories.
              </p>
              <p>
                Our curated collection spans four distinct verticals, each reflecting our commitment to excellence, innovation, and personalized service that goes beyond traditional hospitality.
              </p>
              <p>
                We believe luxury isn't just about premium amenities—it's about creating transformative experiences that resonate with the soul and inspire the senses.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/bedroom.png"
                alt="Luxury hotel interior"
                className="w-full h-48 sm:h-96 object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Image+Unavailable';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full blur-xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-40 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroduction; 