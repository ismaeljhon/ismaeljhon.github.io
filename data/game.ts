import type { Attribute, Achievement, CurrentQuest, HeroBranch } from "@/types/portfolio";

export const characterClass = "Super Novice";
export const characterDescription =
  "A versatile developer who has explored different areas of web development, from frontend interfaces and backend systems to e-commerce platforms and full-stack applications.";

// Playful, non-quantitative: descriptions only, no scores.
export const attributes: Attribute[] = [
  { key: "STR", label: "Problem Solving", blurb: "Breaks hard technical problems down until they give." },
  { key: "AGI", label: "Adaptability", blurb: "Moves between CMSs, frameworks and stacks." },
  { key: "VIT", label: "Reliability", blurb: "Maintains and improves systems over the long haul." },
  { key: "INT", label: "Technical Knowledge", blurb: "Frontend, backend and e-commerce platforms." },
  { key: "DEX", label: "Development Precision", blurb: "Careful, detail-minded implementation." },
  { key: "LUK", label: "Creativity", blurb: "Turns ideas and prototypes into working products." },
];

export const achievements: Achievement[] = [
  { id: "years", title: "13 Years of Development Experience", detail: "Over a decade of building for the web." },
  { id: "platforms", title: "Multiple E-commerce Platforms", detail: "WooCommerce, Shopify and BigCommerce." },
  { id: "fullstack", title: "Full-Stack Application Development", detail: "Frontend and backend applications." },
  { id: "wp", title: "Custom WordPress Development", detail: "Custom themes and plugins." },
];

export const questCategories = [
  "Build a Business Management Platform",
  "Develop Custom E-commerce Experiences",
  "Build and Customize WordPress Websites",
  "Migrate Legacy Applications",
] as const;

/** Optional path under /public for custom character art (e.g. "/images/game/character.png"). Leave undefined to use the built-in pixel sprite. */
export const characterArt: string | undefined = undefined;

/**
 * Copy and details taken from the v5 "Town" mockup.
 * TODO(owner): confirm these are accurate (Go + Docker training, Infrastructure skills, skill levels).
 */
export const heroCopy = {
  headline: ["Not limited to", "one skill tree."],
  tagline: "Always learning. Always leveling up.",
  intro:
    "I'm Ismael, a software developer with 13 years of experience building websites, e-commerce platforms, and software solutions. I enjoy solving problems, exploring new technologies, and taking on challenges beyond my usual specialization.",
  aboutShort: "A developer who enjoys exploring new technologies, solving real-world problems, and continuously learning.",
  systemMessage: "Welcome to my portfolio! Currently training in Go & Docker, and open to new projects.",
  mapLocation: "Novice Village",
};

export const currentQuest: CurrentQuest = {
  title: "Learn Go + Docker",
  summary: "Building CLI tools in Go and containerizing my dev environments.",
  detail:
    "Currently training in Go and Docker: building command-line tools in Go and containerizing development environments.",
};

export const heroBranches: HeroBranch[] = [
  { id: "web", title: "Web Development", list: "WordPress, WooCommerce, Shopify…", level: "Experienced", icon: "/images/game/skill-1.png" },
  { id: "fe", title: "Frontend Engineering", list: "Vue, TypeScript, Next.js…", level: "Experienced", icon: "/images/game/skill-2.png" },
  { id: "be", title: "Backend Development", list: "PHP, Node.js, NestJS…", level: "Working knowledge", icon: "/images/game/skill-3.png" },
  { id: "infra", title: "Infrastructure", list: "Linux, Docker, Cloudways…", level: "Learning", icon: "/images/game/skill-4.png" },
];

/** World-map pins (percent positions inside the map image). */
export const worldPins = [
  { href: "#quests", label: "Quest Log", left: "26%", top: "26%" },
  { href: "#about", label: "Profile", left: "76%", top: "24%" },
  { href: "#skills", label: "Skill Tree", left: "18%", top: "70%" },
  { href: "#training", label: "Training", left: "50%", top: "80%" },
  { href: "#contact", label: "Guild", left: "82%", top: "66%" },
];
