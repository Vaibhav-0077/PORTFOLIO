export interface ProjectDetailData {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  category: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
  accentColor: string; // Tailwind color class or hex
  glowColor: string;
  iconName: string;
  
  overview: {
    summary: string;
    objectives?: string[];
    purpose?: string;
    architectureType: string;
    role: string;
    database?: string;
    authMethod?: string;
    hosting?: string;
  };

  techStack: {
    category: string;
    items: { name: string; desc: string; icon?: string }[];
  }[];

  coreFeatures: {
    number: string;
    title: string;
    description: string;
    highlights: string[];
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
  }[];

  architecture: {
    title: string;
    description: string;
    diagramSteps: {
      from: string;
      to: string;
      label?: string;
      description?: string;
    }[];
    asciiFlow?: string[];
  };

  challenges: {
    id: string;
    title: string;
    problem: string;
    solution: string;
    codeSnippet?: {
      language: string;
      code: string;
    };
    impact: string;
  }[];

  personalContributions: string[];
  keyLearnings: string[];
  interviewPitch?: string;
}

export const PROJECT_DETAILS: Record<string, ProjectDetailData> = {
  'lush-jewels': {
    id: 'lush-jewels',
    title: 'Lush Jewels',
    tagline: 'Full-Stack Jewellery E-Commerce with Session Auth, Cloudinary & Custom Checkout Pipeline',
    badge: 'Full-Stack Showcase',
    category: 'Full-Stack E-Commerce',
    liveUrl: 'https://lush-jewels.onrender.com/',
    githubUrl: 'https://github.com/Vaibhav-0077/lush-jewels',
    featured: true,
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.25)',
    iconName: 'Gem',

    overview: {
      summary:
        'Lush Jewels is a full-stack jewellery e-commerce platform developed to provide a seamless, premium online luxury shopping experience. Users can explore curated jewellery collections, view high-resolution zoomable assets, manage persistent user carts, execute instant single-item "Buy Now" purchases, complete validated checkouts, and review detailed order histories in their personal dashboard.',
      purpose:
        'To build an end-to-end luxury retail solution from scratch with custom database models, dual-mode checkout pipelines, secure session-based authentication middleware, and cloud asset distribution.',
      architectureType: 'MVC (Model-View-Controller) Monolith',
      role: 'Full-Stack Architect & Frontend/Backend Developer',
      database: 'MongoDB Atlas & Mongoose ODM',
      authMethod: 'Express Session & Protected Route Middleware',
      hosting: 'Render Cloud Deployment',
    },

    techStack: [
      {
        category: 'Frontend & UI',
        items: [
          { name: 'HTML5 & EJS', desc: 'Server-side templated dynamic page rendering' },
          { name: 'Tailwind CSS', desc: 'Custom responsive design system with breakpoints' },
          { name: 'Vanilla JavaScript', desc: 'DOM manipulation, image zoom, live search & toasts' },
        ],
      },
      {
        category: 'Backend & Server',
        items: [
          { name: 'Node.js & Express.js', desc: 'REST routing, controller logic & custom middleware' },
          { name: 'Express Session', desc: 'Stateful session management & route security' },
        ],
      },
      {
        category: 'Database & Cloud',
        items: [
          { name: 'MongoDB Atlas', desc: 'NoSQL document storage for users, products & orders' },
          { name: 'Mongoose ODM', desc: 'Data schema validation & relational document queries' },
          { name: 'Cloudinary CDN', desc: 'High-speed cloud image hosting & transformations' },
        ],
      },
    ],

    coreFeatures: [
      {
        number: '01',
        title: 'User Authentication & Protected Middleware',
        description:
          'Secure registration, login, session persistence, and custom route guard middleware preventing unauthorized access to checkout and profile data.',
        highlights: [
          'Session-based state persistence across browsing sessions',
          'Custom requireUserLogin middleware protecting sensitive endpoints',
          'Automatic error alerts and user redirection',
        ],
      },
      {
        number: '02',
        title: 'Dynamic MongoDB Product Management',
        description:
          'Data-driven catalog pulling rich jewellery metadata, pricing, materials, categories, and Cloudinary image arrays directly from MongoDB.',
        highlights: [
          'Admin panel to create, update, and remove listings',
          'Categorized by design, material, occasion, and collection',
          'No hardcoded product elements',
        ],
      },
      {
        number: '03',
        title: 'High-Fidelity Product Detail & Zoom Gallery',
        description:
          'Interactive thumbnail switcher with image magnification zoom, stock availability badges, and dual action triggers (Add to Cart vs Buy Now).',
        highlights: [
          'Dynamic thumbnail switching on hover/click',
          'Smooth JavaScript cursor-follow image magnification',
          'Real-time pricing and stock validation',
        ],
      },
      {
        number: '04',
        title: 'Stateful Cart & Isolated "Buy Now" Engine',
        description:
          'Engineered two isolated checkout streams: Multi-product Cart Checkout and Single-product direct "Buy Now" without contaminating existing cart items.',
        highlights: [
          'Cart synced to MongoDB for authenticated accounts',
          'Quantity adjustments with instant total re-calculation',
          'Isolated temporary state for instant Buy Now purchases',
        ],
        codeSnippet: {
          language: 'javascript',
          code: `// Dual Purchase Stream Architecture
// Stream A: Cart Checkout -> Multiple items from DB
// Stream B: Buy Now -> Single isolated item passed via temporary payload
router.post('/checkout', requireUserLogin, async (req, res) => {
  const isBuyNow = req.body.source === 'buy_now';
  const checkoutItems = isBuyNow 
    ? [await Product.findById(req.body.productId)]
    : req.session.user.cart.items;
  res.render('checkout', { items: checkoutItems, isBuyNow });
});`,
          caption: 'Isolated Buy Now vs Cart Checkout routing logic',
        },
      },
      {
        number: '05',
        title: 'Client-Side Validated Checkout Pipeline',
        description:
          'Comprehensive multi-step form with regex validation for 10-digit phone numbers and 6-digit postal PIN codes, complete with visual error states and toast notifications.',
        highlights: [
          'Client-side instant validation before payload submission',
          'Address, landmark, state, and payment method capture',
          'Generates immutable MongoDB order record with unique transaction ID',
        ],
      },
      {
        number: '06',
        title: 'Account Dashboard & Historical Order Ledger',
        description:
          'Authenticated customer profile displaying past transactions, order dates, purchased items, payment status, and delivery tracking information.',
        highlights: [
          'Linked directly with MongoDB order collection',
          'Detailed receipt breakdown per transaction',
          'Profile details and session termination',
        ],
      },
    ],

    architecture: {
      title: 'Full-Stack Request & Cloud Asset Flow',
      description:
        'Lush Jewels utilizes a structured MVC pattern where EJS views communicate with Express controllers, interacting with MongoDB for persistence and Cloudinary for asset distribution.',
      diagramSteps: [
        { from: 'Customer Browser', to: 'Express Server', label: 'HTTP / EJS Views', description: 'User navigates catalog, adds items or triggers Buy Now' },
        { from: 'Express Server', to: 'Auth Middleware', label: 'Session Validation', description: 'Checks req.session.user before restricted pages' },
        { from: 'Auth Middleware', to: 'MongoDB Atlas', label: 'Mongoose Queries', description: 'Retrieves products, user carts, and stores completed orders' },
        { from: 'Admin Console', to: 'Cloudinary CDN', label: 'Asset Uploads', description: 'Jewellery images uploaded and served via global CDN URLs' },
      ],
      asciiFlow: [
        'Client (EJS + Tailwind) ──► Express.js Routes ──► Auth Middleware',
        '                                │',
        '                                ▼',
        '        Cloudinary CDN ◄── Controller ──► MongoDB Atlas',
        '        (Optimized Images)                (Users, Products, Orders)',
      ],
    },

    challenges: [
      {
        id: 'c1',
        title: 'Buy Now vs Cart Checkout State Collision',
        problem:
          'When clicking "Buy Now", the checkout page would initially fetch and load all pre-existing cart products instead of only the single selected jewellery item.',
        solution:
          'Decoupled the checkout pipeline into two explicit workflows: Cart Checkout (reads persistent DB cart) and Buy Now (creates an ephemeral single-product checkout context without overwriting the user’s cart).',
        impact: 'Flawless checkout UX with zero cart corruption for impulse buyers.',
      },
      {
        id: 'c2',
        title: 'Preventing Unauthenticated Checkout Page Access',
        problem:
          'Logged-out users navigating directly or via browser history could momentarily see the checkout UI before client-side scripts triggered a redirect.',
        solution:
          'Created backend route-level security with `requireUserLogin` middleware that intercepts the request on the server before any HTML/EJS rendering occurs.',
        codeSnippet: {
          language: 'javascript',
          code: `function requireUserLogin(req, res, next) {
  if (!req.session.user) {
    req.session.returnTo = req.originalUrl;
    return res.redirect('/login?error=auth_required');
  }
  next();
}`,
        },
        impact: 'Robust server-side authorization ensuring 100% data privacy.',
      },
      {
        id: 'c3',
        title: 'Search Result Duplication & Card Style Discrepancy',
        problem:
          'Two independent search scripts were executing: one filtering existing DOM cards and another injecting new HTML cards into a search container, resulting in duplicates and mismatched button styles.',
        solution:
          'Unified the search logic into a single centralized handler that filters the master product dataset and renders consistent card templates using standard Tailwind utility classes.',
        impact: 'Seamless, instant search experience across desktop and mobile.',
      },
      {
        id: 'c4',
        title: 'Cloudinary Asset Integration & Responsive Breakpoints',
        problem:
          'Local image storage caused deployment size bloat on Render and large images slowed mobile screen rendering.',
        solution:
          'Configured Cloudinary CDN for cloud-based media delivery and implemented responsive CSS grid breakpoints tailored for mobile, tablet, and widescreen viewports.',
        impact: '90%+ faster asset loading and full responsiveness on all devices.',
      },
    ],

    personalContributions: [
      'Designed the complete UI/UX aesthetic tailored for luxury jewellery branding.',
      'Constructed all responsive EJS templates, navigation headers, and checkout layouts.',
      'Developed custom Express route handlers, session controllers, and auth middleware.',
      'Architected Mongoose schemas for Users, Products, Carts, and Orders.',
      'Integrated Cloudinary API for cloud-hosted asset management.',
      'Implemented front-end JavaScript for image zooming, thumbnail swapping, and form validation.',
      'Deployed and configured live production environment on Render.',
    ],

    keyLearnings: [
      'Mastered the nuances between client-side state handling and server-side session authority.',
      'Learned how to design scalable e-commerce database schemas in MongoDB.',
      'Understood how to handle edge cases like dual-mode checkout pipelines and cart isolation.',
      'Gained deep experience in production deployment, environment variables, and CDN asset management.',
    ],

    interviewPitch:
      'Lush Jewels is a full-stack jewellery e-commerce application built with Node.js, Express, MongoDB, and Tailwind CSS. I built both the frontend and backend from scratch, featuring dynamic product catalogs, a custom Cloudinary image zoom gallery, session-based authentication, and a dual checkout engine supporting both full-cart orders and instant "Buy Now" purchases. A major challenge was isolating Buy Now transactions from existing cart states and securing checkout routes on the server side, which I solved with clean Express middleware and separated controller pipelines.',
  },

  'country-explorer': {
    id: 'country-explorer',
    title: 'Country Explorer',
    tagline: 'React Geographic Exploration Web App with TanStack Query & Multi-API Data Fusion',
    badge: 'React & API Architecture',
    category: 'React & API Engineering',
    liveUrl: 'https://country-explorer-ccgh.onrender.com/',
    githubUrl: 'https://github.com/Vaibhav-0077/country-explorer',
    featured: false,
    accentColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    iconName: 'Globe2',

    overview: {
      summary:
        'Country Explorer is a modern React web application that aggregates, merges, and presents rich geographic and administrative data from multiple third-party REST APIs into a unified, interactive country profile. Users can explore global nations, perform real-time case-insensitive filtering, inspect demographic details, flags, coat of arms, currencies, languages, time zones, and browse administrative states and cities.',
      purpose:
        'To solve data fragmentation across geographic APIs by merging REST Countries API and CountriesNow API in real-time, backed by TanStack React Query for caching, loading states, and dependent queries.',
      architectureType: 'Component-Based SPA with Dynamic Routing',
      role: 'Frontend Architect & React Engineer',
      database: 'TanStack React Query Cache (Server State)',
      authMethod: 'Public REST API Consumption',
      hosting: 'Render Cloud Deployment',
    },

    techStack: [
      {
        category: 'Core Framework & State',
        items: [
          { name: 'React 18', desc: 'Component architecture, custom hooks, and context' },
          { name: 'TanStack React Query', desc: 'Server-state caching, loading/error states & dependent queries' },
          { name: 'React Router DOM', desc: 'Dynamic parameterized routes (/country/:code) & Outlet context' },
        ],
      },
      {
        category: 'APIs & Data Services',
        items: [
          { name: 'REST Countries API', desc: 'Demographics, flags, currencies, languages & coat of arms' },
          { name: 'CountriesNow API', desc: 'Administrative geographic data: states, ISO codes & cities' },
        ],
      },
      {
        category: 'Styling & Optimization',
        items: [
          { name: 'Modern CSS & CSS Grid', desc: 'Dynamic column breakpoints from 400px to 1200px' },
          { name: 'JavaScript ES6+', desc: 'Array transformations, key mapping & filtering algorithms' },
        ],
      },
    ],

    coreFeatures: [
      {
        number: '01',
        title: 'Multi-API Data Fusion Engine',
        description:
          'Maps and harmonizes two disparate API data structures by reconciling ISO country codes (`cca2` vs `iso2`) to produce unified country objects containing full demographics and city lists.',
        highlights: [
          'Reconciles different schema naming conventions',
          'Combines demographic stats with administrative state/city lists',
          'Eliminates duplicate queries with TanStack Query caching',
        ],
        codeSnippet: {
          language: 'javascript',
          code: `// Multi-API Data Harmonization
// REST Countries uses 'cca2' -> 'IN'
// CountriesNow uses 'iso2' -> 'IN'
const mergedCountryData = restCountries.map(country => {
  const geoMatch = countriesNowData.find(g => g.iso2 === country.cca2);
  return {
    ...country,
    states: geoMatch ? geoMatch.states : [],
    cities: geoMatch ? geoMatch.cities : []
  };
});`,
          caption: 'Harmonizing two external REST APIs by ISO code',
        },
      },
      {
        number: '02',
        title: 'TanStack Query Server-State Architecture',
        description:
          'Eliminated boilerplate `useEffect` fetching with TanStack React Query, delivering instant cached transitions, automatic background refetching, and graceful error fallbacks.',
        highlights: [
          'Automatic query key caching for visited countries',
          'Custom retry mechanisms and offline error screens',
          'Optimized network payload utilization',
        ],
      },
      {
        number: '03',
        title: 'Dependent Sequential API Queries',
        description:
          'Leveraged React Query’s `enabled: !!country` configuration to sequence API calls, fetching detailed cities and states only after primary country data resolves.',
        highlights: [
          'Guards against undefined property runtime crashes',
          'Displays skeleton loaders while secondary data streams in',
          'Handles asynchronous timing mismatches smoothly',
        ],
      },
      {
        number: '04',
        title: 'Dynamic Parameterized Routing (`/country/:code`)',
        description:
          'Configured React Router to handle dynamic URL parameters, enabling direct bookmarking, shareable links, and browser back/forward history navigation.',
        highlights: [
          'Reads `:code` parameter via useParams() hook',
          'Supports direct deep links like `/country/IN` or `/country/JP`',
          'Centralized layout wrapper preserving header search across routes',
        ],
      },
      {
        number: '05',
        title: 'Real-Time Case-Insensitive Search & State Lifting',
        description:
          'Global search state managed at the root `MainLayout` level and shared with routed views via React Router outlet context, providing instantaneous filtering as the user types.',
        highlights: [
          'Case-insensitive matching across country names and codes',
          'Zero delay or debounced lag during card filtering',
          'Maintains search text when navigating between views',
        ],
      },
      {
        number: '06',
        title: 'Adaptive Data Virtualization & Scroll Containers',
        description:
          'Addressed extreme data payloads (e.g. countries with 500+ cities) using max-height scroll containers and name truncation to preserve grid symmetry.',
        highlights: [
          'Card name truncation for strings > 25 characters with tooltips',
          'Constrained city/state scroll container with custom scrollbar',
          'Responsive grid layout adapting across 7 screen breakpoints',
        ],
      },
    ],

    architecture: {
      title: 'Dependent Query & Multi-Source Merging Pipeline',
      description:
        'The application fetches base country demographics from REST Countries API and administrative state/city data from CountriesNow API, merging both into unified client state.',
      diagramSteps: [
        { from: 'User Search / Route', to: 'TanStack Query', label: 'useQuery Hook', description: 'Checks query cache before triggering network request' },
        { from: 'TanStack Query', to: 'REST Countries API', label: 'Primary Fetch', description: 'Retrieves core country profile (name, flag, pop, cca2)' },
        { from: 'Primary Country Data', to: 'CountriesNow API', label: 'Dependent Query', description: 'Triggered when country code exists (enabled: !!country)' },
        { from: 'Merged Data Model', to: 'React Component View', label: 'UI Render', description: 'Presents demographic stats, coat of arms & scrollable cities' },
      ],
      asciiFlow: [
        'User / Route (/country/IN) ──► TanStack React Query',
        '                                      │',
        '         ┌────────────────────────────┴────────────────────────────┐',
        '         ▼                                                         ▼',
        'REST Countries API (cca2)                               CountriesNow API (iso2)',
        '         │                                                         │',
        '         └──────────────────► Merged Country Model ◄───────────────┘',
        '                                      │',
        '                                      ▼',
        '                        Dynamic Country Detail Page',
      ],
    },

    challenges: [
      {
        id: 'c1',
        title: 'Mismatched Data Schemas Across External APIs',
        problem:
          'REST Countries API uses `cca2` for country codes, whereas CountriesNow uses `iso2`. Furthermore, country naming variations caused mismatch errors when searching by name.',
        solution:
          'Standardized all data merging on ISO-3166 two-letter alpha codes rather than variable country names, transforming disparate payloads into a single uniform TypeScript model.',
        impact: '100% data correlation accuracy with zero broken country profiles.',
      },
      {
        id: 'c2',
        title: 'Asynchronous Dependent Data Timing Mismatch',
        problem:
          'Fetching city data required the country name, but secondary queries executed before the initial country query resolved, causing undefined property runtime errors.',
        solution:
          'Implemented TanStack Query’s `enabled: !!country` conditional fetching flag, ensuring dependent queries only execute once prerequisite data is in cache.',
        impact: 'Robust asynchronous flow with zero undefined exceptions.',
      },
      {
        id: 'c3',
        title: 'Search State Coordination Across Route Boundaries',
        problem:
          'The search bar resides in the global header, while the country grid is rendered inside child route components.',
        solution:
          'Lifted search state to `MainLayout` and distributed it to child views using React Router’s `useOutletContext()`, keeping search reactive without prop drilling.',
        impact: 'Clean component separation and seamless global search.',
      },
      {
        id: 'c4',
        title: 'Extreme City List Length Degrading Page Performance',
        problem:
          'Nations with hundreds of cities (e.g. India, United States) created gigantic pages and caused heavy DOM rendering delays.',
        solution:
          'Implemented constrained scrollable containers with fixed heights and clean badge grouping, allowing smooth scrolling without elongating the main page.',
        impact: 'Compact, readable UI regardless of data volume.',
      },
    ],

    personalContributions: [
      'Architected the entire React component hierarchy from ground up.',
      'Designed and integrated the TanStack Query caching and dependent query layer.',
      'Implemented data reconciliation algorithms merging two external REST APIs.',
      'Constructed dynamic React Router DOM navigation with parameterized URLs.',
      'Built responsive CSS grid layouts with custom breakpoint handling from mobile to 4K displays.',
      'Configured automated deployment on Render.',
    ],

    keyLearnings: [
      'Mastered advanced asynchronous data patterns with TanStack React Query.',
      'Learned best practices for consuming and normalizing third-party REST APIs.',
      'Understood how to structure dynamic routes and lift state across React Router boundaries.',
      'Gained deep experience in data virtualization, scroll management, and responsive grid layouts.',
    ],

    interviewPitch:
      'Country Explorer is a React web application that solves geographic data fragmentation by merging the REST Countries API with the CountriesNow API into a single unified profile. I implemented dynamic routing with React Router DOM and server-state caching with TanStack React Query, utilizing dependent queries (`enabled: !!country`) to safely load detailed city and state data. To keep the UI fast and responsive across all screen sizes, I implemented state lifting for global search and constrained scroll containers for high-density geographic lists.',
  },

  'hotel-management': {
    id: 'hotel-management',
    title: 'Hotel Management System',
    tagline: 'Desktop Hospitality Management Suite with Python, Tkinter, SQLite & Automated Billing',
    badge: 'Desktop & Database System',
    category: 'Desktop Software Architecture',
    liveUrl: undefined, // Desktop app
    githubUrl: 'https://github.com/Vaibhav-0077/Hotel-management-system',
    featured: false,
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    iconName: 'Building2',

    overview: {
      summary:
        'Hotel Management System is a desktop-based software suite developed in Python, Tkinter, and SQLite to automate day-to-day hospitality operations. The application provides local hotel operators and clerks with an integrated control panel for guest check-ins, room inventory management, real-time availability checks, meal plan allocations, date stay calculations, and comprehensive itemized billing generation.',
      purpose:
        'To replace error-prone manual paper registers and costly subscription SaaS with a lightweight, standalone desktop system with persistent SQLite database storage and instant bill computation.',
      architectureType: 'Modular Multi-Window Desktop Application',
      role: 'Desktop Application & Database Engineer',
      database: 'SQLite (Relational Database)',
      authMethod: 'Tkinter Login Authentication Screen',
      hosting: 'PyInstaller Executable / Local Python Runtime',
    },

    techStack: [
      {
        category: 'Core Language & GUI',
        items: [
          { name: 'Python 3.x', desc: 'Core programming language, business logic & date algorithms' },
          { name: 'Tkinter GUI', desc: 'Window management, Treeview data tables, forms & widgets' },
          { name: 'Pillow (PIL)', desc: 'Image loading, aspect ratio resizing & GUI asset rendering' },
        ],
      },
      {
        category: 'Database & Utilities',
        items: [
          { name: 'SQLite3', desc: 'Relational local database with multi-table relational schema' },
          { name: 'Python datetime', desc: 'Automated stay duration calculation between check-in/out' },
          { name: 'PyInstaller', desc: 'Bundling Python application into standalone desktop executable' },
        ],
      },
    ],

    coreFeatures: [
      {
        number: '01',
        title: 'Authentication & Access Control',
        description:
          'Secure login screen verifying clerk credentials before granting access to the main hotel management dashboard and administrative operations.',
        highlights: [
          'Credential validation against administrative parameters',
          'Prevents unauthorized ledger modifications',
          'Smooth transition to the main dashboard',
        ],
      },
      {
        number: '02',
        title: 'Complete Customer Relationship Management (CRM)',
        description:
          'CRUD module to register, modify, search, and delete guest records with full personal details, contact info, nationality, and ID proofs.',
        highlights: [
          'Real-time customer search by ID or contact number',
          'Persistent SQLite storage preventing data loss upon shutdown',
          'Interactive Treeview display of all active and past guests',
        ],
      },
      {
        number: '03',
        title: 'Room Inventory & Category Management',
        description:
          'Configurable room catalogue supporting Single, Double, Luxury, Deluxe, and Super Deluxe rooms with custom floor allocations and pricing rates.',
        highlights: [
          'Dynamic room status tracking (Available, Booked, Maintenance)',
          'Room cost configuration per tier',
          'Visual room status indicators',
        ],
      },
      {
        number: '04',
        title: 'Room Availability Validator & Booking Pipeline',
        description:
          'Interactive booking workflow that checks SQLite database tables in real-time to guarantee that occupied rooms cannot be double-booked.',
        highlights: [
          'Automated availability check before room allocation',
          'Assigns guest ID, check-in date, check-out date, and meal plan',
          'Prevents reservation collisions and date conflicts',
        ],
      },
      {
        number: '05',
        title: 'Automated Stay Duration & Billing Calculator',
        description:
          'Utilizes Python `datetime` module to compute exact stay days and calculates itemized bills factoring room rate, stay duration, meal plan charges, and tax.',
        highlights: [
          'Automated `(check_out - check_in).days` calculation',
          'Supports meal plans (Breakfast, Lunch, Dinner, Full Board)',
          'Computes subtotal, tax percentages, and final payable amount',
        ],
        codeSnippet: {
          language: 'python',
          code: `# Automated Stay Duration & Total Billing Algorithm
def calculate_bill(check_in, check_out, room_cost_per_day, meal_plan_cost):
    d1 = datetime.strptime(check_in, "%Y-%m-%d")
    d2 = datetime.strptime(check_out, "%Y-%m-%d")
    stay_days = max(1, (d2 - d1).days)
    
    room_subtotal = stay_days * room_cost_per_day
    meal_subtotal = stay_days * meal_plan_cost
    total_pre_tax = room_subtotal + meal_subtotal
    tax_amount = total_pre_tax * 0.18  # 18% hospitality tax
    final_payable = total_pre_tax + tax_amount
    
    return stay_days, room_subtotal, meal_subtotal, tax_amount, final_payable`,
          caption: 'Python stay duration & tax billing calculation',
        },
      },
      {
        number: '06',
        title: 'Modular Tkinter GUI Architecture',
        description:
          'Organized into clean, decoupled Python modules utilizing `Toplevel` windows, allowing simultaneous viewing of customer lists, room grids, and billing invoices.',
        highlights: [
          'Clean separation into hotel.py, customer.py, rooms_booking.py, etc.',
          'Pillow (PIL) integration for high-definition banners and icons',
          'Tkinter messagebox alerts for validation and errors',
        ],
      },
    ],

    architecture: {
      title: 'Modular Python & SQLite Database Schema',
      description:
        'The application connects decoupled GUI modules to a central SQLite database executing transactional SQL queries.',
      diagramSteps: [
        { from: 'Login Screen', to: 'Main Dashboard', label: 'Auth Success', description: 'Initializes Tkinter root window and navigation sidebar' },
        { from: 'Main Dashboard', to: 'Feature Modules (Toplevel)', label: 'User Action', description: 'Opens Customer, Room, Booking, or Billing window' },
        { from: 'Booking Module', to: 'SQLite Database', label: 'Availability Query', description: 'Validates room vacancy before inserting booking record' },
        { from: 'Billing Module', to: 'Invoice Generator', label: 'datetime Diff', description: 'Calculates stay days * rate + meal plan + tax -> Final Bill' },
      ],
      asciiFlow: [
        'Tkinter Main Dashboard (hotel.py)',
        '    ├── Customer Manager (customer.py) ──► SQLite (Customers Table)',
        '    ├── Room Booking (rooms_booking.py) ─► SQLite (Rooms & Bookings Table)',
        '    ├── Room Details (room_details.py) ──► SQLite (Inventory Table)',
        '    └── Billing System (bill_details.py) ─► SQLite (Invoices Table)',
      ],
    },

    challenges: [
      {
        id: 'c1',
        title: 'Code Complexity & Monolithic File Bloat',
        problem:
          'Combining customer management, room allocation, meal plans, and billing inside a single file created unmaintainable spaghetti code.',
        solution:
          'Refactored the architecture into dedicated modular Python files (`customer.py`, `rooms_booking.py`, `bill_details.py`), orchestrated by the primary `hotel.py` controller.',
        impact: 'Clean, maintainable codebase with easily extensible modules.',
      },
      {
        id: 'c2',
        title: 'Preventing Double-Booking of Hotel Rooms',
        problem:
          'A room marked as booked could accidentally be assigned to another guest if multiple reservations were entered quickly.',
        solution:
          'Enforced database-level validation queries that check room status (`SELECT Status FROM Room WHERE RoomNo = ?`) before executing any new booking insert.',
        impact: 'Zero booking conflicts and 100% data integrity.',
      },
      {
        id: 'c3',
        title: 'Manual Stay Duration & Calculation Errors',
        problem:
          'Clerks manually counting stay dates frequently caused billing discrepancies on check-outs spanning different month lengths or leap years.',
        solution:
          'Automated duration parsing using Python’s `datetime.strptime()` module, calculating exact date deltas and multiplying by tiered room and meal rates.',
        impact: '100% accurate billing and automated tax invoicing.',
      },
      {
        id: 'c4',
        title: 'Tkinter Image Rendering Limitations',
        problem:
          'Native Tkinter had limited image format support and could not resize high-resolution hotel photography properly.',
        solution:
          'Integrated Python Pillow (PIL) library with `ImageTk.PhotoImage` to resize and render dynamic banner graphics smoothly across all window resolutions.',
        impact: 'Polished, professional desktop interface with crisp visual elements.',
      },
    ],

    personalContributions: [
      'Designed and coded the entire Tkinter graphical user interface from scratch.',
      'Structured SQLite database tables with relational foreign keys and indexes.',
      'Engineered automated billing algorithms with tax computation and date deltas.',
      'Implemented defensive programming with try-except blocks and input validation.',
      'Integrated Pillow (PIL) for image asset processing.',
      'Packaged and tested standalone desktop executable using PyInstaller.',
    ],

    keyLearnings: [
      'Mastered desktop GUI development patterns and window lifecycles in Tkinter.',
      'Gained strong command of raw SQL schema design, transactions, and queries in SQLite.',
      'Understood defensive programming: form validation, exception handling, and user error alerts.',
      'Learned how to modularize large Python applications into clean, maintainable micro-modules.',
    ],

    interviewPitch:
      'The Hotel Management System is a desktop software suite built in Python, Tkinter, and SQLite to automate front-desk hotel operations. I structured the application into modular components for customer records, room availability checks, reservation tracking, and itemized billing. The system automatically calculates stay durations using Python’s datetime library and prevents room double-booking by verifying database availability before confirming reservations.',
  },

  'amazon-replica': {
    id: 'amazon-replica',
    title: 'Amazon Replica',
    tagline: 'Pixel-Perfect E-Commerce Frontend Recreation Built with Pure HTML5, CSS3 & Modern JavaScript',
    badge: 'Frontend Mastery Showcase',
    category: 'Frontend Engineering',
    liveUrl: 'https://amazon-clone-hw9r.onrender.com',
    githubUrl: 'https://github.com/Vaibhav-0077/Amazon_Clone',
    featured: false,
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    iconName: 'ShoppingCart',

    overview: {
      summary:
        'Amazon Replica is an extensive front-end e-commerce recreation designed to mirror the navigation, multi-category browsing, hero banner rotations, product detail galleries, and pagination transitions of Amazon. Built purely with semantic HTML5, advanced CSS3, and vanilla JavaScript without relying on heavy frameworks or backend servers, this project represents pure mastery of foundational web technologies.',
      purpose:
        'To master deep CSS layout systems (Flexbox, CSS Grid, media query boundaries), dynamic DOM manipulation, multi-page client-side routing, and interactive product galleries without third-party libraries.',
      architectureType: 'Multi-Page Static Web Application with Dynamic DOM State',
      role: 'Lead Frontend Developer & UI Designer',
      database: 'Client-Side DOM & HTML Data Structuring',
      authMethod: 'Interactive Single-Page Login/Signup UI State Switcher',
      hosting: 'Render Cloud Deployment',
    },

    techStack: [
      {
        category: 'Core Web Technologies',
        items: [
          { name: 'HTML5 Semantic Elements', desc: 'Header, nav, main, section, aside & footer structuring' },
          { name: 'Advanced CSS3', desc: 'CSS Flexbox, CSS Grid, custom transitions & responsive media queries' },
          { name: 'Modern JavaScript (ES6+)', desc: 'DOM manipulation, setInterval sliders, thumbnail galleries & pagination' },
        ],
      },
      {
        category: 'Assets & Design System',
        items: [
          { name: 'Font Awesome', desc: 'Vector icon toolkit for search, carts, ratings & navigation' },
          { name: 'Curated Asset Catalog', desc: 'Organized folders for electronics, fashion, appliances & gaming' },
        ],
      },
    ],

    coreFeatures: [
      {
        number: '01',
        title: 'Authentic Amazon Navigation & Sub-Header Panel',
        description:
          'Precision-crafted multi-element header containing logo, location selector, category search dropdown, search input, account dropdown, returns/orders, cart counter, and secondary category panel.',
        highlights: [
          'Full-fidelity responsive layout adapting across screen sizes',
          'Interactive search bar and hover visual accents',
          'Secondary sub-navigation panel ("All", "Today’s Deals", "Electronics")',
        ],
      },
      {
        number: '02',
        title: 'Automatic Rotating Hero Promotional Banner',
        description:
          'Dynamic promotional hero slider that cycles through promotional image banners at timed intervals using vanilla JavaScript `setInterval()` with smooth transitions.',
        highlights: [
          'Automated background image rotation with zero jitter',
          'Overlay welcome banner with regional Amazon destination links',
          'Smooth transition effects between promotional graphics',
        ],
      },
      {
        number: '03',
        title: 'Multi-Page Product Exploration & Categorization',
        description:
          'Organized into distinct shopping portals (`explore1.html`, `explore2.html`, `explore3.html`, `exp.html`) covering Gaming, Appliances, Fashion, and Electronics.',
        highlights: [
          'Category showcase cards with multiple sub-images and "Explore All" CTAs',
          'Product listing grids with prices, MRPs, discounts, and star ratings',
          'Consistent styling maintained across all distinct HTML pages',
        ],
      },
      {
        number: '04',
        title: 'Dynamic Product Detail Viewer & Thumbnail Zoom Gallery',
        description:
          'Constructed a client-side product detail viewer (`showProduct(id)`) allowing visitors to inspect full product specs and click thumbnails to switch the primary image dynamically.',
        highlights: [
          'Thumbnail image swap handler updating the main showcase viewport',
          'Product specs, warranty details, brand badges, and delivery timers',
          'Instant switch between listing grid and product view without page reloads',
        ],
        codeSnippet: {
          language: 'javascript',
          code: `// Client-Side Product Switching & Image Gallery
function showProduct(productId) {
  // Hide product grid and pagination
  document.querySelectorAll('.product-grid, .pagination-bar').forEach(el => el.style.display = 'none');
  // Display target product details
  const targetInfo = document.getElementById('info-' + productId);
  if (targetInfo) targetInfo.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showImage(thumbnailElement, mainImageId) {
  document.getElementById(mainImageId).src = thumbnailElement.src;
}`,
          caption: 'Client-side product switching & thumbnail gallery handler',
        },
      },
      {
        number: '05',
        title: 'Smooth Client-Side Pagination & Transition Effects',
        description:
          'Multi-page product navigation (`showPage(num)`) that applies a CSS fade transition, swaps visible containers, and automatically scrolls the browser back to the top.',
        highlights: [
          'Fade-out / fade-in transition classes preventing abrupt page jumps',
          'Active page indicators and previous/next page navigation',
          'Clean state reset on page transitions',
        ],
      },
      {
        number: '06',
        title: 'Single-Page Sign-In / Account Creation Switcher',
        description:
          'Seamless authentication interface (`login.html`) featuring an interactive toggle between Sign-In and Create Amazon Account views on a single page.',
        highlights: [
          'Instant toggle without page reloads via `showSignup()` & `showLogin()`',
          'Form validation for emails, passwords, and re-entry confirmation',
          'Official Amazon typography, button gradients, and disclaimer links',
        ],
      },
    ],

    architecture: {
      title: 'Front-End Page Structure & Client-Side State Flow',
      description:
        'The architecture relies on structured HTML pages sharing a global `style.css` stylesheet and dynamic `script.js` DOM controller.',
      diagramSteps: [
        { from: 'index.html (Homepage)', to: 'explore1.html / explore2.html', label: 'Category Selection', description: 'User navigates to specific product categories' },
        { from: 'Product Listing', to: 'showProduct(id)', label: 'Product Click', description: 'Hides grid and reveals selected product-detail container' },
        { from: 'Product Detail View', to: 'showImage(thumb, mainId)', label: 'Thumbnail Click', description: 'Dynamically updates high-res image source in real time' },
        { from: 'Pagination Bar', to: 'showPage(num)', label: 'Page Change', description: 'Triggers fade transition and swaps active product page containers' },
      ],
      asciiFlow: [
        'index.html (Homepage & Hero Slider)',
        '    │',
        '    ├── explore1.html (Gaming & PlayStation) ──► showProduct(id) ──► Image Gallery',
        '    ├── explore2.html (Home Appliances)      ──► showPage(num)   ──► Smooth Pagination',
        '    ├── explore3.html (Electronics)          ──► Star Ratings',
        '    └── login.html (Auth UI)                 ──► showSignup() / showLogin()',
      ],
    },

    challenges: [
      {
        id: 'c1',
        title: 'Showing Dynamic Product Details Without a Backend',
        problem:
          'Without a server or database to query, displaying individual details for dozens of products would normally require creating separate HTML files for every product.',
        solution:
          'Structured unique product detail sections (`info-1`, `info-2`) in the HTML and wrote a centralized `showProduct(id)` JavaScript controller to toggle visibility and handle back navigation.',
        impact: 'Fast, dynamic e-commerce experience without server overhead.',
      },
      {
        id: 'c2',
        title: 'Abrupt Page Jumps During Pagination Swaps',
        problem:
          'Switching between product pages by simply toggling `display: none` caused harsh, jarring visual jumps and left the scroll position stuck at the bottom.',
        solution:
          'Added a CSS `.fade-out` transition class with `setTimeout`, swapped container visibility midway, and smoothly animated scroll to the top of the viewport.',
        impact: 'Silky smooth pagination that feels like a modern single-page app.',
      },
      {
        id: 'c3',
        title: 'Maintaining Style Consistency Across Multiple HTML Files',
        problem:
          'Managing styling across `index.html`, `login.html`, `explore1.html`, `explore2.html`, etc. created risk of style drift and inconsistent button states.',
        solution:
          'Created a centralized, modular `style.css` design system with reusable classes (`.navbar`, `.nav-search`, `.hero-section`, `.box`, `.product-info`).',
        impact: 'Cohesive, pixel-perfect visual styling across the entire website.',
      },
      {
        id: 'c4',
        title: 'Complex Multi-Element Header Responsiveness',
        problem:
          'The Amazon desktop navbar contains 8+ distinct items that easily overflowed and broke on tablet and mobile viewports.',
        solution:
          'Utilized CSS Flexbox with responsive media queries at 600px, 768px, and 1024px to reorganize search inputs and collapse secondary navigation cleanly.',
        impact: 'Flawless responsive navigation across all screen sizes.',
      },
    ],

    personalContributions: [
      'Hand-crafted all semantic HTML5 page structures and layouts.',
      'Authored the complete responsive CSS3 design system from scratch.',
      'Developed all interactive JavaScript logic (hero carousel, thumbnail switcher, pagination).',
      'Created single-page Sign-In and Signup interactive authentication views.',
      'Organized and optimized an extensive library of product image assets.',
      'Deployed the live static web application to Render.',
    ],

    keyLearnings: [
      'Achieved profound mastery of core CSS Grid, Flexbox, and responsive breakpoint design.',
      'Learned how to manipulate the DOM with vanilla JavaScript without framework overhead.',
      'Understood how to create smooth transitions, state toggling, and interactive galleries.',
      'Gained deep appreciation for web standards, semantic markup, and performance optimization.',
    ],

    interviewPitch:
      'Amazon Replica is a front-end e-commerce project built with pure HTML5, CSS3, and modern JavaScript to replicate the complex UI, navigation, and product workflows of Amazon. I built an automatic rotating hero slider, interactive thumbnail galleries, single-page login/signup switching, and client-side pagination with smooth fade transitions. This project allowed me to master core CSS layout systems, responsive breakpoints, and vanilla DOM manipulation without relying on external libraries or frameworks.',
  },
};
