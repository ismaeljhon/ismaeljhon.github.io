"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, CircleDashed } from "lucide-react";
import { RpgWindow } from "./RpgWindow";
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
        <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1 xl:grid-cols-2" aria-label="Quests">
          {projects.map((p) => {
            const active = p.slug === selected;
            return (
              <li key={p.slug}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(p.slug)}
                  className={`flex w-full items-start gap-2 border-2 p-2.5 text-left ${active ? "border-ro-gold bg-white" : "border-navy/30 bg-parch-2 hover:border-ro-blue"}`}
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-ro-green" aria-hidden />
                  <span>
                    <span className="block text-sm font-semibold leading-tight">{p.name}</span>
                    <span className="block font-mono text-[0.7rem] opacity-70">{p.quest.title}</span>
                    <span className="sr-only">Completed</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="border-2 border-navy/40 bg-white/60 p-3 lg:col-span-2" aria-live="polite">
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
