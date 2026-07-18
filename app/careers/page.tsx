"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";

/* ------------------------------------------------------------------ */
/* Icon helper                                                         */
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

function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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
/* Data                                                                */
/* ------------------------------------------------------------------ */

const VALUES: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "People First",
    desc: "Our staff are our primary focus. We bring out the best in our teams and focus on unlocking their true potential.",
    icon: icon(
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "360° Growth",
    desc: "We give 360-degree attention to your growth through various learning and career opportunities throughout your journey with us.",
    icon: icon(
      <>
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </>
    ),
  },
  {
    title: "Knowledge Sharing",
    desc: "A collaborative, knowledge-sharing culture that enables exponential growth for everyone on the team.",
    icon: icon(
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    title: "Honest Relationships",
    desc: "We value an honest, mutual relationship with every employee, backed by a robust, highly customized hiring process.",
    icon: icon(
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    ),
  },
];

const POSITIONS: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "Business Development",
    desc: "Drive new client partnerships and grow our BPO service portfolio.",
    icon: icon(
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
  {
    title: "Customer Care Associates",
    desc: "Deliver exceptional voice and non-voice support across our client programs.",
    icon: icon(
      <>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </>
    ),
  },
  {
    title: "Finance & Accounts",
    desc: "Keep our books accurate and our financial operations running smoothly.",
    icon: icon(
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 15h.01M11 15h2M7 11h10" />
        <path d="M3 8h18" />
      </>
    ),
  },
  {
    title: "Human Resources",
    desc: "Recruit, nurture and champion the people who power Cimmons.",
    icon: icon(
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </>
    ),
  },
  {
    title: "IT Support",
    desc: "Keep our systems, networks and workstations secure and always on.",
    icon: icon(
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    title: "Legal Advisor",
    desc: "Guide contracts, compliance and policy across our client engagements.",
    icon: icon(
      <>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M5 7 2 13a3.5 3.5 0 0 0 6 0zM19 7l-3 6a3.5 3.5 0 0 0 6 0z" />
        <path d="M8 21h8" />
      </>
    ),
  },
  {
    title: "Operations Manager",
    desc: "Lead day-to-day floor operations and deliver on every client SLA.",
    icon: icon(
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </>
    ),
  },
  {
    title: "Quality Assurance / Analyst",
    desc: "Monitor interactions and turn insights into measurable service quality.",
    icon: icon(
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Team Lead",
    desc: "Coach and motivate agent teams to hit their targets every shift.",
    icon: icon(
      <>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <path d="M4 22v-7" />
      </>
    ),
  },
  {
    title: "Trainer",
    desc: "Design and deliver programs that turn new hires into experts.",
    icon: icon(
      <>
        <path d="M22 10 12 5 2 10l10 5z" />
        <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
        <path d="M22 10v6" />
      </>
    ),
  },
];

const PERKS = [
  "Structured onboarding and role-specific training",
  "Clear growth paths from associate to leadership",
  "Collaborative, family-like team atmosphere",
  "ISO-certified, process-driven workplace",
];

/* ------------------------------------------------------------------ */
/* Form types                                                          */
/* ------------------------------------------------------------------ */

type FormState = {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  position: "",
  message: "",
};

const INPUT_CLASS =
  "w-full rounded-btn border border-black/10 bg-white px-4 py-3 text-body outline-none transition-colors focus:border-primary";
const LABEL_CLASS = "mb-2 block text-sm font-semibold text-heading";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CareersPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Page banner + breadcrumb */}
        <section className="bg-cream pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="container-x text-center">
            <h1 className="section-title text-[36px] sm:text-[46px] lg:text-[56px]">
              Careers
            </h1>
            <nav className="mt-5 flex items-center justify-center gap-2 text-[15px] font-semibold">
              <a
                href="/"
                className="text-body transition-colors hover:text-primary"
              >
                Home
              </a>
              <span className="text-body/50">/</span>
              <span className="text-primary">Careers</span>
            </nav>
          </div>
        </section>

        {/* Grow With Us (white) */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Join Our Team
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Grow with us
              </h2>
              <p className="mt-6 text-lg text-body">
                We have a global footprint yet a family atmosphere — a place to
                launch and advance your career. We&rsquo;ve assembled a team of
                experts who are passionate about what they do.
              </p>
              <p className="mt-4 text-lg text-body">
                Our recruitment process starts with identifying the vacancies
                that exist, then analyzing the job specifications — the
                knowledge, skills and experience needed for each role.
              </p>
              <a href="#apply" className="btn-primary mt-9">
                Find Your Dream Job
                <ArrowIcon size={18} />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Stat tiles */}
              <div className="rounded-[24px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-cream hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                <div className="font-display text-4xl font-bold text-primary">
                  <Counter end={356} suffix="+" />
                </div>
                <div className="mt-2 h-px w-10 bg-gold" />
                <div className="mt-3 text-sm font-medium text-body">
                  Employees and growing
                </div>
              </div>
              <div className="rounded-[24px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-cream hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                <div className="font-display text-4xl font-bold text-primary">
                  <Counter end={3} suffix="+" />
                </div>
                <div className="mt-2 h-px w-10 bg-gold" />
                <div className="mt-3 text-sm font-medium text-body">
                  Years of steady expansion
                </div>
              </div>
              <div className="rounded-[24px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-cream hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                <div className="font-display text-4xl font-bold text-primary">
                  <Counter end={21} suffix="%" />
                </div>
                <div className="mt-2 h-px w-10 bg-gold" />
                <div className="mt-3 text-sm font-medium text-body">
                  Year-on-year growth
                </div>
              </div>
              {/* Why work here tile */}
              <div className="rounded-[24px] bg-ink p-8">
                <h3 className="font-display text-lg font-semibold text-white">
                  Why work here?
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {PERKS.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-white/70"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values (cream) */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Culture &amp; Values
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Amazing customer experiences. Together.
              </h2>
              <p className="mt-6 text-lg text-body">
                Four values shape every team, every shift and every
                conversation at Cimmons.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="group rounded-[24px] border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {v.icon}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-heading">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-body">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions (white) */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Open Roles
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Find your dream job
              </h2>
              <p className="mt-6 text-lg text-body">
                We&rsquo;re hiring across the board — from the front line to
                the back office. Pick your path and let&rsquo;s talk.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {POSITIONS.map((role) => (
                <div
                  key={role.title}
                  className="group flex flex-col rounded-[24px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-cream hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-primary transition-colors duration-300 group-hover:bg-white">
                      {role.icon}
                    </span>
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-heading">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-body">{role.desc}</p>
                  <p className="mt-4 text-sm font-medium text-body/70">
                    Bengaluru &middot; Full-time
                  </p>
                  <a
                    href="#apply"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-heading"
                    aria-label={`Apply now for ${role.title}`}
                  >
                    Apply Now
                    <ArrowIcon />
                  </a>
                </div>
              ))}

              {/* Filler card — speculative applications */}
              <div className="flex flex-col justify-between rounded-[24px] bg-ink p-8">
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold">
                    {icon(
                      <>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v8M8 12h8" />
                      </>
                    )}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    Don&rsquo;t see your role?
                  </h3>
                  <p className="mt-2 text-[15px] text-white/70">
                    We&rsquo;re always looking for great people. Send us your
                    profile and tell us where you&rsquo;d shine.
                  </p>
                </div>
                <a
                  href="#apply"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold"
                >
                  Get in Touch
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Now (ink) */}
        <section id="apply" className="scroll-mt-24 bg-ink py-20 lg:py-28">
          <div className="container-x">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
              {/* Form card */}
              <div>
                <span className="eyebrow-dark mb-6">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  Apply Now
                </span>
                <h2 className="section-title text-[30px] text-white sm:text-[38px] lg:text-[44px]">
                  Apply Now
                </h2>
                <p className="mt-5 text-lg text-white/70">
                  We are a fast-growing, fun-loving team of creative thinkers
                  and passionate collaborators.
                </p>

                <div className="mt-10 rounded-[28px] bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.25)] sm:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center py-10 text-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-primary">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 12l5 5L20 7"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-heading">
                        Thanks{form.name ? `, ${form.name}` : ""}!
                      </h3>
                      <p className="mt-3 max-w-md text-body">
                        Your application has been received — our HR team will
                        be in touch.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setForm(INITIAL_FORM);
                          setSubmitted(false);
                        }}
                        className="btn-outline mt-8"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate={false}>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="career-name" className={LABEL_CLASS}>
                            Your Name *
                          </label>
                          <input
                            id="career-name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className={INPUT_CLASS}
                          />
                        </div>
                        <div>
                          <label htmlFor="career-email" className={LABEL_CLASS}>
                            Your Email *
                          </label>
                          <input
                            id="career-email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={INPUT_CLASS}
                          />
                        </div>
                        <div>
                          <label htmlFor="career-phone" className={LABEL_CLASS}>
                            Phone Number
                          </label>
                          <input
                            id="career-phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 00000 00000"
                            className={INPUT_CLASS}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="career-position"
                            className={LABEL_CLASS}
                          >
                            Position Looking For
                          </label>
                          <select
                            id="career-position"
                            name="position"
                            value={form.position}
                            onChange={handleChange}
                            className={INPUT_CLASS}
                          >
                            <option value="">Select a position</option>
                            {POSITIONS.map((p) => (
                              <option key={p.title} value={p.title}>
                                {p.title}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="career-message"
                            className={LABEL_CLASS}
                          >
                            Your Message
                          </label>
                          <textarea
                            id="career-message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us a little about yourself and your experience…"
                            className={INPUT_CLASS}
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn-primary mt-8">
                        Submit Application
                        <ArrowIcon size={18} />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* HR contact sidebar */}
              <aside className="lg:pt-24">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                  <h3 className="font-display text-xl font-semibold text-white">
                    Talk to our HR team
                  </h3>
                  <p className="mt-3 text-[15px] text-white/60">
                    Prefer a direct line? Reach out — we reply within one
                    business day.
                  </p>

                  <ul className="mt-8 space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold">
                        {icon(
                          <>
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-10 6L2 7" />
                          </>
                        )}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white/50">
                          Email
                        </div>
                        <a
                          href="mailto:hr@cimmons.in"
                          className="mt-1 block font-semibold text-white transition-colors hover:text-gold"
                        >
                          hr@cimmons.in
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold">
                        {icon(
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        )}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white/50">
                          Phone
                        </div>
                        <a
                          href="tel:+919380594484"
                          className="mt-1 block font-semibold text-white transition-colors hover:text-gold"
                        >
                          +91 93805 94484
                        </a>
                        <a
                          href="tel:+919353666387"
                          className="mt-0.5 block font-semibold text-white transition-colors hover:text-gold"
                        >
                          +91 93536 66387
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold">
                        {icon(
                          <>
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </>
                        )}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white/50">
                          Address
                        </div>
                        <p className="mt-1 text-[15px] font-medium leading-relaxed text-white">
                          Gokul Towers, 86/3, 2nd, MS Ramaiah Rd, Gokula
                          Extension, Bengaluru, Karnataka 560054
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
