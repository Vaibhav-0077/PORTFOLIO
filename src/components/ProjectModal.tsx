import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle, ShieldAlert, Award } from 'lucide-react';
import type { Project } from '../utils/constants';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const { title, category, subtitle, tech, features, problem, solution, challenges, learned, liveUrl, githubUrl } = project;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#08090B]/80 dark:bg-[#000000]/85 backdrop-blur-sm cursor-zoom-out"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-4xl rounded-3xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[85vh] theme-transition"
          >
            {/* Header Info */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border-light dark:border-border-dark bg-elevated-light/40 dark:bg-[#111317]">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-accent-brand">
                  Case Study // {category}
                </span>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary-light dark:text-text-primary-dark">
                  {title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-border-light dark:border-border-dark hover:border-accent-brand dark:hover:border-accent-brand text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-brand dark:hover:text-accent-brand transition-colors duration-300 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Contents */}
            <div className="flex-grow p-6 sm:p-8 overflow-y-auto no-scrollbar space-y-8">
              {/* Top Intro Summary */}
              <div className="space-y-3">
                <p className="text-base sm:text-lg font-semibold text-accent-secondary">
                  {subtitle}
                </p>
                
                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-2">
                  {tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-elevated-light dark:bg-elevated-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid: Problem & Solution Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border-light/60 dark:border-border-dark/60 pt-6">
                {/* Problem */}
                <div className="space-y-3 p-5 rounded-2xl bg-rose-500/[0.02] dark:bg-rose-500/[0.01] border border-rose-500/10">
                  <h3 className="font-display font-bold text-sm text-rose-500 flex items-center gap-2">
                    <ShieldAlert className="w-4.5 h-4.5" />
                    The Problem
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                    {problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-3 p-5 rounded-2xl bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] border border-emerald-500/10">
                  <h3 className="font-display font-bold text-sm text-emerald-500 flex items-center gap-2">
                    <Award className="w-4.5 h-4.5" />
                    The Solution
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                    {solution}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-base text-text-primary-light dark:text-text-primary-dark">
                  Core Implementation Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {features.map((feat) => (
                    <div key={feat} className="flex gap-3 p-4 rounded-xl border border-border-light dark:border-border-dark bg-elevated-light/30 dark:bg-elevated-dark/20 text-xs sm:text-[13px] text-text-secondary-light dark:text-text-secondary-dark">
                      <CheckCircle className="w-4 h-4 text-accent-brand shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid: Challenges & Learnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border-light/60 dark:border-border-dark/60 pt-6">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-sm text-text-primary-light dark:text-text-primary-dark">
                    Technical Challenges
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                    {challenges}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-sm text-text-primary-light dark:text-text-primary-dark">
                    Key Takeaways &amp; Learnings
                  </h3>
                  <p className="text-[13px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                    {learned}
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky Actions Footer */}
            <div className="px-6 py-4 border-t border-border-light dark:border-border-dark bg-elevated-light/40 dark:bg-[#111317] flex items-center justify-end gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-border-light dark:border-border-dark hover:border-accent-brand dark:hover:border-accent-brand bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <Github className="w-4 h-4" />
                Inspect Code
              </a>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-accent-brand hover:bg-accent-brand-light text-white text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default ProjectModal;
