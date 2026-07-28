import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { POSTS, getPost, sortedPosts } from "@/lib/posts";
import { SITE_LEGAL_NAME, absUrl, breadcrumbSchema } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Article" };
  const canonical = `/news/${post.slug}/`;
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: absUrl(canonical),
      publishedTime: post.date,
      images: [{ url: post.img }],
    },
  };
}

const Arrow = () => (
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

export default function ArticlePage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: absUrl(post.img),
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE_LEGAL_NAME },
    publisher: { "@id": `${absUrl("/")}#organization` },
    mainEntityOfPage: absUrl(`/news/${post.slug}/`),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "News", path: "/news/" },
    { name: post.title, path: `/news/${post.slug}/` },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbs]} />
      <Header />
      <main className="overflow-hidden">
        {/* ---------- Banner ---------- */}
        <section className="bg-cream pb-14 pt-32 lg:pb-16 lg:pt-40">
          <div className="container-x mx-auto max-w-4xl">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-semibold"
            >
              <Link href="/" className="text-body transition-colors hover:text-primary">
                Home
              </Link>
              <span className="text-body/40">/</span>
              <Link href="/news/" className="text-body transition-colors hover:text-primary">
                News
              </Link>
              <span className="text-body/40">/</span>
              <span className="text-primary">{post.tag}</span>
            </nav>

            <h1 className="section-title mt-6 text-[30px] leading-[1.15] sm:text-[40px] lg:text-[48px]">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-body">
              <span>{post.dateDisplay}</span>
              <span>By {post.author}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* ---------- Featured image ---------- */}
        <section className="bg-white">
          <div className="container-x mx-auto max-w-4xl">
            <div className="relative -mt-0 h-64 overflow-hidden rounded-b-[24px] sm:h-96">
              <Image
                src={post.img}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ---------- Body ---------- */}
        <article className="bg-white py-14 lg:py-20">
          <div className="container-x mx-auto max-w-3xl">
            {post.intro.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="mb-5 text-[17px] leading-relaxed text-body"
              >
                {para}
              </p>
            ))}

            {post.sections.map((s) => (
              <section key={s.h2} className="mt-10">
                <h2 className="section-title text-[24px] text-heading sm:text-[28px]">
                  {s.h2}
                </h2>
                {s.paras.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="mt-4 text-[17px] leading-relaxed text-body"
                  >
                    {para}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[17px] leading-relaxed text-body">
                        <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Contextual internal links */}
            <div className="mt-12 rounded-[20px] border border-black/10 bg-cream p-7">
              <p className="text-[15px] leading-relaxed text-body">
                Cimmons runs inbound, outbound, blended and non-voice support
                desks from Bengaluru, 24/7. See{" "}
                <Link href="/services/" className="font-semibold text-primary hover:underline">
                  our services
                </Link>{" "}
                or{" "}
                <Link href="/contact/" className="font-semibold text-primary hover:underline">
                  talk to our team
                </Link>{" "}
                about what a setup like this would look like for your business.
              </p>
            </div>
          </div>
        </article>

        {/* ---------- Related posts ---------- */}
        <section className="bg-cream py-16 lg:py-20">
          <div className="container-x">
            <h2 className="section-title text-center text-[26px] sm:text-[32px]">
              More From the Cimmons Desk
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((r) => (
                <article
                  key={r.slug}
                  className="group overflow-hidden rounded-[24px] border border-black/10 bg-white transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <Link href={`/news/${r.slug}/`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={r.img}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-body">
                        {r.dateDisplay}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-heading transition-colors group-hover:text-primary">
                        {r.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-heading transition-colors group-hover:text-primary">
                        Read More
                        <Arrow />
                      </span>
                    </div>
                  </Link>
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
