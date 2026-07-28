import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Cimmons — BPO Company in Bengaluru",
  description:
    "Get in touch with Cimmons — Bangalore-based BPO & call center. Address, phone, email and enquiry form.",
  alternates: { canonical: "/contact/" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
