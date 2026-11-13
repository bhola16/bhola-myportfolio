export const personalInfo = {
  name: "Bholanath Bala",
  designation: "AI Engineer | Machine Learning Researcher | Software Developer",
  location: "Bangladesh",
  email: "YOUR_EMAIL@example.com",
  phone: "YOUR_PHONE_NUMBER",
  profileImage: "/profile/profile.jpg",
  resume: "/resume/resume.pdf",

  socialLinks: {
    github: "https://github.com/bhola16",
    linkedin: "YOUR_LINKEDIN_URL",
    facebook: "YOUR_FACEBOOK_URL",
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
    credits: "160 Credits",
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
  },
  {
    title:
      "A Novel Attention-Enhanced Hybrid Deep Learning Model for GI Disease Classification",
    venue: "IEEE PECCII 2026",
    year: 2026,
    doi: "10.1109/PECCII70991.2026.11661820",
    link: "https://doi.org/10.1109/PECCII70991.2026.11661820",
  },
];

// export const projects = [
//   {
//     slug: "bearing-fault-diagnosis",
//     title: "Bearing Fault Diagnosis Using Transformers",
//     category: "AI / Deep Learning",
//     image: "/projects/bearing-fault.jpg",
//     shortDescription:
//       "A comparative study of Vision Transformer and PatchTST for bearing fault diagnosis using vibration signals.",
//     description:
//       "A comparative investigation of two independent transformer-based approaches using the PU and CWRU bearing datasets.",
//     technologies: [
//       "Python",
//       "PyTorch",
//       "Vision Transformer",
//       "PatchTST",
//       "STFT",
//       "Signal Processing",
//     ],
//     liveLink: "",
//     githubLink: "",
//     challenges: [
//       "Vibration signal preprocessing",
//       "Time-frequency representation",
//       "Transformer model training",
//     ],
//     futureImprovements: [
//       "Explore lightweight transformer architectures",
//       "Improve generalization across operating conditions",
//       "Investigate explainable AI",
//     ],
//   },

//   {
//     slug: "gi-disease-classification",
//     title: "GI Disease Classification",
//     category: "Computer Vision / Deep Learning",
//     image: "/projects/gi-disease.jpg",
//     shortDescription:
//       "An attention-enhanced hybrid deep learning model for gastrointestinal disease classification.",
//     description:
//       "A hybrid model combining ConvNeXt Base, EfficientNetV2-Small, and dual SE attention using the Kvasir v2 dataset.",
//     technologies: [
//       "Python",
//       "PyTorch",
//       "ConvNeXt",
//       "EfficientNetV2",
//       "Computer Vision",
//     ],
//     liveLink: "",
//     githubLink: "",
//     challenges: [
//       "Feature extraction",
//       "Attention mechanism design",
//       "Multiclass classification",
//     ],
//     futureImprovements: [
//       "Evaluate on additional datasets",
//       "Explore model compression",
//       "Improve interpretability",
//     ],
//   },

//   {
//     slug: "iot-environmental-monitoring",
//     title: "IoT Environmental Monitoring",
//     category: "IoT / Intelligent Sensing",
//     image: "/projects/iot-monitoring.jpg",
//     shortDescription:
//       "An IoT-based environmental monitoring project focused on Sundari trees in the Sundarbans.",
//     description:
//       "An environmental monitoring project using IoT-based sensing and data analysis.",
//     technologies: ["IoT", "Environmental Sensors", "Python", "Data Analysis"],
//     liveLink: "",
//     githubLink: "",
//     challenges: [
//       "Environmental data collection",
//       "Sensor integration",
//       "Data monitoring",
//     ],
//     futureImprovements: [
//       "Expand sensor coverage",
//       "Introduce predictive analysis",
//     ],
//   },

//   {
//     slug: "full-stack-web-application",
//     title: "Full-Stack Web Application",
//     category: "Software Development",
//     image: "/projects/web-application.jpg",
//     shortDescription:
//       "A modern web application developed using Next.js, TypeScript, Express.js, and MongoDB.",
//     description:
//       "A full-stack application demonstrating frontend development, backend API integration, and database operations.",
//     technologies: [
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Express.js",
//       "MongoDB",
//     ],
//     liveLink: "",
//     githubLink: "",
//     challenges: [
//       "Frontend and backend integration",
//       "API development",
//       "Database management",
//     ],
//     futureImprovements: [
//       "Enhance authentication",
//       "Improve performance",
//       "Add advanced features",
//     ],
//   },
// ];



export const projects = [
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
    serverGithubLink: "",

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

    liveLink: "",
    githubLink: "https://github.com/bhola16/Wanderlast",
    serverGithubLink: "",

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
