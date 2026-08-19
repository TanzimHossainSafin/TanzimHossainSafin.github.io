export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted">
      {children}
    </span>
  );
}
