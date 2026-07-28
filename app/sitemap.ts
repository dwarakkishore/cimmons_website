import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { SECTORS } from "@/lib/sectors";
import { POSTS } from "@/lib/posts";

// Static export emits this as /sitemap.xml at build time.
// trailingSlash is on, so every URL ends with "/".
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", // home
    "services",
    "sectors",
    "about-us",
    "meet-team",
    "contact",
    "careers",
    "news",
    "privacy",
    "terms",
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${SITE_URL}/${r ? r + "/" : ""}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));

  const sectorPages: MetadataRoute.Sitemap = SECTORS.map((s) => ({
    url: `${SITE_URL}/sectors/${s.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}/`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE_URL}/news/${p.slug}/`,
    lastModified: p.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...sectorPages, ...caseStudyPages, ...blogPages];
}
