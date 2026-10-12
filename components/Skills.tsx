import { skills } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import Chip from "./Chip";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical toolkit">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 3) * 80}>
            <div className="h-full rounded-xl border border-line bg-card p-5 transition hover:border-accent">
              <h3 className="text-sm font-semibold">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">{s.items.map((t) => (<Chip key={t}>{t}</Chip>))}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
