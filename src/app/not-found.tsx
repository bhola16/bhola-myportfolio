"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Home,
  Search,
  Sparkles,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-16 dark:bg-[#0b1220] sm:px-8">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[110px]" />

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative mx-auto w-full max-w-2xl text-center">
        {/* Decorative Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-200 bg-blue-50 text-blue-600 shadow-xl shadow-blue-500/10 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
          <Compass size={38} strokeWidth={1.5} />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-indigo-600 text-white shadow-lg dark:border-slate-900">
            <Sparkles size={15} />
          </motion.div>
        </motion.div>

        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Error 404
          </p>

          <h1 className="text-7xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-8xl md:text-9xl">
            4
            <span className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              0
            </span>
            4
          </h1>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Oops! Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            The page you&apos;re looking for might have been moved, deleted, or
            never existed. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 sm:w-auto">
            <Home size={17} />
            Back to Homepage
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400 sm:w-auto">
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Go Back
          </button>
        </motion.div>

        {/* Helpful Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Search size={14} />
            Looking for something specific?
          </p>

          <Link
            href="/#projects"
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-indigo-600 dark:text-blue-400 dark:hover:text-indigo-400">
            Explore My Projects
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-xs text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} Bholanath Bala. All rights reserved.
        </motion.p>
      </div>
    </main>
  );
}
