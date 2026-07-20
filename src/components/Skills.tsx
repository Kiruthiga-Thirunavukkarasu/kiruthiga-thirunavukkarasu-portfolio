"use client";

import { motion } from "framer-motion";
import { Code2, FileCode, Hash, Braces, Atom, Triangle, Server, Network, Database, Leaf, Wind, GitBranch, Container } from "lucide-react";

const skills = [
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: Hash },
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: Braces },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Network },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Leaf },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Container },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:border-indigo-500 transition-colors"
            >
              <skill.icon className="w-8 h-8 text-indigo-400" />
              <span className="text-sm font-medium text-slate-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;