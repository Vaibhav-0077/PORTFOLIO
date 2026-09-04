export const PERSONAL_INFO = {
  name: 'Vaibhav',
  title: 'Full-Stack Developer / MERN Stack Specialist',
  location: 'Mumbai, India',
  avatar: '/profile.png',
  status: 'Available for Work & Opportunities',
  bio: `I am a Full-Stack MERN Developer based in Mumbai with a passion for building scalable web applications, robust REST APIs, and modern, highly responsive frontend interfaces. With a B.Sc. in Information Technology (2025), I bridge the gap between technical backend logic and clean digital experiences.`,
  stats: [
    { label: 'Degree', value: 'B.Sc. IT (2025)' },
    { label: 'Specialization', value: 'MERN Stack' },
    { label: 'Location', value: 'Mumbai, IN' },
    { label: 'Status', value: 'Open for Roles' },
  ],
  interests: ['3D Web Experiences', 'Full-Stack Architecture', 'UI/UX Crafting', 'API Systems'],
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/Vaibhav-0077',
  linkedin: 'https://www.linkedin.com/in/vaibhav-guigade-07v',
  email: import.meta.env.VITE_PUBLIC_EMAIL || 'vaibhav@example.com',
  resume: '/resume.pdf',
};

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  problem: string;
  solution: string;
  challenges: string;
  learned: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'lush-jewels',
    title: 'Lush Jewels',
    category: 'Full-Stack E-Commerce',
    subtitle: 'A bespoke MERN jewellery platform with dual checkout & Cloudinary zoom.',
    description: 'Full-stack jewellery marketplace with dynamic MongoDB listings, session-based auth middleware, image magnification zoom, isolated Buy Now checkout flow, and historical order tracking.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Cloudinary', 'EJS'],
    features: [
      'Interactive product catalog with category, price, and material filters',
      'Advanced image thumbnail gallery with high-fidelity magnification zoom',
      'Dual-stream checkout: Full cart checkout vs single-item Buy Now isolation',
      'Persistent shopping cart stored in MongoDB for logged-in accounts',
      'Secure session-based authentication middleware protecting routes',
      'Cloudinary integration for high-performance cloud asset optimization',
      'Comprehensive customer dashboard and past order history ledger',
    ],
    problem: 'Boutique luxury retailers often struggle with standard e-commerce platforms that cannot isolate single-product impulse purchases from full cart sessions, leading to lost sales and poor UX.',
    solution: 'Engineered a bespoke full-stack e-commerce engine with modular database schemas, dual purchase flows, Cloudinary image zoom, and backend session route protection.',
    challenges: 'Preventing Buy Now products from colliding with pre-existing cart sessions and enforcing server-level authentication before any view rendering occurs.',
    learned: 'Deepened command of MVC architecture, session state persistence, relational/non-relational database design, and cloud CDN media pipelines.',
    liveUrl: 'https://lush-jewels.onrender.com/',
    githubUrl: 'https://github.com/Vaibhav-0077/lush-jewels',
    featured: true,
  },
  {
    id: 'country-explorer',
    title: 'Country Explorer',
    category: 'React & API Architecture',
    subtitle: 'Dynamic geographical exploration web app with TanStack Query & multi-API fusion.',
    description: 'Modern React application integrating REST Countries API and CountriesNow API in real-time, featuring TanStack Query caching, dependent queries, dynamic routing, and global search.',
    tech: ['React 18', 'TanStack Query', 'React Router', 'REST APIs', 'CSS Grid', 'JavaScript'],
    features: [
      'Multi-API data fusion reconciling REST Countries and CountriesNow APIs via ISO codes',
      'TanStack React Query integration for server-state caching and loading states',
      'Dependent sequential queries (enabled: !!country) for safe async city data loading',
      'Dynamic parameterized routing (/country/:code) with deep-linking support',
      'Real-time case-insensitive search with state lifted to root layout',
      'Adaptive scroll containers handling high-density city lists (>500 cities)',
    ],
    problem: 'Geographic and demographic data is fragmented across different external APIs with incompatible structures, making unified nation exploration difficult.',
    solution: 'Built a dynamic React SPA that harmonizes disparate REST API payloads into unified TypeScript models with TanStack Query caching and dynamic routing.',
    challenges: 'Synchronizing dependent queries to avoid runtime crashes and maintaining responsive layout symmetry across long country names and gigantic city lists.',
    learned: 'Mastered server-state management with TanStack Query, advanced API normalization, dynamic route parameters, and state lifting across layout boundaries.',
    liveUrl: 'https://country-explorer-ccgh.onrender.com/',
    githubUrl: 'https://github.com/Vaibhav-0077/country-explorer',
    featured: false,
  },
  {
    id: 'hotel-management',
    title: 'Hotel Management System',
    category: 'Desktop Software Architecture',
    subtitle: 'Python & SQLite desktop hospitality suite with automated stay billing.',
    description: 'Database-backed desktop software suite built with Python, Tkinter, and SQLite to automate guest registrations, room allocations, real-time availability checks, and itemized billing invoices.',
    tech: ['Python 3', 'Tkinter GUI', 'SQLite3', 'Pillow (PIL)', 'datetime'],
    features: [
      'Modular multi-window GUI architecture separating CRM, rooms, and billing',
      'Real-time room availability checker preventing duplicate reservations',
      'Automated stay duration and tax computation using Python datetime algorithms',
      'Relational SQLite database with persistent customer logs and transaction histories',
      'Pillow (PIL) integration for high-definition desktop graphical rendering',
      'Defensive input validation and error handling using Tkinter messageboxes',
    ],
    problem: 'Small hospitality operators struggle with manual paper ledgers, while commercial software suites are bloated, expensive, and require ongoing subscriptions.',
    solution: 'Designed a lightweight, standalone desktop suite running on a structured local SQLite database with zero recurring subscription fees and automated billing.',
    challenges: 'Preventing room double-booking bugs during overlapping dates and calculating exact stay durations across month boundaries and leap years.',
    learned: 'Gained strong command of raw SQL relational design, Tkinter window lifecycles, date calculation algorithms, and modular Python system architecture.',
    liveUrl: '',
    githubUrl: 'https://github.com/Vaibhav-0077/Hotel-management-system',
    featured: false,
  },
  {
    id: 'amazon-replica',
    title: 'Amazon Replica',
    category: 'Frontend Engineering',
    subtitle: 'Pixel-perfect e-commerce frontend replica with pure HTML5, CSS3 & JavaScript.',
    description: 'Fully responsive recreation of Amazon’s homepage, product categories, rotating hero banners, client-side pagination, interactive thumbnail galleries, and single-page login/signup.',
    tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Font Awesome', 'Flexbox / Grid'],
    features: [
      'Authentic Amazon header navbar with search bar and secondary category panel',
      'Automatic rotating hero promotional banner powered by vanilla JavaScript timers',
      'Multi-page product exploration with category grids and dynamic ratings',
      'Interactive thumbnail image gallery switcher and full product detail viewer',
      'Smooth client-side pagination with CSS fade transitions and auto-scroll',
      'Single-page interactive Sign-In and Account Creation UI state switcher',
    ],
    problem: 'Relying exclusively on component libraries can weaken understanding of foundational CSS layout models, pure DOM lifecycles, and raw browser APIs.',
    solution: 'Engineered a multi-page e-commerce layout from scratch using only semantic HTML5, CSS Grid/Flexbox, and vanilla JavaScript DOM manipulation.',
    challenges: 'Mimicking Amazon’s complex multi-element navigation and building dynamic product detail switching without a backend server.',
    learned: 'Mastered advanced CSS Grid/Flexbox layouts, responsive breakpoints, vanilla JavaScript DOM manipulation, and structured static asset organization.',
    liveUrl: 'https://amazon-clone-hw9r.onrender.com',
    githubUrl: 'https://github.com/Vaibhav-0077/Amazon_Clone',
    featured: false,
  },
];

