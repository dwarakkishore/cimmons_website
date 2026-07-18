"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/* ------------------------------------------------------------------ *
 * Web3Forms access key — leads are emailed to the inbox linked to it.
 * Create a free key at https://web3forms.com using connect@cimmons.in
 * and paste it below (or set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env).
 * ------------------------------------------------------------------ */
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "YOUR_WEB3FORMS_ACCESS_KEY";

const TOPICS = [
  "General Enquiry",
  "Business Enquiry",
  "Careers",
  "Support",
  "Partnership",
];

type Form = {
  name: string;
  type: "" | "individual" | "company";
  company: string;
  mobile: string;
  topic: string;
};

const EMPTY: Form = {
  name: "",
  type: "",
  company: "",
  mobile: "",
  topic: "",
};

const QuoteContext = createContext<{ open: () => void }>({ open: () => {} });

export function useQuote() {
  return useContext(QuoteContext);
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteContext.Provider value={{ open }}>
      {children}
      {isOpen && <QuoteModal onClose={close} />}
    </QuoteContext.Provider>
  );
}

function QuoteModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<Form>(EMPTY);
  const [stepIndex, setStepIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  // Ordered list of steps — the "company" step only exists for companies.
  const steps = useMemo(() => {
    const s: Array<keyof Form | "type"> = ["name", "type"];
    if (form.type === "company") s.push("company");
    s.push("mobile", "topic");
    return s;
  }, [form.type]);

  const current = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  // Close on Escape + lock body scroll while the modal is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const set = (key: keyof Form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canAdvance = () => {
    switch (current) {
      case "name":
        return form.name.trim().length > 1;
      case "type":
        return form.type !== "";
      case "company":
        return form.company.trim().length > 1;
      case "mobile":
        return form.mobile.trim().length >= 7;
      case "topic":
        return form.topic !== "";
      default:
        return false;
    }
  };

  const next = () => {
    if (!canAdvance()) return;
    if (!isLast) setStepIndex((i) => i + 1);
  };

  const back = () => setStepIndex((i) => Math.max(0, i - 1));

  const submit = async () => {
    if (!canAdvance()) return;
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
          subject: `New Quote Request — ${form.name}`,
          from_name: "Cimmons Website",
          "Full Name": form.name,
          "Enquiry Type": form.type === "company" ? "Company" : "Individual",
          "Company Name": form.type === "company" ? form.company : "N/A",
          "Mobile Number": form.mobile,
          Topic: form.topic,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(EMPTY);
    setStepIndex(0);
    setStatus("idle");
  };

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && current !== "topic") {
      e.preventDefault();
      next();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-[24px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
        {/* Header */}
        <div className="relative bg-[linear-gradient(135deg,#1830E0_0%,#141B33_100%)] px-7 pb-8 pt-7">
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <span className="text-sm font-semibold text-gold">Request A Quote</span>
          <h3 className="mt-1 font-display text-2xl font-semibold text-white">
            {status === "success" ? "All done!" : "Let's get you a quote"}
          </h3>

          {/* Progress bar */}
          {status !== "success" && (
            <div className="mt-5 flex gap-1.5">
              {steps.map((s, i) => (
                <span
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= stepIndex ? "bg-gold" : "bg-white/25"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="px-7 py-8">
          {status === "success" ? (
            <div className="text-center">
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
              <p className="mt-5 text-lg font-semibold text-heading">
                Thanks, {form.name.split(" ")[0]}!
              </p>
              <p className="mt-2 text-body">
                Your request has been received. One of our consultants will get
                in touch with you shortly.
              </p>
              <button onClick={onClose} className="btn-primary mt-7 w-full">
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Step: Name */}
              {current === "name" && (
                <Field label="What's your name?">
                  <input
                    autoFocus
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    onKeyDown={onEnter}
                    placeholder="e.g. Priya Sharma"
                    className={inputCls}
                  />
                </Field>
              )}

              {/* Step: Individual or Company */}
              {current === "type" && (
                <Field label="Are you an individual or a company?">
                  <div className="grid grid-cols-2 gap-3">
                    {(["individual", "company"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          set("type", t);
                          setStepIndex((i) => i + 1);
                        }}
                        className={`rounded-[14px] border-2 px-4 py-5 text-center font-semibold capitalize transition-all ${
                          form.type === t
                            ? "border-primary bg-cream text-primary"
                            : "border-black/10 text-heading hover:border-primary/50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </Field>
              )}

              {/* Step: Company name */}
              {current === "company" && (
                <Field label="What's your company name?">
                  <input
                    autoFocus
                    type="text"
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    onKeyDown={onEnter}
                    placeholder="e.g. Acme Pvt Ltd"
                    className={inputCls}
                  />
                </Field>
              )}

              {/* Step: Mobile */}
              {current === "mobile" && (
                <Field label="Your mobile number">
                  <input
                    autoFocus
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => set("mobile", e.target.value)}
                    onKeyDown={onEnter}
                    placeholder="e.g. +91 98765 43210"
                    className={inputCls}
                  />
                </Field>
              )}

              {/* Step: Topic */}
              {current === "topic" && (
                <Field label="What can we help you with?">
                  <select
                    autoFocus
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
                </Field>
              )}

              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-brand-red">
                  Something went wrong sending your request. Please try again or
                  email connect@cimmons.in.
                </p>
              )}

              {/* Nav buttons */}
              <div className="mt-7 flex items-center gap-3">
                {stepIndex > 0 && (
                  <button
                    onClick={back}
                    disabled={status === "loading"}
                    className="btn-outline flex-1"
                  >
                    Back
                  </button>
                )}
                {current !== "type" &&
                  (isLast ? (
                    <button
                      onClick={submit}
                      disabled={!canAdvance() || status === "loading"}
                      className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === "loading" ? "Sending…" : "Submit Request"}
                    </button>
                  ) : (
                    <button
                      onClick={next}
                      disabled={!canAdvance()}
                      className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Next
                    </button>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-btn border border-black/10 bg-white px-4 py-3.5 text-body outline-none transition-colors focus:border-primary";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-3 block font-display text-lg font-semibold text-heading">
        {label}
      </label>
      {children}
    </div>
  );
}
