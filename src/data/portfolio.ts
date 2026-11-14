import type { Project } from "@/types/portfolio";

export const personalInfo = {
  name: "Bholanath Bala",
  designation: "AI Engineer | Machine Learning Researcher | Software Developer",
  location: "Khulna, Bangladesh",
  email: "ku.bhola16@gmail.com",
  phone: "+8801934392790",
  profileImage: "/profile/bholanath_bala.jpg",
  resume: "/resume/Bholanath_Bala_CV.pdf",

  socialLinks: {
    github: "https://github.com/bhola16",
    linkedin: "https://www.linkedin.com/in/bholanath-bala16",
    facebook: "https://www.facebook.com/bhola.nath.bala.2024",
  },
};

export const aboutMe = {
  description:
    "I am an Electronics and Communication Engineering graduate from Khulna University with interests in Artificial Intelligence, Deep Learning, Computer Vision, and Software Development.",

  interests: [
    "Artificial Intelligence",
    "Deep Learning",
    "Computer Vision",
    "Signal Processing",
    "Time-Series Analysis",
    "Software Engineering",
  ],
};

export const education = [
  {
    degree: "B.Sc. in Electronics and Communication Engineering",
    institution: "Khulna University",
    location: "Khulna, Bangladesh",
    duration: "February 2022 – January 2026",
    result: "CGPA: 3.57 / 4.00",
  },
];

export const institutionLinks = [
  {
    name: "Khulna University",
    subtitle: "Official University Website",
    logo: "/education/ku_logo.png",
    url: "https://ku.ac.bd/",
  },
  {
    name: "ECE Discipline",
    subtitle: "Electronics & Communication Engineering",
    logo: "/education/ECE.jpeg",
    url: "https://ku.ac.bd/discipline/ece",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "C", "C++"],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "PyTorch",
      "TensorFlow",
      "Transformers",
    ],
  },
  {
    category: "Web Development",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Google Colab", "VS Code", "LaTeX"],
  },
];

export const publications = [
  {
    title:
      "Vision Transformer-Based Classification of Bearing Faults from Vibration Signal Spectrograms",
    venue: "IEEE ICCIT 2025",
    year: 2025,
    doi: "10.1109/ICCIT68739.2025.11490241",
    link: "https://doi.org/10.1109/ICCIT68739.2025.11490241",
    image: "/education/bearing-fault.jpg",
    description:
      "A Vision Transformer-based approach for classifying bearing faults using vibration signal spectrograms.",
    category: "Bearing Fault Diagnosis",
  },
  {
    title:
      "A Novel Attention-Enhanced Hybrid Deep Learning Model for GI Disease Classification",
    venue: "IEEE PECCII 2026",
    year: 2026,
    doi: "10.1109/PECCII70991.2026.11661820",
    link: "https://doi.org/10.1109/PECCII70991.2026.11661820",
    image: "/education/gi-disease.jpeg",
    description:
      "An attention-enhanced hybrid deep learning approach for gastrointestinal disease classification using endoscopic images.",
    category: "GI Disease Classification",
  },
];

export const projects: Project[] = [
  {
    slug: "together-we-can",
    title: "TogetherWeCan",
    category: "Full-Stack Web Development",

    challenges: [
      "Designing a consistent experience across the frontend and backend",
      "Connecting the frontend with REST API endpoints",
      "Managing event information and database operations",
      "Building a responsive interface with reusable components",
    ],
    futureImprovements: [
      "Introduce user authentication and role-based access control",
      "Add volunteer registration and participation tracking",
      "Implement event search, filtering, and category-based discovery",
      "Add an event management dashboard with analytics",
      "Integrate email notifications for important event updates",
    ],
    liveLink: "https://togetherwecan-client.vercel.app",
    githubLink: "https://github.com/bhola16/togetherWeCan-Client",
  },

  {
    slug: "bazar-dor",
    title: "BazarDor (বাজার দর)",
    category: "Full-Stack Web Development",

    challenges: [
      "Organizing commodity and market information for easy navigation",
      "Presenting price information in a clear and understandable format",
      "Managing data communication between the frontend and backend",
      "Designing a responsive interface for different devices",
    ],
    futureImprovements: [
      "Introduce historical price trends and interactive charts",
      "Add advanced filtering by product, category, and market",
      "Provide price-change notifications for selected commodities",
      "Expand market coverage across more regions of Bangladesh",
      "Develop a community-based price reporting feature",
    ],
    liveLink: "https://bazar-dor-kohl.vercel.app",
    githubLink: "https://github.com/bhola16/bazar-dor",
  },

  {
    slug: "fitlog",
    title: "FitLog",
    category: "Web Development",

    challenges: [
      "Structuring a maintainable application using Next.js and React",
      "Designing an intuitive interface for fitness-related information",
      "Ensuring consistent layouts across different screen sizes",
      "Organizing reusable components and application styles",
    ],
    futureImprovements: [
      "Introduce personalized workout planning and activity tracking",
      "Add user accounts and personal fitness profiles",
      "Implement progress tracking with visual charts and statistics",
      "Include fitness goals and daily activity summaries",
      "Add data persistence for long-term fitness history",
    ],
    liveLink: "https://fitlogbhola.vercel.app/",
    githubLink: "https://github.com/bhola16/FitLog-Bhola",
  },
];

export const contactInfo = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
};
