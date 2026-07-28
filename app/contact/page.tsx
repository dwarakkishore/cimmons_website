"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SOCIAL_LINKS } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Icon helpers                                                        */
/* ------------------------------------------------------------------ */

const icon = (paths: ReactNode, size = 24) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths}
  </svg>
);

const PinIcon = (size = 24) =>
  icon(
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>,
    size
  );

const PhoneIcon = (size = 24) =>
  icon(
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
    size
  );

const MailIcon = (size = 24) =>
  icon(
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>,
    size
  );

const BriefcaseIcon = (size = 24) =>
  icon(
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>,
    size
  );

const ClockIcon = (size = 24) =>
  icon(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>,
    size
  );

function ArrowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Social icons (filled, small) */
const social = (label: string, href: string, path: ReactNode) => ({
  label,
  href,
  svg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {path}
    </svg>
  ),
});

const SOCIALS = [
  social(
    "X (Twitter)",
    SOCIAL_LINKS.x,
    <path d="M23 4.9c-.8.4-1.7.6-2.6.8a4.5 4.5 0 0 0 2-2.5c-.9.5-1.9.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2.5 3.7a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.5v.1a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.7a12.7 12.7 0 0 0 6.9 2c8.3 0 12.8-6.8 12.8-12.8v-.6c.9-.6 1.6-1.4 2.3-2.4z" />
  ),
  social(
    "Facebook",
    SOCIAL_LINKS.facebook,
    <path d="M14 8.5V6.8c0-.8.6-1 1-1h2.6V2h-3.5C10.9 2 10 4.4 10 5.9v2.6H7.7V12H10v10h4V12h3l.4-3.5H14z" />
  ),
  social(
    "LinkedIn",
    SOCIAL_LINKS.linkedin,
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.16h4.56V23H.22zM8.34 8.16h4.37v2.03h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.18h-4.55v-7.25c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.83V23H8.34z" />
  ),
  social(
    "Instagram",
    SOCIAL_LINKS.instagram,
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zm0 11a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm8.5-11.3a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0z" />
  ),
  social(
    "YouTube",
    SOCIAL_LINKS.youtube,
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12c0 2 .2 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.3-1.9.5-3.8.5-5.8s-.2-3.9-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
  ),
];

/* ------------------------------------------------------------------ */
/* Contact info cards                                                  */
/* ------------------------------------------------------------------ */

