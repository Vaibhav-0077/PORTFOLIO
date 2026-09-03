export type TechCategory = 'frontend' | 'backend' | 'database' | 'tools';
export type TechTier = 1 | 2 | 3; // 1 = Core, 2 = Supporting, 3 = Tools

export interface ProjectReference {
  name: string;
  projectId?: string;
  role: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: TechCategory;
  categoryLabel: string;
  tier: TechTier;
  shortDesc: string;
  usedIn: ProjectReference[];
  relatedIds: string[];
  iconKey: string;
  accentColor?: string;
  // Position in the desktop interactive visual canvas (normalized percentages)
  coords: { x: number; y: number };
}

export const CATEGORY_FILTERS = [
  { id: 'all', label: 'ALL' },
  { id: 'frontend', label: 'FRONTEND' },
  { id: 'backend', label: 'BACKEND' },
  { id: 'database', label: 'DATABASE' },
  { id: 'tools', label: 'TOOLS' },
] as const;

export const TECH_ITEMS: TechItem[] = [
  // -------------------------------------------------------------
  // TIER 1: CORE TECHNOLOGIES (Primary Visual Prominence)
  // -------------------------------------------------------------
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tier: 1,
    shortDesc: 'Component-driven interfaces & UI architecture',
    usedIn: [
      { name: 'Lush Jewels', projectId: 'lush-jewels', role: 'Storefront UI' },
      { name: 'Portfolio', projectId: 'portfolio', role: 'Interactive Site' },
    ],
    relatedIds: ['typescript', 'javascript', 'tailwind', 'vite', 'nodejs'],
    iconKey: 'react',
    accentColor: '#38BDF8',
    coords: { x: 30, y: 26 },
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    categoryLabel: 'Language',
    tier: 1,
    shortDesc: 'Async logic, DOM operations & ES6+ standards',
    usedIn: [
      { name: 'Amazon Replica', projectId: 'amazon-clone', role: 'Vanilla JS' },
      { name: 'Lush Jewels', projectId: 'lush-jewels', role: 'Full-Stack' },
    ],
    relatedIds: ['react', 'typescript', 'nodejs', 'htmlcss'],
    iconKey: 'javascript',
    accentColor: '#FBBF24',
    coords: { x: 18, y: 46 },
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    categoryLabel: 'Backend',
    tier: 1,
    shortDesc: 'Event-driven server runtime & API services',
    usedIn: [
      { name: 'Lush Jewels', projectId: 'lush-jewels', role: 'Backend Engine' },
    ],
    relatedIds: ['express', 'mongodb', 'restapi', 'react', 'cloudinary'],
    iconKey: 'nodejs',
    accentColor: '#4ADE80',
    coords: { x: 70, y: 26 },
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    categoryLabel: 'Database',
    tier: 1,
    shortDesc: 'Document-oriented data storage & Mongoose aggregation',
    usedIn: [
      { name: 'Lush Jewels', projectId: 'lush-jewels', role: 'Data Layer' },
    ],
    relatedIds: ['nodejs', 'express', 'prisma', 'restapi'],
    iconKey: 'mongodb',
    accentColor: '#22C55E',
    coords: { x: 50, y: 74 },
  },

  // -------------------------------------------------------------
  // TIER 2: SUPPORTING TECHNOLOGIES
  // -------------------------------------------------------------
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tier: 2,
    shortDesc: 'End-to-end type safety & interface contracts',
    usedIn: [
      { name: 'Portfolio', projectId: 'portfolio', role: 'TypeScript' },
    ],
    relatedIds: ['react', 'javascript', 'nodejs', 'vite'],
    iconKey: 'typescript',
    accentColor: '#60A5FA',
    coords: { x: 18, y: 22 },
  },
  {
    id: 'express',
    name: 'Express',
    category: 'backend',
    categoryLabel: 'Backend',
    tier: 2,
    shortDesc: 'REST routing, middleware & controller pipelines',
    usedIn: [
      { name: 'Lush Jewels', projectId: 'lush-jewels', role: 'REST Controllers' },
    ],
    relatedIds: ['nodejs', 'restapi', 'mongodb', 'cloudinary'],
    iconKey: 'express',
    accentColor: '#94A3B8',
    coords: { x: 82, y: 46 },
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tier: 2,
    shortDesc: 'Responsive utility styling & design tokens',
    usedIn: [
      { name: 'Lush Jewels', projectId: 'lush-jewels', role: 'Styling' },
      { name: 'Portfolio', projectId: 'portfolio', role: 'Design Tokens' },
    ],
    relatedIds: ['react', 'htmlcss', 'vite'],
    iconKey: 'tailwind',
    accentColor: '#38BDF8',
    coords: { x: 34, y: 48 },
  },
  {
    id: 'restapi',
    name: 'REST APIs',
    category: 'backend',
    categoryLabel: 'Backend',
    tier: 2,
    shortDesc: 'HTTP resource contracts & JSON endpoints',
    usedIn: [
      { name: 'Lush Jewels', projectId: 'lush-jewels', role: 'API Contracts' },
    ],
    relatedIds: ['nodejs', 'express', 'mongodb', 'react'],
    iconKey: 'restapi',
    accentColor: '#A78BFA',
    coords: { x: 66, y: 48 },
  },
  {
    id: 'postgresql',
    name: 'SQL & PostgreSQL',
    category: 'database',
    categoryLabel: 'Database',
    tier: 2,
    shortDesc: 'Relational data modeling, transactions & queries',
    usedIn: [
      { name: 'Hotel MS', projectId: 'hotel-ms', role: 'Relational Database' },
    ],
    relatedIds: ['mongodb', 'prisma', 'drizzle', 'nodejs'],
    iconKey: 'postgresql',
    accentColor: '#38BDF8',
    coords: { x: 30, y: 78 },
  },
  {
    id: 'htmlcss',
    name: 'HTML & CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tier: 2,
    shortDesc: 'Semantic layouts, Flexbox/Grid & CSS animations',
    usedIn: [
      { name: 'Amazon Replica', projectId: 'amazon-clone', role: 'Layout Architecture' },
    ],
    relatedIds: ['javascript', 'tailwind', 'react'],
    iconKey: 'htmlcss',
    accentColor: '#FB923C',
    coords: { x: 14, y: 64 },
  },

  // -------------------------------------------------------------
  // TIER 3: TOOLS & CLOUD
  // -------------------------------------------------------------
  {
    id: 'vite',
    name: 'Vite',
    category: 'tools',
    categoryLabel: 'Tools',
    tier: 3,
    shortDesc: 'Lightning-fast module bundling & HMR',
    usedIn: [
      { name: 'Portfolio', projectId: 'portfolio', role: 'Build Tooling' },
    ],
    relatedIds: ['react', 'typescript', 'tailwind'],
    iconKey: 'vite',
    accentColor: '#A855F7',
    coords: { x: 42, y: 16 },
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    categoryLabel: 'Tools',
    tier: 3,
    shortDesc: 'Version control & branch isolation',
    usedIn: [
      { name: 'All Repositories', role: 'Version History' },
    ],
    relatedIds: ['docker', 'nodejs', 'react'],
    iconKey: 'git',
    accentColor: '#F97316',
    coords: { x: 58, y: 16 },
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    categoryLabel: 'Tools',
    tier: 3,
    shortDesc: 'Containerized environments & multi-stage builds',
    usedIn: [
      { name: 'Backend Stacks', role: 'Environment Isolation' },
    ],
    relatedIds: ['nodejs', 'git', 'postgresql'],
    iconKey: 'docker',
    accentColor: '#0EA5E9',
    coords: { x: 82, y: 22 },
  },
  {
    id: 'prisma',
    name: 'Prisma / Drizzle',
    category: 'database',
    categoryLabel: 'Database',
    tier: 3,
    shortDesc: 'Type-safe SQL ORM & schema migrations',
    usedIn: [
      { name: 'Full-Stack Apps', role: 'Data Access Layer' },
    ],
    relatedIds: ['postgresql', 'mongodb', 'typescript'],
    iconKey: 'prisma',
    accentColor: '#10B981',
    coords: { x: 70, y: 78 },
  },
  {
    id: 'cloudinary',
    name: 'Cloudinary',
    category: 'tools',
    categoryLabel: 'Tools',
    tier: 3,
    shortDesc: 'Cloud image transformations & CDN pipelines',
    usedIn: [
      { name: 'Lush Jewels', projectId: 'lush-jewels', role: 'Asset Pipeline' },
    ],
    relatedIds: ['nodejs', 'express', 'react'],
    iconKey: 'cloudinary',
    accentColor: '#3B82F6',
    coords: { x: 86, y: 64 },
  },
  {
    id: 'razorpay',
    name: 'Razorpay',
    category: 'tools',
    categoryLabel: 'Tools',
    tier: 3,
    shortDesc: 'Secure checkout integration & webhooks',
    usedIn: [
      { name: 'Lush Jewels', projectId: 'lush-jewels', role: 'Payment Gateway' },
    ],
    relatedIds: ['nodejs', 'express', 'react'],
    iconKey: 'razorpay',
    accentColor: '#2563EB',
    coords: { x: 50, y: 90 },
  },
];

