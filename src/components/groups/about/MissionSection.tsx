import React from 'react';
import CardSpotlight from './CardSpotlight';

export interface MissionValue {
  icon: React.ElementType;
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
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-7xl font-medium text-gray-900 mb-6 md:mb-8">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 leading-relaxed">
            {description}
          </p>
          <div className="text-lg sm:text-2xl md:text-3xl font-medium mb-8 sm:mb-16">
            {highlight}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <CardSpotlight key={index} className="p-4 sm:p-6 text-center">
                <value.icon strokeWidth={1} className="size-12 sm:size-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl sm:text-3xl font-medium text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 