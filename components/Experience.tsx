const REASONS = [
  {
    step: "Step 01",
    title: "Cost Savings",
    desc: "Save up to 60% on operational costs without compromising quality.",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2.5" />
        <path d="M3 9h13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3" />
        <circle cx="16.5" cy="12.5" r="1.3" />
        <path d="M6 6l6-2.4a1 1 0 0 1 1.3.6L14 6" />
      </>
    ),
  },
  {
    step: "Step 02",
    title: "24/7 Availability",
    desc: "Always there when your customers need us, across time zones.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 1.8" />
      </>
    ),
  },
  {
    step: "Step 03",
    title: "Advanced Technology",
    desc: "Cutting-edge tools for efficiency, security, and analytics.",
    icon: (
      <>
        <rect x="5" y="8" width="14" height="10" rx="2.5" />
        <path d="M12 4v4M8.5 13h.01M15.5 13h.01M3 12v3M21 12v3" />
      </>
    ),
  },
];

export default function Experience() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <h2 className="section-title max-w-3xl text-[30px] sm:text-[40px] lg:text-[50px]">
          We become your strategic partner in delivering exceptional customer
          experiences and operational efficiency.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="group rounded-[24px] border border-black/10 bg-white p-8 transition-all duration-300 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] lg:p-10"
            >
              <div className="flex justify-end">
                <span className="rounded-full border border-black/10 px-4 py-1 text-sm font-medium text-body">
                  {r.step}
                </span>
              </div>
              <svg
                className="mt-6 h-14 w-14 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {r.icon}
              </svg>
              <h3 className="mt-10 font-display text-2xl font-semibold text-heading">
                {r.title}
              </h3>
              <p className="mt-4 text-body">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
