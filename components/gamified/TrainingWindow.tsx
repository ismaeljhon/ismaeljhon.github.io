import { RpgWindow } from "./RpgWindow";
import { currentQuest } from "@/data/game";

export function TrainingWindow() {
  return (
    <RpgWindow title="Current Quest">
      <p className="flex items-center gap-2 font-pixel text-xl"><span aria-hidden className="h-3.5 w-3.5 rounded-full border-2 border-[#2e3a57] bg-[#4d73b8]" />{currentQuest.title}</p>
      <p className="mt-2 font-reader text-lg leading-snug">{currentQuest.detail}</p>
    </RpgWindow>
  );
}
