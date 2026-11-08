"use client";

import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { groups, useProjectFilter } from "./projectFilters";

/** Cards per sub-section (one row of the 3-column grid); the rest live in the Project Archive. */
const PREVIEW_LIMIT = 3;

export function Projects() {
  const { setActive } = useProjectFilter();

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
        <div className="space-y-14">
          {groups.map((g) => {
            const items = projects.filter((p) => g.categories.includes(p.category));
            if (items.length === 0) return null;
            return (
              <section key={g.id} aria-labelledby={`projects-${g.id}`}>
                <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-rule pb-3">
                  <h3 id={`projects-${g.id}`} className="font-display text-2xl tracking-tight">{g.title}</h3>
                  <a
                    href="#archive"
                    onClick={() => setActive(g.title)}
                    className="font-mono text-xs uppercase tracking-wider underline underline-offset-4 hover:text-accent"
                  >
                    View all<span className="sr-only"> {g.title}</span> ({items.length}) →
                  </a>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.slice(0, PREVIEW_LIMIT).map((p) => <ProjectCard key={p.slug} project={p} featured={false} />)}
                </div>
              </section>
            );
          })}
        </div>
        <p className="mt-10 border-t border-rule pt-6 text-sm italic text-ink-2">
          <span className="font-semibold not-italic text-ink">Disclaimer:</span> Some projects are displayed for portfolio purposes only and remain the property of their respective owners.
        </p>
      </div>
    </section>
  );
}
