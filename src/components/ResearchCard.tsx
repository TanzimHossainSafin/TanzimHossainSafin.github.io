import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ResearchItem } from "@/types";
import Tag from "./Tag";

export default function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <Link
      href={`/research/${item.slug}`}
      className="focus-ring group block rounded-xl border border-border bg-surface shadow-sm p-6 transition-colors hover:bg-surface-hover md:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs tracking-wide text-accent">{item.status}</p>
        <ArrowUpRight
          size={18}
          className="shrink-0 text-muted transition-colors group-hover:text-accent"
        />
      </div>

      <h3 className="mt-4 font-heading text-lg font-medium text-foreground md:text-xl">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted">{item.shortDescription}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.researchAreas.slice(0, 3).map((area) => (
          <Tag key={area}>{area}</Tag>
        ))}
      </div>

      <p className="mt-5 text-xs text-muted">
        {item.role}
        {item.supervisor ? ` · Supervised by ${item.supervisor}` : ""}
      </p>
    </Link>
  );
}
