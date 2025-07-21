import React from 'react';

export interface AboutHeroProps {
  subheading: string;
  description: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ subheading, description }) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-7xl text-black mb-6 md:mb-8 font-medium">
            {subheading}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="w-full shadow-dm bg-black flex items-center justify-center rounded-lg overflow-hidden">
            <img src="/assets/images/family.png" alt="" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero; 