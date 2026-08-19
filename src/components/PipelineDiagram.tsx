import { ArrowRight } from "lucide-react";
import { PipelineAgent } from "@/types";

const privilegeColor: Record<PipelineAgent["privilege"], string> = {
  None: "text-muted border-border",
  Low: "text-accent-secondary border-accent-secondary/40",
  Medium: "text-accent-secondary border-accent-secondary/40",
  High: "text-accent border-accent/50",
};

export default function PipelineDiagram({ agents }: { agents: PipelineAgent[] }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
      {agents.map((agent, i) => (
        <div key={agent.name} className="flex flex-1 items-center gap-2 md:items-stretch">
          <div className="flex flex-1 flex-col rounded-lg border border-border bg-surface shadow-sm p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="font-heading text-sm font-medium text-foreground">{agent.name}</p>
              <span
                className={`rounded-full border px-2 py-0.5 font-mono text-[10px] ${privilegeColor[agent.privilege]}`}
              >
                {agent.privilege}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted">{agent.description}</p>
          </div>
          {i < agents.length - 1 && (
            <ArrowRight
              size={16}
              className="hidden shrink-0 text-muted md:block"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
