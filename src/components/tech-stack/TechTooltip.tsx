import React from 'react';
import type { TechItem } from '../../data/techStackData';
import { renderBrandIcon } from './TechBrandIcons';

interface TechHoverTooltipProps {
  item: TechItem | null;
  position: { x: number; y: number };
}

export const TechHoverTooltip: React.FC<TechHoverTooltipProps> = ({ item, position }) => {
  if (!item) return null;

  return (
    <div
      style={{ left: position.x, top: position.y }}
      className="fixed z-50 pointer-events-none p-3 rounded-xl bg-slate-900/90 text-white border border-slate-700 backdrop-blur-md shadow-xl max-w-xs"
    >
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 flex items-center justify-center">
          {renderBrandIcon(item.id, 'w-5 h-5')}
        </div>
        <span className="font-bold text-xs">{item.name}</span>
      </div>
      <p className="text-[11px] text-slate-300">{item.subLabel}</p>
    </div>
  );
};
