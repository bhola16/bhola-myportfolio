export type Project = {
  slug: string;
  title: string;
  category: string;
 

  challenges: string[];
  futureImprovements: string[];

  liveLink: string;
  githubLink: string;

  featured?: boolean;
  status?: "Completed" | "Ongoing" | "In Progress";
};
