import { Check } from "lucide-react";
import { profile, strengths } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-t border-rule">
      <div className="page-container py-20 md:py-28">
        <SectionHeading index="03" label="About" title="One developer across every layer of the web." />
        <div className="grid gap-12 md:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed md:col-span-7">
            {profile.summary.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-2">What I bring</h3>
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {strengths.map((s) => (
                <li key={s} className="flex gap-3 py-3 text-[0.95rem]">
                  <Check size={16} className="mt-1 shrink-0 text-accent" aria-hidden />{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
