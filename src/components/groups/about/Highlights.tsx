import React from 'react';
import DirectionAwareHover from './DirectionAwareHover';
import CardSpotlight from './CardSpotlight';

export interface Highlight {
  number: string;
  title: string;
  description: string;
}

export interface HighlightsProps {
  highlights: Highlight[];
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-7xl font-medium text-center text-gray-900 mb-10 sm:mb-16">
            Discover Our Journey of Excellence & Key Achievements That Set Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <DirectionAwareHover key={index} className="rounded-lg">
                <CardSpotlight className="p-4 sm:p-6 text-center h-full">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600 mb-2">
                    {highlight.number}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </CardSpotlight>
              </DirectionAwareHover>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights; 