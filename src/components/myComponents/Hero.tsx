"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { aboutMe, personalInfo } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

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

export default function Hero() {
  const [visibleRoles, setVisibleRoles] = useState(0);

  // Sequential designation animation.
  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex += 1;

      if (currentIndex > roles.length) {
        currentIndex = 0;
      }

      setVisibleRoles(currentIndex);
    }, 850);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-slate-50 px-4 pb-10 pt-32 transition-colors duration-500 dark:bg-[#080d19] sm:px-6 lg:px-8">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-500/10" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-400/10 blur-[130px] dark:bg-indigo-500/10" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.025] dark:opacity-[0.035]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-20">
        {/* LEFT: INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left">
          {/* Intro Badge */}
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700 shadow-sm backdrop-blur-sm dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            <Sparkles size={14} />
            <span>ECE Graduate · AI & Technology Enthusiast</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl xl:text-[4.25rem]">
            Hello, I&apos;m
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text pb-2 text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              Bholanath Bala.
            </span>
          </h1>

          {/* Animated Designations */}
          <div className="mt-6 min-h-[4rem]">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-lg font-semibold text-slate-700 dark:text-slate-200 sm:text-xl lg:justify-start xl:text-2xl">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={false}
                  animate={{
                    opacity: index < visibleRoles ? 1 : 0,
                    y: index < visibleRoles ? 0 : 12,
                    filter: index < visibleRoles ? "blur(0px)" : "blur(5px)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="inline-flex items-center gap-x-2">
                  {index !== 0 && <span className="text-blue-500">|</span>}

                  {role}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-600 dark:text-slate-400 sm:text-base lg:mx-0">
            {aboutMe.description} I enjoy exploring intelligent learning
            approaches and building practical software solutions to real-world
            problems.
          </p>

          {/* Research Interests */}
          <div className="mt-8">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Research & Technical Interests
            </p>

            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {aboutMe.interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.08,
                    duration: 0.4,
                  }}
                  className="rounded-lg border border-slate-200/80 bg-white/80 px-3 py-2 text-xs font-medium text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400 sm:text-sm">
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href={personalInfo.resume}
              download
              className="group inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <Download
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
              Download CV
            </a>

            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-blue-500/50 dark:hover:text-blue-400">
              Explore Projects
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="mr-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              Connect with me
            </span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
                  <Icon size={18} />
                </a>
              );
            })}

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send me an email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT: PROFILE VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2">
          <div className="group relative w-full max-w-[330px] sm:max-w-[390px] lg:max-w-[420px]">
            {/* Outer Glow */}
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-violet-500/20 opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* Decorative Border */}
            <div className="absolute -inset-3 rounded-[2.3rem] border border-blue-400/30 transition-transform duration-700 group-hover:rotate-2" />

            {/* Profile Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[5px] border-white bg-slate-200 shadow-2xl shadow-blue-950/15 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40">
              <Image
                src={personalInfo.profileImage}
                alt="Portrait of Bholanath Bala"
                fill
                priority
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 390px, 420px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
                  Welcome to my portfolio
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Bholanath Bala
                </h2>

                <p className="mt-1 text-sm text-slate-200">
                  AI · Research · Software
                </p>
              </div>
            </div>

            {/* Floating Research Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-7 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/30 sm:-left-12 sm:p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <ArrowDownRight size={23} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Research & Development
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  AI · ML · Intelligent Systems
                </p>
              </div>
            </motion.div>

            {/* Floating AI Element */}
            <motion.div
              animate={{ y: [0, 9, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-white/95 text-xl font-extrabold text-blue-600 shadow-xl shadow-blue-900/10 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95 dark:text-blue-400 sm:-right-7">
              AI
            </motion.div>

            {/* Decorative Dot */}
            <div className="absolute -left-8 top-1/3 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="/#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 md:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll to explore
        </span>

        <ArrowDown size={18} className="animate-bounce" />
      </Link>
    </section>
  );
}
