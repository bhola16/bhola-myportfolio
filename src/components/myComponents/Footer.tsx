
"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import { personalInfo } from "@/data/portfolio";

const footerLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Publications", href: "/#publications" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const whatsappNumber = personalInfo.phone.replace(/\D/g, "");

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
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200  py-8 dark:border-slate-800 dark:bg-[#080e1a] sm:py-10">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-8 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Personal Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile */}
            <Link
              href="/#home"
              className="group inline-flex items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-slate-950"
              aria-label={`${personalInfo.name} - Home`}
            >
              <span className="relative shrink-0">
                <Image
                  src="/profile/bholanath_bala.jpg"
                  alt="Bholanath Bala"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/20 transition-all duration-500 group-hover:scale-105 group-hover:ring-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                />

                <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-50 bg-emerald-500 dark:border-[#080e1a]" />
              </span>

              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
                <span className="text-blue-600 dark:text-blue-400">.</span>
              </span>
            </Link>

            {/* Description */}
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              Exploring Artificial Intelligence, Machine Learning, and Software
              Development through research, creativity, and continuous learning.
            </p>

            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Gopalganj%2C+Dhaka%2C+Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
              />

              <span>{personalInfo.location}</span>

              <ArrowUpRight size={14} className="mt-0.5 shrink-0" />
            </a>

            {/* Social Links */}
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isEmail = social.name === "Email";

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={social.name}
                    title={social.name}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                  >
                    <Icon size={19} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-blue-500 dark:bg-slate-700" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
              Get in Touch
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Interested in research collaboration, technical discussions, or
              professional opportunities? Let&apos;s connect.
            </p>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-indigo-600 dark:text-blue-400 dark:hover:text-indigo-400"
            >
              <Mail size={17} />
              Contact Me
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello Bholanath! I visited your portfolio and would like to connect."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex w-fit items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:border-emerald-500/40"
            >
              <MessageCircle size={19} />

              <span>Chat on WhatsApp</span>

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Copyright and Back to Top */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>

          <Link
            href="/#home"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
          >
            Back to Top
            <ArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
