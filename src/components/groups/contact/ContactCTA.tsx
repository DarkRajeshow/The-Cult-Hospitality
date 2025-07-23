import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

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

type ContactCTAProps = {
  cta: {
    heading: string;
    subtext: string;
    phone: string;
    email: string;
  };
};

export default function ContactCTA({ cta }: ContactCTAProps) {
  return (
    <motion.section
      className="py-20 px-4 min-h-screen flex items-center bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeInUp}>
          <h3 className="text-3xl md:text-7xl font-semibold text-gray-900 mb-6">
            {cta.heading}
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {cta.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${cta.phone}`} className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
            <a href={`mailto:${cta.email}`} className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
