import { Mail, MapPin } from "lucide-react";
import { FaGraduationCap, FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "@/data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const contactLinks = [
  { icon: Mail, label: "Email", value: site.email, href: site.emailComposeUrl },
  { icon: FaGithub, label: "GitHub", value: "TanzimHossainSafin", href: site.github },
  { icon: FaLinkedin, label: "LinkedIn", value: "tanzim-hossain-safin", href: site.linkedin },
  { icon: FaGraduationCap, label: "Google Scholar", value: "View profile", href: site.scholar },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <Container>
        <SectionHeading eyebrow="Contact" title="Get in touch" />

        <FadeIn className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
              className="focus-ring flex items-center gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:bg-surface-hover"
            >
              <Icon size={18} className="shrink-0 text-accent" />
              <div>
                <p className="text-xs text-muted">{label}</p>
                <p className="text-sm text-foreground">{value}</p>
              </div>
            </a>
          ))}
        </FadeIn>

        <FadeIn delay={0.08} className="mt-4 flex items-center gap-2 text-sm text-muted">
          <MapPin size={15} />
          {site.location}
        </FadeIn>
      </Container>
    </section>
  );
}
