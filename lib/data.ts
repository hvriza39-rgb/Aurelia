export interface Project {
  slug: string;
  type: string;
  title: string;
  description: string;
  longDescription: string;
  challenge: string;
  approach: string[];
  features: string[];
  technologies: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
  className: string;
  year: string;
}

export const projects: Project[] = [
  {
    slug: "caretrack",
    type: "Healthcare platform",
    title: "CareTrack",
    description:
      "A digital healthcare platform connecting patients, appointments, records, and everyday clinical workflows.",
    longDescription:
      "CareTrack is a comprehensive healthcare management platform designed to simplify everyday clinical workflows. It connects patients, appointments, medical records, and staff coordination into one unified system.",
    challenge:
      "A private healthcare clinic was managing patient records, appointments, and staff schedules across multiple disconnected tools — spreadsheets, paper files, and basic calendar apps. This led to scheduling conflicts, lost records, and frustrated patients. They needed a single platform that could handle patient management, appointment booking, clinical workflows, and staff coordination without requiring technical expertise to operate.",
    approach: [
      "Discovery — interviewed clinic staff, observed workflows, and mapped the patient journey",
      "Product strategy — defined core modules: patient records, appointments, clinical notes, and reporting",
      "UX/UI design — created an intuitive interface that medical staff could learn in minutes",
      "Engineering — built a secure, HIPAA-aware platform with role-based access",
      "Testing — conducted usability testing with actual clinic staff",
      "Launch — deployed with training and ongoing support",
    ],
    features: [
      "Patient management",
      "Appointment scheduling",
      "Clinical workflows",
      "Role-based authentication",
      "Dashboard & analytics",
      "Automated notifications",
    ],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
    outcome:
      "The clinic now manages all patient interactions through CareTrack. Scheduling conflicts have been eliminated, patient wait times have decreased, and staff can access complete patient histories instantly. The platform has become the central operating system for the clinic's daily operations.",
    metrics: [
      { label: "reduction in administrative time", value: "40%" },
      { label: "faster patient check-in", value: "3x" },
    ],
    className: "project-one",
    year: "2025",
  },
  {
    slug: "business-platform",
    type: "Business platform",
    title: "Built around your business",
    description:
      "Custom systems that replace spreadsheets, repetitive processes, and disconnected tools with one intelligent platform.",
    longDescription:
      "A fully custom business management platform built to replace fragmented tools and manual processes. It centralises operations, automates workflows, and gives leadership real-time visibility into the business.",
    challenge:
      "A growing service business was running on a patchwork of spreadsheets, email threads, and off-the-shelf software that didn't talk to each other. Quotes were created in Word, projects tracked in Excel, and invoicing done manually. As the team grew, this became unsustainable. They needed a single platform designed around their actual workflow.",
    approach: [
      "Discovery — mapped every step of their sales, project, and billing process",
      "Product strategy — identified automation opportunities and integration requirements",
      "UX/UI design — designed around the team's existing mental models to minimise retraining",
      "Engineering — built a modular platform with APIs for future integrations",
      "Testing — validated with real data and actual team members",
      "Launch — rolled out in phases to avoid disruption",
    ],
    features: [
      "CRM & lead management",
      "Project tracking",
      "Automated quoting",
      "Invoicing & payments",
      "Team scheduling",
      "Reporting dashboard",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Stripe"],
    outcome:
      "The business now operates from a single platform. Quotes that previously took hours are generated in minutes. Project status is visible in real-time. Invoicing is automated. The leadership team finally has accurate data to make decisions.",
    className: "project-two",
    year: "2025",
  },
  {
    slug: "commerce",
    type: "Commerce",
    title: "Digital storefronts",
    description:
      "Beautiful commerce experiences that help businesses showcase products and turn visitors into customers.",
    longDescription:
      "A modern e-commerce platform designed to showcase products beautifully and convert visitors into customers. Built with performance, SEO, and user experience as core priorities.",
    challenge:
      "A product business was selling through social media DMs and manual bank transfers. They needed a professional online store that could handle inventory, payments, and shipping — but they didn't want a generic template that looked like every other shop. The store needed to feel like an extension of their brand.",
    approach: [
      "Discovery — understood the brand, product range, and customer buying behaviour",
      "Product strategy — defined the catalog structure, payment flow, and fulfilment process",
      "UX/UI design — created a minimal, editorial shopping experience",
      "Engineering — built a fast, SEO-optimised storefront with a custom CMS",
      "Testing — tested checkout flow, mobile experience, and load performance",
      "Launch — deployed with analytics, search console, and marketing pixels",
    ],
    features: [
      "Product catalog",
      "Shopping cart & checkout",
      "Payment integration",
      "Order management",
      "Customer accounts",
      "Analytics & reporting",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "Vercel"],
    outcome:
      "The business now has a professional online presence that handles sales automatically. Customers can browse, purchase, and track orders without manual intervention. The brand perception has shifted from 'Instagram seller' to established retailer.",
    className: "project-three",
    year: "2024",
  },
  {
    slug: "d-hairs",
    type: "Beauty & wellness",
    title: "D-Hairs",
    description:
      "A booking and brand platform for a modern hair and beauty studio, combining appointment scheduling with a premium digital presence.",
    longDescription:
      "D-Hairs is a digital platform for a contemporary hair and beauty studio. It combines online booking, service browsing, and brand storytelling into one cohesive experience.",
    challenge:
      "A hair studio was taking all bookings over the phone and Instagram DMs. Stylists were interrupted constantly, double-bookings happened regularly, and no-shows were a persistent problem. They needed an online booking system that matched their premium brand and reduced administrative overhead.",
    approach: [
      "Discovery — shadowed the team to understand the booking flow and customer journey",
      "Product strategy — prioritised online booking, service menus, and stylist profiles",
      "UX/UI design — created a luxurious, image-forward experience",
      "Engineering — integrated a booking system with automated reminders",
      "Testing — tested with real customers before full launch",
      "Launch — soft launch with existing clients, then public release",
    ],
    features: [
      "Online booking",
      "Service menu & pricing",
      "Stylist profiles",
      "Automated reminders",
      "Gallery & portfolio",
      "Contact & location",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Cal.com", "Vercel"],
    outcome:
      "Phone bookings have dropped by over 80%. Customers book appointments at any time. No-shows have decreased significantly thanks to automated reminders. The studio's digital presence now matches the quality of their in-salon experience.",
    className: "project-four",
    year: "2024",
  },
];

export interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Websites",
    description:
      "Marketing websites, corporate websites, landing pages and conversion-focused experiences designed around your brand and business goals.",
    features: [
      "Responsive design",
      "SEO optimisation",
      "Performance tuning",
      "CMS integration",
      "Analytics setup",
    ],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Dashboards, SaaS products, portals, marketplaces and customer platforms built around the way your business actually works.",
    features: [
      "User authentication",
      "Database design",
      "API development",
      "Real-time features",
      "Admin dashboards",
    ],
  },
  {
    number: "03",
    title: "Custom Software",
    description:
      "Internal systems, workflow tools, business management platforms and automation that replaces spreadsheets and manual processes.",
    features: [
      "Workflow automation",
      "Third-party integrations",
      "Reporting & analytics",
      "Role-based access",
      "Data migration",
    ],
  },
  {
    number: "04",
    title: "Mobile Experiences",
    description:
      "Modern mobile products that make your services easier to access, easier to use, and easier to grow.",
    features: [
      "Progressive Web Apps",
      "Responsive mobile design",
      "Touch-optimised UI",
      "Offline capabilities",
      "Push notifications",
    ],
  },
  {
    number: "05",
    title: "E-commerce",
    description:
      "Digital storefronts, product platforms and commerce experiences that help businesses showcase products and turn visitors into customers.",
    features: [
      "Product catalog",
      "Secure checkout",
      "Payment integration",
      "Order management",
      "Inventory tracking",
    ],
  },
  {
    number: "06",
    title: "MVP Development",
    description:
      "Lean, functional products designed to validate an idea before committing to a larger build. Get to market faster with less risk.",
    features: [
      "Rapid prototyping",
      "Core feature focus",
      "User testing",
      "Iterative development",
      "Scale-ready architecture",
    ],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, your users, your goals and your constraints before touching any code.",
    deliverables: ["Requirements document", "User flows", "Project scope", "Technical direction"],
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn the idea into a usable product experience with wireframes, interface design, and interactive prototypes.",
    deliverables: ["Wireframes", "UI design", "Interactive prototypes", "Design system"],
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our engineers turn approved designs into fast, reliable, production-ready software.",
    deliverables: ["Frontend", "Backend", "Database", "Integrations", "Authentication"],
  },
  {
    number: "04",
    title: "Test",
    description:
      "We test functionality, usability, performance, and reliability across devices and scenarios.",
    deliverables: ["Functional testing", "Usability testing", "Performance audit", "Bug fixes"],
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deployment, domain configuration, analytics, and production setup — everything needed to go live.",
    deliverables: ["Production deployment", "Domain setup", "Analytics", "Monitoring"],
  },
  {
    number: "06",
    title: "Grow",
    description:
      "We don't disappear after launch. We help you improve, maintain, and evolve the product over time.",
    deliverables: ["Maintenance", "Feature improvements", "Performance optimisation", "Support"],
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Vercel",
  "Prisma",
  "Stripe",
];

export const capabilities = [
  "Websites",
  "Web Applications",
  "Mobile",
  "E-commerce",
  "Business Systems",
  "MVPs",
  "Automation",
  "Integrations",
];

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Start a project", href: "/start-project" },
];
