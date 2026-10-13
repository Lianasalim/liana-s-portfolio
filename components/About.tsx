import { about } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Evidence-driven data science and machine learning">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p) => (<p key={p}>{p}</p>))}
          <p className="font-mono text-sm">{about.languages}</p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="grid grid-cols-2 gap-3">
            {about.highlights.map((h) => (
              <li key={h.label} className="rounded-xl border border-line bg-card p-4 transition hover:border-accent">
                <p className="text-sm font-medium">{h.label}</p>
                <p className="mt-1 font-mono text-xs text-muted">{h.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
