import { profile, snapshot } from "@/data/portfolio";
import { Arrow, Download } from "./Icons";
import Reveal from "./Reveal";

function Row({ k, v }: { k: string; v: string | string[] }) {
  const items = Array.isArray(v) ? v : [v];
  return (
    <div className="sm:grid sm:grid-cols-[6.5rem_1fr] sm:gap-x-2">
      <span className="text-muted">{k}:</span>
      <span className="flex flex-wrap gap-x-2 text-accent">
        {items.map((item) => (
          <span key={item} className="whitespace-nowrap">&quot;{item}&quot;</span>
        ))}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {profile.availability}
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 font-mono text-sm text-accent sm:text-base">{profile.title}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{profile.positioning}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90">
              View projects <Arrow />
            </a>
            <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent">
              Résumé <Download />
            </a>
            <a href="#research" className="inline-flex items-center rounded-lg px-3 py-2.5 text-sm text-muted transition hover:text-fg">
              Research
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-xl border border-line bg-card shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 font-mono text-xs text-muted">snapshot.json</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
              <Row k="focus" v={snapshot.focus} />
              <Row k="research" v={snapshot.research} />
              <Row k="builds_with" v={snapshot.builds_with} />
              <Row k="papers" v={snapshot.papers} />
              <Row k="status" v={snapshot.status} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
