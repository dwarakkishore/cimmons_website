"use client";

import Image from "next/image";
import { useState } from "react";
import { useQuote } from "@/components/QuoteModal";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/site";

type QA = { q: string; a: string };

const CATEGORIES: { name: string; faqs: QA[] }[] = [
  {
    name: "General Questions",
    faqs: [
      {
        q: "How quickly can we get started with your services?",
        a: "Most clients are fully onboarded within a few business days. After a short consultation we assemble your dedicated team, configure the tools and run a quick QA cycle before going live.",
      },
      {
        q: "How do you ensure the quality of customer interactions?",
        a: "Every interaction is backed by continuous monitoring, regular QA scoring and ongoing agent training, so your customers receive consistent, on-brand support.",
      },
      {
        q: "What pricing models do you offer?",
        a: "We offer per-hour, per-seat and fully custom plans, letting you scale up or down based on your call volume and business needs.",
      },
      {
        q: "How do you handle data security and compliance?",
        a: "We operate secure, compliant systems with strict access controls and industry-standard certifications to keep your sensitive data protected at all times.",
      },
      {
        q: "Can you provide multilingual support?",
        a: "Yes. Our global teams deliver multilingual support across time zones, helping you serve customers wherever they are.",
      },
    ],
  },
  {
    name: "Pricing and Costs",
    faqs: [
      {
        q: "What pricing models do you offer?",
        a: "Per-hour, per-seat and fully custom plans — so you only pay for what fits your call volume and business needs.",
      },
      {
        q: "Are there any long-term commitments?",
        a: "No. You can scale up or down as your needs change, without being locked into long contracts.",
      },
      {
        q: "How is billing handled?",
        a: "Transparent monthly billing with clear reporting and no hidden fees, so you always know what you're paying for.",
      },
    ],
  },
  {
    name: "Security and Data Privacy",
    faqs: [
      {
        q: "How do you handle data security and compliance?",
        a: "We run secure, compliant systems with strict access controls, encryption and industry-standard certifications.",
      },
      {
        q: "Are you GDPR and HIPAA compliant?",
        a: "Yes. Our processes align with GDPR, HIPAA and other regional standards to safeguard sensitive information.",
      },
      {
        q: "Where is customer data stored?",
        a: "Data is stored in secure, access-controlled environments with regular audits and monitoring.",
      },
    ],
  },
  {
    name: "Service Offerings",
    faqs: [
      {
        q: "What services do you provide?",
        a: "Inbound and outbound calling, helpdesk support, lead generation, back-office processing and virtual assistance.",
      },
      {
        q: "Do you support omnichannel communication?",
        a: "Yes — voice, email, live chat and social support, all managed in one place.",
      },
      {
        q: "Can you handle seasonal spikes?",
        a: "We scale flexible teams up and down to cover peak-season demand without missing a beat.",
      },
    ],
  },
  {
    name: "Implementation and Support",
    faqs: [
      {
        q: "What does onboarding look like?",
        a: "A short consultation, team setup, tool configuration and a QA cycle — most clients go live within a few business days.",
      },
      {
        q: "Who is my point of contact?",
        a: "You get a dedicated account manager for day-to-day coordination and ongoing support.",
      },
      {
        q: "How do you keep quality consistent?",
        a: "Through continuous monitoring, regular QA scoring and ongoing agent training tailored to your brand.",
      },
    ],
  },
];

export default function Faq() {
  const [cat, setCat] = useState(0);
  const [open, setOpen] = useState(0);
  const { open: openQuote } = useQuote();

  const faqs = CATEGORIES[cat].faqs;

  return (
    <section className="bg-white py-20 lg:py-28">
      {/* FAQPage schema — built from the default-visible "General Questions"
          category, which is the set present in the static HTML. */}
      <JsonLd data={faqSchema(CATEGORIES[0].faqs.map((f) => ({ q: f.q, a: f.a })))} />
      <div className="container-x">
        <div className="relative rounded-[28px] bg-ink px-6 py-14 text-white lg:px-14">
          <h2 className="section-title text-center text-[28px] text-white sm:text-[36px] lg:text-[42px]">
            Answers to your questions about outsourcing
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: category tabs + image */}
            <div>
              <ul className="space-y-4">
                {CATEGORIES.map((c, i) => {
                  const isActive = i === cat;
                  return (
                    <li key={c.name}>
                      <button
                        onClick={() => {
                          setCat(i);
                          setOpen(0);
                        }}
                        className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                          isActive ? "text-gold" : "text-white hover:text-white/70"
                        }`}
                      >
                        {c.name}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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

              {/* In-flow on mobile; on lg it anchors to the panel bottom and
                  overflows halfway into the white area below (half dark, half white) */}
              <div className="mt-10 overflow-hidden rounded-[20px] lg:absolute lg:bottom-[-150px] lg:left-14 lg:mt-0 lg:h-[420px] lg:w-[440px]">
                <Image
                  src="/assets/img/question-image.webp"
                  alt="Support specialist"
                  width={460}
                  height={420}
                  className="h-64 w-full object-cover lg:h-full"
                />
              </div>
            </div>

            {/* Right: accordion */}
            <div className="space-y-3">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.q}
                    className={`rounded-2xl transition-colors ${
                      isOpen ? "bg-white/10" : "bg-white/5"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-white">{item.q}</span>
                      <span
                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-gold text-gold"
                            : "border-white/30 text-white/70"
                        }`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          {isOpen ? (
                            <path
                              d="M5 12h14"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          ) : (
                            <path
                              d="M12 5v14M5 12h14"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          )}
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Let's Talk row on white — extra height so the overhanging image clears the blog */}
        <div className="mt-10 flex flex-wrap items-center justify-end gap-6 lg:min-h-[180px]">
          <p className="max-w-[180px] text-right text-body">
            Need custom solutions for your industry
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
    </section>
  );
}