export interface SkillGroup {
  category: string;
  items: { name: string; desc: string }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', desc: 'State architecture, performance Hooks, custom Context systems' },
      { name: 'TypeScript', desc: 'Strong typings, type guards, compilation security' },
      { name: 'JavaScript', desc: 'ES6+ features, asynchronous logic, event loops' },
      { name: 'Tailwind CSS', desc: 'Fluid utility styling, design token systems' },
      { name: 'HTML5 & CSS3', desc: 'Semantic layouts, advanced styling, and core animations' },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Node.js', desc: 'V8 server environments, async workflows, module structure' },
      { name: 'Express.js', desc: 'Server routers, secure middleware, rate-limit systems' },
      { name: 'REST APIs', desc: 'CRUD operations, JSON payloads, clean response structures' },
    ],
  },
  {
    category: 'Databases & ORMs',
    items: [
      { name: 'MongoDB', desc: 'NoSQL structures, document nesting, performance aggregations' },
      { name: 'SQL & PostgreSQL', desc: 'Relational design, primary-foreign keys, complex JOIN queries' },
      { name: 'Prisma / Drizzle', desc: 'Relational mapping, direct schema migrations, type-safe queries' },
    ],
  },
  {
    category: 'Tools & Cloud',
    items: [
      { name: 'Git & GitHub', desc: 'Version histories, branching strategies, code review workflows' },
      { name: 'Docker', desc: 'Container isolation, Dockerfiles, dev environment setups' },
      { name: 'Vite', desc: 'Module bundling, fast Hot Module Replacement, optimized builds' },
      { name: 'Cloudinary', desc: 'Cloud storage pipelines, media transformation filters' },
      { name: 'Razorpay', desc: 'Secure payment routing, webhooks verification' },
    ],
  },
];

