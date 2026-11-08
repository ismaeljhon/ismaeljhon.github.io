/* eslint-disable @next/next/no-img-element */
import { ArrowRight, MessageSquare, Play, User } from "lucide-react";
import { PixelSprite } from "./PixelSprite";
import { ThumbArt } from "./ThumbArt";
import { asset } from "@/lib/asset";
import { characterClass, currentQuest, heroBranches, heroCopy, worldPins } from "@/data/game";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import type { SkillLevel } from "@/types/portfolio";

const LEVEL_STYLE: Record<SkillLevel, string> = {
  Experienced: "bg-[#3e8a4e] text-white",
  "Working knowledge": "bg-[#4d73b8] text-white",
  Learning: "bg-[#f2d27a] text-[#3b2f12]",
};

const miniBtn = "rpg-btn rpg-btn-light !px-3.5 !py-1 text-[15px]";

export function CharacterBody() {
  return (
    <div className="flex flex-1 flex-col justify-center px-3.5 py-1.5">
    <div className="flex items-center gap-3.5">
      <div className="grid h-32 w-[74px] shrink-0 place-items-center border-[1.5px] border-[#b9a57a] bg-[#fbf6ea]">
        <PixelSprite className="h-[107px] w-[54px]" />
      </div>
      <dl className="flex min-w-0 flex-1 flex-col justify-center gap-[3px] font-pixel text-[#22283a]">
        <dt className="sr-only">Name</dt><dd className="text-xl font-semibold leading-tight">{profile.characterName}</dd>
        <dt className="sr-only">Class</dt><dd className="border-b border-[#c9b88e] pb-1 text-[17px] text-[#3a4a7a]">{characterClass}</dd>
        <dt className="sr-only">Level</dt><dd className="pt-0.5 text-[16px]">Base Lv. {profile.yearsOfExperience}+<br /><span className="whitespace-nowrap text-[14px] leading-tight text-[#4a5368]">= years of experience</span></dd>
        <dt className="sr-only">Job</dt><dd className="pt-0.5 text-[16px]">Job: Full Stack Dev</dd>
      </dl>
    </div>
    <p className="mt-1.5 flex items-center gap-2 border-t border-[#c9b88e] pt-1.5 font-pixel text-[15px] leading-tight text-[#22283a]">
      <span aria-hidden className={`h-3 w-3 flex-none rounded-full border-2 ${profile.availability.open ? "border-[#1e5b2a] bg-[#43c15a]" : "border-neutral-600 bg-neutral-400"}`} />
      <span><span className="sr-only">Status: </span>{profile.availability.label}</span>
    </p>
    </div>
  );
}

export function WelcomeBody() {
  return (
    <div className="flex flex-1 flex-col gap-2.5 px-5 py-4 sm:px-8 sm:py-[18px]">
      <h1 className="font-reader text-[40px] font-bold leading-[0.98] tracking-tight text-[#22283a] sm:text-5xl">
        {heroCopy.headline[0]}<br />{heroCopy.headline[1]}
      </h1>
      <p className="font-pixel text-[21px] leading-tight text-[#3e7a45]">{heroCopy.tagline}</p>
      <div aria-hidden className="flex items-center gap-2"><span className="h-px flex-1 bg-[#b9a57a]" /><span className="h-[7px] w-[7px] rotate-45 bg-[#b9a57a]" /><span className="h-px flex-1 bg-[#b9a57a]" /></div>
      <p className="font-reader text-[16px] leading-[1.42] text-[#2e3448]">{heroCopy.intro}</p>
      <div className="flex flex-wrap gap-3 pt-0.5">
        <a href="#quests" className="rpg-btn rpg-btn-primary inline-flex items-center gap-2 !text-base"><Play size={13} className="fill-white" aria-hidden />Explore My Work</a>
        <a href="#about" className="rpg-btn rpg-btn-light inline-flex items-center gap-2 !text-base"><User size={17} aria-hidden />Character Profile</a>
      </div>
    </div>
  );
}

export function WorldMapBody() {
  return (
    <div className="flex flex-1 flex-col gap-1.5 p-1.5">
      <div className="relative h-[138px] overflow-hidden border-[1.5px] border-[#6e7fa6]">
        <img src={asset("/images/game/map.webp")} alt="" className="block h-full w-full object-cover" />
        {worldPins.map((p, i) => (
          <a
            key={p.href}
            href={p.href}
            title={p.label}
            aria-label={`Go to ${p.label}`}
            className="absolute -ml-2.5 -mt-2.5 grid h-5 w-5 place-items-center rounded-full border-[1.5px] border-[#1c2438] bg-[#ffe7a3] font-ui text-[11px] font-extrabold leading-none text-[#1c2438] shadow-[0_2px_0_rgba(20,26,40,.5)] hover:bg-white"
            style={{ left: p.left, top: p.top }}
          >{i + 1}</a>
        ))}
      </div>
      <p className="flex items-center gap-1.5 font-pixel text-base text-[#22283a]"><span aria-hidden className="text-[#d9483b]">●</span>{heroCopy.mapLocation}<span className="ml-auto text-sm text-[#4a5368]">tap a pin</span></p>
    </div>
  );
}

