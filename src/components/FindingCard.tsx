import { Finding } from "@/types";

export default function FindingCard({ finding }: { finding: Finding }) {
  return (
    <div
      className={`rounded-lg border p-5 ${
        finding.highlight ? "border-accent/40 bg-accent/[0.06]" : "border-border bg-surface"
      }`}
    >
      <p className="font-heading text-base font-medium text-foreground">{finding.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{finding.description}</p>

      {finding.metrics && finding.metrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {finding.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-md border border-border bg-background/60 px-3 py-2"
            >
              <p className="font-mono text-sm font-medium text-accent">{m.value}</p>
              <p className="mt-0.5 text-[11px] text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
