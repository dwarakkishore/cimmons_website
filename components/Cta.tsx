import Image from "next/image";

export default function Cta() {
  return (
    <section id="contact" className="bg-white pb-0 pt-4">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-14 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]" />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <span className="eyebrow-dark mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Get In Touch
              </span>
              <h2 className="section-title text-[36px] text-white sm:text-[48px] lg:text-[60px]">
                Let&rsquo;s Talk
              </h2>
              <p className="mt-3 text-xl text-white/70">
                Let&rsquo;s get started right now
              </p>
              <a href="mailto:connect@cimmons.in" className="btn-primary mt-8">
                Contact Us Today
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
            <div className="relative mx-auto hidden aspect-square w-full max-w-[300px] overflow-hidden rounded-[24px] lg:block">
              <Image
                src="/assets/img/hf-footer-image.webp"
                alt="Contact us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
