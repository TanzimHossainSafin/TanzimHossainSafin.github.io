import Link from "next/link";
import { FileText } from "lucide-react";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <Container>
        <SectionHeading eyebrow="About" title="About / Background" />

        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn>
            <p className="text-base leading-relaxed text-muted">{site.about.statement}</p>
            <ul className="mt-6 space-y-2.5">
              {site.about.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-border bg-surface shadow-sm p-5">
              <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
                Education
              </p>
              <p className="mt-2 font-heading text-sm font-medium text-foreground">
                {site.education.degree}
              </p>
              <p className="mt-1 text-sm text-muted">
                {site.education.institution} · {site.education.period}
              </p>
              <p className="mt-1 text-sm text-muted">CGPA: {site.education.cgpa}</p>
              <p className="mt-3 text-sm text-muted">
                Thesis: <span className="text-foreground">{site.education.thesisTitle}</span>
              </p>
              <p className="mt-1 text-sm text-muted">Supervisor: {site.education.supervisor}</p>
              <Link
                href={site.education.thesisPdf}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover hover:underline"
              >
                <FileText size={14} />
                Read the thesis PDF
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
                    {group.category}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
