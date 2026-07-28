import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { sortedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights & News — BPO & Customer Support",
  description:
    "The latest news, insights and success stories from Cimmons — customer experience, quality assurance, BPO strategy and training in the call center world.",
  alternates: { canonical: "/news/" },
};

/* ------------------------------------------------------------------ */
/* Data — posts live in lib/posts.ts (shared with /news/[slug] and the */
/* homepage Blog section)                                              */
/* ------------------------------------------------------------------ */

const TOPICS = [
  "Customer Experience",
  "Quality Assurance",
  "BPO Strategy",
  "Training",
];

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="#1830E0" strokeWidth="2" />
      <path d="M3 9h18M8 2v4M16 2v4" stroke="#1830E0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function NewsPage() {
  const [featured, ...rest] = sortedPosts();

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* ------------------------------------------------------ */}
        {/* Banner / breadcrumb                                     */}
        {/* ------------------------------------------------------ */}
        <section className="bg-cream pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="container-x text-center">
            <h1 className="section-title text-[36px] sm:text-[46px] lg:text-[56px]">
              News
            </h1>
            <nav
              aria-label="Breadcrumb"
              className="mt-5 flex items-center justify-center gap-2 text-[15px] font-semibold"
            >
              <a href="/" className="text-body transition-colors hover:text-primary">
                Home
              </a>
              <span className="text-body/50">/</span>
              <span className="text-primary">News</span>
            </nav>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Featured article                                        */}
        {/* ------------------------------------------------------ */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x">
            <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Latest News
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                Insights From the Cimmons Desk
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-body">
                Insights, trends and success stories from the world of Call
                Center &amp; BPO services.
              </p>
              <ul
                aria-label="Topics"
                className="mt-8 flex flex-wrap items-center justify-center gap-3"
              >
                {TOPICS.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-black/10 bg-soft px-4 py-1.5 text-xs font-semibold text-body"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <article className="group grid overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-auto lg:min-h-[440px]">
                <Image
                  src={featured.img}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-heading">
                  <span className="h-2 w-2 rounded-full bg-heading" />
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-4 text-xs font-medium text-body">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon />
                    {featured.dateDisplay}
                  </span>
                  <span>By {featured.author}</span>
                </div>
                <h3 className="mt-5 font-display text-[26px] font-semibold leading-[1.25] text-heading transition-colors group-hover:text-primary sm:text-[30px] lg:text-[34px]">
                  {featured.title}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-body">
                  {featured.excerpt}
                </p>
                <div className="mt-8">
                  <Link
                    href={`/news/${featured.slug}/`}
                    className="btn-primary"
                    aria-label={`Read article: ${featured.title}`}
                  >
                    Read Article
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* Article grid                                            */}
        {/* ------------------------------------------------------ */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x">
            <div className="mb-12 flex flex-col items-center text-center lg:mb-16">
              <span className="eyebrow mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />
                More Stories
              </span>
              <h2 className="section-title text-[30px] sm:text-[38px] lg:text-[44px]">
                News &amp; Articles
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => (
                <article
                  key={article.slug}
                  className="group overflow-hidden rounded-[24px] border border-black/10 bg-white transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-4 text-xs font-medium text-body">
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon />
                        {article.dateDisplay}
                      </span>
                      <span>By {article.author}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-heading transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm text-body">{article.excerpt}</p>
                    <Link
                      href={`/news/${article.slug}/`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-heading transition-colors hover:text-primary"
                      aria-label={`Read more: ${article.title}`}
                    >
                      Read More
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
