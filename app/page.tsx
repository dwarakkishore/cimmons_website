import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Technology from "@/components/Technology";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Industries />
        <CaseStudies />
        <Technology />
        <Pricing />
        <Faq />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
