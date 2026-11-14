import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FileText,
  Globe,
  Lightbulb,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

import { projects } from "@/data/portfolio";
import { getGithubReadme } from "@/lib/github";

type ProjectDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ContentSectionProps = {
  title: string;
  content: string;
  icon?: React.ReactNode;
};

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
      {children}
    </h2>
  ),

  h2: ({ children }) => (
    <h3 className="mb-3 mt-7 text-xl font-semibold text-gray-900 dark:text-white">
      {children}
    </h3>
  ),

  h3: ({ children }) => (
    <h4 className="mb-2 mt-5 text-lg font-semibold text-gray-900 dark:text-white">
      {children}
    </h4>
  ),

  p: ({ children }) => (
    <p className="mb-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
      {children}
    </p>
  ),

  ul: ({ children }) => (
    <ul className="mb-5 ml-5 list-disc space-y-2 text-sm leading-7 text-gray-600 marker:text-blue-500 dark:text-gray-300 sm:text-base">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="mb-5 ml-5 list-decimal space-y-2 text-sm leading-7 text-gray-600 marker:text-blue-500 dark:text-gray-300 sm:text-base">
      {children}
    </ol>
  ),

  li: ({ children }) => <li className="pl-1">{children}</li>,

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
      {children}
    </a>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-5 border-l-4 border-blue-500 bg-blue-50 py-3 pl-4 pr-3 dark:bg-blue-950/30">
      {children}
    </blockquote>
  ),

  code: ({ children, className }) => (
    <code
      className={
        className
          ? "font-mono text-sm text-gray-800 dark:text-gray-200"
          : "rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-blue-700 dark:bg-gray-800 dark:text-blue-300"
      }>
      {children}
    </code>
  ),

  pre: ({ children }) => (
    <pre className="my-5 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-950">
      {children}
    </pre>
  ),

  table: ({ children }) => (
    <div className="my-5 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => (
    <thead className="bg-gray-100 dark:bg-gray-800">{children}</thead>
  ),

  th: ({ children }) => (
    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900 dark:border-gray-700 dark:text-white">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="border-b border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-800 dark:text-gray-300">
      {children}
    </td>
  ),

  hr: () => <hr className="my-6 border-gray-200 dark:border-gray-700" />,

  img: ({ src, alt }) => (
    <Image
      src={typeof src === "string" ? src : ""}
      alt={alt || "Project documentation image"}
      width={1200}
      height={800}
      unoptimized
      className="my-5 h-auto max-w-full rounded-xl border border-gray-200 dark:border-gray-700"
    />
  ),
};

function MarkdownContent({ content }: { content: string }) {
  if (!content.trim()) return null;

  return (
    <div className="min-w-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

function ContentSection({ title, content, icon }: ContentSectionProps) {
  if (!content.trim()) return null;

  return (
    <section className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        {icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 dark:bg-blue-950/50 dark:text-blue-400 dark:group-hover:bg-blue-950">
            {icon}
          </div>
        )}

        <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
          {title}
        </h2>
      </div>

      <MarkdownContent content={content} />
    </section>
  );
}

function normalizeHeading(heading: string): string {
  return heading
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/**
 * Find the technology stack section from the GitHub README.
 */
function getTechnologySection(sections: { title: string; content: string }[]) {
  const technologyHeadings = [
    "technology",
    "technologies",
    "technology stack",
    "tech stack",
    "technologies used",
    "tools and technologies",
    "built with",
  ];

  return sections.find((section) =>
    technologyHeadings.includes(normalizeHeading(section.title)),
  );
}

function getListContent(items?: string[]): string {
  if (!items?.length) return "";

  return items
    .filter((item) => item.trim().length > 0)
    .map((item) => `- ${item}`)
    .join("\n");
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const readme = await getGithubReadme(project.githubLink);

  const overview = readme?.introduction?.trim() ?? "";

  const technologySection = getTechnologySection(readme?.sections ?? []);

  const challengesContent = getListContent(project.challenges);

  const improvementsContent = getListContent(project.futureImprovements);

  const hasFeatures = Boolean(readme?.features?.trim());

  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-24 text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link
          href="/#projects"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:gap-3 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
          <ArrowLeft
            size={17}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-10">
          <div className="mb-4">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
              {project.category}
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            {/* Project Title */}
            <h1 className="mb-0 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            {/* Project Links */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20">
                <Globe size={17} />
                Live Demo
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-blue-950/30 dark:hover:text-blue-400">
                <FaGithub size={18} />
                GitHub Repository
                <ExternalLink
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </header>

        {/* Live Project Preview */}
        <section className="mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-blue-600 dark:text-blue-400" />

              <h2 className="font-semibold text-gray-900 dark:text-white">
                Live Project Preview
              </h2>
            </div>

            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              Open Website
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="relative h-[400px] bg-gray-100 dark:bg-gray-950 sm:h-[480px]">
            <iframe
              src={project.liveLink}
              title={`${project.title} live preview`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Project Documentation */}
        <div className="space-y-7">
          <ContentSection
            title="Project Description"
            content={overview}
            icon={<FileText size={21} />}
          />

          {hasFeatures && (
            <section className="space-y-3">
              <ContentSection
                title="Project Features"
                content={readme!.features}
                icon={<Sparkles size={21} />}
              />

              {/* Explore All Features on GitHub */}
              <div className="flex justify-end">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:gap-3 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-300">
                  <FaGithub
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />

                  <span>Explore All Features on GitHub</span>

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </section>
          )}

          {technologySection?.content && (
            <ContentSection
              title="Main Technology Stack"
              content={technologySection.content}
              icon={<Wrench size={21} />}
            />
          )}

          <ContentSection
            title="Challenges Faced During Development"
            content={challengesContent}
            icon={<Lightbulb size={21} />}
          />

          <ContentSection
            title="Potential Improvements and Future Plans"
            content={improvementsContent}
            icon={<Rocket size={21} />}
          />
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 border-t border-gray-200 pt-7 dark:border-gray-800">
          <Link
            href="/#projects"
            className="group ml-auto flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-4 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-300">
            <span className="relative">
              Explore More Projects
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full dark:bg-blue-400" />
            </span>

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
