"use client";

import { aboutMe, personalInfo } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Download,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "AI Engineer",
  "Machine Learning Researcher",
  "Software Developer",
];

const socialLinks = [
  {
    name: "GitHub",
    href: personalInfo.socialLinks.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: personalInfo.socialLinks.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Facebook",
    href: personalInfo.socialLinks.facebook,
    icon: FaFacebook,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((previous) => (previous + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#f8faff] px-4 pb-20 pt-28 transition-colors duration-500 dark:bg-[#080d19] sm:px-6 sm:pt-32 lg:px-8 lg:pb-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-[130px] dark:bg-blue-500/10" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-400/10 blur-[140px] dark:bg-indigo-500/10" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.025] dark:opacity-[0.035]" />
      </div>

      {/* Main Container */}
      <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 xl:gap-20">
        {/* LEFT: INTRODUCTION */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
          {/* Intro Badge */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-md dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              ECE Graduate · AI & Technology Enthusiast
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Hello, welcome to my portfolio
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.13] tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl xl:text-[4.4rem]">
              I&apos;m
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text pb-2 text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                Bholanath Bala.
              </span>
            </h1>
          </motion.div>

          {/* Animated Designation */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-6 flex min-h-12 items-center justify-center lg:justify-start">
            <div className="flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-gradient-to-b from-blue-500 to-violet-500" />

              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[currentRole]}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.35 }}
                  className="text-lg font-semibold text-slate-700 dark:text-slate-200 sm:text-xl xl:text-2xl">
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-600 dark:text-slate-400 sm:text-base lg:mx-0">
            {aboutMe.description} I enjoy exploring intelligent learning
            approaches and building practical software solutions to real-world
            problems.
          </motion.p>

          {/* Research Interests */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-8">
            <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
              <BrainCircuit
                size={16}
                className="text-blue-600 dark:text-blue-400"
              />

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Research & Technical Interests
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {aboutMe.interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.07,
                    duration: 0.4,
                  }}
                  className="rounded-lg border border-slate-200/80 bg-white/80 px-3 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-300 sm:text-sm">
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href={personalInfo.resume}
              download
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <Download
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
              Download CV
            </Link>

            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-blue-500/50 dark:hover:text-blue-400">
              Explore Projects
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="mr-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              Connect with me
            </span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
                  <Icon size={18} />
                </Link>
              );
            })}

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send me an email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: PROFILE VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="order-1 flex min-w-0 justify-center lg:order-2">
          {/* Profile Image Wrapper */}
          <div className="group relative mx-auto w-full max-w-[330px] px-3 sm:max-w-[390px] sm:px-0 lg:max-w-[420px]">
            {/* Outer Glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-violet-500/20 opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* Decorative Frame */}
            <div className="pointer-events-none absolute -inset-[5px] rounded-[2.15rem] border border-blue-400/40 transition-all duration-700 group-hover:-inset-2 group-hover:border-indigo-400/60" />

            {/* Profile Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[5px] border-white bg-slate-200 shadow-2xl shadow-blue-950/15 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40">
              <Image
                src={personalInfo.profileImage}
                alt="Bholanath Bala"
                fill
                priority
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 390px, 420px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />

              {/* Image Caption */}
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={{
                  rest: { y: 0 },
                  hover: { y: -5 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-x-0 bottom-4 z-10 p-5 text-white sm:bottom-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200 transition-colors duration-300 group-hover:text-blue-100 sm:text-xs">
                  Welcome to my portfolio
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight transition-all duration-300 group-hover:text-blue-100 sm:text-3xl">
                  Bholanath Bala
                </h2>

                <p className="mt-1 text-xs mb-3 text-slate-200 transition-colors duration-300 group-hover:text-white sm:text-sm">
                  AI · Research · Software
                </p>
                <motion.div
                  variants={{
                    rest: { width: 40 },
                    hover: { width: 85 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mb-3 h-1 rounded-full bg-blue-400"
                />
              </motion.div>
            </div>

            {/* Floating CV Download Card */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-1 bottom-1 z-20 sm:-right-3 sm:bottom-3">
              <Link
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Bholanath_Bala_Resume.pdf"
                className="group flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 p-2 pr-3 shadow-xl shadow-blue-950/15 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/20 sm:gap-2.5 sm:rounded-2xl sm:p-2.5 sm:pr-4 dark:border-slate-700 dark:bg-slate-900/95">
                {/* Download Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-600/25 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-xl">
                  <Download size={15} className="sm:hidden" />
                  <Download size={18} className="hidden sm:block" />
                </div>

                {/* CV Information */}
                <div className="flex min-w-0 flex-col">
                  <span className="whitespace-nowrap text-[11px] font-bold text-slate-800 sm:text-sm dark:text-white">
                    Download CV
                  </span>

                  <span className="mt-0.5 text-[8px] font-medium tracking-wide text-slate-500 sm:text-[10px] dark:text-slate-400">
                    PDF DOCUMENT
                  </span>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={14}
                  className="ml-0.5 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500 sm:ml-1 sm:h-4 sm:w-4"
                />
              </Link>
            </motion.div>

            {/* Decorative Dot */}
            <div className="absolute -left-1 top-1/3 h-3 w-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40 sm:-left-7 sm:h-4 sm:w-4" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="/#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 xl:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll to explore
        </span>

        <ArrowDown size={18} className="animate-bounce" />
      </Link>
    </section>
  );
}
