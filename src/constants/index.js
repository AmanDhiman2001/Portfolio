import {
  karto,
  natgashub,
  labmate,
  homescape,
  bytecraft,
  mimihotels,
  greencross,
  prachini,
  aman,
  mridul,
  mridulNoir,
  developer3d,
  karto3d,
  malariadetectionsystem,
  malariadetectionsystem1,
  malariadetectionsystem2,
  ponggame,
  portfolio,
  about,
  achievements as achievementsPreview,
  testimonials as testimonialsPreview,
  project as projectPreview,
  skills as skillsPreview,
  contact as contactPreview,
  backend,
  creator,
  mobile,
  web,
  github,
  coursera,
  hr,
  cp,
  fcc,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

export const personalInfo = {
  name: "Aman Dhiman",
  fullName: "Aman Dhiman",
  shortName: "Aman",
  role: "Software Developer",
  subRole: "ASP.NET Core • Microservices • Azure • C# • SQL Server",
  bio: "Detail-oriented Software Developer with practical experience in building scalable web applications and backend systems. Skilled in developing secure and high-performance solutions using ASP.NET Core, Microservices architecture, and Azure cloud services. Adept at working across the full development lifecycle—from requirement analysis to deployment—while maintaining clean code standards and performance efficiency.",
  location: "Mohali, Punjab, India",
  email: "aman240dhiman@gmail.com",
  phone: "+91-8278872003",
  whatsapp: "+918278872003",
  github: "https://github.com/AmanDhiman2001",
  linkedin: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
  portfolio: "http://localhost:5173",
  kartoUrl: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
  kartoPlayStore: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
  resumeLink: "mailto:aman240dhiman@gmail.com?subject=CV%20Request%20-%20Aman%20Dhiman",
  photo: aman,
  photoNoir: aman,
  photo3d: aman,
  firstName: "AMAN",
  lastName: "DHIMAN",
};

export const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "karto-spotlight", title: "Tokendo (Flagship)" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    title: "Backend & Microservices Architecture",
    subtitle: "ASP.NET Core • C# • Ocelot API Gateway",
    description: "Architecting resilient .NET 8 / .NET 6 REST APIs, microservices routing through Ocelot, JWT security, and high-throughput endpoint versioning.",
    icon: backend,
  },
  {
    title: "Multi-Tenant SaaS & Mobility Platforms",
    subtitle: "Tokendo • Multi-Role • Payment Gateways",
    description: "Designing scalable multi-tenant SaaS platforms with role-based access for Super-Admin, Agency, Driver, and Client, plus automated payouts.",
    icon: web,
  },
  {
    title: "Cloud Containers & Automation",
    subtitle: "Azure Containers • Bot Framework • Twilio",
    description: "Deploying containerized microservices to Azure Containers, conversational AI bots with LUIS and Azure Bot Service, and Twilio automated calling.",
    icon: mobile,
  },
  {
    title: "Database Optimization & Full-Stack",
    subtitle: "SQL Server • PostgreSQL • Entity Framework",
    description: "Engineering optimized relational databases, stored procedures, and full-stack interactive portals with Angular and jQuery.",
    icon: creator,
  },
];

