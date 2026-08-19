export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</p>
      )}
      <h2 className="font-heading text-2xl font-medium text-foreground md:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-muted leading-relaxed">{description}</p>}
    </div>
  );
}
