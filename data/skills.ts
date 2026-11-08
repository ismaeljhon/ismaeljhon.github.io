import type { SkillGroup, SkillBranch } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  { id: "ecommerce", title: "E-commerce & CMS", skills: ["WordPress", "WooCommerce", "Shopify", "BigCommerce", "Gutenberg", "Elementor", "Divi"] },
  { id: "frontend", title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"] },
  { id: "backend", title: "Backend", skills: ["PHP", "Node.js", "NestJS", "MySQL", "PostgreSQL"] },
  {
    id: "other",
    title: "Other Experience",
    skills: [
      "Custom WordPress themes and plugins",
      "E-commerce integrations",
      "Payment and checkout customization",
      "API integrations",
      "Website migrations",
      "Performance optimization",
      "Database optimization",
      "Responsive web development",
    ],
  },
];

export const skillBranches: SkillBranch[] = [
  { id: "ecommerce", title: "E-commerce Mastery", skills: ["WordPress", "WooCommerce", "Shopify", "BigCommerce"].map((name) => ({ name })) },
  { id: "frontend", title: "Frontend Development", skills: ["React", "Next.js", "Vue.js", "TypeScript"].map((name) => ({ name })) },
  { id: "backend", title: "Backend Development", skills: ["PHP", "Node.js", "NestJS", "MySQL", "PostgreSQL"].map((name) => ({ name })) },
  { id: "system", title: "System Development", skills: ["API Integration", "Database Design", "Application Architecture", "Performance Optimization"].map((name) => ({ name })) },
];
