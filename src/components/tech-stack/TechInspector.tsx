import React from 'react';
import type { TechItem } from '../../data/techStackData';
import { renderTechIcon } from './TechNode';

interface TechInspectorProps {
  selectedTech: TechItem;
}

export const TechInspector: React.FC<TechInspectorProps> = ({ selectedTech }) => {
  return (
    <div className="p-4 rounded-xl border border-border-light dark:border-[#1E2330] bg-surface-light dark:bg-[#0E1118]">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-accent-brand/10 text-accent-brand">
          {renderTechIcon(selectedTech.iconKey)}
        </div>
        <div>
          <h4 className="font-display font-bold text-sm text-text-primary-light dark:text-text-primary-dark">
            {selectedTech.name}
          </h4>
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
            {selectedTech.shortDesc}
          </p>
        </div>
      </div>
    </div>
  );
};
