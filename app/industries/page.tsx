import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "Industries – CIMMON | BPO & Call Center Services",
  description:
    "From banking and healthcare to logistics and e-commerce — Cimmons delivers domain-tuned BPO, BPM and call center solutions across every major industry.",
};

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const icon = (paths: ReactNode) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths}
  </svg>
);

const ICONS = {
  bank: icon(
    <>
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="m12 3 9 7H3z" />
      <path d="M5 10v11" />
      <path d="M9.5 10v11" />
      <path d="M14.5 10v11" />
      <path d="M19 10v11" />
    </>
  ),
  globe: icon(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13.5 13.5 0 0 1 3.5 9 13.5 13.5 0 0 1-3.5 9 13.5 13.5 0 0 1-3.5-9A13.5 13.5 0 0 1 12 3z" />
    </>
  ),
  truck: icon(
    <>
      <path d="M1 4h14v13H1z" />
      <path d="M15 9h4l4 4v4h-8z" />
      <circle cx="6" cy="19.5" r="1.8" />
      <circle cx="18" cy="19.5" r="1.8" />
    </>
  ),
  factory: icon(
    <>
      <path d="M2 21h20" />
      <path d="M4 21V11l5 3v-3l5 3v-3l6 3.6V21" />
      <path d="M4 11V4h3v8" />
    </>
  ),
  play: icon(
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m10 9 5 3-5 3z" />
    </>
  ),
  home: icon(
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-7h5v7" />
    </>
  ),
  cart: icon(
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L22 7H6" />
    </>
  ),
  signal: icon(
    <>
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 20V4" />
    </>
  ),
  bolt: icon(<path d="M13 2 4 14h6l-1 8 9-12h-6z" />),
  car: icon(
    <>
      <path d="M5 17H3v-5l2-6h12l3 6h1v5h-2" />
      <path d="M5 12h16" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
    </>
  ),
  book: icon(
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  doc: icon(
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </>
  ),
  heart: icon(
    <>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      <path d="M4 12h4l2-3 3 6 2-3h5" />
    </>
  ),
  shield: icon(
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  plane: icon(
    <path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.83L9 11l-2.5 2.5H4l-1.5 1.5 3 1 1 3L8 17.5v-2.5L10.5 12.5l3.97 4.7a.5.5 0 0 0 .83-.5z" />
  ),
  chip: icon(
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </>
  ),
  leaf: icon(
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-10-1 12-5 16-9 17z" />
      <path d="M4 21c2-3 5-6 9-8" />
    </>
  ),
  pill: icon(
    <>
      <rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)" />
      <path d="m8.5 8.5 7 7" />
    </>
  ),
  users: icon(
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16.5 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  box: icon(
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </>
  ),
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const CORE_INDUSTRIES: { name: string; desc: string; icon: ReactNode }[] = [
  {
    name: "Banking & Finance",
    desc: "The banking and finance industry faces numerous challenges such as fierce competition, sky-rocketing customer expectations, and rising regulatory pressure. We help you overcome these and greatly improve your efficiency.",
    icon: ICONS.bank,
  },
  {
    name: "Customs Brokerage",
    desc: "Customs brokerage faces challenges like compliance with international trade regulations and staying updated with security protocols. We help you navigate the complexities of global trade.",
    icon: ICONS.globe,
  },
  {
    name: "Logistics",
    desc: "The constant battle for timely delivery and cheaper prices places immense pressure on logistics clients. Our custom BPO services help them assure process efficiencies and identify price advantages.",
    icon: ICONS.truck,
  },
  {
    name: "Manufacturing",
    desc: "Key concerns for manufacturers today include product development and innovation, an increasing skill gap, and the ever-changing market. Our robust solutions address them head-on.",
    icon: ICONS.factory,
  },
  {
    name: "Media & Entertainment",
    desc: "Transforming digital technologies and new avenues put a lot of pressure on media and entertainment clients. We help streamline processes and build competencies.",
    icon: ICONS.play,
  },
  {
    name: "Real Estate / Construction",
    desc: "Real estate, architecture, engineering and construction are vulnerable to market fluctuations, making higher efficiency essential. We help you maintain it.",
    icon: ICONS.home,
  },
  {
    name: "Retail",
    desc: "Changing consumer buying patterns and advancements in technology are major challenges for retailers and e-commerce companies. We help you keep pace.",
    icon: ICONS.cart,
  },
  {
    name: "Telecommunications",
    desc: "Our billing request management process ensures the timely and effective fulfillment of all customer billing requests and complaints.",
    icon: ICONS.signal,
  },
  {
    name: "Energy & Utilities",
    desc: "Planning and managing resource constraints and adapting to evolving regulatory norms pose a huge threat to energy and utilities clients. We help mitigate it.",
    icon: ICONS.bolt,
  },
  {
    name: "Automobiles",
    desc: "Clients in the automobile industry face challenges like overcapacity, sustainability and globalization. We build strategies to address them.",
    icon: ICONS.car,
  },
  {
    name: "Education",
    desc: "The education sector faces increasing competition, forcing clients to focus on increasing enrollments while providing quality education.",
    icon: ICONS.book,
  },
  {
    name: "Mortgage",
    desc: "The mortgage industry struggles with profit-margin compression, bringing down TAT and enhancing pre-underwriting efficiency. We help you optimize.",
    icon: ICONS.doc,
  },
  {
    name: "Healthcare",
    desc: "Healthcare clients constantly face challenges such as higher costs and patient data privacy issues. Our back-office support eases the burden.",
    icon: ICONS.heart,
  },
  {
    name: "E-Commerce",
    desc: "Constantly changing buying preferences and rapidly shifting demand are key challenges for e-commerce. We help you stay agile.",
    icon: ICONS.box,
  },
  {
    name: "Insurance",
    desc: "The insurance industry faces data security, data accuracy, over-regulation and changing customer behavior. Our back-office handling keeps you compliant.",
    icon: ICONS.shield,
  },
];

const SERVE_INDUSTRIES: { name: string; icon: ReactNode }[] = [
  { name: "Aerospace", icon: ICONS.plane },
  { name: "Information Technology", icon: ICONS.chip },
  { name: "Energy", icon: ICONS.bolt },
  { name: "Agricultural Companies", icon: ICONS.leaf },
  { name: "Pharmaceutical Companies", icon: ICONS.pill },
  { name: "Manufacturing Companies", icon: ICONS.factory },
  { name: "Ecommerce Companies", icon: ICONS.cart },
  { name: "Customs Brokerage", icon: ICONS.globe },
  { name: "Media & Entertainment", icon: ICONS.play },
  { name: "Telecommunications", icon: ICONS.signal },
  { name: "Healthcare", icon: ICONS.heart },
  { name: "Education", icon: ICONS.book },
  { name: "Banking & Finance", icon: ICONS.bank },
  { name: "Logistics", icon: ICONS.truck },
  { name: "Insurance", icon: ICONS.shield },
  { name: "Automotive", icon: ICONS.car },
  { name: "FMCG", icon: ICONS.box },
  { name: "Collection", icon: ICONS.doc },
  { name: "Public Sector", icon: ICONS.users },
];

const STATS = [
  { end: 3, suffix: "+", label: "Years of Experience" },
  { end: 14, suffix: "+", label: "Happy Clients" },
  { end: 21, suffix: "+", label: "Projects Delivered" },
  { end: 356, suffix: "+", label: "Employees" },
  { end: 21, suffix: "%", label: "Year-on-Year Growth" },
];

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Page banner + breadcrumb */}
        <section className="bg-cream pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="container-x text-center">
            <h1 className="section-title text-[36px] sm:text-[46px] lg:text-[56px]">
              Industries
            </h1>
            <nav className="mt-5 flex items-center justify-center gap-2 text-[15px] font-semibold">
              <a href="/" className="text-body transition-colors hover:text-primary">
                Home
              </a>
              <span className="text-body/50">/</span>
              <span className="text-primary">Industries</span>
            </nav>
          </div>
        </section>

        {/* Section A — Core BPO | BPM Industries (white) */}
        <section
          id="core-industries"
          className="scroll-mt-24 bg-white py-20 lg:py-28"
        >
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Industries
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Core BPO | BPM Industries
              </h2>
              <p className="mt-6 text-lg text-body">
                Deep domain expertise across the industries we know best — so
                every process we run for you speaks your sector&rsquo;s
                language from day one.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_INDUSTRIES.map((ind) => (
                <div
                  key={ind.name}
                  className="group rounded-[24px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-cream hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {ind.icon}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-heading">
                    {ind.name}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-gold/70" />
                  <p className="mt-4 text-[15px] leading-relaxed text-body">
                    {ind.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats band (dark) */}
        <section className="bg-ink py-16 lg:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow-dark mb-6">
                <span className="h-2 w-2 rounded-full bg-gold" />
                By The Numbers
              </span>
              <h2 className="section-title text-[26px] text-white sm:text-[32px] lg:text-[36px]">
                Trusted across sectors, measured in results.
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-4xl font-bold text-white lg:text-5xl">
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="mx-auto mt-3 h-px w-10 bg-gold/60" />
                  <div className="mt-3 text-sm font-medium text-white/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B — Industries We Serve (cream) */}
        <section
          id="industries-we-serve"
          className="scroll-mt-24 bg-cream py-20 lg:py-28"
        >
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Beyond The Core
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Industries We Serve
              </h2>
              <p className="mt-6 text-lg text-body">
                Virtually any industry benefits from our call center operations
                — customer service, telemarketing and IT support among many
                others. We hire skilled professionals suited to each industry
                and equip them with cutting-edge technology.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVE_INDUSTRIES.map((ind) => (
                <div
                  key={ind.name}
                  className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cream text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {ind.icon}
                  </span>
                  <span className="font-display text-[15px] font-semibold text-heading">
                    {ind.name}
                  </span>
                </div>
              ))}

              {/* Filler tile to complete the grid */}
              <a
                href="/#contact"
                className="group flex items-center gap-4 rounded-2xl bg-ink px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold">
                  <ArrowIcon size={18} />
                </span>
                <span className="font-display text-[15px] font-semibold text-white transition-colors group-hover:text-gold">
                  Your Industry, Next
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Closing CTA band (white) */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-gold" />
                Every Domain Welcome
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Don&rsquo;t see your industry? We adapt to your domain.
              </h2>
              <p className="mt-6 text-lg text-body">
                Tell us how your business works, and we&rsquo;ll build a team,
                a process and a technology stack that fits it perfectly.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href="/#contact" className="btn-primary">
                  Talk to Us
                  <ArrowIcon size={18} />
                </a>
                <a href="/#contact" className="btn-outline">
                  Business Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
