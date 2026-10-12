import { profile } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import { Github, Linkedin, Mail, Phone, Pin } from "./Icons";

const item = "flex items-center gap-3 rounded-xl border border-line bg-card p-4 text-sm transition hover:border-accent hover:text-accent";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk about AI / ML roles">
      <Reveal>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          I'm looking for opportunities building and evaluating AI systems. The quickest way to reach me is email.
        </p>
        <a href={`mailto:${profile.email}`} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-bg transition hover:opacity-90">
          <Mail /> {profile.email}
        </a>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a href={`tel:${profile.phoneHref}`} className={item}><Phone /> {profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={item}><Linkedin /> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={item}><Github /> GitHub</a>
          <div className={item.replace(/hover:\S+/g, "")}><Pin /> {profile.location}</div>
        </div>
      </Reveal>
    </Section>
  );
}
