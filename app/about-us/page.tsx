import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About Cimmons — ISO-Certified BPO in Bengaluru",
  description:
    "Cimmons is one of the leading BPO | BPM and Call Center service providers in India, based in Bangalore — delivering excellent, immediate customer solutions 24/7, 365 days a year.",
  alternates: { canonical: "/about-us/" },
};

const STATS = [
  { end: 3, suffix: "+", label: "Years of Experience" },
  { end: 14, suffix: "+", label: "Happy Clients" },
  { end: 21, suffix: "+", label: "Projects Delivered" },
  { end: 356, suffix: "+", label: "Employees" },
  { end: 21, suffix: "%", label: "Year-on-Year Growth" },
];

const HOW_WE_WORK = [
  {
    title: "Inbound Support",
    desc: "Telesales, inbound call center support and customer care that resolve queries the moment they arrive.",
  },
  {
    title: "Outbound Campaigns",
    desc: "Proactive outbound calling, lead generation and net promoter surveys that grow your business.",
  },
  {
    title: "Email & Chat",
    desc: "Non-voice email and live chat support keeping your customers connected across every channel.",
  },
  {
    title: "24/7 Availability",
    desc: "A 365-days, 24/7 window service supporting B2C, B2B, G2C and international clients alike.",
  },
];

const WHY = [
  {
    title: "Employee-First Culture",
    desc: "We believe an employee-first factor eventually leads to a customer-first factor — giving our people the room to express their talent, passion, and commitment to excellence.",
  },
  {
    title: "ISO Certified Operations",
    desc: "Cimmons holds ISO 9001:2015 and ISMS 27001:2013 certifications, ensuring quality management and information security across every engagement.",
  },
  {
    title: "Every Business Model",
    desc: "We serve B2C, B2B and G2C business models with dedicated teams tuned to the demands of each, including international clients.",
  },
  {
    title: "Always On, 365 Days",
    desc: "A round-the-clock, 24/7 window service means your customers are never left waiting — any day of the year.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Page banner + breadcrumb */}
        <section className="bg-cream pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="container-x text-center">
            <h1 className="section-title text-[36px] sm:text-[46px] lg:text-[56px]">
              About Us
            </h1>
            <nav className="mt-5 flex items-center justify-center gap-2 text-[15px] font-semibold">
              <a href="/" className="text-body transition-colors hover:text-primary">
                Home
              </a>
              <span className="text-body/50">/</span>
              <span className="text-primary">About Us</span>
            </nav>
          </div>
        </section>

        {/* About / Our Story */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="/assets/img/hf-about.webp"
                  alt="The Cimmons team at work"
                  width={620}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-7 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="font-display text-4xl font-bold text-primary">
                  356+
                </div>
                <div className="mt-1 text-sm font-medium text-body">
                  People behind your customers
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Who We Are
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                One of the leading BPO, BPM and Call Center service providers in
                India.
              </h2>
              <p className="mt-6 text-lg text-body">
                Based out of Bangalore, Cimmons offers solutions spanning
                marketing to customer care. We pride ourselves on delivering
                excellent and immediate solutions in every customer support
                environment — from telesales and inbound/outbound support to
                email, chat and net promoter surveys.
              </p>
              <p className="mt-4 text-lg text-body">
                Our guiding principle is <strong className="text-heading">People First</strong>. We
                provide our employees the opportunity to express their talent,
                passion and commitment to excellence — because an employee-first
                factor eventually leads to a customer-first factor.
              </p>
              <a href="#contact" className="btn-primary mt-9">
                Discover More
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
          </div>
        </section>

        {/* Stats counters */}
        <section className="bg-ink py-16 lg:py-20">
          <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl font-bold text-white lg:text-5xl">
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm font-medium text-white/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                How We Work
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                From marketing to customer care — solutions across every channel.
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {HOW_WE_WORK.map((c) => (
                <div
                  key={c.title}
                  className="group rounded-[24px] border border-black/10 bg-white p-8 transition-all duration-300 hover:border-transparent hover:bg-cream hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                >
                  <h3 className="font-display text-2xl font-semibold text-heading">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-body">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Why Choose Us
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Excellent, immediate solutions — built on trust and technology.
              </h2>
              <div className="mt-8 space-y-6">
                {WHY.map((w) => (
                  <div key={w.title} className="flex items-start gap-4">
                    <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12l5 5L20 7"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-heading">
                        {w.title}
                      </h3>
                      <p className="mt-1 text-body">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[24px]">
              <Image
                src="/assets/img/success.webp"
                alt="Cimmons delivering customer experiences"
                width={620}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-[24px] border border-black/10 bg-white p-10 transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream font-display text-2xl font-bold text-primary">
                V
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-heading">
                Our Vision
              </h3>
              <p className="mt-3 text-lg text-body">
                To become the pioneer in providing the best customer experience
                using cutting-edge technology — thereby meeting our customer&rsquo;s
                needs with the utmost sincerity and satisfaction.
              </p>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-white p-10 transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream font-display text-2xl font-bold text-primary">
                M
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-heading">
                Our Mission
              </h3>
              <p className="mt-3 text-lg text-body">
                To be the one-stop shop for customer service and data analytics —
                with our primary focus always on customer satisfaction and
                effective solutions.
              </p>
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
