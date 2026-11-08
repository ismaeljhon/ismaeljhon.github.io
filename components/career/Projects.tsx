import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="border-t border-rule">
      <div className="page-container py-20 md:py-28">
        <SectionHeading index="03" label="Selected Projects" title="Applications, WordPress builds and online stores." />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} featured={false} />)}
        </div>
      </div>
    </section>
  );
}
