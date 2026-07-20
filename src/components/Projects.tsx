"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cloud Migration Dashboard",
    description: "A real-time dashboard for monitoring AWS cloud migration progress with cost analytics.",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    image: "/media/IMG_7587-transformed.jpeg",
    demo: "#",
    github: "#",
  },
  {
    title: "Telecom Network Planner",
    description: "Tool for planning and optimizing core network architectures for 4G/5G deployments.",
    tech: ["TypeScript", "Python", "Docker"],
    image: "/media/IMG_7587-transformed.jpeg",
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Generator",
    description: "An AI-assisted portfolio builder for developers with customizable themes.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    image: "/media/IMG_7587-transformed.jpeg",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:border-indigo-500 transition-colors"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-slate-700/50 text-slate-300 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;