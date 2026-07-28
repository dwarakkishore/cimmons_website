import type { MetadataRoute } from "next";
import { SITE_URL, IS_STAGING } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Staging builds (NEXT_PUBLIC_STAGING=1 → previews.cimmons.in) block all
  // crawling so the preview never gets indexed or competes with production.
  if (IS_STAGING) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
