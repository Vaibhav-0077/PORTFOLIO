import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Box, ArrowRight } from 'lucide-react';
import type { TechItem } from '../../data/techStackData';
import { renderBrandIcon } from './TechBrandIcons';

interface TechGraphProps {
  items: TechItem[];
  selectedTech: TechItem;
  activeCategory: string;
  onSelectTech: (tech: TechItem) => void;
}

// 10 orbital nodes coordinates (percentages relative to canvas)
// Arranged clockwise starting from 12 o'clock (React)
const ORBIT_POSITIONS: Record<string, { x: number; y: number }> = {
  react: { x: 50, y: 14 },
  javascript: { x: 72, y: 22 },
  nodejs: { x: 78, y: 42 },
  express: { x: 73, y: 63 },
  cloudinary: { x: 62, y: 82 },
  mongodb: { x: 44, y: 86 },
  git: { x: 25, y: 80 },
  htmlcss: { x: 16, y: 60 },
  tailwind: { x: 16, y: 40 },
  typescript: { x: 25, y: 22 },
};

export const TechGraph: React.FC<TechGraphProps> = ({
  items,
  selectedTech,
  activeCategory,
  onSelectTech,
}) => {
  // Center Hub position
  const centerPos = { x: 50, y: 50 };

  // 10 orbital items
  const orbitalItems = useMemo(() => {
    return items.filter((item) => ORBIT_POSITIONS[item.id] !== undefined);
  }, [items]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Radial Orbit Canvas */}
      <div className="relative w-full h-[520px] sm:h-[570px] rounded-3xl border border-slate-200/80 dark:border-[#1E2435] bg-white/70 dark:bg-[#07090F]/90 backdrop-blur-xl overflow-hidden select-none shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
        {/* Ambient Glows & Background Grid */}
        <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-purple-500/[0.07] dark:bg-purple-600/[0.12] rounded-full blur-[90px] pointer-events-none" />

        {/* SVG Radial Connector Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <linearGradient id="activeBeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Dotted Circular Orbit Ring */}
          <circle
            cx="50%"
            cy="50%"
            r="38%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="text-slate-300/70 dark:text-purple-500/15"
          />

          {orbitalItems.map((item) => {
            const pos = ORBIT_POSITIONS[item.id];
            if (!pos) return null;
            const isSelected = selectedTech.id === item.id;
            const isCategoryMatch = activeCategory === 'all' || item.category === activeCategory;

            return (
              <g key={item.id}>
                {/* Connector Line from Center to Node */}
                <line
                  x1={`${centerPos.x}%`}
                  y1={`${centerPos.y}%`}
                  x2={`${pos.x}%`}
                  y2={`${pos.y}%`}
                  stroke={isSelected ? 'url(#activeBeam)' : 'currentColor'}
                  strokeWidth={isSelected ? '2' : '1'}
                  strokeDasharray={isSelected ? undefined : '3 4'}
                  className={
                    isSelected
                      ? 'filter drop-shadow-[0_0_6px_rgba(168,85,247,0.7)]'
                      : isCategoryMatch
                      ? 'text-slate-300 dark:text-purple-500/25'
                      : 'text-slate-200 dark:text-slate-800/40'
                  }
                />

                {/* Glowing Dot near Node */}
                <circle
                  cx={`${pos.x}%`}
                  cy={`${pos.y}%`}
                  r={isSelected ? '4' : '2.5'}
                  fill={isSelected ? '#A855F7' : isCategoryMatch ? '#8B5CF6' : '#64748B'}
                  className={isSelected ? 'filter drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]' : ''}
                />
              </g>
            );
          })}
        </svg>

        {/* Central Core: FULL STACK DEVELOPER */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          {/* Outer Pulsing Glow Rings */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[180px] h-[180px] rounded-full border border-purple-500/20 dark:border-purple-500/30 animate-ping opacity-20" />
            <div className="absolute w-[160px] h-[160px] rounded-full border border-purple-500/25 dark:border-purple-400/20" />

            {/* Inner Glowing Core Badge */}
            <div className="w-[124px] h-[124px] rounded-full border border-purple-400/40 dark:border-purple-500/50 bg-gradient-to-b from-purple-50 via-white to-slate-100 dark:from-[#1A1435] dark:via-[#101222] dark:to-[#090C16] shadow-[0_0_35px_rgba(139,92,246,0.25)] dark:shadow-[0_0_45px_rgba(139,92,246,0.35)] flex flex-col items-center justify-center text-center p-2">
              <span className="font-display font-extrabold text-[15px] sm:text-base leading-tight tracking-wider text-slate-900 dark:text-white">
                FULL
              </span>
              <span className="font-display font-extrabold text-[15px] sm:text-base leading-tight tracking-wider text-slate-900 dark:text-white">
                STACK
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] font-bold tracking-[0.22em] text-purple-600 dark:text-purple-400 mt-1 uppercase">
                DEVELOPER
              </span>
            </div>
          </div>
        </div>

        {/* Orbital Tech Nodes */}
        {orbitalItems.map((item) => {
          const pos = ORBIT_POSITIONS[item.id];
          if (!pos) return null;
          const isSelected = selectedTech.id === item.id;
          const isCategoryMatch = activeCategory === 'all' || item.category === activeCategory;

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onSelectTech(item)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer focus:outline-none transition-all duration-300 ${
                isCategoryMatch ? 'opacity-100' : 'opacity-35 hover:opacity-90'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* Node Icon Box */}
                <div
                  className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-purple-100 dark:bg-[#1A1838] border-2 border-purple-500 shadow-[0_0_24px_rgba(139,92,246,0.55)] ring-2 ring-purple-500/50'
                      : 'bg-white dark:bg-[#111422] border border-slate-200 dark:border-[#1F263A] group-hover:border-purple-500/50 shadow-sm'
                  }`}
                >
                  {renderBrandIcon(item.id, 'w-5 h-5 sm:w-6 sm:h-6')}

                  {/* Active Indicator Ring */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeOrbitGlow"
                      className="absolute -inset-1 rounded-2xl border border-purple-400/60 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </div>

                {/* Node Label & Subtitle */}
                <div className="text-left select-none hidden min-[480px]:block">
                  <span
                    className={`block text-xs sm:text-[13px] font-bold leading-tight transition-colors ${
                      isSelected
                        ? 'text-purple-600 dark:text-purple-300'
                        : 'text-slate-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-300'
                    }`}
                  >
                    {item.name}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight">
                    {item.subLabel}
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Floating Project Highlight Strip Under Canvas */}
      <div className="w-full rounded-2xl border border-slate-200/80 dark:border-[#1E2435] bg-white/90 dark:bg-[#0B0E17]/85 backdrop-blur-xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        {/* Left Side: Callout text */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
            <Box className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-[13px]">
            <span className="text-slate-700 dark:text-slate-300">
              These technologies power real-world projects.{' '}
            </span>
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              See them in action &rarr;
            </a>
          </div>
        </div>

        {/* Right Side: Capsule Project Preview */}
        <a
          href="#projects"
          onClick={scrollToProjects}
          className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-purple-500/20 bg-slate-50 dark:bg-[#131726] hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200 group cursor-pointer"
        >
          {/* Circular project badge */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-[10px] font-extrabold text-white">
            LJ
          </div>

          {/* Project titles */}
          <div className="text-left">
            <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              Lush Jewels
            </span>
            <span className="block text-[10px] text-slate-500 dark:text-slate-400">
              Full-Stack E-Commerce
            </span>
          </div>

          {/* Mini Tech Stack Icons */}
          <div className="flex items-center gap-1.5 pl-1.5 border-l border-slate-200 dark:border-slate-700">
            <div className="w-4 h-4 rounded flex items-center justify-center">
              {renderBrandIcon('react', 'w-3.5 h-3.5')}
            </div>
            <div className="w-4 h-4 rounded flex items-center justify-center">
              {renderBrandIcon('nodejs', 'w-3.5 h-3.5')}
            </div>
            <div className="w-4 h-4 rounded flex items-center justify-center">
              {renderBrandIcon('express', 'w-3.5 h-3.5')}
            </div>
            <div className="w-4 h-4 rounded flex items-center justify-center">
              {renderBrandIcon('mongodb', 'w-3.5 h-3.5')}
            </div>
            <div className="w-4 h-4 rounded flex items-center justify-center">
              {renderBrandIcon('cloudinary', 'w-3.5 h-3.5')}
            </div>
          </div>

          {/* Arrow */}
          <div className="w-5 h-5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-300 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all">
            <ArrowRight className="w-3 h-3" />
          </div>
        </a>
      </div>
    </div>
  );
};
