import { principles, process } from "@/content/profile";
import { Section, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <Section id="process" className="bg-canvas-raised">
      <SectionHeading
        eyebrow="How I work"
        title="A process built for products where being wrong is expensive."
        lead="I don't run all six stages on every ticket. But on anything with real workflow complexity, skipping the first three is how teams end up redesigning the same screen twice."
      />

      <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {process.map((stage, i) => (
          <Reveal
            as="li"
            key={stage.step}
            delay={i * 50}
            className="flex flex-col bg-canvas p-7 md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-accent">{stage.step}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                {stage.artifact}
              </span>
            </div>

            <h3 className="mt-5 font-display text-2xl tracking-tight">
              {stage.name}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {stage.intent}
            </p>

            <ul className="mt-6 space-y-2 border-t border-line pt-5">
              {stage.methods.map((method) => (
                <li
                  key={method}
                  className="flex gap-2.5 text-[13.5px] leading-snug text-ink-soft"
                >
                  <span aria-hidden className="text-ink-muted">
                    —
                  </span>
                  {method}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>

      <div className="mt-20">
        <Reveal>
          <p className="eyebrow">Principles I keep coming back to</p>
        </Reveal>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-x-16">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className="border-t border-ink/15 pt-6">
              <h3 className="font-display text-2xl leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
