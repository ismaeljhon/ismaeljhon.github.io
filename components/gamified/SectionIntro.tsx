export function SectionIntro({ tag, title, blurb }: { tag: string; title: string; blurb?: string }) {
  return (
    <header className="mb-5">
      <p className="inline-block bg-[#d4b77b] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#1f2a33]">{tag}</p>
      <h2 className="mt-1 font-reader text-4xl font-bold leading-none tracking-tight text-[#f6efdc] sm:text-6xl">{title}</h2>
      {blurb && <p className="mt-3 max-w-2xl font-reader text-lg text-[#c3ccd8]">{blurb}</p>}
    </header>
  );
}
