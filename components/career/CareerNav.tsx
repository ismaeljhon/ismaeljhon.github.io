"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeSwitcher } from "@/components/shared/ModeSwitcher";
import { profile } from "@/data/profile";

const links = [
  // Same order as the Gamified nav (Projects, Skills, About, Journal, Contact) and as the page sections.
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function CareerNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="page-container flex items-center justify-between gap-4 py-3">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.characterName}<span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 font-mono text-xs uppercase tracking-wider md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink-2 transition-colors hover:text-ink">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ModeSwitcher />
          <button
            type="button"
            className="rounded p-2 md:hidden"
            aria-expanded={open}
            aria-controls="career-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="career-mobile-nav" aria-label="Mobile" className="border-t border-rule bg-paper px-5 py-3 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-rule py-3 font-mono text-sm uppercase tracking-wider">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
