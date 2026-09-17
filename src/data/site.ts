import {
  Users, Trophy, Briefcase,
  Cpu, BookOpen, Boxes, GanttChartSquare, LineChart,
  Layers, Sparkles, MessageSquareQuote,
} from "lucide-react";

export const site = {
  name: "Donat Ivliev",
  monogram: "DI",
  role: "Business × Technology × Delivery",
  currentRole: "Project Delivery Specialist Intern, RBC",
  tagline: "I turn complex, ambiguous work into structured delivery and measurable outcomes.",
  location: "Toronto, ON, Canada",
  availability: "Project Delivery Specialist Intern @ RBC",
  email: "donat.ivliev@mail.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/donat-ivliev-17626728a/",
  github: "https://github.com/DonatIvliev",
  resume: "/resume.pdf",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export const proofMetrics = [
  { value: "1,000+", label: "Practitioners", proof: "Supported an AI-enabled enterprise learning program for data science practitioners at RBC" },
  { value: "35+", label: "Program Participants", proof: "Early data talent program managed with a VBA-enabled tracking system" },
  { value: "15", label: "VR Pilot Students", proof: "Practised pitching with AI personas in a faculty-partnered VR learning pilot" },
  { value: "40+", label: "3D Models", proof: "Designed and produced for students and faculty, with a standard operating procedure" },
  { value: "$5K+", label: "Financial Tracking", proof: "Reconciled a student association's finances, unlocking $200 in additional funding" },
  { value: "1st", label: "ECLIPSE 2026", proof: "Province-wide case competition, judged in part by a company director" },
];

export const capabilities = [
  {
    icon: GanttChartSquare,
    title: "Delivering Projects",
    body: "Structure multi-stakeholder work into clear plans, owners, and delivery cadences that hold under pressure.",
    proof: "Manages an early data talent program for 35+ participants at RBC and co-led a multi-stage Data Analytics Case Competition.",
    tags: ["Jira", "Kanban", "Planning", "Stakeholders"],
  },
  {
    icon: LineChart,
    title: "Working With Data",
    body: "Turn raw records and financial statements into reliable datasets, models, and decision-ready views.",
    proof: "Built a three-year financial model and Power BI liquidity/solvency dashboard; cleaned duplicate program records in SharePoint and Excel.",
    tags: ["Excel", "Power BI", "Financial Modeling", "Bloomberg"],
  },
  {
    icon: Cpu,
    title: "Automating Work",
    body: "Remove manual effort with tooling — from VBA trackers to intelligent agents that draft recurring documentation.",
    proof: "Built a VBA-enabled readiness tracker and an agent used by a project team to automate Jira documentation.",
    tags: ["VBA", "AI Agents", "Documentation", "Process Design"],
  },
  {
    icon: Sparkles,
    title: "Adopting Technology",
    body: "Pilot emerging technology with real users, then make it repeatable for the teams that come next.",
    proof: "Piloted a VR pitching application with 15 students and standardised a 3D-printing operating procedure after 40+ builds.",
    tags: ["VR", "3D Printing", "Pilots", "Enablement"],
  },
];

export const operatingSteps = [
  { step: "01", label: "Diagnose", body: "Clarify the problem, users, stakeholders, constraints, and what success actually means." },
  { step: "02", label: "Structure", body: "Break ambiguous work into workstreams, owners, requirements, and timelines." },
  { step: "03", label: "Build", body: "Produce the artifact: tracker, model, dashboard, agent, documentation, or delivery plan." },
  { step: "04", label: "Coordinate", body: "Align partners, teams, and leaders so the work keeps moving between checkpoints." },
  { step: "05", label: "Improve", body: "Review the cycle, document the procedure, and make the next run faster." },
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
    id: "eclipse",
    title: "ECLIPSE 2026 — Privacy-First AI Strategy",
    role: "Case Competitor",
    category: "Technology Strategy / Case Competition",
    badge: "1st Place",
    headline:
      "On-device AI recommendation strategy that balanced user privacy with personalization — and won a province-wide case competition.",
    problem:
      "A company needed a recommendation approach that improved personalization without increasing exposure of sensitive customer data.",
    did: [
      "Researched AI architectures and competitor strategies to identify a privacy-focused approach that balanced user trust with product differentiation.",
      "Recommended an on-device AI model and implementation roadmap to reduce sensitive-data exposure while supporting personalization and retention.",
      "Built a financial model and executive pitch linking technology adoption to acquisition cost and customer lifetime value.",
      "Earned 1st Place in a province-wide university case competition judged in part by a company director.",
    ],
    tools: ["Financial Modeling", "Market Research", "Executive Storytelling"],
    tags: ["AI Strategy", "Privacy", "Financial Model", "Executive Pitch"],
    filters: ["strategy", "data"],
    accent: "navy",
  },
  {
    id: "finance-model",
    title: "Business Performance Analysis",
    role: "Analyst",
    category: "Financial Modeling / Business Intelligence",
    headline:
      "Three-year financial model and Power BI dashboard assessing liquidity and solvency, used to forecast next-quarter performance.",
    problem:
      "Annual-report data is dense and hard to act on without a structured model and a visual layer that surfaces liquidity and solvency signals.",
    did: [
      "Structured three years of reported figures into a clean, auditable working model.",
      "Built liquidity and solvency views including current ratio, quick ratio, and debt-to-equity.",
      "Used historical performance to forecast next-quarter results.",
      "Designed an executive-style Power BI dashboard for fast decision support.",
    ],
    tools: ["Excel", "Power BI", "Financial Modeling"],
    tags: ["Liquidity", "Solvency", "Forecasting", "Dashboards"],
    filters: ["data"],
    accent: "pro",
  },
  {
    id: "safeplan",
    title: "SafePlan — Agile Stakeholder Project",
    role: "Scrum Master",
    category: "Agile Delivery",
    headline:
      "Scrum Master on a Java product, running the ceremonies and Jira/Kanban board that kept a stakeholder-driven build on track.",
    problem:
      "A sensitive, broadly scoped user problem had to become a structured backlog a student team could actually deliver against.",
    did: [
      "Ran sprint planning, standups, reviews, and retrospectives across the delivery cycle.",
      "Translated stakeholder goals into epics, user stories, and acceptance criteria in Jira.",
      "Maintained a Kanban flow that kept work visible and unblocked.",
      "Held the team to a consistent delivery rhythm in a sensitive product context.",
    ],
    tools: ["Jira", "Kanban", "Scrum", "Java"],
    tags: ["Scrum", "Backlog", "Stakeholders", "Delivery"],
    filters: ["delivery"],
    link: "https://github.com/samtjhia/SafePlan",
    accent: "deep",
  },
  {
    id: "vr-pilot",
    title: "VR Pitch Practice Pilot",
    role: "Emerging Technology Assistant",
    category: "Emerging Technology / Learning Design",
    headline:
      "A faculty-partnered VR application where 15 students practised pitching with AI personas before live assessments.",
    problem:
      "Students had few realistic, low-stakes opportunities to rehearse pitching before graded assessments.",
    did: [
      "Partnered with faculty to scope and pilot a VR-based learning application.",
      "Ran the pilot with 15 students practising pitches against AI personas.",
      "Created a new assessment-preparation format with plans for broader curriculum adoption.",
      "Captured what worked so the format could be repeated by other instructors.",
    ],
    tools: ["VR", "AI Personas", "Learning Design"],
    tags: ["VR", "Pilot", "Curriculum", "Adoption"],
    filters: ["emerging"],
    accent: "blue",
  },
  {
    id: "jira-agent",
    title: "Jira Documentation Agent",
    role: "Project Delivery Specialist Intern",
    category: "Automation / Delivery Tooling",
    headline:
      "An intelligent agent used regularly by a project team to automate Jira documentation and project-support materials.",
    problem:
      "Recurring Kanban delivery work generated repetitive documentation that consumed team time and drifted in quality.",
    did: [
      "Identified the recurring documentation steps worth automating.",
      "Built an agent that drafts Jira documentation and project-support materials.",
      "Improved consistency across recurring Kanban-based delivery workflows.",
      "Kept the tool within enterprise-appropriate boundaries and team review.",
    ],
    tools: ["Jira", "AI Tooling", "Kanban"],
    tags: ["Automation", "Documentation", "Delivery"],
    filters: ["delivery", "emerging"],
    accent: "pro",
  },
];

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "delivery", label: "Delivery" },
  { id: "data", label: "Data & Finance" },
  { id: "strategy", label: "Strategy" },
  { id: "emerging", label: "Emerging Technology" },
];

