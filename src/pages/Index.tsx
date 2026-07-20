"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import ScrollToTop from "@/components/ScrollToTop";

export default function Index() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Seo />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}