export interface Service {
  number: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Full-Stack Web Applications',
    desc: 'End-to-end web engineering, integrating client frontends with robust database engines and application servers.',
  },
  {
    number: '02',
    title: 'E-Commerce Platforms',
    desc: 'Stateful online storefronts featuring granular filter capabilities, shopping cart interactions, and payment flows.',
  },
  {
    number: '03',
    title: 'REST APIs & Backend Architectures',
    desc: 'Fast, secure, and clean server routes built with Node.js and Express to manage application data and business rules.',
  },
  {
    number: '04',
    title: 'Premium Interactive Interfaces',
    desc: 'Responsive, highly engaging frontend experiences incorporating micro-interactions, responsive styling, and 3D scenes.',
  },
  {
    number: '05',
    title: 'Admin Portals & Control Panels',
    desc: 'Secure backend-linked control panels to manage database states, upload assets, and inspect client booking details.',
  },
  {
    number: '06',
    title: 'Database-Driven Applications',
    desc: 'Structured MongoDB and SQL relational storage models built for data integrity, quick lookup indexing, and scale.',
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  desc: string;
  special?: boolean;
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: '2026',
    title: 'Taking Admission to MCA',
    institution: 'Master of Computer Applications',
    desc: 'Advancing my academic background by pursuing a Master of Computer Applications to deepen my knowledge in software engineering, algorithms, and system architecture.',
  },
  {
    year: '2025 - 2026',
    title: 'Full Stack Developer Internship',
    institution: 'Crown IT Solutions',
    desc: 'Began professional journey building real-world, full-stack applications. Collaborated with teams to implement scalable backend endpoints and responsive React frontends.',
    special: true,
  },
  {
    year: '2025',
    title: 'B.Sc. in Information Technology',
    institution: 'Mumbai University',
    desc: 'Rigorous studies in computational math, database schemas, object-oriented concepts, and software methodologies.',
  },
  {
    year: '2024',
    title: 'Full-Stack Developer Training & Projects',
    institution: 'Self-Directed & Coding bootcamps',
    desc: 'Mastered the MERN (MongoDB, Express, React, Node) stack. Built several full-scale replica clones and management projects to solidify API routing and database persistence.',
  },
  {
    year: '2023',
    title: 'Initial Entry to Programming',
    institution: 'First Steps',
    desc: 'Began writing scripts in Python and creating web layouts with vanilla HTML/CSS. Discovered a passion for bringing ideas to life through software.',
  },
  {
    year: '2022',
    title: 'Admission to B.Sc. IT',
    institution: 'Undergraduate Studies',
    desc: 'Took admission into the B.Sc. Information Technology program, laying the foundational academic groundwork for my career in software engineering.',
  },
];

export interface CredentialItem {
  id: string;
  type: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const CREDENTIALS: CredentialItem[] = [
  {
    id: 'crown-it',
    type: 'Internship Letter',
    title: 'Full-Stack Developer Internship',
    issuer: 'Crown IT Solutions',
    date: '2025 - 2026',
    link: '#',
  },
  {
    id: 'degree',
    type: 'Academic Degree',
    title: 'B.Sc. Information Technology',
    issuer: 'Mumbai University',
    date: 'Class of 2025',
    link: '#',
  },
  {
    id: 'web-dev',
    type: 'Certification',
    title: 'Advanced Web Development Bootcamp',
    issuer: 'Online Platform / Institute',
    date: '2023',
    link: '#',
  },
  {
    id: 'react-cert',
    type: 'Certification',
    title: 'React & Frontend Architecture',
    issuer: 'Tech Academy',
    date: '2024',
    link: '#',
  }
];
