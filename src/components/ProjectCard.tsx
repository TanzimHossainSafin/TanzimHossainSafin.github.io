import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/types";
import Tag from "./Tag";

export default function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <Link
      href={`/projects/${item.slug}`}
      className="focus-ring group block rounded-xl border border-border bg-surface shadow-sm p-6 transition-colors hover:bg-surface-hover md:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs tracking-wide text-accent-secondary">{item.category}</p>
        <ArrowUpRight
          size={18}
          className="shrink-0 text-muted transition-colors group-hover:text-accent-secondary"
        />
      </div>

      <h3 className="mt-4 font-heading text-lg font-medium text-foreground md:text-xl">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>

      <ul className="mt-5 space-y-1.5">
        {item.cardHighlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-secondary" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.technologies.slice(0, 5).map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </Link>
  );
}
