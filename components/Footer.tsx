import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 text-canvas/45 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-canvas/10 pt-8 font-mono text-[11px] uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location} · Available worldwide, remote</p>
        <a href="#top" className="transition-colors hover:text-canvas">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
