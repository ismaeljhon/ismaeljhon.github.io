import { Trophy } from "lucide-react";
import { RpgWindow } from "./RpgWindow";
import { PixelSprite } from "./PixelSprite";
import { StatHexagon } from "./StatHexagon";
import { achievements, attributes, characterClass } from "@/data/game";
import { profile } from "@/data/profile";

export function AboutWindows() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <RpgWindow title="About the Adventurer">
        <div className="flex gap-3">
          <div className="grid h-28 w-24 shrink-0 place-items-center border-2 border-navy/40 bg-grass/60"><PixelSprite className="h-24 w-12" /></div>
          <div className="space-y-2 text-sm leading-relaxed">
            <p className="font-pixel text-lg">{profile.characterName} · {characterClass}</p>
            {profile.summary.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </RpgWindow>

      <RpgWindow title="Status">
        <StatHexagon className="mb-3" />
        <dl className="grid gap-2 sm:grid-cols-2">
          {attributes.map((a) => (
            <div key={a.key} className="border-2 border-navy/30 bg-parch-2 p-2">
              <dt className="font-pixel text-base"><span className="text-ro-blue">{a.key}</span> · {a.label}</dt>
              <dd className="text-xs leading-snug">{a.blurb}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-2 font-mono text-[0.7rem] opacity-70">Attributes are descriptive, not scored.</p>
      </RpgWindow>

      <RpgWindow title="Achievements" className="lg:col-span-2">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <li key={a.id} className="flex gap-2 border-2 border-ro-gold/70 bg-white/60 p-2">
              <Trophy size={18} className="mt-0.5 shrink-0 text-ro-gold" aria-hidden />
              <span><strong className="block text-sm leading-tight">{a.title}</strong><span className="text-xs">{a.detail}</span></span>
            </li>
          ))}
        </ul>
      </RpgWindow>
    </div>
  );
}
