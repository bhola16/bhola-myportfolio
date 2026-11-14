"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { personalInfo } from "@/data/portfolio";

const contactMethods = [
  {
    title: "Email Address",
    value: personalInfo.email,
    description: "For research, collaboration, and professional inquiries.",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: "blue",
  },
  {
    title: "Phone Number",
    value: personalInfo.phone,
    description: "For direct conversations and professional discussions.",
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
    color: "emerald",
  },
];

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    const subject = encodeURIComponent("Message from Portfolio Website");
    const body = encodeURIComponent(trimmedMessage);

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white px-5 py-6 dark:bg-[#0b1220] sm:px-8 sm:py-9 lg:px-12 lg:py-12">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-indigo-400/10 blur-[100px]" />

      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 max-w-2xl text-center sm:mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Sparkles size={14} />
            Get in Touch
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Start a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            Have a research idea, collaboration opportunity, or just want to
            connect? I&apos;d be happy to hear from you.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const isBlue = method.color === "blue";

            return (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40 dark:hover:bg-slate-900 sm:p-5">
                {/* Decorative Glow */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${
                    isBlue ? "bg-blue-500/10" : "bg-emerald-500/10"
                  }`}
                />

                <div
                  className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                    isBlue
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                      : "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                  }`}>
                  <Icon size={21} />
                </div>

                <div className="relative min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {method.title}
                  </p>

                  <p className="mt-1 break-all text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-base">
                    {method.value}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {method.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="relative shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
                />
              </motion.a>
            );
          })}
        </div>

        {/* Quick Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/50 sm:mt-6 sm:p-6 lg:p-7">
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-indigo-500/5 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            {/* Message Header */}
            <div className="mb-5 text-center">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <MessageSquare size={21} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                Drop Me a Message
              </h3>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400">
                Have something in mind? Write a short message and send it
                directly to my email.
              </p>
            </div>

            {/* Message Form */}
            <form onSubmit={handleMessageSubmit} className="space-y-3">
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Your Message
                  </label>

                  <span
                    className={`text-xs font-semibold tabular-nums ${
                      message.length >= 270
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-slate-500 dark:text-slate-400"
                    }`}>
                    {message.length}/300
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi! I'd like to talk about..."
                  rows={3}
                  maxLength={300}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-blue-500"
                />

                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Maximum 300 characters.
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {300 - message.length} remaining
                  </p>
                </div>
              </div>

              <div className="flex justify-center pt-1">
                <motion.button
                  type="submit"
                  disabled={!message.trim()}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0">
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                  Send Message
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </motion.button>
              </div>
            </form>

            <p className="mt-3 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
              Your message will be prepared in your default email application.
            </p>
          </div>
        </motion.div>

        {/* Location and Availability */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-center dark:border-slate-800 dark:bg-slate-900/50 sm:mt-6 sm:flex-row sm:p-5 sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Current Location
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                {personalInfo.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            Open to meaningful connections and opportunities.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
