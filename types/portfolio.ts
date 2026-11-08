/** A value that still needs to be confirmed by the site owner. */
export type Placeholder = { placeholder: true; note: string };

export interface Profile {
  name: string;
  characterName: string;
  title: string;
  headline: string;
  intro: string;
  summary: string[];
  yearsOfExperience: number;
  location: string;
  availability: { open: boolean; label: string };
  contact: { email?: string; linkedin?: string; github?: string };
}

export type ProjectCategory = "Web Application" | "WordPress" | "E-commerce";

export interface Project {
  slug: string;
  name: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  /** Leave undefined until confirmed. */
  contribution?: string;
  url?: string;
  /** Path under /public, e.g. "/images/projects/synergy-hub.png". */
  image?: string;
  /** Screenshots shown in the career-mode device frames, paths under /public. Placeholders until set. */
  previews?: { desktop?: string; mobile?: string };
  /** Gamified-mode quest framing. */
  quest: { title: string; reward?: string };
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  /** True when any field above is a placeholder awaiting confirmation. */
  needsConfirmation: boolean;
}

export interface Attribute {
  key: "STR" | "AGI" | "VIT" | "INT" | "DEX" | "LUK";
  label: string;
  blurb: string;
}

export interface SkillBranch {
  id: string;
  title: string;
  skills: { name: string; note?: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  detail: string;
}

export type Mode = "career" | "gamified";

export type SkillLevel = "Experienced" | "Working knowledge" | "Learning";

/** Compact skill-branch summary shown in the Gamified hero. */
export interface HeroBranch {
  id: string;
  title: string;
  list: string;
  level: SkillLevel;
  icon: string;
}

export interface CurrentQuest {
  title: string;
  summary: string;
  detail: string;
}
