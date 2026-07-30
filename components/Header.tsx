"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuote } from "@/components/QuoteModal";
import { SECTORS } from "@/lib/sectors";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Company", href: "/about-us" },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      { label: "Inbound Call Center Services", href: "/services#inbound" },
      { label: "Outbound Call Center Services", href: "/services#outbound" },
      { label: "Blended Call Center Services", href: "/services#blended" },
      { label: "Non Voice Call Center Services", href: "/services#non-voice" },
      ...SECTORS.map((s) => ({
        label: s.shortName,
        href: `/sectors/${s.slug}/`,
      })),
    ],
  },
  {
    label: "Work with us",
    href: "/careers",
    children: [
      { label: "Careers", href: "/careers" },
      { label: "Business Enquiry", href: "/contact" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const { open: openQuote } = useQuote();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 20);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-black/5 bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      {/* Scroll progress indicator */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-transparent">
        <div
          className="h-full bg-[linear-gradient(90deg,#1830E0_0%,#F0C000_55%,#A80000_100%)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="container-x flex h-[104px] items-center justify-between">
        <a href="/#home" className="flex items-center">
          <Image
            src="/assets/img/cimmon-logo.png"
            alt="CIMMONS"
            width={158}
            height={94}
            className="h-16 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 py-6 text-[15px] font-semibold text-heading transition-colors hover:text-primary"
              >
                {item.label}
                {item.children && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-200 group-hover:rotate-180"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[240px] -translate-y-2 rounded-btn border border-black/5 bg-white p-2 opacity-0 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block rounded-[8px] px-3 py-2.5 text-[14px] font-medium text-heading transition-colors hover:bg-black/5 hover:text-primary"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openQuote}
            className="btn-primary hidden sm:inline-flex"
          >
            Request A Quote
          </button>
          <button
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-black/10 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="border-b border-black/5 last:border-none"
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] font-semibold text-heading"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="flex flex-col pb-2 pl-4">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="py-2 text-[14px] font-medium text-body"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openQuote();
              }}
              className="btn-primary mt-4 w-full"
            >
              Request A Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
