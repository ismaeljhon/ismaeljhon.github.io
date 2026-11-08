import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Expertise() {
  return (
    <section id="expertise" className="border-t border-rule bg-paper-2">
      <div className="page-container py-20 md:py-28">
        <SectionHeading index="03" label="Technical Expertise" title="Tools I reach for, grouped by the work they do." />
        <div className="grid gap-px border border-rule bg-rule md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <div key={g.id} className="bg-paper-2 p-6 md:p-8">
              <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 font-display text-2xl">{g.title}</h3>
              <ul className={`mt-5 ${g.id === "other" ? "space-y-2 text-[0.95rem]" : "flex flex-wrap gap-2"}`}>
                {g.skills.map((s) =>
                  g.id === "other" ? (
                    <li key={s} className="border-b border-rule pb-2">{s}</li>
                  ) : (
                    <li key={s} className="border border-ink/25 px-2.5 py-1 font-mono text-xs">{s}</li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
