import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import React from 'react';

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  features: Feature[];
}

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ features }) => {
  return (
    <section className="py-12 sm:py-24 px-2 sm:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={itemVariants} initial="hidden" animate="visible" className="text-center mb-8 sm:mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 mb-4 sm:mb-6 text-xs sm:text-base">
            WHY THE CULT HOSPITALITY?
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            The Difference is in the
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Details</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
          {features && features.length > 0 ? (
            features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center group"
                >
                  <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    <Icon className="h-7 w-7 sm:h-10 sm:w-10 text-gray-700 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-3 text-center text-gray-500">No features available.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 