import {
  Mail, Linkedin, Github, FileText, MapPin,
  Compass, Layers, Rocket, BarChart3, MessageSquareQuote,
  Sparkles, Database, Users, Trophy, Briefcase,
  Cpu, BookOpen, Boxes, GanttChartSquare, LineChart,
} from "lucide-react";

export const site = {
  name: "Donat Ivliev",
  monogram: "DI",
  role: "BBA Management & IT @ University of Toronto Scarborough",
  currentRole: "Emerging Technology Assistant, The BRIDGE",
  tagline: "Product-minded executor with an Agile delivery backbone.",
  location: "Toronto, ON, Canada",
  availability: "Seeking Fall 2026 & Winter 2027 internships",
  email: "donat.ivliev@mail.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/donat-ivliev-17626728a/",
  github: "https://github.com/DonatIvliev",
  resume: "/resume.pdf",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/studying", label: "Studying" },
  { href: "/contact", label: "Contact" },
];

export const proofMetrics = [
  { value: "20+", label: "Initiatives", proof: "Coordinated across FLIP and student leadership work" },
  { value: "200+", label: "Students", proof: "Reached through onboarding & engagement programming" },
  { value: "100+", label: "Applicants", proof: "Supported across recruitment & selection workflows" },
  { value: "1st", label: "ECLIPSE 2026", proof: "Entrepreneurship Track winner" },
  { value: "3+", label: "Agile Sprints", proof: "Supported through SAVI Finance product work" },
  { value: "$5K+", label: "Tracking", proof: "Budget tracking & reconciliation supported through MTA" },
];

export const capabilities = [
  {
    icon: Layers,
    title: "Product & Business Analysis",
    body: "Translate user, stakeholder, and market problems into product flows, requirements, user stories, and MVP concepts.",
    proof: "Applied through Smaked, Igluva, and SAVI Finance — connecting user needs, product logic, and Agile delivery artifacts.",
    tags: ["User Stories", "MVP Scoping", "Process Mapping", "Requirements"],
  },
  {
    icon: Sparkles,
    title: "Emerging Technology & Research",
    body: "Help students and teams access, understand, and apply emerging technologies, business research tools, and data platforms.",
    proof: "Applied through The BRIDGE — UTSC's business research, data, innovation, and work-integrated learning hub.",
    tags: ["AI Tools", "Business Research", "Data Platforms", "VR / 3D Exposure"],
  },
  {
    icon: GanttChartSquare,
    title: "Execution & Project Coordination",
    body: "Coordinate people, timelines, information, and deliverables across fast-moving teams.",
    proof: "Supported 20+ initiatives and 5–7 concurrent workstreams through FLIP and campus leadership roles.",
    tags: ["Coordination", "Planning", "Operations", "Stakeholders"],
  },
  {
    icon: LineChart,
    title: "Data, Finance & Decision Support",
    body: "Use Excel, VBA, Power BI, Capital IQ / Bloomberg exposure, and structured analysis to support decisions.",
    proof: "Built financial dashboards, supported $5K+ tracking & reconciliation, analyzed liquidity and solvency from annual reports.",
    tags: ["Excel", "VBA", "Power BI", "Financial Analysis"],
  },
  {
    icon: MessageSquareQuote,
    title: "Communication at Scale",
    body: "Turn complex work into clear presentations, stakeholder updates, documentation, and recruiter-ready narratives.",
    proof: "Created or supported 20+ initiative presentations and contributed to case-competition storytelling.",
    tags: ["Presentations", "Stakeholder Updates", "Documentation", "Storytelling"],
  },
];

export const operatingSteps = [
  { step: "01", label: "Diagnose", body: "Clarify the problem, users, stakeholders, constraints, and success criteria." },
  { step: "02", label: "Structure", body: "Break ambiguous work into workflows, priorities, ownership, timelines, and requirements." },
  { step: "03", label: "Build", body: "Create the artifact: product flow, dashboard, tracker, presentation, demo support, or execution plan." },
  { step: "04", label: "Coordinate", body: "Align people, tools, communication, deadlines, and follow-through." },
  { step: "05", label: "Improve", body: "Review what worked, tighten the process, document the learning, improve the next cycle." },
];

export type Project = {
  id: string;
  title: string;
  role: string;
  category: string;
  badge?: string;
  status?: string;
  headline: string;
  problem: string;
  did: string[];
  tools: string[];
  tags: string[];
  filters: string[];
  link?: string;
  accent: "navy" | "blue" | "deep" | "pro";
};

