"use client";

import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { TechIcon } from "@/components/shared/TechIcon";
import { filters, usesTechnology, useProjectFilter } from "./projectFilters";

function Tabs({ label, options, active, onSelect, small, withIcons }: { label: string; options: string[]; active: string; onSelect: (o: string) => void; small?: boolean; withIcons?: boolean }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider">
      {options.map((o) => {
        const isActive = o === active;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(o)}
            className={`inline-flex items-center gap-1.5 border transition-colors ${small ? "px-2.5 py-1" : "px-3 py-1.5"} ${isActive ? "border-ink bg-ink text-paper" : "border-rule text-ink-2 hover:border-ink hover:text-ink"}`}
          >
            {withIcons && <TechIcon name={o} size={13} />}
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function ProjectArchive() {
  const { active, setActive, tech, setTech } = useProjectFilter();
  const filter = filters.find((f) => f.label === active) ?? filters[0];
  const visible = projects.filter(
    (p) => (filter.categories === "all" || filter.categories.includes(p.category)) && usesTechnology(p.technologies, tech),
  );
  const selection = tech === "All" ? filter.label : `${filter.label} · ${tech}`;

  return (
    <section id="archive" className="border-t border-rule">
      <div className="page-container py-20 md:py-28">
        <SectionHeading index="02" label="Project Archive" title="Explore my development work." />
        <div className="mb-8 space-y-3">
          <Tabs label="Filter projects by type" options={filters.map((f) => f.label)} active={active} onSelect={setActive} />
          {filter.stack.length > 0 && (
            <Tabs label={`Filter ${filter.label} by technology`} options={["All", ...filter.stack]} active={tech} onSelect={setTech} small withIcons />
          )}
        </div>
        <div aria-live="polite">
          {visible.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => <ProjectCard key={p.slug} project={p} featured={false} />)}
            </div>
          ) : (
            <p className="border border-dashed border-rule p-10 text-center font-mono text-sm text-ink-2">
              Nothing under {selection} yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
