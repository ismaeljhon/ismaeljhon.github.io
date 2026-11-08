/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { asset } from "@/lib/asset";
import { ToBeAdded } from "@/components/shared/PlaceholderText";

export function ProjectCard({ project, index, featured }: { project: Project; index: number; featured: boolean }) {
  return (
    <article className={`group flex flex-col border border-rule bg-white/40 ${featured ? "md:col-span-2 md:flex-row" : ""}`}>
      <div className={`relative flex aspect-[16/10] items-end overflow-hidden bg-ink p-4 text-paper ${featured ? "md:aspect-auto md:w-1/2" : ""}`}>
        {project.image ? (
          <img src={asset(project.image)} alt={`${project.name} preview`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        ) : (
          <>
            <span aria-hidden className="absolute right-4 top-2 font-display text-8xl leading-none text-paper/10">{String(index + 1).padStart(2, "0")}</span>
            <span className="font-mono text-xs uppercase tracking-wider text-paper/60">Preview to be added</span>
          </>
        )}
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
        <div className="mt-auto pt-6 text-sm font-semibold">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-accent">
              Visit live site <ArrowUpRight size={14} aria-hidden /><span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <span className="font-normal"><ToBeAdded what="live URL" /></span>
          )}
        </div>
      </div>
    </article>
  );
}
