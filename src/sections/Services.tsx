import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { 
  Globe, 
  Server, 
  ShoppingCart, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  CheckCircle2
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ApiSandbox } from '../components/ApiSandbox';
import { staggerContainer, itemReveal, fadeInUp } from '../utils/animations';

interface BentoService {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  tagline: string;
  desc: string;
  deliverables: string[];
  tech: string[];
  icon: LucideIcon;
  colSpan: string;
  glowColor: string;
}

const BENTO_SERVICES: BentoService[] = [
  {
    id: 'fullstack',
    number: '01',
    eyebrow: '// FULL-STACK SYSTEM',
    title: 'Full-Stack Web Applications',
    tagline: 'End-to-End MERN Engineering',
    desc: 'Complete architectural lifecycle from dynamic React frontends to robust Node.js backend pipelines, persistent data storage, and scalable cloud hosting.',
    deliverables: [
      'Complete MERN architectural integration',
      'Sub-100ms response cycles & state synchronization',
      'Optimized production cloud deployments',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    icon: Globe,
    colSpan: 'lg:col-span-7',
    glowColor: 'from-purple-500/10 via-indigo-500/5 to-transparent',
  },
  {
    id: 'apis',
    number: '02',
    eyebrow: '// API ARCHITECTURE',
    title: 'REST APIs & Scalable Backends',
    tagline: 'High-Throughput Services',
    desc: 'Clean server routers with centralized error handling, rate limiting, and structured JSON responses designed for high concurrency and zero downtime.',
    deliverables: [
      'Centralized async error-handling middleware',
      'IP-based request rate limiting & DDoS guards',
      'Standardized JSON response envelope protocols',
    ],
    tech: ['Node.js', 'Express.js', 'REST APIs', 'JWT / Sessions'],
    icon: Server,
    colSpan: 'lg:col-span-5',
    glowColor: 'from-indigo-500/10 via-sky-500/5 to-transparent',
  },
  {
    id: 'ecommerce',
    number: '03',
    eyebrow: '// COMMERCE & PAYMENTS',
    title: 'E-Commerce & Checkout Engines',
    tagline: 'Conversion-Focused Platforms',
    desc: 'Stateful storefronts featuring granular filter capabilities, dual-stream checkout isolation, persistent shopping carts, and order history ledgers.',
    deliverables: [
      'Isolated Buy Now vs Cart checkout flows',
      'Cloudinary high-res magnification zoom',
      'Persistent user cart state stored in database',
    ],
    tech: ['MongoDB', 'Cloudinary', 'EJS / React', 'Tailwind CSS'],
    icon: ShoppingCart,
    colSpan: 'lg:col-span-5',
    glowColor: 'from-emerald-500/10 via-teal-500/5 to-transparent',
  },
  {
    id: 'frontend',
    number: '04',
    eyebrow: '// UI & INTERACTION',
    title: 'Modern Frontend & 3D Interfaces',
    tagline: 'Ultra-Responsive Digital Craft',
    desc: 'Highly engaging user interfaces crafted with smooth micro-animations, glassmorphic design tokens, and WebGL Three.js elements that elevate user experience.',
    deliverables: [
      'Fluid responsive breakpoints & design tokens',
      'Three.js interactive 3D WebGL scenes',
      'Framer Motion fluid micro-interactions',
    ],
    tech: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    icon: Sparkles,
    colSpan: 'lg:col-span-7',
    glowColor: 'from-cyan-500/10 via-purple-500/5 to-transparent',
  },
  {
    id: 'admin',
    number: '05',
    eyebrow: '// CMS & DASHBOARDS',
    title: 'Admin Portals & Control Panels',
    tagline: 'Operational Control Systems',
    desc: 'Secure backend-linked management dashboards to manage database records, inspect booking details, and monitor platform metrics with role-based access.',
    deliverables: [
      'Role-based access control (RBAC) route guards',
      'Real-time database CRUD operations',
      'Dynamic metrics & platform state visualization',
    ],
    tech: ['React', 'Node.js', 'Mongoose', 'Chart UI'],
    icon: ShieldCheck,
    colSpan: 'lg:col-span-6',
    glowColor: 'from-amber-500/10 via-orange-500/5 to-transparent',
  },
  {
    id: 'database',
    number: '06',
    eyebrow: '// DATA & AGGREGATIONS',
    title: 'Database Modeling & NoSQL Systems',
    tagline: 'Optimized Storage Pipelines',
    desc: 'Structured MongoDB and relational data schemas built with compound indexing for sub-10ms lookup speeds and multi-stage aggregation pipelines.',
    deliverables: [
      'Compound indexing for O(log n) query lookups',
      'Multi-stage $lookup aggregation pipelines',
      'Strict Mongoose schema validation & hooks',
    ],
    tech: ['MongoDB Atlas', 'PostgreSQL', 'Mongoose ODM', 'Indexing'],
    icon: Database,
    colSpan: 'lg:col-span-6',
    glowColor: 'from-violet-500/10 via-purple-500/5 to-transparent',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden theme-transition bg-elevated-light/40 dark:bg-[#0C0E12]">
      {/* Ambient background layers */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.012] dark:opacity-[0.015] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <SectionHeader
          number="02 // Services"
          title="What I Can"
          highlightText="Build & Deliver"
          subtitle="Production-ready full-stack software products engineered with industry-standard web frameworks, clean architecture, and scalable performance."
        />

        {/* Bento Grid Layout */}
        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {BENTO_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemReveal}
                className={`${service.colSpan} group relative rounded-3xl border border-border-light dark:border-[#1E222D] bg-surface-light dark:bg-[#0E1017] hover:border-accent-brand/40 dark:hover:border-accent-brand/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
              >
                {/* Subtle Radial Glow on Hover */}
                <div className={`absolute -inset-10 bg-gradient-to-br ${service.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 space-y-6">
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Glowing Frosted Icon Box */}
                    <div className="w-12 h-12 rounded-2xl bg-accent-brand/10 dark:bg-accent-brand/15 border border-accent-brand/20 flex items-center justify-center text-accent-brand group-hover:scale-110 group-hover:bg-accent-brand group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Number Badge */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-elevated-light dark:bg-[#141722] border border-border-light dark:border-[#222736] text-text-secondary-light dark:text-text-secondary-dark">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-accent-brand uppercase">
                      {service.eyebrow}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-brand dark:group-hover:text-purple-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Key Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-border-light/60 dark:border-[#1C202B]">
                    <span className="text-[11px] font-mono text-text-secondary-light/70 dark:text-text-secondary-dark/60 uppercase tracking-wider font-semibold block mb-1">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary-light dark:text-text-secondary-dark/90 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-brand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges Footer */}
                <div className="relative z-10 flex flex-wrap gap-2 pt-5 mt-6 border-t border-border-light/60 dark:border-[#1C202B]">
                  {service.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-elevated-light dark:bg-[#141722] border border-border-light dark:border-[#222736] text-text-secondary-light dark:text-text-secondary-dark font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Backend / API Sandbox Console */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          <ApiSandbox />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
