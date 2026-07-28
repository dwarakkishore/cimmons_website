# SEO Implementation Context — Cimmons Integrated Services

> **Purpose of this file.** This is the single source of truth an implementation agent
> (or developer) follows to take the Cimmons website from "launched" to "ranking".
> It is written *for the codebase as it actually exists today* (Next.js 14 App Router,
> `output: "export"` static build, Tailwind). Every task below names the real file to
> touch. Do the work in the order given — technical foundation first, then content,
> then off-page. Do not skip the "How to write like a human" section: content that
> reads as AI-generated will not build the authority we need.

---

## 0. Business facts (canonical — never contradict these)

Use these exact values everywhere (metadata, JSON-LD, GBP, citations). Consistency of
Name/Address/Phone (NAP) across the web is a direct local-ranking factor.

| Field | Value |
|---|---|
| Legal name | Cimmons Integrated Services |
| Brand shown | Cimmons (site sometimes styles it "CIMMON" — **standardize to "Cimmons"** everywhere) |
| Primary domain | `https://www.cimmons.in` (confirm www vs non-www, then use ONE canonically) |
| Category | BPO / Call Center / ITES (IT-Enabled Services) |
| Tagline | Building Experiences Together |
| Address | Gokul Towers, 86/3, 2nd Floor, MS Ramaiah Rd, HMR Layout, Gokula Extension, Bengaluru, Karnataka 560054, India |
| Phone | +91 80 6926 1999 |
| Sales email | connect@cimmons.in |
| HR email | hr@cimmons.in |
| Founded | 2020 (footer: "© 2020–…") |
| Scale (for schema/proof) | 356+ employees, 14+ clients |
| Hours | Confirm with client (assume Mon–Sat, 24/7 operations for delivery) |
| LinkedIn | Company page URL — **get this from client** (personal profiles exist in `app/meet-team/page.tsx`) |

**Action:** The brand is inconsistent — `app/layout.tsx` says "CIMMON", the footer alt
says "CIMMONS". Pick **"Cimmons"** and do a global normalization pass. Search-engine
brand recognition depends on one spelling.

---

## 1. Keyword strategy

We are a **local-first B2B service business**. Buyers search two ways: by service
("call center outsourcing") and by place ("BPO company in Bangalore"). We win the local
+ mid-tail intersection first, then expand.

### 1a. Head / short-tail keywords (high volume, high competition — long game)
Target these on the **homepage** and **/services** only. Do not expect page-1 fast.

- `bpo services`
- `call center services`
- `outsourcing services`
- `customer support outsourcing`
- `inbound call center`
- `outbound call center`

### 1b. Money keywords — local + commercial intent (PRIMARY FOCUS, fastest ROI)
These are where a Bengaluru BPO can realistically rank in 3–6 months. Map one primary
per page (see §2).

- `bpo company in bangalore`
- `call center services in bangalore`
- `bpo services in bengaluru`
- `outsourcing company in bangalore`
- `customer support services india`
- `inbound call center services india`
- `outbound telemarketing services india`
- `24/7 call center services`
- `multilingual call center india`
- `back office outsourcing bangalore`

### 1c. Long-tail keywords (low volume each, low competition, high conversion → BLOG)
Each long-tail becomes a blog article (see §5). These add up and win featured snippets.

- `how much does it cost to outsource a call center in india`
- `inbound vs outbound call center difference`
- `benefits of outsourcing customer support for startups`
- `how to choose a bpo partner for ecommerce`
- `what is blended call center service`
- `bpo vs in-house customer support which is better`
- `24/7 customer support for saas companies`
- `hipaa compliant medical answering service india`
- `call center pricing models explained`
- `how to reduce customer support wait times`
- `best practices for ecommerce returns support`
- `lead qualification services for real estate agents`
- `non voice bpo services meaning`
- `outsource technical support tier 1 tier 2`

