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
  metrics?: { value: string; label: string }[];
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
  title: "Data Science · Machine Learning · AI Research",
  positioning:
    "I turn data into evidence — from statistical analysis and predictive models on health and environmental problems to LLM and AI-agent evaluation.",
  location: "Palakkad, Kerala, India",
  email: "lianainfo15@gmail.com",
  phone: "+91 94000 29321",
  phoneHref: "+919400029321",
  linkedin: "https://www.linkedin.com/in/liana-s/",
  github: "https://github.com/Lianasalim",
  resume: "/Liana_S_Resume.docx",
  availability: "Open to Data Science, AI/ML & research roles",
};

/** The "snapshot" card shown beside the hero text. */
export const snapshot = {
  focus: ["Predictive modelling", "Statistical analysis", "LLM evaluation"],
  research: ["Women's health analytics", "Urban air quality"],
  builds_with: ["Python", "scikit-learn", "TensorFlow"],
  papers: "1 published · 3 submitted · 1 manuscript",
  status: profile.availability,
};

export const about = {
  paragraphs: [
    "I'm a Data Science graduate (Integrated MSc, university rank 7th) who uses statistics, machine learning and deep learning to answer real-world questions, with research projects in women's health analytics, urban air quality and clinical risk prediction.",
    "In industry, I developed and evaluated enterprise AI workflows at IBS Software, implementing LLM and AI-agent evaluation pipelines with DeepEval, TruLens and LangSmith. I've also worked with scientific data at ISRO's Inertial Systems Unit and built farmer-focused digital tools during a project internship with the Idukki District Collectorate.",
    "I enjoy the full path from survey or sensor data to a tested, well-evaluated model, and I'm looking to keep growing in applied research and data-driven problem solving.",
  ],
  languages: "English (fluent) · Malayalam (native)",
  highlights: [
    { label: "Research", detail: "1 published, 3 submitted, 1 manuscript" },
    { label: "LLM & agent evaluation", detail: "DeepEval · TruLens · LangSmith" },
    { label: "ISRO IISU", detail: "Data analyst intern" },
    { label: "University rank 7th", detail: "Integrated MSc, MG University" },
  ],
};

