import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark py-12 relative overflow-hidden theme-transition">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.02] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="font-display font-bold text-lg tracking-tight text-text-primary-light dark:text-text-primary-dark">
            <span className="text-accent-brand">&lt;</span>
            <span>VAIBHAV</span>
            <span className="text-accent-brand">/&gt;</span>
          </div>
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark tracking-wide uppercase">
            Full-Stack Developer
          </p>
        </div>

        {/* Center Credits */}
        <div className="text-center">
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark max-w-sm">
            Designed &amp; built by Vaibhav. Powered by React, Three.js, and Tailwind CSS.
          </p>
          <p className="text-xs text-text-secondary-light/60 dark:text-text-secondary-dark/60 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right Interactions */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border-light dark:border-border-dark hover:border-accent-brand dark:hover:border-accent-brand text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-brand dark:hover:text-accent-brand transition-all duration-300 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border-light dark:border-border-dark hover:border-accent-brand dark:hover:border-accent-brand text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-brand dark:hover:text-accent-brand transition-all duration-300 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="p-2 rounded-full border border-border-light dark:border-border-dark hover:border-accent-brand dark:hover:border-accent-brand text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-brand dark:hover:text-accent-brand transition-all duration-300 cursor-pointer"
              aria-label="Send Email"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full border border-border-light dark:border-border-dark bg-elevated-light dark:bg-elevated-dark hover:bg-accent-brand hover:text-white dark:hover:bg-accent-brand dark:hover:text-white text-text-primary-light dark:text-text-primary-dark transition-all duration-300 shadow-sm cursor-pointer group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};
