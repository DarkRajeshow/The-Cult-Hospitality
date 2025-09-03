import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
};

type ContactHeroProps = {
  hero: {
    heading: string;
    subheading: string;
    phone: string;
    email: string;
  };
};

export default function ContactHero({ hero }: ContactHeroProps) {
  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-20 xl:py-28 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div variants={fadeInUp}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto text-black mb-4 sm:mb-6 lg:mb-8 font-medium text-center leading-tight">
            {hero.heading}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed text-center">
            {hero.subheading}
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center my-12 sm:my-16 lg:my-20 font-medium"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black/70 tracking-wide">Call Us</p>
              <a href={`tel:${hero.phone}`} className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-gray-900">
                {hero.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-purple-600" />
            </div>
            <div className="text-left">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black/70 tracking-wide">Email Us</p>
              <a href={`mailto:${hero.email}`} className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-gray-900">
                {hero.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
