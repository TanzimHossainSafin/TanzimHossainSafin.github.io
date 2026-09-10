import { AttackGroup } from "@/types";

export default function AttackGroups({ groups }: { groups: AttackGroup[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((group) => (
        <div key={group.group} className="rounded-lg border border-border bg-surface p-5">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">
            {group.group}
          </p>
          <ul className="mt-4 space-y-4">
            {group.items.map((item) => (
              <li key={item.title}>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
