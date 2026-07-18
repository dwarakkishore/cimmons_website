import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "Services – CIMMON | BPO & Call Center Services",
  description:
    "Inbound, outbound, blended and non-voice call center services from Cimmons — 24×7 ready agents, analytics-driven customer satisfaction and end-to-end BPO solutions.",
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const OVERVIEW = [
  {
    n: "01",
    href: "#inbound",
    title: "Inbound",
    desc: "Fast, efficient call handling — never miss another call again.",
  },
  {
    n: "02",
    href: "#outbound",
    title: "Outbound",
    desc: "Active outreach that grows revenue and keeps customers close.",
  },
  {
    n: "03",
    href: "#blended",
    title: "Blended",
    desc: "One team, every channel — inbound and outbound in a single flow.",
  },
  {
    n: "04",
    href: "#non-voice",
    title: "Non-Voice",
    desc: "Email, chat and back-office support from skilled writers.",
  },
];

type Service = {
  id: string;
  n: string;
  name: string;
  title: string;
  desc: string;
  points: string[];
  img: string;
  imgAlt: string;
  badgeStat: string;
  badgeLabel: string;
  flip: boolean;
  dark: boolean; // cream section?
};

const SERVICES: Service[] = [
  {
    id: "inbound",
    n: "01",
    name: "Inbound",
    title: "Inbound Call Center Services",
    desc: "With a fast and efficient inbound call center, you'll never miss another call again. We deliver end-to-end solutions — from the initial welcome call all the way through service closure — backed by analytics monitoring that tracks customer satisfaction at every step.",
    points: [
      "End-to-end coverage, from welcome call to service closure",
      "24×7 ready agents, every day of the year",
      "Analytics monitoring for customer-satisfaction tracking",
    ],
    img: "/assets/img/service1-scaled.webp",
    imgAlt: "Cimmons agents handling inbound customer calls",
    badgeStat: "24×7",
    badgeLabel: "Ready agents on call",
    flip: false,
    dark: true,
  },
  {
    id: "outbound",
    n: "02",
    name: "Outbound",
    title: "Outbound Call Center Services",
    desc: "Our professionals engage prospects and customers with well-timed, active outreach — increasing revenue and retention by turning every conversation into an opportunity for your business.",
    points: [
      "Telesales & telemarketing campaigns",
      "Lead generation that fills your pipeline",
      "Customer follow-up & retention programs",
      "Net promoter surveys",
      "Appointment setting",
    ],
    img: "/assets/img/service2.webp",
    imgAlt: "Cimmons agents running outbound sales campaigns",
    badgeStat: "21%",
    badgeLabel: "Year-on-year growth",
    flip: true,
    dark: false,
  },
  {
    id: "blended",
    n: "03",
    name: "Blended",
    title: "Blended Call Center Services",
    desc: "Our agents handle multiple communication channels simultaneously, enhancing organizational efficiency and giving your customers one seamless experience — however they choose to reach you.",
    points: [
      "Seamless inbound + outbound coverage",
      "Agents working across several channels",
      "Higher productivity & utilization",
      "Unified customer experience",
    ],
    img: "/assets/img/service3.webp",
    imgAlt: "Cimmons blended team covering multiple channels",
    badgeStat: "360°",
    badgeLabel: "Coverage across channels",
    flip: false,
    dark: true,
  },
  {
    id: "non-voice",
    n: "04",
    name: "Non-Voice",
    title: "Non-Voice Call Center Services",
    desc: "Non-voice agents skilled in writing and typing handle customer issues through email and chat — fast, accurate and always on-brand, without a single ring.",
    points: [
      "Email support",
      "Live chat support",
      "Back-office & data services",
      "Technical documentation",
      "Social media response",
    ],
    img: "/assets/img/service4.webp",
    imgAlt: "Cimmons non-voice team on email and live chat",
    badgeStat: "365",
    badgeLabel: "Days-a-year support",
    flip: true,
    dark: false,
  },
];

/* Inbound sub-services with inline stroke icons */

