import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spoilerDetectionImg from "@/public/spoilerDetection.webp"
import rockPaperScissorImg from "@/public/rockPaper.png"
import musicDataAnalyticsImg from "@/public/musicData.webp"


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
    title: "Software Engineer Intern @ S&P Global",
    location: "Gurgaon, India",
    description:
      "Reduced infrastructure costs by 23% by leveraging AWS Lambda and CloudWatch APIs to streamline data extraction,",
    icon: React.createElement(FaReact),
    date: "May - July 2021",
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
    title: "Graduate Course Assistant @ NYU",
    location: "New York, NY",
    description:
      "Collaborated with other TAs to facilitate all aspects of graduate-level Deep Learning course for 100+ students, including grading, assignments, and doubt resolution.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2023 - Present",
  }

] as const;


export const projectsData = [
  {
    title: "Spoiler Detection in Movie Reviews Using Modern DL Architectures",
    description:
      "Developed and implemented deep learning techniques for spoiler detection in movie reviews achieving 78.49% accuracy with Distil BERT. Conducted thorough data pre-processing on a 1 GB dataset for improved model performance.",
    tags: ["Python", "Flask", "NLP", "Distil BERT"],
    imageUrl: spoilerDetectionImg,
  },
  {
    title: "Multiplayer Rock Paper Scissor Webcam Game",
    description:
      "Developed a live multiplayer game using OpenCV and TensorFlow with a validation accuracy of 98%. Utilized advanced computer vision techniques and a customized MobileNetV2 model for players' hand gesture detection.",
    tags: ["Python", "OpenCV", "TensorFlow", "MobileNetV2"],
    imageUrl: rockPaperScissorImg,
  },
  {
    title: "NYU Data Science Capstone: Exploring Music Data Analytics",
    description:
      "Led a music data analysis project with advanced statistical and machine learning models. Used statistical tests and PCA for data analysis, and implemented collaborative filtering with ALS for music recommendation.",
    tags: ["Pandas", "SciPy", "Python", "Scikit-learn"],
    imageUrl: musicDataAnalyticsImg,
  }
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
  "Dash"
] as const;
