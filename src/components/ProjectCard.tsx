import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../utils/constants';
import { itemReveal } from '../utils/animations';

interface ProjectCardProps {
  project: Project;
  onOpenModal?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const { id, title, category, subtitle, tech, features, featured, description, liveUrl } = project;

  // Render a creative, CSS-only mockup visual tailored to each project
  const renderVisualMockup = () => {
    if (id === 'lush-jewels') {
      return (
        <div className="w-full h-full bg-[#090A0C] relative flex flex-col justify-between p-6 select-none overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* E-Commerce Shop Header Mockup */}
          <div className="flex justify-between items-center relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
            <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-bold">Lush Jewels Luxury</div>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E2E2DF]/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-brand/40 group-hover:bg-accent-brand transition-colors duration-500" />
            </div>
          </div>

          {/* Product Zoom Showcase Mockup */}
          <div className="my-auto flex items-center justify-center gap-6 relative z-10">
            <div className="relative group/diamond">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition duration-700" />
              <div className="w-20 h-20 rounded-2xl bg-[#101217] border border-[#262A36] flex items-center justify-center text-accent-brand text-3xl font-bold font-display shadow-[0_0_25px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                💎
              </div>
            </div>
            <div className="space-y-2 transition-transform duration-500 group-hover:translate-x-1">
              <div className="w-24 h-2.5 bg-text-primary-dark/90 rounded" />
              <div className="w-16 h-1.5 bg-text-secondary-dark/50 rounded" />
              <div className="flex gap-1.5 pt-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400/80 shadow-[0_0_10px_rgba(251,191,36,0.3)]" />
                <div className="w-3.5 h-3.5 rounded-full bg-slate-300/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-rose-400/80" />
              </div>
            </div>
          </div>

          {/* Checkout Status Mockup */}
          <div className="flex justify-between items-center text-[9px] font-mono text-text-secondary-dark/70 border-t border-[#1B1E28]/50 pt-4 relative z-10 transition-transform duration-500 group-hover:translate-y-1">
            <span>Price: $1,249.00</span>
            <span className="text-emerald-400 flex items-center gap-1 font-semibold group-hover:animate-pulse">● Buy Now Active</span>
          </div>
        </div>
      );
    }

    if (id === 'country-explorer') {
      return (
        <div className="w-full h-full bg-[#090A0C] relative flex flex-col justify-between p-5 select-none overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Search Header Mockup */}
          <div className="bg-[#12141C] p-2 rounded-lg border border-[#1E2433] flex items-center justify-between gap-3 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span className="text-[9px] font-mono text-sky-300 font-semibold">Search: "IND"</span>
            </div>
            <div className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-400">React Query</div>
          </div>

          {/* Dynamic Geographic Cards Preview */}
          <div className="grid grid-cols-2 gap-3 my-auto relative z-10">
            <div className="p-2.5 rounded-xl bg-[#10131B] border border-sky-500/30 group-hover:border-sky-400/60 shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all">
              <div className="flex items-center justify-between text-[8px] font-mono mb-1 text-sky-300 font-bold">
                <span>🇮🇳 INDIA</span>
                <span className="text-emerald-400">IN</span>
              </div>
              <div className="text-[7px] font-mono text-text-secondary-dark/70 space-y-0.5">
                <div>Cap: New Delhi</div>
                <div>Pop: 1.4B</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#10131B] border border-[#1E2433] transition-all">
              <div className="flex items-center justify-between text-[8px] font-mono mb-1 text-text-primary-dark font-bold">
                <span>🇯🇵 JAPAN</span>
                <span className="text-text-secondary-dark">JP</span>
              </div>
              <div className="text-[7px] font-mono text-text-secondary-dark/70 space-y-0.5">
                <div>Cap: Tokyo</div>
                <div>Pop: 125M</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono text-text-secondary-dark/60 border-t border-[#1B1E28]/50 pt-3 relative z-10">
            <span className="text-sky-400">API: REST + CountriesNow</span>
            <span className="text-emerald-400">● Cached</span>
          </div>
        </div>
      );
    }

    if (id === 'amazon-replica') {
      return (
        <div className="w-full h-full bg-[#090A0C] relative flex flex-col justify-between p-5 select-none overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Amazon Search Mock */}
          <div className="bg-[#12141A] p-2.5 rounded-lg border border-[#1E222D] flex items-center justify-between gap-3 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
            <div className="w-3 h-3 rounded bg-amber-500/80" />
            <div className="flex-grow h-2 bg-text-secondary-dark/30 rounded" />
            <div className="w-6 h-2 bg-amber-500/80 rounded" />
          </div>

          {/* Dynamic Carousel Slide Preview */}
          <div className="flex gap-4 justify-center items-end my-4 relative z-10">
            <div className="w-12 h-16 bg-[#101217] border border-[#1E222D] rounded-xl flex items-center justify-center text-sm transition-transform duration-500 group-hover:-translate-x-2">🎮</div>
            <div className="w-16 h-24 bg-[#161821] border border-amber-500/40 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_35px_rgba(245,158,11,0.3)] flex items-center justify-center text-2xl scale-110 transition-all duration-500 group-hover:-translate-y-3">🛒</div>
            <div className="w-12 h-16 bg-[#101217] border border-[#1E222D] rounded-xl flex items-center justify-center text-sm transition-transform duration-500 group-hover:translate-x-2">📱</div>
          </div>

          <div className="h-1 bg-amber-500/10 rounded relative z-10 overflow-hidden">
            <div className="w-1/2 h-full bg-amber-500/80 rounded group-hover:w-[80%] transition-all duration-1000 ease-out" />
          </div>
        </div>
      );
    }

    // Default: Hotel Management System
    return (
      <div className="w-full h-full bg-[#090A0C] relative flex flex-col justify-between p-5 select-none overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Booking Calendar Mockup */}
        <div className="grid grid-cols-4 gap-2.5 relative z-10">
          {[101, 102, 103, 104].map((room, idx) => (
            <div key={room} className="p-1.5 rounded-lg bg-[#101217] border border-[#1E222D] text-center transition-transform duration-500 group-hover:scale-105" style={{ transitionDelay: `${idx * 50}ms` }}>
              <div className="text-[7px] font-mono text-text-secondary-dark/60 mb-1">{room}</div>
              <div className={`w-1.5 h-1.5 rounded-full mx-auto ${idx % 3 === 0 ? 'bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]' : 'bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]'}`} />
            </div>
          ))}
        </div>

        {/* Guest ledger entry */}
        <div className="my-auto space-y-2 bg-[#12141A]/90 p-3 rounded-xl border border-[#1E222D] relative z-10 transition-colors duration-500 group-hover:border-emerald-500/30 group-hover:bg-[#12141A]">
          <div className="flex justify-between items-center text-[9px] font-mono">
            <span className="text-text-primary-dark font-bold">GUEST: JOHN D.</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">103</span>
          </div>
          <div className="w-full h-1 bg-[#222634] rounded overflow-hidden">
            <div className="w-full h-full bg-emerald-500/40 rounded group-hover:animate-pulse" />
          </div>
        </div>

        <div className="flex justify-between items-center text-[8px] font-mono text-text-secondary-dark/60 relative z-10">
          <span>SQLITE CONNECTOR</span>
          <span className="text-emerald-400 flex items-center gap-1"><div className="w-1 h-1 bg-emerald-400 rounded-full animate-ping" /> OK</span>
        </div>
      </div>
    );
  };

  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  if (featured) {
    return (
      <motion.div
        variants={itemReveal}
        onClick={handleCardClick}
        className="col-span-1 lg:col-span-12 group cursor-pointer"
      >
        {/* Awwwards Tier Glow Wrapper */}
        <div className="p-[1px] rounded-[24px] bg-gradient-to-br from-border-light to-transparent dark:from-[#2A2E3D] dark:to-transparent group-hover:from-accent-brand/50 dark:group-hover:from-purple-500/50 transition-all duration-700 shadow-sm group-hover:shadow-2xl dark:group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[23px] bg-surface-light dark:bg-[#0D0E12] overflow-hidden h-full">
            
            {/* Left Side: Creative CSS Mockup */}
            <div className="lg:col-span-5 h-[260px] lg:h-auto min-h-[240px] bg-[#090A0C] border-b lg:border-b-0 lg:border-r border-border-light/30 dark:border-[#1E222B]/50 relative overflow-hidden">
              {renderVisualMockup()}
            </div>

            {/* Right Side: Showcase Metadata */}
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-8 relative">
              <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
              
              <div className="space-y-5 relative z-10">
                {/* Category / Trigger */}
                <div className="flex justify-between items-center">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-accent-brand to-purple-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    Featured Case Study
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-accent-brand dark:text-purple-300 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Title / Description */}
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-sm font-semibold text-accent-secondary dark:text-sky-400 uppercase tracking-wide">
                    {subtitle}
                  </p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark/80 leading-relaxed max-w-2xl">
                    {description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded bg-elevated-light dark:bg-[#151720] border border-border-light dark:border-[#1E222D] text-text-primary-light dark:text-purple-200 text-[11px] font-mono shadow-sm group-hover:border-purple-500/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured items highlight list */}
              <div className="border-t border-border-light/60 dark:border-[#1E222B]/60 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                {features.slice(0, 4).map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-xs text-text-secondary-light dark:text-text-secondary-dark font-sans group/feature">
                    <CheckCircle className="w-4 h-4 text-accent-brand dark:text-purple-400 shrink-0 group-hover/feature:text-purple-300 transition-colors" />
                    <span className="line-clamp-1 group-hover/feature:text-text-primary-dark transition-colors">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard Card Layout
  return (
    <motion.div
      variants={itemReveal}
      onClick={handleCardClick}
      className="col-span-1 md:col-span-6 lg:col-span-4 group cursor-pointer"
    >
      {/* Awwwards Tier Glow Wrapper */}
      <div className="p-[1px] rounded-[24px] bg-gradient-to-br from-border-light to-transparent dark:from-[#2A2E3D] dark:to-transparent group-hover:from-accent-brand/40 dark:group-hover:from-purple-500/40 transition-all duration-700 shadow-sm group-hover:shadow-xl dark:group-hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] h-full flex flex-col justify-between">
        <div className="rounded-[23px] bg-surface-light dark:bg-[#0D0E12] overflow-hidden h-full flex flex-col relative">
          
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0" />

          {/* CSS Mockup Preview container */}
          <div className="w-full h-[200px] bg-[#090A0C] border-b border-border-light/30 dark:border-[#1E222B]/50 relative z-10">
            {renderVisualMockup()}
          </div>

          {/* Content detail */}
          <div className="p-7 space-y-4 flex-grow relative z-10">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-accent-brand dark:text-purple-400">
                {category}
              </span>
              <div className="p-1.5 rounded-full border border-border-light dark:border-[#222634] bg-elevated-light dark:bg-[#161822] text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand dark:group-hover:text-purple-300 group-hover:border-accent-brand/50 transition-all duration-500 group-hover:scale-110">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <h3 className="font-display font-bold text-2xl text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark/80 line-clamp-3 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Footer Tags & CTA */}
          <div className="px-7 pb-6 pt-2 space-y-4 relative z-10">
            <div className="flex flex-wrap gap-1.5">
              {tech.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-elevated-light dark:bg-[#151720] border border-border-light dark:border-[#1E222D] text-text-primary-light dark:text-purple-200 text-[10px] font-mono shadow-sm"
                >
                  {tag}
                </span>
              ))}
              {tech.length > 3 && (
                <span className="px-2 py-1 rounded text-text-secondary-light dark:text-text-secondary-dark/70 text-[10px] font-mono">
                  +{tech.length - 3}
                </span>
              )}
            </div>

            <div className="pt-2 border-t border-border-light/60 dark:border-[#1E222D] flex items-center justify-between text-xs font-mono">
              <span className="text-accent-brand dark:text-purple-300 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Full Case Study →
              </span>
              {liveUrl && (
                <span className="text-emerald-500 text-[10px] flex items-center gap-1">
                  ● Live Demo
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
