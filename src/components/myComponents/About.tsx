"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  GraduationCap,
  Lightbulb,
  Microscope,
  Sparkles,
} from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Engineering Foundation",
    description:
      "Studied Electronics and Communication Engineering at Khulna University, developing a foundation in mathematics, electronics, signal processing, and analytical problem-solving.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Discovering Programming",
    description:
      "Gradually developed an interest in programming, computational thinking, and building practical applications through software development.",
    icon: Code2,
  },
  {
    number: "03",
    title: "AI & Research",
    description:
      "Expanded my interests into machine learning, deep learning, computer vision, and transformer-based approaches to intelligent systems.",
    icon: BrainCircuit,
  },
];

const interests = [
  {
    title: "AI & Research",
    description:
      "Exploring deep learning architectures, computer vision, and data-driven intelligent systems.",
    icon: Microscope,
    number: "01",
  },
  {
    title: "Software Development",
    description:
      "Building useful applications and creating responsive, practical digital experiences.",
    icon: Code2,
    number: "02",
  },
  {
    title: "Problem Solving",
    description:
      "Understanding complex challenges and turning ideas into thoughtful technical solutions.",
    icon: Lightbulb,
    number: "03",
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

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-slate-50 pb-10 px-4 py-8 transition-colors duration-500 dark:bg-[#0b1220] sm:px-6 lg:px-8">
      {/* Animated background accents */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-400/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-12">
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <motion.span
              animate={{ width: [20, 32, 20] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-px bg-blue-500"
            />
            A little about me
            <Sparkles size={14} className="animate-pulse" />
          </motion.span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <motion.h2
              variants={itemVariants}
              className="max-w-xl text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              More than code.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-blue-400">
                A curious mind.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-md text-base leading-6 text-slate-600 dark:text-slate-400">
              An engineering graduate driven by curiosity, continuous learning,
              and the desire to build meaningful technology.
            </motion.p>
          </div>
        </motion.div>

        {/* Main introduction */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          {/* My story */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-500 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40 dark:hover:shadow-blue-500/5 sm:p-8">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/5 blur-2xl transition-all duration-500 group-hover:bg-blue-500/15" />

            <div className="relative">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <Sparkles size={17} />
                </motion.div>
                My Story
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-900 dark:text-white sm:text-3xl">
                Hello! I&apos;m an engineer exploring the intersection of
                <span className="text-blue-600 transition-colors duration-300 group-hover:text-violet-600 dark:text-blue-400 dark:group-hover:text-violet-400">
                  {" "}
                  intelligence and technology.
                </span>
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                <p>
                  I graduated in Electronics and Communication Engineering from
                  Khulna University, Bangladesh. My academic journey helped me
                  develop a strong interest in mathematics, engineering
                  principles, signal processing, and analytical thinking.
                </p>

                <p>
                  Along the way, programming became more than just a technical
                  skill. It became a way to explore ideas, solve problems, and
                  turn concepts into working solutions. This curiosity gradually
                  led me toward Artificial Intelligence, Machine Learning, and
                  Software Development.
                </p>

                <p>
                  I particularly enjoy experimenting with deep learning models,
                  exploring research problems, analyzing data, and developing
                  applications. I find it rewarding to connect theoretical
                  understanding with practical implementation.
                </p>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-7 h-1 origin-left rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-transparent"
              />
            </div>
          </motion.div>

          {/* Personal highlights */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-6 transition-all duration-500 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-900/5 dark:border-blue-500/20 dark:from-blue-500/10 dark:via-slate-900/70 dark:to-violet-500/10 dark:hover:border-violet-500/30 sm:p-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-blue-400/15"
            />

            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
                What drives me
              </span>

              <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-900 dark:text-white">
                Curiosity is where every great idea begins.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                I enjoy learning how things work, asking questions, exploring
                different approaches, and continuously improving through
                experimentation.
              </p>

              <motion.div
                animate={{ y: [0, -7, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/20">
                <Lightbulb size={30} />
              </motion.div>
            </div>

            <div className="relative mt-8 border-t border-blue-200/70 pt-5 dark:border-blue-400/20">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                My approach
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {["Curious", "Analytical", "Creative", "Adaptable"].map(
                  (trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.06 }}
                      className="cursor-default rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-blue-700 transition-colors hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 dark:border-blue-400/20 dark:bg-slate-900/70 dark:text-blue-300 dark:hover:border-violet-400/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-300">
                      {trait}
                    </motion.span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Learning journey */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              The path so far
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              My Learning Journey
            </h3>
          </motion.div>

          <div className="relative grid gap-4 md:grid-cols-3">
            {/* Timeline connector */}
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-gradient-to-r from-blue-300 via-violet-400 to-blue-300 md:block dark:from-blue-500/30 dark:via-violet-500/50 dark:to-blue-500/30" />

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-4 ring-white transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:ring-slate-900 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                      <Icon size={21} />
                    </motion.div>

                    <span className="text-3xl font-black text-slate-100 transition-colors duration-300 group-hover:text-blue-100 dark:text-slate-800 dark:group-hover:text-blue-500/20">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                    className="mt-5 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-60"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* What I enjoy */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Areas I enjoy
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              What Excites Me
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-3">
            {interests.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={itemVariants}
                  whileHover={{ y: -7, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20" />

                  <div className="relative flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                      <Icon size={22} />
                    </motion.div>

                    <span className="text-sm font-bold text-slate-300 dark:text-slate-700">
                      {item.number}
                    </span>
                  </div>

                  <div className="relative">
                    <h4 className="mt-5 font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:text-blue-400">
                    Explore my interests
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-7 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-6 text-slate-600 dark:text-slate-400">
            I&apos;m always open to new ideas, meaningful collaborations, and
            opportunities to learn, research, and create something impactful.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex shrink-0 items-center gap-2 text-base font-bold text-blue-600 transition-colors hover:text-violet-600 dark:text-blue-400 dark:hover:text-violet-400">
            Let&apos;s connect
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
