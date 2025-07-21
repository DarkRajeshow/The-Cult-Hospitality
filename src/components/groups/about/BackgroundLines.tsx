import React from 'react';
import type { ReactNode } from 'react';

interface BackgroundLinesProps {
  children: ReactNode;
  className?: string;
}

const BackgroundLines: React.FC<BackgroundLinesProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 10 }).map((_, i) => {
            let top, left;
            do {
              top = Math.random() * 100;
              left = Math.random() * 100;
            } while (
              top > 40 && top < 60 &&
              left > 40 && left < 60
            );
            return (
              <div
                key={i}
                className="absolute hidden h-[2px] bg-gradient-to-r from-transparent bg-blue-200"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${Math.random() * 50 + 150}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLines; 