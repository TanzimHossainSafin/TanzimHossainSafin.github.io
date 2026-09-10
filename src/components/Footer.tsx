import { Mail } from "lucide-react";
import { FaGraduationCap, FaGithub, FaLinkedin, FaOrcid } from "react-icons/fa";
import { site } from "@/data/site";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-sm text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.education.institution}</p>
          <p className="mt-1 text-sm text-muted">{site.location}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.emailComposeUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Email"
            className="focus-ring text-muted transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="focus-ring text-muted transition-colors hover:text-accent"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="focus-ring text-muted transition-colors hover:text-accent"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={site.scholar}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Google Scholar"
            className="focus-ring text-muted transition-colors hover:text-accent"
          >
            <FaGraduationCap size={18} />
          </a>
          <a
            href={site.orcid}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="ORCID"
            className="focus-ring text-muted transition-colors hover:text-accent"
          >
            <FaOrcid size={18} />
          </a>
        </div>

        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
