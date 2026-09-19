import { growth } from "@/content/profile";
import { Section, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function Growth() {
  return (
    <Section id="growth" className="bg-canvas-raised">
      <SectionHeading
        eyebrow="Levelling up"
        title="Where I'm deliberately getting better at UX."
        lead={growth.intro}
      />

      <div className="mt-16 divide-y divide-line border-t border-line">
        {growth.items.map((item, i) => (
          <Reveal
            key={item.area}
            delay={i * 40}
            className="grid gap-4 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[11px] text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl leading-tight tracking-tight">
                {item.area}
              </h3>
            </div>
            <p className="text-[15px] leading-relaxed text-ink-soft">{item.why}</p>
            <p className="text-[15px] leading-relaxed">{item.doing}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
