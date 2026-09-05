import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileSignature, ExternalLink } from 'lucide-react';
import { CREDENTIALS } from '../utils/constants';
import { SectionHeader } from '../components/SectionHeader';
import { staggerContainer, itemReveal } from '../utils/animations';

export const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-24 relative overflow-hidden theme-transition">
      {/* Background layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <SectionHeader
          number="07 // Credentials"
          title="Certificates &"
          highlightText="Letters"
          subtitle="Official documentation verifying academic achievements, professional internships, and continuous technical learning."
        />

        {/* Dense Credentials Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CREDENTIALS.map((cred) => {
            const isDegree = cred.type.toLowerCase().includes('degree') || cred.type.toLowerCase().includes('letter');

            return (
              <motion.div
                key={cred.id}
                variants={itemReveal}
                className="group relative h-full"
              >
                {/* Glowing Border Wrapper */}
                <div className="p-[1px] rounded-[24px] bg-gradient-to-br from-border-light to-transparent dark:from-[#2A2E3D] dark:to-transparent group-hover:from-accent-brand/50 dark:group-hover:from-purple-500/50 transition-all duration-700 shadow-sm group-hover:shadow-2xl dark:group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] h-full flex flex-col cursor-default">
                  
                  <div className="rounded-[23px] bg-surface-light dark:bg-[#0D0E12] h-full flex flex-col relative p-6 sm:p-8 overflow-hidden">
                    {/* Subtle noise overlay */}
                    <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0" />
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="flex-grow flex flex-col relative z-10 space-y-6">
                      
                      {/* Top Bar: Icon and Type */}
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-accent-brand/10 dark:bg-[#161822] text-accent-brand dark:text-purple-300 border border-accent-brand/20 dark:border-border-dark shadow-sm">
                          {cred.type}
                        </span>
                        
                        <div className="p-2 rounded-xl bg-elevated-light dark:bg-[#101217] border border-border-light/50 dark:border-[#1E222D] text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand dark:group-hover:text-purple-400 group-hover:border-accent-brand/30 transition-all duration-500 group-hover:scale-110">
                          {isDegree ? <FileSignature className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                        </div>
                      </div>

                      {/* Main Titles */}
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-xl text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand transition-colors duration-300">
                          {cred.title}
                        </h3>
                        <p className="text-sm font-semibold text-accent-secondary dark:text-sky-400">
                          {cred.issuer}
                        </p>
                      </div>

                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-8 pt-5 border-t border-border-light/60 dark:border-[#1E222B]/60 flex items-center justify-between relative z-10">
                      <span className="text-xs font-mono text-text-secondary-light dark:text-text-secondary-dark/80">
                        {cred.date}
                      </span>
                      
                      {/* View Link (Currently pointing to #, ready for physical images) */}
                      <a 
                        href={cred.link || '#'}
                        target={cred.link && cred.link !== '#' ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-brand dark:hover:text-purple-400 transition-colors duration-300"
                      >
                        View <ExternalLink className="w-3 h-3 mb-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Credentials;