const icon = (paths: ReactNode) => (
  <svg
    width="22"
    height="22"
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

const SUB_SERVICES: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "Customer Support",
    desc: "Handle incoming calls and resolve product or service issues.",
    icon: icon(
      <>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </>
    ),
  },
  {
    title: "Technical Support",
    desc: "Complete tech support via phone, email or live chat.",
    icon: icon(
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
  {
    title: "Order Tracking",
    desc: "Status inquiries and end-to-end order management.",
    icon: icon(
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
      </>
    ),
  },
  {
    title: "Messaging Service",
    desc: "Capture caller name, number and email via voicemail when lines are busy.",
    icon: icon(
      <>
        <circle cx="5.5" cy="11.5" r="3.5" />
        <circle cx="18.5" cy="11.5" r="3.5" />
        <path d="M5.5 15h13" />
      </>
    ),
  },
  {
    title: "Call Answering",
    desc: "Round-the-clock professional answering that retains loyalty.",
    icon: icon(
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M15 7a2 2 0 0 1 2 2" />
        <path d="M15 3a6 6 0 0 1 6 6" />
      </>
    ),
  },
  {
    title: "Call Patching",
    desc: "Virtual receptionists route every call to the right person.",
    icon: icon(
      <>
        <path d="M16 3h5v5" />
        <path d="M4 20 21 3" />
        <path d="M21 16v5h-5" />
        <path d="m15 15 6 6" />
        <path d="m4 4 5 5" />
      </>
    ),
  },
  {
    title: "Billing & Enquiry",
    desc: "Clear, patient handling of billing questions and enquiries.",
    icon: icon(
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </>
    ),
  },
  {
    title: "Toll Free",
    desc: "Full management of your toll-free numbers and lines.",
    icon: icon(
      <>
        <path d="M4 9h16" />
        <path d="M4 15h16" />
        <path d="M10 3 8 21" />
        <path d="M16 3l-2 18" />
      </>
    ),
  },
  {
    title: "Claim & Reimbursement",
    desc: "Accurate processing of claims and reimbursements.",
    icon: icon(
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Help Desk Support",
    desc: "Query handling for customers and prospects alike.",
    icon: icon(
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="m5.6 5.6 3.9 3.9" />
        <path d="m14.5 14.5 3.9 3.9" />
        <path d="m18.4 5.6-3.9 3.9" />
        <path d="m9.5 14.5-3.9 3.9" />
      </>
    ),
  },
  {
    title: "Scheduling & Appointment",
    desc: "Calendar and appointment management, handled for you.",
    icon: icon(
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </>
    ),
  },
];

const STATS = [
  { end: 3, suffix: "+", label: "Years of Experience" },
  { end: 14, suffix: "+", label: "Happy Clients" },
  { end: 21, suffix: "+", label: "Projects Delivered" },
  { end: 356, suffix: "+", label: "Employees" },
  { end: 21, suffix: "%", label: "Year-on-Year Growth" },
];

const WHY = [
  "Outsourced help-desk & inbound management",
  "Positive first impressions through trained personnel",
  "Efficiently handle high call volumes with scheduled teams",
  "Security protocols with minimal redundancy",
  "Cost-effective training via rigorous recruitment",
  "Focus on your core operations while we handle customers",
  "ISO 9001:2015 & ISMS 27001:2013 certified",
  "24×7×365 availability",
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

function CheckDot() {
  return (
    <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12l5 5L20 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ServiceRow({ s }: { s: Service }) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Image side */}
      <div className={`relative ${s.flip ? "lg:order-2" : ""}`}>
        <div className="overflow-hidden rounded-[24px] shadow-[0_30px_60px_rgba(20,27,51,0.10)]">
          <Image
            src={s.img}
            alt={s.imgAlt}
            width={620}
            height={480}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
        {/* Number chip */}
        <span className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white font-display text-lg font-bold text-primary shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
          {s.n}
        </span>
        {/* Floating stat card */}
        <div className="absolute bottom-6 left-6 flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <span className="font-display text-3xl font-bold text-primary">
            {s.badgeStat}
          </span>
          <span className="max-w-[140px] text-sm font-medium leading-snug text-body">
            {s.badgeLabel}
          </span>
        </div>
        {/* Gold accent dot */}
        <span className="absolute -right-2 -top-2 hidden h-5 w-5 rounded-full bg-gold lg:block" />
      </div>

      {/* Content side */}
      <div className={s.flip ? "lg:order-1" : ""}>
        <span className="eyebrow mb-6">
          <span className="h-2 w-2 rounded-full bg-gold" />
          Service {s.n} — {s.name}
        </span>
        <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
          {s.title}
        </h2>
        <p className="mt-6 text-lg text-body">{s.desc}</p>
        <ul className="mt-8 space-y-4">
          {s.points.map((p) => (
            <li key={p} className="flex items-start gap-4">
              <CheckDot />
              <span className="pt-1 font-medium text-heading">{p}</span>
            </li>
          ))}
        </ul>
        <a
          href="/#contact"
          className="btn-primary mt-9"
          aria-label={`Learn more about ${s.title}`}
        >
          Learn More
          <ArrowIcon size={18} />
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Page banner + breadcrumb */}
        <section className="bg-cream pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="container-x text-center">
            <h1 className="section-title text-[36px] sm:text-[46px] lg:text-[56px]">
              Services
            </h1>
            <nav className="mt-5 flex items-center justify-center gap-2 text-[15px] font-semibold">
              <a href="/" className="text-body transition-colors hover:text-primary">
                Home
              </a>
              <span className="text-body/50">/</span>
              <span className="text-primary">Services</span>
            </nav>
          </div>
        </section>

        {/* Overview + anchor cards */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Our Services
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Four ways we keep your customers close — and your business
                growing.
              </h2>
              <p className="mt-6 text-lg text-body">
                From the first ring to the last email, Cimmons delivers complete
                call center and BPO solutions — inbound, outbound, blended and
                non-voice — engineered around one thing: your customer&rsquo;s
                satisfaction.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {OVERVIEW.map((o) => (
                <a
                  key={o.n}
                  href={o.href}
                  className="group rounded-[24px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-cream hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-gold">
                      {o.n}
                    </span>
                    <span className="h-px w-10 bg-black/10 transition-colors group-hover:bg-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-heading">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-body">{o.desc}</p>
                  <span
                    className="mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-heading transition-all duration-300 group-hover:border-transparent group-hover:bg-primary group-hover:text-white"
                    aria-hidden="true"
                  >
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 01 — Inbound (cream, with sub-services grid) */}
        <section id="inbound" className="scroll-mt-20 bg-cream py-20 lg:py-28">
          <div className="container-x">
            <ServiceRow s={SERVICES[0]} />

            {/* Sub-services */}
            <div className="mt-20 lg:mt-24">
              <div className="mx-auto max-w-3xl text-center">
                <span className="eyebrow mb-6">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Inbound, In Depth
                </span>
                <h3 className="section-title text-[26px] sm:text-[32px] lg:text-[36px]">
                  Everything an inbound line should do — under one roof.
                </h3>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {SUB_SERVICES.map((sub) => (
                  <div
                    key={sub.title}
                    className="group rounded-[24px] border border-black/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      {sub.icon}
                    </span>
                    <h4 className="mt-5 font-display text-lg font-semibold text-heading">
                      {sub.title}
                    </h4>
                    <p className="mt-2 text-[15px] text-body">{sub.desc}</p>
                  </div>
                ))}

                {/* Filler CTA card */}
                <a
                  href="/#contact"
                  className="group flex flex-col justify-between rounded-[24px] bg-ink p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-gold">
                      {icon(
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      )}
                    </span>
                    <h4 className="mt-5 font-display text-lg font-semibold text-white">
                      Something else in mind?
                    </h4>
                    <p className="mt-2 text-[15px] text-white/70">
                      Tell us what your customers need — we&rsquo;ll build the
                      desk for it.
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-gold">
                    Talk to us
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Outbound (white) */}
        <section id="outbound" className="scroll-mt-20 bg-white py-20 lg:py-28">
          <div className="container-x">
            <ServiceRow s={SERVICES[1]} />
          </div>
        </section>

        {/* 03 — Blended (cream) */}
        <section id="blended" className="scroll-mt-20 bg-cream py-20 lg:py-28">
          <div className="container-x">
            <ServiceRow s={SERVICES[2]} />
          </div>
        </section>

        {/* 04 — Non-Voice (white) */}
        <section id="non-voice" className="scroll-mt-20 bg-white py-20 lg:py-28">
          <div className="container-x">
            <ServiceRow s={SERVICES[3]} />
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
                Results our clients count on, every single day.
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

        {/* Why choose Cimmons (cream) */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-[24px] shadow-[0_30px_60px_rgba(20,27,51,0.10)]">
                <Image
                  src="/assets/img/success.webp"
                  alt="Cimmons team delivering customer success"
                  width={620}
                  height={560}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-7 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="font-display text-lg font-bold text-heading">
                  ISO 9001:2015
                </div>
                <div className="mt-0.5 text-sm font-medium text-body">
                  &amp; ISMS 27001:2013 certified
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Why Choose Cimmons
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                A partner that answers — so you can focus on what you do best.
              </h2>
              <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {WHY.map((w) => (
                  <div key={w} className="flex items-start gap-3">
                    <CheckDot />
                    <span className="pt-1 text-[15px] font-medium text-heading">
                      {w}
                    </span>
                  </div>
                ))}
              </div>
              <a href="/#contact" className="btn-dark mt-10">
                Start a Conversation
                <ArrowIcon size={18} />
              </a>
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