export const projects: Project[] = [
  {
    id: "smaked",
    title: "Smaked",
    role: "Founder & Product Lead",
    category: "Product Strategy / Marketplace Concept",
    badge: "Headline Project",
    status: "Concept / In Development",
    headline: "Mobile-first platform connecting consumers with affordable local restaurant meals.",
    problem:
      "Affordable food discovery is fragmented for students and price-sensitive consumers, while local restaurants need lower-friction ways to reach nearby demand without relying on expensive delivery platforms.",
    did: [
      "Developed the product concept around affordability, local discovery, and restaurant visibility.",
      "Mapped consumer-side and restaurant-side value propositions.",
      "Structured early MVP logic around discovery, availability, affordability, and local business participation.",
      "Framed the project as a product strategy and execution case, not just a design concept.",
    ],
    tools: ["Figma", "User Journey Mapping", "MVP Logic", "Market Research"],
    tags: ["Product Strategy", "Marketplace Design", "MVP Thinking", "User Journey", "Platform Logic"],
    filters: ["product"],
    accent: "navy",
  },
  {
    id: "safeplan",
    title: "SafePlan",
    role: "Scrum Master",
    category: "Agile Delivery / Product Coordination",
    headline: "Agile safety-planning tool built around structured delivery and team coordination.",
    problem:
      "Turning a sensitive, complex user problem into a structured product delivery process — moving the team from ambiguity to usable product direction.",
    did: [
      "Supported Agile ceremonies including sprint planning, standups, reviews, and retrospectives.",
      "Helped translate broad product goals into manageable delivery steps.",
      "Maintained execution discipline in a sensitive product context.",
      "Kept the team aligned, structured, and delivery-focused across the sprint cycle.",
    ],
    tools: ["Jira", "Confluence", "Scrum", "Sprint Boards"],
    tags: ["Scrum", "Agile Delivery", "Team Coordination", "Product Requirements", "Sprint Planning"],
    filters: ["agile"],
    link: "https://github.com/samtjhia/SafePlan",
    accent: "pro",
  },
  {
    id: "bridge",
    title: "The BRIDGE — Emerging Technology Work",
    role: "Emerging Technology Assistant",
    category: "Emerging Technology / Business Research",
    badge: "Current Role",
    headline: "Supporting student-facing access to emerging technology and business research tools.",
    problem:
      "Students need a place where academic learning connects with business research platforms, data tools, emerging technologies, and applied learning experiences.",
    did: [
      "Supported student-facing access to business research and emerging technology resources within The BRIDGE.",
      "Assisted with applied technology programming and tool demonstrations where relevant.",
      "Helped connect students with research, data, innovation, and practical learning tools.",
      "Contributed to a work-integrated learning environment linking UTSC Management, the Library, and student development.",
    ],
    tools: ["Capital IQ", "Bloomberg Terminal", "Power BI", "Microsoft Copilot", "AI Tools", "VR / 3D"],
    tags: ["Emerging Technology", "Business Research", "AI Tools", "Data Platforms", "Student Support"],
    filters: ["emerging", "leadership"],
    accent: "deep",
  },
  {
    id: "igluva",
    title: "Igluva",
    role: "Product & Business Analysis",
    category: "Business Analysis / Platform Concept",
    headline: "Rental platform concept addressing fragmented screening and process gaps in Ontario's rental market.",
    problem:
      "Tenant–landlord workflows in Ontario are fragmented, with weak screening and limited transparency around process and trust.",
    did: [
      "Mapped pain points in tenant–landlord workflows.",
      "Proposed product logic to reduce process fragmentation.",
      "Framed the platform around trust, screening, and operational clarity.",
      "Considered how structured flows could improve transparency and user confidence.",
    ],
    tools: ["Process Mapping", "User Journey", "Market Research", "Concept Mapping"],
    tags: ["Business Analysis", "Process Mapping", "Platform Design", "Market Research", "Workflow Design"],
    filters: ["ba", "product"],
    accent: "blue",
  },
  {
    id: "powerbi",
    title: "Financial Dashboard (Power BI)",
    role: "Analyst",
    category: "Data / Finance",
    headline: "Interactive Power BI dashboard analyzing liquidity, solvency, and financial performance from a recent annual report.",
    problem:
      "Annual-report data is dense and hard to act on without a clean visual layer that surfaces liquidity and solvency signals.",
    did: [
      "Structured raw annual-report figures into a clean working dataset.",
      "Built liquidity and solvency views (current ratio, quick ratio, debt-to-equity).",
      "Designed an executive-style dashboard layout for fast decision support.",
      "Connected finance, data, and business communication in one artifact.",
    ],
    tools: ["Power BI", "Excel", "VBA", "Annual Report Analysis"],
    tags: ["Power BI", "Financial Analysis", "Dashboards", "Liquidity", "Solvency"],
    filters: ["data"],
    accent: "pro",
  },
  {
    id: "eclipse",
    title: "ECLIPSE 2026 — 1st Place, Entrepreneurship Track",
    role: "Case Competitor",
    category: "Case Competition / Entrepreneurship",
    badge: "1st Place",
    headline: "Consulting-style case combining problem analysis, solution design, and persuasive presentation under time pressure.",
    problem:
      "A complex business problem with limited time, requiring rapid analysis, structured solution design, and a credible pitch.",
    did: [
      "Analyzed the problem under time constraints and structured a solution path.",
      "Designed and justified an innovative solution with feasibility considerations.",
      "Connected problem analysis, market logic, and presentation into one narrative.",
      "Presented the final case to a judging panel; team awarded 1st Place.",
    ],
    tools: ["Problem Framing", "Slide Design", "Storytelling"],
    tags: ["Case Competition", "Entrepreneurship", "Presentation", "Analytical Thinking"],
    filters: ["leadership"],
    accent: "navy",
  },
];

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "agile", label: "Agile Delivery" },
  { id: "ba", label: "Business Analysis" },
  { id: "emerging", label: "Emerging Technology" },
  { id: "data", label: "Data / Finance" },
  { id: "leadership", label: "Leadership" },
];