const INFO_CARDS: { title: string; icon: ReactNode; body: ReactNode }[] = [
  {
    title: "Our Office",
    icon: PinIcon(),
    body: (
      <p className="text-[15px] leading-relaxed text-body">
        Gokul Towers, 86/3, 2nd, MS Ramaiah Rd, HMR Layout, Gokula Extension,
        Bengaluru, Karnataka 560054
      </p>
    ),
  },
  {
    title: "Call Us",
    icon: PhoneIcon(),
    body: (
      <>
        <a
          href="tel:+918069261999"
          className="block text-[15px] font-semibold text-heading transition-colors hover:text-primary"
        >
          +91 80692 61999
        </a>
        <a
          href="mailto:connect@cimmons.in"
          className="mt-1.5 block text-[15px] font-medium text-body transition-colors hover:text-primary"
        >
          connect@cimmons.in
        </a>
      </>
    ),
  },
  {
    title: "Jobs / HR",
    icon: BriefcaseIcon(),
    body: (
      <>
        <a
          href="tel:+919380594484"
          className="block text-[15px] font-semibold text-heading transition-colors hover:text-primary"
        >
          +91 93805 94484
        </a>
        <a
          href="tel:+919353666387"
          className="mt-1 block text-[15px] font-semibold text-heading transition-colors hover:text-primary"
        >
          +91 93536 66387
        </a>
        <a
          href="mailto:hr@cimmons.in"
          className="mt-1.5 block text-[15px] font-medium text-body transition-colors hover:text-primary"
        >
          hr@cimmons.in
        </a>
      </>
    ),
  },
  {
    title: "Working Hours",
    icon: ClockIcon(),
    body: (
      <p className="text-[15px] leading-relaxed text-body">
        Mon–Sat
        <span className="mt-1.5 block font-semibold text-heading">
          24×7×365 support available
        </span>
      </p>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const SUBJECTS = [
  "General Enquiry",
  "Business Enquiry",
  "Careers",
  "Support",
  "Partnership",
];

const INPUT_CLASS =
  "w-full rounded-btn border border-black/10 bg-white px-4 py-3 text-body outline-none transition-colors focus:border-primary";
const LABEL_CLASS = "mb-2 block text-sm font-semibold text-heading";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Page banner + breadcrumb removed */}

        {/* Contact info cards (white) */}
        <section className="bg-white pb-20 pt-32 lg:pb-28 lg:pt-40">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Reach Out
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                We&rsquo;re here to help
              </h2>
              <p className="mt-6 text-lg text-body">
                We appreciate your interest in Cimmons. Please contact us to
                let us know your requirements.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {INFO_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="group rounded-[24px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      {card.icon}
                    </span>
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-heading">
                    {card.title}
                  </h3>
                  <div className="mt-3">{card.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + location panel (cream) */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Get In Touch
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Tell Us How You Feel
              </h2>
              <p className="mt-6 text-lg text-body">
                Feel free to contact us using the form below and one of our
                consultants will get in touch with you in a flash.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-[28px] bg-white shadow-[0_30px_60px_rgba(20,27,51,0.08)]">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px]">
                {/* Form column */}
                <div className="p-6 sm:p-10 lg:p-14">
                  {submitted ? (
                    <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-primary">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 12l5 5L20 7"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-heading">
                        Thanks for reaching out{form.name ? `, ${form.name}` : ""}!
                      </h3>
                      <p className="mt-3 max-w-md text-body">
                        One of our consultants will be in touch shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setForm(INITIAL_FORM);
                          setSubmitted(false);
                        }}
                        className="btn-outline mt-8"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="contact-name" className={LABEL_CLASS}>
                            Your Name *
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className={INPUT_CLASS}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-email"
                            className={LABEL_CLASS}
                          >
                            Your Email *
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={INPUT_CLASS}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-phone"
                            className={LABEL_CLASS}
                          >
                            Phone Number
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 00000 00000"
                            className={INPUT_CLASS}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-subject"
                            className={LABEL_CLASS}
                          >
                            How can we help?
                          </label>
                          <select
                            id="contact-subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className={INPUT_CLASS}
                          >
                            <option value="">Select a topic</option>
                            {SUBJECTS.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="contact-message"
                            className={LABEL_CLASS}
                          >
                            Your Message *
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={6}
                            required
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us about your requirements…"
                            className={INPUT_CLASS}
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn-primary mt-8">
                        Send Message
                        <ArrowIcon />
                      </button>
                    </form>
                  )}
                </div>

                {/* Location panel */}
                <div className="bg-ink p-8 sm:p-10 lg:p-12">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    Our Location
                  </h3>
                  <p className="mt-3 text-[15px] text-white/60">
                    Drop by our Bengaluru office, or reach us any time — our
                    lines are always open.
                  </p>

                  <ul className="mt-10 space-y-7">
                    <li className="flex items-start gap-4">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold">
                        {PinIcon(22)}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white/50">
                          Address
                        </div>
                        <p className="mt-1 text-[15px] font-medium leading-relaxed text-white">
                          Gokul Towers, 86/3, 2nd, MS Ramaiah Rd, HMR Layout,
                          Gokula Extension, Bengaluru, Karnataka 560054
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold">
                        {PhoneIcon(22)}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white/50">
                          Phone
                        </div>
                        <a
                          href="tel:+918069261999"
                          className="mt-1 block font-semibold text-white transition-colors hover:text-gold"
                        >
                          +91 80692 61999
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold">
                        {MailIcon(22)}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white/50">
                          Email
                        </div>
                        <a
                          href="mailto:connect@cimmons.in"
                          className="mt-1 block font-semibold text-white transition-colors hover:text-gold"
                        >
                          connect@cimmons.in
                        </a>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-10 border-t border-white/10 pt-8">
                    <div className="text-sm font-semibold text-white/50">
                      Follow Us
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {SOCIALS.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white"
                        >
                          {s.svg}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map (white) */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Find Us
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Visit our office
              </h2>
              <p className="mt-6 text-lg text-body">
                We&rsquo;re located in Gokula Extension, Bengaluru — a short
                drive from anywhere in the city.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(20,27,51,0.08)]">
              <iframe
                src="https://www.google.com/maps?q=Gokul+Towers,+MS+Ramaiah+Rd,+Gokula+Extension,+Bengaluru,+Karnataka+560054&output=embed"
                className="h-[420px] w-full rounded-[24px] border-0"
                loading="lazy"
                title="Cimmons office location"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Slim CTA band (ink) */}
        <section className="bg-ink py-16 lg:py-20">
          <div className="container-x flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="section-title text-[26px] text-white sm:text-[32px]">
                Prefer to talk right now?
              </h2>
              <p className="mt-3 text-lg text-white/70">
                Our team is available 24×7×365 — give us a call and let&rsquo;s
                get started.
              </p>
            </div>
            <a href="tel:+918069261999" className="btn-primary flex-shrink-0">
              {PhoneIcon(18)}
              +91 80692 61999
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
