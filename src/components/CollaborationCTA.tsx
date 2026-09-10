import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGraduationCap, FaLinkedin } from "react-icons/fa";
import { site } from "@/data/site";

export default function CollaborationCTA({ id }: { id?: string }) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto w-full max-w-[1140px] px-6 py-16 md:px-8 md:py-20">
        <div className="rounded-lg border border-border bg-surface px-6 py-10 text-center md:px-12 md:py-14">
          <h2 className="font-heading text-2xl font-medium text-foreground md:text-3xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted leading-relaxed">
            I am open to research discussions, collaborations, and opportunities related to AI
            security, LLM security, RAG, multi-agent systems, privacy, and trustworthy AI.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={site.emailComposeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
            >
              <Mail size={16} />
              Email Me
            </Link>
            <Link
              href={site.scholar}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
            >
              <FaGraduationCap size={16} />
              Google Scholar
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
