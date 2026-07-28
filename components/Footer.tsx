import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/site";

const SOCIALS: { label: string; href: string; path: string }[] = [
  {
    label: "X (Twitter)",
    href: SOCIAL_LINKS.x,
    path: "M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.5 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7.9 3.7H6.1L17.8 20z",
  },
  {
    label: "Facebook",
    href: SOCIAL_LINKS.facebook,
    path: "M14 8.5V6.8c0-.8.6-1 1-1h2.6V2h-3.5C10.9 2 10 4.4 10 5.9v2.6H7.7V12H10v10h4V12h3l.4-3.5H14z",
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.16h4.56V23H.22zM8.34 8.16h4.37v2.03h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.18h-4.55v-7.25c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.83V23H8.34z",
  },
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zm0 11a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm8.5-11.3a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0z",
  },
  {
    label: "YouTube",
    href: SOCIAL_LINKS.youtube,
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12c0 2 .2 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.3-1.9.5-3.8.5-5.8s-.2-3.9-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z",
  },
];

const USEFUL: { label: string; href: string }[] = [
  { label: "About Us", href: "/about-us/" },
  { label: "Careers", href: "/careers/" },
  { label: "Terms and Conditions", href: "/terms/" },
  { label: "Privacy Policy", href: "/privacy/" },
];
const QUICK: { label: string; href: string }[] = [
  { label: "Inbound Call Center", href: "/services/#inbound" },
  { label: "Outbound Call Center", href: "/services/#outbound" },
  { label: "Blended Call Center", href: "/services/#blended" },
  { label: "Non Voice Call Center", href: "/services/#non-voice" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-gray-50 pt-20 text-ink/70">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand + contact */}
          <div>
            <Image
              src="/assets/img/cimmon-logo.png"
              alt="CIMMONS"
              width={158}
              height={94}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Building Experiences Together — a leading global ITES partnering
              company in Bengaluru, India, adding value to your business.
            </p>
            <ul className="mt-7 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                Gokul Towers, 86/3, 2nd Floor, MS Ramaiah Rd, HMR Layout, Gokula
                Extension, Bengaluru, Karnataka 560054
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <a href="mailto:connect@cimmons.in" className="hover:text-primary">
                  connect@cimmons.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.4.55 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.55 3.4 1 1 0 01-.24 1l-2.2 2.4z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <a href="tel:+918069261999" className="hover:text-primary">
                  +91 80 6926 1999
                </a>
              </li>
            </ul>

            {/* Social profiles */}
            <div className="mt-7 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink/70 transition-colors hover:bg-primary hover:text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>


          </div>

          {/* useful links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-ink">
              Company
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              {USEFUL.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* quick links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-ink">
              Services
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              {QUICK.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 py-7 text-sm sm:flex-row">
          <p>
            © 2020–{new Date().getFullYear()} Cimmons Integrated Services. All
            Rights Reserved.
          </p>
          <p>
            <a href="mailto:connect@cimmons.in" className="hover:text-primary">
              connect@cimmons.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
