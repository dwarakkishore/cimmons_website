import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – CIMMON | BPO & Call Center Services",
  description:
    "Get in touch with Cimmons — Bangalore-based BPO & call center. Address, phone, email and enquiry form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
