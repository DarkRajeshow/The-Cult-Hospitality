import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import React from 'react';

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

interface CallToActionContent {
  badge: string;
  heading: string[];
  gradient: string;
  description: string;
  inputPlaceholder: string;
  button: { default: string; submitted: string };
  error: { empty: string; invalid: string };
  success: string;
}

const CallToAction: React.FC<{ content: CallToActionContent }> = ({ content }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (!email) {
      setError(content.error.empty);
      return;
    }
    // Basic email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError(content.error.invalid);
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-12 h-[70vh] flex items-center justify-center sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gray-100" /> */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-4 sm:space-y-6 lg:space-y-8">
          <Badge className="bg-white/80 text-gray-800 border-gray-200 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base px-3 sm:px-4 py-1 sm:py-2">
            {content.badge}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
            {content.heading[0]}
            <span className={content.gradient}>{content.heading[1]}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto">
            {content.description}
          </p>
          <motion.form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleEmailSubmit(e)}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 max-w-md mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <input
              type="email"
              placeholder={content.inputPlaceholder}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-base lg:text-lg rounded-full border-2 border-pink-300 focus:border-amber-600 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r flex items-center justify-center from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base lg:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              disabled={isSubmitted}
            >
              {isSubmitted ? content.button.submitted : content.button.default}
              {!isSubmitted && <ArrowRight className="ml-2 h-5 w-5" />}
            </button>
          </motion.form>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 font-medium text-sm sm:text-base"
            >
              {error}
            </motion.p>
          )}
          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 font-medium text-sm sm:text-base"
            >
              {content.success}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;  