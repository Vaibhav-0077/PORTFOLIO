import React from 'react';
import { motion } from 'framer-motion';
import { Github, TrendingUp } from 'lucide-react';
import { itemReveal } from '../utils/animations';

export const GithubStats: React.FC = () => {
  const username = 'Vaibhav-0077';

  // API URLs for dynamic SVGs with custom query parameters for our styling
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=8B5CF6&text_color=A1A7B0&icon_color=8B5CF6`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=8B5CF6&fire=8B5CF6&currStreakLabel=8B5CF6`;

  return (
    <motion.div variants={itemReveal} className="w-full mt-12 space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-accent-brand/10 dark:bg-purple-500/10 text-accent-brand dark:text-purple-400">
          <Github className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-text-primary-light dark:text-text-primary-dark">
            Live Coding Metrics
          </h3>
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark font-sans">
            Real-time data fetched from GitHub
          </p>
        </div>
      </div>

      {/* Grid of Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Top Languages & Overview Card */}
        <div className="relative group p-1 rounded-2xl bg-gradient-to-br from-border-light to-transparent dark:from-[#2A2E3D] dark:to-transparent hover:from-accent-brand/50 dark:hover:from-purple-500/50 transition-all duration-500 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
          <div className="w-full h-full p-4 rounded-xl bg-surface-light dark:bg-[#101217] flex items-center justify-center min-h-[180px] overflow-hidden">
            {/* The SVG Image embedded directly */}
            <img 
              src={topLangsUrl} 
              alt="GitHub Top Languages"
              className="w-full max-w-[400px] h-auto object-contain dark:contrast-125 dark:brightness-110"
              loading="lazy"
            />
          </div>
        </div>

        {/* GitHub Streak Card */}
        <div className="relative group p-1 rounded-2xl bg-gradient-to-br from-border-light to-transparent dark:from-[#2A2E3D] dark:to-transparent hover:from-accent-brand/50 dark:hover:from-purple-500/50 transition-all duration-500 shadow-sm hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
          <div className="w-full h-full p-4 rounded-xl bg-surface-light dark:bg-[#101217] flex items-center justify-center min-h-[180px] overflow-hidden relative">
            
            {/* Subtle background flair */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-brand/5 dark:bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <TrendingUp className="absolute top-4 right-4 w-4 h-4 text-accent-brand/30 dark:text-purple-400/30" />

            {/* The SVG Image embedded directly */}
            <img 
              src={streakUrl} 
              alt="GitHub Streak"
              className="w-full max-w-[450px] h-auto object-contain dark:contrast-125 dark:brightness-110"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default GithubStats;
