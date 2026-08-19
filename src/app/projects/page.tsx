import type { Metadata } from "next";
import { projectItems } from "@/data/projects";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import CollaborationCTA from "@/components/CollaborationCTA";

export const metadata: Metadata = {
  title: "Projects — Tanzim Hossain Safin",
  description: "A small, selective set of AI and software engineering projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Projects"
            description="A deliberately small set of software projects, chosen to show that I can build substantial AI-powered systems end to end. Research work belongs in the Research section."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {projectItems.map((item) => (
              <ProjectCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CollaborationCTA />
    </>
  );
}
