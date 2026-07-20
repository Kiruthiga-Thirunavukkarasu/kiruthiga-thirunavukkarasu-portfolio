"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800" : ""}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg text-white">Kiruthiga<span className="text-indigo-400">.dev</span></a>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 py-4 px-4 flex flex-col gap-3 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white py-1">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;