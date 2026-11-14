export type ReadmeSection = {
  title: string;
  content: string;
};

export type GithubReadme = {
  introduction: string;
  features: string;
  sections: ReadmeSection[];
};

// Number of main features to display.
const limit = 5;

const excludedHeadings = [
  "challenge",
  "challenges",
  "development challenge",
  "development challenges",
  "challenges faced",
  "challenges faced during development",
  "challenges faced while developing the project",
  "development challenges faced",
  "future improvement",
  "future improvements",
  "future plan",
  "future plans",
  "future scope",
  "planned improvements",
  "future enhancement",
  "future enhancements",
  "upcoming features",
];

const featureHeadings = [
  "feature",
  "features",
  "key features",
  "main features",
  "core features",
];

/**
 * Normalize README headings for comparison.
 */
function normalizeHeading(heading: string): string {
  return heading
    .replace(/<[^>]*>/g, "")
    .replace(/[`*_~]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/**
 * Remove fenced code blocks before extracting README sections.
 * This prevents headings inside code examples from being treated
 * as actual README headings.
 */
function removeCodeBlocks(markdown: string): string {
  const lines = markdown.split("\n");
  const result: string[] = [];

  let fenceCharacter: string | null = null;
  let fenceLength = 0;

  for (const line of lines) {
    const trimmedLine = line.trim();
    const openingFence = trimmedLine.match(/^(`{3,}|~{3,})/);

    if (!fenceCharacter && openingFence) {
      fenceCharacter = openingFence[1][0];
      fenceLength = openingFence[1].length;
      continue;
    }

    if (fenceCharacter) {
      const closingPattern =
        fenceCharacter === "`" ? /^`{3,}\s*$/ : /^~{3,}\s*$/;

      if (
        closingPattern.test(trimmedLine) &&
        trimmedLine.length >= fenceLength
      ) {
        fenceCharacter = null;
        fenceLength = 0;
      }

      continue;
    }

    result.push(line);
  }

  return result.join("\n");
}

/**
 * Extract content before the first second-level heading.
 * The main README title is excluded from the introduction.
 */
function extractIntroduction(markdown: string): string {
  const cleanMarkdown = removeCodeBlocks(markdown);

  const firstSectionIndex = cleanMarkdown.search(/^##\s+/m);

  const introduction =
    firstSectionIndex === -1
      ? cleanMarkdown
      : cleanMarkdown.slice(0, firstSectionIndex);

  return introduction.replace(/^#\s+.*$/m, "").trim();
}

/**
 * Extract only the main feature headings.
 * Descriptions and nested sub-features are excluded.
 * The number of headings is controlled by the limit constant.
 */
function limitFeatureItems(content: string, maxItems: number): string {
  const lines = content.split("\n");
  const features: string[] = [];

  for (const line of lines) {
    const headingMatch = line.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);

    if (!headingMatch) continue;

    const heading = headingMatch[1]
      .replace(/^\d+[.)]\s*/, "")
      .replace(/^[.\s]+/, "")
      .trim();

    if (heading) {
      features.push(`- ${heading}`);
    }

    if (features.length >= maxItems) {
      break;
    }
  }

  return features.join("\n");
}

/**
 * Extract every second-level README section.
 * Challenge and future-improvement sections are excluded
 * because those details are maintained in portfolio.ts.
 */
function extractSections(markdown: string): ReadmeSection[] {
  const cleanMarkdown = removeCodeBlocks(markdown);
  const lines = cleanMarkdown.split("\n");

  const sections: ReadmeSection[] = [];

  let currentTitle: string | null = null;
  let currentContent: string[] = [];

  function saveCurrentSection() {
    if (!currentTitle) return;

    const normalizedTitle = normalizeHeading(currentTitle);

    if (
      excludedHeadings.some(
        (heading) => normalizeHeading(heading) === normalizedTitle,
      )
    ) {
      return;
    }

    let content = currentContent.join("\n").trim();

    if (!content) return;

    if (featureHeadings.includes(normalizedTitle)) {
      content = limitFeatureItems(content, limit);
    }

    if (!content) return;

    sections.push({
      title: currentTitle,
      content,
    });
  }

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+(.+?)\s*#*\s*$/);

    if (headingMatch) {
      saveCurrentSection();

      currentTitle = headingMatch[1].trim();
      currentContent = [];

      continue;
    }

    if (currentTitle) {
      currentContent.push(line);
    }
  }

  saveCurrentSection();

  return sections;
}

/**
 * Extract the Features section from the parsed README sections.
 */
function extractFeatures(sections: ReadmeSection[]): string {
  const featureSection = sections.find((section) =>
    featureHeadings.includes(normalizeHeading(section.title)),
  );

  return featureSection?.content ?? "";
}

/**
 * Fetch and parse a repository's README from GitHub.
 */
export async function getGithubReadme(
  repositoryUrl: string,
): Promise<GithubReadme | null> {
  try {
    const url = new URL(repositoryUrl);

    if (url.hostname !== "github.com" && url.hostname !== "www.github.com") {
      return null;
    }

    const [owner, repository] = url.pathname.split("/").filter(Boolean);

    if (!owner || !repository) {
      return null;
    }

    const cleanRepository = repository.replace(/\.git$/, "");

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${cleanRepository}/readme`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!response.ok) {
      console.error(
        `GitHub README request failed for ${owner}/${cleanRepository}:`,
        response.status,
      );

      return null;
    }

    const data = await response.json();

    if (!data.content || data.encoding !== "base64") {
      console.error("Invalid or unsupported GitHub README response.");
      return null;
    }

    const markdown = Buffer.from(data.content, "base64").toString("utf-8");

    const sections = extractSections(markdown);

    return {
      introduction: extractIntroduction(markdown),
      features: extractFeatures(sections),
      sections,
    };
  } catch (error) {
    console.error("Unable to retrieve GitHub README:", error);
    return null;
  }
}
