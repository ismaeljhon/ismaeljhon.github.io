/* eslint-disable @next/next/no-img-element */
import { BookOpen, Mail, Scroll, Star, User } from "lucide-react";
import { ModeSwitcher } from "@/components/shared/ModeSwitcher";
import { asset } from "@/lib/asset";
import { characterClass } from "@/data/game";
import { profile } from "@/data/profile";
import { Frame } from "./Frame";
import { StatHexagon } from "./StatHexagon";
import {
  AboutMiniBody, CharacterBody, CurrentQuestBody, QuestsMiniBody, SkillsMiniBody, SystemBar, WelcomeBody, WorldMapBody,
} from "./HeroPanels";

export const navLinks = [
  { href: "#quests", label: "Projects", Icon: Scroll },
  { href: "#skills", label: "Skills", Icon: Star },
  { href: "#about", label: "About", Icon: User },
  { href: "#journal", label: "Journal", Icon: BookOpen },
  { href: "#contact", label: "Contact", Icon: Mail },
];

const heroShadow = "shadow-[inset_0_0_0_1px_#fff8e8,0_6px_0_rgba(30,38,60,.4),0_18px_36px_-12px_rgba(20,26,40,.45)]";

/**
 * Desktop hero (≥1280px): the header and windows sit in the same 1280px column as the sections below,
 * over a full-width, softly blurred town backdrop.
 */
export function TownHero() {
  return (
    <section id="home" aria-label="Town square" className="relative hidden overflow-hidden bg-[#0b0d12] xl:block">
      {/* Clean centre of the town art (570×470) at an exact 2× pixel scale, edges faded into the page's black. */}
      <img
        src={asset("/images/game/town-crop.webp")}
        alt=""
        width={1140}
        height={940}
        className="pixelated pointer-events-none absolute left-1/2 top-1/2 h-[940px] w-[1140px] max-w-none -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(ellipse_50%_50%_at_center,#000_60%,transparent_100%)]"
      />
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-[#0b0d12]/55" />

      <div className="page-container relative flex flex-col gap-4 pb-5">
        <header className="flex items-start justify-between gap-3 pt-2.5">
          <a href="#home" className="flex h-[78px] w-[348px] items-center whitespace-nowrap gap-3.5 border-2 border-[#7c8db5] bg-[#2c3550] pl-2.5 pr-4 text-white shadow-[0_4px_0_rgba(20,26,40,.4)] flex-none">
            <img src={asset("/images/game/avatar.webp")} alt="" width={66} height={66} className="h-[66px] w-[66px] flex-none rounded-full border-2 border-[#e2be5e]" />
            <span className="flex flex-col gap-1 font-pixel">
              <span className="text-[34px] font-semibold uppercase leading-none tracking-wide [text-shadow:0_2px_0_rgba(0,0,0,.45)]">{characterClass}</span>
              <span className="text-[21px] leading-none text-white [text-shadow:0_2px_0_rgba(0,0,0,.45)]">{profile.name}</span>
            </span>
          </a>

          <nav aria-label="Primary" className="mt-1.5 flex h-16 items-center gap-2 border-2 border-[#7c8db5] bg-[#2c3550] px-2.5 shadow-[0_4px_0_rgba(20,26,40,.4)]">
            {navLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="flex h-10 items-center gap-2 rounded-[5px] border-[1.5px] border-[#9fb0d8] bg-gradient-to-b from-[#5468a0] to-[#34457a] px-3 font-ui text-[17px] font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_2px_0_#141b33] [text-shadow:0_1px_0_rgba(0,0,0,.4)] hover:text-[#ffe7a3]"
              ><Icon size={18} aria-hidden />{label}</a>
            ))}
          </nav>

          {/* Same 64px panel / 40px buttons as the nav. */}
          <div className="mt-1.5"><ModeSwitcher compact short variant="game" className="!h-16 items-center !gap-2 !px-2.5 !text-[17px] shadow-[0_4px_0_rgba(20,26,40,.4)] [&>button]:!h-10 [&>button]:!gap-2 [&>button]:!px-3 [&_svg]:size-[18px]" /></div>
        </header>

        <div className="grid grid-cols-[348px_minmax(0,1fr)_250px] items-start gap-5">
          <div className="flex flex-col gap-4">
            <Frame title="Character Info" as="aside"><CharacterBody /></Frame>
            <Frame title="Status"><div className="flex flex-col px-2 pb-2 pt-1.5"><StatHexagon /></div></Frame>
          </div>

          <Frame title="Welcome, Adventurer!" className={`mt-10 max-w-[560px] ${heroShadow}`}><WelcomeBody /></Frame>

          <div className="flex flex-col gap-4">
            <Frame title="World Map" as="nav" label="World map"><WorldMapBody /></Frame>
            <Frame title="Current Quest"><CurrentQuestBody /></Frame>
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1.05fr)] gap-4">
          <Frame title="Completed Quests"><QuestsMiniBody /></Frame>
          <Frame title="Adventurer Skill Tree"><SkillsMiniBody /></Frame>
          <Frame title="About the Adventurer"><AboutMiniBody /></Frame>
        </div>

        <SystemBar className="mt-1 min-h-[62px] py-2" />
      </div>
    </section>
  );
}
