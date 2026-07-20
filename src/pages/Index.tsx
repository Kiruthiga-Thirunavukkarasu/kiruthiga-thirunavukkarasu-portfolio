"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Cloud, Shield, Network, Phone, ArrowRight, CheckCircle2, Menu, X, GraduationCap, BookOpen, Route } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Skills" },
  { href: "#learning", label: "Learning" },
  { href: "#why", label: "Why Me" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    icon: Cloud,
    title: "Cloud Consulting",
    items: ["AWS Architecture Design", "Seamless Cloud Migration", "Cost Optimization & Analytics", "Disaster Recovery Planning"],
    color: "from-sky-500 to-indigo-500",
  },
  {
    icon: Network,
    title: "Networking",
    items: ["Cisco Routing & Switching", "Secure VPN Solutions", "VLAN Configuration & Setup", "Advanced Network Design", "Diagnostics & Troubleshooting"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Cyber Security & Telecom",
    items: ["IAM & Security Groups", "Zero-Trust Segmentation", "SIP Trunking & Engineering", "IMS Integration", "Managed VoIP Solutions", "Core Network Consulting"],
    color: "from-rose-500 to-pink-500",
  },
];

const industries = ["Healthcare", "Logistics", "Retail", "Education", "Small & Medium Businesses", "Manufacturing", "Startups"];

const whyUs = [
  { title: "10+ Years Experience", desc: "Deep roots in complex enterprise networking and critical telco infrastructure." },
  { title: "AWS Certified", desc: "Rigorously trained Solutions Architect expertise driving best-practice deployments." },
  { title: "Dual Domain Expertise", desc: "Rare blend of telecom core and agile public cloud skillsets." },
  { title: "Cost-Effective", desc: "Tailored, pragmatic designs that maximize performance per dollar spent." },
  { title: "International Outlook", desc: "Diverse background with a broad understanding of tech standards." },
  { title: "Personal Support", desc: "Dedicated consultant attention without corporate bureaucracy." },
];

const experience = [
  { period: "01/2024 – heute", role: "Case Handling Engineer", company: "Nokia Solutions Networks", loc: "Bonn", points: ["Planung & Optimierung großskaliger Kernnetzarchitekturen (2G–4G, IMS)", "Konfiguration & Troubleshooting von Cisco-Routern/Switches", "Netzwerksicherheitskonzepte & Latenzanalyse"] },
  { period: "06/2016 – 12/2023", role: "Homemaker & Integration", company: "Familie & Weiterbildung", loc: "Bonn", points: ["Umzug nach Deutschland 2016", "Deutsch C1 zertifiziert", "AWS / Azure Weiterbildung bei DCI"] },
  { period: "10/2007 – 06/2016", role: "Core Planning Engineer", company: "Reliance Communications", loc: "Pan-Indien", points: ["Analyse & Modellierung von Core-Netzwerken", "Optimierung 2G/3G Kapazitätsplanung", "3GPP-Standardkonformität"] },
];

const certs = [
  "AWS Certified Solutions Architect – Associate (SAA-C03) — Done",
  "Oracle Cloud Infrastructure AI Associate",
  "Deutsch C1 Zertifiziert",
  "Agile Scrum Master (PSM I)",
  "CCNA / Cisco Router Vorbereitung",
  "CCNP ENCOR — Weiterbildung in progress",
];

const learnedSkills = [
  { icon: BookOpen, title: "Python Fundamentals", desc: "Core syntax, data structures, scripting basics for automation." },
  { icon: Github, title: "GitHub", desc: "Version control, repositories, branching, pull requests & collaboration." },
  { icon: BookOpen, title: "HTML", desc: "Semantic markup, page structure, and web fundamentals." },
  { icon: Cloud, title: "Docker", desc: "Container basics, images, volumes, and running containers locally." },
];

