"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { characterArt } from "@/data/game";

/** Frames of the Super Novice idle loop (64 × 127 px each). */
const FRAMES = ["idle-0", "idle-1", "blink-0", "blink-1"] as const;
const STEP_MS = 520;

function frameFor(step: number) {
  const f = step % 2;
  return step % 10 === 9 ? `blink-${f}` : `idle-${f}`;
}

/**
 * Animated pixel-art Super Novice: an idle "breathing" loop that blinks every few seconds.
 * Respects prefers-reduced-motion (shows a still frame). Set `characterArt` in data/game.ts to use other artwork.
 */
export function PixelSprite({ className = "", label = "Pixel-art Super Novice character" }: { className?: string; label?: string }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (characterArt) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let t: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      clearInterval(t);
      if (!reduce.matches) t = setInterval(() => setStep((s) => s + 1), STEP_MS);
    };
    start();
    reduce.addEventListener("change", start);
    return () => { clearInterval(t); reduce.removeEventListener("change", start); };
  }, []);

  if (characterArt) {
    return <img src={asset(characterArt)} alt={label} className={`pixelated object-contain ${className}`} />;
  }

  const current = frameFor(step);
  return (
    <span role="img" aria-label={label} className={`relative inline-block aspect-[64/127] ${className}`}>
      {FRAMES.map((n) => (
        <img
          key={n}
          src={asset(`/images/game/sprite/novice-${n}.png`)}
          alt=""
          width={64}
          height={127}
          draggable={false}
          className={`pixelated absolute inset-0 h-full w-full ${n === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </span>
  );
}
