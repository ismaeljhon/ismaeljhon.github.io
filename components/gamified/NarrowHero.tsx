/* eslint-disable @next/next/no-img-element */
import { asset } from "@/lib/asset";
import { Frame } from "./Frame";
import { CharacterBody, CurrentQuestBody, SystemBar, WelcomeBody } from "./HeroPanels";

/** Hero for viewports below 1280px: windows flow over the dimmed town artwork. */
export function NarrowHero() {
  return (
    <section id="home-m" aria-label="Town square" className="relative overflow-hidden bg-[#3b4a66] xl:hidden">
      <img src={asset("/images/game/town-crop.webp")} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      <span aria-hidden className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto grid max-w-3xl gap-4 px-3 py-6 sm:py-10 md:grid-cols-2">
        <Frame title="Welcome, Adventurer!" className="md:col-span-2"><WelcomeBody /></Frame>
        <Frame title="Character Info" as="aside"><CharacterBody /></Frame>
        <Frame title="Current Quest"><CurrentQuestBody /></Frame>
        <SystemBar className="min-h-14 py-2 text-sm md:col-span-2" />
      </div>
    </section>
  );
}
