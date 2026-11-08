"use client";

import { asset } from "@/lib/asset";
import { ModeSwitcher } from "@/components/shared/ModeSwitcher";
import { useScrolledPast } from "@/hooks/useViewport";
import { characterClass } from "@/data/game";
import { profile } from "@/data/profile";
import { navLinks } from "./TownHero";

/**
 * Sticky header. Below 1280px it is always visible (the hero has no built-in nav);
 * on desktop the hero carries its own nav, so this only slides in after scrolling past it.
 */
export function GameNav() {
  const scrolled = useScrolledPast(700);
  return (
    <header
      className={`sticky top-0 z-40 border-b-4 border-[#d4b77b] bg-[#26313b] text-white xl:fixed xl:inset-x-0 ${scrolled ? "" : "xl:invisible"}`}
    >
      <div className="page-container flex flex-wrap items-center gap-x-4 gap-y-2 py-2">
        <a href="#" aria-label={`${characterClass}: back to top`} className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/game/avatar.webp")} alt="" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-[#e2be5e]" />
          <span className="leading-tight">
            <span className="block font-pixel text-lg uppercase tracking-wide">{characterClass}</span>
            <span className="block text-[0.7rem] text-white/70">{profile.name}</span>
          </span>
        </a>
        <nav aria-label="Sections" className="order-3 -mx-5 w-[calc(100%+2.5rem)] overflow-x-auto px-5 md:-mx-6 md:w-[calc(100%+3rem)] md:px-6 lg:order-none lg:mx-0 lg:w-auto lg:px-0 lg:flex-1 lg:overflow-visible lg:px-0">
          <ul className="flex gap-2 lg:justify-center">
            {navLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <a href={href} className="flex items-center gap-1.5 whitespace-nowrap rounded-[5px] border-[1.5px] border-[#9fb0d8] bg-gradient-to-b from-[#5468a0] to-[#34457a] px-3 py-1.5 font-ui text-sm font-extrabold hover:text-[#ffe7a3]">
                  <Icon size={14} aria-hidden />{label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto"><ModeSwitcher compact variant="game" /></div>
      </div>
    </header>
  );
}
