"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMode } from "@/hooks/useMode";
import { CareerSite } from "@/components/career/CareerSite";
import { GamifiedSite } from "@/components/gamified/GamifiedSite";

/** Renders exactly one experience and cross-fades between them. */
export function ModeView() {
  const { mode } = useMode();
  const reduce = useReducedMotion();
  const dur = reduce ? 0 : 0.25;
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: dur }}
      >
        {mode === "career" ? <CareerSite /> : <GamifiedSite />}
      </motion.div>
    </AnimatePresence>
  );
}
