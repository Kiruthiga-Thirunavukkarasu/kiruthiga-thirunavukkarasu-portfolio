"use client";

import { motion } from "framer-motion";

const About = () => {
  const technologies = ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL", "Docker"];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-slate-400 leading-relaxed">
            I'm a passionate Full Stack Developer with a background in telecom engineering and cloud architecture.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-white mb-3">Experience</h3>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li>• 10+ years in Telecom Core Network Planning (Nokia, Reliance)</li>
              <li>• AWS Certified Solutions Architect Associate</li>
              <li>• Currently training in Cloud Engineering at DCI Bonn</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-white mb-3">Technologies I Use</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-slate-700/50 text-slate-300 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;