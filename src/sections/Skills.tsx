import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../utils/constants';
import { SkillCard } from '../components/SkillCard';
import { fadeInUp, staggerContainer, itemReveal } from '../utils/animations';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden theme-transition bg-elevated-light/40 dark:bg-[#090A0E]">
      {/* Grid background layer */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.012] dark:opacity-[0.015] pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-brand/5 dark:bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20%' }}
          className="max-w-2xl text-center mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-brand">
            02 // Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
            Technology Stack &amp; Skills
          </h2>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Intelligently grouped tools, libraries, and frameworks that I use to design, develop, and deploy production-ready software.
          </p>
        </motion.div>

        {/* Skill Category Grids */}
        <div className="space-y-14">
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.category}
              variants={staggerContainer(0.08, 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              className="space-y-6"
            >
              {/* Category Title with Glowing Indicator Dot */}
              <motion.div variants={itemReveal} className="flex items-center space-x-3.5">
                <span className="w-2 h-2 rounded-full bg-accent-brand shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                <h3 className="font-display font-bold text-lg tracking-tight text-text-primary-light dark:text-text-primary-dark">
                  {group.category}
                </h3>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-border-light dark:from-accent-brand/40 via-border-light dark:via-border-dark to-transparent" />
              </motion.div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {group.items.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    desc={skill.desc}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Skills;
