import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers – CIMMON | Join Our Team",
  description:
    "Build your career at Cimmons — a fast-growing BPO and call center company with a global footprint and a family atmosphere. Explore open roles in Bengaluru and apply today.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
