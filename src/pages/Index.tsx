"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mail, Phone, MapPin, Linkedin, Github, Cloud, Shield, Network, ArrowRight,
  CheckCircle2, Menu, X, GraduationCap, BookOpen, Route, Download, Rocket,
  Server, Code2, Database, Globe, Lock, Cpu, Boxes, Gauge, Award, Zap,
  ArrowUp, Sun, Moon,
} from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import CursorTrail from "@/components/CursorTrail";
import ThreeDCard from "@/components/ThreeDCard";

/* ---------- Data ---------- */
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Home Lab" },
  { href: "#certs", label: "Certifications" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#why", label: "Why Me" },
  { href: "#contact", label: "Contact" },
];

const skillGroups = [
  {
    title: "Cloud", icon: Cloud, accent: "from-[#FF9900] to-[#FFB84D]",
    items: ["AWS", "Azure", "EC2", "VPC", "IAM", "S3", "Route53", "Cloud Security", "Cloud Migration", "Disaster Recovery", "Cost Optimization", "Infrastructure as Code"],
  },
  {
    title: "Networking", icon: Network, accent: "from-[#0078D4] to-[#4AA3E8]",
    items: ["Routing", "Switching", "TCP/IP", "DNS", "DHCP", "VPN", "Cisco", "VLAN", "BGP", "OSPF", "Network Security", "Troubleshooting"],
  },
  {
    title: "Telecom", icon: Globe, accent: "from-[#FF9900] to-[#0078D4]",
    items: ["IMS", "VoIP", "SIP", "LTE", "4G", "5G", "3GPP", "Core Network Planning", "Capacity Planning", "OSS/BSS", "Performance Optimization"],
  },
  {
    title: "Programming", icon: Code2, accent: "from-[#0078D4] to-[#FF9900]",
    items: ["Python", "Git", "GitHub", "Docker", "Linux", "HTML", "Bash", "Automation"],
  },
];

const experience = [
  { company: "Germany", role: "Career Development", period: "2016 – 2026", points: ["Family relocation.", "Achieved German C1 certification.", "AWS Solutions Architect certification.", "Continuous professional development.", "Prepared transition into Cloud Engineering."] },
  { company: "Nokia Solutions Networks", role: "Core Planning Engineer", period: "2007 – 2016", points: ["Designed and optimized nationwide telecom core networks.", "Worked with IMS architecture.", "Performed network planning.", "Capacity optimization.", "Cisco infrastructure support.", "Latency optimization.", "Cross-functional engineering collaboration."] },
  { company: "Reliance Communications", role: "Core Planning Engineer", period: "2005 – 2007", points: ["Core network planning.", "2G and 3G capacity planning.", "Network analysis.", "Telecommunications engineering.", "3GPP standards."] },
  { company: "DCI Digital Career Institute", role: "Cloud Engineering Student", period: "2026 – Present", points: ["Microsoft Azure.", "Python.", "GitHub.", "Docker.", "Cloud Automation.", "Linux.", "Networking."] },
];

