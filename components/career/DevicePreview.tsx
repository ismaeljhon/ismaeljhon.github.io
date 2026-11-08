/* eslint-disable @next/next/no-img-element */
import { asset } from "@/lib/asset";

/** Wireframe stand-in for a screenshot that hasn't been supplied yet. */
function PlaceholderScreen({ compact }: { compact?: boolean }) {
  return (
    <div aria-hidden className={`flex h-full flex-col bg-white ${compact ? "gap-1 p-1.5" : "gap-2 p-3"}`}>
      <div className="flex items-center justify-between">
        <div className={`rounded-sm bg-ink/15 ${compact ? "h-1.5 w-5" : "h-2 w-10"}`} />
        {compact ? (
          <div className="h-1.5 w-2 rounded-sm bg-ink/15" />
        ) : (
          <div className="flex gap-1.5">{[0, 1, 2].map((i) => <div key={i} className="h-1.5 w-5 rounded-sm bg-ink/10" />)}</div>
        )}
      </div>
      <div className="flex flex-1 items-center justify-center rounded-sm bg-paper-2">
        {!compact && <span className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-2/70">Preview to be added</span>}
      </div>
      <div className={`space-y-1 ${compact ? "" : "w-2/3"}`}>
        <div className="h-1.5 rounded-sm bg-ink/10" />
        <div className="h-1.5 w-4/5 rounded-sm bg-ink/10" />
      </div>
      {!compact && (
        <div className="grid grid-cols-3 gap-1.5">{[0, 1, 2].map((i) => <div key={i} className="h-5 rounded-sm bg-paper-2" />)}</div>
      )}
    </div>
  );
}

function Screen({ src, alt, compact }: { src?: string; alt: string; compact?: boolean }) {
  return src ? (
    <img src={asset(src)} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" />
  ) : (
    <PlaceholderScreen compact={compact} />
  );
}

/**
 * Desktop browser window with a phone overlapping its bottom-right corner.
 * Each screen falls back to a wireframe placeholder until its screenshot is supplied.
 */
export function DevicePreview({ name, url, desktop, mobile }: { name: string; url?: string; desktop?: string; mobile?: string }) {
  const host = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : undefined;
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
      {/* Desktop */}
      <div className="absolute left-[6%] top-[9%] flex h-[78%] w-[76%] flex-col overflow-hidden rounded-md border border-ink/20 bg-white shadow-[0_10px_30px_-12px_rgba(21,23,27,0.35)]">
        <div className="flex h-5 shrink-0 items-center gap-1 border-b border-ink/10 bg-paper px-2">
          {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-ink/20" />)}
          <span className="ml-2 h-2.5 flex-1 truncate rounded-sm bg-white px-1.5 font-mono text-[0.5rem] leading-[0.625rem] text-ink-2/70">{host}</span>
        </div>
        <div className="min-h-0 flex-1">
          <Screen src={desktop} alt={`${name} on desktop`} />
        </div>
      </div>
      {/* Mobile */}
      <div className="absolute bottom-[7%] right-[6%] h-[72%] w-[22%] rounded-[10px] border-[3px] border-ink bg-ink shadow-[0_10px_30px_-10px_rgba(21,23,27,0.5)]">
        <div className="relative h-full overflow-hidden rounded-[7px]">
          <span aria-hidden className="absolute left-1/2 top-1 z-10 h-1 w-1/3 -translate-x-1/2 rounded-full bg-ink" />
          <Screen src={mobile} alt={`${name} on mobile`} compact />
        </div>
      </div>
    </div>
  );
}
