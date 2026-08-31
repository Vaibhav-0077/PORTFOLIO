import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { itemReveal } from '../utils/animations';

interface SkillCardProps {
  name: string;
  desc: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, desc }) => {
  return (
    <motion.div
      variants={itemReveal}
      className="group relative p-5 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-accent-brand/40 dark:hover:border-accent-brand/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      {/* Background Subtle Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-brand/0 to-accent-brand/[0.02] dark:to-accent-brand/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Hover Sparkle Accent */}
      <div className="absolute top-4 right-4 text-accent-brand opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        <Sparkles className="w-3.5 h-3.5" />
      </div>

      <div className="relative z-10 space-y-1">
        {/* Skill Title */}
        <h4 className="font-display font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand transition-colors duration-300">
          {name}
        </h4>
        
        {/* Skill description / context */}
        <p className="text-xs sm:text-[13px] text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};
