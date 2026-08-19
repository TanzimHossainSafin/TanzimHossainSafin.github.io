import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileText, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { researchItems, getResearchBySlug } from "@/data/research";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import PipelineDiagram from "@/components/PipelineDiagram";
import AttackGroups from "@/components/AttackGroups";
import FindingCard from "@/components/FindingCard";
import CollaborationCTA from "@/components/CollaborationCTA";
import ResearchCard from "@/components/ResearchCard";

export function generateStaticParams() {
  return researchItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.title} — Tanzim Hossain Safin`,
    description: item.shortDescription,
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="font-heading text-lg font-medium text-foreground md:text-xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getResearchBySlug(slug);
  if (!item) notFound();

  const related = item.relatedSlugs
    ?.map((s) => getResearchBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <div className="border-b border-border py-10 md:py-14">
        <Container>
          <Link
            href="/research"
            className="focus-ring inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
          >
            <ArrowLeft size={14} />
            All research
          </Link>

          <p className="mt-6 font-mono text-xs tracking-widest text-accent uppercase">
            {item.type}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-2xl font-medium leading-snug text-foreground md:text-3xl lg:text-4xl">
            {item.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.researchAreas.map((area) => (
              <Tag key={area}>{area}</Tag>
            ))}
          </div>
        </Container>
      </div>

      <Container className="grid gap-12 py-12 md:grid-cols-[1fr_280px] md:py-16">
        <div>
          <Section title="Abstract">
            <p className="leading-relaxed text-muted">{item.abstract}</p>
          </Section>

          <Section title="Research Question">
            <p className="leading-relaxed text-foreground">{item.researchQuestion}</p>
          </Section>

          <Section title="Motivation">
            <p className="leading-relaxed text-muted">{item.motivation}</p>
          </Section>

          {item.pipeline && (
            <Section title="System / Architecture">
              <PipelineDiagram agents={item.pipeline} />
            </Section>
          )}

          <Section title="Threat Model">
            <p className="leading-relaxed text-muted">{item.threatModel}</p>
          </Section>

          <Section title="Methodology">
            <p className="leading-relaxed text-muted">{item.methodology.intro}</p>
            {item.methodology.steps && (
              <ol className="mt-4 space-y-2">
                {item.methodology.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-muted">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            )}
            {item.systemsStudied && (
              <p className="mt-4 text-sm text-muted">
                Systems evaluated:{" "}
                <span className="text-foreground">{item.systemsStudied.join(", ")}</span>
              </p>
            )}
          </Section>

          <Section title="Attacks">
            <AttackGroups groups={item.attackGroups} />
          </Section>

          <Section title="Defenses">
            <div className="grid gap-4 sm:grid-cols-2">
              {item.defenses.map((d) => (
                <div key={d.title} className="rounded-lg border border-border bg-surface shadow-sm p-4">
                  <p className="text-sm font-medium text-foreground">{d.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Key Findings">
            <div className="space-y-4">
              {item.keyFindings.map((f) => (
                <FindingCard key={f.title} finding={f} />
              ))}
            </div>
            {item.additionalFindings && (
              <ul className="mt-4 space-y-2">
                {item.additionalFindings.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </Section>

          <Section title="Contribution">
            <ul className="space-y-2">
              {item.contributions.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Limitations">
            <ul className="space-y-2">
              {item.limitations.map((l) => (
                <li key={l} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {l}
                </li>
              ))}
            </ul>
          </Section>

          {related && related.length > 0 && (
            <Section title="Related Research">
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <ResearchCard key={r.slug} item={r} />
                ))}
              </div>
            </Section>
          )}
        </div>

        <aside className="h-fit space-y-6 md:sticky md:top-24">
          <div className="rounded-lg border border-border bg-surface shadow-sm p-5">
            <p className="font-mono text-[11px] tracking-widest text-muted uppercase">Status</p>
            <p className="mt-2 text-sm text-foreground">{item.status}</p>

            <p className="mt-4 font-mono text-[11px] tracking-widest text-muted uppercase">
              Year
            </p>
            <p className="mt-2 text-sm text-foreground">{item.year}</p>

            <p className="mt-4 font-mono text-[11px] tracking-widest text-muted uppercase">
              Role
            </p>
            <p className="mt-2 text-sm text-foreground">{item.role}</p>

            {item.supervisor && (
              <>
                <p className="mt-4 font-mono text-[11px] tracking-widest text-muted uppercase">
                  Supervisor
                </p>
                <p className="mt-2 text-sm text-foreground">{item.supervisor}</p>
              </>
            )}

            {item.coSupervisor && (
              <>
                <p className="mt-4 font-mono text-[11px] tracking-widest text-muted uppercase">
                  Co-Supervisor
                </p>
                <p className="mt-2 text-sm text-foreground">{item.coSupervisor}</p>
              </>
            )}

            {item.authors && (
              <>
                <p className="mt-4 font-mono text-[11px] tracking-widest text-muted uppercase">
                  Authors
                </p>
                <ul className="mt-2 space-y-1">
                  {item.authors.map((a) => (
                    <li key={a} className="text-sm text-foreground">
                      {a}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {(item.resources.pdf || item.resources.github || item.resources.scholar) && (
            <div className="rounded-lg border border-border bg-surface shadow-sm p-5">
              <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
                Resources
              </p>
              <div className="mt-3 flex flex-col gap-3">
                {item.resources.pdf && (
                  <a
                    href={item.resources.pdf}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover hover:underline"
                  >
                    <FileText size={15} />
                    {item.resources.pdfLabel ?? "PDF"}
                  </a>
                )}
                {item.resources.github && (
                  <a
                    href={item.resources.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring flex items-center gap-2 text-sm text-foreground hover:text-accent"
                  >
                    <FaGithub size={15} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </aside>
      </Container>

      <CollaborationCTA />
    </>
  );
}
