"use client";

import { useState } from "react";

/* Web3Forms access key — same integration as the quote modal.
 * Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env (or replace the fallback). */
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

const TOPICS = [
  "General Enquiry",
  "Business Enquiry",
  "Careers",
  "Support",
  "Partnership",
];

type Form = {
  name: string;
  email: string;
  mobile: string;
  company: string;
  topic: string;
  message: string;
};

const EMPTY: Form = {
  name: "",
  email: "",
  mobile: "",
  company: "",
  topic: "",
  message: "",
};

const HIGHLIGHTS = [
  "Flexible per-hour, per-seat and custom plans",
  "No long-term commitment required",
  "Dedicated, trained agents",
  "Priority onboarding & QA",
];

export default function Pricing() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const set = (key: keyof Form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const isValid =
    form.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.mobile.trim().length >= 7;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New Pricing Enquiry — ${form.name}`,
          from_name: "Cimmons Website",
          "Full Name": form.name,
          Email: form.email,
          "Mobile Number": form.mobile,
          "Company Name": form.company || "N/A",
          Topic: form.topic || "General Enquiry",
          Message: form.message || "N/A",
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="pricing" className="bg-cream py-20 lg:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: heading + highlights */}
          <div>
            <span className="eyebrow mb-6">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Pricing Plans
            </span>
            <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
              Get a custom quote tailored to your business.
            </h2>
            <p className="mt-4 max-w-md text-body">
              Share a few details and our team will put together scalable,
              cost-effective pricing that fits your needs.
            </p>

            <ul className="mt-8 space-y-4">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
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
                  <span className="text-lg font-semibold text-heading">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: details form card */}
          <div className="rounded-[24px] bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.10)] lg:p-10">
            {status === "success" ? (
              <div className="py-8 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream text-primary">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="mt-5 text-xl font-semibold text-heading">
                  Thanks, {form.name.split(" ")[0]}!
                </p>
                <p className="mt-2 text-body">
                  Your enquiry has been received. One of our consultants will get
                  in touch with a custom quote shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h3 className="font-display text-2xl font-semibold text-heading">
                  Request your quote
                </h3>

                <div>
                  <label className={labelCls}>Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className={inputCls}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Mobile Number *</label>
                    <input
                      type="tel"
                      value={form.mobile}
                      onChange={(e) => set("mobile", e.target.value)}
                      placeholder="+91 98765 43210"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Company Name</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    placeholder="e.g. Acme Pvt Ltd"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>What can we help you with?</label>
                  <select
                    value={form.topic}
                    onChange={(e) => set("topic", e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select a topic</option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Tell us a little about your requirements…"
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium text-brand-red">
                    Something went wrong sending your enquiry. Please try again or
                    email connect@cimmons.in.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!isValid || status === "loading"}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? "Sending…" : "Get Started Now"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-btn border border-black/10 bg-white px-4 py-3.5 text-body outline-none transition-colors focus:border-primary";

const labelCls = "mb-2 block text-sm font-semibold text-heading";
