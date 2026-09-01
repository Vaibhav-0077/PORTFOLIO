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
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  email: 'vaibhav@example.com',
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
    subtitle: 'A bespoke MERN jewellery platform with an intuitive admin system.',
    description: 'Designed and built a complete full-stack jewellery marketplace. Integrates stateful user carts, custom filters, secure admin portals, Cloudinary asset storage, and transaction support.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Cloudinary', 'EJS'],
    features: [
      'Interactive product catalog with category, price, and status filters',
      'Advanced image thumbnail gallery with high-fidelity magnification zoom',
      'Persistent shopping cart stored in MongoDB for logged-in accounts',
      'Secure admin console for stock management and transaction logs',
      'Cloud storage integration with Cloudinary for fast media optimization',
      'Comprehensive administrative authentication guarding backend routes',
      'Seamless checkout flow and guest session support',
    ],
    problem: 'Boutique retailers often rely on bloated, expensive template services that lack tailored visual styling or fail to capture the premium details of luxury jewelry, resulting in poor customer conversions.',
    solution: 'Engineered a bespoke, lightweight e-commerce engine with modular database schemas, rich imagery zoom, and clean responsive CSS cards that mirror high-end SaaS layouts.',
    challenges: 'Enabling seamless product image magnification and multi-angle thumbnails while keeping load speeds fast under high-density images, and ensuring robust transaction security on the admin routes.',
    learned: 'Gained deep command of relational and non-relational database design patterns, secured endpoint validation, optimized asset delivery through cloud CDNs, and structured state persistence in user sessions.',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'amazon-clone',
    title: 'Amazon Replica',
    category: 'Frontend Recreation',
    subtitle: 'Pixel-perfect frontend recreation of the global retail interface.',
    description: 'Developed a completely responsive replica of the Amazon homepage, product searches, and cart checkout aesthetics. Built exclusively using vanilla HTML, CSS, and modern JavaScript to focus on raw layout mastery.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Fully responsive header navbar matching desktop and mobile breakpoints',
      'Complex multi-column grid categories and sidebar slide-out layouts',
      'Interactive client-side main image slideshow carousel',
      'Dynamic cart counting update system on button click',
    ],
    problem: 'Modern libraries handle styling abstractions, which sometimes weakens a developer\'s grasp of core grid systems, media query boundaries, and CSS priority rules.',
    solution: 'Coded complex layouts from scratch using only standard CSS grids and flexbox, without grid UI libraries or preprocessors, ensuring optimal layout fidelity across screens.',
    challenges: 'Mimicking the extensive navigation sub-menus and hover drawers using pure JavaScript DOM manipulation while keeping rendering times smooth and responsive.',
    learned: 'Mastered precise positioning (absolute, fixed, sticky), responsive grid architectures, structured vanilla CSS file architecture, and modular event listener bindings.',
    liveUrl: '#',
    githubUrl: 'https://github',
    featured: false,
  },
  {
    id: 'hotel-ms',
    title: 'Hotel Management System',
    category: 'Desktop Application',
    subtitle: 'A lightweight booking utility for local hospitality managers.',
    description: 'Designed and implemented a database-backed desktop manager for local hotels and bed-and-breakfasts. Built in Python with direct SQL integration for guest, room, and booking operations.',
    tech: ['Python', 'SQLite'],
    features: [
      'Interactive room reservation check-in and checkout panel',
      'Live query filters to identify vacant, occupied, and maintenance rooms',
      'Internal SQLite database storing complete guest logs and histories',
      'Detailed billing reports generated automatically upon guest checkout',
    ],
    problem: 'Small, local hospitality businesses struggle with manual ledger systems, yet find enterprise management software unnecessarily complex and expensive.',
    solution: 'Designed a simple, locally-deployed desktop suite running on a structured SQLite database, offering an intuitive clerk interface with zero external subscription costs.',
    challenges: 'Tracking reservation states and preventing room double-booking bugs when managing multiple entries with overlapping dates.',
    learned: 'Acquired strong capability in writing pure SQL queries, structuring relational databases, executing state validation, and packaging native desktop applications.',
    liveUrl: '#',
    githubUrl: 'https://github',
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
