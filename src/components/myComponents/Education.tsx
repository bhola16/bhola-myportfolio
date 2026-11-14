"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  Globe,
  Lightbulb,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { education, institutionLinks } from "@/data/portfolio";



const Education = () => {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden  px-4 py-2 pb-10 transition-colors duration-500 dark:bg-[#0b1220] sm:px-6 lg:px-8">
      {/* Background decoration */}
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]"
      />

      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-violet-500/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <span className="h-px w-7 bg-blue-500" />
            Academic Background
            <Sparkles size={14} className="animate-pulse" />
          </span>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Educational{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
                Qualification
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
              My academic foundation in engineering, mathematics, and
              technology.
            </p>
          </div>
        </motion.div>

        {/* Education cards */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent sm:block" />

          <div className="space-y-7">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="group relative sm:pl-16">
                {/* Timeline marker */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="absolute left-[13px] top-8 z-10 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-500 shadow-md shadow-blue-500/30 dark:border-[#0b1220] sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </motion.div>

                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40 dark:hover:shadow-blue-500/5 sm:p-8">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition-all duration-500 group-hover:bg-blue-500/15" />

                  <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    {/* Degree information */}
                    <div className="flex-1">
                      {/* Status badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                          <GraduationCap size={14} />
                          Completed
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                          <Award size={13} />
                          Academic Achievement
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-2xl">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className="mt-3 flex items-center gap-2 text-base font-semibold text-blue-600 dark:text-blue-400">
                        <BookOpen size={17} />
                        {item.institution}
                      </div>

                      {/* Location and duration */}
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <span className="inline-flex items-center gap-2">
                          <MapPin size={15} className="text-blue-500" />
                          {item.location}
                        </span>

                        <span className="inline-flex items-center gap-2">
                          <CalendarDays size={15} className="text-blue-500" />
                          {item.duration}
                        </span>
                      </div>

                      {/* University and ECE logo links */}
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {institutionLinks.map((institution, logoIndex) => (
                          <motion.div
                            key={institution.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.2 + logoIndex * 0.12,
                            }}
                            whileHover={{ y: -4 }}>
                            <Link
                              href={institution.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit ${institution.name} website`}
                              className="group/link flex h-full items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/70 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-blue-500/50 dark:hover:bg-blue-500/5">
                              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900">
                                <Image
                                  src={institution.logo}
                                  alt={`${institution.name} logo`}
                                  fill
                                  sizes="56px"
                                  className="object-contain p-2"
                                />
                              </div>

                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm font-bold text-slate-800 transition-colors group-hover/link:text-blue-600 dark:text-slate-100 dark:group-hover/link:text-blue-400">
                                  {institution.name}
                                </h4>

                                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                  {institution.subtitle}
                                </p>

                                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                  Visit Website
                                  <ExternalLink size={12} />
                                </span>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Academic result */}
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 250 }}
                      className="flex min-w-40 items-center gap-4 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-violet-50 p-5 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-violet-500/10 md:flex-col md:items-center md:justify-center md:text-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm dark:bg-slate-800 dark:text-blue-400">
                        <Award size={23} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Academic Result
                        </p>

                        <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                          {item.result.replace("CGPA: ", "")}
                        </p>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Cumulative GPA
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-7 h-px w-full bg-slate-100 dark:bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-px bg-gradient-to-r from-blue-500 via-violet-500 to-transparent"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex items-center gap-3 rounded-xl border border-dashed border-slate-300 px-5 py-5 dark:border-slate-700">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <Lightbulb size={20} />
          </div>

          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            My academic experience has shaped my analytical thinking and
            motivated me to continue exploring research, innovation, and
            emerging technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
