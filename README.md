# Vu Thuy Duong — UI/UX Portfolio Landing Page

Single-page portfolio positioning Vu Thuy Duong for **Middle UI/UX Designer** roles, with an
emphasis on UX depth: research methods, information architecture, process, and measurable outcomes
rather than screenshots alone.

**Live:** https://duongvu-portfolio.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with a custom theme defined in `app/globals.css`
- `next/font` (Inter, Instrument Serif, JetBrains Mono)
- Zero runtime animation dependencies — scroll reveals use `IntersectionObserver`
- Fully static output, deployed on [Vercel](https://vercel.com)

## Structure

```
app/
  layout.tsx      fonts, SEO metadata, Person JSON-LD
  page.tsx        section composition
  globals.css     design tokens + base/component layers
  sitemap.ts      /sitemap.xml
  robots.ts       /robots.txt
components/
  Nav  Hero  Work  Process  Skills  Growth  About  Contact  Footer
  Reveal.tsx      IntersectionObserver scroll-reveal primitive
  Section.tsx     shared section shell + heading
content/
  profile.ts      ALL copy and data lives here
```

## Editing content

Everything on the page is driven by `content/profile.ts` — no copy is hardcoded in components.
Update the relevant export and the page follows:

| Export | Controls |
| --- | --- |
| `site` | canonical URL, `<title>`, meta description |
| `profile` | name, headline, bio, contact details, external links |
| `stats`, `credibility` | hero metrics and the logo marquee |
| `projects`, `visualWork` | case studies (`featured: true` renders the long-form card) |
| `process`, `principles` | the "How I work" section |
| `skillGroups`, `softSkills`, `tools` | capabilities grid |
| `growth` | "Levelling up" — UX areas being deepened |
| `experience`, `education`, `languages` | About sidebar and timeline |
| `nav` | header navigation |

After changing the deployed domain, update `site.url` so canonical URLs, Open Graph tags, and
`sitemap.xml` stay correct.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deployment

Connected to Vercel with CI/CD on the `main` branch:

- push to `main` → production deploy
- any other branch or pull request → preview deploy with its own URL

## Accessibility notes

- Semantic landmarks, a skip link, and visible `:focus-visible` outlines
- Colour pairings target WCAG 2.1 AA contrast
- All motion is disabled under `prefers-reduced-motion: reduce`
