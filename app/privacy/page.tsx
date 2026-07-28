import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Cimmons Integrated Services collects, uses and protects the personal information you share with us through this website and our services.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section className="bg-cream pt-[140px] pb-16">
          <div className="container-x">
            <h1 className="section-title text-[34px] sm:text-[44px]">Privacy Policy</h1>
            <p className="mt-4 max-w-2xl text-body">
              Last updated: January 2026. This policy explains what we collect,
              why, and the choices you have.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-x max-w-3xl space-y-10 text-body leading-relaxed">
            <div>
              <h2 className="section-title text-2xl text-heading">Who we are</h2>
              <p className="mt-3">
                Cimmons Integrated Services (&ldquo;Cimmons&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;) is a BPO and call center company based in
                Bengaluru, India. If you have any question about this policy or
                the data we hold, write to us at{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-primary underline">
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">What we collect</h2>
              <p className="mt-3">
                When you fill in an enquiry form, request a quote or email us, we
                collect the details you choose to give — typically your name,
                company, phone number, email address and the message itself. If you
                apply for a role, we also handle the information in your CV. Our
                website records basic, non-identifying analytics such as which pages
                are visited, so we can see what&rsquo;s useful and what isn&rsquo;t.
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">How we use it</h2>
              <p className="mt-3">
                We use your information for one thing: to respond to you and to
                run the service you asked about. That means replying to enquiries,
                preparing proposals, delivering the support work we&rsquo;re
                contracted for, and — where you&rsquo;ve applied for a job —
                assessing your application. We do not sell your data, and we
                don&rsquo;t send marketing you didn&rsquo;t ask for.
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">
                Data handled on behalf of clients
              </h2>
              <p className="mt-3">
                As a BPO provider, we process customer data belonging to our
                clients under their instructions. In those engagements the client
                is the data controller and we act as the processor, within the
                access controls, retention terms and compliance standards agreed in
                the contract. We treat that data as strictly confidential.
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">How we protect it</h2>
              <p className="mt-3">
                We use access controls, secure systems and staff training to keep
                information safe, and we only keep it for as long as we need it for
                the purpose it was given. No system is perfectly secure, but we take
                the responsibility seriously and review our practices regularly.
              </p>
            </div>

            <div>
              <h2 className="section-title text-2xl text-heading">Your choices</h2>
              <p className="mt-3">
                You can ask us what we hold about you, ask us to correct it, or ask
                us to delete it. Email{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-primary underline">
                  {CONTACT.email}
                </a>{" "}
                and we&rsquo;ll act on your request. If we ever change this policy,
                the updated version will live on this page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
