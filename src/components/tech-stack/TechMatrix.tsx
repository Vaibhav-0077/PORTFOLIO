import React from 'react';
import { motion } from 'framer-motion';
import type { TechItem } from '../../data/techStackData';
import { TechNode } from './TechNode';
import { TechClickCard } from './TechTooltip';

interface TechMatrixProps {
  items: TechItem[];
  selectedTech: TechItem | null;
  hoveredTech: TechItem | null;
  activeCategory: string;
  onSelectTech: (tech: TechItem) => void;
  onHoverTech: (tech: TechItem | null) => void;
  onCloseClickCard: () => void;
}

export const TechMatrix: React.FC<TechMatrixProps> = ({
  items,
  selectedTech,
  hoveredTech,
  activeCategory,
  onSelectTech,
  onHoverTech,
  onCloseClickCard,
}) => {
  const filteredItems = items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const frontend = filteredItems.filter((i) => i.category === 'frontend');
  const backend = filteredItems.filter((i) => i.category === 'backend');
  const database = filteredItems.filter((i) => i.category === 'database');
  const tools = filteredItems.filter((i) => i.category === 'tools');

  const activeItem = hoveredTech || selectedTech;

  const renderGroup = (title: string, groupItems: TechItem[]) => {
    if (groupItems.length === 0) return null;

    return (
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 border-b border-border-light/60 dark:border-[#1C202C] pb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-brand" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark font-semibold">
            {title}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {groupItems.map((item) => {
            const isSelected = selectedTech?.id === item.id;
            const isHovered = hoveredTech?.id === item.id;
            const isRelated = activeItem ? activeItem.relatedIds.includes(item.id) : false;
            const isDimmed = !isSelected && !isHovered && !isRelated && hoveredTech !== null;

            return (
              <TechNode
                key={item.id}
                item={item}
                isSelected={isSelected}
                isHovered={isHovered}
                isDimmed={isDimmed}
                isRelated={isRelated}
                onClick={onSelectTech}
                onHover={onHoverTech}
                variant="matrix"
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 relative"
    >
      {renderGroup('FRONTEND', frontend)}
      {renderGroup('BACKEND', backend)}
      {renderGroup('DATABASE', database)}
      {renderGroup('TOOLS', tools)}

      {/* Floating Detail Card for Mobile Tap Selection */}
      {selectedTech && (
        <div className="mt-4">
          <TechClickCard tech={selectedTech} onClose={onCloseClickCard} />
        </div>
      )}
    </motion.div>
  );
};