const projects = [
  { title: "AWS Three Tier Architecture", desc: "Highly available web architecture using EC2, ALB, Auto Scaling, RDS, S3, IAM, Route53.", tags: ["AWS", "EC2", "RDS", "IAM", "VPC", "Terraform"], img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" },
  { title: "Azure Virtual Network Lab", desc: "Secure Azure networking lab with VNet, NSG, VPN Gateway and peering.", tags: ["Azure VNet", "NSG", "VPN Gateway", "Azure VM", "Virtual Network Peering"], img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
  { title: "Python Network Automation", desc: "Automated Cisco device configuration using Python and Netmiko over SSH.", tags: ["Python", "Netmiko", "SSH", "Automation", "Cisco"], img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" },
  { title: "Dockerized Web Application", desc: "Containerized NGINX web app with reproducible Docker workflows.", tags: ["Docker", "NGINX", "Containers"], img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80" },
  { title: "Hybrid Cloud Network", desc: "Connected AWS and Azure via VPN with custom routing and cloud migration.", tags: ["AWS", "Azure", "VPN", "Routing", "Cloud Migration"], img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
  { title: "Secure Cloud Infrastructure", desc: "Zero-trust cloud infra with IAM, security groups, and CloudWatch monitoring.", tags: ["IAM", "Security Groups", "Zero Trust", "Monitoring", "CloudWatch"], img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
];

const certs = [
  { name: "AWS Certified Solutions Architect Associate", status: "Done", icon: Cloud },
  { name: "Oracle Cloud Infrastructure AI Associate", status: "Done", icon: Award },
  { name: "Professional Scrum Master I", status: "Done", icon: Award },
  { name: "German C1", status: "Done", icon: Award },
  { name: "Azure Training", status: "In Progress", icon: Cloud },
  { name: "CCNP ENCOR", status: "In Progress", icon: Network },
];

const roadmap = [
  { phase: "Completed", items: ["AWS SAA", "German C1", "OCI AI Associate"], color: "bg-[#FF9900] text-white" },
  { phase: "Current", items: ["Azure", "Python", "Docker", "GitHub", "Linux"], color: "bg-[#0078D4] text-white" },
  { phase: "Next Goals", items: ["Azure Administrator", "Terraform", "Kubernetes", "Ansible", "CI/CD", "DevOps"], color: "bg-slate-300 text-slate-800" },
];

const whyUs = [
  { icon: Award, title: "10+ Years Industry Experience", desc: "A decade of telecom core network planning at Nokia & Reliance." },
  { icon: Cloud, title: "AWS Certified", desc: "AWS Certified Solutions Architect Associate." },
  { icon: Network, title: "Strong Networking Expertise", desc: "Deep Cisco, routing, and network security knowledge." },
  { icon: Zap, title: "Telecom + Cloud Combination", desc: "Rare blend of carrier-grade telecom and modern cloud." },
  { icon: Rocket, title: "Fast Learner", desc: "Actively mastering Azure, Python, and Docker." },
  { icon: CheckCircle2, title: "Ready to Contribute Immediately", desc: "Available and eager to join your cloud team." },
];

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "", label: "Global Telecom Companies" },
  { value: 6, suffix: "+", label: "Professional Certifications" },
  { value: 100, suffix: "%", label: "Commitment to Learning" },
];

/* ---------- Hooks ---------- */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, shown } = useReveal();
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ease-out ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
}

function useCountUp(target: number, shown: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!shown) return;
    let raf = 0; const start = performance.now(); const dur = 1200;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setVal(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, target]);
  return val;
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, shown } = useReveal();
  const val = useCountUp(value, shown);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#FF9900] to-[#0078D4] bg-clip-text text-transparent">{val}{suffix}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{label}</p>
    </div>
  );
}

