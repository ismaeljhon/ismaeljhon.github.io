import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { DevicePreview } from "./DevicePreview";
import { ToBeAdded } from "@/components/shared/PlaceholderText";

export function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <article className={`group flex flex-col border border-rule bg-white/40 ${featured ? "md:col-span-2 md:flex-row" : ""}`}>
      <div className={featured ? "md:w-1/2" : ""}>
        <DevicePreview
          name={project.name}
          url={project.url}
          desktop={project.previews?.desktop ?? project.image}
          mobile={project.previews?.mobile}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.category}</p>
        <h3 className="mt-2 font-display text-2xl">{project.name}</h3>
        <p className="mt-2 text-ink-2">{project.description}</p>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-2">My contribution</dt>
            <dd>{project.contribution ?? <ToBeAdded what="contribution" />}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-2">Stack</dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => <span key={t} className="border border-ink/25 px-2 py-0.5 font-mono text-xs">{t}</span>)}
            </dd>
          </div>
        </dl>
        {project.url && (
          <div className="mt-auto pt-6 text-sm font-semibold">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-accent">
              Visit live site <ArrowUpRight size={14} aria-hidden /><span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
