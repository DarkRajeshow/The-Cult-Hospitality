import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target, Sparkles } from 'lucide-react';

interface WhyWorkWithUsProps {
  content: {
    heading: string[];
    description: string;
    values: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

const WhyWorkWithUs: React.FC<WhyWorkWithUsProps> = ({ content }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-8 h-8" />;
      case 'Lightbulb':
        return <Lightbulb className="w-8 h-8" />;
      case 'Target':
        return <Target className="w-8 h-8" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8" />;
      default:
        return <Users className="w-8 h-8" />;
    }
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.heading[0]} <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">{content.heading[1]}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-white/20"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-rose-100 rounded-xl flex items-center justify-center text-amber-700">
                  {getIcon(value.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
