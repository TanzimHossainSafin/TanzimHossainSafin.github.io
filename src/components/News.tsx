import Link from "next/link";
import { newsItems } from "@/data/news";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

function formatDate(value: string) {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, (month ?? 1) - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function News() {
  return (
    <section id="news" className="border-b border-border py-14 md:py-20">
      <Container>
        <SectionHeading eyebrow="News" title="Latest updates" />

        <FadeIn>
          <ul className="divide-y divide-border border-t border-border">
            {newsItems.map((item) => {
              const content = (
                <>
                  <p className="shrink-0 font-mono text-xs tracking-wide text-muted md:w-24">
                    {formatDate(item.date)}
                  </p>
                  <div>
                    <p className="text-sm leading-relaxed text-foreground">{item.title}</p>
                    {item.description && (
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    )}
                  </div>
                </>
              );

              return (
                <li key={`${item.date}-${item.title}`}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="focus-ring group flex flex-col gap-1.5 py-4 md:flex-row md:gap-6"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex flex-col gap-1.5 py-4 md:flex-row md:gap-6">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
