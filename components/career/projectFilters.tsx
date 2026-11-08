"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { ProjectCategory } from "@/types/portfolio";

/** Selected Projects sub-sections; also the Project Archive's filter tabs. */
/** `stack` is the technology tabs shown under the type once it is selected in the archive. */
export const groups: { id: string; title: string; categories: ProjectCategory[]; stack: string[] }[] = [
  { id: "websites", title: "Websites", categories: ["WordPress"], stack: ["WordPress"] },
  { id: "ecommerce", title: "E-commerce", categories: ["E-commerce"], stack: ["WooCommerce", "Shopify", "BigCommerce"] },
  { id: "applications", title: "Applications", categories: ["Web Application"], stack: ["Next.js", "NestJS", "Vue.js", "Electron"] },
];

export const filters: { label: string; categories: ProjectCategory[] | "all"; stack: string[] }[] = [
  { label: "All", categories: "all", stack: [] },
  ...groups.map((g) => ({ label: g.title, categories: g.categories, stack: g.stack })),
];

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
/** Case- and punctuation-insensitive, so "NextJS" in project data still matches "Next.js". */
export const usesTechnology = (projectTech: string[], tech: string) =>
  tech === "All" || projectTech.some((t) => normalize(t) === normalize(tech));

/** Shares the archive's filters so Selected Projects can open the archive pre-filtered. */
const ProjectFilterContext = createContext<{
  active: string;
  setActive: (label: string) => void;
  tech: string;
  setTech: (tech: string) => void;
} | null>(null);

export function ProjectFilterProvider({ children }: { children: ReactNode }) {
  const [active, setActiveType] = useState(filters[0].label);
  const [tech, setTech] = useState("All");
  // A technology only makes sense within its type, so changing type resets it.
  const setActive = (label: string) => {
    setActiveType(label);
    setTech("All");
  };
  return <ProjectFilterContext.Provider value={{ active, setActive, tech, setTech }}>{children}</ProjectFilterContext.Provider>;
}

export function useProjectFilter() {
  const ctx = useContext(ProjectFilterContext);
  if (!ctx) throw new Error("useProjectFilter must be used inside ProjectFilterProvider");
  return ctx;
}
