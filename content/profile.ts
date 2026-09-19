export const site = {
  url: "https://duongvu-portfolio.vercel.app",
  title: "Vu Thuy Duong — Middle UI/UX Designer",
  description:
    "Middle UI/UX Designer with 3+ years designing enterprise and B2B SaaS products. I turn complex, high-stakes workflows into interfaces people can use without training.",
};

export const profile = {
  name: "Vu Thuy Duong",
  role: "Middle UI/UX Designer",
  availability: "Open to Middle UI/UX Designer roles",
  headline: "I design enterprise products that make complex workflows feel obvious.",
  subheadline:
    "3+ years of end-to-end product design for B2B SaaS and government-grade systems — from product discovery and user research through information architecture, high-fidelity UI, and design systems.",
  bio: [
    "I'm a UI/UX Designer based in Hanoi, currently at BKC Labs designing document management and digital signature platforms that are deployed in real universities and hospitals. That context shaped how I work: when a user is approving a legal document or signing a diploma, a confusing screen isn't a bad experience — it's a risk.",
    "So I spend most of my energy on the unglamorous parts of UX. Mapping the real approval chain instead of the happy path. Naming things the way the people in the room actually name them. Designing the empty, loading, partial, expired, and rejected states, not just the one in the portfolio shot.",
    "Before product, I led a marketing team at CodeGym Vietnam, where I built landing pages and campaigns and learned to read behaviour data. It's why I still think about funnels, drop-off, and the words on a button as design problems.",
  ],
  location: "Hanoi, Vietnam",
  email: "duongduongvu511@gmail.com",
  phone: "+84 332 572 695",
  phoneHref: "+84332572695",
  links: {
    dribbble: "https://dribbble.com/DuongVU0511",
    portfolio:
      "https://duong-thuy-vu.notion.site/Vu-Thuy-Duong-592e4cc172a24f049142a258b3b749b4",
    resume:
      "https://duong-thuy-vu.notion.site/Resume-4032e55beede4fac893b6fb079c82741",
  },
};

export const stats = [
  { value: "3+", label: "Years in product design", note: "Web & mobile, enterprise focus" },
  { value: "8", label: "Projects in portfolio", note: "5 product case studies" },
  { value: "2", label: "Regulated sectors shipped to", note: "Higher education & healthcare" },
  { value: "6", label: "UX certifications", note: "Google UX, AVLABS, Capi Demy" },
];

