import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import React from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
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

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-12 sm:py-24 px-2 sm:px-6 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-2xl overflow-hidden  sm:max-w-7xl mx-auto">
        <motion.div variants={itemVariants} initial="hidden" animate="visible" className="text-center mb-8 sm:mb-16">
          <Badge className="bg-purple-100 text-purple-800 border-purple-200 mb-4 sm:mb-6 text-xs sm:text-base">
            GUEST EXPERIENCES
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Stories from Our
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Guests</span>
          </h2>
        </motion.div>
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          {testimonials && testimonials.length > 0 ? (
            <AnimatedTestimonials testimonials={testimonials} />
          ) : (
            <div className="text-center text-gray-500">No testimonials available.</div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 