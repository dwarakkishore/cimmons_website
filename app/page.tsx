import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Technology from "@/components/Technology";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Reveal><Hero /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Clients /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Approach /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Industries /></Reveal>
        <Reveal><CaseStudies /></Reveal>
        <Reveal><Technology /></Reveal>
        <Reveal><Pricing /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><Blog /></Reveal>
        <Reveal><Cta /></Reveal>
      </main>
      <Reveal><Footer /></Reveal>
    </>
  );
}
