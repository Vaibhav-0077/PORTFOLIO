import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface SectionHeaderProps {
  number: string;
  title: string;
  highlightText?: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, highlightText, subtitle }) => {
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center text-center">
      {/* Background Glow / Blur element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[400px] bg-purple-600/[0.08] dark:bg-purple-500/[0.12] rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="relative z-10 flex flex-col items-center space-y-4 sm:space-y-6 max-w-3xl px-4"
      >
        {/* Eyebrow Numbering */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 dark:bg-purple-900/20 backdrop-blur-sm">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-purple-600 dark:text-purple-400">
            {number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
        </div>
        
        {/* Main Title */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
          {title}{' '}
          {highlightText && (
            <span className="block mt-2 sm:mt-0 sm:inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-cyan-400">
              {highlightText}
            </span>
          )}
        </h2>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 font-sans max-w-2xl leading-relaxed mt-4 sm:mt-6">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
};