export const featuredProjects: Project[] = [
  {
    title: "Vitamin Deficiency & Hormonal Health in Women",
    status: "Research paper · manuscript",
    problem:
      "Vitamin-deficiency symptoms overlap with hormonal-imbalance symptoms, which can delay women from discovering underlying hormonal issues.",
    solution:
      "A survey-based, data-driven framework (61 female respondents) combining univariate and bivariate EDA, statistical hypothesis testing and machine learning to study associations with hormonal symptom severity and predict higher severity.",
    contribution:
      "Survey data analysis, statistical testing, and comparison of multiple ML models using stratified and repeated cross-validation.",
    outcome:
      "Found a significant positive correlation between vitamin-associated symptoms and hormonal symptom severity. Random Forest performed best; age, vitamin-symptom score, stress level, food frequency and mood fluctuations were the top predictors.",
    metrics: [
      { value: "ρ = 0.55", label: "Spearman, p < 0.001" },
      { value: "82.65%", label: "Accuracy (Random Forest)" },
      { value: "92.26%", label: "ROC-AUC" },
      { value: "61", label: "Survey respondents" },
    ],
    tech: ["Python", "Random Forest", "Hypothesis testing", "Cross-validation", "EDA"],
  },
  {
    title: "AeroSense — Hybrid AI for Urban Emission Policy",
    status: "Research paper · submitted",
    problem:
      "Unregulated emissions from public transport worsen urban air pollution and are an occupational health and safety risk for drivers; enforcement needs to know where and when to act.",
    solution:
      "An integrated AI system combining a first-party driver-habits survey with AQI time-series data: K-Means clustering turns socioeconomic data into driver risk profiles, and an LSTM forecasts daily AQI.",
    contribution:
      "Preprocessing and integration of survey and AQI data, clustering and deep learning modelling, and analytical visualizations and reports.",
    outcome:
      "LSTM reached R² = 0.73 on daily AQI prediction. The framework lets enforcers map high-risk driver profiles (where) to future pollution hotspots (when) for targeted enforcement.",
    metrics: [
      { value: "R² 0.73", label: "LSTM, daily AQI" },
      { value: "K-Means", label: "Driver risk profiles" },
    ],
    tech: ["Python", "LSTM", "K-Means", "Time series", "AQI data"],
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
];

export const moreProjects = [
  {
    title: "Pneumonia Detection with CNNs",
    text: "Deep learning system that classifies chest X-rays with Convolutional Neural Networks; covered preprocessing, training, validation and performance evaluation.",
    tech: ["Python", "TensorFlow", "CNNs"],
  },
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

export const research = {
  interests: [
    "Machine learning for healthcare",
    "Environmental & urban analytics",
    "Statistical modelling",
    "Time-series forecasting",
    "LLM evaluation",
  ],
  papers: [
    {
      title: "Heart Disease Prediction Using Machine Learning Models",
      status: "Published · 2025",
      venue: "International Conference on Artificial Intelligence & Machine Learning, Bharata Mata College",
      summary:
        "Comparative evaluation of machine learning classification models for predictive healthcare analytics using clinical datasets.",
      keywords: ["Heart disease", "Machine learning", "Classification"],
      href: "https://doi.org/10.62643/ijerst.2025.v21.i2.p119-123",
    },
    {
      title: "Hybrid AI System for Urban Emission Policy: Clustering and LSTM Forecasting",
      status: "Submitted · ICDSIS 2027",
      venue: "Conference submission",
      summary:
        "Integrates a driver-habits survey with AQI time-series data. K-Means builds driver risk profiles and an LSTM forecasts daily AQI (R² = 0.73), supporting a targeted enforcement strategy.",
      keywords: ["AQI", "LSTM", "K-Means", "Targeted enforcement", "Vehicular emissions"],
    },
{
  title: "Cross Comparison Study of Chest X-ray Images for Automated Detection of Pneumonia Using Deep Learning Techniques",
  status: "Submitted",
  venue: "Manuscript submission",
  summary:
    "A comparative study of deep learning techniques for automated pneumonia detection using chest X-ray images.",
  keywords: ["Pneumonia detection", "Chest X-ray", "Deep learning", "Medical imaging"],
},
{
  title: "Analysis of Climate Change and Global Warming Using Statistical Methods and Visualization Tools",
  status: "Submitted · ICDSIS 2027",
  venue: "ICDSIS 2027",
  summary:
    "An analysis of climate change and global warming using statistical methods and data visualization tools.",
  keywords: ["Climate change", "Global warming", "Statistical analysis", "Data visualization"],
},
    {
      title: "A Data-Driven Framework for Assessing Vitamin Deficiencies and Hormonal Health in Women",
      status: "Manuscript",
      venue: "Completed manuscript",
      summary:
        "Survey of 61 women. Significant correlation between vitamin-associated symptoms and hormonal symptom severity (Spearman ρ = 0.55, p < 0.001); Random Forest with repeated cross-validation reached 82.65% accuracy, 82.59% precision, 73.33% recall, 73.20% F1 and 92.26% ROC-AUC.",
      keywords: ["Vitamin deficiency", "Hormonal symptoms", "Women's health", "Random Forest", "Predictive modelling"],
    },
  ],
};

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
  { group: "Machine Learning & Deep Learning", items: ["Machine Learning", "Deep Learning", "CNNs", "LSTM", "Random Forest", "K-Means clustering", "Classification", "Predictive modelling"] },
  { group: "Statistics & Research Methods", items: ["Hypothesis testing", "Correlation analysis", "Exploratory data analysis", "Cross-validation", "Feature importance", "Time series analysis", "Probability & Bayesian statistics"] },
  { group: "Generative AI & Evaluation", items: ["LLMs", "AI Agents", "LLM Evaluation", "Prompt Engineering", "RAG concepts", "NLP fundamentals"] },
  { group: "Frameworks & Eval Tools", items: ["scikit-learn", "TensorFlow", "PyTorch (coursework)", "DeepEval", "TruLens", "LangSmith", "Ragas"] },
  { group: "Programming & Databases", items: ["Python", "R", "SQL", "Object-Oriented Programming"] },
  { group: "Data Analytics & Visualization", items: ["Data cleaning", "Tableau", "Power BI", "Microsoft Excel"] },
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

