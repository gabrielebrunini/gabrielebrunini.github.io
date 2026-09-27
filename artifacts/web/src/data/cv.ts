export const CV_DATA = {
  header: {
    name: "Gabriele Brunini",
    title: "Quantitative Investment Manager",
    location: "Zurich, Switzerland",
    phone: "0772593546",
    email: "gabriele.brunini98@gmail.com",
    linkedin: "https://www.linkedin.com/in/gabriele-brunini",
    github: "https://github.com/gabrielebrunini",
  },
  profile:
    "Quantitative Investments Manager in the Asset Allocation team at Vontobel, working where technology and economics meet. I hold an MSc in Data Science from the University of Zurich and a BSc in Economics, Management and Computer Science from Bocconi. I am interested in how data, models, and AI can be used to understand markets and support investment decisions.",
  skills: [
    "Python",
    "R",
    "SQL",
    "Snowflake",
    "dbt",
    "Terraform",
    "Azure",
    "Azure OpenAI",
    "GitHub Actions",
    "Airflow",
    "Machine Learning",
    "NLP",
  ],
  experience: [
    {
      company: "Vontobel",
      location: "Zurich, Switzerland",
      roles: [
        {
          title: "Quantitative Investment Manager",
          period: "Mar 2026 – Present",
          bullets: [
            "Member of the Asset Allocation team, combining quantitative methods, data, and technology to support investment decisions.",
          ],
        },
        {
          title: "Data Engineer",
          period: "Oct 2025 – Mar 2026",
          bullets: [
            "Designed Terraform infrastructure as code on Azure, replacing manual provisioning with version-controlled setups across test, acceptance, and production.",
            "Consolidated a multi-subscription Azure estate into a single subscription with clearer resource governance and cost management.",
            "Configured Key Vault, private endpoints, and role-based access for service principals.",
            "Automated Terraform planning, validation, and deployment with GitHub Actions.",
            "Built dbt transformations on Snowflake, with 63+ models and 118 tests.",
          ],
        },
        {
          title: "Data Scientist, Graduate Program in Compliance & Trading Product Development",
          period: "Oct 2023 – Sep 2025",
          bullets: [
            "Developed a KYC compliance screening use case with Azure OpenAI, including the data pipeline and legal prompt categorization in Python.",
            "Built and deployed a transaction monitoring app in R Shiny on OpenShift, cutting manual review time by 30%.",
            "Orchestrated data imports with Airflow, Terraform, GitHub Actions, and SQLAlchemy.",
            "Analyzed algorithmic trading volume models in Streamlit, detecting anomalies and checking execution accuracy.",
          ],
        },
      ],
    },
    {
      company: "Idiap Research Institute",
      location: "Martigny, Switzerland",
      roles: [
        {
          title: "Research Intern",
          period: "Sep 2022 – Aug 2023",
          bullets: [
            "Developed deep learning models to classify sleep stages from polysomnography, aiming for scoring that is faster and more consistent than manual review.",
            "Designed a CNN with a GRU layer so predictions use longer temporal context and hold up across clinics and patient groups.",
            "Matched expert scoring on Cohen’s kappa, and showed the same end-to-end approach can extend to other biosignals such as EMG and ECG.",
          ],
        },
      ],
    },
    {
      company: "University of Zurich",
      location: "Zurich, Switzerland",
      roles: [
        {
          title: "Data Scientist",
          period: "May 2022 – May 2023",
          bullets: [
            "Built applications for legal data collection, processing, and post-processing at the Institute for International Law and Comparative Constitutional Law.",
            "Scraped European Court of Human Rights decisions and applied NLP with BeautifulSoup, spaCy, NLTK, dplyr, and R Shiny.",
          ],
        },
        {
          title: "Teaching Assistant, UZH Summer School — Deep Dive into Blockchain",
          period: "Jul 2022",
          bullets: [
            "Hosted coding Q&A on Ethereum smart contracts, Marlowe, and the course lectures.",
          ],
        },
        {
          title: "Teaching Assistant, Foundations of Data Science",
          period: "Jun 2021 – Jan 2022",
          bullets: [
            "Supported 18 student groups on algorithm implementation and evaluated their work at the end of the semester.",
          ],
        },
      ],
    },
    {
      company: "ETH Zurich",
      location: "Zurich, Switzerland",
      roles: [
        {
          title: "Student Research Assistant",
          period: "Apr 2021 – Feb 2022",
          bullets: [
            "Worked on PDF extraction and text processing: regex reference detection, date parsing, language recognition, and statistical reporting.",
            "Automated log creation, debugged the extraction pipeline, and contributed to the project proposal.",
          ],
        },
      ],
    },
    {
      company: "Aubay Italia",
      location: "Milan, Italy",
      roles: [
        {
          title: "Junior ETL Developer (50%)",
          period: "Feb 2020 – Jul 2020",
          bullets: [
            "Built ETL processes for Intesa Sanpaolo, moving financial data from Oracle into Teradata and Hadoop data lakes.",
            "Developed data processing and reporting for RCS.",
          ],
        },
      ],
    },
    {
      company: "Otto B.V.",
      location: "Tilburg, Netherlands",
      roles: [
        {
          title: "Business Intelligence Intern (50%)",
          period: "Sep 2019 – Dec 2019",
          bullets: [
            "Extracted and cleaned retail data, then built a recommendation system to model customer preferences and suggest products.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution: "University of Zurich",
      location: "Zurich, Switzerland",
      degree: "MSc, Data Science",
      period: "2020 – 2023",
      detail: "Thesis: Automatic Sleep-Phase Analysis via Stateful Methods",
    },
    {
      institution: "Università Bocconi",
      location: "Milan, Italy",
      degree: "BSc, Economics, Management and Computer Science",
      period: "2017 – 2020",
    },
    {
      institution: "ETH Zurich",
      location: "Zurich, Switzerland",
      degree: "Special Student, Computer Science",
      period: "2020 – 2022",
      detail: "Applied statistics, experimental design, time series, and natural language processing",
    },
    {
      institution: "Tilburg University",
      location: "Tilburg, Netherlands",
      degree: "Exchange Semester",
      period: "2019",
      detail: "Computational microeconomics, databases, marketing analytics, and supply chain management",
    },
  ],
  projects: [
    {
      title: "Deep Learning with Temporal Context for Sleep Stage Classification",
      period: "Nov 2022 – Jul 2023",
      description:
        "Master’s thesis on neural sleep staging. Models trained on Sleep-EDF and MASS use longer temporal context and match expert technician scoring on several benchmarks.",
    },
    {
      title: "Swiss Federal Supreme Court Dataset Viewer",
      period: "May 2023 · Open Legal Lab",
      description:
        "Shiny app for exploring Swiss Federal Supreme Court decisions since 2007, so lawyers and researchers can run simple quantitative analyses without writing code.",
      link: "https://scdv.legaldata.ch/",
      linkLabel: "Open the app",
    },
    {
      title: "Blockchain Observatory for Cardano",
      period: "Feb 2022 – Jan 2023",
      description:
        "Real-time analytics platform for Cardano, using Spark, MongoDB, Neo4j, and Metabase, with incremental updates from a DB-sync node.",
      link: "https://www.dropbox.com/s/89m603fmk3chu8q/Cardano_MAP_2022_final.pdf?dl=0",
      linkLabel: "Read the report",
    },
    {
      title: "Relation Classification with BERT",
      period: "Mar 2021 – Jul 2021",
      description:
        "Course project on using textual entailment to improve relation classification, with transformer experiments on SemEval-2010 Task 8.",
      link: "https://github.com/gabrielebrunini/NLP-project",
      linkLabel: "View on GitHub",
    },
    {
      title: "E-retail Recommender System",
      period: "Sep 2019 – Jul 2020",
      description:
        "Matrix-factorization recommender for large implicit-feedback retail datasets from Otto, compared against a popularity baseline.",
      link: "https://www.dropbox.com/s/z6fmspyfkp6w153/E_retail_Recommender_System_for_large_Implicit_Feedback_Datasets__.pdf?dl=0",
      linkLabel: "Read the report",
    },
  ],
  languages: [
    { name: "English", proficiency: "Native", detail: "Native or bilingual" },
    { name: "Italian", proficiency: "Native", detail: "Native or bilingual" },
    { name: "German", proficiency: "Professional", detail: "Professional working" },
    { name: "French", proficiency: "Limited", detail: "Limited working" },
    { name: "Spanish", proficiency: "Limited", detail: "Limited working" },
  ],
};
