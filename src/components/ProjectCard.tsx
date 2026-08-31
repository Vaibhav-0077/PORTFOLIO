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
        <div className="w-full h-full bg-[#13151A] relative flex flex-col justify-between p-6 select-none overflow-hidden">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-grid opacity-10" />
          
          {/* E-Commerce Shop Header Mockup */}
          <div className="flex justify-between items-center relative z-10">
            <div className="text-[10px] font-mono text-accent-brand uppercase tracking-wider font-bold">Lush Jewels Shop</div>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E2E2DF]/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-brand/40" />
            </div>
          </div>

          {/* Product Zoom Showcase Mockup */}
          <div className="my-auto flex items-center justify-center gap-6 relative z-10">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-accent-brand/20 rounded-xl blur opacity-30" />
              <div className="w-20 h-20 rounded-xl bg-[#1A1D24] border border-[#272A30] flex items-center justify-center text-accent-brand text-2xl font-bold font-display shadow-lg">
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
          <div className="flex justify-between items-center text-[9px] font-mono text-text-secondary-dark/60 border-t border-[#1C1F26] pt-4 relative z-10">
            <span>Price: $1,249.00</span>
            <span className="text-emerald-400 flex items-center gap-1">● In Stock</span>
          </div>
        </div>
      );
    }

    if (project.id === 'amazon-clone') {
      return (
        <div className="w-full h-full bg-[#0F1115] relative flex flex-col justify-between p-5 select-none overflow-hidden border-b border-border-dark/15">
          <div className="absolute inset-0 bg-grid opacity-[0.04]" />
          
          {/* Amazon Search Mock */}
          <div className="bg-[#1A1D24] p-2 rounded-lg border border-[#2A2E35] flex items-center justify-between gap-3 relative z-10">
            <div className="w-3 h-3 rounded bg-amber-500" />
            <div className="flex-grow h-2 bg-text-secondary-dark/30 rounded" />
            <div className="w-6 h-2 bg-amber-500 rounded" />
          </div>

          {/* Dynamic Carousel Slide Preview */}
          <div className="flex gap-3 justify-center items-end my-4 relative z-10">
            <div className="w-12 h-16 bg-[#171A21] border border-border-dark/50 rounded flex items-center justify-center text-xs">📦</div>
            <div className="w-14 h-20 bg-[#20242D] border border-accent-brand/20 rounded shadow-lg flex items-center justify-center text-lg scale-105">🛒</div>
            <div className="w-12 h-16 bg-[#171A21] border border-border-dark/50 rounded flex items-center justify-center text-xs">📱</div>
          </div>

          <div className="h-1 bg-amber-500/20 rounded relative z-10">
            <div className="w-2/3 h-full bg-amber-500 rounded" />
          </div>
        </div>
      );
    }

    // Default: Hotel Management System
    return (
      <div className="w-full h-full bg-[#111317] relative flex flex-col justify-between p-5 select-none overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        
        {/* Booking Calendar Mockup */}
        <div className="grid grid-cols-4 gap-2 relative z-10">
          {[101, 102, 103, 104].map((room, idx) => (
            <div key={room} className="p-1 rounded bg-[#181B21] border border-border-dark/60 text-center">
              <div className="text-[7px] font-mono text-text-secondary-dark/60">{room}</div>
              <div className={`w-1.5 h-1.5 rounded-full mx-auto mt-1 ${idx % 3 === 0 ? 'bg-rose-500' : 'bg-emerald-500'}`} />
            </div>
          ))}
        </div>

        {/* Guest ledger entry */}
        <div className="my-auto space-y-1.5 bg-[#171A21]/70 p-2.5 rounded border border-border-dark/30 relative z-10">
          <div className="flex justify-between items-center text-[8px] font-mono">
            <span className="text-text-primary-dark">GUEST: JOHN D.</span>
            <span className="text-accent-brand font-bold">103</span>
          </div>
          <div className="w-full h-1 bg-[#252830] rounded" />
          <div className="w-4/5 h-1 bg-[#252830] rounded" />
        </div>

        <div className="flex justify-between items-center text-[7px] font-mono text-text-secondary-dark/50 relative z-10">
          <span>SQLITE CONNECTOR</span>
          <span>OK</span>
        </div>
      </div>
    );
  };

  if (featured) {
    return (
      <motion.div
        variants={itemReveal}
        onClick={() => onOpenModal(project)}
        className="col-span-1 lg:col-span-12 group grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden hover:border-accent-brand/40 dark:hover:border-accent-brand/40 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
      >
        {/* Left Side: Creative CSS Mockup */}
        <div className="lg:col-span-5 h-[240px] lg:h-auto min-h-[220px] bg-[#16171E] border-b lg:border-b-0 lg:border-r border-border-light dark:border-border-dark relative">
          {renderVisualMockup()}
        </div>

        {/* Right Side: Showcase Metadata */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Category / Trigger */}
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-accent-brand">
                Featured Case Study
              </span>
              <div className="p-1.5 rounded-full border border-border-light dark:border-border-dark bg-elevated-light dark:bg-elevated-dark text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand group-hover:border-accent-brand transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Title / Description */}
            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary-light dark:text-text-primary-dark">
                {title}
              </h3>
              <p className="text-sm font-semibold text-accent-secondary">
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
                  className="px-2.5 py-1 rounded bg-elevated-light dark:bg-elevated-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark text-[11px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured items highlight list */}
          <div className="border-t border-border-light/60 dark:border-border-dark/60 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.slice(0, 4).map((f) => (
              <div key={f} className="flex items-start gap-2 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                <CheckCircle className="w-3.5 h-3.5 text-accent-brand shrink-0 mt-0.5" />
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
      className="col-span-1 md:col-span-6 group flex flex-col justify-between rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden hover:border-accent-brand/40 dark:hover:border-accent-brand/40 shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer"
    >
      <div className="space-y-4">
        {/* CSS Mockup Preview container */}
        <div className="w-full h-[180px] bg-[#16171E] border-b border-border-light dark:border-border-dark">
          {renderVisualMockup()}
        </div>

        {/* Content detail */}
        <div className="p-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-text-secondary-light dark:text-text-secondary-dark">
              {category}
            </span>
            <div className="p-1 rounded-full border border-border-light dark:border-border-dark bg-elevated-light dark:bg-elevated-dark text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand group-hover:border-accent-brand transition-colors duration-300">
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
            className="px-2 py-0.5 rounded bg-elevated-light dark:bg-elevated-dark border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark text-[10px] font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
export default ProjectCard;