export const credibility = [
  "BKC Labs",
  "CodeGym Vietnam",
  "Hanoi University of Science & Technology",
  "Google UX Design · Coursera",
  "AVLABS",
  "Capi Demy",
  "The Designership",
];

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  tags: string[];
  featured: boolean;
  role: string;
  context: string;
  problem: string;
  approach: string[];
  outcome: string;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "ediploma",
    title: "eDiploma",
    subtitle: "Issuing & verifying digital certificates at institutional scale",
    client: "Hanoi University of Science & Technology",
    year: "2024",
    tags: ["Web App", "UX Design", "UI Design", "Design System"],
    featured: true,
    role: "UI/UX Designer — end-to-end, at BKC Labs",
    context:
      "A blockchain-backed web platform that lets institutions digitally sign diplomas in bulk and lets any employer verify one in seconds.",
    problem:
      "Vietnam detects an estimated 5,000–7,000 forged diplomas every year. The traditional process fails on four fronts at once: verification is manual and slow, paper credentials are forgeable, printing and archiving is expensive, and employers are left waiting mid-hire.",
    approach: [
      "Mapped the real issuance chain with registrar staff to find where documents actually stall — the handoffs, not the screens.",
      "Split the product into two distinct jobs with two distinct flows: bulk signing for institutions, and zero-friction single-lookup for verifiers who will use it once and never return.",
      "Built the site map and user flows first, then designed for batch operations: multi-select, progress feedback on long-running signing jobs, and recoverable partial failures.",
      "Standardised a design system on a blue-and-white palette chosen for institutional trust, with type and components held to accessibility contrast standards.",
    ],
    outcome:
      "Shipped and deployed in production for a national-tier university, replacing a paper-and-email verification loop with a self-serve one.",
    href: "https://duong-thuy-vu.notion.site/eDiploma-Verifying-Digital-Certificates-Web-App-1ad8299162ee80448891ca7e2168dce4",
  },
  {
    slug: "vssid",
    title: "VSSID Redesign",
    subtitle: "Making national social insurance legible to the people who need it",
    client: "Self-directed UX case study",
    year: "2025",
    tags: ["UX Research", "Mobile App", "IA", "Usability Testing"],
    featured: true,
    role: "Solo — research through high-fidelity UI",
    context:
      "VSSID is Vietnam's official social insurance app. Millions depend on it for benefit records, yet it's built around bureaucratic structure rather than around what a citizen came to do.",
    problem:
      "The app asks users to already understand insurance administration. Navigation mirrors the org chart, labels use policy vocabulary, and the tasks people actually arrive with — check my contribution history, claim a benefit, show my card — are buried several layers deep.",
    approach: [
      "Ran a heuristic evaluation against Nielsen's ten usability heuristics and mined public app-store reviews to find where real frustration clusters.",
      "Interviewed users across age and digital-confidence levels, because the hardest constraint here is a first-time smartphone user, not a power user.",
      "Rebuilt the information architecture around user intent instead of departmental structure, validating the new grouping with card sorting.",
      "Rewrote labels into plain Vietnamese, then tested the redesigned task flows to confirm people could finish core tasks unaided.",
    ],
    outcome:
      "A restructured IA and redesigned core flows that cut the path to the three most-wanted tasks down to the first screen.",
    href: "https://duong-thuy-vu.notion.site/VSSID-Vietnam-Social-Security-App-Redesign-2298299162ee80d4bcddd79ca5af56af",
  },
  {
    slug: "xanhgo",
    title: "XanhGO",
    subtitle: "Public transport navigation for riders who don't trust the timetable",
    client: "Team project — Capi Demy UI Design course",
    year: "2025",
    tags: ["Mobile App", "UX Design", "UI Design"],
    featured: true,
    role: "UX & UI Designer in a small team",
    context:
      "A navigation app for Hanoi's bus and metro network, aimed at commuters who default to a motorbike because public transport feels unpredictable.",
    problem:
      "Route planning isn't the hard part — confidence is. Riders need to know when to leave, which door to stand at, and what happens when they miss the connection.",
    approach: [
      "Framed the design around the moment of doubt at the stop rather than the search box, so the interface leads with live arrival and next-step guidance.",
      "Designed route comparison that surfaces walking distance and transfer count up front, since those are what actually kill a trip.",
      "Kept the map legible at a glance with a restrained colour system and high-contrast route lines for outdoor daylight use.",
    ],
    outcome:
      "A full mobile flow and UI kit covering search, comparison, live tracking, and in-trip guidance.",
    href: "https://duong-thuy-vu.notion.site/XanhGO-Public-Transport-Navigation-App-1dd8299162ee80d08289e5e289183257",
  },
  {
    slug: "calowise",
    title: "CaloWise",
    subtitle: "A calorie tracker built around the reason people quit trackers",
    client: "Personal project",
    year: "2023",
    tags: ["Mobile App", "UX Design", "UI Design"],
    featured: true,
    role: "Solo — concept to high-fidelity UI",
    context:
      "A daily calorie tracking and advisory app for people trying to build a sustainable eating habit rather than crash-diet.",
    problem:
      "Logging food is a chore that compounds: the friction is small each time but repeats three times a day, and one missed day is usually where the habit ends.",
    approach: [
      "Optimised the logging loop above everything else — fewest taps from open to logged, with recents and repeat-meal shortcuts.",
      "Designed progress feedback to be encouraging rather than punitive, so a bad day doesn't read as failure and trigger abandonment.",
      "Paired raw numbers with plain-language advice, because a calorie figure alone doesn't tell someone what to do next.",
    ],
    outcome:
      "A complete product concept: onboarding, daily logging, insight dashboard, and advisory layer.",
    href: "https://duong-thuy-vu.notion.site/CaloWise-Daily-Calorie-Tracker-Advisor-App-1ad8299162ee8099896bfc1af9df73ca",
  },
  {
    slug: "powerpoint-reader",
    title: "Powerpoint Reader",
    subtitle: "Reading and presenting slide decks on a phone-sized screen",
    client: "Lucas — Amazing Mobile App",
    year: "2025",
    tags: ["Mobile App", "UI Design", "UI/UX"],
    featured: false,
    role: "UI/UX Designer — client engagement",
    context:
      "A mobile document app for opening, reading, and presenting slide decks away from a desktop.",
    problem:
      "Slides are authored for a projector and consumed on a 6-inch screen. Everything about the default layout fights the device.",
    approach: [
      "Designed a reading mode that prioritises slide content over faithful layout reproduction.",
      "Built file management and navigation patterns that hold up as a user's library grows.",
    ],
    outcome: "Delivered UI design across browsing, reading, and presenting flows.",
    href: "https://duong-thuy-vu.notion.site/Powerpoint-Reader-Mobile-App-Design-3298299162ee80c385aefd82d8b9d32e",
  },
];

