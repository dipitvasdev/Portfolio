import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import aiGithub from "@/public/github.png";
import nbaPlayoffs from "@/public/nba.png";
import projectCabinet from "@/public/project-cabinet.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer @ Hack for LA",
    location: "California (Remote)",
    description:
      "Contributed to the development of the TDM Calculator using React and Node.js, streamlining Los Angeles' Transportation Demand Management (TDM) regulations.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2024 - Present",
  },
  {
    title: "Research Assistant @ DICE Lab - NYU Tandon School of Engineering",
    location: "New York, NY",
    description:
      "Led a project on vision-language models for radiology report generation using Python, contributing to a vision transformer for medical image understanding, and lead-authored a paper with top cancer researchers at MSK.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2023 - May 2024",
  },
  {
    title: "Graduate Course Assistant @ NYU",
    location: "New York, NY",
    description:
      "Collaborated with other TAs to facilitate all aspects of graduate-level Deep Learning course for 100+ students, including grading, assignments, and doubt resolution.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2023 - May 2024",
  },
  {
    title: "Software Engineer Intern @ Alten Capital",
    location: "New York, NY",
    description:
      "Developed and deployed highly scalable backend systems using leading technologies, enabling CRUD operations across a variety of data models, leading to a 17% reduction in redundant code.",
    icon: React.createElement(CgWorkAlt),
    date: "May - August 2021",
  },
  {
    title: "Software Engineer Intern @ S&P Global",
    location: "Gurgaon, India",
    description:
      "Reduced infrastructure costs by 23% by leveraging AWS Lambda and CloudWatch APIs to streamline data extraction,",
    icon: React.createElement(CgWorkAlt),
    date: "May - July 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Project Cabinet: My Coding Projects Showcase",
    description:
      "Project Cabinet is an interactive portfolio showcasing my coding projects through visually engaging cards. Featuring responsive design, advanced filtering, and sorting, highlighting my technical skills and project expertise in a user-friendly format. Visit: https://project-cabinet.vercel.app/",
    tags: ["React", "Tailwind CSS", "Next.js", "Typescript", "Javascript"],
    imageUrl: projectCabinet,
  },
  {
    title: "Predictive Analysis and Insights on NBA Playoff Outcomes",
    description:
      "Conducted data preprocessing and analysis on NBA datasets (2014-2023) using R (tidyverse, dplyr), generating visualizations with ggplot2 and plotly. Developed logistic and linear regression models to predict NBA playoff outcomes, achieving 75% accuracy in forecasting series winners and the number of games.",
    imageUrl: nbaPlayoffs,
    tags: ["R", "tidyverse", "ggplot2", "caret", "plotly"],
  },
  {
    title: "AI-Driven GitHub Issue Classification System",
    description:
      "Built a machine learning model with 85% accuracy for classifying GitHub issues using Logistic Regression and PySpark on Databricks (GCP Compute). Developed a React-based frontend for a user-friendly interface, enabling real-time issue classification and predictions.",
    tags: ["PySpark", "MLlib", "Databricks", "GCP"],
    imageUrl: aiGithub,
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "Kotlin",
  "Java",
  "SQL",
  "TypeScript",
  "JavaScript",
  "TensorFlow",
  "Flask",
  "Scikit-learn",
  "Git",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "PyTorch",
  "React",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Power BI",
  "Tableau",
  "Microsoft Excel",
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Natural Language Processing",
  "Computer Vision",
  "Big Data",
  "Relational Database",
  "Generative AI",
  "Hadoop",
  "Spark",
  "Dash",
] as const;