### 1d. Industry / vertical keywords (already have case studies for these — exploit them)
The site has case studies for Healthcare, Retail/E-commerce, Technology, Finance, Real
Estate, IT & SaaS (`lib/caseStudies.ts`). Each is a keyword cluster:

- `healthcare bpo services india`, `patient support outsourcing`
- `ecommerce customer support outsourcing`, `order management support`
- `saas customer support outsourcing`, `technical support outsourcing`
- `financial services bpo`, `fraud alert handling services`
- `real estate lead qualification services`

### 1e. Keyword research workflow (repeat quarterly)
1. Seed with the lists above.
2. Expand with free tools: **Google autocomplete**, **"People also ask"**,
   **"Searches related to"** at page bottom, **Google Search Console** (once live — the
   *Queries* report is the best free keyword source because it's YOUR real impressions).
3. Cross-check volume/difficulty in **Ahrefs / Semrush / Ubersuggest** (free tiers ok).
4. Prioritize by: `commercial intent × (search volume ÷ difficulty)`. A "bpo company in
   bangalore" at 200 searches beats "call center" at 40,000 for us.
5. Map every chosen keyword to ONE canonical URL (avoid two pages fighting for the same
   term — "keyword cannibalization"). Maintain the map in §2's table.

---

## 2. Page → keyword map (one primary keyword per URL)

| Page (file) | Primary keyword | Secondary keywords | Target title (≤60 chars) |
|---|---|---|---|
| `app/page.tsx` (home) | bpo & call center services india | outsourcing company bangalore, 24/7 support | Cimmons — BPO & Call Center Services in Bangalore, India |
| `app/services/page.tsx` | call center services | inbound, outbound, blended, non-voice bpo | Call Center Services — Inbound, Outbound & Non-Voice \| Cimmons |
| `app/industries/page.tsx` | bpo services by industry | healthcare, ecommerce, saas, finance bpo | Industries We Serve — BPO Solutions \| Cimmons |
| `app/about-us/page.tsx` | about cimmons bpo | iso certified call center, ites company | About Cimmons — ISO-Certified BPO in Bengaluru |
| `app/contact/page.tsx` | contact bpo company bangalore | call center bengaluru, get a quote | Contact Cimmons — BPO Company in Bengaluru |
| `app/careers/page.tsx` | bpo jobs bangalore | call center jobs bengaluru, customer care jobs | Careers at Cimmons — BPO & Call Center Jobs in Bangalore |
| `app/meet-team/page.tsx` | cimmons leadership team | — | Meet the Team \| Cimmons |
| `app/news/page.tsx` | bpo insights blog | call center tips, outsourcing guide | Insights & News — BPO & Customer Support \| Cimmons |
| `app/case-studies/[slug]` | `{industry} bpo case study` | per-industry (see §1d) | {Industry} Case Study — {result} \| Cimmons |

**Title rules:** primary keyword first, brand last, under ~60 chars, unique per page.
**Meta description rules:** 140–160 chars, include primary keyword + a reason to click
(a number, a benefit, or the CTA). Write these as human ad copy, never keyword-stuffed.

---

## 3. Technical SEO — foundation tasks (DO FIRST)

The site currently has titles/descriptions but is **missing every other technical
signal**. This section is the highest-leverage work. Note the constraint:
`next.config.mjs` uses `output: "export"` + `trailingSlash: true`, so we build static
HTML — use Next's **file-based metadata routes** (`app/sitemap.ts`, `app/robots.ts`) and
`generateStaticParams`, which all work under static export.

### 3.1 Add a `metadataBase` + defaults + templated titles
In `app/layout.tsx`, upgrade `metadata`:
```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://www.cimmons.in"),
  title: {
    default: "Cimmons — BPO & Call Center Services in Bangalore, India",
    template: "%s | Cimmons",
  },
  description:
    "Cimmons delivers 24/7 multilingual inbound, outbound and non-voice BPO services for healthcare, e-commerce, SaaS and finance. ISO-certified, Bengaluru-based.",
  applicationName: "Cimmons",
  keywords: ["BPO services", "call center Bangalore", "customer support outsourcing"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Cimmons",
    locale: "en_IN",
    url: "https://www.cimmons.in",
    images: [{ url: "/assets/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
```
Then in **each** page's metadata add `alternates: { canonical: "/services/" }` etc.
(match `trailingSlash`). For `case-studies/[slug]`, set the canonical inside
`generateMetadata`. **Every indexable URL needs a self-referencing canonical** — this is
the #1 fix.

**Create the OG image:** a 1200×630 PNG at `public/assets/img/og-default.png` with logo +
tagline. Per-page OG images are a nice-to-have later.

### 3.2 Sitemap — add `app/sitemap.ts`
```ts
import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/caseStudies";

const base = "https://www.cimmons.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "services", "sectors", "about-us", "contact",
                   "careers", "meet-team", "news"];
  const staticPages = routes.map((r) => ({
    url: `${base}/${r ? r + "/" : ""}`,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const caseStudyPages = CASE_STUDIES.map((c) => ({
    url: `${base}/case-studies/${c.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticPages, ...caseStudyPages];
}
```
This emits `/sitemap.xml` at build. As blog posts get added (§5), extend it.
(Avoid `lastModified: new Date()` — it changes every build for unchanged pages and can
mislead crawlers; only set `lastModified` when the page's content actually changed.)

### 3.3 Robots — add `app/robots.ts`
```ts
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.cimmons.in/sitemap.xml",
    host: "https://www.cimmons.in",
  };
}
```

### 3.4 Structured data (JSON-LD) — biggest visibility win after canonicals
Add a small helper component `components/JsonLd.tsx`:
```tsx
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```
Then inject the right schema per page:

- **Sitewide (in `app/layout.tsx` body):** `Organization` + `LocalBusiness`
  (subtype `ProfessionalService`) with the NAP from §0, `logo`, `sameAs`
  (LinkedIn etc.), `telephone`, `address` (PostalAddress), `openingHours`,
  `numberOfEmployees`. This is what powers the Knowledge Panel and local pack.
- **`/services` and each service block:** `Service` schema with `serviceType`,
  `provider` (ref Cimmons), `areaServed: "IN"`.
- **`/case-studies/[slug]`:** `Article` (or `CaseStudy`→ use `Article`) with headline,
  image, author=Cimmons, datePublished.
- **FAQ sections (home `components/Faq.tsx`, services page):** `FAQPage` schema built
  from the actual Q&A on the page — this earns rich-result FAQ dropdowns in SERPs.
- **Every page:** `BreadcrumbList` matching the visual breadcrumb.

Validate all of it with the **Rich Results Test** and **Schema Markup Validator** before
shipping. JSON-LD content must MATCH visible page content or it's a violation.

### 3.5 Fix broken internal links (currently hurting crawl + UX)
`components/Footer.tsx` — the "Company" (`USEFUL`) and "Services" (`QUICK`) lists all use
`href="#"`. Wire them to real URLs:
- About Us → `/about-us/`, Careers → `/careers/`, Terms → `/terms/` (create page),
  Privacy → `/privacy/` (create page — **required** for GBP & ad platforms).
- Inbound/Outbound/Blended/Non-Voice → deep-link to `/services/#inbound` etc. or
  dedicated service sub-pages if we split them (recommended for keyword coverage).

