import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import React from 'react';

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={itemVariants} initial="hidden" animate="visible" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base px-3 sm:px-4 py-1 sm:py-2">
            WHY THE CULT HOSPITALITY?
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
            The Difference is in the
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Details</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-10 lg:w-10 text-gray-700 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-gray-500">No features available.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 