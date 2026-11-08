"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { asset } from "@/lib/asset";

type Anim = { frames: string[]; ms: number[]; hot: [number, number]; fallback: string };

/** Frames and timings decoded from "Ro Normal Select.ani" and "Ro Link Select.ani" (hotspot 0,0 in both). */
const NORMAL: Anim = {
  frames: [0, 1, 2, 3, 4, 5].map((i) => `/images/game/cursor/ro-normal-${i}.png`),
  ms: [500, 100, 100, 100, 100, 100],
  hot: [0, 0],
  fallback: "auto",
};
const LINK: Anim = {
  frames: [0, 1].map((i) => `/images/game/cursor/ro-link-${i}.png`),
  ms: [167, 167],
  hot: [0, 0],
  fallback: "pointer",
};

const cursorValue = (a: Anim, i: number) => `url("${asset(a.frames[i])}") ${a.hot[0]} ${a.hot[1]}, ${a.fallback}`;

/**
 * Wraps Gamified Mode and animates its custom cursors by cycling CSS variables
 * (browsers can't play .ani cursors). Uses a still first frame for reduced motion.
 */
export function CursorScope({ className = "", children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Preload every frame so swaps never flash the fallback cursor.
    [...NORMAL.frames, ...LINK.frames].forEach((f) => { const img = new Image(); img.src = asset(f); });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timers: ReturnType<typeof setTimeout>[] = [];
    const stop = () => timers.splice(0).forEach(clearTimeout);

    const run = (a: Anim, prop: string, i: number) => {
      el.style.setProperty(prop, cursorValue(a, i));
      if (reduce.matches) return;
      timers.push(setTimeout(() => run(a, prop, (i + 1) % a.frames.length), a.ms[i]));
    };
    const start = () => { stop(); run(NORMAL, "--cursor-default", 0); run(LINK, "--cursor-link", 0); };

    start();
    reduce.addEventListener("change", start);
    return () => { stop(); reduce.removeEventListener("change", start); };
  }, []);

  return (
    <div
      ref={ref}
      className={`gamified-cursors ${className}`}
      style={{ "--cursor-default": cursorValue(NORMAL, 0), "--cursor-link": cursorValue(LINK, 0) } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
