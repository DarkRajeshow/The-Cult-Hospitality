import React from 'react';
import type { ReactNode } from 'react';

interface ColorfulTextProps {
  children: ReactNode;
  className?: string;
}

const ColorfulText: React.FC<ColorfulTextProps> = ({ children, className = "" }) => {
  return (
    <span className={`bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default ColorfulText; 