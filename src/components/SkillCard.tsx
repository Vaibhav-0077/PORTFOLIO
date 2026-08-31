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
      className="group relative p-5.5 rounded-2xl border border-border-light dark:border-[#1E222B] bg-surface-light dark:bg-[#101217] hover:border-accent-brand/40 dark:hover:border-accent-brand/60 dark:hover:bg-[#141722] shadow-sm hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.12)] transition-all duration-300 overflow-hidden"
    >
      {/* Background Subtle Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-brand/0 to-accent-brand/[0.03] dark:to-accent-brand/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing Corner Highlight */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-brand/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Hover Sparkle Accent */}
      <div className="absolute top-4 right-4 text-accent-brand dark:text-purple-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        <Sparkles className="w-3.5 h-3.5" />
      </div>

      <div className="relative z-10 space-y-1.5">
        {/* Skill Title */}
        <h4 className="font-display font-bold text-text-primary-light dark:text-text-primary-dark dark:group-hover:text-purple-300 transition-colors duration-300">
          {name}
        </h4>
        
        {/* Skill description / context */}
        <p className="text-xs sm:text-[13px] text-text-secondary-light dark:text-text-secondary-dark/90 leading-relaxed font-sans">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};
export default SkillCard;
