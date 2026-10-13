import { research } from "@/data/portfolio";
import Section from "./Section";
import Reveal from "./Reveal";
import Chip from "./Chip";
import { External } from "./Icons";

export default function Research() {
  return (
    <Section id="research" eyebrow="Research" title="Research & publications">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Interests</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {research.interests.map((i) => (
            <span key={i} className="rounded-full border border-line bg-card px-3 py-1 text-sm">{i}</span>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 space-y-4">
        {research.papers.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="rounded-xl border border-line bg-card p-6 transition duration-300 hover:border-accent">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-accent">{p.status}</span>
                <span className="font-mono text-[11px] text-muted">{p.venue}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {p.keywords.map((k) => (<Chip key={k}>{k}</Chip>))}
              </div>
              {p.href && (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                  View via DOI <External />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
