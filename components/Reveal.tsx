"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the element is visible
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  let transformClass = "";
  if (!revealed) {
    if (direction === "up") transformClass = "translate-y-8";
    if (direction === "down") transformClass = "-translate-y-8";
    if (direction === "left") transformClass = "translate-x-8";
    if (direction === "right") transformClass = "-translate-x-8";
  } else {
    transformClass = "translate-y-0 translate-x-0";
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        revealed ? "opacity-100" : "opacity-0"
      } ${transformClass} ${className}`}
    >
      {children}
    </div>
  );
}
