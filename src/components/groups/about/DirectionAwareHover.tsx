import React from 'react';
import type { ReactNode, MouseEvent } from 'react';

interface DirectionAwareHoverProps {
  children: ReactNode;
  className?: string;
}

const DirectionAwareHover: React.FC<DirectionAwareHoverProps> = ({ children, className = "" }) => {
  const [direction, setDirection] = React.useState('');

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    const directions = ['top', 'right', 'bottom', 'left'];
    const distances = [y, w - x, h - y, x];
    const minDistance = Math.min(...distances);
    const dirIndex = distances.indexOf(minDistance);

    setDirection(directions[dirIndex]);
  };

  const handleMouseLeave = () => {
    setDirection('');
  };

  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transition-all duration-300 ${direction ? 'opacity-100' : 'opacity-0'}`}/>
      {children}
    </div>
  );
};

export default DirectionAwareHover; 