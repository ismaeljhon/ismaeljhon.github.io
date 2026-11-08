import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";

export function Hero() {
  const { availability } = profile;
  return (
    <section id="top" className="page-container pb-20 pt-14 md:pb-32 md:pt-24">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-ink-2">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className={`h-2 w-2 rounded-full ${availability.open ? "bg-emerald-600" : "bg-neutral-400"}`} />
          {availability.label}
        </span>
        <span className="inline-flex items-center gap-1.5"><MapPin size={12} aria-hidden />{profile.location}</span>
      </div>

      {/* Left (9 cols): headline, then name/intro/CTAs. Right (3 cols): portrait with the experience stat beneath. */}
      <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-x-8 md:gap-y-12">
        <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:col-span-9 md:row-start-1 md:text-7xl">
          {profile.headline}
        </h1>

        <aside className="flex items-end gap-6 md:col-span-3 md:col-start-10 md:row-span-2 md:row-start-1 md:flex-col md:items-stretch md:gap-5">
          <figure className="w-40 flex-none sm:w-48 md:w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/profile.webp")}
              alt={`Portrait of ${profile.name}`}
              width={720}
              height={900}
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
          <dl className="border-t border-rule pt-4">
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-2">Experience</dt>
            <dd className="font-display text-5xl leading-none md:text-6xl">{profile.yearsOfExperience}<span className="text-accent">+</span></dd>
            <dd className="mt-1 text-sm text-ink-2">years in web development</dd>
          </dl>
        </aside>

        <div className="md:col-span-8 md:row-start-2 md:self-end">
          <p className="font-mono text-sm uppercase tracking-wider">{profile.name}</p>
          <p className="mt-1 text-ink-2">{profile.title}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent">
              View Projects <ArrowDownRight size={16} aria-hidden />
            </a>
            <a href="#contact" className="inline-flex items-center border border-ink px-5 py-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
