"use client";

import { useId, useState } from "react";
import { attributes } from "@/data/game";
import type { Attribute } from "@/types/portfolio";

/** Angle (degrees, 0 = right) for each attribute, in RO status-screen order. */
const ANGLE: Record<Attribute["key"], number> = { STR: -90, VIT: -30, LUK: 30, INT: 90, DEX: 150, AGI: 210 };

const W = 240;
const H = 216;
const CX = W / 2;
const CY = H / 2;
const R = 68;
/** Every stat is equal on purpose: a balanced Super Novice build, not a self-score. */
const FILL = 0.62;

const pt = (key: Attribute["key"], r: number) => {
  const a = (ANGLE[key] * Math.PI) / 180;
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)] as const;
};
/** Attributes ordered clockwise around the hexagon (the data order is not angular). */
const RING = [...attributes].sort((a, b) => ANGLE[a.key] - ANGLE[b.key]);
const hex = (r: number) => RING.map((a) => pt(a.key, r).join(",")).join(" ");

const DEFAULT_CAPTION = { title: "Balanced build", text: "Every stat trained evenly. Hover or tap a stat to learn more." };

export function StatHexagon({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<Attribute["key"] | null>(null);
  const current = attributes.find((a) => a.key === active);
  const captionId = useId();

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="relative mx-auto w-full max-w-[188px]" style={{ aspectRatio: `${W}/${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden>
          <polygon points={hex(R)} fill="#fbf6ea" stroke="#6e7fa6" strokeWidth="1.5" />
          <polygon points={hex(R * 0.5)} fill="none" stroke="#9fb0d8" strokeWidth="1" />
          {attributes.map((a) => {
            const [x, y] = pt(a.key, R);
            return <line key={a.key} x1={CX} y1={CY} x2={x} y2={y} stroke="#9fb0d8" strokeWidth="1" />;
          })}
          <polygon points={hex(R * FILL)} fill="#5f7fc4" fillOpacity=".85" stroke="#34457a" strokeWidth="1.5" />
          {active && (() => {
            const [x, y] = pt(active, R);
            return <line x1={CX} y1={CY} x2={x} y2={y} stroke="#e2a93a" strokeWidth="2.5" />;
          })()}
        </svg>

        {attributes.map((a) => {
          const [x, y] = pt(a.key, R + 20);
          const on = active === a.key;
          return (
            <button
              key={a.key}
              type="button"
              aria-describedby={captionId}
              aria-pressed={on}
              onMouseEnter={() => setActive(a.key)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(a.key)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(on ? null : a.key)}
              title={`${a.key}: ${a.label}`}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-[4px] border-[1.5px] px-1.5 py-px font-pixel text-[15px] leading-tight shadow-[0_2px_0_#141b33] transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#e2a93a] ${on ? "border-[#f2cc66] bg-gradient-to-b from-[#6b5a2e] to-[#4a3d1e] text-[#fff3c8]" : "border-[#9fb0d8] bg-gradient-to-b from-[#5468a0] to-[#34457a] text-white"}`}
              style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }}
            >
              <span className="sr-only">{a.label}: </span>{a.key}
            </button>
          );
        })}
      </div>

      <p id={captionId} aria-live="polite" className="mt-2 h-[50px] overflow-hidden text-center leading-[1.2] text-[#22283a]">
        <span className="block font-pixel text-[15px] text-[#3a4a7a]">{current ? `${current.key} · ${current.label}` : DEFAULT_CAPTION.title}</span>
        <span className="block font-ui text-[13px] text-[#4a5368]">{current ? current.blurb : DEFAULT_CAPTION.text}</span>
      </p>
    </div>
  );
}
