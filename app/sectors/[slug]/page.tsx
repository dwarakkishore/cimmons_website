import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SectorIcon from "@/components/SectorIcon";
import Reveal from "@/components/Reveal";
import { AiDataModalityMatrix, AiDataPipeline, AiDataQaFlow } from "@/components/SectorGraphics";
import { SECTORS, getSector } from "@/lib/sectors";
import { getCaseStudy } from "@/lib/caseStudies";
import {
  SITE_LEGAL_NAME,
  absUrl,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const sector = getSector(params.slug);
  if (!sector) return { title: "Sector" };
  const canonical = `/sectors/${sector.slug}/`;
  const title = sector.metaTitle ?? `${sector.name} BPO & Call Center Services`;
  const description = sector.metaDescription ?? sector.tagline;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: `${title} — Cimmons`,
      description,
      url: absUrl(canonical),
      images: [{ url: sector.img }],
    },
  };
}

function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12l5 5L20 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function SectorPage({ params }: { params: Params }) {
  const sector = getSector(params.slug);
  if (!sector) notFound();

  const others = SECTORS.filter((s) => s.slug !== sector.slug).slice(0, 3);
  const caseStudy = sector.caseStudy ? getCaseStudy(sector.caseStudy) : undefined;
  const related = sector.relatedSectors
    ?.map((slug) => getSector(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const metaTitle = sector.metaTitle ?? `${sector.name} BPO & Call Center Services`;
  const h1 = sector.h1 ?? sector.name;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: metaTitle,
    description: sector.metaDescription ?? sector.tagline,
    serviceType: sector.serviceType ?? "Business Process Outsourcing",
    provider: { "@id": `${absUrl("/")}#organization` },
    areaServed: ["IN", "Worldwide"],
    url: absUrl(`/sectors/${sector.slug}/`),
    image: absUrl(sector.img),
    brand: { "@type": "Organization", name: SITE_LEGAL_NAME },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${sector.name} capabilities`,
      itemListElement: sector.capabilities.map((c) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: c.title, description: c.desc },
      })),
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Sectors", path: "/sectors/" },
    { name: sector.name, path: `/sectors/${sector.slug}/` },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbs, faqSchema(sector.faqs)]} />
      <Header />
      <main className="overflow-hidden bg-background">
        
        {/* ---------- Immersive Hero ---------- */}
        <section className="relative overflow-hidden bg-heading pb-24 pt-[140px] text-white lg:pb-32 lg:pt-[180px]">
          {/* Subtle glow effect behind text */}
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />

          <div className="container-x relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="flex flex-col">
                <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold tracking-wide">
                  <Link href="/" className="text-white/60 transition-colors hover:text-white">
                    Home
                  </Link>
                  <span className="text-white/30">/</span>
                  <Link href="/sectors/" className="text-white/60 transition-colors hover:text-white">
                    Sectors
                  </Link>
                  <span className="text-white/30">/</span>
                  <span className="text-primary">{sector.name}</span>
                </nav>



                <h1 className="mt-6 font-display text-[42px] font-extrabold leading-[1.08] tracking-tight sm:text-[54px] lg:text-[68px]">
                  {h1}
                </h1>
                
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70 sm:text-xl">
                  {sector.tagline}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact/" className="btn-primary shadow-lg shadow-primary/20">
                    Talk to Us
                    <Arrow size={18} />
                  </Link>
                  {caseStudy && (
                    <Link
                      href={`/case-studies/${caseStudy.slug}/`}
                      className="group inline-flex h-[52px] items-center justify-center rounded-btn border border-white/20 bg-white/5 px-8 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
                    >
                      See the Case Study
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] shadow-2xl lg:aspect-[1/1] xl:aspect-[4/3] border border-white/10">
                <Image
                  src={sector.img}
                  alt={sector.imgAlt ?? `${sector.name} BPO and call center services`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- The Challenge vs Our Solution ---------- */}
        <section className="bg-cream py-20 lg:py-32">
          <div className="container-x">
            <Reveal>
              <div className="mb-12 text-center lg:mb-20">
                <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary mb-3">
                  The Problem & The Fix
                </span>
                <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight sm:text-[42px]">
                  What we run for {sector.phrase} teams.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <Reveal>
                <div className="rounded-[24px] bg-white p-8 shadow-sm border border-black/5 lg:p-12 h-full">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-heading">
                      Where this sector hurts
                    </h3>
                  </div>
                  <ul className="space-y-5">
                    {sector.pressures.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                        <span className="text-[16px] leading-relaxed text-body">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="rounded-[24px] bg-heading p-8 shadow-xl lg:p-12 h-full relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[60px]" />
                  <div className="mb-6 flex items-center gap-4 relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      The Cimmons Solution
                    </h3>
                  </div>
                  <div className="relative z-10 space-y-6">
                    {sector.intro.map((p, i) => (
                      <p key={i} className="text-[16px] leading-relaxed text-white/80">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Pipeline (coded graphic, sectors that opt in) ---------- */}
        {sector.graphics === "ai-data" && (
          <section className="bg-soft py-16 lg:py-20">
            <div className="container-x">
              <Reveal>
                <AiDataPipeline />
              </Reveal>
            </div>
          </section>
        )}

        {/* ---------- Voice data collection (photo, ai-data sector only) ---------- */}
        {sector.graphics === "ai-data" && (
          <section className="bg-white py-20 lg:py-32">
            <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] shadow-lg border border-black/5">
                  <Image
                    src={sector.gallery[0]}
                    alt="Consented multilingual voice recording for AI training data collection"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal>
                <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary mb-3">
                  Data You Can&rsquo;t Buy
                </span>
                <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight sm:text-[42px]">
                  Consented voice data, recorded to your spec.
                </h2>
                <p className="mt-6 text-[16px] leading-relaxed text-body">
                  No dataset vendor has your specific support scenarios, your regional
                  dialects, or your users&rsquo; conversational patterns. We record it — natural
                  conversational voice, image-prompted speech, and simulated support
                  interactions, with documented consent and demographic spread — built to the
                  language and use case your model actually needs.
                </p>
              </Reveal>
            </div>
          </section>
        )}

        {/* ---------- Capabilities (Conditional Layout) ---------- */}
        {sector.groupedCapabilities ? (
          <section className="bg-white py-20 lg:py-32">
            <div className="container-x">
              <Reveal>
                <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
                  <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary mb-3">
                    Capabilities
                  </span>
                  <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight sm:text-[42px]">
                    What each one covers.
                  </h2>
                </div>
              </Reveal>

              {sector.graphics === "ai-data" && (
                <Reveal>
                  <AiDataModalityMatrix />
                </Reveal>
              )}

              <div className="mx-auto max-w-5xl space-y-8">
                {sector.groupedCapabilities.map((g, i) => (
                  <Reveal key={g.title}>
                    <div className="group flex flex-col md:flex-row rounded-[24px] border border-black/10 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                      {/* Left: Number Block */}
                      <div className="bg-heading text-white flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center py-6 md:py-0 border-b md:border-b-0 md:border-r border-black/10">
                        <span className="font-display text-4xl font-extrabold text-white/90">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      
                      {/* Right: Content Block */}
                      <div className="flex-1 p-8 lg:p-12">
                        <div className="flex flex-col lg:flex-row gap-8 lg:items-start lg:justify-between">
                          <div className="lg:w-1/2">
                            <h3 className="font-display text-[22px] font-bold text-heading">
                              {g.title}
                            </h3>
                            <p className="mt-4 text-[15px] leading-relaxed text-body">
                              {g.desc}
                            </p>
                          </div>
                          
                          <div className="lg:w-1/2 bg-cream rounded-xl p-6">
                            <ul className="space-y-4">
                              {g.subFeatures.map((feat) => (
                                <li key={feat} className="flex items-start gap-3">
                                  <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                                  </span>
                                  <span className="text-[14px] font-semibold text-heading">
                                    {feat}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-white py-20 lg:py-32">
            <div className="container-x">
              <Reveal>
                <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
                  <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary mb-3">
                    Capabilities
                  </span>
                  <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight sm:text-[42px]">
                    Everything we handle in {sector.phrase}.
                  </h2>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sector.capabilities.map((c, i) => (
                  <Reveal key={c.title}>
                    <div className="group h-full rounded-[20px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(24,48,224,0.06)]">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-cream font-display text-lg font-bold text-gold transition-colors group-hover:bg-primary/5 group-hover:text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mb-3 font-display text-xl font-bold text-heading">
                        {c.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-body">
                        {c.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---------- Starting Points Table (Optional) ---------- */}
        {sector.startingPoints && (
          <section className="bg-cream py-20 lg:py-32 border-t border-black/5">
            <div className="container-x">
              <Reveal>
                <div className="mb-12 lg:mb-20 text-center">
                  <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary mb-3">
                    Starting Points
                  </span>
                  <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight sm:text-[42px]">
                    Find the right starting point.
                  </h2>
                </div>
              </Reveal>

              <div className="mx-auto max-w-4xl rounded-[24px] border border-black/10 bg-white overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] bg-heading text-white px-8 py-5">
                  <div className="font-display text-sm font-bold uppercase tracking-widest text-white/60">Your Situation</div>
                  <div className="hidden md:block font-display text-sm font-bold uppercase tracking-widest text-white/60 text-right">Our Solution</div>
                </div>
                
                <div className="divide-y divide-black/5">
                  {sector.startingPoints.map((sp, i) => (
                    <Reveal key={i}>
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] items-center px-8 py-6 transition-colors hover:bg-cream/50">
                        <div className="text-[16px] leading-relaxed text-heading font-medium pr-8">
                          {sp.problem}
                        </div>
                        <div className="mt-4 md:mt-0 flex md:justify-end">
                          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            {sp.solution}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ---------- Engagement Models (Optional) ---------- */}
        {sector.engagementModels && (
          <section className="bg-heading py-20 lg:py-32 text-white border-b border-white/5">
            <div className="container-x">
              <Reveal>
                <div className="mb-12 lg:mb-20 text-center">
                  <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-gold mb-3">
                    Partnership
                  </span>
                  <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight sm:text-[42px]">
                    Flexible models for every stage.
                  </h2>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mx-auto max-w-6xl">
                {sector.engagementModels.map((em, i) => (
                  <Reveal key={em.title}>
                    <div className="h-full rounded-[20px] bg-white/5 border border-white/10 p-8 transition-colors hover:bg-white/10">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                        {/* Custom icons per model based on index */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {i === 0 ? <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/> : 
                           i === 1 ? <><path d="M2 12h4l2-9 5 18 2-9h5"/></> : 
                           <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></>}
                        </svg>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-3">
                        {em.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-white/70">
                        {em.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---------- How we operate + stat band ---------- */}
        <section className="bg-ink py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          <div className="container-x relative z-10 grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <div>
                <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-gold mb-3">
                  How We Operate
                </span>
                <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight text-white sm:text-[42px]">
                  The guardrails that come as standard.
                </h2>
                <ul className="mt-10 space-y-6">
                  {sector.compliance.map((c) => (
                    <li key={c} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                      </span>
                      <span className="text-[16px] leading-relaxed text-white/90">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
                {sector.graphics === "ai-data" && <AiDataQaFlow />}
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[24px] bg-white/5 border border-white/10 p-10 lg:p-12 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                  {sector.stats.map((s) => (
                    <div key={s.label}>
                      <div className={`font-display font-extrabold tracking-tight text-white ${s.value.length > 8 ? "text-3xl" : "text-5xl"}`}>
                        {s.value}
                      </div>
                      <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-gold" />
                      <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-white/60">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                {caseStudy && (
                  <Link
                    href={`/case-studies/${caseStudy.slug}/`}
                    className="mt-12 inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-gold"
                  >
                    Where these numbers came from
                    <Arrow />
                  </Link>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Proof: the matching case study ---------- */}
        {caseStudy && (
          <section className="bg-cream py-20 lg:py-32">
            <div className="container-x">
              <Reveal>
                <div className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[32px] bg-white shadow-lg border border-black/5 lg:grid-cols-2">
                  <div className="relative min-h-[300px] h-full w-full lg:min-h-[500px]">
                    <Image
                      src={caseStudy.img}
                      alt={`${caseStudy.name} case study`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-8 pb-12 lg:px-16 lg:py-16">
                    <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary mb-3">
                      Proof, Not Promises
                    </span>
                    <h2 className="font-display text-[28px] font-bold leading-tight sm:text-[36px]">
                      {caseStudy.name}
                    </h2>
                    <div className="mt-8 space-y-6">
                      {[
                        { label: "Challenge", text: caseStudy.challenge },
                        { label: "Solution", text: caseStudy.solution },
                        { label: "Results", text: caseStudy.results },
                      ].map((r) => (
                        <div key={r.label}>
                          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary mb-1">
                            {r.label}
                          </h4>
                          <p className="text-[15px] leading-relaxed text-body">
                            {r.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${caseStudy.slug}/`}
                      className="btn-primary mt-10"
                    >
                      Read Full Case Study
                      <Arrow size={18} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ---------- Related sectors (sectors with no matching case study) ---------- */}
        {!caseStudy && related && related.length > 0 && (
          <section className="bg-cream py-20 lg:py-32">
            <div className="container-x">
              <Reveal>
                <div className="mx-auto max-w-3xl text-center mb-16">
                  <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary mb-3">
                    Related Work
                  </span>
                  <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight sm:text-[42px]">
                    Where else we run this kind of team.
                  </h2>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {related.map((r) => (
                  <Reveal key={r.slug}>
                    <Link
                      href={`/sectors/${r.slug}/`}
                      className="group flex h-full flex-col rounded-[20px] border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(24,48,224,0.06)]"
                    >
                      <SectorIcon name={r.icon} size={28} />
                      <h3 className="mt-5 font-display text-xl font-bold text-heading">
                        {r.name}
                      </h3>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-body">
                        {r.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
                        See the sector
                        <Arrow size={16} />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---------- FAQs ---------- */}
        <section className="bg-white py-20 lg:py-32">
          <div className="container-x">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center mb-16">
                <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-primary mb-3">
                  Questions
                </span>
                <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-tight sm:text-[42px]">
                  {sector.name} FAQs
                </h2>
              </div>
            </Reveal>
            <div className="mx-auto max-w-3xl space-y-4">
              {sector.faqs.map((f, i) => (
                <Reveal key={f.q}>
                  <details className="group rounded-2xl border border-black/10 bg-white open:bg-cream transition-colors duration-200">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-8 py-6 font-display text-lg font-semibold text-heading [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black/5 text-body transition-transform group-open:rotate-180 group-open:bg-primary group-open:text-white"
                        aria-hidden="true"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M19 9l-7 7-7-7"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="px-8 pb-8 text-[16px] leading-relaxed text-body pt-2">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Bottom CTA band ---------- */}
        <section className="border-t border-black/10 bg-cream py-20 lg:py-28">
          <div className="container-x text-center max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-[36px] font-extrabold leading-tight sm:text-[48px] lg:text-[56px]">
                Ready to build support for your {sector.phrase}?
              </h2>
              <p className="mt-6 text-xl text-body max-w-2xl mx-auto">
                Let&rsquo;s scope a team, a workflow and an SLA that scales perfectly with your business.
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/contact/"
                  className="btn-primary text-lg px-10 py-5 shadow-xl shadow-primary/20"
                >
                  Contact Us Now
                  <Arrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