const roadmap = [
  { step: "AWS SAA-C03", status: "Done", desc: "Certified Solutions Architect Associate completed." },
  { step: "DCI Cloud Training (Azure)", status: "In Progress", desc: "Student at DCI Digital Career Institute — learning Microsoft Azure, Python, GitHub, HTML, Docker." },
  { step: "CCNP ENCOR", status: "In Progress", desc: "Weiterbildung in enterprise networking (ENCOR) underway." },
  { step: "Azure Administrator / Solutions", status: "Planned", desc: "Targeting Azure certs after fundamentals." },
];

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg text-indigo-700">
            <Cloud className="w-6 h-6" />
            Kiruthiga<span className="text-slate-400">.dev</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-indigo-600 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden bg-white border-t border-slate-100 py-2 px-4 flex flex-col gap-2 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 hover:text-indigo-600">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.indigo.100),transparent_50%)]" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="max-w-3xl mx-auto text-center animate-[fadeIn_0.8s_ease-out]">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
              AWS Network Engineer · Open to Work
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
              Kiruthiga Thirunavukkarasu
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-2 font-medium">Cloud Networking · VoIP & Telecom Specialist</p>
            <p className="text-base md:text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              Network & Telekommunikationsexpertin with 10+ years planning core infrastructures (3G–5G)
              at Nokia & Reliance — now combining telecom rigor with AWS cloud architecture and active Azure training at DCI.
              Currently seeking a cloud networking role in Germany or remote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-semibold transition-colors">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#learning" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 hover:border-indigo-300 px-6 py-3 font-semibold transition-colors">
                My Learning Path
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About – Job Seeker */}
      <section id="about" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/media/d69b5ac96a93226872cfe141fa3e6191351150a9346f0236cbe39b5371fe6f0b.JPG"
                alt="Kiruthiga Thirunavukkarasu"
                className="w-48 h-48 rounded-full object-cover border-4 border-indigo-100 shadow-md mb-4"
              />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
              <p className="text-slate-600 mb-3 leading-relaxed">
                I'm a cloud networking professional with over 10 years of experience in telecommunications
                and core network planning at global leaders like Nokia and Reliance. After a successful
                integration phase in Germany (Deutsch C1 certified), I'm now expanding into modern cloud
                platforms — AWS certified and currently training in Microsoft Azure at DCI.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm actively looking for a role where I can combine my deep telecom background with
                cloud networking, security, and VoIP expertise to help teams build resilient,
                cost-effective infrastructure.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">Open to Work</span>
                <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-sm font-medium">AWS Certified</span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">Azure Trainee</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="font-bold text-lg mb-4 text-slate-800">Contact & Profiles</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-indigo-500" /> kithucherry@gmail.com</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-indigo-500" /> +49 176 650 627 31</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-500" /> Michaelplatz-1, 53177 Bonn, Deutschland</p>
                <p className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-indigo-500" />
                  <a href="https://www.linkedin.com/in/kiruthiga-thirunavukkarasu-43389014/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn Profile</a>
                </p>
                <p className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-indigo-500" />
                  <a href="https://github.com/Kiruthiga-Thirunavukkarasu" target="_blank" rel="noreferrer" className="hover:underline">GitHub Repository</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="services" className="py-10 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-slate-800">{s.title}</h3>
                <ul className="space-y-0.5 text-sm text-slate-600">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section id="learning" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-7 h-7 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900">Learning Path & Roadmap</h2>
          </div>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-8">
            Currently a cloud student at DCI Digital Career Institute, expanding into Microsoft Azure while building on a strong telecom & AWS foundation.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">What I've Learned So Far</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {learnedSkills.map((s) => (
              <div key={s.title} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1">{s.title}</h4>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
            <Route className="w-5 h-5 text-indigo-600" /> My Roadmap
          </h3>
          <div className="max-w-2xl mx-auto space-y-4">
            {roadmap.map((r) => (
              <div key={r.step} className="flex items-start gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${
                  r.status === "Done" ? "bg-emerald-100 text-emerald-700" :
                  r.status === "In Progress" ? "bg-amber-100 text-amber-700" :
                  "bg-slate-200 text-slate-600"
                }`}>
                  {r.status}
                </span>
                <div>
                  <h4 className="font-semibold text-slate-800">{r.step}</h4>
                  <p className="text-sm text-slate-600">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section id="why" className="py-10 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Why Hire Me</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-3 p-5 rounded-2xl bg-white border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-800">{w.title}</h4>
                  <p className="text-sm text-slate-600">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Certs */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Experience</h2>
            <div className="space-y-6">
              {experience.map((e) => (
                <div key={e.role} className="border-l-2 border-indigo-200 pl-5">
                  <p className="text-xs font-semibold text-indigo-600">{e.period}</p>
                  <h4 className="font-bold text-slate-800">{e.role}</h4>
                  <p className="text-sm text-slate-500">{e.company} · {e.loc}</p>
                  <ul className="text-sm text-slate-600 space-y-0.5 mt-1">
                    {e.points.map((p) => <li key={p}>– {p}</li>)}
                  </ul>
                </div>
              ))}
              <div className="border-l-2 border-amber-200 pl-5">
                <p className="text-xs font-semibold text-amber-600">2026 – laufend</p>
                <h4 className="font-bold text-slate-800">Cloud Student (Azure)</h4>
                <p className="text-sm text-slate-500">DCI Digital Career Institute · Bonn</p>
                <ul className="text-sm text-slate-600 space-y-0.5 mt-1">
                  <li>– Python, GitHub, HTML, Docker Grundlagen</li>
                  <li>– Microsoft Azure Fundamentals & Cloud Practice</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Certifications</h2>
            <div className="space-y-3">
              {certs.map((c) => (
                <div key={c} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100 shadow-sm">
                  <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-indigo-600 rounded-3xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Education</h3>
              <p className="text-sm opacity-90">Electronics & Communication Engineering — Anna University Chennai (2001–2005)</p>
              <p className="text-sm opacity-90 mt-1">Core Planning & Telecom Engineering — Mumbai, India (2005–2007)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-10 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Sectors I've Worked In</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-white text-slate-700 font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors border border-slate-100">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-10 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="mb-8 opacity-90 max-w-xl mx-auto">
            Open to cloud networking, DevOps, and telecom-cloud roles in Germany or remote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:kithucherry@gmail.com" className="inline-flex items-center gap-2 bg-white text-indigo-700 rounded-full px-6 py-3 font-semibold hover:bg-slate-100 transition-colors">
              <Mail className="w-4 h-4" /> kithucherry@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/kiruthiga-thirunavukkarasu-43389014/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-white/40 rounded-full px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
          <p className="mt-6 text-sm opacity-80 flex items-center justify-center gap-1">
            <MapPin className="w-4 h-4" /> Bonn, Germany
          </p>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
}