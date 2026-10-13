import { certifications, education } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & certifications">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-xl border border-line bg-card p-6">
            <p className="font-mono text-xs text-muted">{education.period}</p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">{education.degree}</h3>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-3 inline-block rounded-md border border-line px-2 py-0.5 font-mono text-xs text-accent">{education.note}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-xl border border-line bg-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">Certifications</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 border-b border-line pb-3 last:border-0 last:pb-0">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="text-muted">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
