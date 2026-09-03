import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import type { TechItem } from '../../data/techStackData';
import { renderTechIcon } from './TechNode';

interface TechHoverTooltipProps {
  tech: TechItem | null;
}

export const TechHoverTooltip: React.FC<TechHoverTooltipProps> = ({ tech }) => {
  if (!tech) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 4, scale: 0.95 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="pointer-events-none fixed z-50 px-3.5 py-2 rounded-xl bg-surface-light/95 dark:bg-[#11141E]/95 backdrop-blur-md border border-border-light dark:border-[#262C3D] shadow-xl max-w-xs space-y-0.5 text-left"
    >
      <div className="flex items-center gap-2">
        <span className="text-accent-brand dark:text-purple-300">
          {renderTechIcon(tech.iconKey, 'w-3.5 h-3.5')}
        </span>
        <span className="font-display font-bold text-xs text-text-primary-light dark:text-text-primary-dark">
          {tech.name}
        </span>
        <span className="text-[10px] font-mono text-text-secondary-light/60 dark:text-text-secondary-dark/60 uppercase">
          • {tech.categoryLabel}
        </span>
      </div>
      <p className="text-[11px] text-text-secondary-light dark:text-text-secondary-dark/90 leading-tight">
        {tech.shortDesc}
      </p>
    </motion.div>
  );
};

interface TechClickCardProps {
  tech: TechItem | null;
  onClose: () => void;
}

export const TechClickCard: React.FC<TechClickCardProps> = ({ tech, onClose }) => {
  if (!tech) return null;

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute bottom-6 right-6 z-40 w-72 p-4 sm:p-5 rounded-2xl bg-surface-light/95 dark:bg-[#121520]/95 backdrop-blur-xl border border-border-light dark:border-[#22283A] shadow-2xl space-y-3"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-accent-brand/10 text-accent-brand dark:text-purple-300 border border-accent-brand/20">
              {renderTechIcon(tech.iconKey, 'w-4 h-4')}
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-text-primary-light dark:text-text-primary-dark">
                {tech.name}
              </h4>
              <span className="text-[10px] font-mono text-accent-brand dark:text-purple-300 uppercase font-semibold">
                {tech.categoryLabel}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:bg-elevated-light dark:hover:bg-[#1A1E2C] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Short Description */}
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark/90 leading-snug">
          {tech.shortDesc}
        </p>

        {/* Shipped Project Link */}
        {tech.usedIn.length > 0 && (
          <div className="pt-2 border-t border-border-light/60 dark:border-[#1E2332] flex items-center justify-between">
            <span className="text-[10px] font-mono text-text-secondary-light/70 dark:text-text-secondary-dark/70 uppercase">
              Used in
            </span>
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-accent-brand dark:text-purple-300 hover:underline group"
            >
              <span>{tech.usedIn[0].name}</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
