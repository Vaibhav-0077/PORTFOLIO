import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Terminal, Code, Database, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';
import { fadeInUp, staggerContainer, itemReveal } from '../utils/animations';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'terminal'>('profile');

  return (
    <section id="about" className="py-24 relative overflow-hidden theme-transition">
      {/* Background Subtle Noise & Grid Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20%' }}
          className="max-w-3xl text-center md:text-left space-y-3"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-brand">
            01 // About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
            More than just code.
          </h2>
          <p className="text-base text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
            Get to know the developer behind the applications — my background, core values, and development philosophies.
          </p>
        </motion.div>

        {/* View Selector Tabs (Mobile & Tablet Toggle) */}
        <div className="flex lg:hidden items-center justify-center space-x-2 p-1.5 rounded-full border border-border-light dark:border-[#222634] bg-surface-light dark:bg-[#101217] max-w-xs mx-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-2 px-4 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              activeTab === 'profile'
                ? 'bg-accent-brand text-white shadow-md'
                : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
            }`}
          >
            Personal Profile
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex-1 py-2 px-4 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              activeTab === 'terminal'
                ? 'bg-accent-brand text-white shadow-md'
                : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
            }`}
          >
            IDE Terminal
          </button>
        </div>

        {/* Dual-Column Grid Layout (Desktop shows both side-by-side) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Personal Profile & Photo Card */}
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${
              activeTab === 'profile' ? 'block' : 'hidden lg:flex'
            }`}
          >
            {/* Main Profile Showcase Box */}
            <motion.div
              variants={itemReveal}
              className="p-6 sm:p-8 rounded-3xl border border-border-light dark:border-[#1E222B] bg-surface-light dark:bg-[#101217] shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden space-y-6"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-tr from-purple-600/20 via-indigo-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                {/* Profile Image Frame */}
                <div className="relative group shrink-0">
                  {/* Glowing border ring */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 via-accent-brand to-cyan-400 rounded-2xl blur-sm opacity-60 dark:opacity-80 group-hover:opacity-100 transition duration-500 dark:shadow-[0_0_25px_rgba(139,92,246,0.4)]" />
                  
                  {/* Avatar Image */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-border-light dark:border-[#222634] bg-elevated-light dark:bg-[#151722]">
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Info Text */}
                <div className="text-center sm:text-left space-y-2 flex-grow">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-display font-bold text-2xl text-text-primary-light dark:text-text-primary-dark">
                      {PERSONAL_INFO.name}
                    </h3>
                    {/* Status Badge */}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                      {PERSONAL_INFO.status}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-accent-brand dark:text-purple-400">
                    {PERSONAL_INFO.title}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    <MapPin className="w-3.5 h-3.5 text-accent-brand dark:text-purple-400 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraph */}
              <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed relative z-10 font-sans">
                {PERSONAL_INFO.bio}
              </p>

              {/* Key Stats 4-Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 relative z-10">
                {PERSONAL_INFO.stats.map((st) => (
                  <div
                    key={st.label}
                    className="p-3 rounded-xl border border-border-light dark:border-[#222634] bg-elevated-light/50 dark:bg-[#151722] text-center space-y-0.5"
                  >
                    <div className="text-[10px] font-mono text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wide">
                      {st.label}
                    </div>
                    <div className="text-xs font-bold text-text-primary-light dark:text-text-primary-dark line-clamp-1">
                      {st.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interests & Focus */}
              <div className="space-y-2 pt-2 relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-text-secondary-light dark:text-text-secondary-dark">
                  Focus Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-1 rounded bg-accent-brand/5 dark:bg-purple-950/40 border border-accent-brand/20 dark:border-purple-500/30 text-accent-brand dark:text-purple-300 text-[11px] font-mono font-medium flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Core Values Cards */}
            <motion.div variants={itemReveal} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3.5 p-4 rounded-2xl border border-border-light dark:border-[#1E222B] bg-surface-light dark:bg-[#101217] hover:border-accent-brand/40 dark:hover:border-accent-brand/50 dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.12)] transition-all duration-300">
                <div className="p-2 h-fit rounded-lg bg-accent-brand/10 dark:bg-purple-500/10 text-accent-brand dark:text-purple-400 shrink-0">
                  <Code className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs text-text-primary-light dark:text-text-primary-dark">
                    Frontend Craftsmanship
                  </h4>
                  <p className="text-[11px] text-text-secondary-light dark:text-text-secondary-dark mt-1 leading-normal font-sans">
                    Interactive interfaces with React, TypeScript, and smooth CSS animations.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 p-4 rounded-2xl border border-border-light dark:border-[#1E222B] bg-surface-light dark:bg-[#101217] hover:border-accent-brand/40 dark:hover:border-accent-brand/50 dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.12)] transition-all duration-300">
                <div className="p-2 h-fit rounded-lg bg-accent-brand/10 dark:bg-purple-500/10 text-accent-brand dark:text-purple-400 shrink-0">
                  <Database className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs text-text-primary-light dark:text-text-primary-dark">
                    Backend Reliability
                  </h4>
                  <p className="text-[11px] text-text-secondary-light dark:text-text-secondary-dark mt-1 leading-normal font-sans">
                    REST APIs, Node.js routers, MongoDB schemas, and payment integrations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive IDE Terminal Simulation */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            className={`lg:col-span-6 w-full flex flex-col justify-between ${
              activeTab === 'terminal' ? 'block' : 'hidden lg:flex'
            }`}
          >
            {/* Mock macOS IDE Window */}
            <div className="w-full h-full rounded-3xl overflow-hidden border border-border-light dark:border-[#222634] bg-[#0F1015] dark:bg-[#0B0C0E] shadow-2xl dark:shadow-[0_15px_45px_rgba(0,0,0,0.6)] relative flex flex-col justify-between">
              {/* Title bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#16171E] dark:bg-[#12141C] border-b border-border-dark/40 dark:border-[#222634] select-none">
                {/* Dots */}
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
                </div>
                {/* File Title */}
                <div className="flex items-center space-x-2 text-xs font-mono text-text-secondary-dark tracking-wide">
                  <Terminal className="w-3.5 h-3.5 text-accent-brand dark:text-purple-400" />
                  <span>vaibhav.ts</span>
                </div>
                {/* Empty block to center title */}
                <div className="w-14" />
              </div>

              {/* Code Contents */}
              <div className="p-6 sm:p-8 font-mono text-xs sm:text-[13px] leading-relaxed text-[#ABB2BF] overflow-x-auto select-text flex-grow">
                <div>
                  <span className="text-[#C678DD]">const</span>{' '}
                  <span className="text-[#E06C75]">developer</span>{' '}
                  <span className="text-[#56B6C2]">=</span>{' '}
                  <span className="text-[#ABB2BF]">{"{"}</span>
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
                  <span className="text-[#E06C75]">location</span>:{' '}
                  <span className="text-[#98C379]">'Mumbai, India'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#E06C75]">education</span>:{' '}
                  <span className="text-[#98C379]">'B.Sc. Information Technology (2025)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#E06C75]">specialization</span>:{' '}
                  <span className="text-[#56B6C2]">['MongoDB', 'Express', 'React', 'Node']</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#E06C75]">philosophies</span>:{' '}
                  <span className="text-[#ABB2BF]">{"{"}</span>
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

              {/* Status bar */}
              <div className="px-5 py-3 bg-[#14151B] dark:bg-[#111219] border-t border-border-dark/40 dark:border-[#222634] flex items-center justify-between text-[11px] font-mono text-text-secondary-dark/60 select-none">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  TypeScript v5.0 Ready
                </span>
                <span>UTF-8</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default About;
