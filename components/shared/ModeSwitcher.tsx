"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import { BookOpen, Swords } from "lucide-react";
import { useMode } from "@/hooks/useMode";
import type { Mode } from "@/types/portfolio";

const OPTIONS: { value: Mode; label: string; short: string; Icon: typeof BookOpen }[] = [
  { value: "career", label: "Career Mode", short: "Career", Icon: BookOpen },
  { value: "gamified", label: "Gamified Mode", short: "Gamified", Icon: Swords },
];

/** Visual themes: the neutral pill (Career Mode) or RPG-style buttons matching the Gamified header. */
type Variant = "default" | "game";

const STYLES: Record<Variant, { group: string; button: string; active: string; idle: string }> = {
  default: {
    group: "font-sans rounded-full border-2 border-current/30 bg-white/90 p-0.5 shadow-sm",
    button: "rounded-full font-semibold text-neutral-900 transition-colors",
    active: "bg-neutral-900 !text-white",
    idle: "hover:bg-neutral-200",
  },
  game: {
    group: "gap-1.5 border-2 border-[#7c8db5] bg-[#2c3550] p-1 font-ui shadow-[0_3px_0_rgba(20,26,40,.4)]",
    button: "whitespace-nowrap rounded-[5px] font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_2px_0_#141b33] [text-shadow:0_1px_0_rgba(0,0,0,.4)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2cc66]",
    active: "border-2 border-[#f2cc66] bg-gradient-to-b from-[#6b5a2e] to-[#4a3d1e] text-[#fff3c8]",
    idle: "border-[1.5px] border-[#9fb0d8] bg-gradient-to-b from-[#5468a0] to-[#34457a] text-white hover:text-[#ffe7a3]",
  },
};

/** Accessible two-option radiogroup with arrow-key support. */
/** `short` shows "Career" / "Gamified" (the full names stay available to assistive tech). */
export function ModeSwitcher({ className = "", compact = false, variant = "default", short = false }: { className?: string; compact?: boolean; variant?: Variant; short?: boolean }) {
  const st = STYLES[variant];
  const { mode, setMode, consumeRefocus } = useMode();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Experiences remount on switch; regain focus after a keyboard-initiated change.
    if (consumeRefocus()) {
      refs.current[OPTIONS.findIndex((o) => o.value === mode)]?.focus();
    }
    // Runs on mount only: the outgoing tree is still mounted during the exit animation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next =
      e.key === "Home" ? 0 : e.key === "End" ? OPTIONS.length - 1
      : (index + (e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 1) + OPTIONS.length) % OPTIONS.length;
    setMode(OPTIONS[next].value, { refocus: true });
  };

  return (
    <div role="radiogroup" aria-label="Portfolio experience" className={`inline-flex ${st.group} ${compact ? "text-xs" : "text-sm"} ${className}`}>
      {OPTIONS.map(({ value, label, short: shortLabel, Icon }, i) => {
        const active = mode === value;
        return (
          <button
            key={value}
            ref={(el) => { refs.current[i] = el; }}
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onClick={() => setMode(value)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`flex items-center gap-1.5 ${compact ? "px-2.5 py-1" : "px-3 py-1.5"} ${st.button} ${active ? st.active : st.idle}`}
          >
            <Icon size={14} aria-hidden />
            {short ? <span><span aria-hidden>{shortLabel}</span><span className="sr-only">{label}</span></span> : <span>{label}</span>}
          </button>
        );
      })}
    </div>
  );
}
