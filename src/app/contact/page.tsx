import type { Metadata } from "next";
import Contact from "@/components/Contact";
import CollaborationCTA from "@/components/CollaborationCTA";

export const metadata: Metadata = {
  title: "Contact — Tanzim Hossain Safin",
  description: "Get in touch about AI security, LLM security, RAG, and multi-agent research.",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <CollaborationCTA />
    </>
  );
}
