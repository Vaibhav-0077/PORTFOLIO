import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { TIMELINE_ITEMS } from '../utils/constants';
import { SectionHeader } from '../components/SectionHeader';
import { staggerContainer, itemReveal } from '../utils/animations';

export const Experience: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden theme-transition">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <SectionHeader
          number="06 // History"
          title="My Development"
          highlightText="Journey"
          subtitle="A transparent timeline of my education, projects, freelance experiences, and core learning milestones."
        />

        {/* Timeline Path container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical track line (Middle on desktop, Left on mobile) */}
          <div className="absolute left-[16px] md:left-1/2 top-2 bottom-2 w-[1.5px] -translate-x-1/2 bg-border-light dark:bg-border-dark" />

          {/* Timeline Node List */}
          <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className="space-y-12"
          >
            {TIMELINE_ITEMS.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isEducation = item.title.includes('B.Sc.') || item.institution.includes('University') || item.title.includes('Admission') || item.institution.includes('Master');

              return (
                <motion.div
                  key={idx}
                  variants={itemReveal}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } items-start md:items-center`}
                >
                  {/* Timeline Node Pin (Middle/Left) */}
                  <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex items-center justify-center text-accent-brand shadow-sm z-10 transition-colors duration-300">
                    {isEducation ? (
                      <GraduationCap className="w-4.5 h-4.5" />
                    ) : (
                      <Briefcase className="w-4 h-4" />
                    )}
                  </div>

                  {/* Spacer or Card Container (Left on desktop) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div
                      className={`relative p-6 rounded-2xl border bg-surface-light dark:bg-surface-dark transition-all duration-300 shadow-sm hover:shadow ${
                        item.special
                          ? 'border-accent-brand dark:border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]'
                          : 'border-border-light dark:border-border-dark hover:border-accent-brand/40 dark:hover:border-accent-brand/40'
                      } ${isEven ? 'md:text-left' : 'md:text-right'}`}
                    >
                      {item.special && (
                        <div className="absolute -top-[1px] -right-[1px] px-3 py-1 bg-gradient-to-r from-accent-brand to-purple-500 text-white text-[10px] font-mono font-bold tracking-widest uppercase rounded-bl-xl rounded-tr-2xl shadow-sm">
                          Featured
                        </div>
                      )}
                      {/* Year tag & icon */}
                      <div className={`flex items-center gap-2 mb-2 ${
                        isEven ? 'justify-start' : 'justify-start md:justify-end'
                      }`}>
                        <Calendar className="w-3.5 h-3.5 text-accent-brand shrink-0" />
                        <span className="font-mono text-xs font-bold text-accent-brand">
                          {item.year}
                        </span>
                      </div>

                      {/* Main Titles */}
                      <h3 className="font-display font-bold text-base text-text-primary-light dark:text-text-primary-dark">
                        {item.title}
                      </h3>
                      <h4 className="text-xs font-semibold text-accent-secondary mb-3">
                        {item.institution}
                      </h4>

                      {/* Paragraph details */}
                      <p className="text-xs sm:text-[13px] text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout balancing on desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
export default Experience;
