
import Image from "next/image";
import { profile, snapshot } from "@/data/portfolio";
import { Arrow, Download } from "./Icons";
import Reveal from "./Reveal";

function Row({ k, v }: { k: string; v: string | string[] }) {
  const items = Array.isArray(v) ? v : [v];

  return (
    <div className="grid min-w-0 grid-cols-[100px_minmax(0,1fr)] items-start gap-x-3">
      <span className="break-words text-xs text-muted">
        {k}:
      </span>

      <div className="min-w-0 space-y-1 font-mono text-xs leading-relaxed text-accent">
        {items.map((item) => (
          <div
            key={item}
            className="min-w-0 break-words [overflow-wrap:anywhere]"
          >
            &quot;{item}&quot;
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-grid"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-x-12 gap-y-10 px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-y-12">
        {/* Portrait: first row, first column */}
        <Reveal>
          <div className="mx-auto w-full max-w-[260px]">
            <div className="overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-lg">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-200">
                
<Image
  src={`${process.env.NODE_ENV === "production" ? "/liana-s-portfolio" : ""}/liana-portfolio.png`}
  alt="Liana S — professional portfolio portrait"
  fill
  priority
  unoptimized
  sizes="(max-width: 1024px) 85vw, 260px"
  className="object-cover object-center"
/>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Personal details: first row, second column */}
        <Reveal delay={100}>
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.availability}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-3 font-mono text-sm leading-relaxed text-accent sm:text-base">
              {profile.title}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {profile.positioning}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg transition hover:opacity-90"
              >
                View projects <Arrow />
              </a>

              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
              >
                Résumé <Download />
              </a>

              <a
                href="#research"
                className="inline-flex items-center rounded-lg px-3 py-3 text-sm text-muted transition hover:text-fg"
              >
                Research
              </a>
            </div>
          </div>
        </Reveal>

        {/* Snapshot: second row, full width */}
        <div className="min-w-0 w-full lg:col-span-2">
          <Reveal delay={150}>
            
<div className="group w-full min-w-0 overflow-hidden rounded-2xl border border-line bg-card/90 shadow-lg shadow-black/10 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
  {/* Editor header */}
  <div className="flex items-center justify-between border-b border-line bg-card px-5 py-4">
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
    </div>

    <span className="font-mono text-xs tracking-wide text-muted">
      snapshot.json
    </span>

    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-accent">
      PROFILE
    </span>
  </div>

  {/* Snapshot content */}
  <div className="grid min-w-0 grid-cols-1 gap-x-10 gap-y-6 p-5 sm:grid-cols-2 xl:grid-cols-3 sm:p-6">
    <Row k="focus" v={snapshot.focus} />
    <Row k="research" v={snapshot.research} />
    <Row k="builds_with" v={snapshot.builds_with} />
    <Row k="papers" v={snapshot.papers} />
    <Row k="status" v={snapshot.status} />
  </div>

  {/* Footer */}
  <div className="flex items-center justify-between border-t border-line px-5 py-3">
    <span className="font-mono text-[10px] text-muted">
      DATA SCIENCE · AI RESEARCH
    </span>
    <span className="flex items-center gap-2 font-mono text-[10px] text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      AVAILABLE
    </span>
  </div>
</div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
