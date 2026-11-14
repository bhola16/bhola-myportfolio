"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Layers3, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import { projects } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 pb-16 pt-10 dark:bg-slate-950 sm:pb-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Sparkles size={15} />
            My Work
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
            A selection of projects where I apply my knowledge of software
            development, problem-solving, and modern technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              variants={itemVariants}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/40 dark:hover:shadow-blue-950/20">
              {/* Live Website Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                {project.liveLink ? (
                  <iframe
                    src={project.liveLink}
                    title={`${project.title} website preview`}
                    loading="lazy"
                    tabIndex={-1}
                    className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0 transition-transform duration-700 group-hover:scale-[0.42]"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-slate-500">
                    Preview unavailable
                  </div>
                )}

                {/* Preview Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />

                {/* Category */}
                <div className="absolute bottom-4 left-4 max-w-[75%]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span className="truncate">{project.category}</span>
                  </span>
                </div>

                {/* Project Number */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-colors duration-300 group-hover:border-blue-400/60 group-hover:bg-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                {/* Project Label */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers3
                      size={17}
                      className="text-blue-600 dark:text-blue-400"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                      Project
                    </span>
                  </div>

                  <Sparkles
                    size={16}
                    className="text-slate-300 transition-colors duration-300 group-hover:text-blue-500 dark:text-slate-700 dark:group-hover:text-blue-400"
                  />
                </div>

                {/* Project Title */}
                <h3 className="min-h-[50px] break-words text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-2xl">
                  {project.title}
                </h3>

                {/* Action Links */}
                <div className="mt-0 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/button inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 sm:px-4">
                    View Details
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
                    <ExternalLink size={18} />
                  </Link>

                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} GitHub repository`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
                    <FaGithub size={19} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
