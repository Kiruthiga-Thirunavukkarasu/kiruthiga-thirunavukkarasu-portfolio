"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">© 2024 Kiruthiga Thirunavukkarasu. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="https://github.com/Kiruthiga-Thirunavukkarasu" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/kiruthiga-thirunavukkarasu-43389014/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:kithucherry@gmail.com" className="text-slate-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <a href="#hero" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-white transition-colors">
          Back to Top <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;