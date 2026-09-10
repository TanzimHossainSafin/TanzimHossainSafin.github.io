import { ResearchItem } from "@/types";

export const researchItems: ResearchItem[] = [
  {
    slug: "distributed-rag-security-evaluation",
    title:
      "A Security Evaluation Framework for Distributed Retrieval-Augmented Generation Systems",
    type: "B.Sc. Thesis / Undergraduate Research",
    status: "Completed Thesis — BRAC University, 2026",
    year: "2026",
    institution: "BRAC University",
    role: "Undergraduate Researcher",
    supervisor: "Dr. Swakkhar Shatabda",
    coSupervisor: "Mohammad Badrul Hossain",
    researchAreas: ["RAG Security", "AI Privacy", "Threat Modeling", "Security Evaluation"],
    shortDescription:
      "A systematic, seven-step security evaluation framework for distributed RAG systems, deriving six attack classes across the CIA triad and six corresponding defenses — including a previously undocumented attack, Grounding-Farming.",
    abstract:
      "Distributed RAG systems distribute knowledge across independent participants instead of relying on one centralized knowledge base. This introduces new trust assumptions about which participant to query and whether the information or behavior it reports can be trusted. This thesis develops a systematic security evaluation framework for identifying and testing these trust assumptions, and applies it to two distributed RAG architectures — DRAG and Reliable-dRAG — deriving six attack classes across the CIA triad and six corresponding defense mechanisms.",
    problem:
      "Distributed and decentralized RAG systems spread retrieval responsibility across independent, potentially untrusted participants. Existing security analysis of RAG systems largely assumes a centralized, trusted knowledge base, leaving the trust assumptions introduced by distribution unexamined.",
    researchQuestion:
      "What trust assumptions do distributed RAG architectures rely on, and how can those assumptions be systematically identified, attacked, and defended against?",
    motivation:
      "As RAG systems move toward decentralized and multi-party deployments, the security guarantees a designer can rely on change. Without a systematic way to surface hidden trust assumptions, distributed RAG systems risk being deployed with confidentiality, integrity, and availability gaps that only surface after real-world exploitation.",
    methodology: {
      intro:
        "The thesis proposes a seven-step security evaluation procedure applied consistently across the target architectures.",
      steps: [
        "Enumerate trust assumptions in the target architecture",
        "Identify the component carrying each assumption",
        "Derive attacks against those assumptions",
        "Implement the attacks",
        "Evaluate their impact",
        "Design corresponding defenses",
        "Measure recovery and overhead",
      ],
    },
    systemsStudied: ["DRAG", "Reliable-dRAG"],
    threatModel:
      "The framework assumes an attacker who can participate in or influence the distributed retrieval process — for example, by controlling or compromising one or more participant nodes — without necessarily requiring privileged access to the system as a whole. Attacks are derived directly from the trust assumptions each architecture makes about its participants.",
    attackGroups: [
      {
        group: "Integrity",
        items: [
          {
            title: "Data Poisoning",
            description:
              "Injecting manipulated or false content into the distributed knowledge base to influence retrieved context and downstream generation.",
          },
          {
            title: "Source Selection Manipulation",
            description:
              "Manipulating which participant or source is selected during retrieval to bias the information returned to the system.",
          },
        ],
      },
      {
        group: "Confidentiality",
        items: [
          {
            title: "Knowledge Extraction",
            description:
              "Recovering private or restricted content held by a participant through crafted retrieval queries.",
          },
          {
            title: "Membership Inference",
            description:
              "Determining whether a specific document or record is present in a participant's knowledge base.",
          },
        ],
      },
      {
        group: "Availability",
        items: [
          {
            title: "Selective Forwarding",
            description:
              "A participant selectively drops, delays, or withholds forwarding of retrieval requests or results to degrade system reliability.",
          },
          {
            title: "Denial of Service",
            description:
              "Overwhelming a participant or the coordination layer to make retrieval unavailable or unreliable.",
          },
        ],
      },
    ],
    defenses: [
      {
        title: "Replication and Cross-Peer Validation",
        description:
          "Cross-checks results across multiple participants to detect and reduce the impact of poisoned or manipulated responses.",
      },
      {
        title: "Topic-Claim Quota Enforcement",
        description:
          "Limits how much influence a single participant or source can exert over a given topic or claim, reducing source selection manipulation and grounding manipulation.",
      },
      {
        title: "Layered Extraction Prevention",
        description:
          "Applies multiple layers of query and response filtering to reduce the effectiveness of knowledge extraction attempts.",
      },
      {
        title: "Privacy-Preserving Retrieval",
        description:
          "Reduces the signal available for membership inference by limiting what retrieval responses reveal about participant-held content.",
      },
      {
        title: "Reputation-Based Forwarding Defense",
        description:
          "Tracks participant forwarding behavior over time to detect and route around participants exhibiting selective forwarding.",
      },
      {
        title: "Layered Congestion Defense",
        description:
          "Applies layered rate-limiting and congestion control to reduce the impact of denial-of-service attempts on retrieval availability.",
      },
    ],
    keyFindings: [
      {
        title: "Grounding-Farming",
        description:
          "A previously undocumented attack against Reliable-dRAG's reliability mechanism. It requires no privileged access and can evade the deployed defense because the attack does not exhibit the transaction properties that the defense observes.",
        highlight: true,
      },
      {
        title: "Knowledge Extraction Effectiveness Varies by Corpus Type",
        description:
          "Knowledge extraction recovered approximately 20–30% of a multiple-choice corpus under the evaluated setting, compared with approximately 1–6% for the evaluated free-text corpora.",
      },
      {
        title: "Defenses Evaluated for Recovery and Overhead, Not Just Attack Prevention",
        description:
          "All six defense mechanisms were evaluated on recovery and overhead rather than attack prevention alone, reflecting a practical security-engineering trade-off rather than a purely theoretical one.",
      },
    ],
    additionalFindings: [
      "Six corresponding defense mechanisms were designed and evaluated against the derived attack classes.",
      "The work studies recovery, overhead, and security impact rather than reporting attacks in isolation.",
    ],
    contributions: [
      "A reusable, seven-step security evaluation procedure for distributed RAG architectures",
      "Six attack classes derived systematically across the CIA triad",
      "Discovery of Grounding-Farming, a previously undocumented attack on a deployed reliability mechanism",
      "Six defense mechanisms evaluated for both security impact and operational overhead",
    ],
    limitations: [
      "The framework was demonstrated on two systems, DRAG and Reliable-dRAG, to show transfer of the procedure rather than to claim universal generalization across all distributed RAG architectures.",
      "Attack effectiveness figures (such as knowledge-extraction recovery rates) are specific to the evaluated corpora and settings and may not transfer directly to other deployments.",
    ],
    resources: {
      pdf: "/documents/drag-security-thesis.pdf",
      pdfLabel: "Thesis PDF",
      github: "https://github.com/TanzimHossainSafin",
    },
    relatedSlugs: ["trust-propagation-multi-agent-llm"],
  },
  {
    slug: "trust-propagation-multi-agent-llm",
    title: "Trust Propagation and Structural Containment in Multi-Agent LLM Pipelines",
    type: "Research / Manuscript",
    status: "Accepted — IEEE CARS 2026 (Main Conference)",
    year: "2026",
    role: "Researcher",
    authors: ["Tanzim Hossain Safin", "Sharif Noor Zisad", "Ragib Hasan"],
    collaborators: ["Sharif Noor Zisad", "Ragib Hasan"],
    researchAreas: [
      "Multi-Agent AI Security",
      "LLM Security",
      "Trustworthy AI",
      "Authorization",
    ],
    shortDescription:
      "An empirical security study of a four-agent LLM pipeline, examining whether a compromised low-privilege agent can influence a high-privilege executor, and whether structural authorization can contain the attack even when an upstream model judgment is compromised.",
    abstract:
      "This manuscript studies security risks created when multi-agent LLM systems delegate work across agents with different privilege levels. Framed through trust propagation and the confused deputy problem, it evaluates shared-memory poisoning and indirect prompt injection against a four-agent pipeline — Supervisor, Researcher, Validator, and Executor — using a task-bound authorization mechanism and an independently verified policy oracle. The central distinction explored is that model judgment is not the same as authorization: a Validator agent can be compromised while a structural authorization boundary at the Executor still prevents an unauthorized action.",
    problem:
      "Multi-agent LLM systems increasingly delegate work across agents with different levels of trust and privilege. When a low-privilege agent's output can influence a higher-privilege agent's decisions, the system inherits a version of the classic confused deputy problem — except the deputy is now a language model whose judgment can itself be manipulated.",
    researchQuestion:
      "Can a compromised low-privilege agent influence a higher-privilege agent and ultimately cause an unauthorized action?",
    motivation:
      "As agentic LLM pipelines are given real-world authority — approving transactions, executing code, taking actions on a user's behalf — the question of whether a compromised intermediate agent can propagate its compromise into an unauthorized action becomes a practical security concern, not just a theoretical one.",
    methodology: {
      intro:
        "The study evaluates shared-memory poisoning and indirect prompt injection against a four-agent pipeline under progressively stronger attacker capabilities, including an attacker possessing the signing secret, to isolate which architectural component is actually responsible for containment.",
    },
    pipeline: [
      {
        name: "Supervisor",
        privilege: "None",
        description: "Deterministic routing. No LLM call.",
      },
      {
        name: "Researcher",
        privilege: "Low",
        description: "Read-only. Retrieves and summarizes information.",
      },
      {
        name: "Validator",
        privilege: "Medium",
        description: "Approval gate. Produces approval or rejection.",
      },
      {
        name: "Executor",
        privilege: "High",
        description: "Performs real actions, protected by a structural authorization boundary.",
      },
    ],
    threatModel:
      "The Executor is protected by a structural authorization boundary rather than trusting the Validator's language-model judgment alone. Attacks are evaluated under progressively stronger attacker capabilities, up to and including an attacker who possesses the signing secret used for authorization tokens.",
    attackGroups: [
      {
        group: "Attack Paths",
        items: [
          {
            title: "Memory Poisoning",
            description:
              "A compromised Validator can forge approval and attempt to produce an authorization token.",
          },
          {
            title: "Agent Hijacking / Indirect Prompt Injection",
            description:
              "A Researcher retrieves a malicious document containing a fabricated approval or authority claim, which can influence downstream validation.",
          },
        ],
      },
    ],
    defenses: [
      {
        title: "Task-Bound Signed Authorization Tokens",
        description:
          "Authorization tokens are cryptographically bound to a specific task and scope, preventing forgery and reuse across tasks.",
      },
      {
        title: "Single-Use Authorization",
        description:
          "Each authorization token can be consumed exactly once, preventing replay of a previously valid approval.",
      },
      {
        title: "Independent Policy Verification",
        description:
          "A policy oracle, independent of the Validator's own judgment, verifies that a proposed action is actually authorized before execution.",
      },
      {
        title: "Least-Privilege Policy",
        description:
          "Each agent is restricted to the minimum privilege required for its role, limiting the blast radius of any single compromised agent.",
      },
      {
        title: "Sandboxed Execution",
        description:
          "The Executor runs proposed actions within a sandboxed environment, limiting the impact of any action that does slip through.",
      },
    ],
    keyFindings: [
      {
        title: "Model Judgment ≠ Authorization",
        description:
          "Under the defended configuration, memory poisoning produced a 100% Judgment Bypass Rate but a 0% Unsafe Action Rate — the Validator's judgment was successfully bypassed by the attacker, yet the structural authorization boundary at the Executor still prevented any unauthorized action from executing.",
        metrics: [
          { label: "Judgment Bypass Rate (JBR)", value: "100%" },
          { label: "Unsafe Action Rate (UAR)", value: "0%" },
        ],
        highlight: true,
      },
      {
        title: "Containment Comes from the Policy Oracle, Not the Signature Alone",
        description:
          "In an authorization ablation against an attacker possessing the signing secret, containment came from the independent policy oracle rather than the signature check alone. This does not mean signed tokens are unnecessary — the manuscript notes their value for preventing forgery, binding authorization to a task/scope, and preventing replay.",
      },
      {
        title: "Observer Layer Improves Utility While Preserving the Security Boundary",
        description:
          "Adding an Observer between the Researcher and Validator — which detects fabricated claims that another agent has already reviewed or approved a task, without itself making security decisions — substantially reduced false positives while the Unsafe Action Rate remained at 0%.",
        metrics: [
          { label: "False Positive Rate", value: "49.1% → 7.4%" },
          { label: "LTC", value: "50.9% → 92.6%" },
          { label: "F1", value: "0.74 → 0.95" },
          { label: "Unsafe Action Rate", value: "0% (unchanged)" },
        ],
      },
    ],
    contributions: [
      "Empirical study of compromise propagation through a complete multi-agent pipeline",
      "Component-level authorization ablation isolating which mechanism actually provides containment",
      "A clear distinction between agent-level compromise and successful unauthorized execution",
      "Introduction of Judgment Bypass Rate (JBR) to measure that distinction",
      "Evaluation of structural authorization under progressively stronger attacker models",
    ],
    limitations: [
      "The security primitives evaluated — signed tokens, policy enforcement, least privilege — are standard security concepts; the contribution is their empirical evaluation and analysis in a multi-agent LLM pipeline, not the primitives themselves.",
      "The Observer layer improves detection utility but is explicitly not presented as the primary security guarantee — that role belongs to the structural authorization boundary at the Executor.",
    ],
    resources: {
      pdf: "/documents/trust-propagation-manuscript.pdf",
      pdfLabel: "Manuscript PDF",
    },
    relatedSlugs: ["distributed-rag-security-evaluation"],
  },
];

export function getResearchBySlug(slug: string) {
  return researchItems.find((item) => item.slug === slug);
}
