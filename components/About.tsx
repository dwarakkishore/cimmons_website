import Image from "next/image";

const POINTS = [
  "Global Reach with Multilingual Support",
  "Millions of Calls Handled Annually",
  "Secure, Compliant & Reliable Operations",
];

export default function About() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        {/* Wide heading spanning the top */}
        <h2 className="section-title max-w-4xl text-[30px] sm:text-[40px] lg:text-[52px]">
          We specialize in delivering top Call Center &amp; BPO solutions that
          help businesses scale effortlessly.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: stat + tilted image */}
          <div>
            <div className="mb-8">
              <div className="font-display text-4xl font-bold text-heading lg:text-5xl">
                99.9%
              </div>
              <div className="mt-1 text-body">Uptime Guarantee</div>
            </div>
            <div className="overflow-hidden rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.12)] lg:-rotate-2">
              <Image
                src="/assets/img/hf-about.webp"
                alt="Our team at work"
                width={620}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: paragraph, button, bullets, story link */}
          <div>
            <p className="max-w-md text-lg leading-relaxed text-body">
              Elevate your customer experience with our professional,
              multilingual call center and BPO services, available 24/7.
            </p>

            <a href="#services" className="btn-primary mt-8">
              Learn More
            </a>

            <ul className="mt-10 space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-heading text-white">
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
                  <span className="text-lg font-semibold text-heading">{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-body">
              Want to know more about our story and how we can help your
              business?{" "}
              <a
                href="/about-us"
                className="font-semibold text-primary underline underline-offset-2 hover:text-heading"
              >
                Explore Our Full Story
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
