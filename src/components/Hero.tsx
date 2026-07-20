"use client";

import { motion } from "framer-motion";
import { Download, Mail, User } from "lucide-react";
import { useState } from "react";
import profileImage from "/media/IMG_7587-transformed.jpeg";

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.12),transparent_50%)]" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Kiruthiga</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">Full Stack Developer</h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl">
              I build modern, scalable web applications with clean code and premium user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={profileImage}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
              >
                <Download className="w-5 h-5" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-5 h-5" /> Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-30" />
              {imgError ? (
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl border border-slate-700 shadow-2xl bg-slate-800 flex items-center justify-center">
                  <User className="w-20 h-20 text-slate-500" />
                </div>
              ) : (
                <img
                  src={profileImage}
                  alt="Kiruthiga Thirunavukkarasu"
                  onError={() => setImgError(true)}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover border border-slate-700 shadow-2xl"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;