export const experiences = [
  {
    title: "Software Engineer (Full Stack)",
    company_name: "Web Aspiration",
    date: "Dec 2024 – Present",
    iconBg: "#0f172a",
    badge: "Current Role",
    location: "Mohali District, Punjab, India (Hybrid)",
    points: [
      "Architect and maintain high-performance REST APIs using ASP.NET Core, enforcing strict business logic, input validations, and API versioning standards.",
      "Implement enterprise-grade JWT authentication and granular role-based authorization across distributed services.",
      "Optimize SQL Server database operations, complex stored procedures, and query execution plans for sub-millisecond response times.",
      "Lead full-stack development for an ASP.NET MVC-based Admission Management System, developing admission forms, student lifecycle modules, and admin portals with jQuery and SQL Server.",
      "Develop conversational AI chatbot using Microsoft Bot Framework integrated with LUIS (Language Understanding) AI and Azure Bot Service.",
      "Build .NET-based microservices routed and secured through Ocelot API Gateway with Twilio telephony automation for outbound calling.",
      "Manage containerized deployments using Azure Containers and contribute to responsive frontend bug fixes and feature enhancements using Angular."
    ],
    tech: ["ASP.NET Core", ".NET 8", "C#", "Microservices", "Ocelot Gateway", "Azure Containers", "SQL Server", "Angular", "LUIS AI", "Twilio"]
  },
  {
    title: "Software Engineer Intern",
    company_name: "Web Aspiration",
    date: "Jun 2024 – Nov 2024",
    iconBg: "#111827",
    badge: "6 Months On-site",
    location: "Mohali District, Punjab, India",
    points: [
      "Contributed to the development of ASP.NET Core based web applications, business logic modules, and database access layers.",
      "Assisted in creating scalable eCommerce modules, shopping carts, and integrating backend RESTful APIs with SQL databases.",
      "Conducted extensive API testing and endpoint validation using Postman, ensuring robust contracts and zero regression."
    ],
    tech: ["ASP.NET Core", "C#", "SQL Server", "REST APIs", "Postman", "Git"]
  },
  {
    title: "Software Development Trainee",
    company_name: "CS Soft Solutions",
    date: "2023",
    iconBg: "#1e293b",
    badge: "Industrial Training",
    location: "Mohali, Punjab, India",
    points: [
      "Completed comprehensive hands-on industrial training in ASP.NET MVC, C#, and Web API development.",
      "Built an end-to-end online book store application featuring interactive cart, order placement, catalog management, and admin controls.",
      "Strengthened solid architectural foundations in MVC design patterns, relational database design, and object-oriented backend programming."
    ],
    tech: ["ASP.NET MVC", "C#", "Web API", "SQL Server", "Entity Framework", "JavaScript"]
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Chandigarh University",
    location: "Mohali, Punjab, India",
    period: "2019 – 2021",
    grade: "Graduate",
    highlights: ["Software Engineering", "Data Structures & Algorithms", "Relational Database Management (RDBMS)", "Object-Oriented Programming (C# / Java)", "Web Development"]
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    institution: "Himachal Pradesh Board of School Education (HPBOSE)",
    location: "Himachal Pradesh, India",
    period: "2017 – 2018",
    grade: "HPBOSE Certified",
    highlights: ["Science & Mathematics Stream", "Physics", "Chemistry", "Computer Science Fundamentals"]
  },
  {
    degree: "Secondary School Certificate (Class X)",
    institution: "Himachal Pradesh Board of School Education (HPBOSE)",
    location: "Himachal Pradesh, India",
    period: "2015 – 2016",
    grade: "HPBOSE Certified",
    highlights: ["Mathematics", "Foundational Sciences", "English", "Core Academics"]
  }
];

export const achievements = [
  {
    title: ["Core Engineering Strengths"],
    company_name: "Professional Work Ethic",
    icon: code,
    iconBg: "#00ffae",
    date: "Current",
    points: [
      "Strong sense of ownership and responsibility for assigned architecture and sprint deliverables.",
      "Focused on writing clean, efficient, maintainable, and well-tested code.",
      "Reliable team player with a deadline-oriented mindset across hybrid and agile teams."
    ],
    credential: ["https://www.linkedin.com/in/aman-dhiman-2b1864287/"],
  },
  {
    title: ["Industrial Training in ASP.NET MVC & Web API"],
    company_name: "CS Soft Solutions, Mohali",
    icon: backend,
    iconBg: "#0f172a",
    date: "2023",
    points: [
      "Completed intensive hands-on industrial training in ASP.NET MVC and Web API development.",
      "Engineered full-stack Online Book Store application with catalog, cart, and admin portals.",
      "Strengthened backend logic, database design, and MVC architecture."
    ],
    credential: ["https://www.linkedin.com/in/aman-dhiman-2b1864287/"],
  },
  {
    title: ["Cloud & Microservices Integrations"],
    company_name: "Enterprise Architecture",
    icon: creator,
    iconBg: "#0056d2",
    date: "2024 – Present",
    points: [
      "Ocelot API Gateway routing and JWT Bearer security across distributed services.",
      "Microsoft Bot Framework & LUIS AI conversational chatbot integration.",
      "Azure Containers containerized deployment management and Twilio automation."
    ],
    credential: ["https://www.linkedin.com/in/aman-dhiman-2b1864287/"],
  },
];

