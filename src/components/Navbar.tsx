"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between px-6 py-5 md:px-8 md:py-6">
        <Link
          href="/"
          className="focus-ring font-heading text-lg font-medium tracking-tight text-foreground"
        >
          Tanzim Hossain Safin
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {site.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring text-base text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.cv}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring rounded-md border border-border px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
          >
            CV
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {site.navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block text-base text-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.cv}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="focus-ring block text-base text-muted hover:text-foreground"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
