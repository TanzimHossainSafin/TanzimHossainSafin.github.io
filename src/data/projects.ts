import { ProjectItem } from "@/types";

export const projectItems: ProjectItem[] = [
  {
    slug: "udyomix",
    title: "Udyomix",
    category: "AI / Software Engineering",
    description:
      "An AI-powered student productivity and study-management platform focused on study groups, partner matching, scheduling, habits, and career preparation.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Google Gemini",
      "Turbo",
    ],
    cardHighlights: [
      "AI-assisted study partner matching and recommendations",
      "Real-time collaboration via Socket.IO",
      "Full-stack system with authenticated backend APIs",
    ],
    detail: {
      problem:
        "Students often struggle to coordinate study groups, find compatible study partners, and stay consistent with schedules and habits alongside long-term career preparation.",
      solution:
        "Udyomix brings study groups, partner matching, scheduling, habit tracking, and career preparation into a single platform, using AI to assist with matching and recommendations on top of a real-time collaborative backend.",
      architecture:
        "A monorepo (managed with Turbo) separating a React/TypeScript frontend from a Node.js/Express backend, with MongoDB for persistence and Socket.IO for real-time features such as live study-group updates.",
      features: [
        "Study group creation and coordination",
        "AI-assisted study partner matching",
        "Scheduling and habit tracking",
        "Career preparation tools",
        "Real-time updates via Socket.IO",
      ],
      frontend: "React with TypeScript, structured as a package within a Turbo monorepo.",
      backend:
        "Node.js and Express REST APIs backed by MongoDB, with JWT-based authentication and Socket.IO for real-time communication.",
      aiFunctionality:
        "Google Gemini is integrated to support AI-assisted study partner matching and recommendations.",
      engineeringDecisions: [
        "Monorepo structure (Turbo) to share code and types between frontend and backend",
        "JWT-based authentication for stateless session handling",
        "Socket.IO for real-time study group and scheduling updates",
      ],
      role: "Designed and built the platform end to end, including backend API design, real-time features, authentication, and AI integration.",
    },
    github: "https://github.com/TanzimHossainSafin/Udyomix",
  },
  {
    slug: "ai-powered-financial-system",
    title: "AI-Powered Financial System",
    category: "AI / Financial Technology",
    description:
      "An AI-powered financial platform for personal finance management, investment tracking, risk assessment, expense optimization, and intelligent financial recommendations.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    cardHighlights: [
      "Personal finance management and investment tracking",
      "AI-assisted risk assessment and expense optimization",
      "Full-stack implementation with separate backend and client",
    ],
    detail: {
      problem:
        "Individuals managing personal finances often lack a single system that connects everyday expense tracking with longer-term investment tracking and risk awareness.",
      solution:
        "The platform combines personal finance management, investment tracking, risk assessment, and expense optimization into one system, using AI to support financial recommendations.",
      architecture:
        "A full-stack application with separate backend and client directories: a Node.js/Express backend providing the API layer, and a React/TypeScript client consuming it.",
      features: [
        "Personal finance management",
        "Investment tracking",
        "Risk assessment",
        "Expense optimization",
        "AI-powered financial recommendations",
      ],
      frontend: "React with TypeScript, organized in a dedicated client directory.",
      backend: "Node.js and Express, organized in a dedicated backend directory.",
      aiFunctionality:
        "AI-assisted analysis supports financial recommendations, risk assessment, and expense optimization features described in the project.",
      role: "Built the platform's frontend and backend, including the API layer and AI-assisted financial features.",
    },
    github: "https://github.com/TanzimHossainSafin/Ai-Powered-Financial-System",
  },
];

export function getProjectBySlug(slug: string) {
  return projectItems.find((item) => item.slug === slug);
}
