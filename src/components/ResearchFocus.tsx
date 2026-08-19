import { researchFocusAreas } from "@/data/research-focus";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function ResearchFocus() {
  return (
    <section className="border-b border-border py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Research Focus"
          title="What I work on"
          description="My research centers on the security and trustworthiness of modern AI systems — from single LLMs to distributed, multi-agent pipelines."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchFocusAreas.map((area, i) => (
            <FadeIn key={area.title} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-surface shadow-sm p-5">
                <p className="font-mono text-xs text-accent/70">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-heading text-base font-medium text-foreground">
                  {area.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
