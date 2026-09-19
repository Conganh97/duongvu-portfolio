import { credibility, profile, stats } from "@/content/profile";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <div id="top" className="grain relative overflow-hidden">
      {/* Soft radial wash behind the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent-soft), transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <Reveal className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            {profile.availability}
          </span>
        </Reveal>

        <Reveal
          as="h1"
          delay={80}
          className="mt-8 max-w-4xl font-display text-[2.75rem] leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-[4.75rem]"
        >
          {profile.headline}
        </Reveal>

        <Reveal delay={160} className="mt-8 grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            {profile.subheadline}
          </p>

          <dl className="space-y-3 self-end font-mono text-[13px]">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-muted">Name</dt>
              <dd>{profile.name}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-muted">Role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-muted">Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-muted">Focus</dt>
              <dd>Enterprise / B2B SaaS</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={240} className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-canvas transition-colors hover:bg-accent"
          >
            View selected work
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Read full résumé ↗
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink-soft underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal
          delay={320}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug">{stat.label}</p>
              <p className="mt-1 text-[13px] leading-snug text-ink-muted">
                {stat.note}
              </p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Credibility marquee */}
      <div className="border-y border-line bg-canvas-raised py-4">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
            {[...credibility, ...credibility].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-10 font-mono text-[11px] uppercase tracking-[0.16em] whitespace-nowrap text-ink-muted"
              >
                {item}
                <span aria-hidden className="text-accent">
                  ✳
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
