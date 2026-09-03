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
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, desc }) => {
  
  // Dynamic Icon Mapper based on the skill name
  const getIcon = (skillName: string) => {
    const n = skillName.toLowerCase();
    if (n.includes('react')) return <Atom className="w-5 h-5" />;
    if (n.includes('node') || n.includes('express')) return <Server className="w-5 h-5" />;
    if (n.includes('mongo') || n.includes('sql') || n.includes('prisma')) return <Database className="w-5 h-5" />;
    if (n.includes('html') || n.includes('css') || n.includes('tailwind')) return <Paintbrush className="w-5 h-5" />;
    if (n.includes('script')) return <Code2 className="w-5 h-5" />;
    if (n.includes('git')) return <GitBranch className="w-5 h-5" />;
    if (n.includes('docker') || n.includes('cloud')) return <Cloud className="w-5 h-5" />;
    if (n.includes('api')) return <Network className="w-5 h-5" />;
    if (n.includes('vite')) return <Zap className="w-5 h-5" />;
    if (n.includes('razorpay')) return <CreditCard className="w-5 h-5" />;
    return <Terminal className="w-5 h-5" />;
  };

  return (
    <motion.div
      variants={itemReveal}
      className="group relative cursor-default h-full"
    >
      {/* 1px Illuminated Border Wrapper */}
      <div className="p-[1px] rounded-[20px] bg-gradient-to-br from-border-light to-transparent dark:from-[#2A2E3D] dark:to-transparent group-hover:from-accent-brand/50 dark:group-hover:from-purple-500/50 transition-all duration-700 shadow-sm group-hover:shadow-xl dark:group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] h-full flex flex-col">
        
        {/* Deep Inner Container */}
        <div className="rounded-[19px] bg-surface-light dark:bg-[#0D0E12] h-full flex flex-col relative p-6 overflow-hidden">
          
          {/* Subtle noise overlay for glassmorphic depth */}
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0" />
          
          {/* Hidden Radial Glow that appears on hover */}
          <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-brand/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full space-y-4">
            
            {/* Top row: Icon and Sparkle */}
            <div className="flex justify-between items-start">
              {/* Dynamic Icon */}
              <div className="p-2.5 rounded-xl bg-accent-brand/10 dark:bg-[#161822] text-accent-brand dark:text-purple-400 border border-accent-brand/20 dark:border-border-dark shadow-sm group-hover:scale-110 group-hover:bg-accent-brand/20 dark:group-hover:bg-purple-500/20 transition-all duration-500">
                {getIcon(name)}
              </div>
              
              {/* Hover Sparkle Accent */}
              <div className="text-accent-brand dark:text-purple-300 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2 flex-grow">
              <h4 className="font-display font-bold text-lg text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand dark:group-hover:text-purple-300 transition-colors duration-300">
                {name}
              </h4>
              
              <p className="text-[13px] text-text-secondary-light dark:text-text-secondary-dark/80 leading-relaxed font-sans">
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
