import type { Project } from "@/types/portfolio";

export const personalInfo = {
  name: "Bholanath Bala",
  designation: "AI Engineer | Machine Learning Researcher | Software Developer",
  location: "Bangladesh",
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
    logo: "/education/ece-logo.png",
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


export const projects: Project = [
  {
    slug: "together-we-can",
    title: "TogetherWeCan",
    category: "Full-Stack Web Development",
    image: "/projects/together-we-can.png",

    shortDescription:
      "A community-driven volunteering platform that connects people through social development initiatives and community events.",

    description:
      "TogetherWeCan is a responsive community platform where users can discover upcoming and past volunteering events, organize their own activities, join community initiatives, and manage their participation. It supports activities such as tree plantation, community cleanup, blood donation, and food distribution.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],

    liveLink: "https://togetherwecan-client.vercel.app",
    githubLink: "https://github.com/bhola16/togetherWeCan-Client",
    serverGithubLink: "https://github.com/bhola16/togetherWeCan-Server",

    features: [
      "Explore upcoming and past community events",
      "Create, edit, and manage events",
      "Join and leave community activities",
      "Track joined events and personal activities",
      "Email/password, Google, and GitHub authentication",
      "Responsive interface with dark and light themes",
    ],

    challenges: [
      "Integrating the Next.js frontend with an Express.js REST API.",
      "Managing authenticated requests and user sessions.",
      "Implementing event creation, participation, and management workflows.",
    ],

    futureImprovements: [
      "Introduce real-time event notifications.",
      "Improve event discovery with advanced filtering.",
      "Add analytics for community participation.",
    ],
  },

  {
    slug: "bazar-dor",
    title: "BazarDor (বাজার দর)",
    category: "Full-Stack Web Development",
    image: "/projects/bazar-dor.png",

    shortDescription:
      "A market-price information platform that helps users explore daily commodity prices and compare prices across markets in Bangladesh.",

    description:
      "BazarDor is a responsive market-price information application designed to make everyday market information easier to access. Users can browse products by category, explore price movements, compare available market prices, and view detailed product information. The application also includes user authentication and profile functionality.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "Mongoose",
      "REST API",
    ],

    liveLink: "https://bazar-dor-kohl.vercel.app",
    githubLink: "https://github.com/bhola16/bazar-dor",
    serverGithubLink: "",

    features: [
      "Browse products and categories",
      "Track product price increases and decreases",
      "Compare available prices across markets",
      "Sort products by price",
      "User registration and social authentication",
      "Responsive interface with loading states",
    ],

    challenges: [
      "Integrating product and category information from a REST API.",
      "Managing authentication with Better Auth and MongoDB.",
      "Presenting market-price information in an accessible format.",
    ],

    futureImprovements: [
      "Add more historical price visualizations.",
      "Improve market-wise price comparison.",
      "Introduce personalized shopping and price alerts.",
    ],
  },

  {
    slug: "wanderlast",
    title: "Wanderlast",
    category: "Web Development",
    image: "/projects/wanderlast.png",

    shortDescription: "A web development project built with Next.js.",

    description:
      "Wanderlast is a web application project. Its detailed functionality, main features, and development objectives will be added after confirming the project requirements and implementation.",

    technologies: ["Next.js", "React", "TypeScript"],

    liveLink: "https://wanderlast-frontend.vercel.app",
    githubLink: "https://github.com/bhola16/Wanderlast",
    serverGithubLink:
      "https://github.com/bhola16/Wanderlast/tree/wanderlastServer",

    features: [],

    challenges: [],

    futureImprovements: [],
  },
];

export const contactInfo = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
};