Internal linking is a ranking lever we currently waste. Add contextual in-body links:
homepage → service pages → matching case study → contact. Every case study should link to
`/services/` and `/contact/`.

### 3.6 Create legal + trust pages (unlock GBP/ads + E-E-A-T)
Add `/privacy/`, `/terms/`, and ideally `/refund-policy/`. Thin but real. These also let
us claim/verify the Google Business Profile.

### 3.7 Performance & Core Web Vitals (ranking factor)
- `next.config.mjs` sets `images.unoptimized: true` (required for static export). So
  **manually optimize**: ensure hero/LCP images are correctly sized, prefer `.webp`
  (many already are), and keep `priority` only on the hero image (already correct in
  `components/Hero.tsx`).
- Give **every** `<Image>` a descriptive, keyword-aware `alt` (audit all components; the
  hero alt "Customer support agent" is fine — check the rest).
- Run **PageSpeed Insights** + **Lighthouse** on the deployed `out/` build; target LCP
  < 2.5s, CLS < 0.1, INP < 200ms.
- Self-host fonts are already handled by `next/font` (good — no render-blocking).

### 3.8 Analytics & Search Console (do at launch, non-negotiable)
- Verify the domain in **Google Search Console** → submit `sitemap.xml`. This is our
  primary keyword + indexing feedback loop.
