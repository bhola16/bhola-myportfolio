"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useState,
  useSyncExternalStore,
  type MouseEvent,
} from "react";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Education", href: "/#education", id: "education" },
  { name: "Publications", href: "/#publications", id: "publications" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

const NAVBAR_OFFSET = 120;

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { theme, setTheme } = useTheme();

  // Avoid theme hydration mismatch without setting state in an effect.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Smooth navigation to page sections.
  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    setIsOpen(false);
    setActiveSection(sectionId);

    // Allow normal Next.js navigation from other pages.
    if (pathname !== "/") return;

    const section = document.getElementById(sectionId);

    if (!section) return;

    event.preventDefault();

    // Update the URL without reloading the page.
    window.history.pushState(null, "", `/#${sectionId}`);

    // Calculate the scroll position, accounting for the fixed navbar.
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: Math.max(0, sectionPosition),
      behavior: "smooth",
    });
  };

  // Detect the active section while scrolling.
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + NAVBAR_OFFSET;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (
          section &&
          section.getBoundingClientRect().top + window.scrollY <= scrollPosition
        ) {
          currentSection = link.id;
        }
      });

      // Mark Contact active when reaching the bottom of the page.
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (isAtBottom) {
        currentSection = "contact";
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection,
      );
    };

    const animationFrame = requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when pressing Escape.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-6 sm:pt-2">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-2xl border border-slate-200/70 bg-white/85 px-3 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-800/70 dark:bg-slate-950/85 dark:shadow-black/10 dark:hover:shadow-blue-500/5 sm:px-5 lg:px-6"
        aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/#home"
          onClick={(event) => handleNavigation(event, "home")}
          className="group flex shrink-0 items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-slate-950"
          aria-label="Bholanath Bala - Home">
          <span className="relative">
            <Image
              src="/profile/bholanath_bala.jpg"
              alt="Bholanath Bala"
              width={42}
              height={42}
              priority
              className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500/20 transition-all duration-500 group-hover:scale-105 group-hover:rounded-full group-hover:ring-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/25"
            />

            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-950" />
          </span>

          <span className="hidden whitespace-nowrap text-base font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:block">
            Bholanath Bala
            <span className="ml-1 text-blue-600 dark:text-blue-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.id)}
              aria-current={activeSection === link.id ? "location" : undefined}
              className={`group relative whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium outline-none transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-blue-500 2xl:px-3 ${
                activeSection === link.id
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              }`}>
              {link.name}

              <span
                className={`absolute bottom-1 left-3 right-3 h-0.5 origin-left rounded-full bg-blue-600 transition-transform duration-300 dark:bg-blue-400 ${
                  activeSection === link.id
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            disabled={!mounted}
            aria-label={
              !mounted
                ? "Change theme"
                : theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
            }
            className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 outline-none transition-all duration-300 hover:rotate-6 hover:scale-110 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/10 focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-500/10 dark:hover:text-blue-400">
            {!mounted ? (
              <span className="h-5 w-5" />
            ) : theme === "dark" ? (
              <Sun
                size={19}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            ) : (
              <Moon
                size={19}
                className="transition-transform duration-500 group-hover:rotate-20"
              />
            )}
          </button>

          {/* Desktop CTA */}
          <Link
            href="/#contact"
            onClick={(event) => handleNavigation(event, "contact")}
            className="group hidden items-center gap-2 whitespace-nowrap rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 outline-none transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 xl:flex">
            <span>Let&apos;s Talk</span>

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* Mobile / Tablet Menu Button */}
          <Button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 outline-none transition-all duration-300 hover:rotate-3 hover:scale-105 hover:border-blue-300 hover:bg-blue-100 hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500/50 dark:hover:bg-blue-500/20 dark:hover:text-blue-400 xl:hidden">
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </Button>
        </div>
      </nav>

      {/* Mobile / Tablet Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`absolute inset-x-3 top-[calc(100%+0.5rem)] mx-auto max-h-[calc(100dvh-6rem)] max-w-7xl overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 transition-all duration-300 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20 sm:inset-x-6 xl:hidden ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-3 scale-[0.98] opacity-0"
        }`}>
        <div className="flex flex-col gap-1 p-3 sm:p-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.id)}
              tabIndex={isOpen ? 0 : -1}
              aria-current={activeSection === link.id ? "location" : undefined}
              style={{
                transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
              }}
              className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all duration-300 hover:translate-x-1 focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeSection === link.id
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                  : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              } ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
              }`}>
              <span>{link.name}</span>

              <span
                className={`flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                    : "text-slate-400 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 dark:text-slate-500"
                }`}>
                <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="mt-2 border-t border-slate-200 pt-3 dark:border-slate-800">
            <Link
              href="/#contact"
              onClick={(event) => handleNavigation(event, "contact")}
              tabIndex={isOpen ? 0 : -1}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              Let&apos;s Talk
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
