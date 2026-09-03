import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Atom, 
  Server, 
  Database, 
  Paintbrush, 
  Code2, 
  GitBranch, 
  Cloud, 
  Network, 
  Zap, 
  CreditCard, 
  Terminal 
} from 'lucide-react';
import { itemReveal } from '../utils/animations';

interface SkillCardProps {
  name: string;
  desc: string;
  isHero?: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, desc, isHero = false }) => {
  
  // Dynamic Icon Mapper based on the skill name
  const getIcon = (skillName: string) => {
    const n = skillName.toLowerCase();
    const size = isHero ? "w-8 h-8" : "w-5 h-5";
    
    if (n.includes('react')) return <Atom className={size} />;
    if (n.includes('node') || n.includes('express')) return <Server className={size} />;
    if (n.includes('mongo') || n.includes('sql') || n.includes('prisma')) return <Database className={size} />;
    if (n.includes('html') || n.includes('css') || n.includes('tailwind')) return <Paintbrush className={size} />;
    if (n.includes('script')) return <Code2 className={size} />;
    if (n.includes('git')) return <GitBranch className={size} />;
    if (n.includes('docker') || n.includes('cloud')) return <Cloud className={size} />;
    if (n.includes('api')) return <Network className={size} />;
    if (n.includes('vite')) return <Zap className={size} />;
    if (n.includes('razorpay')) return <CreditCard className={size} />;
    return <Terminal className={size} />;
  };

  const wrapperClass = isHero 
    ? "md:col-span-2 md:row-span-2 group relative cursor-default h-full"
    : "col-span-1 group relative cursor-default h-full";

  const iconWrapperClass = isHero
    ? "p-4 rounded-2xl bg-accent-brand/10 dark:bg-[#161822] text-accent-brand dark:text-purple-400 border border-accent-brand/30 dark:border-border-dark shadow-md group-hover:scale-110 group-hover:bg-accent-brand/20 dark:group-hover:bg-purple-500/20 transition-all duration-500"
    : "p-2.5 rounded-xl bg-accent-brand/10 dark:bg-[#161822] text-accent-brand dark:text-purple-400 border border-accent-brand/20 dark:border-border-dark shadow-sm group-hover:scale-110 group-hover:bg-accent-brand/20 dark:group-hover:bg-purple-500/20 transition-all duration-500";

  return (
    <motion.div
      variants={itemReveal}
      className={wrapperClass}
    >
      {/* 1px Illuminated Border Wrapper */}
      <div className="p-[1px] rounded-[24px] bg-gradient-to-br from-border-light to-transparent dark:from-[#2A2E3D] dark:to-transparent group-hover:from-accent-brand/50 dark:group-hover:from-purple-500/50 transition-all duration-700 shadow-sm group-hover:shadow-xl dark:group-hover:shadow-[0_0_35px_rgba(139,92,246,0.18)] h-full flex flex-col">
        
        {/* Deep Inner Container */}
        <div className={`rounded-[23px] bg-surface-light dark:bg-[#0D0E12] h-full flex flex-col relative overflow-hidden ${isHero ? 'p-8 sm:p-10' : 'p-6'}`}>
          
          {/* Subtle noise overlay for glassmorphic depth */}
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0" />
          
          {/* Hidden Radial Glow that appears on hover */}
          <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-brand/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {isHero && (
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          )}

          <div className="relative z-10 flex flex-col h-full space-y-5">
            
            {/* Top row: Icon and Sparkle */}
            <div className="flex justify-between items-start">
              {/* Dynamic Icon */}
              <div className={iconWrapperClass}>
                {getIcon(name)}
              </div>
              
              {/* Hover Sparkle Accent */}
              <div className="text-accent-brand dark:text-purple-300 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                <Sparkles className={isHero ? "w-6 h-6" : "w-4 h-4"} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 flex-grow flex flex-col justify-end">
              <h4 className={`font-display font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand dark:group-hover:text-purple-300 transition-colors duration-300 ${isHero ? 'text-3xl' : 'text-lg'}`}>
                {name}
              </h4>
              
              <p className={`text-text-secondary-light dark:text-text-secondary-dark/80 leading-relaxed font-sans ${isHero ? 'text-sm sm:text-base max-w-sm' : 'text-[13px]'}`}>
                {desc}
              </p>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
