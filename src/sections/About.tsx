import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database } from 'lucide-react';
import { fadeInUp, staggerContainer, itemReveal } from '../utils/animations';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden theme-transition">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Introduction & Values */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20%' }}
            className="lg:col-span-6 space-y-6"
          >
            <motion.div variants={itemReveal}>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-brand">
                01 // Philosophy
              </span>
            </motion.div>
            
            <motion.h2
              variants={itemReveal}
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark"
            >
              More than just code.
            </motion.h2>

            <motion.p
              variants={itemReveal}
              className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed"
            >
              I believe software engineering is the intersection of architecture, visual craft, and system logic. My focus is on writing clean, maintainable, and type-safe code that delivers smooth user-facing animations while maintaining performant, robust server-side processing.
            </motion.p>

            {/* Core Values / Stacks Grid */}
            <motion.div variants={itemReveal} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Card 1 */}
              <div className="flex gap-4 p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-accent-brand dark:hover:border-accent-brand transition-all duration-300">
                <div className="p-2 h-fit rounded-lg bg-accent-brand/10 text-accent-brand">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-text-primary-light dark:text-text-primary-dark">
                    Frontend Engineering
                  </h3>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
                    Designing responsive, fluid user interfaces using React, TypeScript, and modern CSS libraries.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-4 p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-accent-brand dark:hover:border-accent-brand transition-all duration-300">
                <div className="p-2 h-fit rounded-lg bg-accent-brand/10 text-accent-brand">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-text-primary-light dark:text-text-primary-dark">
                    Backend Architecture
                  </h3>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
                    Building secure, rest-compliant API systems using Node.js, Express, and transactional databases.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Code Window / IDE Simulator */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20%' }}
            className="lg:col-span-6 w-full"
          >
            {/* Mock macOS IDE Window */}
            <div className="w-full rounded-2xl overflow-hidden border border-border-light dark:border-border-dark bg-[#0F1015] shadow-2xl relative">
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#16171E] border-b border-border-dark/40 select-none">
                {/* Dots */}
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
                </div>
                {/* File Title */}
                <div className="flex items-center space-x-2 text-[11px] font-mono text-text-secondary-dark tracking-wide">
                  <Terminal className="w-3.5 h-3.5 text-accent-brand" />
                  <span>vaibhav.ts</span>
                </div>
                {/* Empty block to center title */}
                <div className="w-14" />
              </div>

              {/* Code Contents */}
              <div className="p-6 font-mono text-[13px] leading-relaxed text-[#ABB2BF] overflow-x-auto select-text">
                <div>
                  <span className="text-[#C678DD]">const</span>{' '}
                  <span className="text-[#E06C75]">developer</span>{' '}
                  <span className="text-[#56B6C2]">=</span>{' '}
                  <span className="text-[#ABB2BF]">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#E06C75]">name</span>:{' '}
                  <span className="text-[#98C379]">'Vaibhav'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#E06C75]">role</span>:{' '}
                  <span className="text-[#98C379]">'Full-Stack MERN Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#E06C75]">education</span>:{' '}
                  <span className="text-[#98C379]">'B.Sc. Information Technology 2025'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#E06C75]">specialization</span>:{' '}
                  <span className="text-[#56B6C2]">['MongoDB', 'Express', 'React', 'Node']</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#E06C75]">philosophies</span>:{' '}
                  <span className="text-[#ABB2BF]">{'{'}</span>
                </div>
                <div className="pl-8">
                  <span className="text-[#E06C75]">architecture</span>:{' '}
                  <span className="text-[#98C379]">'Modular &amp; Scalable'</span>,
                </div>
                <div className="pl-8">
                  <span className="text-[#E06C75]">animations</span>:{' '}
                  <span className="text-[#98C379]">'Performant &amp; Meaningful'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#ABB2BF]">{"}"}</span>,
                </div>
                <div>
                  <span className="text-[#ABB2BF]">{"};"}</span>
                </div>
                
                <div className="mt-4">
                  <span className="text-[#C678DD]">function</span>{' '}
                  <span className="text-[#61AFEF]">getMissionStatement</span>
                  <span className="text-[#ABB2BF]">() {"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#C678DD]">return</span>{' '}
                  <span className="text-[#98C379]">
                    `I translate complex technical logic into elegant visual interfaces,
                    bridging front-end aesthetic with relational back-end data.`
                  </span>
                  <span className="text-[#ABB2BF]">;</span>
                </div>
                <div>
                  <span className="text-[#ABB2BF]">{"}"}</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
export default About;
