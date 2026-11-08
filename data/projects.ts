import type { Project } from "@/types/portfolio";

// `url`, `image` and `contribution` are intentionally unset until confirmed.
export const projects: Project[] = [
  {
    slug: "synergy-hub",
    name: "Synergy Hub",
    description: "Business management platform for creative agencies.",
    category: "Web Application",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
    quest: { title: "Build a Business Management Platform" },
  },
  {
    slug: "coast-yamba",
    name: "Coast Yamba",
    description: "WordPress website.",
    category: "WordPress",
    technologies: ["WordPress", "Elementor"],
    quest: { title: "Build and Customize WordPress Websites" },
  },
  {
    slug: "mission-seashore",
    name: "Mission Seashore",
    description: "WordPress website.",
    category: "WordPress",
    technologies: ["WordPress", "Gutenberg"],
    quest: { title: "Build and Customize WordPress Websites" },
  },
  {
    slug: "seashore-academy",
    name: "Seashore Academy",
    description: "WordPress website.",
    category: "WordPress",
    technologies: ["WordPress", "Elementor"],
    quest: { title: "Build and Customize WordPress Websites" },
  },
  {
    slug: "contain-boutique",
    name: "Contain Boutique",
    description: "E-commerce website.",
    category: "E-commerce",
    technologies: ["BigCommerce"],
    quest: { title: "Develop Custom E-commerce Experiences" },
  },
  {
    slug: "west-coast-surf-and-street",
    name: "West Coast Surf and Street",
    description: "E-commerce website.",
    category: "E-commerce",
    technologies: ["BigCommerce"],
    quest: { title: "Develop Custom E-commerce Experiences" },
  },
];