export const experiences = [
  {
    id: "bridge",
    title: "Emerging Technology Assistant",
    org: "The BRIDGE, University of Toronto Scarborough",
    period: "Current Role",
    icon: Cpu,
    context:
      "A joint venture between UTSC's Department of Management and the U of T Scarborough Library, where business research, data, innovation, collaboration, entrepreneurship, and work-integrated learning converge.",
    bullets: [
      "Supported student-facing access to business research and emerging technology resources within The BRIDGE.",
      "Assisted with applied technology programming connected to AI tools, VR, 3D tools, data platforms, and business databases.",
      "Helped students and staff navigate tools that connect academic theory with practical business and technology applications.",
      "Contributed to a work-integrated learning environment linking UTSC Management, the Library, and innovation programming.",
      "Supported exposure to Capital IQ, Bloomberg Terminal, Power BI, Microsoft Copilot, AI tools, VR, 3D tools, and business research databases where accurate.",
    ],
    tags: ["Emerging Technology", "Business Research", "Student Support", "Innovation Programming", "Capital IQ", "Bloomberg Terminal Exposure", "AI Tools"],
  },
  {
    id: "flip",
    title: "Peer Mentor / Work-Study Student",
    org: "First-Year Learning Integration Program (FLIP), UTSC",
    period: "2024 — Present",
    icon: Users,
    context:
      "FLIP supports first-year transition, programming, and engagement at UTSC through structured coordination and student-facing execution.",
    bullets: [
      "Supported large cohorts of first-year students through onboarding, transition programming, and engagement initiatives.",
      "Coordinated or contributed to 20+ initiatives across multiple concurrent workstreams.",
      "Helped maintain communication between students, staff, and program stakeholders.",
      "Supported programming that reached 200+ students.",
      "Created or supported presentations, updates, and student-facing communication materials.",
    ],
    tags: ["Program Coordination", "Mentorship", "Student Engagement", "Communication", "Execution"],
  },
  {
    id: "mta",
    title: "Vice President, Internal Strategy",
    org: "Management & Technology Association, UTSC",
    period: "2024 — Present",
    icon: Briefcase,
    context:
      "Student-led business and technology organization at UTSC. The Internal Strategy seat owns planning, recruitment coordination, and financial transparency.",
    bullets: [
      "Supported internal planning and operational execution for student-led initiatives.",
      "Coordinated cross-functional communication, recruitment workflows, and team accountability.",
      "Supported multiple recruitment cycles with 100+ applicants.",
      "Supported $5K+ budget tracking and reconciliation to improve transparency.",
      "Helped organize and structure initiatives, events, and competitions across business and technology themes.",
    ],
    tags: ["Internal Strategy", "Team Coordination", "Recruitment", "Finance Tracking", "Process Improvement"],
  },
  {
    id: "savi",
    title: "Product / Business Role",
    org: "SAVI Finance",
    period: "Project Engagement",
    icon: Boxes,
    context:
      "Fintech-oriented product environment using Agile / Scrum workflows. Supported product development across approximately 3 sprints.",
    bullets: [
      "Supported product development within Agile / Scrum workflows across approximately 3 sprints.",
      "Helped structure Jira artifacts including epics, user stories, and product requirements.",
      "Connected product ideas with user needs, stakeholder feedback, and engineering execution.",
      "Supported MVP ideation and feature validation for fintech-oriented product concepts.",
      "Contributed to product discussions around features such as Sankey-style financial visualization and receipt-checking concepts.",
    ],
    tags: ["Agile", "Scrum", "Jira", "Product Requirements", "FinTech", "MVP Thinking"],
  },
  {
    id: "ambassador",
    title: "Student Campus Ambassador & Peer Mentor",
    org: "University of Toronto Scarborough",
    period: "2023 — Present",
    icon: BookOpen,
    context:
      "Represented UTSC to prospective students, families, and campus visitors across recruitment and outreach contexts.",
    bullets: [
      "Acted as a primary contact point for prospective students and families.",
      "Communicated academic programs and student experience clearly in a professional setting.",
      "Built public communication and relationship-management experience.",
    ],
    tags: ["Public Communication", "Relationship Management", "Professional Presence", "Brand Representation"],
  },
];

