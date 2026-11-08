"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, CircleDashed } from "lucide-react";
import { RpgWindow } from "./RpgWindow";
import { ThumbArt } from "./ThumbArt";
import { DevicePreview } from "@/components/shared/DevicePreview";
import { projects } from "@/data/projects";
import { questCategories } from "@/data/game";
import { ToBeAdded } from "@/components/shared/PlaceholderText";

export function QuestLog() {
  const [selected, setSelected] = useState(projects[0].slug);
  const project = projects.find((p) => p.slug === selected) ?? projects[0];

  return (
    <RpgWindow title="Quest Log — Completed Quests">
      <p className="mb-3 text-sm">Each project is a completed quest. Select one to read the quest details.</p>
      <div className="grid gap-4 lg:grid-cols-5">
        <ul
          // Height is an exact number of 4rem rows (+ gaps, padding, border) and scrolling snaps per row, so no box is ever cut off.
          className="grid max-h-[calc(6*4rem+5*0.5rem+1rem+4px)] snap-y snap-mandatory scroll-pt-2 auto-rows-[4rem] content-start gap-2 overflow-y-auto overscroll-contain border-2 border-navy/20 bg-parch/40 p-2 sm:grid-cols-2 lg:col-span-3 lg:max-h-[calc(8*4rem+7*0.5rem+1rem+4px)] lg:grid-cols-1 xl:grid-cols-2"
          aria-label="Quests"
          tabIndex={0}
        >
          {projects.map((p) => {
            const active = p.slug === selected;
            return (
              <li key={p.slug} className="snap-start">
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(p.slug)}
                  className={`flex h-full w-full items-center gap-2.5 border-2 p-2 text-left ${active ? "border-ro-gold bg-white" : "border-navy/30 bg-parch-2 hover:border-ro-blue"}`}
                >
                  <span className="relative shrink-0">
                    <ThumbArt project={p} className="h-11 w-16 border border-navy/30" />
                    <CheckCircle2 size={16} className="absolute -right-1.5 -top-1.5 rounded-full bg-white text-ro-green" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold leading-tight" title={p.name}>{p.name}</span>
                    <span className="block truncate font-mono text-[0.7rem] opacity-70">{p.quest.title}</span>
                    <span className="sr-only">Completed</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="border-2 border-navy/40 bg-white/60 p-3 lg:col-span-2" aria-live="polite">
          <div className="mb-3 border-2 border-navy/40">
            <DevicePreview
              name={project.name}
              url={project.url}
              desktop={project.previews?.desktop ?? project.image}
              mobile={project.previews?.mobile}
            />
          </div>
          <p className="font-mono text-[0.7rem] uppercase text-ro-green">Quest complete · {project.category}</p>
          <h3 className="mt-1 font-pixel text-xl leading-tight">{project.quest.title}</h3>
          <p className="mt-1 font-semibold">{project.name}</p>
          <p className="text-sm">{project.description}</p>
          <p className="mt-3 font-mono text-[0.7rem] uppercase opacity-70">Skills used</p>
          <p className="mt-1 flex flex-wrap gap-1">{project.technologies.map((t) => <span key={t} className="border border-navy/40 bg-parch px-1.5 font-mono text-xs">{t}</span>)}</p>
          <p className="mt-3 font-mono text-[0.7rem] uppercase opacity-70">My part</p>
          <p className="text-sm">{project.contribution ?? <ToBeAdded what="contribution" />}</p>
          {project.url && (
            <p className="mt-3 text-sm font-semibold">
              <a className="inline-flex items-center gap-1 text-ro-blue underline" href={project.url} target="_blank" rel="noopener noreferrer">
                Visit live site <ArrowUpRight size={14} aria-hidden /><span className="sr-only">(opens in a new tab)</span>
              </a>
            </p>
          )}
        </div>
      </div>

      <h3 className="mt-5 font-pixel text-sm uppercase">Quest types</h3>
      <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
        {questCategories.map((q) => {
          const done = projects.some((p) => p.quest.title === q);
          return (
            <li key={q} className="flex items-center gap-2">
              {done ? <CheckCircle2 size={14} className="text-ro-green" aria-hidden /> : <CircleDashed size={14} aria-hidden />}
              {q}{!done && <span className="font-mono text-xs opacity-60"> (details to be added)</span>}
            </li>
          );
        })}
      </ul>

      <p className="mt-5 border-t-2 border-navy/20 pt-3 text-sm italic opacity-80">
        <span className="font-semibold not-italic">Disclaimer:</span> Some quests are shown for portfolio purposes only. The loot belongs to the original quest-givers.
      </p>
    </RpgWindow>
  );
}
