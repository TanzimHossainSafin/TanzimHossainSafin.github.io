export type ResearchFocusArea = {
  title: string;
  description: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type AttackItem = {
  title: string;
  description: string;
};

export type AttackGroup = {
  group: string;
  items: AttackItem[];
};

export type DefenseItem = {
  title: string;
  description: string;
};

export type Finding = {
  title: string;
  description: string;
  metrics?: { label: string; value: string }[];
  highlight?: boolean;
};

export type ResourceLinks = {
  pdf?: string;
  pdfLabel?: string;
  github?: string;
  scholar?: string;
};

export type PipelineAgent = {
  name: string;
  privilege: "None" | "Low" | "Medium" | "High";
  description: string;
};

export type ResearchItem = {
  slug: string;
  title: string;
  type: string;
  status: string;
  year: string;
  institution?: string;
  role: string;
  supervisor?: string;
  coSupervisor?: string;
  authors?: string[];
  collaborators?: string[];
  researchAreas: string[];
  shortDescription: string;
  abstract: string;
  problem: string;
  researchQuestion: string;
  motivation: string;
  methodology: {
    intro: string;
    steps?: string[];
  };
  systemsStudied?: string[];
  pipeline?: PipelineAgent[];
  threatModel: string;
  attackGroups: AttackGroup[];
  defenses: DefenseItem[];
  keyFindings: Finding[];
  additionalFindings?: string[];
  contributions: string[];
  limitations: string[];
  resources: ResourceLinks;
  relatedSlugs?: string[];
};

export type ProjectDetail = {
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  frontend?: string;
  backend?: string;
  aiFunctionality?: string;
  engineeringDecisions?: string[];
  role: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  cardHighlights: string[];
  detail: ProjectDetail;
  github: string;
  demo?: string;
};
