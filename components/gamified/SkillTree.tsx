"use client";

import { useState } from "react";
import { RpgWindow } from "./RpgWindow";
import { skillBranches } from "@/data/skills";
import { projects } from "@/data/projects";

const questsFor = (skill: string) =>
  projects.filter((p) => p.technologies.some((t) => t.toLowerCase() === skill.toLowerCase())).map((p) => p.name);

export function SkillTree() {
  const [sel, setSel] = useState<{ branch: string; skill: string }>({
    branch: skillBranches[0].id,
    skill: skillBranches[0].skills[0].name,
  });
  const quests = questsFor(sel.skill);

  return (
    <RpgWindow title="Adventurer Skill Tree">
      <p className="mb-3 text-sm">Select a skill to see which completed quests used it.</p>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {skillBranches.map((b) => (
          <div key={b.id} className="border-2 border-navy/30 bg-parch-2 p-2.5">
            <h3 className="font-pixel text-sm uppercase text-ro-blue">{b.title}</h3>
            <ol className="relative mt-2 ml-2 space-y-1.5 border-l-2 border-dashed border-navy/40 pl-4">
              {b.skills.map((s) => {
                const active = sel.branch === b.id && sel.skill === s.name;
                return (
                  <li key={s.name} className="relative">
                    <span aria-hidden className="absolute -left-[1.15rem] top-1/2 h-0.5 w-3 bg-navy/40" />
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSel({ branch: b.id, skill: s.name })}
                      className={`w-full border-2 px-2 py-1 text-left text-sm font-semibold ${active ? "border-ro-gold bg-white" : "border-navy/30 bg-parch hover:border-ro-blue"}`}
                    >
                      {s.name}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
      <div className="mt-3 border-2 border-navy/40 bg-white/60 p-3" aria-live="polite">
        <p className="font-pixel text-lg">{sel.skill}</p>
        <p className="text-sm">
          {quests.length ? <>Used in completed quests: <strong>{quests.join(", ")}</strong>.</> : "No linked quests recorded yet."}
        </p>
      </div>
    </RpgWindow>
  );
}
