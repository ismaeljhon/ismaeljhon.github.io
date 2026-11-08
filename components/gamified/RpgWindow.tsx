"use client";

import { useId, useState, type ReactNode } from "react";
import { Minus, Plus, Star } from "lucide-react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
  collapsible?: boolean;
  as?: "section" | "div" | "aside";
  id?: string;
}

/** Classic MMORPG-style window: blue title bar, parchment body, optional minimize toggle. */
export function RpgWindow({ title, children, className = "", collapsible = true, as: Tag = "section", id }: Props) {
  const [open, setOpen] = useState(true);
  const bodyId = useId();
  return (
    <Tag id={id} className={`rpg-window ${className}`}>
      <div className="rpg-titlebar justify-between gap-2">
        <h2 className="flex items-center gap-2 text-base font-normal"><Star size={14} className="fill-[#f6cf55] text-[#f6cf55]" aria-hidden />{title}</h2>
        {collapsible && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={bodyId}
            aria-label={`${open ? "Minimize" : "Expand"} ${title}`}
            className="grid h-5 w-5 place-items-center border border-[#2e3a57] bg-gradient-to-b from-[#eef3fc] to-[#c9d6ee] text-[#2e3a57]"
          >
            {open ? <Minus size={11} aria-hidden /> : <Plus size={11} aria-hidden />}
          </button>
        )}
      </div>
      <div id={bodyId} hidden={!open} className="p-3 sm:p-4">{children}</div>
    </Tag>
  );
}
