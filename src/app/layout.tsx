import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanzimhossainsafin.com"),
  title: "Tanzim Hossain Safin — AI Security Researcher",
  description:
    "AI Security Researcher working on LLM security, multi-agent AI, RAG security, privacy, and trustworthy AI.",
  openGraph: {
    title: "Tanzim Hossain Safin — AI Security Researcher",
    description:
      "AI Security Researcher working on LLM security, multi-agent AI, RAG security, privacy, and trustworthy AI.",
    url: "https://tanzimhossainsafin.com",
    siteName: "Tanzim Hossain Safin",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tanzim Hossain Safin — AI Security Researcher",
    description:
      "AI Security Researcher working on LLM security, multi-agent AI, RAG security, privacy, and trustworthy AI.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded focus:bg-surface focus:px-4 focus:py-2 focus:text-foreground focus-ring"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
