import Image from "next/image";

const USEFUL = [
  "About Us",
  "Careers",
  "Terms and Conditions",
  "Privacy Policy",
];
const QUICK = [
  "Inbound Call Center",
  "Outbound Call Center",
  "Blended Call Center",
  "Non Voice Call Center",
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
              alt="CIMMON"
              width={170}
              height={97}
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
          </div>

          {/* useful links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-ink">
              Company
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              {USEFUL.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {l}
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
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {l}
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
