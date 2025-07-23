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
      className="py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div variants={fadeInUp}>
          <h1 className="text-3xl sm:text-4xl md:text-7xl max-w-4xl mx-auto text-black mb-6 md:mb-8 font-medium text-center">
            {hero.heading}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-center">
            {hero.subheading}
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-12 justify-center items-center my-20 font-medium"
        >
          <div className="flex items-center space-x-3">
            <div className="size-16 sm:size-20 bg-blue-100 rounded-full flex items-center justify-center">
              <Phone className="size-6 sm:size-7 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-lg sm:text-xl text-black/70 tracking-wide">Call Us</p>
              <a href={`tel:${hero.phone}`} className="text-xl sm:text-2xl font-medium text-gray-900">
                {hero.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="size-16 sm:size-20 bg-purple-100 rounded-full flex items-center justify-center">
              <Mail className="size-6 sm:size-7 text-purple-600" />
            </div>
            <div className="text-left">
              <p className="text-lg sm:text-xl text-black/70 tracking-wide">Email Us</p>
              <a href={`mailto:${hero.email}`} className="text-xl sm:text-2xl font-medium text-gray-900">
                {hero.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
