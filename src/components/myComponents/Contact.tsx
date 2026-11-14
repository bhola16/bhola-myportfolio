"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { personalInfo } from "@/data/portfolio";

const contactMethods = [
  {
    title: "Email Address",
    value: personalInfo.email,
    description: "Send me an email for research or professional inquiries.",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: "blue",
  },
  {
    title: "Phone Number",
    value: personalInfo.phone,
    description: "Feel free to reach out for a direct conversation.",
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
    color: "emerald",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidde bg-white px-5 py-4 pb-10 dark:bg-[#0b1220] sm:px-8 lg:px-12">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Sparkles size={16} />
            Get in Touch
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Start a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Have a research idea, collaboration opportunity, or just want to
            connect? I&apos;d be happy to hear from you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={method.title}
                variants={itemVariants}
                href={method.href}
                whileHover={{ y: -7 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-colors duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-500/40 dark:hover:bg-slate-900 sm:p-9">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-500/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-500/10 dark:text-blue-400">
                    <Icon size={26} />
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  />
                </div>

                <div className="relative mt-7">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {method.title}
                  </h3>

                  <p className="mt-3 break-all text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {method.value}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {method.description}
                  </p>
                </div>

                <div className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-400">
                  {method.title === "Email Address"
                    ? "Send an Email"
                    : "Call Me"}
                  <ArrowUpRight size={16} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Location and closing message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-center dark:border-slate-800 dark:bg-slate-900/50 sm:flex-row sm:text-left sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <MapPin size={23} />
            </div>

            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Current Location
              </p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                {personalInfo.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Send size={16} className="text-blue-500" />
            Open to meaningful connections and opportunities.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
