import type { Metadata } from "next";
import { researchItems } from "@/data/research";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ResearchCard from "@/components/ResearchCard";
import ResearchFocus from "@/components/ResearchFocus";
import CollaborationCTA from "@/components/CollaborationCTA";

export const metadata: Metadata = {
  title: "Research — Tanzim Hossain Safin",
  description:
    "Research on AI security, LLM security, distributed RAG security, and multi-agent trust propagation.",
};

export default function ResearchPage() {
  return (
    <>
      <ResearchFocus />

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Research"
            title="Research"
            description="A detailed look at the problems I investigate, the systems I study, the attacks and threats I evaluate, and the defenses I design — with methodology, findings, and access to the underlying work."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {researchItems.map((item) => (
              <ResearchCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CollaborationCTA />
    </>
  );
}
