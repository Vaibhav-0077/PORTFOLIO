import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../utils/constants';
import { SectionHeader } from '../components/SectionHeader';
import { staggerContainer, itemReveal } from '../utils/animations';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden theme-transition bg-elevated-light/40 dark:bg-[#0C0E12]">
      {/* Background layer */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.012] dark:opacity-[0.015] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <SectionHeader
          number="02 // Services"
          title="What I Can"
          highlightText="Build"
          subtitle="Modern, responsive, and secure full-stack software products built with industry-standard web engineering frameworks."
        />

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.number}
              variants={itemReveal}
              className="group relative p-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-accent-brand/40 dark:hover:border-accent-brand/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-brand/0 to-accent-brand/[0.01] dark:to-accent-brand/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                {/* Header: Number & Accent bar */}
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-2xl text-text-secondary-light/20 dark:text-text-secondary-dark/15 group-hover:text-accent-brand/40 transition-colors duration-300">
                    {service.number}
                  </span>
                  <div className="w-8 h-[1px] bg-border-light dark:bg-border-dark group-hover:bg-accent-brand transition-colors duration-300" />
                </div>

                {/* Core Text */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-text-primary-light dark:text-text-primary-dark">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
export default Services;
