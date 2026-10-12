/**
 * ALL portfolio content lives here. Edit this file to customize the site.
 * Content is drawn only from the candidate's resume and LinkedIn profile.
 */

export type Project = {
  title: string;
  status?: string;
  problem: string;
  solution: string;
  contribution: string;
  outcome: string;
  tech: string[];
  link?: { label: string; href: string };
};

export type Job = {
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
  tags: string[];
};

export const profile = {
  name: "Liana S",
  title: "AI / ML Engineer — Generative AI & LLM Evaluation",
  positioning:
    "I build and evaluate AI systems — from CNN-based medical imaging models to LLM and AI-agent evaluation pipelines.",
  location: "Palakkad, Kerala, India",
  email: "lianainfo15@gmail.com",
  phone: "+91 94000 29321",
  phoneHref: "+919400029321",
  linkedin: "https://www.linkedin.com/in/liana-s/",
  github: "https://github.com/Lianasalim",
  resume: "/Liana_S_Resume.docx",
  availability: "Open to AI / ML opportunities",
};

/** The "snapshot" card shown beside the hero text. */
export const snapshot = {
  focus: ["LLM evaluation", "AI agents", "Deep learning (CNNs)"],
  evaluates_with: ["DeepEval", "TruLens", "LangSmith", "Ragas"],
  builds_with: ["Python", "TensorFlow", "scikit-learn"],
  published: "Heart disease prediction (2025)",
  status: profile.availability,
};

export const about = {
  paragraphs: [
    "I'm a Data Science graduate (Integrated MSc, university rank 7th) with hands-on experience in Python, machine learning, deep learning and Generative AI.",
    "At IBS Software I developed and evaluated enterprise AI workflows involving LLMs and AI agents, implementing evaluation pipelines with DeepEval, TruLens and LangSmith. I've also worked with scientific data at ISRO's Inertial Systems Unit and built farmer-focused digital tools during a project internship with the Idukki District Collectorate.",
    "My project and research work spans healthcare AI, environmental analytics and sustainability. I'm most interested in building practical Generative AI applications backed by rigorous evaluation.",
  ],
  languages: "English (fluent) · Malayalam (native)",
  highlights: [
    { label: "LLM & agent evaluation", detail: "DeepEval · TruLens · LangSmith" },
    { label: "Published researcher", detail: "Conference paper, 2025" },
    { label: "ISRO IISU", detail: "Data analyst intern" },
    { label: "University rank 7th", detail: "Integrated MSc, MG University" },
  ],
};

export const featuredProjects: Project[] = [
  {
    title: "LLM & AI Agent Evaluation Pipelines",
    status: "IBS Software · 2026",
    problem:
      "Enterprise LLM and AI-agent workflows needed their response quality assessed across more than one evaluation framework.",
    solution:
      "Evaluation pipelines built with DeepEval, TruLens and LangSmith, used to benchmark LLM responses across frameworks.",
    contribution:
      "Developed and evaluated LLM / AI-agent workflows, implemented the evaluation pipelines, and supported prompt engineering, workflow orchestration and documentation on the DataJet Compass platform.",
    outcome:
      "Delivered working evaluation pipelines and benchmarking support for the team's AI workflows.",
    tech: ["LLMs", "AI Agents", "DeepEval", "TruLens", "LangSmith", "Prompt Engineering"],
  },
  {
    title: "Pneumonia Detection with CNNs",
    problem:
      "Medical image screening needs to be rapid and scalable; chest X-rays are a natural fit for automated assistance.",
    solution:
      "A deep learning system that classifies chest X-ray images using Convolutional Neural Networks.",
    contribution:
      "Handled image preprocessing, model training, validation and performance evaluation for the classification task.",
    outcome:
      "Built an end-to-end understanding of healthcare AI workflows involving computer vision and diagnostic prediction.",
    tech: ["Python", "TensorFlow", "CNNs", "Computer Vision"],
  },
  {
    title: "Heart Disease Prediction",
    status: "Published · 2025",
    problem:
      "Identifying potential heart-disease risk from patient health parameters in clinical datasets.",
    solution:
      "A comparative study of Logistic Regression, Random Forest, Gradient Boosting and Naive Bayes classifiers.",
    contribution:
      "Preprocessing, feature analysis, and model evaluation using accuracy, precision, recall and F1-score.",
    outcome:
      "Findings published at the International Conference on Artificial Intelligence & Machine Learning (Bharata Mata College, 2025).",
    tech: ["Python", "scikit-learn", "Classification", "Model Evaluation"],
    link: {
      label: "Read the paper (DOI)",
      href: "https://doi.org/10.62643/ijerst.2025.v21.i2.p119-123",
    },
  },
  {
    title: "Urban Transport & Carbon Emission Analysis",
    status: "In progress",
    problem:
      "Understanding how urban transport patterns relate to air quality and driver health conditions.",
    solution:
      "A data-driven analytics system that integrates survey datasets with real-time Air Quality Index (AQI) data, applying clustering and deep learning.",
    contribution:
      "Data preprocessing and large-scale analysis, plus analytical visualizations and reports for environmental insight.",
    outcome:
      "Work in progress: identifying pollution-exposure patterns and health-risk correlations to support sustainability research.",
    tech: ["Python", "Clustering", "Deep Learning", "AQI Data"],
  },
];

