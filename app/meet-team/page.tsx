import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Meet the Team — Cimmons Leadership",
  description:
    "Meet the Cimmons team — a young, like-minded group of professionals united by the idea of creating an innovative future in customer experience.",
  alternates: { canonical: "/meet-team/" },
};

type Member = {
  name: string;
  position: string;
  linkedin: string;
  bio?: string;
};

const CEO: Member = {
  name: "Sharrath K M",
  position: "CEO and Founder",
  linkedin: "https://www.linkedin.com/in/sharrath-k-m-640452136",
  bio: "Cimmons was founded and laid its foundation by Mr. Sharrath KM in the year 2020, in virtue to deliver best-quality service whilst meeting continuously growing customer needs. He is a young, dynamic leader who has a vision of heightened scales to be the pioneer in the industry. He has diverse experience across the service and sales industries, which enables quality, customer delight and productivity in the organisation. He walks the talk by leading and directing overall management, development and direction of projects — with a track record of building high-performance teams, human resource management, and growing the client service business across various domains.",
};

const TEAM: Member[] = [
  {
    name: "Neema Ganapathy",
    position: "Manager – HR",
    linkedin: "https://www.linkedin.com/in/neema-ganapathy-b9561b148/",
  },
  {
    name: "Neema Ganapathy",
    position: "Manager – HR",
    linkedin: "https://www.linkedin.com/in/neema-ganapathy-b9561b148/",
  },
  {
    name: "Raghunandan D",
    position: "Manager – Operations",
    linkedin: "https://www.linkedin.com/in/raghunandan-d-354393117/",
  },
  {
    name: "Ganesh Babanagar",
    position: "Senior IT Engineer",
    linkedin: "https://www.linkedin.com/in/ganesh-babanagar-13a9a061/",
  },
  {
    name: "Anupam Upadhyay",
    position: "Manager – Talent Acquisition",
    linkedin: "https://www.linkedin.com/in/anupam-upadhyay-ba8489173/",
  },
  {
    name: "Jaisimha Murthy",
    position: "Manager – Business Development",
    linkedin: "https://www.linkedin.com/in/jaisimha-ramamurthy-4bb69984/",
  },
  {
    name: "Padmaja U",
    position: "Manager – Accounts",
    linkedin: "https://www.linkedin.com/in/padmaja-upadrastha-98201130/",
  },
  {
    name: "Preethi Sridhar",
    position: "Assistant Manager – Operations",
    linkedin: "https://www.linkedin.com/in/preethi-sridhar-7764a4103/",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function MeetTeamPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Page banner + breadcrumb */}
        <section className="bg-cream pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="container-x text-center">
            <h1 className="section-title text-[36px] sm:text-[46px] lg:text-[56px]">
              Meet Our Team
            </h1>
            <nav className="mt-5 flex items-center justify-center gap-2 text-[15px] font-semibold">
              <a href="/" className="text-body transition-colors hover:text-primary">
                Home
              </a>
              <span className="text-body/50">/</span>
              <span className="text-primary">Meet Our Team</span>
            </nav>
          </div>
        </section>

        {/* Featured founder */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Our Team
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Meet our professional staff
              </h2>
              <p className="mt-6 text-lg text-body">
                We are a young and like-minded team of professionals united by
                the idea of creating an innovative future. We stay success-driven
                while keeping a healthy work-life balance — through jogging,
                meditation and the odd game of table tennis.
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
              <div className="relative mx-auto w-full max-w-[380px]">
                <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[24px] bg-cream">
                  <Image
                    src="/Sharrath1.png"
                    alt="Sharrath K M — CEO and Founder of Cimmons"
                    width={570}
                    height={600}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-heading">
                  {CEO.name}
                </h3>
                <p className="mt-1 text-lg font-semibold text-primary">
                  {CEO.position}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-body">
                  {CEO.bio}
                </p>
                <a
                  href={CEO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${CEO.name} on LinkedIn`}
                  className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21h-4V9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Our Staff
              </span>
              <h2 className="section-title text-[28px] sm:text-[34px] lg:text-[40px]">
                The people behind Cimmons
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((m) => (
                <div
                  key={m.name}
                  className="group overflow-hidden rounded-[24px] border border-black/10 bg-white text-center transition-all duration-300 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative flex aspect-square items-center justify-center bg-[linear-gradient(135deg,#1830E0_0%,#141B33_100%)]">
                    <span className="font-display text-5xl font-bold text-white/90">
                      {initials(m.name)}
                    </span>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="absolute bottom-4 left-1/2 flex h-11 w-11 -translate-x-1/2 translate-y-4 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-lg transition-all duration-300 hover:bg-primary hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21h-4V9z" />
                      </svg>
                    </a>
                  </div>
                  <div className="px-5 py-6">
                    <h3 className="font-display text-xl font-semibold text-heading">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {m.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="bg-cream py-20 lg:py-24">
          <div className="container-x text-center">
            <span className="eyebrow mb-6">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Get In Touch
            </span>
            <h2 className="section-title mx-auto max-w-3xl text-[30px] sm:text-[38px] lg:text-[44px]">
              Need any consultations? Let&rsquo;s build your customer experience
              together.
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href="/#contact" className="btn-primary">
                Free Consultation
              </a>
              <a href="/#contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
