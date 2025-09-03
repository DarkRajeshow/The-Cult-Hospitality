import React from 'react';

export interface AboutHeroProps {
  subheading: string;
  description: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ subheading, description }) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-4 sm:mb-6 lg:mb-8 font-medium leading-tight">
            {subheading}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="w-full shadow-sm bg-black flex items-center justify-center rounded-lg overflow-hidden">
            <img 
              src="/assets/images/family.png" 
              alt="The Cult Hospitality Family" 
              className="w-full h-auto object-contain max-h-96 sm:max-h-[500px] lg:max-h-[600px]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero; 