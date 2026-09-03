import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeInUp } from '../utils/animations';
import { TECH_ITEMS, CATEGORY_FILTERS } from '../data/techStackData';
import type { TechItem } from '../data/techStackData';
import { TechGraph } from '../components/tech-stack/TechGraph';
import { TechMatrix } from '../components/tech-stack/TechMatrix';

export const Skills: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden theme-transition bg-elevated-light/30 dark:bg-[#07090D]">
      {/* Background Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-accent-brand/[0.03] dark:bg-purple-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Section Intro */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="max-w-3xl space-y-3"
        >
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-accent-brand">
            MY TOOLKIT
          </span>
          
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark leading-[1.08]">
            Built across the stack.
          </h2>
          
          <p className="text-base sm:text-lg text-text-secondary-light dark:text-text-secondary-dark/90 leading-relaxed font-sans max-w-2xl">
            From polished interfaces to reliable backend systems, these are the technologies I use to turn ideas into real products.
          </p>
        </motion.div>

        {/* Editorial Navigation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-between border-b border-border-light/80 dark:border-[#1A1E29] pb-3"
        >
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            {CATEGORY_FILTERS.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative py-1.5 text-xs sm:text-sm font-mono font-semibold tracking-wider transition-colors duration-300 ${
                    isActive
                      ? 'text-accent-brand dark:text-purple-300 font-bold'
                      : 'text-text-secondary-light dark:text-text-secondary-dark/70 hover:text-text-primary-light dark:hover:text-text-primary-dark'
                  }`}
                >
                  <span className="relative z-10">{cat.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="editorialNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-brand shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <span className="hidden sm:inline-flex text-[11px] font-mono text-text-secondary-light/60 dark:text-text-secondary-dark/60">
            Hover to inspect • Click for details
          </span>
        </motion.div>

        {/* HERO Interactive Ecosystem Canvas */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full"
        >
          {/* Desktop Interactive Ecosystem Graph */}
          <div className="hidden md:block">
            <TechGraph
              items={TECH_ITEMS}
              selectedTech={selectedTech}
              hoveredTech={hoveredTech}
              activeCategory={activeCategory}
              onSelectTech={(tech) =>
                setSelectedTech((prev) => (prev?.id === tech.id ? null : tech))
              }
              onHoverTech={setHoveredTech}
              onCloseClickCard={() => setSelectedTech(null)}
            />
          </div>

          {/* Mobile Vertical Stack */}
          <div className="block md:hidden">
            <TechMatrix
              items={TECH_ITEMS}
              selectedTech={selectedTech}
              hoveredTech={hoveredTech}
              activeCategory={activeCategory}
              onSelectTech={(tech) =>
                setSelectedTech((prev) => (prev?.id === tech.id ? null : tech))
              }
              onHoverTech={setHoveredTech}
              onCloseClickCard={() => setSelectedTech(null)}
            />
          </div>
        </motion.div>

        {/* Lush Jewels Project Connection Strip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-[1px] rounded-2xl bg-gradient-to-r from-border-light via-accent-brand/30 to-border-light dark:from-[#1A1E29] dark:via-purple-500/20 dark:to-[#1A1E29]"
        >
          <div className="p-5 sm:p-6 rounded-[15px] bg-surface-light dark:bg-[#0C0E14] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-accent-brand dark:text-purple-300 block">
                BUILT WITH THIS STACK
              </span>
              <div className="flex items-center gap-2">
                <h4 className="font-display font-bold text-base sm:text-lg text-text-primary-light dark:text-text-primary-dark">
                  LUSH JEWELS
                </h4>
                <span className="text-xs text-text-secondary-light/70 dark:text-text-secondary-dark/70 font-medium">
                  • Full-Stack E-Commerce Engine
                </span>
              </div>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark/80 font-mono">
                React · Node.js · Express · MongoDB · Cloudinary
              </p>
            </div>

            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-accent-brand text-white hover:bg-accent-brand/90 transition-all duration-300 shadow-sm group shrink-0"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Section Closing Thought & CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center pt-6 border-t border-border-light/60 dark:border-[#181C26] space-y-3"
        >
          <p className="font-display font-semibold text-base sm:text-lg text-text-primary-light dark:text-text-primary-dark italic">
            &ldquo;Good tools matter. Knowing when to use them matters more.&rdquo;
          </p>

          <div>
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-accent-brand dark:text-purple-300 hover:underline group"
            >
              <span>See what I built →</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
