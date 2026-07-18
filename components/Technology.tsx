import Image from "next/image";

const FEATURES = [
  "CRM & Ticketing Systems",
  "AI-Powered Chatbots & Automation",
  "Omnichannel Support",
  "Real-Time Analytics & Reporting",
  "Secure & Compliant Systems",
];

export default function Technology() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow mb-6">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Technology
          </span>
          <h2 className="section-title text-[28px] sm:text-[36px] lg:text-[42px]">
            We leverage cutting-edge technology to enhance efficiency, improve
            customer interactions, and drive measurable results for your
            business.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* left image + award badge */}
          <div className="relative overflow-hidden rounded-[24px]">
            <Image
              src="/assets/img/technology1.webp"
              alt="Technology in action"
              width={620}
              height={480}
              className="h-full w-full object-cover"
            />
            <div className="absolute right-6 top-6 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
              <div className="font-display text-2xl font-bold text-heading">
                356+
              </div>
              <div className="text-xs font-medium text-body">
                Skilled Employees
              </div>
            </div>
          </div>

          {/* right feature list */}
          <div className="flex flex-col justify-center rounded-[24px] bg-cream p-8 lg:p-12">
            <p className="max-w-md text-body">
              From automation to real-time analytics, we combine the right tools
              to optimize every interaction and reduce operational costs.
            </p>
            <ul className="mt-8 divide-y divide-black/10">
              {FEATURES.map((f, i) => (
                <li key={f} className="flex items-center gap-4 py-4">
                  <span className="font-display text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold text-heading">{f}</span>
                  <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="#1830E0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
