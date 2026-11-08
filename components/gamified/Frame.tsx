import type { CSSProperties, ReactNode } from "react";
import { Star } from "lucide-react";

/** Static (non-collapsible) RPG window used by the hero panels. */
export function Frame({
  title, children, className = "", style, as: Tag = "section", label,
}: { title: string; children: ReactNode; className?: string; style?: CSSProperties; as?: "section" | "div" | "aside" | "nav"; label?: string }) {
  return (
    <Tag className={`rpg-window flex flex-col ${className}`} style={style} aria-label={label}>
      <div className="rpg-titlebar shrink-0 gap-2">
        <Star size={14} className="fill-[#f6cf55] text-[#f6cf55]" aria-hidden />
        <h2 className="text-base font-normal">{title}</h2>
      </div>
      {children}
    </Tag>
  );
}
