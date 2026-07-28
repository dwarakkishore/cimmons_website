"use client";

import Image from "next/image";
import { useState } from "react";
import { useQuote } from "@/components/QuoteModal";
import { SECTORS, type Sector } from "@/lib/sectors";

type Panel = Sector;

const PANELS: Panel[] = SECTORS;

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
        href={`/sectors/${p.slug}/`}
        className="group mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:bg-primary"
      >
        Explore Sector
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
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

        {/* Desktop: horizontal expanding accordion.
            Seven panels need real width, so this only kicks in at lg — below
            that the stacked cards read better. */}
        <div className="mt-14 hidden gap-3 lg:flex lg:h-[540px]">
          {PANELS.map((p, i) => {
            const isActive = i === active;
            return (
              <div
                key={p.n}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{ flexGrow: isActive ? 7 : 1, flexBasis: 0 }}
                className="group relative min-w-[64px] cursor-pointer overflow-hidden rounded-[18px] transition-[flex-grow] duration-500 ease-in-out"
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
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

        {/* Mobile & tablet: stacked cards */}
        <div className="mt-12 space-y-5 lg:hidden">
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
            Need custom solutions for your sector
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
