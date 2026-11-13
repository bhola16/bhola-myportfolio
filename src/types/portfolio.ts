export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  serverGithubLink?: string;
  features: string[];
  challenges: string[];
  futureImprovements: string[];
  featured?: boolean;
  status?: "Completed" | "Ongoing" | "In Progress";
};