export const experiences = [
  {
    id: "rbc",
    title: "Project Delivery Specialist Intern",
    org: "Royal Bank of Canada",
    period: "Sep 2026 — Present · Toronto, ON",
    icon: Briefcase,
    context:
      "Delivery-side work inside an enterprise data and technology organisation, supporting talent programs, platform migration, and Kanban-based project workflows.",
    bullets: [
      "Managed an early data talent program for 35+ participants and built a VBA-enabled tracking system to monitor readiness, engagement, and development against defined capability requirements.",
      "Worked with senior leaders and an external technology partner to define user requirements, prepare participant data, and support migration to an enterprise mentoring platform.",
      "Built an intelligent agent used regularly by a small project team to automate Jira documentation and project-support materials, improving consistency across recurring Kanban delivery workflows.",
      "Contributed to shaping an AI-enabled enterprise learning program supporting 1,000+ data science practitioners.",
    ],
    tags: ["Project Delivery", "Jira / Kanban", "VBA", "Requirements", "Stakeholder Management"],
  },
  {
    id: "utsc",
    title: "Emerging Technology Assistant & Department Programs Associate",
    org: "University of Toronto Scarborough — Department of Management",
    period: "Apr 2025 — Present · Toronto, ON",
    icon: Cpu,
    context:
      "Emerging technology adoption and program operations inside the Department of Management, spanning VR learning pilots, 3D printing, and program data.",
    bullets: [
      "Partnered with faculty to pilot a VR-based learning application where 15 students practised pitching with AI personas, creating a new assessment-preparation format with plans for broader curriculum adoption.",
      "Led 3D-printing initiatives by designing and producing 40+ custom models for students and faculty, then developed a standardised operating procedure for consistent future use.",
      "Updated program digital assets in Figma and structured participant data in SharePoint and Excel, eliminating duplicate records and creating a more reliable source for program delivery.",
    ],
    tags: ["VR", "3D Printing", "Figma", "SharePoint", "Program Operations"],
  },
  {
    id: "mta",
    title: "Program Operations & Internal Strategy Coordinator",
    org: "Management & Technology Association @ UTSC",
    period: "Sep 2024 — Present · Toronto, ON",
    icon: Users,
    context:
      "Operations and financial transparency for a student-led business and technology association.",
    bullets: [
      "Co-led the Data Analytics Case Competition, structuring a multi-stage project and coordinating stakeholders across students, faculty, and industry.",
      "Built and reconciled a $5K+ financial tracking system by reviewing bank activity, resolving legacy discrepancies, and structuring documentation.",
      "Improved reporting transparency, resulting in $200 in additional departmental funding.",
      "Named Associate of the Year (2025).",
    ],
    tags: ["Operations", "Case Competition", "Financial Tracking", "Coordination"],
  },
];