export const moreProjects = [
  {
    title: "Climate Analytics with Python & Tableau",
    text: "Analysed global climate datasets for trends and statistical patterns; delivered interactive Tableau dashboards and reports.",
    tech: ["Python", "Tableau", "EDA"],
  },
  {
    title: "Digital Agricultural Companion",
    text: "Project internship, Idukki Collectorate: analysed soil, rainfall and crop data and designed chatbot flows for farmer queries and crop-loss reporting.",
    tech: ["Data analysis", "Chatbot design"],
  },
  {
    title: "AGROHUB — Full-Stack Platform",
    text: "Web platform giving farmers accessible agricultural information and services, with frontend, backend and database modules.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  },
];

export const experience: Job[] = [
  {
    role: "Project Associate",
    org: "IIIT Delhi Space Technology Centre",
    period: "July 2026",
    location: "New Delhi",
    points: [
      "Developed software for Astrodynamics and Space Situational Awareness (SSA) applications.",
      "Implemented trajectory simulation and estimation algorithms in Python.",
      "Contributed to development, testing, debugging and system integration of research software, applying numerical methods and software engineering practices.",
    ],
    tags: ["Python", "Numerical methods", "Simulation"],
  },
  {
    role: "AI Engineer — Project Trainee",
    org: "IBS Software",
    period: "Jan 2026 – Jun 2026",
    location: "Trivandrum",
    points: [
      "Developed and evaluated enterprise AI workflows involving LLMs and AI agents.",
      "Implemented evaluation pipelines using DeepEval, TruLens and LangSmith.",
      "Assisted in benchmarking LLM responses across multiple evaluation frameworks.",
      "Supported prompt engineering, workflow orchestration and AI system documentation on the DataJet Compass platform.",
    ],
    tags: ["LLM evaluation", "AI agents", "DeepEval", "TruLens", "LangSmith"],
  },
  {
    role: "Data Analyst Intern",
    org: "ISRO — Inertial Systems Unit (IISU)",
    period: "Nov 2025 – Dec 2025",
    location: "Trivandrum",
    points: [
      "Preprocessed and analysed scientific datasets within aerospace research workflows.",
      "Assisted in improving data accuracy, structured reporting and analysis efficiency for engineering datasets.",
      "Applied Python-based data processing to support scientific evaluation and reporting.",
    ],
    tags: ["Python", "Data analysis", "Data quality"],
  },
  {
    role: "Project Intern",
    org: "Collectorate Idukki",
    period: "Jun 2025 – Aug 2025",
    location: "Idukki",
    points: [
      "Built a “Digital Agricultural Companion” for the District Collector's Summer Internship Programme.",
      "Collected and analysed soil, rainfall and crop data to support local farmers.",
      "Designed chatbot flows for farmer queries, crop-loss reporting and personalised alerts; documented and tested modules of the Smart Advisory Engine.",
    ],
    tags: ["Data analysis", "Chatbots", "Documentation"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Generative AI & Evaluation", items: ["LLMs", "AI Agents", "LLM Evaluation", "Prompt Engineering", "RAG concepts", "NLP fundamentals"] },
  { group: "AI Frameworks & Eval Tools", items: ["TensorFlow", "scikit-learn", "DeepEval", "TruLens", "LangSmith", "Ragas"] },
  { group: "Machine Learning", items: ["Machine Learning", "Deep Learning", "CNNs", "Classification", "Clustering", "Predictive analytics"] },
  { group: "Programming & Databases", items: ["Python", "SQL", "Object-Oriented Programming"] },
  { group: "Data Analytics & Visualization", items: ["Data cleaning", "EDA", "Tableau", "Power BI", "Microsoft Excel"] },
  { group: "Tools", items: ["Git (basic)", "JIRA (basic)", "Microsoft Teams"] },
];

export const education = {
  degree: "Integrated MSc in Computer Science (Data Science)",
  school: "St. Joseph's College, Moolamattom · MG University, Kottayam",
  period: "Sep 2021 – Jun 2026",
  note: "University Rank: 7th",
};

export const certifications = [
  "AWS Generative AI and AI Agents with Amazon Bedrock — Professional Certificate",
  "Google Data Analytics — Professional Certificate",
  "Microsoft Power BI Data Analyst",
  "IBM Python for AI & Data Science",
  "Introduction to Deep Learning — Coursera",
  "Kaggle — Intermediate Machine Learning",
];

export const publication = {
  title: "Heart Disease Prediction Using Machine Learning Models",
  venue: "International Conference on Artificial Intelligence & Machine Learning, Bharata Mata College (2025)",
  summary:
    "Comparative evaluation of machine learning classification models for predictive healthcare analytics using clinical datasets.",
  href: "https://doi.org/10.62643/ijerst.2025.v21.i2.p119-123",
};
