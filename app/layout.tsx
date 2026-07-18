import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/QuoteModal";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIMMON – Call Center & BPO Solutions",
  description:
    "Elevate your customer experience with professional, multilingual call center and BPO services, available 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="bg-white font-sans text-body antialiased">
        <QuoteProvider>{children}</QuoteProvider>
      </body>
    </html>
  );
}
