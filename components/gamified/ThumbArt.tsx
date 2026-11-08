/* eslint-disable @next/next/no-img-element */
import { Globe, LayoutDashboard, ShoppingBag } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { asset } from "@/lib/asset";

const ART = {
  "Web Application": { Icon: LayoutDashboard, bg: "linear-gradient(135deg,#3b4a8a,#6a7fc4)" },
  WordPress: { Icon: Globe, bg: "linear-gradient(135deg,#2f5f7a,#5f9ab8)" },
  "E-commerce": { Icon: ShoppingBag, bg: "linear-gradient(135deg,#7a4f2f,#c08a54)" },
} as const;

/** Project thumbnail: the real screenshot when `image` is set, otherwise a neutral category tile. */
export function ThumbArt({ project, className = "" }: { project: Project; className?: string }) {
  if (project.image) return <img src={asset(project.image)} alt="" className={`object-cover ${className}`} />;
  const { Icon, bg } = ART[project.category];
  return (
    <div aria-hidden className={`grid place-items-center text-white/85 ${className}`} style={{ background: bg }}>
      <Icon size={34} strokeWidth={1.6} />
    </div>
  );
}
