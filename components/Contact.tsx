import { profile } from "@/content/profile";
import Reveal from "./Reveal";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { label: "Dribbble", value: "@DuongVU0511", href: profile.links.dribbble },
  { label: "Portfolio", value: "Notion case studies", href: profile.links.portfolio },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="grain relative scroll-mt-20 overflow-hidden border-t border-line bg-ink px-6 py-24 text-canvas md:px-10 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-60 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--color-accent), transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="eyebrow text-canvas/50">Contact</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.06] tracking-tight text-balance md:text-6xl">
            Looking for a middle UI/UX designer who starts with the workflow?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-canvas/70">
            I&apos;m open to middle UI/UX roles working on enterprise or B2B SaaS
            products. Send over the problem you&apos;re stuck on and I&apos;ll tell
            you how I&apos;d approach it.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-canvas px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-canvas"
          >
            Email me
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-canvas/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-canvas"
          >
            Full résumé ↗
          </a>
        </Reveal>

        <Reveal
          delay={180}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-canvas/15 sm:grid-cols-2 lg:grid-cols-4"
        >
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              className="bg-ink p-6 transition-colors hover:bg-canvas/5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-canvas/45">
                {channel.label}
              </p>
              <p className="mt-2.5 text-[15px] break-words">{channel.value}</p>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
