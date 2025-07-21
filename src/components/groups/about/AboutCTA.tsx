import React from 'react';
import { CheckCircle } from 'lucide-react';

export interface AboutCTAProps {
  cta: {
    heading: string;
    subtext: string;
    buttonText: string;
  };
}

const AboutCTA: React.FC<AboutCTAProps> = ({ cta }) => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {cta.heading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
            {cta.subtext}
          </p>
          <button className="w-full sm:w-auto inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            <CheckCircle className="w-5 h-5 mr-2" />
            {cta.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA; 