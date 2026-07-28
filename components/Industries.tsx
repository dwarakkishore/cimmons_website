"use client";

import Image from "next/image";
import { useState } from "react";

type Industry = {
  name: string;
  slug: string;
  desc: string;
  quote: string;
  author: string;
  bigImg: string;
  smallImg: string;
};

const INDUSTRIES: Industry[] = [
  {
    name: "Healthcare",
    slug: "healthcare",
    desc: "HIPAA-compliant patient support, appointment scheduling, and medical billing assistance that improve efficiency and patient satisfaction.",
    quote:
      "Their service quality and professionalism went beyond what we expected — our customer engagement has never been stronger.",
    author: "Adrian Morrison",
    bigImg: "/assets/img/hf-healthcare.webp",
    smallImg: "/assets/img/service2.webp",
  },
  {
    name: "E-commerce & Retail",
    slug: "retail-ecommerce",
    desc: "Order management, returns handling, and omnichannel customer care that keep shoppers happy through every peak season.",
    quote:
      "They scaled effortlessly through our busiest sale periods and kept our customers delighted the whole way.",
    author: "Priya Sharma",
    bigImg: "/assets/img/service1-scaled.webp",
    smallImg: "/assets/img/service3.webp",
  },
  {
    name: "Finance & Banking",
    slug: "finance",
    desc: "Secure, compliant support for account queries, transactions, and fraud alerts your customers can rely on.",
    quote:
      "Dependable, compliance-first support that our customers genuinely trust day in and day out.",
    author: "Daniel Fischer",
    bigImg: "/assets/img/service3.webp",
    smallImg: "/assets/img/service4.webp",
  },
  {
    name: "IT & SaaS",
    slug: "it-saas",
    desc: "Tier-1 and tier-2 technical support, user onboarding, and omnichannel ticket resolution for fast-growing software teams.",
    quote:
      "They became a true extension of our product team and lifted our support satisfaction scores fast.",
    author: "Sofia Alvarez",
    bigImg: "/assets/img/technology1.webp",
    smallImg: "/assets/img/service5.webp",
  },
];

const AVATARS = [
  "/assets/img/service1-scaled.webp",
  "/assets/img/service2.webp",
  "/assets/img/service3.webp",
  "/assets/img/service4.webp",
];

export default function Industries() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <div className="container-x">
        {/* Heading + intro */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <h2 className="section-title text-[30px] text-white sm:text-[38px] lg:text-[48px]">
            Sectors we serve
          </h2>
          <div className="max-w-md lg:pt-2">
            <p className="text-white/60">
              We provide specialized Call Center &amp; BPO solutions tailored to
              a wide range of industries. Our expertise ensures seamless
              operations and business growth across multiple sectors.
            </p>
            <a
              href="/sectors/"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-white"
            >
              View all seven sectors
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

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Left: tab list + happy-customers stat */}
          <div className="flex flex-col justify-between">
            <ul className="space-y-5">
              {INDUSTRIES.map((ind, i) => {
                const isActive = i === active;
                return (
                  <li key={ind.name}>
                    <button
                      onClick={() => setActive(i)}
                      className={`inline-flex items-center gap-3 font-display text-xl font-semibold transition-colors ${
                        isActive
                          ? "text-gold"
                          : "text-white hover:text-white/70"
                      }`}
                    >
                      {ind.name}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-opacity ${
                          isActive ? "opacity-100" : "opacity-40"
                        }`}
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12">
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <span
                    key={i}
                    className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-ink ring-1 ring-white/20"
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/60">
                <span className="font-bold text-white">30k+</span> Happy
                customers receive our services
              </p>
            </div>
          </div>

          {/* Right: description + images + testimonial */}
          <div>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gold" />
              <div className="max-w-lg">
                <p className="text-lg leading-relaxed text-white/80">
                  {current.desc}
                </p>
                <a
                  href={`/sectors/${current.slug}/`}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-white"
                >
                  Explore {current.name}
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

            <div className="relative mt-10">
              {/* small circular image + ring */}
              <div className="flex items-center gap-2">
                <span className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={current.smallImg}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </span>
                <span className="h-32 w-32 rounded-full border border-white/15" />
              </div>

              {/* big image with overlapping testimonial */}
              <div className="relative mt-6 lg:mt-0 lg:flex lg:justify-end">
                <div className="relative w-full max-w-md overflow-hidden rounded-[24px] lg:-mt-24">
                  <Image
                    src={current.bigImg}
                    alt={current.name}
                    width={460}
                    height={520}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="relative z-10 -mt-16 rounded-[20px] bg-white/10 p-7 backdrop-blur-sm lg:absolute lg:bottom-8 lg:right-40 lg:mt-0 lg:max-w-md">
                  <p className="font-display text-lg font-semibold leading-snug text-white">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm text-white/60">{current.author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
