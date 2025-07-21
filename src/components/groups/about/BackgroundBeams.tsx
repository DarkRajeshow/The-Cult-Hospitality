import React from 'react';
import type { ReactNode } from 'react';

interface BackgroundBeamsProps {
  children: ReactNode;
  className?: string;
}

const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: '0%',
                right: '0%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundBeams; 