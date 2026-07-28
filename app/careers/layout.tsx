import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — BPO & Call Center Jobs in Bangalore",
  description:
    "Build your career at Cimmons — a fast-growing BPO and call center company with a global footprint and a family atmosphere. Explore open roles in Bengaluru and apply today.",
  alternates: { canonical: "/careers/" },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
