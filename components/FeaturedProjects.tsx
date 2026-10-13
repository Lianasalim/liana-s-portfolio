import { featuredProjects, moreProjects } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import Chip from "./Chip";
import { External } from "./Icons";

export default function FeaturedProjects() {
  return (
    <Section id="projects" eyebrow="Featured work" title="Selected projects & case studies">
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100}>
            <article className="flex h-full flex-col rounded-xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent">
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                {p.status && <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">{p.status}</span>}
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h3>
              {p.metrics && (
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {p.metrics.map((m) => (
                    <li key={m.label} className="rounded-lg border border-line bg-bg px-3 py-2">
                      <p className="font-mono text-base font-semibold text-accent">{m.value}</p>
                      <p className="text-[11px] text-muted">{m.label}</p>
                    </li>
                  ))}
                </ul>
              )}
              <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                {([["Problem", p.problem], ["Solution", p.solution], ["My contribution", p.contribution], ["Outcome", p.outcome]] as const).map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-accent">{k}</dt>
                    <dd className="mt-0.5 text-muted">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-1.5">{p.tech.map((t) => (<Chip key={t}>{t}</Chip>))}</div>
              {p.link && (
                <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                  {p.link.label} <External />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">More projects</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {moreProjects.map((m) => (
            <div key={m.title} className="rounded-xl border border-line p-5 transition hover:border-accent">
              <h4 className="font-medium">{m.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">{m.tech.map((t) => (<Chip key={t}>{t}</Chip>))}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