export function CurrentQuestBody() {
  return (
    <div className="flex flex-1 flex-col gap-1.5 px-3.5 py-3">
      <p className="flex items-center gap-2 font-pixel text-[17px] font-semibold text-[#22283a]"><span aria-hidden className="h-3.5 w-3.5 animate-pulse rounded-full border-2 border-[#2e3a57] bg-[#4d73b8]" />{currentQuest.title}</p>
      <p className="font-reader text-[16px] leading-[1.35] text-[#2e3448]">{currentQuest.summary}</p>
      <a href="#training" className={`${miniBtn} mt-auto self-start`}>View Details →</a>
    </div>
  );
}

export function QuestsMiniBody() {
  return (
    <div className="flex flex-1 flex-col gap-2.5 px-4 py-3">
      <ul className="grid grid-cols-3 gap-3">
        {[projects[0], projects[1], projects[4]].map((p) => (
          <li key={p.slug}>
            <a href="#quests" className="flex h-full flex-col overflow-hidden rounded bg-[#fbf6ea] border-2 border-[#b9a57a] shadow-[0_3px_0_rgba(46,58,87,.25)] transition-transform hover:-translate-y-0.5">
              <ThumbArt project={p} className="h-[90px] w-full border-b-2 border-[#b9a57a]" />
              <span className="flex flex-col gap-1 px-2.5 pb-2.5 pt-2">
                <span className="font-ui text-[16px] font-extrabold leading-tight">{p.name}</span>
                <span className="font-mono text-[13px] text-[#4a5368]">{p.technologies.slice(0, 2).join(" • ")}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a href="#quests" className={`${miniBtn} mt-auto self-start`}>View All Projects →</a>
    </div>
  );
}

export function SkillsMiniBody() {
  return (
    <div className="flex flex-1 flex-col items-center gap-1.5 px-3 pb-3 pt-2.5">
      <ul className="grid w-full grid-cols-2 gap-x-2 gap-y-0.5">
        {heroBranches.map((b) => (
          <li key={b.id}>
            <a href="#skills" className="grid grid-cols-[32px_1fr] items-start gap-2 px-1 py-[3px] text-[#22283a]">
              <img src={asset(b.icon)} alt="" width={32} height={32} className="h-8 w-8" />
              <span className="flex min-w-0 flex-col gap-[3px]">
                <span className="font-ui text-[14px] font-extrabold leading-tight">{b.title}</span>
                <span className="line-clamp-2 font-ui text-[13px] font-semibold leading-tight text-[#3a4258]">{b.list}</span>
                <span className={`mt-0.5 self-start whitespace-nowrap rounded border border-black/40 px-2 py-0.5 font-ui text-[13px] font-extrabold leading-tight ${LEVEL_STYLE[b.level]}`}>{b.level}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a href="#skills" className={`${miniBtn} mt-auto`}>View Full Skill Tree →</a>
    </div>
  );
}

export function AboutMiniBody() {
  return (
    <div className="flex flex-1 gap-4 py-3 pl-3.5 pr-4">
      <img src={asset("/images/game/about.webp")} alt="The Super Novice reading under a tree" width={236} height={208} className="aspect-[236/208] h-auto w-[44%] max-w-[236px] flex-none self-start border-2 border-[#b9a57a] object-cover" />
      <div className="flex min-w-0 flex-col gap-2 pt-0.5 font-reader text-[16px] leading-[1.35] text-[#2e3448]">
        <p>{heroCopy.aboutShort}</p>
        <p><b className="underline decoration-[#4d73b8] underline-offset-2">{profile.yearsOfExperience}+ years</b> of experience in web development and software engineering.</p>
        <a href="#about" className={`${miniBtn} mt-auto self-start`}>Know More →</a>
      </div>
    </div>
  );
}

export function SystemBar({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div role="status" style={style} className={`flex items-center gap-4 border-2 border-[#7c8db5] bg-[rgba(36,44,66,.94)] px-6 font-pixel text-[19px] text-white ${className}`}>
      <MessageSquare size={26} aria-hidden />
      <p className="flex-1"><span className="text-[#ffe7a3]">System:</span> {heroCopy.systemMessage}</p>
      <a href="#quests" className="hidden items-center gap-2.5 text-xl sm:flex"><span aria-hidden className="grid h-[34px] w-[34px] place-items-center rounded-full border-2 border-current"><ArrowRight size={16} className="rotate-90" /></span>Scroll to explore</a>
    </div>
  );
}
