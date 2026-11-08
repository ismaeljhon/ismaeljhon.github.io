import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="border-t border-rule bg-paper-2">
      <div className="page-container py-20 md:py-28">
        <SectionHeading index="04" label="Experience" title="Thirteen years, one thread: shipping working software." />
        <ol className="border-l border-ink/30">
          {experience.map((e) => (
            <li key={e.id} className="relative grid gap-2 pb-12 pl-6 last:pb-0 md:grid-cols-12 md:gap-8 md:pl-10">
              <span aria-hidden className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-accent" />
              <p className="font-mono text-xs uppercase tracking-wider text-ink-2 md:col-span-3 md:pt-1.5">{e.period}</p>
              <div className="md:col-span-8">
                <h3 className="font-display text-2xl">{e.role}</h3>
                <p className="text-ink-2">{e.company}</p>
                <p className="mt-3">{e.summary}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-[0.95rem]">
                  {e.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                {e.needsConfirmation && (
                  <p className="mt-3 inline-block border border-dashed border-ink/40 px-2 py-0.5 font-mono text-xs text-ink-2">Placeholder — awaiting details</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
