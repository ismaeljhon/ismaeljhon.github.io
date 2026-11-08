import { GameNav } from "./GameNav";
import { CursorScope } from "./CursorScope";
import { TownHero } from "./TownHero";
import { NarrowHero } from "./NarrowHero";
import { SectionIntro } from "./SectionIntro";
import { QuestLog } from "./QuestLog";
import { SkillTree } from "./SkillTree";
import { AboutWindows } from "./AboutWindows";
import { TrainingWindow } from "./TrainingWindow";
import { AdventureLog } from "./AdventureLog";
import { ContactWindow } from "./ContactWindow";
import { profile } from "@/data/profile";

const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-16 py-8 sm:py-12">{children}</section>
);

export function GamifiedSite() {
  return (
    <CursorScope className="min-h-screen bg-[#0b0d12] font-reader text-[#1f2a33]">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <GameNav />
      <main id="main">
        <TownHero />
        <NarrowHero />
        <div className="page-container">
          <Section id="quests">
            <SectionIntro tag="Quest Log · Selected Projects" title="Completed quests" blurb={`A record of quests completed across ${profile.yearsOfExperience} years on the road, taken on for clients, guilds and as a solo adventurer. Pick a quest to see the details.`} />
            <QuestLog />
          </Section>
          <Section id="skills">
            <SectionIntro tag="Skill Tree · Technical Expertise" title="Adventurer skill tree" />
            <SkillTree />
          </Section>
          <Section id="about">
            <SectionIntro tag="Character Profile · About" title="About the adventurer" />
            <AboutWindows />
          </Section>
          <Section id="training">
            <SectionIntro tag="Training Ground · Currently Learning" title="Current quest" />
            <TrainingWindow />
          </Section>
          <Section id="journal">
            <SectionIntro tag="Adventure Log · Experience" title="The journey so far" />
            <AdventureLog />
          </Section>
          <Section id="contact">
            <SectionIntro tag="Guild · Contact" title="Send a message" />
            <ContactWindow />
          </Section>
        </div>
      </main>
      <footer className="border-t-4 border-[#d4b77b] bg-[#26313b] px-3 py-4 text-center font-pixel text-sm text-white">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </CursorScope>
  );
}
