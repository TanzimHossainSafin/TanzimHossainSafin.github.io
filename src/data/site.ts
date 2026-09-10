export const site = {
  name: "Tanzim Hossain Safin",
  eyebrow: "AI Security Researcher",
  primaryTitle: "AI Security Researcher · LLM Security & Privacy · Multi-Agent AI",
  secondaryDescription:
    "Research Engineer working on secure, trustworthy, and privacy-aware AI systems.",
  heroStatement:
    "I study how modern AI systems break under adversarial pressure, and build structural defenses that make them secure, reliable, and worth trusting.",
  heroFocusLine:
    "Focus: LLM security, multi-agent systems, RAG security, privacy, and trustworthy AI.",
  location: "Dhaka, Bangladesh",
  email: "tanzimhossainsafin756@gmail.com",
  get emailComposeUrl() {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}`;
  },
  github: "https://github.com/TanzimHossainSafin",
  linkedin: "https://www.linkedin.com/in/tanzim-hossain-safin-20a60123b/",
  scholar: "https://scholar.google.com/citations?user=4nkHC-sAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0005-2784-5630",
  cv: "/documents/tanzim-hossain-safin-cv.pdf",
  about: {
    statement:
      "I am a Computer Science graduate from BRAC University focused on security and reliability in modern AI systems. My work sits at the intersection of AI security, LLMs, RAG, multi-agent systems, privacy, and software engineering.",
    points: [
      "B.Sc. in Computer Science and Engineering, BRAC University",
      "Undergraduate Student Researcher at BRAC University",
      "Thesis on security evaluation of distributed RAG systems",
      "Current research on multi-agent LLM security and trust propagation",
      "Interest in research collaboration and graduate study",
    ],
  },
  education: {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "BRAC University",
    period: "January 2022 – June 2026",
    cgpa: "3.63",
    thesisTitle:
      "A Security Evaluation Framework for Distributed Retrieval-Augmented Generation Systems",
    supervisor: "Dr. Swakkhar Shatabda",
    thesisPdf: "/documents/drag-security-thesis.pdf",
  },
  researchInterests: [
    "AI Security",
    "LLM Security",
    "Multi-Agent AI Security",
    "Retrieval-Augmented Generation (RAG)",
    "AI Privacy",
    "AI Safety",
    "Trustworthy AI",
    "Threat Modeling",
    "Security Evaluation",
  ],
  engineeringInterests: [
    "Python",
    "TypeScript",
    "Node.js",
    "AI/LLM Application Engineering",
    "Backend Systems",
    "Distributed Systems",
    "MCP",
    "Blockchain / Smart Contracts",
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "News", href: "/#news" },
    { label: "Research", href: "/research" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
