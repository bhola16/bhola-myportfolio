"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  FileText,
  Handshake,
  Mail,
  Microscope,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

import { publications } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative isolate overflow-hidden bg-slate-50 px-5 py-2 pb-10 dark:bg-[#0b1220] sm:px-8 lg:px-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16 text-center">
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Microscope size={17} />
            Research & Publications
            <Sparkles size={15} />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Research Contributions
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Exploring practical applications of artificial intelligence and deep
            learning through research and academic publications.
          </motion.p>
        </motion.div>

        {/* Publication cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-8 lg:grid-cols-2">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.doi}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-blue-500/40">
              {/* Top accent */}
              <div
                className={`absolute left-0 top-0 z-10 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                  index === 0
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                    : "bg-gradient-to-r from-purple-500 to-pink-400"
                }`}
              />

              {/* Research image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-800 sm:h-64">
                <Image
                  src={publication.image}
                  alt={publication.category}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                {/* Category label */}
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:text-sm">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index === 0 ? "bg-cyan-400" : "bg-purple-400"
                      }`}
                    />
                    {publication.category}
                  </span>
                </div>

                {/* Publication icon */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-slate-950/50 text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <FileText size={21} />
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {/* Venue and year */}
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                    <BookOpen size={15} />
                    {publication.venue}
                  </span>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <CalendarDays size={15} />
                    {publication.year}
                  </span>

                  <span className="ml-auto rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                    Published
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold leading-8 text-slate-900 transition-colors duration-300 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-400 sm:text-2xl">
                  {publication.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                  {publication.description}
                </p>

                {/* DOI */}
                <div className="mb-6 mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Digital Object Identifier (DOI)
                  </p>

                  <p className="break-all text-sm font-medium text-slate-700 dark:text-slate-300">
                    {publication.doi}
                  </p>
                </div>

                {/* View publication */}
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/link inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    index === 0
                      ? "bg-blue-600 shadow-blue-500/20 hover:bg-blue-700"
                      : "bg-purple-600 shadow-purple-500/20 hover:bg-purple-700"
                  }`}>
                  View Publication
                  <ExternalLink
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </a>
              </div>

              {/* Decorative icon */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 text-blue-500/[0.04] transition-transform duration-500 group-hover:scale-125">
                <Sparkles size={150} />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Research Collaboration Invitation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 text-center dark:border-blue-500/20 dark:from-blue-500/10 dark:via-slate-900 dark:to-indigo-500/10 sm:p-12">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.1 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 shadow-sm dark:bg-blue-500/15 dark:text-blue-400">
              <Handshake size={32} />
            </motion.div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Interested in Research Collaboration?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-600 dark:text-slate-400 sm:text-base">
              I am always open to connecting with researchers, academics, and
              fellow enthusiasts who share an interest in Artificial
              Intelligence, Deep Learning, Computer Vision, and related fields.
              If you have an interesting research idea or are looking for a
              research collaborator, I would be glad to connect and explore
              opportunities to contribute together.
            </p>

            <motion.a
              href={`mailto:${"ku.bhola16@example.com"}?subject=${encodeURIComponent(
                "Research Collaboration Opportunity",
              )}`}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-700">
              <Mail size={18} />
              Let&apos;s Collaborate
              <ArrowUpRight size={17} />
            </motion.a>

            <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
              Open to meaningful research discussions and collaboration
              opportunities.
            </p>
          </div>
        </motion.div>

        {/* Bottom research statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-purple-50 p-6 dark:border-slate-800 dark:from-blue-500/5 dark:via-slate-900 dark:to-purple-500/5 sm:p-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
              <Microscope size={27} />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Driven by Research and Innovation
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Advancing knowledge through research in deep learning, computer
                vision, signal processing, and intelligent systems.
              </p>
            </div>

            <div className="hidden text-blue-500 transition-transform duration-300 hover:translate-x-2 sm:block">
              <ArrowUpRight size={28} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
