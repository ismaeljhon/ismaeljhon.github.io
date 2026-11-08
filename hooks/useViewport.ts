"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
};

/** Viewport width excluding the scrollbar. Server snapshot is a stable 1672 (the mockup canvas width). */
export function useViewportWidth(): number {
  return useSyncExternalStore(subscribe, () => document.documentElement.clientWidth, () => 1672);
}

/** True once the page has scrolled more than `px` pixels. */
export function useScrolledPast(px: number): boolean {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > px);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [px]);
  return past;
}
