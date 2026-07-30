"use client";

import Image from "next/image";
import { useQuote } from "@/components/QuoteModal";
import Counter from "@/components/Counter";

const STATS = [
  { end: 356, suffix: "+", label: "Employees" },
  { end: 25, suffix: "+", label: "Happy Clients" },
];

export default function Hero() {
  const { open: openQuote } = useQuote();
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white to-cream pt-28 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:pt-32"
    >
      {/* Desktop full-bleed organic tri-color glow — one saturated cloud built from the three
          CIMMON ring colors flowing diagonally: blue dominates the upper area, gold the middle,
          maroon the lower area, all heavily blurred so they melt together. Positioned against the
          SECTION so it bleeds off the right viewport edge; a white veil + left wash keep the
          overlap clean and dissolve the cloud to pure white under the headline. */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block" aria-hidden>
        {/* Blue — upper region, bleeding off the top-right */}
        <div className="absolute right-[-180px] top-[-260px] h-[900px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(24,48,224,0.55)_0%,rgba(24,48,224,0.32)_38%,rgba(24,48,224,0.12)_56%,transparent_72%)] blur-[120px]" />
        {/* Gold — middle band, behind/left of the agent so it bridges blue and maroon */}
        <div className="absolute right-[40px] top-[26%] h-[760px] w-[860px] rounded-full bg-[radial-gradient(circle_at_center,rgba(240,192,0,0.45)_0%,rgba(240,192,0,0.24)_42%,rgba(240,192,0,0.08)_58%,transparent_70%)] blur-[110px]" />
        {/* Maroon — lower region, anchored to the hero floor, bleeding off the bottom-right */}
        <div className="absolute bottom-[-300px] right-[-140px] h-[820px] w-[920px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,0,0,0.40)_0%,rgba(168,0,0,0.20)_42%,rgba(168,0,0,0.07)_58%,transparent_68%)] blur-[130px]" />
        {/* Soft white veil where all three overlap so the blend stays luminous, not muddy */}
        <div className="absolute right-[12%] top-[38%] h-[460px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.14)_45%,transparent_70%)] blur-[90px]" />
        {/* Left wash — guarantees the cloud dissolves to clean white under the dark headline */}
        <div className="absolute inset-y-0 left-0 w-[54%] bg-gradient-to-r from-white via-white/85 to-transparent" />
      </div>

      {/* Mobile full-bleed tri-color glow — same blue→gold→maroon melt as desktop, anchored to
          the LOWER half of the section (behind the in-flow photo) and bleeding off both edges so
          the gradient reads clearly around the cutout on small screens. */}
      <div className="pointer-events-none absolute inset-0 -z-10 block lg:hidden" aria-hidden>
        {/* Blue — upper-right of the photo area */}
        <div className="absolute right-[-120px] top-[38%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(24,48,224,0.55)_0%,rgba(24,48,224,0.30)_42%,transparent_70%)] blur-[80px]" />
        {/* Gold — centered behind the agent */}
        <div className="absolute left-[42%] top-[58%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(240,192,0,0.48)_0%,rgba(240,192,0,0.22)_45%,transparent_70%)] blur-[75px]" />
        {/* Maroon — anchored to the bottom-left, bleeding off the floor */}
        <div className="absolute bottom-[-80px] left-[-100px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,0,0,0.42)_0%,rgba(168,0,0,0.18)_45%,transparent_68%)] blur-[85px]" />
        {/* Soft white veil so the blend stays luminous where the three overlap */}
        <div className="absolute left-1/2 top-[52%] h-[300px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0%,transparent_70%)] blur-[70px]" />
      </div>

      <div className="container-x relative grid grid-cols-1 items-center gap-10 pb-16 lg:static lg:grid-cols-[1fr_460px] lg:gap-6 lg:pb-24">
        {/* Left: content */}
        <div className="min-w-0 max-w-[820px]">
          <h1 className="section-title text-[34px] leading-[1.1] sm:text-[52px] lg:text-[72px] xl:text-[88px]">
            Exceptional Support{" "}
            <span className="font-light text-body">Every Call Every Time</span>
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <button onClick={openQuote} className="btn-primary">
              Schedule a Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Call Us On — phone contact below the primary CTA */}
          <a
            href="tel:+918069261999"
            className="group mt-10 inline-flex items-center gap-4"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-heading text-white transition-colors group-hover:bg-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.5 11.5 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .58 3.6 1 1 0 0 1-.25 1l-2.23 2.2Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>
              <span className="block text-base text-body">Call Us On:</span>
              <span className="block font-display text-2xl font-bold text-heading">
                +91 80 6926 1999
              </span>
            </span>
          </a>
        </div>

        {/* Right: image + stats.
            Below lg: normal-flow column (centered photo over a soft glow, stats row beneath).
            lg+: this cell goes static/empty — the photo and stats become absolute against the
            SECTION so the photo anchors to the hero floor and bleeds off the right viewport edge. */}
        <div className="relative min-w-0 lg:static">
          {/* Full-bleed cutout: anchored to section bottom, kissing past the right viewport edge */}
          <div className="relative z-10 mx-auto w-full max-w-[420px] lg:absolute lg:bottom-0 lg:right-[13vw] lg:top-24 lg:mx-0 lg:w-[min(38vw,560px)] lg:max-w-none">
            <Image
              src="/assets/img/hero1.png"
              alt="Customer support agent"
              width={648}
              height={708}
              priority
              sizes="(min-width: 1024px) 46vw, 420px"
              className="h-auto w-full object-contain object-bottom drop-shadow-[0_28px_60px_rgba(20,27,51,0.30)] lg:h-full lg:object-right-bottom"
            />
          </div>

          {/* Stats — plain text, no cards. Below lg: 3-col row under the photo in ink so it
              reads on the white background. lg+: stacked white text pinned to the right edge
              of the section, right-aligned over the saturated glow/photo like the reference. */}
          <div className="relative z-20 mt-6 grid grid-cols-2 gap-2 text-center sm:gap-3 lg:absolute lg:right-[3.5vw] lg:top-1/2 lg:mt-0 lg:flex lg:-translate-y-1/2 lg:flex-col lg:items-end lg:gap-14 lg:text-right">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="lg:drop-shadow-[0_2px_8px_rgba(20,27,51,0.45)]"
              >
                <div className="font-display text-2xl font-bold text-heading sm:text-3xl lg:text-5xl lg:text-white">
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase leading-tight tracking-wide text-body sm:text-xs lg:text-sm lg:text-white/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
