"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import type { ProjectCategory } from "@/types/portfolio";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

const filters: { label: string; categories: ProjectCategory[] | "all" }[] = [
  { label: "All", categories: "all" },
  { label: "Websites", categories: ["WordPress"] },
  { label: "E-commerce", categories: ["E-commerce"] },
  { label: "Web Applications", categories: ["Web Application"] },
  { label: "Mobile Applications", categories: [] },
  { label: "Desktop", categories: [] },
];

export function Projects() {
  const [active, setActive] = useState(filters[0].label);
  const filter = filters.find((f) => f.label === active) ?? filters[0];
  // Keep each project's original position so its card number doesn't shift when filtering.
  const visible = projects
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => filter.categories === "all" || filter.categories.includes(p.category));

  return (
    <section id="projects" className="border-t border-rule">
      <div className="page-container py-20 md:py-28">
        <SectionHeading
          index="01"
          label="Selected Projects"
          title="Applications, WordPress builds and online stores."
          intro={
            <>
              <p>A collection of things I&apos;ve built.</p>
              <p>{profile.yearsOfExperience} years of turning ideas into digital experiences, websites, and applications, across client, agency and freelance work.</p>
            </>
          }
        />
        <div role="group" aria-label="Filter projects by type" className="mb-8 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider">
          {filters.map((f) => {
            const isActive = f.label === active;
            return (
              <button
                key={f.label}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(f.label)}
                className={`border px-3 py-1.5 transition-colors ${isActive ? "border-ink bg-ink text-paper" : "border-rule text-ink-2 hover:border-ink hover:text-ink"}`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <div aria-live="polite">
          {visible.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {visible.map(({ p, i }) => <ProjectCard key={p.slug} project={p} index={i} featured={false} />)}
            </div>
          ) : (
            <p className="border border-dashed border-rule p-10 text-center font-mono text-sm text-ink-2">
              Nothing under {filter.label} yet.
            </p>
          )}
        </div>
        <p className="mt-10 border-t border-rule pt-6 text-sm italic text-ink-2">
          <span className="font-semibold not-italic text-ink">Disclaimer:</span> Some projects are displayed for portfolio purposes only and remain the property of their respective owners.
        </p>
      </div>
    </section>
  );
}
