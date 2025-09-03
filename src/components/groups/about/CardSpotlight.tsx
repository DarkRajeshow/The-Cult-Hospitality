import React from 'react';
import type { ReactNode } from 'react';

interface CardSpotlightProps {
  children: ReactNode;
  className?: string;
}

const CardSpotlight: React.FC<CardSpotlightProps> = ({ children, className = "" }) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:shadow-sm ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CardSpotlight; 