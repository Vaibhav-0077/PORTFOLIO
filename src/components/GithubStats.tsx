import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, TrendingUp, Activity } from 'lucide-react';
import { itemReveal } from '../utils/animations';
import { useTheme } from '../context/ThemeContext';

interface GithubData {
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  login: string;
}

interface RepoData {
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

export const GithubStats: React.FC = () => {
  const { theme } = useTheme();
  const username = 'Vaibhav-0077';
  const isDark = theme === 'dark';

  const [userData, setUserData] = useState<GithubData | null>(null);
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (userRes.ok) {
          const userJson = await userRes.json();
          setUserData(userJson);
        }
        
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=1`);
        if (repoRes.ok) {
          const repoJson = await repoRes.json();
          if (repoJson && repoJson.length > 0) {
            setRepoData(repoJson[0]);
          }
        }
      } catch (error) {
        console.error('Failed to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  // We keep the Streak SVG because it calculates historical data the API doesn't expose easily
  const streakArgs = isDark 
    ? `&theme=transparent&hide_border=true&ring=8B5CF6&fire=8B5CF6&currStreakLabel=8B5CF6&text=A1A7B0&dates=A1A7B0`
    : `&theme=transparent&hide_border=true&ring=7C3AED&fire=7C3AED&currStreakLabel=7C3AED&text=62666D&dates=62666D`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}${streakArgs}`;

  return (
    <motion.div variants={itemReveal} className="w-full mt-12 space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-accent-brand/10 dark:bg-purple-500/10 text-accent-brand dark:text-purple-400">
          <Github className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-text-primary-light dark:text-text-primary-dark">
            Live GitHub Metrics
          </h3>
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark font-sans">
            Real-time open-source contributions
          </p>
        </div>
      </div>

      {/* Grid of Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Custom Native UI: Main Overview Card */}
        <div className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-border-light to-transparent dark:from-[#2A2E3D] dark:to-transparent hover:from-accent-brand/30 dark:hover:from-purple-500/40 transition-all duration-500 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]">
          <div className="w-full h-full p-6 rounded-2xl bg-surface-light dark:bg-[#0D0E12] flex flex-col justify-between min-h-[190px] relative overflow-hidden">
            
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-accent-brand/30 border-t-accent-brand rounded-full animate-spin" />
              </div>
            ) : userData ? (
              <>
                {/* Top Section: Profile & Core Stats */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src={userData.avatar_url} 
                      alt={userData.login} 
                      className="w-12 h-12 rounded-full border border-border-light dark:border-border-dark shadow-sm"
                    />
                    <div>
                      <h4 className="font-display font-bold text-sm text-text-primary-light dark:text-text-primary-dark">
                        @{userData.login}
                      </h4>
                      <p className="text-xs text-accent-brand dark:text-purple-400 font-medium">
                        Developer Profile
                      </p>
                    </div>
                  </div>
                  
                  {/* Stat Pills */}
                  <div className="flex gap-2">
                    <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-elevated-light dark:bg-[#161821] border border-border-light dark:border-border-dark/50">
                      <span className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider mb-0.5">Repos</span>
                      <span className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">{userData.public_repos}</span>
                    </div>
                    <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-elevated-light dark:bg-[#161821] border border-border-light dark:border-border-dark/50">
                      <span className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider mb-0.5">Followers</span>
                      <span className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">{userData.followers}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Recent Activity */}
                {repoData && (
                  <a 
                    href={repoData.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-3 rounded-xl border border-border-light dark:border-border-dark/40 bg-white/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] transition-colors group/repo"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Activity className="w-3.5 h-3.5 text-accent-brand dark:text-purple-400" />
                      <span className="text-[11px] font-mono text-text-secondary-light dark:text-text-secondary-dark">Recent Activity</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark group-hover/repo:text-accent-brand transition-colors">
                        {repoData.name}
                      </span>
                      {repoData.language && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-brand/10 text-accent-brand dark:text-purple-300 border border-accent-brand/20">
                          {repoData.language}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark line-clamp-1">
                      {repoData.description || 'No description provided.'}
                    </p>
                  </a>
                )}
              </>
            ) : (
              <div className="text-center text-sm text-text-secondary-light">Error loading data.</div>
            )}
            
          </div>
        </div>

        {/* GitHub Streak Card (Uses reliable herokuapp SVG) */}
        <div className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-border-light to-transparent dark:from-[#2A2E3D] dark:to-transparent hover:from-accent-brand/30 dark:hover:from-purple-500/40 transition-all duration-500 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]">
          <div className="w-full h-full py-6 px-4 rounded-2xl bg-surface-light dark:bg-[#0D0E12] flex items-center justify-center min-h-[190px] overflow-hidden relative">
            
            {/* Subtle background flair */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-brand/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <TrendingUp className="absolute top-5 right-5 w-4 h-4 text-accent-brand/20 dark:text-purple-400/20" />

            <img 
              key={theme} // Force re-render on theme change
              src={streakUrl} 
              alt="GitHub Streak"
              className="w-full max-w-[420px] h-auto object-contain transition-opacity duration-500"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default GithubStats;
