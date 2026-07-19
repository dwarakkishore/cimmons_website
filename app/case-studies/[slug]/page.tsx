import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CASE_STUDIES, getCaseStudy } from "@/lib/caseStudies";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return { title: "Case Study – CIMMON" };
  return {
    title: `${cs.name} Case Study – CIMMON | BPO & Call Center Services`,
    description: cs.tagline,
  };
}

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CaseStudyPage({ params }: { params: Params }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const others = CASE_STUDIES.filter((c) => c.slug !== cs.slug).slice(0, 3);

  const rows = [
    { label: "Challenge", text: cs.challenge },
    { label: "Solution", text: cs.solution },
    { label: "Results", text: cs.results },
  ];

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* ---------- Hero (split: text on cream, image on the right) ---------- */}
        {/* pt clears the fixed 104px header so nothing hides beneath it, while
            the cream fills the strip behind the transparent header. */}
        <section className="bg-cream pt-[104px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:px-16 lg:py-28">
              <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-semibold">
                <Link href="/" className="text-body transition-colors hover:text-primary">
                  Home
                </Link>
                <span className="text-body/40">/</span>
                <Link
                  href="/#services"
                  className="text-body transition-colors hover:text-primary"
                >
                  Case Studies
                </Link>
                <span className="text-body/40">/</span>
                <span className="text-primary">{cs.name}</span>
              </nav>
              <h1 className="section-title mt-6 text-[38px] leading-[1.08] sm:text-[48px] lg:text-[60px]">
                {cs.name}
              </h1>
              <p className="mt-5 max-w-md text-lg text-body">{cs.tagline}</p>
            </div>
            <div className="relative min-h-[300px] lg:min-h-[540px]">
              <Image
                src={cs.img}
                alt={cs.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ---------- Body: main content + sidebar ---------- */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
            {/* Main */}
            <div>
              {/* Overview */}
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                The Engagement
              </span>
              <h2 className="section-title text-[28px] sm:text-[34px] lg:text-[40px]">
                Deep experience and proven results.
              </h2>
              {cs.overview.map((p, i) => (
                <p key={i} className="mt-6 text-lg leading-relaxed text-body">
                  {p}
                </p>
              ))}

              {/* Two supporting images */}
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {cs.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-[20px]"
                  >
                    <Image
                      src={src}
                      alt={`${cs.name} — supporting image ${i + 1}`}
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Challenge / Solution / Results */}
              <h3 className="section-title mt-14 text-[24px] sm:text-[28px]">
                Business process outsourcing, done right.
              </h3>
              <div className="mt-6 space-y-4">
                {rows.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-[18px] border border-black/10 bg-soft p-6"
                  >
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-primary">
                      {r.label}
                    </span>
                    <p className="mt-2 text-lg text-heading">{r.text}</p>
                  </div>
                ))}
              </div>

              {/* How we delivered */}
              <h3 className="section-title mt-14 text-[24px] sm:text-[28px]">
                How we delivered.
              </h3>
              {cs.approach.map((p, i) => (
                <p key={i} className="mt-5 text-lg leading-relaxed text-body">
                  {p}
                </p>
              ))}

              {/* Stat row */}
              <div className="mt-12 grid grid-cols-1 gap-6 rounded-[24px] bg-ink px-8 py-10 sm:grid-cols-3">
                {cs.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-4xl font-bold text-white lg:text-5xl">
                      {s.value}
                    </div>
                    <div className="mt-2 text-sm font-medium text-white/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              {/* Project details */}
              <div className="rounded-[24px] border border-black/10 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <h3 className="font-display text-xl font-semibold text-heading">
                  Project Details
                </h3>
                <ul className="mt-6 space-y-4">
                  {cs.details.map((d) => (
                    <li
                      key={d.label}
                      className="flex items-center justify-between gap-4 border-b border-black/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-semibold text-body">
                        {d.label}
                      </span>
                      <span className="text-right font-semibold text-heading">
                        {d.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-8 font-display text-lg font-semibold text-heading">
                  Services Provided
                </h4>
                <ul className="mt-4 space-y-3">
                  {cs.services.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12l5 5L20 7"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-medium text-heading">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="mt-6 overflow-hidden rounded-[24px] bg-heading p-8">
                <h3 className="font-display text-2xl font-semibold text-white">
                  Want results like these?
                </h3>
                <p className="mt-3 text-white/70">
                  Let&rsquo;s design a support solution tuned to your industry and
                  goals.
                </p>
                <Link href="/contact/" className="btn-primary mt-6 w-full">
                  Contact Us Now
                  <Arrow />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ---------- More case studies ---------- */}
        <section className="bg-cream py-20 lg:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title text-[26px] sm:text-[32px] lg:text-[38px]">
                Explore more case studies
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/case-studies/${o.slug}/`}
                  className="group overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={o.img}
                      alt={o.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-display text-sm font-bold text-primary">
                      {o.n}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-heading">
                      {o.name}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 font-semibold text-heading transition-colors group-hover:text-primary">
                      Read Full Case Study
                      <Arrow />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Bottom CTA band ---------- */}
        <section className="border-t border-black/10 bg-white py-16 lg:py-20">
          <div className="container-x flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[46px]">
                Looking for a first-class BPO partner?
              </h2>
              <p className="mt-3 text-lg text-body">
                Let&rsquo;s build a customer-support solution that scales with
                your business.
              </p>
            </div>
            <Link
              href="/contact/"
              className="btn-primary flex-shrink-0 shadow-[7px_7px_0_0_theme(colors.heading)] hover:shadow-[4px_4px_0_0_theme(colors.heading)]"
            >
              Contact Us Now
              <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
