import React from 'react';
import type { TechItem } from '../../data/techStackData';
import { renderBrandIcon } from './TechBrandIcons';

interface TechNodeProps {
  item: TechItem;
  isSelected: boolean;
  onClick: (item: TechItem) => void;
}

export const TechNode: React.FC<TechNodeProps> = ({
  item,
  isSelected,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className={`p-3 rounded-2xl border transition-all duration-300 flex items-center gap-3 w-full text-left cursor-pointer ${
        isSelected
          ? 'bg-purple-100 dark:bg-[#1A1838] border-purple-500 ring-1 ring-purple-500'
          : 'bg-white dark:bg-[#0E121E] border-slate-200 dark:border-[#1E2435] hover:border-purple-500/40'
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-[#151928] border border-slate-200 dark:border-[#22293C] flex items-center justify-center flex-shrink-0">
        {renderBrandIcon(item.id, 'w-5 h-5')}
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
          {item.name}
        </h4>
        <p className="text-xs text-purple-600 dark:text-purple-400 font-mono">
          {item.subLabel}
        </p>
      </div>
    </button>
  );
};
