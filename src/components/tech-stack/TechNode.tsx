import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Server, 
  Database, 
  Paintbrush, 
  Code2, 
  GitBranch, 
  Cloud, 
  Network, 
  Zap, 
  CreditCard, 
  FileCode, 
  Layers
} from 'lucide-react';
import type { TechItem } from '../../data/techStackData';

interface TechNodeProps {
  item: TechItem;
  isSelected: boolean;
  isHovered: boolean;
  isDimmed: boolean;
  isRelated: boolean;
  onClick: (item: TechItem) => void;
  onHover: (item: TechItem | null) => void;
  variant?: 'canvas' | 'matrix';
}

export const renderTechIcon = (iconKey: string, sizeClass = 'w-4 h-4') => {
  switch (iconKey) {
    case 'react':
      return <Atom className={sizeClass} />;
    case 'nodejs':
      return <Server className={sizeClass} />;
    case 'mongodb':
      return <Database className={sizeClass} />;
    case 'javascript':
    case 'typescript':
      return <Code2 className={sizeClass} />;
    case 'tailwind':
    case 'htmlcss':
      return <Paintbrush className={sizeClass} />;
    case 'express':
      return <Layers className={sizeClass} />;
    case 'restapi':
      return <Network className={sizeClass} />;
    case 'postgresql':
    case 'prisma':
      return <Database className={sizeClass} />;
    case 'vite':
      return <Zap className={sizeClass} />;
    case 'git':
      return <GitBranch className={sizeClass} />;
    case 'docker':
    case 'cloudinary':
      return <Cloud className={sizeClass} />;
    case 'razorpay':
      return <CreditCard className={sizeClass} />;
    default:
      return <FileCode className={sizeClass} />;
  }
};

export const TechNode: React.FC<TechNodeProps> = ({
  item,
  isSelected,
  isHovered,
  isDimmed,
  isRelated,
  onClick,
  onHover,
  variant = 'canvas',
}) => {
  const isTier1 = item.tier === 1;
  const isTier2 = item.tier === 2;
  const isActive = isSelected || isHovered;

  if (variant === 'matrix') {
    return (
      <motion.button
        type="button"
        onClick={() => onClick(item)}
        onMouseEnter={() => onHover(item)}
        onMouseLeave={() => onHover(null)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative text-left w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
          isSelected
            ? 'bg-surface-light dark:bg-[#151922] border-accent-brand ring-1 ring-accent-brand/40 shadow-sm'
            : isHovered || isRelated
            ? 'bg-surface-light dark:bg-[#12151E] border-accent-brand/40 shadow-xs'
            : isDimmed
            ? 'bg-surface-light/40 dark:bg-[#0C0E14]/40 border-border-light/40 opacity-40'
            : 'bg-surface-light dark:bg-[#0D0F15] border-border-light dark:border-[#1C202C] hover:border-border-light/80 dark:hover:border-[#2D3548]'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${
                isTier1
                  ? 'bg-accent-brand/10 text-accent-brand dark:text-purple-300'
                  : 'bg-elevated-light dark:bg-[#161924] text-text-secondary-light dark:text-text-secondary-dark'
              }`}
            >
              {renderTechIcon(item.iconKey, isTier1 ? 'w-4 h-4' : 'w-3.5 h-3.5')}
            </div>
            <div>
              <span className="font-display font-semibold text-sm text-text-primary-light dark:text-text-primary-dark">
                {item.name}
              </span>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark/80 line-clamp-1">
                {item.shortDesc}
              </p>
            </div>
          </div>

          {item.usedIn.length > 0 && (
            <span className="text-[10px] font-mono text-text-secondary-light/70 dark:text-text-secondary-dark/70">
              {item.usedIn[0].name}
            </span>
          )}
        </div>
      </motion.button>
    );
  }

  // Desktop Canvas Node Layout (ICON + NAME ONLY)
  return (
    <motion.button
      type="button"
      onClick={() => onClick(item)}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      style={{
        left: `${item.coords.x}%`,
        top: `${item.coords.y}%`,
      }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group text-left cursor-pointer focus:outline-none transition-all duration-300 ${
        isDimmed ? 'opacity-20 grayscale-[50%] scale-95' : 'opacity-100'
      }`}
    >
      <div
        className={`relative flex items-center gap-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
          isTier1
            ? 'px-4.5 py-2.5 shadow-md'
            : isTier2
            ? 'px-3.5 py-2 shadow-xs'
            : 'px-3 py-1.5'
        } ${
          isSelected
            ? 'bg-surface-light dark:bg-[#161B26] border-2 border-accent-brand ring-4 ring-accent-brand/20 dark:ring-accent-brand/30'
            : isActive || isRelated
            ? 'bg-surface-light dark:bg-[#141822] border border-accent-brand/60 dark:border-purple-400/60 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
            : 'bg-surface-light/95 dark:bg-[#0E1117]/95 border border-border-light dark:border-[#1E2330] hover:border-accent-brand/40 dark:hover:border-border-dark'
        }`}
      >
        {/* Active Node Pulse Ring */}
        {isActive && (
          <span className="absolute -inset-1 rounded-full border border-accent-brand/30 animate-ping pointer-events-none opacity-30" />
        )}

        {/* Icon */}
        <div
          className={`flex items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-6 ${
            isTier1
              ? 'p-1.5 bg-accent-brand/10 text-accent-brand dark:text-purple-300'
              : 'p-1 text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand dark:group-hover:text-purple-300'
          }`}
        >
          {renderTechIcon(item.iconKey, isTier1 ? 'w-4 h-4' : 'w-3.5 h-3.5')}
        </div>

        {/* Label ONLY */}
        <span
          className={`font-display font-semibold tracking-tight whitespace-nowrap ${
            isTier1
              ? 'text-base text-text-primary-light dark:text-text-primary-dark font-bold'
              : isTier2
              ? 'text-xs text-text-primary-light dark:text-text-primary-dark font-medium'
              : 'text-[11px] text-text-secondary-light dark:text-text-secondary-dark font-medium'
          } ${isActive ? 'text-accent-brand dark:text-purple-300' : ''}`}
        >
          {item.name}
        </span>
      </div>
    </motion.button>
  );
};