- Add **Google Analytics 4** (or privacy-friendly Plausible) via a `<Script>` in layout.
- Set up **Bing Webmaster Tools** (free extra traffic, low effort).
- Track goal conversions: quote-modal submit, `tel:` clicks, `mailto:` clicks, contact
  form submit.

---

## 4. On-page content upgrades (existing pages)

Current pages are visually strong but **thin on indexable text and keyword coverage**.
Rankings need substantive, unique copy per URL.

1. **Homepage** — the `<h1>` is "Exceptional Support Every Call Every Time" (brand-y but
   zero keyword). Keep the visual H1, but ensure the page contains, in real text, the
   phrases "BPO", "call center", "Bangalore/Bengaluru", "outsourcing", "24/7". Add an
   intro paragraph under the hero or in About.
2. **/services** — expand each of Inbound / Outbound / Blended / Non-Voice into 150–250
   words of genuinely useful description (what it is, who it's for, what's included, a
   proof point). Add an FAQ block → feeds `FAQPage` schema.
3. **/sectors** — one substantial section per vertical, each linking to its case
   study. Use the industry keywords from §1d in the H2s.
4. **Headings hierarchy** — exactly one `<h1>` per page; keyword-relevant `<h2>`/`<h3>`.
   Audit each page.
5. **Alt text + descriptive file names** — rename generic images where practical; alt
   text should describe the image AND include relevant terms naturally.
6. **Add testimonials / logos with schema** — social proof + potential `Review` schema
   (only with real, verifiable reviews — never fabricate).

---

## 5. Content engine — the blog (`/news`) is the long-tail growth machine

Right now `app/news/page.tsx` is a **static array with no real article pages**. This is
the single biggest missed opportunity. Convert it to a real content system.

### 5.1 Architecture (matches the case-study pattern already in the repo)
- Create `lib/posts.ts` mirroring `lib/caseStudies.ts` (slug, title, description,
  date, author, cover, body sections, keyword, related links).
- Create `app/news/[slug]/page.tsx` with `generateStaticParams()` +
  `generateMetadata()` (canonical, OG, `Article` JSON-LD). Static-export friendly.
- Update `app/news/page.tsx` to list from `lib/posts.ts` and link to real posts (not
  `href="#"` / dead links).
- Extend `app/sitemap.ts` to include every post.

### 5.2 Pillar → cluster model (topical authority)
Build **pillar pages** (broad, ~1,500+ words) that link to **cluster posts** (specific,
long-tail) and back. This structure is how Google awards topical authority.

- **Pillar: "Call Center Outsourcing in India — The Complete Guide"**
  - cluster: cost of outsourcing a call center in India
  - cluster: inbound vs outbound call center — differences explained
  - cluster: how to choose a BPO partner (checklist)
  - cluster: in-house vs outsourced support — the real trade-offs
  - cluster: call center pricing models explained
- **Pillar: "Customer Support for [E-commerce / SaaS / Healthcare]"** (one per vertical,
  reuse case-study proof)
- **Pillar: "24/7 Multilingual Support — Why It Matters"**

### 5.3 Publishing cadence & calendar
- Start: **2 posts/week for 8 weeks** (build a base of ~16 cornerstone posts), then
  **1/week** ongoing. Consistency > bursts.
