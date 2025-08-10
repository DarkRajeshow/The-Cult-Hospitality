import React from 'react';
import CardSpotlight from './CardSpotlight';

export interface MissionValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface MissionSectionProps {
  title: string;
  description: string;
  highlight: string;
  values: MissionValue[];
}

const MissionSection: React.FC<MissionSectionProps> = ({ title, description, highlight, values }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
            {description}
          </p>
          <div className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 lg:mb-16">
            {highlight}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <CardSpotlight key={index} className="p-4 sm:p-6 text-center">
                <value.icon className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1px] lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 text-blue-600" />
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 