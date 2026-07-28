import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/QuoteModal";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  IS_STAGING,
  organizationSchema,
} from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cimmons — BPO & Call Center Services in Bangalore, India",
    template: "%s | Cimmons",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "BPO services",
    "call center services",
    "call center Bangalore",
    "customer support outsourcing",
    "inbound call center",
    "outbound call center",
    "BPO company Bengaluru",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: SITE_URL,
    title: "Cimmons — BPO & Call Center Services in Bangalore, India",
    description: SITE_DESCRIPTION,
    images: [
      { url: "/assets/img/og-default.png", width: 1200, height: 630, alt: "Cimmons — BPO & Call Center Services" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cimmons — BPO & Call Center Services in Bangalore, India",
    description: SITE_DESCRIPTION,
    images: ["/assets/img/og-default.png"],
  },
  // Staging builds (previews.cimmons.in) are noindexed; production is indexable.
  robots: IS_STAGING
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
      },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="bg-white font-sans text-body antialiased">
        <JsonLd data={organizationSchema} />
        <QuoteProvider>{children}</QuoteProvider>
      </body>
    </html>
  );
}
