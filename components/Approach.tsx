"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// The Cimmons engagement lifecycle — seven steps from first conversation to a
// running, improving operation. Revealed on scroll with a staggered fade-up and
// a brand-gradient connector that draws itself across the row.

type Step = {
  n: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Understand the Problem",
    desc: "Deep dive into your gaps, needs, and what “good” looks like.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-4.5-4.5" />
        <path d="M8.5 11h5M11 8.5v5" />
      </>
    ),
  },
  {
    n: "02",
    title: "Blueprint the Solution",
    desc: "Design workflows and SLAs to tackle root causes effectively.",
    icon: (
      <>
        <path d="M14 2H6.5A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5V8z" />
        <path d="M14 2v6h6" />
        <path d="M8.5 13h7M8.5 17h4.5" />
      </>
    ),
  },
  {
    n: "03",
    title: "Build the Right Team",
    desc: "Tailor the language mix, skills, and shift patterns to your challenge.",
    icon: (
      <>
        <path d="M16 21v-1.8a3.7 3.7 0 0 0-3.7-3.7H6.7A3.7 3.7 0 0 0 3 19.2V21" />
        <circle cx="9.5" cy="7.5" r="3.7" />
        <path d="M21 21v-1.8a3.7 3.7 0 0 0-2.8-3.58" />
        <path d="M15.5 4.1a3.7 3.7 0 0 1 0 7.16" />
      </>
    ),
  },
  {
    n: "04",
    title: "Train & Certify",
    desc: "Provide product and empathy training with rigorous QA calibration.",
    icon: (
      <>
        <path d="M12 3 2.5 8 12 13l9.5-5z" />
        <path d="M6.5 10.5v5c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-5" />
        <path d="M21.5 8v6" />
      </>
    ),
  },
  {
    n: "05",
    title: "Pilot & Go Live",
    desc: "Launch a supervised pilot inside your CRM before full rollout.",
    icon: (
      <>
        <path d="M13.5 3c3.8 1 6.5 3.7 7.5 7.5L14 17.5 6.5 10z" />
        <circle cx="14.5" cy="9.5" r="1.6" />
        <path d="M6.5 17.5 3 21M3.5 14.5 3 21l6.5-.5" />
      </>
    ),
  },
  {
    n: "06",
    title: "Measure & Refine",
    desc: "Analyze contacts and sample QA to track and continuously improve.",
    icon: (
      <>
        <path d="M3 20h18" />
        <path d="M7 20v-6M12 20v-10M17 20v-4" />
        <path d="m5 9 5-4.5 4 3 5.5-5" />
        <path d="M19.5 2.5h3v3" />
      </>
    ),
  },
  {
    n: "07",
    title: "Scale & Deliver",
    desc: "Leverage our tech and flex capacity for measurable, sustainable growth.",
    icon: (
      <>
        <path d="M12 2.5 21 7l-9 4.5L3 7z" />
        <path d="m3 12 9 4.5L21 12" />
        <path d="m3 17 9 4.5L21 17" />
      </>
    ),
  },
];

function StepIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function Approach() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="approach" className="scroll-mt-24 bg-cream py-20 lg:py-28">
      <div ref={ref} className="container-x">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[46px]">
            From problem statement to measurable impact.
          </h2>
          <p className="mt-6 text-lg text-body">
            A collaborative, outcome-focused approach that turns complex support
            challenges into scalable solutions — and keeps improving them long
            after go-live.
          </p>
        </div>

        {/* ---------- Desktop: horizontal timeline ---------- */}
        <div className="relative mt-16 hidden lg:block">
          <ol className="relative grid grid-cols-7">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                style={{ transitionDelay: `${i * 110}ms` }}
                className={`group relative flex flex-col items-center px-3 text-center transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                  revealed
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                {/* Segmented arrow connector */}
                {i < STEPS.length - 1 && (
                  <div
                    className="pointer-events-none absolute left-[50%] top-8 z-0 flex h-4 -translate-y-1/2 items-center"
                    style={{
                      width: "calc(100% - 80px)",
                      marginLeft: "40px",
                    }}
                  >
                    <div className="relative flex h-full w-full items-center">
                      {/* Base dashed line */}
                      <div className="absolute left-0 right-3 border-t-[2px] border-dashed border-black/15" />

                      {/* Animated dashed line overlay */}
                      <div
                        className={`absolute bottom-0 left-0 top-0 overflow-hidden transition-all duration-[800ms] ease-out ${
                          revealed ? "w-[calc(100%-10px)]" : "w-0"
                        }`}
                        style={{ transitionDelay: `${i * 150 + 200}ms` }}
                      >
                        {/* We use a wide inner div so the dashes don't squash/stretch as the wrapper grows */}
                        <div
                          className="absolute left-0 top-1/2 w-[500px] -translate-y-1/2 border-t-[2px] border-dashed border-primary"
                        />
                      </div>

                      {/* Arrow head at the end */}
                      <svg
                        className={`absolute right-[-4px] h-4 w-4 text-primary transition-all duration-300 ${
                          revealed
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${i * 150 + 800}ms` }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-[0_10px_25px_rgba(20,27,51,0.06)] ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_18px_35px_rgba(24,48,224,0.28)] motion-reduce:transition-none">
                  <StepIcon>{s.icon}</StepIcon>
                </span>

                <span className="mt-6 font-display text-[26px] font-bold leading-none text-primary transition-colors duration-300 group-hover:text-heading">
                  {s.n}
                </span>

                {/* Fixed two-line box so every description starts level */}
                <h3 className="mt-3 flex min-h-[46px] items-center font-display text-[17px] font-semibold leading-snug text-heading">
                  {s.title}
                </h3>

                <div className="mt-3 h-px w-10 bg-gold/70 transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />

                <p className="mt-4 text-[14px] leading-relaxed text-body">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* ---------- Mobile & tablet: vertical timeline ---------- */}
        <ol className="mt-14 lg:hidden">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              style={{ transitionDelay: `${i * 90}ms` }}
              className={`relative flex gap-5 pb-9 last:pb-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              {/* Vertical segmented arrow connector */}
              {i < STEPS.length - 1 && (
                <div
                  className="absolute bottom-1 left-7 top-14 w-4 -translate-x-1/2 z-0"
                  aria-hidden="true"
                >
                  {/* Base dashed line */}
                  <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 border-l-[2px] border-dashed border-black/15" />

                  {/* Animated dashed line overlay */}
                  <div
                    className={`absolute left-1/2 top-0 w-[2px] -translate-x-1/2 overflow-hidden transition-all duration-[800ms] ease-out ${
                      revealed ? "h-[calc(100%-8px)]" : "h-0"
                    }`}
                    style={{ transitionDelay: `${i * 150 + 200}ms` }}
                  >
                    <div className="absolute left-0 top-0 h-[500px] w-full border-l-[2px] border-dashed border-primary" />
                  </div>

                  {/* Arrow head at the bottom */}
                  <svg
                    className={`absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-4 w-4 text-primary transition-all duration-300 ${
                      revealed
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 150 + 800}ms` }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              )}

              <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-[0_10px_25px_rgba(20,27,51,0.06)] ring-1 ring-black/5">
                <StepIcon>{s.icon}</StepIcon>
              </span>
              <div className="pt-1">
                <span className="font-display text-sm font-bold text-primary">
                  {s.n}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-heading">
                  {s.title}
                </h3>
                <div className="mt-3 h-px w-10 bg-gold/70" />
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
