"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/content/profile";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight">
            {profile.name}
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted sm:inline">
            UI/UX
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-canvas px-6 pb-6 pt-2 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-base text-ink-soft"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas"
          >
            Get in touch
          </a>
        </div>
      ) : null}
    </header>
  );
}