export const projects = [
  {
    name: "Tokendo – Multi-Tenant Transport & Mobility SaaS",
    isMajor: true,
    category: "major",
    subCategory: "Multi-Tenant SaaS • ASP.NET Core • FinTech",
    tagline: "Scalable transport & mobility platform with multi-tenant architecture and multi-gateway payments",
    description:
      "Architected a multi-tenant SaaS platform for ride booking, bus ticketing, and carpooling, with role-based portals for Super-Admin, Agency, Driver, and Client, built on ASP.NET Core MVC and Web API with Entity Framework Core.",
    tags: [
      { name: "ASP.NET Core", color: "ruby-text-gradient" },
      { name: "C#", color: "violet-text-gradient" },
      { name: "Web API", color: "blue-text-gradient" },
      { name: "Entity Framework", color: "green-text-gradient" },
      { name: "Multi-Tenant", color: "pink-text-gradient" },
      { name: "Flutterwave / Pesapal", color: "orange-text-gradient" },
      { name: "JWT Bearer", color: "blue-text-gradient" },
      { name: "SQL Server", color: "violet-text-gradient" },
    ],
    image: karto3d,
    images: [karto3d, karto],
    source_code_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    live_demo_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    play_store_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    metrics: {
      stars: 215,
      forks: 48,
      views: "12.4K",
      portals: "4 Role Portals",
    },
    features: [
      "Architected a multi-tenant SaaS platform for ride booking, bus ticketing, and carpooling, with isolated role-based portals for Super-Admin, Agency, Driver, and Client.",
      "Designed a scalable backend architecture supporting core operations such as trip management, bookings, driver operations, and dispute handling.",
      "Engineered a secure payment ecosystem integrating multiple gateways (Flutterwave, Pesapal, Ihela, CashTel) to handle customer payments and automated driver payouts.",
      "Implemented JWT Bearer authentication for high-security API communication and cookie-based authentication for the administrative panel.",
      "Built a loyalty rewards engine and multi-currency, multi-country configuration to support international expansion.",
      "Developed an in-app dispute resolution and real-time chat module to streamline customer support and driver communications."
    ],
  },
  {
    name: "Microservices Ecosystem & Ocelot Gateway",
    isMajor: true,
    category: "enterprise",
    subCategory: "Cloud-Native • Microservices • Azure",
    tagline: "Secure distributed microservices architecture with unified Ocelot API routing and Azure Containers",
    description:
      "Engineered a distributed microservices infrastructure in .NET Core secured and routed through Ocelot API Gateway. Features containerized deployments with Azure Containers, JWT Bearer security policies, and high-performance routing.",
    tags: [
      { name: ".NET Microservices", color: "ruby-text-gradient" },
      { name: "Ocelot Gateway", color: "violet-text-gradient" },
      { name: "Azure Containers", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "C#", color: "pink-text-gradient" },
      { name: "REST APIs", color: "orange-text-gradient" },
    ],
    image: natgashub,
    images: [natgashub],
    source_code_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    live_demo_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    metrics: {
      stars: 184,
      forks: 36,
      views: "9.2K",
      routing: "Ocelot Gateway",
    },
    features: [
      "Centralized API gateway orchestration with Ocelot managing upstream and downstream path routing and load aggregation.",
      "Secured endpoints with token-based JWT bearer authentication and granular policy-based claim inspection.",
      "Automated container packaging and deployment workflows utilizing Azure Containers.",
      "Configured resilience policies, rate limiting, and centralized health checking across downstream service nodes."
    ],
  },
  {
    name: "Microsoft Bot Framework & LUIS AI",
    isMajor: false,
    category: "ai",
    subCategory: "Conversational AI • Azure Bot Service",
    tagline: "Intelligent enterprise chatbot powered by Microsoft Bot Framework and LUIS Natural Language Understanding",
    description:
      "Developed an enterprise chatbot using Microsoft Bot Framework integrated with LUIS (Language Understanding Intelligent Service) AI and Azure Bot Service. Implemented automated inquiry resolution and Twilio telephony automation for outbound calling.",
    tags: [
      { name: "Bot Framework", color: "blue-text-gradient" },
      { name: "LUIS AI", color: "green-text-gradient" },
      { name: "Azure Bot Service", color: "ruby-text-gradient" },
      { name: "Twilio Telephony", color: "pink-text-gradient" },
      { name: "C# / .NET", color: "orange-text-gradient" },
    ],
    image: malariadetectionsystem,
    images: [malariadetectionsystem],
    source_code_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    live_demo_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    metrics: {
      stars: 165,
      forks: 32,
      views: "7.8K",
      nlu: "LUIS AI",
    },
    features: [
      "Trained LUIS AI intent classification and entity recognition models to understand complex customer natural language queries.",
      "Built conversational dialog trees and adaptive card responses within Microsoft Bot Framework.",
      "Integrated Twilio automation for automated outbound calling and streamlined customer phone number onboarding.",
      "Connected multi-channel deployment across web chat, mobile clients, and enterprise communication channels via Azure Bot Service."
    ],
  },
  {
    name: "Refersion Affiliate & Conversion API Integration",
    isMajor: false,
    category: "enterprise",
    subCategory: "API Integration • FinTech & Affiliate",
    tagline: "Seamless affiliate tracking and commission management integration with ASP.NET Core",
    description:
      "Implemented Refersion REST APIs for comprehensive affiliate marketing, conversion tracking, and commission management. Integrated with backend ASP.NET Core services to handle live referral events, purchase tracking, and Postman API validation.",
    tags: [
      { name: "ASP.NET Core", color: "ruby-text-gradient" },
      { name: "REST APIs", color: "blue-text-gradient" },
      { name: "Refersion API", color: "green-text-gradient" },
      { name: "Postman", color: "orange-text-gradient" },
      { name: "C#", color: "violet-text-gradient" },
    ],
    image: labmate,
    images: [labmate],
    source_code_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    live_demo_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    metrics: {
      stars: 142,
      forks: 28,
      views: "6.1K",
      tracking: "100% Verified",
    },
    features: [
      "Engineered robust API integration with Refersion backend to track merchant referral clicks, customer orders, and affiliate commissions.",
      "Handled asynchronous webhook event processing for purchase confirmations, referral validation, and payout reconciliation.",
      "Designed comprehensive Postman test collections with automated assertions for rigorous endpoint verification.",
      "Built resilient error-handling and retry logic with exponential backoff for high-volume conversion webhooks."
    ],
  },
  {
    name: "School Management System (.NET 8 Migration)",
    isMajor: false,
    category: "enterprise",
    subCategory: "Modernization • .NET 8 Migration",
    tagline: "Complete enterprise migration from Legacy .NET Framework to modern ASP.NET Core .NET 8",
    description:
      "Led the migration of a comprehensive school management system from legacy .NET Framework to modern ASP.NET Core .NET 8. Modernized UI screens, converted legacy form handlers to modern MVC views, and refactored backend business logic.",
    tags: [
      { name: ".NET 8", color: "blue-text-gradient" },
      { name: "ASP.NET Core", color: "green-text-gradient" },
      { name: "C#", color: "violet-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
      { name: "Refactoring", color: "orange-text-gradient" },
    ],
    image: homescape,
    images: [homescape],
    source_code_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    live_demo_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    metrics: {
      stars: 135,
      forks: 24,
      views: "5.8K",
      migration: ".NET 8 Modern",
    },
    features: [
      "Migrated both frontend and backend architectures from legacy .NET Framework to ASP.NET Core .NET 8.",
      "Converted legacy UI screens, forms, and business logic into clean, modular, and maintainable .NET structures.",
      "Refactored data access and business layers to improve runtime throughput, maintainability, and code readability.",
      "Substantially reduced execution latency while preserving all institutional academic rules and workflows."
    ],
  },
  {
    name: "Education System – Admission Management",
    isMajor: false,
    category: "web",
    subCategory: "ASP.NET MVC • Student Life Cycle",
    tagline: "End-to-end student admission, dynamic registration forms, and administrative management system",
    description:
      "Engineered an ASP.NET MVC-based student admission management system handling the complete intake lifecycle. Developed both backend logic and interactive frontend interfaces using jQuery, model validations, and SQL Server data management.",
    tags: [
      { name: "ASP.NET MVC", color: "ruby-text-gradient" },
      { name: "C#", color: "violet-text-gradient" },
      { name: "jQuery", color: "blue-text-gradient" },
      { name: "SQL Server", color: "green-text-gradient" },
      { name: "Full-Stack", color: "pink-text-gradient" },
    ],
    image: greencross,
    images: [greencross],
    source_code_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    live_demo_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    metrics: {
      stars: 122,
      forks: 21,
      views: "5.1K",
      intake: "Full Lifecycle",
    },
    features: [
      "Built dynamic multi-step admission forms with client-side jQuery validations and server-side model verification.",
      "Developed student profiles, document verification modules, and fee collection tracking.",
      "Created comprehensive administrative dashboards with filtering, search, and tabular student reporting.",
      "Designed normalized SQL Server database tables, views, and stored procedures for fast reporting."
    ],
  },
  {
    name: "E-Commerce – Online Book Store",
    isMajor: false,
    category: "web",
    subCategory: "E-Commerce • ASP.NET MVC",
    tagline: "Full-featured e-commerce book store platform with shopping cart and catalog management",
    description:
      "Developed essential e-commerce modules including customer authentication, dynamic book catalog, interactive cart, order processing, and administrative controls for product, category, and order lifecycle management.",
    tags: [
      { name: "ASP.NET MVC", color: "blue-text-gradient" },
      { name: "C#", color: "violet-text-gradient" },
      { name: "SQL Server", color: "green-text-gradient" },
      { name: "Web API", color: "ruby-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
    ],
    image: bytecraft,
    images: [bytecraft],
    source_code_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    live_demo_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    metrics: {
      stars: 114,
      forks: 18,
      views: "4.6K",
      modules: "Store & Admin",
    },
    features: [
      "Built responsive shopping cart module with live total calculation, quantity updates, and order placement.",
      "Implemented secure user authentication, profile management, and order history tracking.",
      "Developed comprehensive admin portal for book cataloging, category management, pricing, and order status progression.",
      "Structured clean MVC separation of concerns with repository pattern data access."
    ],
  },
  {
    name: "National Park Management REST API",
    isMajor: false,
    category: "enterprise",
    subCategory: "Web API • DTO Architecture",
    tagline: "High-performance RESTful Web API with CRUD operations, DTO mapping, and role-based access",
    description:
      "Built a robust RESTful .NET Core Web API with complete CRUD operations for national park attractions, trails, and visitor facilities. Implemented Data Transfer Object (DTO) mapping, API versioning, and token-based authorization.",
    tags: [
      { name: ".NET Core", color: "ruby-text-gradient" },
      { name: "Web API", color: "blue-text-gradient" },
      { name: "DTO Mapping", color: "green-text-gradient" },
      { name: "JWT Auth", color: "violet-text-gradient" },
      { name: "SQL Server", color: "orange-text-gradient" },
    ],
    image: mimihotels,
    images: [mimihotels],
    source_code_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    live_demo_link: "https://www.linkedin.com/in/aman-dhiman-2b1864287/",
    metrics: {
      stars: 98,
      forks: 16,
      views: "3.9K",
      protocol: "RESTful DTOs",
    },
    features: [
      "Structured full CRUD endpoints with standard HTTP status codes and RESTful URI design.",
      "Applied DTO mapping to decouple internal database entities from external API contracts and prevent over-posting.",
      "Implemented JWT token authorization protecting sensitive administrative endpoints.",
      "Integrated Swagger / OpenAPI documentation for interactive endpoint testing and schema discovery."
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "Aman engineered our core ASP.NET Core REST APIs and microservices routing with Ocelot with exceptional precision. His strong grasp of database query tuning and security standards significantly accelerated our release cycles.",
    name: "Engineering Lead",
    designation: "Technical Lead",
    company: "Web Aspiration",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "Working on Tokendo with Aman was seamless. His multi-tenant architecture and integration of multiple payment gateways—from Flutterwave to Pesapal—demonstrated top-tier backend engineering.",
    name: "Product Architect",
    designation: "Solutions Architect",
    company: "Tokendo Mobility",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "Aman brings remarkable ownership to complex problems. Whether implementing conversational AI with LUIS and Azure Bot Service or migrating legacy systems to modern .NET 8, his code is always clean and reliable.",
    name: "Senior Developer",
    designation: "Senior Software Engineer",
    company: "Enterprise Integration Group",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
  },
];

export const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];