// Visual connection graph structure
export interface TechConnection {
  from: string;
  to: string;
  tier: 1 | 2;
}

export const TECH_CONNECTIONS: TechConnection[] = [
  { from: 'core', to: 'react', tier: 1 },
  { from: 'core', to: 'nodejs', tier: 1 },
  { from: 'core', to: 'mongodb', tier: 1 },
  { from: 'core', to: 'javascript', tier: 1 },

  { from: 'react', to: 'typescript', tier: 1 },
  { from: 'react', to: 'tailwind', tier: 1 },
  { from: 'react', to: 'vite', tier: 2 },
  { from: 'javascript', to: 'htmlcss', tier: 2 },
  { from: 'javascript', to: 'react', tier: 1 },

  { from: 'nodejs', to: 'express', tier: 1 },
  { from: 'express', to: 'restapi', tier: 1 },
  { from: 'nodejs', to: 'docker', tier: 2 },
  { from: 'nodejs', to: 'git', tier: 2 },
  { from: 'express', to: 'cloudinary', tier: 2 },

  { from: 'mongodb', to: 'nodejs', tier: 1 },
  { from: 'mongodb', to: 'postgresql', tier: 2 },
  { from: 'postgresql', to: 'prisma', tier: 2 },
  { from: 'mongodb', to: 'razorpay', tier: 2 },
  { from: 'restapi', to: 'react', tier: 1 },
];
