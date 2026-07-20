"use client";

import { motion } from "framer-motion";

const experiences = [
  { year: "2005–2007", role: "Core Planning Engineer", company: "Reliance Communications" },
  { year: "2007–2016", role: "Core Planning Engineer", company: "Nokia Solutions Networks" },
  { year: "2016–2026", role: "Homemaker & German Learning", company: "Bonn, Germany" },
  { year: "2026–Present", role: "Cloud Engineering Student", company: "DCI Digital Career Institute" },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Experience Timeline
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 mb-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-indigo-500 mt-1" />
                {i < experiences.length - 1 && <div className="w-0.5 flex-1 bg-slate-700" />}
              </div>
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-5 border border-slate-700 flex-1">
                <span className="text-sm text-indigo-400 font-semibold">{exp.year}</span>
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-slate-400 text-sm">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;