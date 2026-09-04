import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Code2, Rocket, Zap } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import { TECH_ITEMS, CATEGORY_FILTERS } from '../data/techStackData';
import type { TechItem } from '../data/techStackData';
import { TechGraph } from '../components/tech-stack/TechGraph';
import { TechInspector } from '../components/tech-stack/TechInspector';

export const Skills: React.FC = () => {
  // Default to React (index 0) matching the mockup
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_ITEMS[0]);
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const currentIndex = TECH_ITEMS.findIndex((item) => item.id === selectedTech.id);

  const handlePrevTech = () => {
    const nextIdx = (currentIndex - 1 + TECH_ITEMS.length) % TECH_ITEMS.length;
    const nextItem = TECH_ITEMS[nextIdx];
    setSelectedTech(nextItem);
    setActiveCategory(nextItem.category);
  };

  const handleNextTech = () => {
    const nextIdx = (currentIndex + 1) % TECH_ITEMS.length;
    const nextItem = TECH_ITEMS[nextIdx];
    setSelectedTech(nextItem);
    setActiveCategory(nextItem.category);
  };

  const handleSelectTech = (tech: TechItem) => {
    setSelectedTech(tech);
    setActiveCategory(tech.category);
  };

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    // Focus the first technology belonging to that category
    const match = TECH_ITEMS.find((item) => item.category === catId);
    if (match) {
      setSelectedTech(match);
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden theme-transition bg-slate-50/50 dark:bg-[#07090F]">
      {/* Subtle Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-purple-500/[0.04] dark:bg-purple-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Top Centered Category Navigation Pills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full border border-slate-200/90 dark:border-[#1E2435] bg-white/80 dark:bg-[#0E121E]/80 backdrop-blur-xl shadow-sm">
            {CATEGORY_FILTERS.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-purple-700 dark:text-purple-200 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="opacity-70">{cat.number}</span>
                    <span>{cat.label}</span>
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-full bg-white dark:bg-gradient-to-r dark:from-purple-900/60 dark:to-indigo-900/60 border border-purple-300 dark:border-purple-500/40 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Main 3-Column Layout Matching Mockup Exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* COLUMN 1: Intro + 4 Metrics Cards (3 cols) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6 flex flex-col justify-between"
          >
            {/* Header info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-purple-600 dark:text-purple-400">
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:text-purple-400" />
                <span>TECHNOLOGY / TOOLKIT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[38px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Tools I use to turn{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400">
                  ideas
                </span>{' '}
                into products.
              </h2>

              <p className="text-xs sm:text-[13px] text-slate-600 dark:text-[#8F9CAE] leading-relaxed font-sans">
                From responsive interfaces to backend systems, I work across the stack to build reliable, scalable digital experiences.
              </p>
            </div>

            {/* 4 Feature / Metrics Cards */}
            <div className="space-y-3 pt-2">
              {/* Card 1: 20+ Technologies */}
              <div className="p-3.5 rounded-2xl border border-slate-200/80 dark:border-[#1E2435] bg-white/80 dark:bg-[#0D101A]/80 backdrop-blur-md flex items-center gap-3.5 hover:border-purple-500/40 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                    20+
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-[#8F9CAE]">
                    Technologies
                  </p>
                </div>
              </div>

              {/* Card 2: Full Stack End-to-End Development */}
              <div className="p-3.5 rounded-2xl border border-slate-200/80 dark:border-[#1E2435] bg-white/80 dark:bg-[#0D101A]/80 backdrop-blur-md flex items-center gap-3.5 hover:border-purple-500/40 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                    Full Stack
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-[#8F9CAE]">
                    End-to-End Development
                  </p>
                </div>
              </div>

              {/* Card 3: Real Projects Built & Deployed */}
              <div className="p-3.5 rounded-2xl border border-slate-200/80 dark:border-[#1E2435] bg-white/80 dark:bg-[#0D101A]/80 backdrop-blur-md flex items-center gap-3.5 hover:border-purple-500/40 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                    Real Projects
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-[#8F9CAE]">
                    Built & Deployed
                  </p>
                </div>
              </div>

              {/* Card 4: Always Learning Exploring New Technologies */}
              <div className="p-3.5 rounded-2xl border border-slate-200/80 dark:border-[#1E2435] bg-white/80 dark:bg-[#0D101A]/80 backdrop-blur-md flex items-center gap-3.5 hover:border-purple-500/40 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                    Always Learning
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-[#8F9CAE]">
                    Exploring New Technologies
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Radial Orbit Graph + Bottom Floating Project Bar (6 cols) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 w-full"
          >
            <TechGraph
              items={TECH_ITEMS}
              selectedTech={selectedTech}
              activeCategory={activeCategory}
              onSelectTech={handleSelectTech}
            />
          </motion.div>

          {/* COLUMN 3: Right Inspector Detail Card (3 cols) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 w-full"
          >
            <TechInspector
              selectedTech={selectedTech}
              currentIndex={currentIndex >= 0 ? currentIndex : 0}
              totalCount={TECH_ITEMS.length}
              onPrev={handlePrevTech}
              onNext={handleNextTech}
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
