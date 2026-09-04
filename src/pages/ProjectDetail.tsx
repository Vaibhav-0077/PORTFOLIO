import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Sparkles,
  Terminal,
  ArrowRight,
  ArrowUpRight,
  Sun,
  Moon,
  ChevronRight,
  ShieldCheck,
  Zap,
  Database,
  Lock,
  Server,
  Code2,
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectDetails';
import { useTheme } from '../context/ThemeContext';

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'architecture' | 'challenges' | 'learnings'>('overview');
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const project = projectId ? PROJECT_DETAILS[projectId] : null;

  // List of all project keys in order for navigation
  const projectKeys = ['lush-jewels', 'country-explorer', 'hotel-management', 'amazon-replica'];
  const currentIndex = projectKeys.indexOf(projectId || '');
  const prevProjectKey = currentIndex > 0 ? projectKeys[currentIndex - 1] : projectKeys[projectKeys.length - 1];
  const nextProjectKey = currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : projectKeys[0];
  const prevProject = PROJECT_DETAILS[prevProjectKey];
  const nextProject = PROJECT_DETAILS[nextProjectKey];

  useEffect(() => {
    if (!project) {
      // If invalid project, redirect back to home after mount
      // navigate('/');
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-dark text-text-primary-dark flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <p className="text-text-secondary-dark mb-8">The case study you are looking for does not exist or has moved.</p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-accent-brand text-white font-medium flex items-center gap-2 hover:bg-accent-brand-light transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Portfolio
        </Link>
      </div>
    );
  }

  const {
    title,
    tagline,
    badge,
    category,
    liveUrl,
    githubUrl,
    accentColor,
    glowColor,
    overview,
    techStack,
    coreFeatures,
    architecture,
    challenges,
    personalContributions,
    keyLearnings,
    interviewPitch,
  } = project;

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark transition-colors duration-500 relative selection:bg-purple-500 selection:text-white">
      {/* Background Ambience & Noise */}
      <div className="fixed inset-0 bg-noise opacity-[0.018] dark:opacity-[0.025] pointer-events-none z-30" />
      
      {/* Dynamic Glow Orb */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-30 dark:opacity-20 transition-all duration-700"
        style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
      />

      {/* Top Floating Glass Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-surface-light/80 dark:bg-[#08090C]/80 border-b border-border-light/60 dark:border-[#1E222D]/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Back button */}
          <Link
            to="/#projects"
            className="group flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-brand dark:hover:text-purple-300 transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-border-light dark:border-[#222634] bg-elevated-light dark:bg-[#12141C] flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline">Back to Portfolio</span>
          </Link>

          {/* Center Project Pill */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-light dark:border-[#202432] bg-elevated-light/60 dark:bg-[#12141C]/60 text-xs font-mono">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
            <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">{title}</span>
            <span className="text-text-secondary-light/60 dark:text-text-secondary-dark/60 hidden md:inline">| {category}</span>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide bg-gradient-to-r from-accent-brand to-purple-600 hover:from-accent-brand-light hover:to-purple-500 text-white shadow-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 rounded-full border border-border-light dark:border-[#222634] bg-elevated-light dark:bg-[#12141C] text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-accent-brand transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-border-light dark:border-[#222634] bg-elevated-light dark:bg-[#12141C] text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-brand transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
        
        {/* ========================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================= */}
        <section className="space-y-8 relative">
          <div className="space-y-4">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-accent-brand/10 text-accent-brand dark:text-purple-300 border border-accent-brand/20">
                {badge}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-[#1E222D] bg-elevated-light/40 dark:bg-[#12141C]">
                {category}
              </span>
              {liveUrl ? (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live in Production
                </span>
              ) : (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Standalone Software
                </span>
              )}
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
              {title}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-2xl text-text-secondary-light dark:text-text-secondary-dark/90 font-light max-w-4xl leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-accent-brand hover:bg-accent-brand-light text-white font-medium text-sm sm:text-base flex items-center gap-2.5 shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl border border-border-light dark:border-[#262A38] bg-surface-light dark:bg-[#12141C] text-text-primary-light dark:text-text-primary-dark hover:border-accent-brand font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all hover:bg-elevated-light dark:hover:bg-[#181A24]"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Code</span>
            </a>
          </div>

          {/* Key Specs Bar / Metadata Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light/70 dark:bg-[#0D0F14]/70 backdrop-blur-md">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-text-secondary-light dark:text-text-secondary-dark/60 uppercase tracking-wider flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-accent-brand" /> Architecture
              </span>
              <p className="text-xs sm:text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                {overview.architectureType}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-text-secondary-light dark:text-text-secondary-dark/60 uppercase tracking-wider flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-accent-brand" /> Database &amp; Storage
              </span>
              <p className="text-xs sm:text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                {overview.database || 'Static Client State'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-text-secondary-light dark:text-text-secondary-dark/60 uppercase tracking-wider flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-accent-brand" /> Auth &amp; State
              </span>
              <p className="text-xs sm:text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                {overview.authMethod || 'Public Exploration'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-text-secondary-light dark:text-text-secondary-dark/60 uppercase tracking-wider flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-accent-brand" /> Deployment
              </span>
              <p className="text-xs sm:text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                {overview.hosting || 'Cloud Hosted'}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* INTERACTIVE NAVIGATION TABS */}
        {/* ========================================================= */}
        <div className="sticky top-16 sm:top-20 z-30 py-3 backdrop-blur-lg bg-bg-light/85 dark:bg-bg-dark/85 border-y border-border-light/60 dark:border-[#1E222D]/60 -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: '01 // Overview & Scope' },
              { id: 'features', label: '02 // Core Features' },
              { id: 'architecture', label: '03 // System Flow' },
              { id: 'challenges', label: '04 // Challenges & Fixes' },
              { id: 'learnings', label: '05 // Key Takeaways' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  const el = document.getElementById(tab.id);
                  if (el) {
                    const yOffset = -120;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-accent-brand text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                    : 'border border-border-light dark:border-[#222634] bg-surface-light dark:bg-[#101218] text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 1: OVERVIEW & TECH STACK */}
        {/* ========================================================= */}
        <section id="overview" className="space-y-10 scroll-mt-36">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-brand dark:text-purple-400">
              01 // Overview &amp; Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
              Project Purpose &amp; Technology Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Narrative Summary & Purpose */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-7 sm:p-8 rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0D0F14] space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-brand/5 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <h3 className="text-lg font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent-brand" /> Executive Summary
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark/90 leading-relaxed">
                    {overview.summary}
                  </p>
                </div>

                {overview.purpose && (
                  <div className="border-t border-border-light/60 dark:border-[#1E222D] pt-6">
                    <h3 className="text-lg font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-3 flex items-center gap-2">
                      <TargetIcon className="w-4 h-4 text-accent-brand" /> Core Objective
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark/90 leading-relaxed">
                      {overview.purpose}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Structured Tech Stack Matrix */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-brand" /> Technology Breakdown
              </h3>

              <div className="space-y-4">
                {techStack.map((stackGroup) => (
                  <div
                    key={stackGroup.category}
                    className="p-5 rounded-2xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0D0F14] space-y-3"
                  >
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent-brand dark:text-purple-400">
                      {stackGroup.category}
                    </span>

                    <div className="space-y-2.5">
                      {stackGroup.items.map((item) => (
                        <div key={item.name} className="flex flex-col text-xs sm:text-sm">
                          <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                            {item.name}
                          </span>
                          <span className="text-text-secondary-light dark:text-text-secondary-dark/70 text-xs">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: CORE FEATURES */}
        {/* ========================================================= */}
        <section id="features" className="space-y-10 scroll-mt-36">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-brand dark:text-purple-400">
              02 // Deep Dive
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
              Core Implementation Features
            </h2>
            <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark/80 max-w-3xl">
              A comprehensive breakdown of the technical capabilities, algorithms, and modules engineered throughout this project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreFeatures.map((feat) => (
              <div
                key={feat.number}
                className="p-7 rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0D0F14] space-y-5 flex flex-col justify-between hover:border-accent-brand/40 dark:hover:border-purple-500/40 transition-all group relative overflow-hidden"
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-elevated-light dark:bg-[#161822] text-accent-brand dark:text-purple-300 border border-border-light dark:border-[#222634]">
                      {feat.number}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-accent-brand/40 group-hover:bg-accent-brand transition-colors" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark/90 leading-relaxed">
                    {feat.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {feat.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-brand dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {feat.codeSnippet && (
                  <div className="mt-4 pt-4 border-t border-border-light/60 dark:border-[#1E222D] relative z-10">
                    <div className="flex items-center justify-between text-[10px] font-mono text-text-secondary-light dark:text-text-secondary-dark/60 mb-2">
                      <span>{feat.codeSnippet.caption || 'Code Reference'}</span>
                      <button
                        onClick={() => handleCopyCode(feat.codeSnippet!.code, feat.number)}
                        className="hover:text-accent-brand transition-colors cursor-pointer"
                      >
                        {copiedSnippet === feat.number ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                    <pre className="p-3.5 rounded-xl bg-[#090A0D] border border-[#1E222D] text-[11px] font-mono text-purple-300 overflow-x-auto no-scrollbar">
                      <code>{feat.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: SYSTEM ARCHITECTURE & FLOW */}
        {/* ========================================================= */}
        <section id="architecture" className="space-y-10 scroll-mt-36">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-brand dark:text-purple-400">
              03 // System Design
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
              Architecture &amp; Data Pipeline
            </h2>
            <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark/80 max-w-3xl">
              {architecture.description}
            </p>
          </div>

          <div className="p-7 sm:p-10 rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0D0F14] space-y-8 relative overflow-hidden">
            {/* Step Progression Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {architecture.diagramSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-border-light dark:border-[#1C202B] bg-elevated-light/40 dark:bg-[#12141C] space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-accent-brand dark:text-purple-400">
                      STEP 0{idx + 1}
                    </span>
                    <ChevronRight className="w-4 h-4 text-text-secondary-light dark:text-text-secondary-dark/40 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div>
                    <div className="text-xs font-mono font-bold text-text-primary-light dark:text-text-primary-dark">
                      {step.from}
                    </div>
                    <div className="text-[11px] font-mono text-accent-brand dark:text-purple-300">
                      ↓ {step.label}
                    </div>
                    <div className="text-xs font-mono font-bold text-text-primary-light dark:text-text-primary-dark">
                      {step.to}
                    </div>
                  </div>

                  {step.description && (
                    <p className="text-[11px] text-text-secondary-light dark:text-text-secondary-dark/70 leading-relaxed border-t border-border-light/60 dark:border-[#1E222D] pt-2">
                      {step.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* ASCII Flowchart Panel */}
            {architecture.asciiFlow && (
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark/60">
                  Visual Execution Schema
                </span>
                <div className="p-5 rounded-2xl bg-[#090A0D] border border-[#1E222D] font-mono text-xs sm:text-sm text-purple-300 overflow-x-auto leading-relaxed">
                  {architecture.asciiFlow.map((line, idx) => (
                    <div key={idx} className="whitespace-pre">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: TECHNICAL CHALLENGES & FIXES */}
        {/* ========================================================= */}
        <section id="challenges" className="space-y-10 scroll-mt-36">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-brand dark:text-purple-400">
              04 // Engineering Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
              Major Challenges &amp; Technical Fixes
            </h2>
            <p className="text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark/80 max-w-3xl">
              Real-world obstacles faced during development and the engineering decisions used to solve them.
            </p>
          </div>

          <div className="space-y-6">
            {challenges.map((ch, idx) => (
              <div
                key={ch.id}
                className="p-7 sm:p-8 rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0D0F14] space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-light/60 dark:border-[#1E222D] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-brand/10 text-accent-brand dark:text-purple-300 border border-accent-brand/20">
                      Challenge 0{idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
                      {ch.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Impact: {ch.impact}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Problem */}
                  <div className="p-5 rounded-2xl bg-rose-500/[0.03] dark:bg-rose-500/[0.05] border border-rose-500/15 dark:border-rose-500/20 space-y-2">
                    <span className="text-xs font-mono font-bold text-rose-500 flex items-center gap-1.5 uppercase">
                      <AlertTriangle className="w-3.5 h-3.5" /> The Problem
                    </span>
                    <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark/90 leading-relaxed">
                      {ch.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-5 rounded-2xl bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05] border border-emerald-500/15 dark:border-emerald-500/20 space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-500 flex items-center gap-1.5 uppercase">
                      <Lightbulb className="w-3.5 h-3.5" /> The Solution
                    </span>
                    <p className="text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark/90 leading-relaxed">
                      {ch.solution}
                    </p>
                  </div>
                </div>

                {ch.codeSnippet && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark/60">
                      Code Implementation Fix
                    </span>
                    <pre className="p-4 rounded-xl bg-[#090A0D] border border-[#1E222D] text-xs font-mono text-purple-300 overflow-x-auto no-scrollbar">
                      <code>{ch.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: CONTRIBUTIONS, LEARNINGS & INTERVIEW PITCH */}
        {/* ========================================================= */}
        <section id="learnings" className="space-y-10 scroll-mt-36">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-brand dark:text-purple-400">
              05 // Reflection
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
              Contributions &amp; Key Takeaways
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Responsibilities & Contributions */}
            <div className="p-7 rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0D0F14] space-y-4">
              <h3 className="text-lg font-display font-bold text-text-primary-light dark:text-text-primary-dark flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-brand" /> Personal Responsibilities
              </h3>
              <div className="space-y-2.5">
                {personalContributions.map((contrib, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    <CheckCircle2 className="w-4 h-4 text-accent-brand shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Learnings */}
            <div className="p-7 rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0D0F14] space-y-4">
              <h3 className="text-lg font-display font-bold text-text-primary-light dark:text-text-primary-dark flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-brand" /> Core Competencies Gained
              </h3>
              <div className="space-y-2.5">
                {keyLearnings.map((learning, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    <span className="w-2 h-2 rounded-full bg-accent-brand shrink-0 mt-2" />
                    <span>{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Interview Walkthrough Pitch */}
          {interviewPitch && (
            <div className="p-7 sm:p-8 rounded-3xl border border-accent-brand/30 bg-gradient-to-br from-accent-brand/[0.04] to-purple-500/[0.02] dark:from-purple-950/20 dark:to-transparent space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-accent-brand dark:text-purple-300">
                <Terminal className="w-4 h-4" /> Technical Interview Summary
              </div>
              <blockquote className="text-sm sm:text-base text-text-primary-light dark:text-text-primary-dark/95 leading-relaxed font-sans italic">
                "{interviewPitch}"
              </blockquote>
            </div>
          )}
        </section>

        {/* ========================================================= */}
        {/* NEXT / PREVIOUS PROJECT NAVIGATION BAR */}
        {/* ========================================================= */}
        <section className="border-t border-border-light/60 dark:border-[#1E222D] pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Previous Project */}
            <Link
              to={`/project/${prevProjectKey}`}
              className="p-6 rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0D0F14] hover:border-accent-brand group transition-all space-y-2"
            >
              <span className="text-[10px] font-mono text-text-secondary-light dark:text-text-secondary-dark/60 uppercase tracking-widest flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Previous Case Study
              </span>
              <div className="text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand transition-colors">
                {prevProject.title}
              </div>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark/70 line-clamp-1">
                {prevProject.category}
              </p>
            </Link>

            {/* Next Project */}
            <Link
              to={`/project/${nextProjectKey}`}
              className="p-6 rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0D0F14] hover:border-accent-brand group transition-all space-y-2 text-right"
            >
              <span className="text-[10px] font-mono text-text-secondary-light dark:text-text-secondary-dark/60 uppercase tracking-widest flex items-center justify-end gap-1">
                Next Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand transition-colors">
                {nextProject.title}
              </div>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark/70 line-clamp-1">
                {nextProject.category}
              </p>
            </Link>
          </div>

          {/* Return to Portfolio Center CTA */}
          <div className="text-center pt-10">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border-light dark:border-[#222634] bg-surface-light dark:bg-[#101218] hover:border-accent-brand text-xs sm:text-sm font-mono uppercase tracking-widest text-text-primary-light dark:text-text-primary-dark hover:text-accent-brand transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Full Portfolio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

// Internal mini-helper icon for target
const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default ProjectDetail;
