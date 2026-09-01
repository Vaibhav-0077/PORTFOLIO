import React from 'react';
import { Sparkles } from 'lucide-react';

const MARQUEE_ITEMS = [
  'UI/UX Craftsmanship',
  'Scalable APIs',
  'Clean Code',
  'MERN Stack',
  'Performance Optimization',
  '3D Web Experiences',
  'Responsive Design',
  'System Architecture',
];

export const Marquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-elevated-light dark:bg-[#0A0C10] border-y border-border-light dark:border-[#1E222B] py-3.5 select-none relative z-20">
      {/* Gradient masks for smooth fading edges */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-elevated-light dark:from-[#0A0C10] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-elevated-light dark:from-[#0A0C10] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center">
        {/* We map the array twice to create a seamless infinite loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 mx-6 shrink-0 group cursor-default"
          >
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand dark:group-hover:text-purple-400 transition-colors duration-300">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-accent-brand/40 dark:text-purple-500/40 group-hover:text-accent-brand dark:group-hover:text-purple-400 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
