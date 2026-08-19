import Link from "next/link";
import { FlaskConical, Layers, User, Mail, ArrowRight } from "lucide-react";
import Container from "./Container";
import FadeIn from "./FadeIn";

const links = [
  {
    href: "/research",
    icon: FlaskConical,
    title: "Research",
    description:
      "Distributed RAG security evaluation and multi-agent LLM trust propagation — methodology, findings, and papers.",
  },
  {
    href: "/projects",
    icon: Layers,
    title: "Projects",
    description: "A small, selective set of AI-powered systems I've built end to end.",
  },
  {
    href: "/about",
    icon: User,
    title: "About",
    description: "Background, education, and technical profile.",
  },
  {
    href: "/contact",
    icon: Mail,
    title: "Contact",
    description: "Email, GitHub, LinkedIn, and Google Scholar.",
  },
];

export default function ExploreLinks() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map(({ href, icon: Icon, title, description }, i) => (
            <FadeIn key={href} delay={i * 0.05}>
              <Link
                href={href}
                className="focus-ring group flex h-full items-start gap-4 rounded-xl border border-border bg-surface shadow-sm p-6 transition-colors hover:bg-surface-hover"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={19} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-heading text-lg font-medium text-foreground">{title}</p>
                    <ArrowRight
                      size={16}
                      className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
