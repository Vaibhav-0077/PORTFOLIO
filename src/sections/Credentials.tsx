import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileSignature, GraduationCap, Eye } from 'lucide-react';
import { CREDENTIALS } from '../utils/constants';
import type { CredentialItem } from '../utils/constants';
import { SectionHeader } from '../components/SectionHeader';
import { CredentialModal } from '../components/CredentialModal';
import { staggerContainer, itemReveal } from '../utils/animations';

type CategoryFilter = 'all' | 'academic-internship' | 'certification';

export const Credentials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedCredential, setSelectedCredential] = useState<CredentialItem | null>(null);

  const filteredCredentials = CREDENTIALS.filter((cred) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'academic-internship') {
      return cred.category === 'academic' || cred.category === 'internship';
    }
    if (selectedCategory === 'certification') {
      return cred.category === 'certification';
    }
    return true;
  });

  return (
    <section id="credentials" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden theme-transition">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <SectionHeader
          number="07 // Credentials"
          title="Certificates &"
          highlightText="Official Letters"
          subtitle="Verified documentation validating academic milestones, professional internship contributions, and technical mastery."
        />

        {/* Category Filter Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-accent-brand text-white shadow-md shadow-accent-brand/20'
                : 'bg-surface-light dark:bg-[#10131B] text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-[#222736] hover:border-accent-brand/40'
            }`}
          >
            All Documents ({CREDENTIALS.length})
          </button>

          <button
            onClick={() => setSelectedCategory('academic-internship')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
              selectedCategory === 'academic-internship'
                ? 'bg-accent-brand text-white shadow-md shadow-accent-brand/20'
                : 'bg-surface-light dark:bg-[#10131B] text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-[#222736] hover:border-accent-brand/40'
            }`}
          >
            Degrees & Experience Letters
          </button>

          <button
            onClick={() => setSelectedCategory('certification')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
              selectedCategory === 'certification'
                ? 'bg-accent-brand text-white shadow-md shadow-accent-brand/20'
                : 'bg-surface-light dark:bg-[#10131B] text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-[#222736] hover:border-accent-brand/40'
            }`}
          >
            Technical Certifications
          </button>
        </div>

        {/* Credentials Grid */}
        <motion.div
          layout
          variants={staggerContainer(0.12, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCredentials.map((cred) => {
              const isDegree = cred.category === 'academic';
              const isInternship = cred.category === 'internship';

              return (
                <motion.div
                  layout
                  key={cred.id}
                  variants={itemReveal}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedCredential(cred)}
                  className="group relative rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0E1017] hover:border-accent-brand/50 dark:hover:border-accent-brand/50 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer overflow-hidden"
                >
                  {/* Subtle holographic border overlay on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-brand/40 group-hover:via-accent-brand to-transparent transition-all duration-500" />
                  
                  {/* Radial spotlight effect */}
                  <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    {/* Top Row: Category badge & Icon */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-accent-brand/10 dark:bg-purple-950/40 text-accent-brand dark:text-purple-300 border border-accent-brand/20 shadow-sm">
                          {cred.type}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
                      </div>

                      <div className="w-11 h-11 rounded-2xl bg-elevated-light dark:bg-[#141722] border border-border-light/60 dark:border-[#202534] flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand group-hover:scale-110 group-hover:bg-accent-brand/10 transition-all duration-300">
                        {isDegree ? (
                          <GraduationCap className="w-5 h-5 text-accent-brand" />
                        ) : isInternship ? (
                          <FileSignature className="w-5 h-5 text-accent-brand" />
                        ) : (
                          <Award className="w-5 h-5 text-accent-brand" />
                        )}
                      </div>
                    </div>

                    {/* Titles & Issuer */}
                    <div className="space-y-1.5">
                      <h3 className="font-display font-bold text-xl text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand transition-colors duration-300">
                        {cred.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-accent-brand dark:text-purple-300 flex items-center gap-1.5">
                        <span>{cred.issuer}</span>
                        <span>•</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-normal">{cred.grade || 'Verified'}</span>
                      </p>
                      <p className="text-xs sm:text-[13px] text-text-secondary-light dark:text-text-secondary-dark leading-relaxed pt-1 line-clamp-2">
                        {cred.description}
                      </p>
                    </div>

                    {/* Competency Tags Preview */}
                    <div className="space-y-2 pt-2 border-t border-border-light/60 dark:border-[#1C202B]">
                      <span className="text-[10px] font-mono text-text-secondary-light/70 dark:text-text-secondary-dark/60 uppercase tracking-wider block">
                        Verified Competencies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cred.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-elevated-light dark:bg-[#141722] border border-border-light dark:border-[#222736] text-text-secondary-light dark:text-text-secondary-dark"
                          >
                            {skill}
                          </span>
                        ))}
                        {cred.skills.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-accent-brand">
                            +{cred.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-6 pt-4 border-t border-border-light/60 dark:border-[#1E222B] flex items-center justify-between relative z-10 text-xs font-mono">
                    <span className="text-text-secondary-light dark:text-text-secondary-dark/80">
                      {cred.date}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCredential(cred);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent-brand/10 hover:bg-accent-brand hover:text-white text-accent-brand font-semibold text-xs transition-all duration-300 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Document</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Document Viewer Modal */}
        <CredentialModal
          credential={selectedCredential}
          onClose={() => setSelectedCredential(null)}
        />
      </div>
    </section>
  );
};

export default Credentials;
