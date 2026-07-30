"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "cimmons_preloader_shown";

// Runs synchronously while the document parses, before hydration: hides the
// overlay for repeat visits this session (static export = full page loads),
// marks the session on first visit, and hard-kills the overlay after 4s even
// if React never hydrates. sessionStorage throws in some privacy modes, so
// every access is guarded.
const BOOT_SCRIPT = `(function(){var p=document.getElementById("cimmons-preloader");if(!p)return;var seen=false;try{seen=!!sessionStorage.getItem("${SESSION_KEY}");if(!seen)sessionStorage.setItem("${SESSION_KEY}","1");}catch(e){}if(seen){p.style.display="none";}else{setTimeout(function(){p.style.display="none";},4000);}})();`;

type Phase = "playing" | "leaving" | "done";

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("playing");

  useEffect(() => {
    const el = overlayRef.current;
    // The boot script already hid the overlay if this session has seen it.
    if (!el || el.style.display === "none") {
      setPhase("done");
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.body.style.overflow = "hidden";

    // Reduced motion: static logo for a beat, then out. Otherwise the CSS
    // timeline finishes around 1.25s and we begin the exit fade at 1.45s.
    const leaveAt = reduced ? 600 : 1450;
    const leaveTimer = window.setTimeout(() => setPhase("leaving"), leaveAt);
    const doneTimer = window.setTimeout(() => setPhase("done"), leaveAt + 500);
    // Fail-safe: the overlay always goes away, no matter what.
    const failSafe = window.setTimeout(() => setPhase("done"), 4000);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      window.clearTimeout(failSafe);
      document.body.style.overflow = "";
    };
  }, []);

  // Restore scroll the moment we unmount the overlay (the component itself
  // stays mounted, so the effect cleanup above only covers hard unmounts).
  useEffect(() => {
    if (phase === "done") document.body.style.overflow = "";
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      id="cimmons-preloader"
      ref={overlayRef}
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ease-out ${
        phase === "leaving" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`preloader-mark flex flex-col items-center transition-transform duration-500 ease-out ${
          phase === "leaving" ? "scale-[1.03]" : ""
        }`}
      >
        {/* Ghost logo always present; full-color layer fills in over it */}
        <div className="relative">
          <Image
            src="/assets/img/cimmon-logo.png"
            alt=""
            width={158}
            height={94}
            className="h-24 w-auto opacity-[0.12] saturate-50"
            priority
          />
          <Image
            src="/assets/img/cimmon-logo.png"
            alt=""
            width={158}
            height={94}
            className="preloader-fill absolute inset-0 h-24 w-auto"
          />
        </div>
        {/* Same three-colour gradient the header uses for its scroll bar */}
        <div className="mt-6 h-[3px] w-[168px] overflow-hidden rounded-full bg-black/5">
          <div className="preloader-bar h-full w-full origin-left rounded-full bg-[linear-gradient(90deg,#1830E0_0%,#F0C000_55%,#A80000_100%)]" />
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      <noscript>
        <style>{`#cimmons-preloader{display:none}`}</style>
      </noscript>
    </div>
  );
}
