import { RpgWindow } from "./RpgWindow";
import { experience } from "@/data/experience";

export function AdventureLog() {
  return (
    <RpgWindow title="Adventure Log">
      <ol className="space-y-3">
        {experience.map((e, i) => (
          <li key={e.id} className="grid gap-1 border-2 border-navy/30 bg-parch-2 p-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
            <p className="font-mono text-xs"><span className="font-pixel text-base text-ro-blue">Chapter {i + 1}</span><br />{e.period}</p>
            <div>
              <h3 className="font-semibold">{e.role}</h3>
              <p className="text-sm opacity-80">{e.company}</p>
              <p className="mt-1 text-sm">{e.summary}</p>
              {e.needsConfirmation && <p className="mt-1 inline-block border border-dashed border-navy/50 px-1.5 font-mono text-[0.7rem]">Placeholder — awaiting details</p>}
            </div>
          </li>
        ))}
      </ol>
    </RpgWindow>
  );
}
