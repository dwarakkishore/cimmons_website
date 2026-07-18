"use client";

import Image from "next/image";
import { useQuote } from "@/components/QuoteModal";

const HIGHLIGHTS = [
  {
    icon: "/assets/img/success1.png",
    text: "Boosting customer satisfaction for an e-commerce brand",
  },
  {
    icon: "/assets/img/success2.png",
    text: "Optimizing patient support for a healthcare provider",
  },
  {
    icon: "/assets/img/success3.png",
    text: "Driving sales growth for a fintech startup",
  },
];

const RESULTS = [
  {
    label: "Challenge:",
    text: "High call volumes, long wait times, and low customer retention.",
  },
  {
    label: "Solution:",
    text: "Implemented a 24/7 support team with AI-powered chat assistance.",
  },
  {
    label: "Results:",
    text: "30% increase in customer satisfaction and 40% faster response times.",
  },
];

export default function CaseStudies() {
  const { open: openQuote } = useQuote();

  return (
    <section id="case-studies" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title text-[28px] sm:text-[36px] lg:text-[42px]">
            Real results, real impact! See how we&rsquo;ve helped businesses
            like yours achieve success with our expert Call Center &amp; BPO
            solutions.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: highlights + Let's Talk */}
          <div className="flex flex-col justify-between">
            <div>
              {HIGHLIGHTS.map((h, i) => (
                <div
                  key={h.text}
                  className={`flex items-center gap-5 py-6 ${
                    i !== HIGHLIGHTS.length - 1 ? "border-b border-black/10" : ""
                  }`}
                >
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-heading">
                    <Image
                      src={h.icon}
                      alt=""
                      width={26}
                      height={26}
                      className="brightness-0 invert"
                    />
                  </span>
                  <p className="font-display text-xl font-semibold text-heading">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6">
              <p className="max-w-[160px] text-body">
                Want to see similar results for your business?
              </p>
              <button
                onClick={openQuote}
                className="flex h-24 w-24 flex-shrink-0 flex-col items-center justify-center gap-1 rounded-full border border-heading/25 text-heading transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H8M17 7v9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-semibold">Let&rsquo;s Talk</span>
              </button>
            </div>
          </div>

          {/* Right: featured case study image with overlay */}
          <div className="relative overflow-hidden rounded-[24px]">
            <Image
              src="/assets/img/success.webp"
              alt="Featured case study"
              width={620}
              height={620}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,31,0)_40%,rgba(10,14,31,0.85)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
              <div className="space-y-2">
                {RESULTS.map((r) => (
                  <p key={r.label} className="text-sm leading-relaxed text-white/90">
                    <span className="font-semibold text-white">{r.label} </span>
                    {r.text}
                  </p>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-gold"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
