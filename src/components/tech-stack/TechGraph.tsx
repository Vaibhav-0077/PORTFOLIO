import React, { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { TechItem } from '../../data/techStackData';
import { TECH_CONNECTIONS } from '../../data/techStackData';
import { TechNode } from './TechNode';
import { TechHoverTooltip, TechClickCard } from './TechTooltip';

interface TechGraphProps {
  items: TechItem[];
  selectedTech: TechItem | null;
  hoveredTech: TechItem | null;
  activeCategory: string;
  onSelectTech: (tech: TechItem) => void;
  onHoverTech: (tech: TechItem | null) => void;
  onCloseClickCard: () => void;
}

export const TechGraph: React.FC<TechGraphProps> = ({
  items,
  selectedTech,
  hoveredTech,
  activeCategory,
  onSelectTech,
  onHoverTech,
  onCloseClickCard,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Parallax and Tooltip position handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Smooth 3D tilt coordinates
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePos({ x, y });

    // Floating Tooltip coordinates
    setTooltipPos({
      x: e.clientX + 14,
      y: e.clientY + 14,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    onHoverTech(null);
  };

  // Central Hub Coordinates
  const corePos = { x: 50, y: 48 };
  const activeItem = hoveredTech || selectedTech;

  const itemMap = useMemo(() => {
    const map = new Map<string, TechItem>();
    items.forEach((item) => map.set(item.id, item));
    return map;
  }, [items]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[540px] sm:h-[600px] rounded-3xl border border-border-light/80 dark:border-[#1A1E29] bg-surface-light/40 dark:bg-[#090B10] overflow-hidden select-none"
    >
      {/* Subtle Background Grid & Light Ambient Pulse */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-accent-brand/[0.03] dark:bg-purple-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Interactive Parallax Layer */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', damping: 30, stiffness: 180, mass: 0.6 }}
        className="relative w-full h-full"
      >
        {/* SVG Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <linearGradient id="activeSpineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {TECH_CONNECTIONS.map((conn, idx) => {
            const isFromCore = conn.from === 'core';
            const fromItem = isFromCore ? null : itemMap.get(conn.from);
            const toItem = itemMap.get(conn.to);

            if (!toItem || (!isFromCore && !fromItem)) return null;

            const startX = isFromCore ? corePos.x : fromItem!.coords.x;
            const startY = isFromCore ? corePos.y : fromItem!.coords.y;
            const endX = toItem.coords.x;
            const endY = toItem.coords.y;

            const isConnected =
              activeItem &&
              (activeItem.id === conn.to ||
                activeItem.id === conn.from ||
                (isFromCore && activeItem.tier === 1 && activeItem.id === conn.to));

            return (
              <line
                key={`${conn.from}-${conn.to}-${idx}`}
                x1={`${startX}%`}
                y1={`${startY}%`}
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke={isConnected ? 'url(#activeSpineGrad)' : 'currentColor'}
                strokeWidth={isConnected ? 1.5 : 0.75}
                strokeDasharray={isConnected ? '4 2' : 'none'}
                className={`transition-all duration-500 ${
                  isConnected
                    ? 'opacity-100'
                    : 'text-text-secondary-light/10 dark:text-text-secondary-dark/10 opacity-40'
                }`}
              />
            );
          })}
        </svg>

        {/* Layered Geometric Central Core */}
        <div
          style={{
            left: `${corePos.x}%`,
            top: `${corePos.y}%`,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer Subtle Orbit Ring */}
            <div className="absolute w-44 h-44 rounded-full border border-border-light/40 dark:border-[#1E2332]/60 animate-spin pointer-events-none" style={{ animationDuration: '35s' }} />
            
            {/* Middle Ambient Pulse Ring */}
            <div className="absolute w-32 h-32 rounded-full border border-accent-brand/20 dark:border-purple-500/20 animate-ping pointer-events-none opacity-20" style={{ animationDuration: '4s' }} />

            {/* Core Box */}
            <div className="relative px-6 py-4 rounded-2xl bg-surface-light/95 dark:bg-[#0E1118]/95 border border-border-light dark:border-[#222838] shadow-lg backdrop-blur-md text-center space-y-0.5">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent-brand dark:text-purple-300 font-semibold block">
                FULL-STACK
              </span>
              <span className="font-display font-bold text-sm tracking-tight text-text-primary-light dark:text-text-primary-dark block">
                DEVELOPER
              </span>
            </div>
          </div>
        </div>

        {/* Technology Nodes */}
        {items.map((item) => {
          const isSelected = selectedTech?.id === item.id;
          const isHovered = hoveredTech?.id === item.id;
          const isRelated = activeItem ? activeItem.relatedIds.includes(item.id) : false;
          const isCategoryMatch = activeCategory === 'all' || item.category === activeCategory;
          const isDimmed = !isCategoryMatch && !isSelected && !isHovered && !isRelated;

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
              variant="canvas"
            />
          );
        })}
      </motion.div>

      {/* Floating Hover Tooltip */}
      {hoveredTech && (
        <div
          style={{
            position: 'fixed',
            left: tooltipPos.x,
            top: tooltipPos.y,
            pointerEvents: 'none',
            zIndex: 60,
          }}
        >
          <TechHoverTooltip tech={hoveredTech} />
        </div>
      )}

      {/* Floating Click Detail Card */}
      {selectedTech && (
        <TechClickCard tech={selectedTech} onClose={onCloseClickCard} />
      )}
    </div>
  );
};
