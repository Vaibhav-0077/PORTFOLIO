import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { CanvasContainer } from '../three/CanvasContainer';
import { SOCIAL_LINKS } from '../utils/constants';
import { staggerContainer, itemReveal } from '../utils/animations';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-[100vh] flex items-center justify-center pt-24 md:pt-0 overflow-hidden"
    >
      {/* Editorial Grid and Noise background */}
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Background Radial Light Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-accent-brand/5 dark:bg-accent-brand/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Side: Editorial Typography & Actions */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left"
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemReveal} className="flex justify-center lg:justify-start">
            <span className="px-3.5 py-1.5 rounded-full border border-accent-brand/20 bg-accent-brand/5 text-accent-brand text-xs font-semibold tracking-widest uppercase font-mono">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemReveal}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark leading-[1.1]"
          >
            Hi, I'm <span className="text-accent-brand text-glow">Vaibhav</span>.<br />
            Building digital experiences that feel as good as they work.
          </motion.h1>

          {/* Supporting paragraph */}
          <motion.p
            variants={itemReveal}
            className="text-base sm:text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            Focused on engineering high-performance MERN web applications, robust backends, intuitive visual layouts, and interactive experiences.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemReveal}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-accent-brand hover:bg-accent-brand-light text-white font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-accent-brand/10 dark:shadow-none hover:shadow-xl hover:shadow-accent-brand/20 cursor-pointer group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-border-light dark:border-border-dark hover:border-accent-brand dark:hover:border-accent-brand bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
            >
              Let's Connect
            </button>

            <a
              href={SOCIAL_LINKS.resume}
              download
              className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-transparent hover:border-border-light dark:hover:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive 3D Canvas / Vector fallback */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="lg:col-span-5 relative w-full flex items-center justify-center mt-6 lg:mt-0"
        >
          <CanvasContainer />

          {/* Floating technical labels around the 3D container (Desktop only) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block select-none">
            {/* React Label */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-12 left-10 px-2.5 py-1 rounded border border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm shadow-sm"
            >
              <span className="font-mono text-xs text-accent-brand font-semibold">React.js</span>
            </motion.div>

            {/* Node Label */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-16 left-6 px-2.5 py-1 rounded border border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm shadow-sm"
            >
              <span className="font-mono text-xs text-emerald-500 font-semibold">Node.js</span>
            </motion.div>

            {/* MongoDB Label */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 right-4 px-2.5 py-1 rounded border border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm shadow-sm"
            >
              <span className="font-mono text-xs text-text-secondary-light dark:text-text-secondary-dark font-semibold">MongoDB</span>
            </motion.div>

            {/* TS / 3D label */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute top-6 right-24 px-2.5 py-1 rounded border border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm shadow-sm"
            >
              <span className="font-mono text-xs text-accent-secondary font-semibold">TypeScript</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center space-y-1.5 opacity-60">
        <span className="text-[10px] font-mono tracking-widest uppercase text-text-secondary-light dark:text-text-secondary-dark">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1.5 h-1.5 rounded-full bg-accent-brand"
        />
      </div>
    </section>
  );
};
export default Hero;
