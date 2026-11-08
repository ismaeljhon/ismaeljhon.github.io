import type { ReactNode } from "react";

export function SectionHeading({ index, label, title, intro }: { index: string; label: string; title: string; intro?: ReactNode }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-2">
        <span className="text-accent">{index}</span> / {label}
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight tracking-tight md:text-5xl">{title}</h2>
      {intro && <div className="mt-5 max-w-2xl space-y-2 text-lg text-ink-2">{intro}</div>}
    </div>
  );
}
