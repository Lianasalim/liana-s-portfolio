import { experience } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import Chip from "./Chip";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((j) => (
          <li key={j.org + j.period} className="relative">
            <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" />
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {j.role} <span className="text-muted">· {j.org}</span>
                </h3>
                <p className="font-mono text-xs text-muted">{j.period} · {j.location}</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
                {j.points.map((p) => (
                  <li key={p} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />{p}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">{j.tags.map((t) => (<Chip key={t}>{t}</Chip>))}</div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
