"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useSyncExternalStore, type ReactNode } from "react";
import type { Mode } from "@/types/portfolio";

const STORAGE_KEY = "portfolio-mode";
const listeners = new Set<() => void>();

const read = (): Mode => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "gamified" ? "gamified" : "career";
  } catch {
    return "career";
  }
};

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  window.addEventListener("storage", cb); // keep multiple tabs in sync
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
};

interface ModeContextValue {
  mode: Mode;
  setMode: (mode: Mode, opts?: { refocus?: boolean }) => void;
  /** True once after a keyboard-initiated switch, so the remounted switcher can regain focus. */
  consumeRefocus: () => boolean;
}

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  // Server snapshot is always "career", so hydration matches; the client then
  // reconciles to the stored value without a hydration mismatch.
  const mode = useSyncExternalStore(subscribe, read, () => "career" as Mode);

  const refocus = useRef(false);
  const consumeRefocus = useCallback(() => {
    const v = refocus.current;
    refocus.current = false;
    return v;
  }, []);

  const setMode = useCallback((next: Mode, opts?: { refocus?: boolean }) => {
    refocus.current = opts?.refocus ?? false;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: ignore */
    }
    listeners.forEach((l) => l());
  }, []);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  const value = useMemo(() => ({ mode, setMode, consumeRefocus }), [mode, setMode, consumeRefocus]);
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode(): ModeContextValue {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used inside <ModeProvider>");
  return ctx;
}