export const leadership = [
  {
    id: "bridge",
    title: "The BRIDGE",
    role: "Emerging Technology Assistant",
    proof: "Supports a UTSC environment where business research, data, innovation, emerging technology, entrepreneurship, and applied learning converge.",
    tags: ["Emerging Technology", "Business Research", "Innovation", "Student Support"],
    icon: Cpu,
    accent: "navy" as const,
  },
  {
    id: "flip",
    title: "FLIP",
    role: "Peer Mentor / Work-Study Student",
    proof: "Supported onboarding, transition programming, and engagement across 20+ initiatives reaching 200+ students.",
    tags: ["Mentorship", "Program Coordination", "Communication at Scale"],
    icon: Users,
    accent: "blue" as const,
  },
  {
    id: "mta",
    title: "MTA",
    role: "VP, Internal Strategy",
    proof: "Supported internal planning, recruitment workflows for 100+ applicants, and $5K+ budget tracking & reconciliation.",
    tags: ["Strategy", "Recruitment", "Finance Tracking", "Process Improvement"],
    icon: Briefcase,
    accent: "pro" as const,
  },
  {
    id: "eclipse",
    title: "ECLIPSE 2026",
    role: "1st Place — Entrepreneurship Track",
    proof: "Developed and presented a business case under time pressure — problem analysis, solution design, and persuasive communication.",
    tags: ["Case Competition", "Entrepreneurship", "Presentation"],
    icon: Trophy,
    accent: "award" as const,
  },
];

export const skillGroups = [
  {
    title: "Product & Delivery",
    items: ["Jira", "Confluence", "JQL", "Agile / Scrum", "User Stories", "Sprint Planning", "Requirements Gathering", "MVP Scoping", "Product Roadmaps", "Backlog Organization", "Retrospectives"],
  },
  {
    title: "Emerging Technology & Research",
    items: ["AI Tools", "Microsoft Copilot", "VR Exposure", "3D Tools Exposure", "Capital IQ", "Bloomberg Terminal Exposure", "Business Research Databases", "Technology Demonstrations", "Innovation Programming"],
  },
  {
    title: "Data & Business",
    items: ["Excel", "VBA", "Power BI", "Pandas", "SQL", "Financial Analysis", "Dashboarding", "Market Research", "Process Mapping", "Liquidity Analysis", "Solvency Analysis"],
  },
  {
    title: "Technical",
    items: ["Java", "Python", "C / C++", "Git", "GitHub", "Figma", "HTML / CSS"],
  },
  {
    title: "Communication",
    items: ["Stakeholder Updates", "Presentation Design", "Recruitment Coordination", "Case Storytelling", "Process Documentation", "Workshop Support", "Executive-Style Summaries"],
  },
];
