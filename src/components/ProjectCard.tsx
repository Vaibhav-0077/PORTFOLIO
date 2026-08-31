import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import type { Project } from '../utils/constants';
import { itemReveal } from '../utils/animations';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const { title, category, subtitle, tech, features, featured, description } = project;

  // Render a creative, CSS-only mockup visual based on the project type
  const renderVisualMockup = () => {
    if (project.id === 'lush-jewels') {
      return (
        <div className="w-full h-full bg-[#0B0C0E] relative flex flex-col justify-between p-6 select-none overflow-hidden">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-grid opacity-15" />
          
          {/* E-Commerce Shop Header Mockup */}
          <div className="flex justify-between items-center relative z-10">
            <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-bold">Lush Jewels Shop</div>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E2E2DF]/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-brand/50" />
            </div>
          </div>

          {/* Product Zoom Showcase Mockup */}
          <div className="my-auto flex items-center justify-center gap-6 relative z-10">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500" />
              <div className="w-20 h-20 rounded-xl bg-[#14161F] border border-[#262A36] flex items-center justify-center text-accent-brand text-2xl font-bold font-display shadow-[0_0_25px_rgba(139,92,246,0.25)]">
                💎
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="w-24 h-2 bg-text-primary-dark/80 rounded" />
              <div className="w-16 h-1.5 bg-text-secondary-dark/45 rounded" />
              <div className="flex gap-1.5 pt-1">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-rose-300" />
              </div>
            </div>
          </div>

          {/* Checkout Status Mockup */}
          <div className="flex justify-between items-center text-[9px] font-mono text-text-secondary-dark/70 border-t border-[#1B1E28] pt-4 relative z-10">
            <span>Price: $1,249.00</span>
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">● In Stock</span>
          </div>
        </div>
      );
    }

    if (project.id === 'amazon-clone') {
      return (
        <div className="w-full h-full bg-[#0B0C0E] relative flex flex-col justify-between p-5 select-none overflow-hidden border-b border-[#1C202B]">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          
          {/* Amazon Search Mock */}
          <div className="bg-[#151720] p-2 rounded-lg border border-[#242834] flex items-center justify-between gap-3 relative z-10">
            <div className="w-3 h-3 rounded bg-amber-500" />
            <div className="flex-grow h-2 bg-text-secondary-dark/30 rounded" />
            <div className="w-6 h-2 bg-amber-500 rounded" />
          </div>

          {/* Dynamic Carousel Slide Preview */}
          <div className="flex gap-3 justify-center items-end my-4 relative z-10">
            <div className="w-12 h-16 bg-[#13151D] border border-[#222532] rounded flex items-center justify-center text-xs">📦</div>
            <div className="w-14 h-20 bg-[#1C1F2B] border border-purple-500/30 rounded shadow-[0_0_15px_rgba(139,92,246,0.2)] flex items-center justify-center text-lg scale-105">🛒</div>
            <div className="w-12 h-16 bg-[#13151D] border border-[#222532] rounded flex items-center justify-center text-xs">📱</div>
          </div>

          <div className="h-1 bg-amber-500/20 rounded relative z-10">
            <div className="w-2/3 h-full bg-amber-500 rounded" />
          </div>
        </div>
      );
    }

    // Default: Hotel Management System
    return (
      <div className="w-full h-full bg-[#0B0C0E] relative flex flex-col justify-between p-5 select-none overflow-hidden border-b border-[#1C202B]">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        
        {/* Booking Calendar Mockup */}
        <div className="grid grid-cols-4 gap-2 relative z-10">
          {[101, 102, 103, 104].map((room, idx) => (
            <div key={room} className="p-1 rounded bg-[#14161F] border border-[#222634] text-center">
              <div className="text-[7px] font-mono text-text-secondary-dark/60">{room}</div>
              <div className={`w-1.5 h-1.5 rounded-full mx-auto mt-1 ${idx % 3 === 0 ? 'bg-rose-500' : 'bg-emerald-500'}`} />
            </div>
          ))}
        </div>

        {/* Guest ledger entry */}
        <div className="my-auto space-y-1.5 bg-[#14161F]/80 p-2.5 rounded border border-[#222634] relative z-10">
          <div className="flex justify-between items-center text-[8px] font-mono">
            <span className="text-text-primary-dark">GUEST: JOHN D.</span>
            <span className="text-purple-400 font-bold">103</span>
          </div>
          <div className="w-full h-1 bg-[#222634] rounded" />
          <div className="w-4/5 h-1 bg-[#222634] rounded" />
        </div>

        <div className="flex justify-between items-center text-[7px] font-mono text-text-secondary-dark/60 relative z-10">
          <span>SQLITE CONNECTOR</span>
          <span className="text-emerald-400">OK</span>
        </div>
      </div>
    );
  };

  if (featured) {
    return (
      <motion.div
        variants={itemReveal}
        onClick={() => onOpenModal(project)}
        className="col-span-1 lg:col-span-12 group grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl border border-border-light dark:border-[#1E222B] bg-surface-light dark:bg-[#101217] overflow-hidden hover:border-accent-brand/40 dark:hover:border-accent-brand/60 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500 cursor-pointer"
      >
        {/* Left Side: Creative CSS Mockup */}
        <div className="lg:col-span-5 h-[240px] lg:h-auto min-h-[220px] bg-[#0B0C0E] border-b lg:border-b-0 lg:border-r border-border-light dark:border-[#1E222B] relative">
          {renderVisualMockup()}
        </div>

        {/* Right Side: Showcase Metadata */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Category / Trigger */}
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-accent-brand/10 text-accent-brand dark:text-purple-300 border border-accent-brand/30">
                Featured Case Study
              </span>
              <div className="p-1.5 rounded-full border border-border-light dark:border-[#222634] bg-elevated-light dark:bg-[#161822] text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand dark:group-hover:text-purple-300 group-hover:border-accent-brand transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Title / Description */}
            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary-light dark:text-text-primary-dark">
                {title}
              </h3>
              <p className="text-sm font-semibold text-accent-secondary dark:text-sky-400">
                {subtitle}
              </p>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                {description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {tech.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-elevated-light dark:bg-[#161822] border border-border-light dark:border-[#242834] text-text-secondary-light dark:text-purple-200 text-[11px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured items highlight list */}
          <div className="border-t border-border-light/60 dark:border-[#1E222B] pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.slice(0, 4).map((f) => (
              <div key={f} className="flex items-start gap-2 text-xs text-text-secondary-light dark:text-text-secondary-dark font-sans">
                <CheckCircle className="w-3.5 h-3.5 text-accent-brand dark:text-purple-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard Card Layout
  return (
    <motion.div
      variants={itemReveal}
      onClick={() => onOpenModal(project)}
      className="col-span-1 md:col-span-6 group flex flex-col justify-between rounded-2xl border border-border-light dark:border-[#1E222B] bg-surface-light dark:bg-[#101217] overflow-hidden hover:border-accent-brand/40 dark:hover:border-accent-brand/60 shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.12)] transition-all duration-500 cursor-pointer"
    >
      <div className="space-y-4">
        {/* CSS Mockup Preview container */}
        <div className="w-full h-[180px] bg-[#0B0C0E] border-b border-border-light dark:border-[#1E222B]">
          {renderVisualMockup()}
        </div>

        {/* Content detail */}
        <div className="p-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-accent-brand dark:text-purple-400">
              {category}
            </span>
            <div className="p-1 rounded-full border border-border-light dark:border-[#222634] bg-elevated-light dark:bg-[#161822] text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand dark:group-hover:text-purple-300 group-hover:border-accent-brand transition-colors duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <h3 className="font-display font-bold text-xl text-text-primary-light dark:text-text-primary-dark">
            {title}
          </h3>
          
          <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Footer Tags */}
      <div className="px-6 pb-6 pt-1 flex flex-wrap gap-1.5">
        {tech.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded bg-elevated-light dark:bg-[#161822] border border-border-light dark:border-[#242834] text-text-secondary-light dark:text-purple-200 text-[10px] font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
export default ProjectCard;
