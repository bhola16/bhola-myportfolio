"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Layers3,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { skills } from "@/data/portfolio";

const categoryIcons = [Code2, BrainCircuit, Globe, Wrench];

const categoryDescriptions = [
  "Languages I use to build solutions and explore computational problems.",
  "Technologies and concepts I use to develop intelligent systems.",
  "Tools and frameworks for building modern web applications.",
  "Development tools and environments that support my workflow.",
];

const categoryColors = [
  {
    icon: "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
    border: "group-hover:border-blue-300 dark:group-hover:border-blue-500/40",
    glow: "bg-blue-500/10",
    chip: "hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-300",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: "bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
    border:
      "group-hover:border-violet-300 dark:group-hover:border-violet-500/40",
    glow: "bg-violet-500/10",
    chip: "hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-300",
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
    border: "group-hover:border-cyan-300 dark:group-hover:border-cyan-500/40",
    glow: "bg-cyan-500/10",
    chip: "hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300",
    accent: "from-cyan-500 to-teal-500",
  },
  {
    icon: "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    border: "group-hover:border-amber-300 dark:group-hover:border-amber-500/40",
    glow: "bg-amber-500/10",
    chip: "hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 dark:hover:border-amber-500/40 dark:hover:bg-amber-500/10 dark:hover:text-amber-300",
    accent: "from-amber-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-white px-4 py-2 pb-10 transition-colors duration-500 dark:bg-[#0b1220] sm:px-6 lg:px-8">
      {/* Background decoration */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]"
      />

      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-violet-500/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <span className="h-px w-7 bg-blue-500" />
            My Technical Expertise
            <Sparkles size={14} className="animate-pulse" />
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Skills &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
                Technologies
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
              Technologies and tools I use to explore ideas, develop intelligent
              solutions, and build practical applications.
            </p>
          </div>
        </motion.div>

        {/* Skills categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:grid-cols-2">
          {skills.map((category, index) => {
            const Icon = categoryIcons[index] || Layers3;
            const color = categoryColors[index % categoryColors.length];

            return (
              <motion.div
                key={category.category}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-900 dark:hover:shadow-black/20 sm:p-7 ${color.border}`}>
                {/* Card glow */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${color.glow}`}
                />

                <div className="relative">
                  {/* Category heading */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: -10, scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color.icon}`}>
                        <Icon size={24} />
                      </motion.div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {category.category}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {category.items.length} Technologies
                        </p>
                      </div>
                    </div>

                    <span className="text-3xl font-black text-slate-200 transition-colors duration-300 group-hover:text-slate-300 dark:text-slate-800 dark:group-hover:text-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Category description */}
                  <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {categoryDescriptions[index] ||
                      "Technologies I use in my development workflow."}
                  </p>

                  {/* Animated divider */}
                  <div className="my-5 h-px w-full bg-slate-200 dark:bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.2 + index * 0.1,
                      }}
                      className={`h-px bg-gradient-to-r ${color.accent}`}
                    />
                  </div>

                  {/* Technology chips */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.15 + skillIndex * 0.045,
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.06,
                        }}
                        className={`cursor-default rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 ${color.chip}`}>
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 px-5 py-6 text-center dark:border-slate-700 dark:bg-slate-900/30 sm:flex-row sm:text-left">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <Terminal size={20} />
          </div>

          <p className="text-md leading-6 text-slate-600 dark:text-slate-400">
            Technology keeps evolving, and so do I. I believe in continuous
            learning, experimentation, and improving my technical skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
