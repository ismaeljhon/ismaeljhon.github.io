import { CareerNav } from "./CareerNav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Expertise } from "./Expertise";
import { Projects } from "./Projects";
import { ProjectArchive } from "./ProjectArchive";
import { ProjectFilterProvider } from "./projectFilters";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { Contact } from "./Contact";
import { profile } from "@/data/profile";

export function CareerSite() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">Skip to content</a>
      <CareerNav />
      <main id="main">
        <Hero />
        <ProjectFilterProvider>
          <Projects />
          <ProjectArchive />
        </ProjectFilterProvider>
        <Expertise />
        <About />
        <ExperienceTimeline />
        <Contact />
      </main>
      <footer className="border-t border-rule px-5 py-8 text-center font-mono text-xs text-ink-2">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
