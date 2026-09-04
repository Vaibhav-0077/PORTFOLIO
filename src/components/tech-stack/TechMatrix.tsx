import React from 'react';
import type { TechItem } from '../../data/techStackData';
import { TechNode } from './TechNode';

interface TechMatrixProps {
  items: TechItem[];
  selectedTech: TechItem | null;
  activeCategory: string;
  onSelectTech: (tech: TechItem) => void;
}

export const TechMatrix: React.FC<TechMatrixProps> = ({
  items,
  selectedTech,
  activeCategory,
  onSelectTech,
}) => {
  const filtered = items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {filtered.map((item) => (
        <TechNode
          key={item.id}
          item={item}
          isSelected={selectedTech?.id === item.id}
          onClick={onSelectTech}
        />
      ))}
    </div>
  );
};