- Each post targets ONE long-tail keyword from §1c, ~1,000–1,500 words, with: a real
  intro that answers the query in the first 100 words (snippet bait), H2s that mirror
  "People also ask", one internal link to a service/case-study page, one CTA.
- Repurpose case studies into "how we did it" narrative posts (already 6 in the repo).

---

## 6. How to write like a human (NOT AI-generated) — mandatory style guide

Search engines increasingly discount generic, patterned "AI slop", and readers bounce
off it. Every word we publish must pass as written by an experienced BPO operator. Follow
these rules:

**Do:**
- **Lead with a specific claim or number**, not a definition. Bad: "Customer support is
  an important part of any business." Good: "A 90-second hold is where 34% of your callers
  hang up — and never call back."
- **Use concrete detail from our real operations**: 356 employees, Bengaluru, the actual
  case-study results (30% higher patient satisfaction, 40% faster order resolution). Real
  numbers are the fingerprint of human, first-hand writing (E-E-A-T "Experience").
- **Vary sentence length.** Mix short punchy lines with longer ones. AI text is
  rhythmically flat; humans aren't.
- **Write in first person plural** ("we ran…", "here's what we found") and address the
  reader as "you". Have a point of view.
- **Use plain, specific verbs.** "We cut backlog by 35%" not "We leveraged synergies to
  optimize outcomes."
