import { skillGroups, softSkills, tools } from "@/content/profile";
import { Section, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Research, structure, and systems — not just the pixels at the end."
        lead="Grouped by the stage of work they belong to, so you can see where I'm strongest and where I lean on the team."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.name}
            delay={i * 50}
            className="bg-canvas-raised p-7 md:p-8"
          >
            <h3 className="font-display text-xl tracking-tight">{group.name}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-canvas px-2.5 py-1.5 text-[13px] leading-snug text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal
          delay={250}
          className="flex flex-col justify-between gap-8 bg-canvas-raised p-7 md:p-8"
        >
          <div>
            <h3 className="font-display text-xl tracking-tight">Tools</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-lg border border-accent/25 bg-accent-soft/60 px-2.5 py-1.5 text-[13px] text-ink"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Ways of working</p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
              {softSkills.join(" · ")}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
