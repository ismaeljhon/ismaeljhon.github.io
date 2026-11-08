import { Code2, Briefcase, Mail } from "lucide-react";
import { RpgWindow } from "./RpgWindow";
import { ToBeAdded } from "@/components/shared/PlaceholderText";
import { profile } from "@/data/profile";

export function ContactWindow() {
  const { email, linkedin, github } = profile.contact;
  const rows = [
    { label: "Email", Icon: Mail, href: email && `mailto:${email}`, text: email },
    { label: "LinkedIn", Icon: Briefcase, href: linkedin, text: linkedin },
    { label: "GitHub", Icon: Code2, href: github, text: github },
  ];
  return (
    <RpgWindow title="Send a Message (Contact)">
      <ul className="space-y-2">
        {rows.map(({ label, Icon, href, text }) => (
          <li key={label} className="flex flex-wrap items-center gap-2">
            <Icon size={16} aria-hidden /><span className="w-20 font-pixel text-sm">{label}</span>
            {href ? <a className="break-all text-ro-blue underline" href={href}>{text}</a> : <ToBeAdded what={label} />}
          </li>
        ))}
      </ul>
    </RpgWindow>
  );
}