export const education = {
  degree: "Bachelor of Business Administration — Management & Information Technology",
  school: "University of Toronto Scarborough",
  period: "Sep 2023 — Present · Toronto, ON",
  coursework: ["Principles of Finance", "Quantitative Methods in Economics", "Strategy & Technology", "Software Design"],
  certifications: ["CAPM (in progress)", "Google Project Management", "Jira Agile Certification", "Financial Modeling Foundation", "SAP Activate"],
};

export const recognition = [
  { title: "1st Place — ECLIPSE 2026", detail: "Province-wide university case competition, judged in part by a company director." },
  { title: "Associate of the Year (2025)", detail: "Management & Technology Association, UTSC." },
  { title: "Finalist — Innovators Den", detail: "Shark Tank–style pitch competition." },
];

export const languages = [
  { flag: "🇺🇦", name: "Ukrainian", level: "Fluent" },
  { flag: "🇬🇧", name: "English", level: "Fluent" },
  { flag: "🇷🇺", name: "Russian", level: "Fluent" },
  { flag: "🇫🇷", name: "French", level: "Intermediate" },
  { flag: "🇨🇳", name: "Mandarin", level: "Intermediate" },
];

export const leadership = [
  {
    id: "rbc",
    title: "RBC",
    role: "Project Delivery Specialist Intern",
    proof: "Delivery support for a 35+ participant data talent program and an AI-enabled learning program reaching 1,000+ practitioners.",
    tags: ["Project Delivery", "Enterprise", "Automation"],
    icon: Briefcase,
    accent: "navy" as const,
  },
  {
    id: "utsc",
    title: "U of T Scarborough",
    role: "Emerging Technology Assistant & Programs Associate",
    proof: "VR learning pilot with 15 students, 40+ custom 3D models, and a standardised operating procedure.",
    tags: ["Emerging Technology", "Learning Design", "Program Data"],
    icon: Cpu,
    accent: "blue" as const,
  },
  {
    id: "mta",
    title: "MTA",
    role: "Program Operations & Internal Strategy Coordinator",
    proof: "Co-led a Data Analytics Case Competition and reconciled $5K+ in tracking, unlocking $200 in extra funding.",
    tags: ["Operations", "Finance", "Coordination"],
    icon: Boxes,
    accent: "pro" as const,
  },
  {
    id: "eclipse",
    title: "ECLIPSE 2026",
    role: "1st Place",
    proof: "Privacy-focused on-device AI recommendation strategy with a financial model and executive pitch.",
    tags: ["Case Competition", "AI Strategy", "Pitch"],
    icon: Trophy,
    accent: "award" as const,
  },
];

export const skillGroups = [
  {
    title: "Project Delivery",
    items: ["Jira", "Kanban", "Agile / Scrum", "User Stories", "Requirements Gathering", "Stakeholder Management", "CAPM (in progress)", "SAP Activate"],
  },
  {
    title: "Data & Finance",
    items: ["Excel", "VBA", "Power BI", "Financial Modeling", "Forecasting", "Bloomberg Terminal", "SQL", "Liquidity & Solvency Analysis"],
  },
  {
    title: "Emerging Technology",
    items: ["AI Agents", "Microsoft Copilot", "VR Learning Pilots", "3D Printing", "Process Automation", "Technology Enablement"],
  },
  {
    title: "Technical",
    items: ["Python", "Java", "C / C++", "Git", "GitHub", "Figma", "SharePoint", "HTML / CSS"],
  },
  {
    title: "Communication",
    items: ["Executive Pitches", "Stakeholder Updates", "Process Documentation", "Presentation Design", "Case Storytelling"],
  },
];

export const capabilityIcons = { Layers, MessageSquareQuote, BookOpen };
