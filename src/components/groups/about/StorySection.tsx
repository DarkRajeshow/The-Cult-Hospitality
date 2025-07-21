import React from 'react';
import CardSpotlight from './CardSpotlight';

export interface StorySectionProps {
  title: string;
  content: string;
  values: string;
}

const StorySection: React.FC<StorySectionProps> = ({ title, content, values }) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-7xl font-medium text-gray-900 mb-6 md:mb-8">
                {title}
              </h2>
              <CardSpotlight className="p-4 sm:p-8">
                <p className="text-base sm:text-xl text-gray-800 mb-4 sm:mb-6 font-medium leading-relaxed">
                  {content}
                </p>
                <p className="text-base sm:text-xl text-gray-500 font-medium leading-relaxed">
                  {values}
                </p>
              </CardSpotlight>
            </div>
            <div className="lg:order-first h-full flex items-center justify-center bg-black rounded-lg">
              <img src="/assets/images/story.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection; 