import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../utils/constants';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { Layers } from 'lucide-react';

const CATEGORIES = ['All', 'Full-Stack E-Commerce', 'React & API Architecture', 'Desktop Software Architecture', 'Frontend Engineering'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 relative overflow-hidden theme-transition">
      {/* Dynamic Glow Accents */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-600/10 dark:bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <SectionHeader
          number="04 // Showcase"
          title="Featured Projects &"
          highlightText="Case Studies"
          subtitle="A curated showcase of production-ready full-stack applications, scalable REST API systems, and modern frontend interfaces."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <div className="p-1.5 rounded-2xl bg-surface-light/80 dark:bg-[#10121A]/80 border border-border-light dark:border-[#1E2230] backdrop-blur-md flex flex-wrap gap-1.5 shadow-lg">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
              if (cat !== 'All' && count === 0) return null;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-text-secondary-light dark:text-text-secondary-dark/70 hover:text-text-primary-light dark:hover:text-text-primary-dark'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-brand to-purple-600 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat === 'All' && <Layers className="w-3.5 h-3.5" />}
                    {cat}
                  </span>
                  <span
                    className={`relative z-10 px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive
                        ? 'bg-white/20 text-white font-bold'
                        : 'bg-elevated-light dark:bg-[#181A26] text-text-secondary-light dark:text-text-secondary-dark/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
