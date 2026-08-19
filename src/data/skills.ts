import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Research & Security",
    items: [
      "AI Security",
      "LLM Security",
      "RAG Security",
      "Threat Modeling",
      "Security Evaluation",
      "Prompt Injection",
      "Privacy Attacks",
      "Access Control",
      "Authorization",
    ],
  },
  {
    category: "AI / ML",
    items: ["LLMs", "RAG", "Multi-Agent Systems", "LangGraph", "Ollama", "Google Gemini"],
  },
  {
    category: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "C", "C++"],
  },
  {
    category: "Engineering",
    items: [
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "REST APIs",
      "Git",
      "Docker",
    ],
  },
  {
    category: "Emerging / Related",
    items: ["MCP", "Blockchain", "Solidity", "Ethereum"],
  },
];