export const visualWork = [
  {
    title: "Animal Logo Design",
    tags: ["Icon design", "Brand"],
    href: "https://duong-thuy-vu.notion.site/Animal-Logo-Design-3378299162ee80339081e44d53fba4a2",
  },
  {
    title: "Hero Banner",
    tags: ["UI/UX", "Brand"],
    href: "https://duong-thuy-vu.notion.site/Hero-Banner-989ffc33a9ce4225a1a71325c14ddd6d",
  },
  {
    title: "Glassmorphism Design",
    tags: ["Graphic design"],
    href: "https://duong-thuy-vu.notion.site/Glassmorphism-design-c69bb7d99c93412ebec0f39143f47ed2",
  },
];

export const process = [
  {
    step: "01",
    name: "Discover",
    intent: "Understand the work before touching the interface.",
    methods: [
      "Stakeholder & SME interviews",
      "User interviews",
      "Competitive & heuristic audit",
      "Analytics and support-ticket review",
    ],
    artifact: "Research synthesis",
  },
  {
    step: "02",
    name: "Define",
    intent: "Turn scattered findings into one problem worth solving.",
    methods: [
      "Affinity mapping",
      "Personas & jobs-to-be-done",
      "Current-state journey map",
      "Problem statement & success metrics",
    ],
    artifact: "Design brief",
  },
  {
    step: "03",
    name: "Structure",
    intent: "Get the architecture right while it's still cheap to change.",
    methods: [
      "Task analysis",
      "Information architecture & site map",
      "Card sorting and tree testing",
      "User & system flows",
    ],
    artifact: "IA + flow diagrams",
  },
  {
    step: "04",
    name: "Design",
    intent: "Make it concrete, consistent, and complete.",
    methods: [
      "Lo-fi wireframes",
      "High-fidelity UI",
      "Design tokens & component library",
      "Every state: empty, loading, error, edge case",
    ],
    artifact: "Figma system + prototype",
  },
  {
    step: "05",
    name: "Validate",
    intent: "Let real users break it before production does.",
    methods: [
      "Moderated usability testing",
      "Task success & time-on-task",
      "Accessibility check (WCAG 2.1 AA)",
      "Iterate on findings",
    ],
    artifact: "Test report & revisions",
  },
  {
    step: "06",
    name: "Ship & learn",
    intent: "The handoff is part of the design, not the end of it.",
    methods: [
      "Dev handoff & specs",
      "Design QA on staging",
      "Post-release feedback loop",
      "System maintenance",
    ],
    artifact: "Living design system",
  },
];

export const principles = [
  {
    title: "Design the exception, not the demo",
    body: "Enterprise work lives in the edge cases. A flow that only works when every field is valid isn't finished — it's a screenshot.",
  },
  {
    title: "Borrow the user's vocabulary",
    body: "If the label doesn't match what people call it out loud, the interface is asking them to translate before they can act.",
  },
  {
    title: "Structure beats styling",
    body: "Most usability problems I find are architecture problems wearing a visual costume. Fixing the hierarchy is cheaper than polishing the wrong one.",
  },
  {
    title: "Consistency is a feature",
    body: "A design system isn't housekeeping. It's how a small team ships a coherent product faster than a big one ships a fragmented one.",
  },
];

export const skillGroups = [
  {
    name: "UX Research",
    items: [
      "Stakeholder & user interviews",
      "Contextual inquiry",
      "Heuristic evaluation",
      "Competitive analysis",
      "Survey design",
      "Usability testing (moderated)",
      "Research synthesis & affinity mapping",
    ],
  },
  {
    name: "Product & Strategy",
    items: [
      "Problem framing",
      "Jobs-to-be-done",
      "Personas & journey mapping",
      "Requirement translation with BA/PO",
      "Prioritisation & scoping",
      "Success metric definition",
    ],
  },
  {
    name: "Architecture & Interaction",
    items: [
      "Information architecture",
      "Site maps & user flows",
      "Card sorting & tree testing",
      "Task & state modelling",
      "Error prevention & recovery",
      "Complex forms & data tables",
    ],
  },
  {
    name: "UI & Systems",
    items: [
      "High-fidelity UI design",
      "Design systems & tokens",
      "Component libraries & variants",
      "Responsive & mobile design",
      "Interactive prototyping",
      "Accessibility (WCAG 2.1 AA)",
      "Visual & brand design",
    ],
  },
  {
    name: "Delivery",
    items: [
      "Dev handoff & specs",
      "Design QA",
      "Cross-functional collaboration",
      "Agile / Scrum rituals",
      "Design critique & documentation",
    ],
  },
];

