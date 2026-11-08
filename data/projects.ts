import type { Project } from "@/types/portfolio";

// Uploaded portfolio projects intentionally have no `url`. `contribution` stays unset until confirmed.

/** Screenshot paths under /public/images/projects, named `<slug>-desktop.webp` / `<slug>-mobile.webp`. */
const shots = (slug: string, { desktop = true, mobile = true } = {}) => ({
  desktop: desktop ? `/images/projects/${slug}-desktop.webp` : undefined,
  mobile: mobile ? `/images/projects/${slug}-mobile.webp` : undefined,
});

const website = (slug: string, name: string, technologies: string[] = ["WordPress"]): Project => ({
  slug,
  name,
  description: "WordPress website.",
  category: "WordPress",
  technologies,
  previews: shots(slug),
  quest: { title: "Build and Customize WordPress Websites" },
});

const store = (slug: string, name: string, technologies: string[] = ["WordPress", "WooCommerce"], previews = shots(slug)): Project => ({
  slug,
  name,
  description: "E-commerce website.",
  category: "E-commerce",
  technologies,
  previews,
  quest: { title: "Develop Custom E-commerce Experiences" },
});

export const projects: Project[] = [
  {
    slug: "synergy-hub",
    name: "Synergy Hub",
    description: "Business management platform for creative agencies.",
    category: "Web Application",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
    quest: { title: "Build a Business Management Platform" },
  },

  // Websites
  website("coast-yamba", "Coast Yamba", ["WordPress", "Elementor"]),
  website("mission-seashore", "Mission Seashore", ["WordPress", "Gutenberg"]),
  website("seashore-academy", "Seashore Academy", ["WordPress", "Elementor"]),
  website("auckland-copiers", "Auckland Copiers & Solutions"),
  website("blonde-ambition", "Blonde Ambition"),
  website("central-foundations", "Central Foundations"),
  website("chfa", "Community Housing Funding Agency"),
  website("creative-kitchens", "Creative Kitchens & Interiors"),
  website("friends-of-seashore", "Friends of Seashore"),
  website("gemscott", "Gemscott"),
  website("half-moon-bay-marina", "Half Moon Bay Marina"),
  website("linkup-plumbing", "Linkup Plumbing"),
  website("otahuhu-business-association", "Ōtāhuhu Business Association"),
  website("vines-estate", "Vines Estate"),

  // E-commerce
  store("a1-containers", "A1 Containers"),
  store("contain-boutique", "Contain Boutique", ["BigCommerce"]),
  store("west-coast-surf-and-street", "West Coast Surf and Street", ["BigCommerce"]),
  store("bliss-gifts-and-baskets", "Bliss Gifts & Baskets", ["Shopify"]),
  store("award-plastics", "Award Plastics & Displays"),
  store("auckland-pea-straw", "Auckland Pea Straw", undefined, shots("auckland-pea-straw", { desktop: false })),
  store("first-aid-northland", "First Aid Northland"),
  store("hyperlink", "Hyperlink A&L Enterprises"),
  store("jess-coate-fitness", "Jess Coate Fitness"),
  store("pools-and-spas", "Pools & Spas"),
  store("roar-pet-nz", "ROAR Pet NZ"),
  store("sassy-sadie", "Sassy Sadie"),
  store("sovereignty-and-soul", "Sovereignty & Soul"),
];
