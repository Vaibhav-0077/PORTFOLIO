export type TechCategory = 'frontend' | 'backend' | 'database' | 'tools';

export interface ProjectReference {
  name: string;
  projectId?: string;
  role: string;
}

export interface TechItem {
  id: string;
  name: string;
  subLabel: string;
  category: TechCategory;
  categoryLabel: string;
  categoryNumber: string;
  description: string;
  useCases: string[];
  project: {
    name: string;
    type: string;
    projectId?: string;
  };
  accentColor: string;
  // Angular coordinates for orbital placement: angle in degrees (0 = top / 12 o'clock), radius percentage
  angleDeg: number;
  radiusPercent: number;
}

export const CATEGORY_FILTERS = [
  { id: 'frontend', number: '01', label: 'FRONTEND' },
  { id: 'backend', number: '02', label: 'BACKEND' },
  { id: 'database', number: '03', label: 'DATABASE' },
  { id: 'tools', number: '04', label: 'TOOLS & CLOUD' },
] as const;

export const TECH_ITEMS: TechItem[] = [
  {
    id: 'react',
    name: 'React',
    subLabel: 'UI Library',
    category: 'frontend',
    categoryLabel: 'FRONTEND',
    categoryNumber: '01',
    description: 'Component-based library for building interactive user interfaces with a declarative and efficient approach.',
    useCases: [
      'Component Architecture',
      'State Management',
      'Performance Optimization',
      'Reusable UI Systems',
    ],
    project: {
      name: 'Lush Jewels',
      type: 'E-commerce Platform',
      projectId: 'lush-jewels',
    },
    accentColor: '#38BDF8',
    angleDeg: 0, // 12 o'clock
    radiusPercent: 37,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    subLabel: 'ES6+ Features',
    category: 'frontend',
    categoryLabel: 'FRONTEND',
    categoryNumber: '01',
    description: 'Core web scripting language driving dynamic client-side logic, asynchronous event loops, and web standards.',
    useCases: [
      'Modern ES6+ Syntax',
      'Async Workflows & Promises',
      'DOM Event Pipelines',
      'Functional Programming',
    ],
    project: {
      name: 'Amazon Replica',
      type: 'E-commerce UI & Cart',
      projectId: 'amazon-clone',
    },
    accentColor: '#F7DF1E',
    angleDeg: 36, // ~1:15
    radiusPercent: 37,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    subLabel: 'Runtime Environment',
    category: 'backend',
    categoryLabel: 'BACKEND',
    categoryNumber: '02',
    description: 'High-performance V8 JavaScript runtime built for scalable server architecture, event loops, and non-blocking I/O.',
    useCases: [
      'Event-Driven Architecture',
      'RESTful API Microservices',
      'Non-Blocking File & Network I/O',
      'Authentication Middleware',
    ],
    project: {
      name: 'Lush Jewels',
      type: 'Backend Server Engine',
      projectId: 'lush-jewels',
    },
    accentColor: '#5FA04E',
    angleDeg: 72, // ~2:30 - 3:00
    radiusPercent: 37,
  },
  {
    id: 'express',
    name: 'Express.js',
    subLabel: 'Web Framework',
    category: 'backend',
    categoryLabel: 'BACKEND',
    categoryNumber: '02',
    description: 'Minimal and robust server framework powering routing controllers, request validation, and API middlewares.',
    useCases: [
      'REST Routing Controllers',
      'Middleware Pipelines',
      'CORS & Security Configuration',
      'Standardized Error Handlers',
    ],
    project: {
      name: 'Lush Jewels',
      type: 'REST API Controllers',
      projectId: 'lush-jewels',
    },
    accentColor: '#CBD5E1',
    angleDeg: 108, // ~3:45 - 4:00
    radiusPercent: 37,
  },
  {
    id: 'cloudinary',
    name: 'Cloudinary',
    subLabel: 'Image Management',
    category: 'tools',
    categoryLabel: 'TOOLS & CLOUD',
    categoryNumber: '04',
    description: 'End-to-end cloud platform for media assets, dynamic transformations, image optimization, and CDN delivery.',
    useCases: [
      'Cloud Media Asset Storage',
      'Dynamic Format Transformations',
      'Global CDN Delivery',
      'Secure Upload Signatures',
    ],
    project: {
      name: 'Lush Jewels',
      type: 'Product Media CDN',
      projectId: 'lush-jewels',
    },
    accentColor: '#3448C5',
    angleDeg: 144, // ~4:45 - 5:00
    radiusPercent: 37,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    subLabel: 'NoSQL Database',
    category: 'database',
    categoryLabel: 'DATABASE',
    categoryNumber: '03',
    description: 'Document-oriented database offering dynamic BSON schemas, flexible indexing, and high-performance querying.',
    useCases: [
      'Flexible Schema Architecture',
      'Aggregation Pipelines',
      'Mongoose ODM Integration',
      'Indexing & Fast Querying',
    ],
    project: {
      name: 'Lush Jewels',
      type: 'Database & Data Layer',
      projectId: 'lush-jewels',
    },
    accentColor: '#22C55E',
    angleDeg: 180, // 6:00
    radiusPercent: 37,
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    subLabel: 'Version Control',
    category: 'tools',
    categoryLabel: 'TOOLS & CLOUD',
    categoryNumber: '04',
    description: 'Distributed version control and collaborative software repository management with branch isolation and CI/CD.',
    useCases: [
      'Branching & Release Workflows',
      'Commit History Integrity',
      'PR Review & Collaboration',
      'CI/CD GitHub Actions',
    ],
    project: {
      name: 'All Repositories',
      type: 'Source Control & History',
    },
    accentColor: '#F05032',
    angleDeg: 216, // ~7:15
    radiusPercent: 37,
  },
  {
    id: 'htmlcss',
    name: 'HTML / CSS',
    subLabel: 'Structure & Styling',
    category: 'frontend',
    categoryLabel: 'FRONTEND',
    categoryNumber: '01',
    description: 'Semantic markup standards and advanced modern CSS layout systems including Flexbox, CSS Grid, and responsive design.',
    useCases: [
      'Semantic Document Hierarchy',
      'Flexbox & Grid Layouts',
      'Accessibility & WCAG Standards',
      'Responsive Mobile-First CSS',
    ],
    project: {
      name: 'Amazon Replica',
      type: 'Pixel-Perfect Architecture',
      projectId: 'amazon-clone',
    },
    accentColor: '#E34F26',
    angleDeg: 252, // ~8:30
    radiusPercent: 37,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    subLabel: 'Utility First CSS',
    category: 'frontend',
    categoryLabel: 'FRONTEND',
    categoryNumber: '01',
    description: 'Utility-first CSS framework enabling design token standardization, responsive layouts, and consistent spacing.',
    useCases: [
      'Design Token Standardization',
      'Rapid Responsive Layouts',
      'Theme & Dark Mode Integration',
      'Component Utility Composition',
    ],
    project: {
      name: 'Lush Jewels',
      type: 'Design System & UI',
      projectId: 'lush-jewels',
    },
    accentColor: '#38BDF8',
    angleDeg: 288, // ~9:45
    radiusPercent: 37,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    subLabel: 'Typed JavaScript',
    category: 'frontend',
    categoryLabel: 'FRONTEND',
    categoryNumber: '01',
    description: 'Strict syntactic superset of JavaScript providing static type checking, contract safety, and IDE tooling.',
    useCases: [
      'Strict Type Checking',
      'Contract & Interface Design',
      'Refactoring Reliability',
      'Predictable API Integration',
    ],
    project: {
      name: 'Portfolio',
      type: 'Interactive Portfolio Site',
      projectId: 'portfolio',
    },
    accentColor: '#3178C6',
    angleDeg: 324, // ~10:45
    radiusPercent: 37,
  },
  {
    id: 'restapi',
    name: 'REST APIs',
    subLabel: 'HTTP Architecture',
    category: 'backend',
    categoryLabel: 'BACKEND',
    categoryNumber: '02',
    description: 'Standardized HTTP resource communication protocol using REST conventions, JSON payloads, and stateless sessions.',
    useCases: [
      'Standardized CRUD Endpoints',
      'JWT Authentication Headers',
      'Clean Response Contracts',
      'Stateless Request Pipelines',
    ],
    project: {
      name: 'Lush Jewels',
      type: 'Storefront & Admin API',
      projectId: 'lush-jewels',
    },
    accentColor: '#A78BFA',
    angleDeg: 0, // extra item in catalog for pagination 11
    radiusPercent: 0, // catalog only
  },
];

export const SKILLS_METRICS = [
  {
    id: 'tech-count',
    title: '20+',
    subtitle: 'Technologies',
    icon: 'box',
  },
  {
    id: 'full-stack',
    title: 'Full Stack',
    subtitle: 'End-to-End Development',
    icon: 'code',
  },
  {
    id: 'real-projects',
    title: 'Real Projects',
    subtitle: 'Built & Deployed',
    icon: 'rocket',
  },
  {
    id: 'always-learning',
    title: 'Always Learning',
    subtitle: 'Exploring New Technologies',
    icon: 'zap',
  },
] as const;
