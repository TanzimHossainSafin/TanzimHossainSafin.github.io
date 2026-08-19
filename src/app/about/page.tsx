import type { Metadata } from "next";
import About from "@/components/About";
import CollaborationCTA from "@/components/CollaborationCTA";

export const metadata: Metadata = {
  title: "About — Tanzim Hossain Safin",
  description:
    "Computer Science graduate from BRAC University focused on security and reliability in modern AI systems.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <CollaborationCTA />
    </>
  );
}
