import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import type { TechItem } from '../../data/techStackData';
import { renderBrandIcon } from './TechBrandIcons';

interface TechInspectorProps {
  selectedTech: TechItem;
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
  onClose?: () => void;
}

export const TechInspector: React.FC<TechInspectorProps> = ({
  selectedTech,
  currentIndex,
  totalCount,
  onPrev,
  onNext,
  onClose,
}) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-[#1E2435] bg-white/90 dark:bg-[#0B0E17]/85 backdrop-blur-xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.45)] transition-all duration-300">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTech.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Top Bar: Category Pill & Close Button */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/25">
              {selectedTech.categoryLabel}
            </span>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close details"
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Hero: Large Icon + Title + Subtitle + Description */}
          <div className="space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-slate-100 dark:from-[#181630] dark:to-[#0E121E] border border-purple-500/30 flex items-center justify-center shadow-[0_0_24px_rgba(139,92,246,0.22)]">
              {renderBrandIcon(selectedTech.id, 'w-9 h-9')}
            </div>
            
            <div>
              <h3 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-slate-900 dark:text-white">
                {selectedTech.name}
              </h3>
              <p className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                {selectedTech.subLabel}
              </p>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {selectedTech.description}
            </p>
          </div>

          {/* Section: What I use it for */}
          <div className="space-y-2.5 pt-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 block">
              What I use it for
            </span>
            <div className="space-y-2">
              {selectedTech.useCases.map((useCase, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {useCase}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Used in Projects */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 block">
              Used in Projects
            </span>
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="p-3 rounded-2xl border border-purple-500/20 bg-purple-50/50 dark:bg-purple-950/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-300 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {selectedTech.project.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    {selectedTech.project.type}
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:translate-x-0.5 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer: Pagination & Prev/Next Arrows */}
      <div className="pt-6 mt-4 border-t border-slate-200/80 dark:border-[#1E2435] flex items-center justify-between">
        <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
          {currentIndex + 1} of {totalCount}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous technology"
            className="w-8 h-8 rounded-xl border border-slate-300 dark:border-[#22293C] bg-slate-50 dark:bg-[#131724] text-slate-600 dark:text-slate-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next technology"
            className="w-8 h-8 rounded-xl border border-slate-300 dark:border-[#22293C] bg-slate-50 dark:bg-[#131724] text-slate-600 dark:text-slate-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
