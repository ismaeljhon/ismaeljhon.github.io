import { Code2, Briefcase, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { ToBeAdded } from "@/components/shared/PlaceholderText";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { email, linkedin, github } = profile.contact;
  const rows = [
    { label: "Email", Icon: Mail, value: email, href: email ? `mailto:${email}` : undefined, text: email },
    { label: "LinkedIn", Icon: Briefcase, value: linkedin, href: linkedin, text: linkedin?.replace(/^https?:\/\//, "") },
    { label: "GitHub", Icon: Code2, value: github, href: github, text: github?.replace(/^https?:\/\//, "") },
  ];
  return (
    <section id="contact" className="border-t border-rule">
      <div className="page-container py-20 md:py-28">
        <SectionHeading index="06" label="Contact" title="Have a project, a prototype or a legacy system in mind?" />
        <div className="grid gap-10 md:grid-cols-12">
          <ul className="divide-y divide-rule border-y border-rule md:col-span-7">
            {rows.map(({ label, Icon, href, text }) => (
              <li key={label} className="flex items-center gap-4 py-4">
                <Icon size={18} aria-hidden className="text-accent" />
                <span className="w-24 font-mono text-xs uppercase tracking-wider text-ink-2">{label}</span>
                {href ? <a href={href} className="break-all underline underline-offset-4 hover:text-accent">{text}</a> : <ToBeAdded what={label} />}
              </li>
            ))}
          </ul>
          <div className="md:col-span-4 md:col-start-9">
            {email ? (
              <a href={`mailto:${email}`} className="inline-flex bg-ink px-5 py-3 text-sm font-semibold text-paper hover:bg-accent">Get in touch</a>
            ) : (
              <span className="inline-flex cursor-not-allowed bg-ink/40 px-5 py-3 text-sm font-semibold text-paper" aria-disabled="true">Get in touch (add email)</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
