import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle, ExternalLink, ShieldCheck, Terminal, Database, Globe, ShoppingCart } from 'lucide-react';
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

  // Render a creative, developer-grade UI mockup tailored to each project (No emojis!)
  const renderVisualMockup = () => {
    if (id === 'lush-jewels') {
      return (
        <div className="w-full h-full bg-[#08090C] relative flex flex-col justify-between p-5 select-none overflow-hidden font-sans">
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Browser / App Header Mockup */}
          <div className="flex justify-between items-center border-b border-[#1A1D28] pb-3 relative z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-purple-300 font-semibold ml-2 flex items-center gap-1">
                <ShoppingCart className="w-3 h-3 text-purple-400" />
                lush-jewels.com
              </span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Session Auth
            </span>
          </div>

          {/* Luxury E-Commerce Zoom & Buy Now Interface */}
          <div className="my-auto grid grid-cols-12 gap-3 items-center relative z-10">
            <div className="col-span-5 relative group/zoom">
              <div className="w-full h-24 rounded-xl bg-gradient-to-br from-[#12141F] to-[#1A1E2C] border border-purple-500/30 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-purple-500/20 text-[8px] font-mono text-purple-300">
                  Cloudinary 3x Zoom
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-400 p-0.5 shadow-lg group-hover/zoom:scale-110 transition-transform duration-500">
                  <div className="w-full h-full bg-[#0E1017] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 rotate-45 border-2 border-purple-300 bg-purple-500/40" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-7 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">Diamond Sovereign Ring</div>
                  <div className="text-[10px] font-mono text-purple-300">$1,249.00 USD</div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2.5 py-1 rounded-lg bg-purple-600 text-white text-[9px] font-semibold tracking-wide flex items-center gap-1 shadow-[0_0_12px_rgba(147,51,234,0.3)]">
                  Isolated Buy Now
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-[#181B26] text-text-secondary-dark text-[9px] border border-[#252A3A]">
                  Cart
                </div>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="flex justify-between items-center text-[9px] font-mono text-text-secondary-dark/70 border-t border-[#1A1D28] pt-2.5 relative z-10">
            <span>MERN Stack Architecture</span>
            <span className="text-emerald-400 flex items-center gap-1">● DB Connected</span>
          </div>
        </div>
      );
    }

    if (id === 'country-explorer') {
      return (
        <div className="w-full h-full bg-[#08090C] relative flex flex-col justify-between p-5 select-none overflow-hidden font-sans">
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* API Query Header */}
          <div className="flex justify-between items-center border-b border-[#1A1D28] pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[10px] font-mono text-sky-300 font-bold">GET /api/v1/countries/IND</span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              200 OK (28ms)
            </span>
          </div>

          {/* TanStack React Query Cache Visual */}
          <div className="my-auto grid grid-cols-2 gap-3 relative z-10">
            <div className="p-3 rounded-xl bg-[#0E121B] border border-sky-500/30 space-y-1.5 shadow-lg">
              <div className="flex justify-between text-[9px] font-mono text-sky-300 font-bold">
                <span>QUERY: ["country", "IND"]</span>
              </div>
              <div className="text-[8px] font-mono text-text-secondary-dark space-y-1">
                <div className="text-white font-semibold">Capital: New Delhi</div>
                <div>Population: 1.4B</div>
                <div className="text-emerald-400">ISO Code: IND / IN</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0E121B] border border-[#1A2030] space-y-1.5">
              <div className="flex justify-between text-[9px] font-mono text-text-secondary-dark">
                <span>DEPENDENT QUERY</span>
              </div>
              <div className="text-[8px] font-mono text-text-secondary-dark space-y-1">
                <div>Cities fetched: 540+</div>
                <div>Status: Cached</div>
                <div className="text-sky-400">React Query Cache</div>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="flex justify-between items-center text-[9px] font-mono text-text-secondary-dark/70 border-t border-[#1A1D28] pt-2.5 relative z-10">
            <span>REST Countries + CountriesNow</span>
            <span className="text-sky-400 flex items-center gap-1">● Multi-API Fusion</span>
          </div>
        </div>
      );
    }

    if (id === 'amazon-replica') {
      return (
        <div className="w-full h-full bg-[#08090C] relative flex flex-col justify-between p-5 select-none overflow-hidden font-sans">
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Browser Header */}
          <div className="flex justify-between items-center border-b border-[#1A1D28] pb-3 relative z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-amber-300 font-semibold ml-2">
                amazon-replica.demo
              </span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
              Vanilla JS DOM
            </span>
          </div>

          {/* Hero Slider & Grid Preview */}
          <div className="my-auto space-y-2.5 relative z-10">
            <div className="w-full h-14 rounded-xl bg-gradient-to-r from-amber-500/20 via-indigo-900/40 to-slate-900 p-3 border border-amber-500/30 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-white">Hero Carousel Banner</div>
                <div className="text-[8px] font-mono text-amber-300">Auto Slider: 4000ms</div>
              </div>
              <div className="px-2 py-1 rounded bg-amber-500 text-black text-[9px] font-bold">
                Shop Deals
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-1.5 rounded-lg bg-[#0F121C] border border-[#1E2333] text-center">
                  <div className="text-[8px] font-mono text-text-secondary-dark">Item {i}</div>
                  <div className="w-full h-1 bg-amber-500/40 rounded mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="flex justify-between items-center text-[9px] font-mono text-text-secondary-dark/70 border-t border-[#1A1D28] pt-2.5 relative z-10">
            <span>Semantic HTML5 + CSS Grid</span>
            <span className="text-amber-400">● 100% Native JS</span>
          </div>
        </div>
      );
    }

    // Default: Hotel Management System
    return (
      <div className="w-full h-full bg-[#08090C] relative flex flex-col justify-between p-5 select-none overflow-hidden font-sans">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Python GUI Header */}
        <div className="flex justify-between items-center border-b border-[#1A1D28] pb-3 relative z-10">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-mono text-emerald-300 font-bold">HotelSuite.py — Tkinter GUI</span>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <Database className="w-3 h-3" /> SQLite3
          </span>
        </div>

        {/* Guest Booking Ledger */}
        <div className="my-auto space-y-2 relative z-10">
          <div className="p-3 rounded-xl bg-[#0E131C] border border-emerald-500/30 space-y-2">
            <div className="flex justify-between items-center text-[9px] font-mono">
              <span className="text-white font-bold">GUEST: ALEX M. (ROOM 204)</span>
              <span className="text-emerald-400 font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10">Checked In</span>
            </div>
            <div className="flex justify-between text-[8px] font-mono text-text-secondary-dark border-t border-[#192233] pt-1.5">
              <span>Nights: 4</span>
              <span>Billing: ₹14,500 (incl GST)</span>
            </div>
          </div>
        </div>

        {/* Footer Metadata */}
        <div className="flex justify-between items-center text-[9px] font-mono text-text-secondary-dark/70 border-t border-[#1A1D28] pt-2.5 relative z-10">
          <span>Python 3 + SQLite3 Engine</span>
          <span className="text-emerald-400">● SQL Connected</span>
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
        layout
        variants={itemReveal}
        onClick={handleCardClick}
        className="col-span-1 md:col-span-12 lg:col-span-12 group cursor-pointer"
      >
        <div className="p-[1px] rounded-[24px] bg-gradient-to-br from-border-light to-transparent dark:from-[#232736] dark:to-[#12141D] group-hover:from-accent-brand/60 dark:group-hover:from-purple-500/60 transition-all duration-700 shadow-md group-hover:shadow-2xl dark:group-hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[23px] bg-surface-light dark:bg-[#0C0E14] overflow-hidden h-full">
            
            {/* Left Side: Developer Mockup */}
            <div className="lg:col-span-5 h-[280px] lg:h-auto min-h-[260px] bg-[#08090C] border-b lg:border-b-0 lg:border-r border-border-light/30 dark:border-[#1E2230] relative overflow-hidden">
              {renderVisualMockup()}
            </div>

            {/* Right Side: Metadata */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8 relative">
              <div className="space-y-5 relative z-10">
                {/* Header Badge */}
                <div className="flex justify-between items-center">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-accent-brand to-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    Featured Case Study
                  </span>
                  <span className="text-xs font-mono font-semibold text-accent-brand dark:text-purple-300 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Title / Subtitle / Description */}
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-accent-secondary dark:text-sky-400 uppercase tracking-wide font-mono">
                    {subtitle}
                  </p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark/85 leading-relaxed max-w-2xl">
                    {description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-elevated-light dark:bg-[#141724] border border-border-light dark:border-[#1E2333] text-text-primary-light dark:text-purple-200 text-[11px] font-mono shadow-sm group-hover:border-purple-500/40 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights & CTAs */}
              <div className="border-t border-border-light/60 dark:border-[#1E2333] pt-5 space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-xs text-text-secondary-light dark:text-text-secondary-dark font-sans group/feature">
                      <CheckCircle className="w-4 h-4 text-accent-brand dark:text-purple-400 shrink-0 group-hover/feature:text-purple-300 transition-colors" />
                      <span className="line-clamp-1 group-hover/feature:text-text-primary-dark transition-colors">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-accent-brand to-purple-600 text-white text-xs font-semibold font-mono shadow-md flex items-center gap-2 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all">
                    Explore Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono flex items-center gap-1.5 hover:bg-emerald-500/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
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
      layout
      variants={itemReveal}
      onClick={handleCardClick}
      className="col-span-1 md:col-span-6 lg:col-span-4 group cursor-pointer"
    >
      <div className="p-[1px] rounded-[24px] bg-gradient-to-br from-border-light to-transparent dark:from-[#232736] dark:to-[#12141D] group-hover:from-accent-brand/50 dark:group-hover:from-purple-500/50 transition-all duration-700 shadow-md group-hover:shadow-xl dark:group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] h-full flex flex-col justify-between">
        <div className="rounded-[23px] bg-surface-light dark:bg-[#0C0E14] overflow-hidden h-full flex flex-col relative">
          
          {/* Developer Visual Mockup Preview */}
          <div className="w-full h-[210px] bg-[#08090C] border-b border-border-light/30 dark:border-[#1E2230] relative z-10">
            {renderVisualMockup()}
          </div>

          {/* Content Details */}
          <div className="p-7 space-y-4 flex-grow relative z-10">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-accent-brand dark:text-purple-400">
                {category}
              </span>
              <div className="p-2 rounded-full border border-border-light dark:border-[#222634] bg-elevated-light dark:bg-[#141724] text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-brand dark:group-hover:text-purple-300 group-hover:border-accent-brand/50 transition-all duration-500 group-hover:scale-110">
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

          {/* Footer Tags & Case Study CTA */}
          <div className="px-7 pb-6 pt-2 space-y-4 relative z-10">
            <div className="flex flex-wrap gap-1.5">
              {tech.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-elevated-light dark:bg-[#141724] border border-border-light dark:border-[#1E2333] text-text-primary-light dark:text-purple-200 text-[10px] font-mono shadow-sm"
                >
                  {tag}
                </span>
              ))}
              {tech.length > 3 && (
                <span className="px-2 py-1 rounded-md text-text-secondary-light dark:text-text-secondary-dark/70 text-[10px] font-mono">
                  +{tech.length - 3}
                </span>
              )}
            </div>

            <div className="pt-3 border-t border-border-light/60 dark:border-[#1E2333] flex items-center justify-between text-xs font-mono">
              <span className="text-accent-brand dark:text-purple-300 font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Read Case Study <ArrowRight className="w-3.5 h-3.5" />
              </span>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-emerald-400 text-[10px] flex items-center gap-1 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
