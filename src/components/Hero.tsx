import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaGraduationCap, FaOrcid } from "react-icons/fa";
import { site } from "@/data/site";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Tag from "./Tag";

export default function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="grid gap-12 py-14 md:grid-cols-[1fr_260px] md:items-center md:gap-16 md:py-20">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest text-accent uppercase">
            {site.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {site.name}
          </h1>

          <blockquote className="mt-6 max-w-xl border-l-2 border-accent/50 pl-4">
            <p className="font-heading text-lg leading-relaxed text-foreground italic md:text-xl">
              {site.heroStatement}
            </p>
          </blockquote>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {site.heroFocusLine}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.researchInterests.slice(0, 5).map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/research"
              className="focus-ring inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
            >
              View Research
            </Link>
            <Link
              href="/projects"
              className="focus-ring inline-flex items-center rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="focus-ring text-muted transition-colors hover:text-accent"
            >
              <FaGithub size={19} />
            </a>
            <a
              href={site.scholar}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Google Scholar"
              className="focus-ring text-muted transition-colors hover:text-accent"
            >
              <FaGraduationCap size={19} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="focus-ring text-muted transition-colors hover:text-accent"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href={site.orcid}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="ORCID"
              className="focus-ring text-muted transition-colors hover:text-accent"
            >
              <FaOrcid size={19} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="relative mx-auto w-60 shrink-0 md:mx-0">
          <div
            className="absolute inset-5 -z-10 rounded-full bg-accent/[0.08] blur-3xl"
            aria-hidden="true"
          />
          <div className="rounded-lg border border-border bg-surface p-2.5">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-hover">
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Tanzim Hossain Safin"
                width={520}
                height={650}
                priority
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 12%", transform: "scale(1.22)" }}
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
