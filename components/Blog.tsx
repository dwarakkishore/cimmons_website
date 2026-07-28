import Image from "next/image";
import Link from "next/link";
import { sortedPosts } from "@/lib/posts";

export default function Blog() {
  // Three most recent articles from the shared post store (lib/posts.ts).
  const posts = sortedPosts().slice(0, 3);

  return (
    <section id="blog" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title text-[28px] sm:text-[36px] lg:text-[42px]">
            Stay ahead in the world of Call Center &amp; BPO services with expert
            insights, industry trends, and success stories.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-black/10 p-4 transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* tag + read time */}
              <div className="flex items-center gap-3 px-2 pb-3 pt-1">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {p.tag}
                </span>
                <span className="text-xs font-medium text-body">
                  Read Time: {p.readTime}
                </span>
              </div>

              <div className="relative h-52 overflow-hidden rounded-[16px]">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col px-2 pt-5">
                <span className="text-sm font-medium text-body">{p.dateDisplay}</span>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-heading transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{p.excerpt}</p>
                <Link
                  href={`/news/${p.slug}/`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-heading transition-colors hover:text-primary"
                  aria-label={`Read article: ${p.title}`}
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
