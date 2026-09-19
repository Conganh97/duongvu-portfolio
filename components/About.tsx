import { education, experience, languages, profile } from "@/content/profile";
import { Section, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Finance degree, marketing detour, product design home."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <Reveal className="space-y-5">
            {profile.bio.map((para) => (
              <p key={para.slice(0, 24)} className="text-[17px] leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </Reveal>

          <div className="mt-14">
            <Reveal>
              <p className="eyebrow">Experience</p>
            </Reveal>

            <div className="mt-8 space-y-12">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 60} className="relative pl-6">
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent"
                  />
                  <span
                    aria-hidden
                    className="absolute left-[3.5px] top-6 h-[calc(100%-1rem)] w-px bg-line"
                  />

                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-[15px] text-ink-soft">
                    {job.company}{" "}
                    <span className="text-ink-muted">· {job.meta}</span>
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed font-medium">
                    {job.summary}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[14.5px] leading-relaxed text-ink-soft"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <Reveal className="rounded-3xl border border-line bg-canvas-raised p-7">
            <p className="eyebrow">Education & training</p>
            <ul className="mt-5 divide-y divide-line">
              {education.courses.map((course) => (
                <li key={course.name} className="py-3">
                  <p className="text-[14.5px] font-medium leading-snug">
                    {course.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-ink-muted">{course.org}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-ink/15 pt-5">
              <p className="text-[14.5px] font-medium leading-snug">
                {education.degree.name}
              </p>
              <p className="mt-0.5 text-[13px] text-ink-muted">
                {education.degree.org}
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="rounded-3xl border border-line p-7">
            <p className="eyebrow">Languages</p>
            <ul className="mt-5 space-y-4">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-[14.5px] font-medium">{lang.name}</p>
                    <p className="text-[13px] text-ink-muted">{lang.level}</p>
                  </div>
                  {lang.note ? (
                    <p className="mt-1 text-[13px] leading-snug text-ink-muted">
                      {lang.note}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </Section>
  );
}