/* ---------- Components ---------- */
function HeroCloudArt() {
  return (
    <div className="relative w-full max-w-md mx-auto [perspective:1000px]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/20 to-[#0078D4]/20 blur-3xl rounded-full" />
      <svg viewBox="0 0 400 300" className="relative w-full drop-shadow-2xl [transform:rotateX(8deg)_rotateY(-8deg)] transition-transform duration-500 hover:[transform:rotateX(0deg)_rotateY(0deg)]">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF9900" /><stop offset="100%" stopColor="#0078D4" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="150" r="60" fill="url(#g1)" opacity="0.15" />
        <rect x="120" y="110" width="160" height="80" rx="16" fill="white" stroke="url(#g1)" strokeWidth="2" className="dark:fill-slate-800" />
        <circle cx="160" cy="140" r="10" fill="#FF9900" className="animate-pulse" />
        <circle cx="200" cy="140" r="10" fill="#0078D4" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
        <circle cx="240" cy="140" r="10" fill="#FF9900" className="animate-pulse" style={{ animationDelay: "1s" }} />
        <path d="M160 170 H240" stroke="url(#g1)" strokeWidth="2" />
        <path d="M120 150 H80 M280 150 H320" stroke="url(#g1)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
      </svg>
      <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#FF9900] rounded-full animate-bounce shadow-lg" />
      <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-[#0078D4] rounded-full animate-bounce shadow-lg" style={{ animationDelay: "0.7s" }} />
    </div>
  );
}

function Btn3D({ href, children, className = "", download = false }: { href: string; children: React.ReactNode; className?: string; download?: boolean }) {
  return (
    <a
      href={href}
      download={download ? "Kiruthiga-Thirunavukkarasu-Resume.pdf" : undefined}
      target={download ? undefined : "_self"}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-200 shadow-[0_6px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.15)] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px] ${className}`}
    >
      {children}
    </a>
  );
}

export default function Index() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);
  const [typed, setTyped] = useState("");
  const [showTop, setShowTop] = useState(false);

  const fullText = "Cloud Networking Engineer | AWS Certified Solutions Architect | Azure Cloud Engineer";

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors font-sans [perspective:1200px]">
      <CursorTrail />

      {/* SEO / Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person",
        name: "Kiruthiga Thirunavukkarasu",
        jobTitle: "Cloud Networking Engineer",
        email: "kithucherry@gmail.com",
        telephone: "+49 17665062731",
        address: { "@type": "PostalAddress", addressLocality: "Bonn", addressCountry: "Germany" },
        sameAs: ["https://www.linkedin.com/in/kiruthiga-thirunavukkarasu-43389014/", "https://github.com/Kiruthiga-Thirunavukkarasu"],
        knowsAbout: ["AWS", "Azure", "Networking", "Telecom", "Cloud Infrastructure"],
      }) }} />

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FF9900] to-[#0078D4] z-[60]" style={{ width: `${progress}%` }} />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <Cloud className="w-6 h-6 text-[#FF9900]" /> Kiruthiga<span className="text-[#0078D4]">.dev</span>
          </a>
          <nav className="hidden lg:flex gap-5 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#0078D4] transition-colors">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setDark(!dark)} className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle theme">
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 py-2 px-4 flex flex-col gap-1 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 hover:text-[#0078D4]">{l.label}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,153,0,0.08),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(0,120,212,0.08),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-[#FF9900] to-[#0078D4] bg-clip-text text-transparent [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]">Kiruthiga Thirunavukkarasu</h1>
            <p className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-200 h-7 mb-6">{typed}<span className="animate-pulse">|</span></p>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl">
              Cloud Networking Engineer with 10+ years of experience designing and optimizing telecommunications core networks at Nokia and Reliance Communications. AWS Certified Solutions Architect currently expanding expertise in Microsoft Azure, Python, Docker, GitHub, and Cloud Automation. Passionate about building secure, scalable, and resilient cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center md:justify-start">
              <Btn3D href="/resume.pdf" download className="bg-[#FF9900] text-white"> <Download className="w-4 h-4" /> Download Resume</Btn3D>
              <Btn3D href="#projects" className="bg-[#0078D4] text-white"> <Rocket className="w-4 h-4" /> View Projects</Btn3D>
              <Btn3D href="#contact" className="border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Contact Me</Btn3D>
            </div>
          </div>
          <Reveal className="order-first md:order-last">
            <HeroCloudArt />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => <Counter key={s.label} {...s} />)}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a Cloud Networking Engineer with <strong>10+ years</strong> of telecommunications experience at <strong>Nokia Solutions Networks</strong> and <strong>Reliance Communications</strong>. AWS Certified Solutions Architect with strong networking, Cisco, and cloud migration background, currently training in Microsoft Azure. I design secure, scalable infrastructure and am looking for Cloud Networking opportunities in Germany or Remote.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-14 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <Reveal><h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((g) => (
              <Reveal key={g.title}>
                <ThreeDCard className="h-full">
                  <div className="backdrop-blur bg-white/70 dark:bg-slate-800/60 rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] border border-slate-200 dark:border-slate-700 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g.accent} flex items-center justify-center mb-4 shadow-lg`}>
                      <g.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{g.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200">{i}</span>
                      ))}
                    </div>
                  </div>
                </ThreeDCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal><h2 className="text-3xl font-bold text-center mb-10">Experience</h2></Reveal>
          <div className="relative border-l-2 border-gradient-to-b from-[#FF9900] to-[#0078D4] pl-6 space-y-8">
            {experience.map((e) => (
              <Reveal key={e.company + e.period}>
                <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#FF9900] border-2 border-white dark:border-slate-950 shadow-md" />
                <ThreeDCard>
                  <div className="backdrop-blur bg-white/70 dark:bg-slate-800/60 rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] border border-slate-200 dark:border-slate-700">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <h3 className="font-bold text-lg">{e.company}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 shadow-sm">{e.period}</span>
                    </div>
                    <p className="text-sm font-medium text-[#0078D4] mb-2">{e.role}</p>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      {e.points.map((p) => <li key={p} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" /> {p}</li>)}
                    </ul>
                  </div>
                </ThreeDCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Home Lab Setup */}
      <section id="projects" className="py-14 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <Reveal><h2 className="text-3xl font-bold text-center mb-10">Home Lab Setup</h2></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Reveal key={p.title}>
                <ThreeDCard className="h-full">
                  <div className="backdrop-blur bg-white/70 dark:bg-slate-800/60 rounded-2xl overflow-hidden shadow-[0_12px_35px_-12px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-700 h-full">
                    <img src={p.img} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => <span key={t} className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section id="certs" className="py-14">
        <div className="container mx-auto px-4">
          <Reveal><h2 className="text-3xl font-bold text-center mb-10">Certifications</h2></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {certs.map((c) => (
              <Reveal key={c.name}>
                <ThreeDCard>
                  <div className="flex items-center gap-4 backdrop-blur bg-white/70 dark:bg-slate-800/60 rounded-2xl p-5 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.2)] border border-slate-200 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF9900] to-[#0078D4] flex items-center justify-center shrink-0 shadow-md">
                      <c.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{c.name}</p>
                      <p className={`text-xs font-medium ${c.status === "Done" ? "text-[#FF9900]" : "text-[#0078D4]"}`}>{c.status}</p>
                    </div>
                  </div>
                </ThreeDCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-14 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal><h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2"><Route className="w-7 h-7 text-[#0078D4]" /> Learning Roadmap</h2></Reveal>
          <div className="space-y-4">
            {roadmap.map((r) => (
              <Reveal key={r.phase}>
                <ThreeDCard>
                  <div className="flex gap-4 items-start backdrop-blur bg-white/70 dark:bg-slate-800/60 rounded-2xl p-5 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.2)] border border-slate-200 dark:border-slate-700">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${r.color} shadow-sm`}>{r.phase}</span>
                    <div className="flex flex-wrap gap-2">
                      {r.items.map((i) => <span key={i} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700">{i}</span>)}
                    </div>
                  </div>
                </ThreeDCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section id="why" className="py-14">
        <div className="container mx-auto px-4">
          <Reveal><h2 className="text-3xl font-bold text-center mb-10">Why Hire Me</h2></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <Reveal key={w.title}>
                <ThreeDCard className="h-full">
                  <div className="backdrop-blur bg-white/70 dark:bg-slate-800/60 rounded-2xl p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] border border-slate-200 dark:border-slate-700 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9900] to-[#0078D4] flex items-center justify-center mb-4 shadow-lg">
                      <w.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{w.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{w.desc}</p>
                  </div>
                </ThreeDCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-8">Let's Connect</h2>
            <div className="space-y-3 text-sm max-w-md mx-auto">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#FF9900]" /> kithucherry@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#FF9900]" /> +49 17665062731</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#FF9900]" /> Bonn, Germany</p>
              <p className="flex items-center gap-2"><Linkedin className="w-4 h-4 text-[#0078D4]" /> <a href="https://www.linkedin.com/in/kiruthiga-thirunavukkarasu-43389014/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></p>
              <p className="flex items-center gap-2"><Github className="w-4 h-4 text-[#0078D4]" /> <a href="https://github.com/Kiruthiga-Thirunavukkarasu" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-500">© {new Date().getFullYear()} Kiruthiga Thirunavukkarasu. Made with ❤️</p>
          <div className="flex gap-4">
            {navLinks.slice(0, 4).map((l) => <a key={l.href} href={l.href} className="hover:text-[#0078D4]">{l.label}</a>)}
            <a href="/resume.pdf" download="Kiruthiga-Thirunavukkarasu-Resume.pdf" className="hover:text-[#FF9900]">Resume</a>
          </div>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/kiruthiga-thirunavukkarasu-43389014/" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5 hover:text-[#0078D4]" /></a>
            <a href="https://github.com/Kiruthiga-Thirunavukkarasu" target="_blank" rel="noreferrer"><Github className="w-5 h-5 hover:text-[#FF9900]" /></a>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-br from-[#FF9900] to-[#0078D4] text-white shadow-[0_6px_15px_-3px_rgba(0,0,0,0.3)] hover:opacity-90" aria-label="Back to top">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <MadeWithDyad />
    </div>
  );
}