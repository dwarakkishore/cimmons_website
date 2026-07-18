"use client";

import Image from "next/image";
import { useState } from "react";
import { useQuote } from "@/components/QuoteModal";

type Panel = {
  n: string;
  name: string;
  img: string;
  challenge: string;
  solution: string;
  results: string;
};

const PANELS: Panel[] = [
  {
    n: "01",
    name: "Healthcare",
    img: "/assets/img/hf-healthcare.webp",
    challenge:
      "Scaling patient support during peak seasons without losing the personal touch.",
    solution:
      "Deployed a 24/7 multilingual support team trained in healthcare communication.",
    results:
      "30% higher patient satisfaction and 50% faster response times.",
  },
  {
    n: "02",
    name: "Retail & E-Commerce",
    img: "/assets/img/service1-scaled.webp",
    challenge:
      "Handling order and returns volume that spiked during major sale events.",
    solution:
      "Added flexible seasonal agents across chat, email and voice channels.",
    results:
      "40% faster order resolution and a clear lift in repeat purchases.",
  },
  {
    n: "03",
    name: "Technology",
    img: "/assets/img/technology1.webp",
    challenge:
      "Growing product adoption outpaced the in-house support team's capacity.",
    solution:
      "Set up tier-1 and tier-2 technical support with fast escalation paths.",
    results:
      "35% drop in ticket backlog and higher onboarding completion rates.",
  },
  {
    n: "04",
    name: "Finance",
    img: "/assets/img/service3.webp",
    challenge:
      "Delivering dependable, compliant support for sensitive customer accounts.",
    solution:
      "Built a compliance-first team for query resolution and fraud alerts.",
    results:
      "Improved trust scores and quicker dispute turnaround times.",
  },
  {
    n: "05",
    name: "Real Estate",
    img: "/assets/img/service4.webp",
    challenge:
      "Slow lead follow-up was costing the agency qualified enquiries.",
    solution:
      "Ran proactive lead qualification and appointment scheduling around the clock.",
    results:
      "45% more booked viewings and a fuller, better-qualified pipeline.",
  },
  {
    n: "06",
    name: "IT & SaaS",
    img: "/assets/img/technology2.webp",
    challenge:
      "Users needed round-the-clock help across multiple time zones.",
    solution:
      "Provided omnichannel support with 24/7 coverage and clear SLAs.",
    results:
      "Higher retention and steadily rising customer satisfaction scores.",
  },
];

function ExpandedContent({ p }: { p: Panel }) {
  const rows = [
    { label: "Challenge:", text: p.challenge },
    { label: "Solution:", text: p.solution },
    { label: "Results:", text: p.results },
  ];
  return (
    <>
      <h3 className="font-display text-2xl font-semibold text-white lg:text-[28px]">
        {p.name}
      </h3>
      <div className="mt-5 space-y-3">
        {rows.map((r) => (
          <p key={r.label} className="text-sm leading-relaxed text-white/85">
            <span className="font-semibold text-gold">{r.label} </span>
            {r.text}
          </p>
        ))}
      </div>
      <a
        href="#case-studies"
        className="mt-7 inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-primary"
      >
        Read Full Case Study
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const { open: openQuote } = useQuote();

  return (
    <section id="services" className="bg-ink py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title text-[28px] text-white sm:text-[36px] lg:text-[44px]">
            We&rsquo;ve helped businesses improve customer experience, increase
            efficiency, and drive growth with our expert BPO solutions.
          </h2>
        </div>

        {/* Desktop: horizontal expanding accordion */}
        <div className="mt-14 hidden gap-3 md:flex md:h-[540px]">
          {PANELS.map((p, i) => {
            const isActive = i === active;
            return (
              <div
                key={p.n}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{ flexGrow: isActive ? 7 : 1, flexBasis: 0 }}
                className="group relative min-w-[70px] cursor-pointer overflow-hidden rounded-[18px] transition-[flex-grow] duration-500 ease-in-out"
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                      ? "bg-[linear-gradient(180deg,rgba(10,14,31,0.35)_20%,rgba(10,14,31,0.95)_100%)]"
                      : "bg-ink/70"
                  }`}
                />

                {/* number (top) */}
                <span className="absolute left-0 right-0 top-6 text-center font-display text-2xl font-bold text-white">
                  {p.n}
                </span>

                {/* vertical spine label (collapsed) */}
                <span
                  className={`absolute bottom-8 left-1/2 whitespace-nowrap font-display text-xl font-semibold text-white transition-opacity duration-300 [writing-mode:vertical-rl] [transform:translateX(-50%)_rotate(180deg)] ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {p.name}
                </span>

                {/* expanded content */}
                <div
                  className={`absolute bottom-0 left-0 w-[520px] max-w-[88%] p-8 transition-opacity duration-500 lg:p-10 ${
                    isActive
                      ? "opacity-100 delay-150"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <ExpandedContent p={p} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-12 space-y-5 md:hidden">
          {PANELS.map((p) => (
            <div key={p.n} className="relative overflow-hidden rounded-[18px]">
              <Image
                src={p.img}
                alt={p.name}
                width={640}
                height={460}
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,31,0.3)_15%,rgba(10,14,31,0.95)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-display text-sm font-bold text-gold">
                  {p.n}
                </span>
                <div className="mt-1">
                  <ExpandedContent p={p} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer row: custom solutions + Let's Talk circle */}
        <div className="mt-12 flex flex-wrap items-center justify-end gap-6">
          <p className="max-w-[200px] text-right text-white/70">
            Need custom solutions for your industry
          </p>
          <button
            onClick={openQuote}
            className="flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full bg-primary text-white transition-colors hover:bg-heading"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H8M17 7v9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-semibold">Let&rsquo;s Talk</span>
          </button>
        </div>
      </div>
    </section>
  );
}
