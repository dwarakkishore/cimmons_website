import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms that govern your use of the Cimmons Integrated Services website and the information published on it.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section className="bg-cream pt-[140px] pb-16">
          <div className="container-x">
            <h1 className="section-title text-[34px] sm:text-[44px]">
              Terms and Conditions
            </h1>
            <p className="mt-4 max-w-2xl text-body">
              Last updated: January 2026. Please read these terms before using
              this website.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-x max-w-3xl space-y-10 text-body leading-relaxed">
            <div>
              <h2 className="section-title text-2xl text-heading">Using this site</h2>
              <p className="mt-3">
                This website is operated by Cimmons Integrated Services. By browsing
                it you agree to these terms. The content here is provided to tell you
                about our BPO and call center services; it isn&rsquo;t a binding
                offer on its own. Any actual engagement is governed by a separate
                agreement we sign with you.
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">
                Accuracy of information
              </h2>
              <p className="mt-3">
                We keep the information on this site as accurate and current as we
                can, but service details, statistics and case-study figures are for
                general guidance and may change. If a specific number or claim
                matters to your decision, ask us to confirm it in writing before you
                rely on it.
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">
                Intellectual property
              </h2>
              <p className="mt-3">
                The Cimmons name, logo, page copy, images and design belong to
                Cimmons Integrated Services. You&rsquo;re welcome to read and share
                links to our pages, but please don&rsquo;t copy, republish or reuse
                our content commercially without asking us first.
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">Links to other sites</h2>
              <p className="mt-3">
                Where we link out to other websites, we do it because they&rsquo;re
                useful — not because we control them. We&rsquo;re not responsible for
                the content or practices of sites we don&rsquo;t run.
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">Liability</h2>
              <p className="mt-3">
                We provide this website in good faith and &ldquo;as is&rdquo;. To the
                extent the law allows, we&rsquo;re not liable for any loss arising
                from your use of the site itself. Our obligations for the services we
                deliver are set out in the contract for those services, not here.
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">Contact</h2>
              <p className="mt-3">
                Questions about these terms? Email{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-primary underline">
                  {CONTACT.email}
                </a>{" "}
                or call{" "}
                <a href={`tel:${CONTACT.phoneHref}`} className="text-primary underline">
                  {CONTACT.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
