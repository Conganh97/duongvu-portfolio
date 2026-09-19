import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-line px-6 py-20 md:px-10 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{lead}</p>
      ) : null}
    </Reveal>
  );
}
