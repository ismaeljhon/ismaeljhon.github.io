import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Ismael Jhon Jalbuna Jr.",
  characterName: "Ismael Jhon",
  title: "Senior Full-Stack & E-commerce Developer",
  headline: "Building digital experiences, e-commerce platforms, and business applications.",
  intro:
    "I build, customize and maintain websites, e-commerce platforms and business applications across the full stack.",
  summary: [
    "I'm a web developer with extensive experience building, customizing, and maintaining websites, e-commerce platforms, and business applications.",
    "My experience covers both frontend and backend development, with a strong focus on WordPress, WooCommerce, Shopify, and BigCommerce. I've also worked with modern JavaScript frameworks and backend technologies, including React, Next.js, Vue.js, Node.js, PHP, and MySQL.",
    "I enjoy solving complex technical problems, building practical solutions, improving existing systems, and turning ideas or prototypes into functional applications.",
  ],
  yearsOfExperience: 13,
  location: "Davao City, Philippines",
  // TODO(owner): set `open` and `label` to your real availability.
  availability: { open: true, label: "Available for new projects" },
  contact: {
    email: "jalbuna.ismael@gmail.com",
    linkedin: "https://www.linkedin.com/in/ismaeljhon/",
    github: "https://github.com/ismaeljhon/",
  },
};

export const strengths: string[] = [
  "Build complete web applications, frontend to backend.",
  "Develop and customize e-commerce platforms.",
  "Work with existing systems and legacy applications.",
  "Convert prototypes into functional applications.",
  "Solve frontend and backend problems.",
];
