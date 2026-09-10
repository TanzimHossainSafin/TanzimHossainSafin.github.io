import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectItems, getProjectBySlug } from "@/data/projects";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import CollaborationCTA from "@/components/CollaborationCTA";

export function generateStaticParams() {
  return projectItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getProjectBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.title} — Tanzim Hossain Safin`,
    description: item.description,
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="font-heading text-lg font-medium text-foreground md:text-xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getProjectBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <div className="border-b border-border py-10 md:py-14">
        <Container>
          <Link
            href="/projects"
            className="focus-ring inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>

          <p className="mt-6 font-mono text-xs tracking-widest text-accent-secondary uppercase">
            {item.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-2xl font-medium leading-snug text-foreground md:text-3xl lg:text-4xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{item.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={item.github}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-surface-hover"
            >
              <FaGithub size={15} />
              GitHub
            </a>
            {item.demo && (
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent-secondary px-4 py-2 text-sm font-medium text-on-accent transition-colors hover:bg-accent-secondary-hover"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </Container>
      </div>

      <Container className="max-w-3xl py-12 md:py-16">
        <Section title="Problem">
          <p className="leading-relaxed text-muted">{item.detail.problem}</p>
        </Section>

        <Section title="Solution">
          <p className="leading-relaxed text-muted">{item.detail.solution}</p>
        </Section>

        <Section title="Architecture">
          <p className="leading-relaxed text-muted">{item.detail.architecture}</p>
        </Section>

        <Section title="Main Features">
          <ul className="space-y-2">
            {item.detail.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-secondary" />
                {f}
              </li>
            ))}
          </ul>
        </Section>

        {(item.detail.frontend || item.detail.backend) && (
          <Section title="Frontend & Backend">
            {item.detail.frontend && (
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground">Frontend — </span>
                {item.detail.frontend}
              </p>
            )}
            {item.detail.backend && (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground">Backend — </span>
                {item.detail.backend}
              </p>
            )}
          </Section>
        )}

        {item.detail.aiFunctionality && (
          <Section title="AI Integration">
            <p className="leading-relaxed text-muted">{item.detail.aiFunctionality}</p>
          </Section>
        )}

        {item.detail.engineeringDecisions && (
          <Section title="Engineering Decisions">
            <ul className="space-y-2">
              {item.detail.engineeringDecisions.map((d) => (
                <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-secondary" />
                  {d}
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section title="My Role">
          <p className="leading-relaxed text-muted">{item.detail.role}</p>
        </Section>
      </Container>

      <CollaborationCTA />
    </>
  );
}