export const softSkills = [
  "Critical thinking",
  "Product thinking",
  "Empathy",
  "Teamwork",
  "Adaptability",
  "Clear communication",
];

export const tools = [
  "Figma",
  "FigJam",
  "Photoshop",
  "Illustrator",
  "Webflow",
  "Notion",
  "Canva",
];

export const growth = {
  intro:
    "Middle is the level where craft stops being the bottleneck and evidence starts being one. These are the areas I'm deliberately deepening right now.",
  items: [
    {
      area: "Quantitative UX",
      why: "So I can argue for a design with numbers, not only with a story.",
      doing:
        "Learning the HEART framework and funnel analysis, and defining measurable success criteria before design starts rather than after launch.",
    },
    {
      area: "Research at scale",
      why: "Moderated sessions don't scale past a handful of users.",
      doing:
        "Moving toward unmoderated testing and structured benchmark studies so findings hold up beyond five interviews.",
    },
    {
      area: "Accessibility",
      why: "Public-sector and healthcare products make this non-negotiable.",
      doing:
        "Working from WCAG 2.1 AA toward 2.2, and testing flows with keyboard and screen reader instead of assuming compliance from contrast alone.",
    },
    {
      area: "UX writing",
      why: "In enterprise software the copy usually is the interface.",
      doing:
        "Treating microcopy, error messages, and empty states as design deliverables with their own review pass.",
    },
    {
      area: "Design Ops",
      why: "A system nobody governs drifts back into inconsistency.",
      doing:
        "Building contribution rules, versioning, and adoption tracking into the systems I own.",
    },
    {
      area: "Facilitation",
      why: "The biggest leverage at middle level is getting the team to decide well.",
      doing:
        "Running discovery workshops and design critiques so decisions are shared instead of handed over.",
    },
  ],
};

export const experience = [
  {
    role: "UI/UX Designer",
    company: "BKC Labs",
    meta: "Technology & IT solutions",
    period: "2024 — Present",
    summary:
      "Own end-to-end design for document management and digital signature products used by universities and hospitals.",
    points: [
      "Design responsive web and mobile applications for document management and digital signature solutions, with usability and throughput as the primary goals.",
      "Build and maintain the reusable component library and design guidelines that keep products consistent as the team ships.",
      "Produce user flows, wireframes, prototypes, and high-fidelity interfaces for complex enterprise workflows — improving task clarity and reducing user error.",
      "Work directly with developers and stakeholders to translate business requirements into feasible, scalable design solutions.",
      "Run user research and usability improvements that cut processing time in document approval workflows.",
      "Ship UI/UX for systems in real production use, improving document management, approval chains, and digital signing.",
    ],
  },
  {
    role: "Marketing Team Leader",
    company: "CodeGym Vietnam JSC",
    meta: "Educational technology",
    period: "2021 — 2023",
    summary:
      "Led a cross-functional team across design, content, and campaign strategy for user acquisition.",
    points: [
      "Led cross-functional marketing initiatives combining design, content, and product strategy to drive acquisition and engagement.",
      "Designed landing pages, campaign visuals, and digital assets with a focus on visual hierarchy, user behaviour, and conversion.",
      "Bridged marketing and product teams to keep the experience consistent from ad to app.",
      "Used performance data to refine messaging, visuals, and user journeys.",
      "Managed team operations and delivery quality across concurrent campaigns.",
    ],
  },
];

export const education = {
  courses: [
    { name: "Google UX Design", org: "Coursera" },
    { name: "Foundation of User Experience Design", org: "AVLABS" },
    { name: "Advanced: UX Design Process at Work", org: "AVLABS" },
    { name: "UI Design", org: "Capi Demy" },
    { name: "Mobile App & Web Design", org: "Capi Demy" },
    { name: "The Ultimate Figma & UI Master Class", org: "The Designership" },
  ],
  degree: {
    name: "Bachelor of Finance and Banking",
    org: "Academy of Finance",
  },
};

export const languages = [
  { name: "Vietnamese", level: "Native" },
  {
    name: "English",
    level: "Basic working proficiency",
    note: "Comfortable reading technical and design documentation",
  },
  { name: "Korean", level: "Basic reading comprehension" },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Skills", href: "#skills" },
  { label: "Growth", href: "#growth" },
  { label: "About", href: "#about" },
];
