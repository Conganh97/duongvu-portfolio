import { projects, visualWork, profile } from "@/content/profile";
import { Section, SectionHeading } from "./Section";
import Reveal from "./Reveal";

const featured = projects.filter((p) => p.featured);
const additional = projects.filter((p) => !p.featured);

export default function Work() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected work"
        title="Five case studies, written as problems rather than screenshots."
        lead="Each one starts with what was actually going wrong, what I did about it, and where it landed. The full visual case studies live on Notion."
      />

      <div className="mt-16 space-y-6">
        {featured.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={i * 60}
            className="group relative overflow-hidden rounded-3xl border border-line bg-canvas-raised transition-colors hover:border-ink/25"
          >
            <div className="grid gap-8 p-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-12 md:p-10">
              {/* Left rail: identity */}
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-ink-muted">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-3 text-[15px] leading-relaxed font-medium text-ink-soft">
                  {project.subtitle}
                </p>

                <dl className="mt-7 space-y-2.5 font-mono text-[12px]">
                  <div className="flex gap-3">
                    <dt className="w-14 shrink-0 text-ink-muted">Client</dt>
                    <dd className="text-ink-soft">{project.client}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-14 shrink-0 text-ink-muted">Year</dt>
                    <dd className="text-ink-soft">{project.year}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-14 shrink-0 text-ink-muted">Role</dt>
                    <dd className="text-ink-soft">{project.role}</dd>
                  </div>
                </dl>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-[12px] text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent"
                >
                  <span className="border-b border-accent/30 pb-0.5 transition-colors group-hover:border-accent">
                    View case study
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>

              {/* Right: the narrative */}
              <div className="space-y-6 md:border-l md:border-line md:pl-12">
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {project.context}
                </p>

                <div>
                  <p className="eyebrow">The problem</p>
                  <p className="mt-2.5 text-[15px] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <p className="eyebrow">What I did</p>
                  <ul className="mt-3 space-y-2.5">
                    {project.approach.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                      >
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-teal-soft/70 p-5">
                  <p className="eyebrow text-teal/70">Outcome</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-teal">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Additional product work + visual explorations */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {additional.map((project) => (
          <Reveal
            key={project.slug}
            className="rounded-3xl border border-line p-7 transition-colors hover:border-ink/25"
          >
            <p className="eyebrow">
              {project.year} · {project.client}
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {project.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {project.problem}
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-medium text-accent"
            >
              View case study ↗
            </a>
          </Reveal>
        ))}

        <Reveal className="rounded-3xl border border-line bg-canvas-raised p-7">
          <p className="eyebrow">Also in the portfolio</p>
          <h3 className="mt-3 font-display text-2xl tracking-tight">
            Visual & brand explorations
          </h3>
          <ul className="mt-5 divide-y divide-line">
            {visualWork.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-accent"
                >
                  <span className="text-[15px] font-medium">{item.title}</span>
                  <span className="hidden font-mono text-[11px] text-ink-muted sm:block">
                    {item.tags.join(" · ")}
                  </span>
                  <span
                    aria-hidden
                    className="text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.links.dribbble}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm font-medium text-accent"
          >
            More shots on Dribbble ↗
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