- **Include a genuine opinion or trade-off** ("Honestly, 24/7 isn't worth it for every
  business — here's when it is"). Nuance signals a real author.
- **Add one small, human touch per piece**: an anecdote, an aside, a mild contrarian take.

**Don't:**
- No filler openers: "In today's fast-paced world", "In the ever-evolving landscape of",
  "When it comes to…".
- No hollow intensifiers: "seamless", "cutting-edge", "robust", "leverage", "elevate",
  "unlock", "delve", "tapestry", "realm", "game-changer", "in conclusion".
- No perfectly balanced 3-item lists in every paragraph. No "Firstly/Secondly/Finally"
  scaffolding on everything.
- No em-dash-heavy, uniformly hedged prose. No restating the H2 as the first sentence of
  every section.
- Never fabricate statistics, clients, reviews, or certifications. If we claim "ISO
  certified", the cert must exist. Fabrication tanks trust and E-E-A-T.

**Process for the writing agent:** draft → read it aloud in your head → cut every
sentence that could appear on any competitor's site → replace one generic claim per
paragraph with a Cimmons-specific fact from §0/§1d/`lib/caseStudies.ts`. Attribute posts
to a **real named author** with a short bio (E-E-A-T needs a human byline).

---

## 7. Off-page SEO & backlinks

Backlinks remain a top ranking factor. Quality and relevance beat volume. **Never buy
spammy links** — a link-farm penalty is very hard to recover from.

### 7.1 Foundation citations (do first — local SEO)
Consistent NAP (§0) on:
- **Google Business Profile** (claim, verify, complete 100%, add photos, services,
  posts, collect reviews) — the #1 local ranking asset.
- Bing Places, Justdial, Sulekha, IndiaMART, AmbitionBox, Clutch, GoodFirms,
  DesignRush, Google Maps.
- Business directories: Yelp, Yellow Pages India, TradeIndia.
> These are "citations" — even nofollow, they build local trust and consistency.

### 7.2 Earned / editorial links (ongoing)
- **Clutch / GoodFirms / DesignRush profiles** + client reviews → these rank AND link.
- **Guest posts** on BPO / customer-experience / startup blogs targeting our long-tail
  topics (pitch the pillar content from §5).
- **HARO / Featured / Qwoted** — respond as a BPO subject-matter expert; earn press links.
- **Case-study syndication** — offer our case studies to industry publications.
- **Partnership / vendor links** — CRM, telephony, and tech partners' "customers/partners"
  pages.
- **LinkedIn company page** active posting → drives referral + brand searches (brand
  search volume itself lifts rankings).
- **Digital PR**: publish one small original data piece (e.g. "We analyzed 50,000 support
  calls — here's what we learned") → the kind of asset that attracts natural links.

### 7.3 Internal links (free, controllable — see §3.5)
The strongest link graph we fully control. Every new blog post links up to its pillar and
across to a service/case-study page. Fix the footer dead links first.

### 7.4 What to avoid
Paid link networks, comment spam, irrelevant directories, exact-match-anchor over-
optimization, PBNs. Anchor text should be natural and varied.

---

## 8. Local SEO (Bengaluru) — high priority for a location-based service

- Complete **Google Business Profile** (category: "BPO company" / "Call center"), add the
  MS Ramaiah Rd address, service areas, hours, photos, and weekly **GBP Posts**.
- **Embed a Google Map** on `/contact/` and add `LocalBusiness` JSON-LD (§3.4).
- Create genuinely useful **location relevance** in copy: mention Bengaluru / Karnataka /
  serving Indian and global clients naturally.
- **Collect real reviews** (email signature, post-project ask) → respond to every one.
- If we serve specific cities, consider light location landing pages later (only if we
  have a real presence — thin doorway pages are penalized).

---

## 9. Measurement — what "top of the market" means and how we track it

Set up before launch; review monthly:
- **Google Search Console** — impressions, avg position, CTR, top queries (our real
  keyword map), index coverage, Core Web Vitals.
- **GA4** — organic sessions, top landing pages, conversion events (§3.8).
- **Rank tracking** — track the §1b money keywords weekly (Search Console positions or a
  rank tracker).
- **Backlink profile** — Ahrefs/Semrush free tier; watch referring domains grow.
- **Targets (first 6 months):** all pages indexed (month 1), page-1 for 3+ long-tail
  terms (month 3), page-1 for 2+ local money keywords (month 6), steady referring-domain
  growth.

---

## 10. Execution order (hand this checklist to the implementing agent)

**Phase 1 — Technical foundation (week 1)** — ✅ IMPLEMENTED (see notes)
1. [x] Normalize brand to "Cimmons" in all titles/metadata (`app/layout.tsx` + all page metadata).
2. [x] Add `metadataBase`, title template, OG/Twitter defaults in `app/layout.tsx` (§3.1).
3. [x] Add self-referencing `canonical` to every page (verified in built `out/` HTML).
4. [x] Create `app/sitemap.ts` (§3.2) and `app/robots.ts` (§3.3) — emit `/sitemap.xml` + `/robots.txt`.
5. [x] Add `components/JsonLd.tsx` + `lib/site.ts`; Organization/ProfessionalService sitewide,
       FAQPage on home, Article + BreadcrumbList on case studies. Central config in `lib/site.ts`.
6. [x] Fix `href="#"` in `components/Footer.tsx` (real URLs) and `components/Blog.tsx` (→ `/news/`).
7. [x] Create `/privacy/` and `/terms/` pages (§3.6) — human-written, wired into footer + sitemap.
8. [ ] **TODO:** Audit remaining `<Image>` alts across all components (§3.7) — partial.
9. [ ] **TODO (asset):** Create `public/assets/img/og-default.png` (1200×630). Metadata already
       references it — until it exists, social shares have no preview image.
10. [ ] **TODO (manual):** Verify GSC + GA4 + Bing; submit sitemap (§3.8).

> **Phase 1 follow-ups — RESOLVED (client confirmed):**
> - [x] Production host confirmed: `https://www.cimmons.in` (`SITE_URL` in `lib/site.ts`).
>   Staging is `previews.cimmons.in` — **staging deploys MUST build with
>   `NEXT_PUBLIC_STAGING=1 npm run build`**, which flips robots.txt to `Disallow: /` and
>   the meta robots to `noindex, nofollow`, while canonicals keep pointing at production.
>   A plain `npm run build` is the production (indexable) build.
> - [x] Real social profiles wired into `SOCIAL_LINKS`/`SAME_AS` (`lib/site.ts`), the
>   contact-page icons, and a new footer social row: X, Facebook, LinkedIn, Instagram, YouTube.
> - [x] ISO confirmed real (ISO 9001:2015 + ISMS 27001:2013) — added to Organization schema
>   (`hasCredential`) and a sitewide footer ISO badge. **Optional:** when the certification
>   body's official badge artwork is available, drop it into `public/assets/img/` and swap
>   the drawn badge in `components/Footer.tsx` for the real artwork.

**Phase 2 — On-page content (weeks 2–3)** — ✅ IMPLEMENTED
11. [x] Titles/descriptions rewritten per the §2 map (done in Phase 1).
12. [x] `/services`: added a second, deeper keyword-bearing paragraph (`desc2`) per
        service line (inbound/outbound/blended/non-voice, each citing real case-study
        numbers), a 6-question visible FAQ (`<details>` accordion) with matching
        FAQPage JSON-LD, and `Service` schema for all four service lines.
13. [x] `/sectors` (renamed from `/industries`, 301 in public/.htaccess): keyword H1
        ("Sectors We Serve") + a "Proven results" section internally linking all six
        case studies. Each of the seven sectors now has its own detail page at
        `/sectors/[slug]/` with `Service` + `FAQPage` + `BreadcrumbList` schema.
14. [x] Homepage hero: keyword-bearing intro paragraph under the H1 (BPO, call
        center, Bengaluru, 24/7 multilingual — the H1 itself stays brand-voice).
15. [x] `public/assets/img/og-default.png` created (1200×630, brand tri-color glow,
        logo, keyword headline) — social shares now have a preview image.

**Phase 3 — Content engine (weeks 2–10, parallel)** — ✅ ENGINE BUILT, cadence ongoing
14. [x] Built `lib/posts.ts` + `app/news/[slug]/page.tsx` with `generateStaticParams`,
        `generateMetadata` (canonical + OG article), BlogPosting + BreadcrumbList JSON-LD,
        related-posts block and contextual internal links to /services/ + /contact/.
15. [x] `/news/` listing and the homepage Blog section now render from `lib/posts.ts`
        (newest-first). Sitemap includes every post with `lastModified`.
16. [x] **Six launch posts live** (written per §6 — real Cimmons numbers, varied rhythm,
        opinions, zero filler): the four legacy WordPress posts rewritten under their
        ORIGINAL slugs, plus two new money long-tails
        (`call-center-outsourcing-cost-india`, `inbound-vs-outbound-call-center`).
17. [x] **`public/.htaccess` added** — 301s the four old root-level WordPress URLs
        (e.g. `/right-bpo-partner/`) to their new `/news/…/` homes so existing
        backlinks and index entries carry over. Never delete those lines.
18. [ ] ONGOING: publish new cluster posts on the §5.3 cadence. To add a post: append
        one object to `POSTS` in `lib/posts.ts` — listing, homepage, detail page and
        sitemap all update automatically at build.

**Phase 4 — Off-page & local (ongoing from week 1)**
17. [ ] Claim + fully complete Google Business Profile (§8).
18. [ ] Build foundation citations with consistent NAP (§7.1).
19. [ ] Start review collection, guest posts, HARO, directory profiles (§7.2).

**Phase 5 — Measure & iterate (monthly)**
20. [ ] Review GSC queries → feed new long-tails back into §1c → new posts. Repeat.

---

### Guardrails for the implementing agent
- This is a **static export** (`output: "export"`) — do NOT introduce server components
  that need a Node runtime, API routes, or ISR. Use file-based metadata routes and
  `generateStaticParams` only.
- Keep `trailingSlash: true` in mind: canonicals and sitemap URLs must end in `/`.
- Never fabricate reviews, stats, clients, or certifications (§6).
- Validate every schema change (Rich Results Test) and every build (`npm run build`)
  before shipping.
- Match the existing code style (TypeScript, Tailwind, the `lib/caseStudies.ts` data
  pattern) — new work should read like the surrounding code.
