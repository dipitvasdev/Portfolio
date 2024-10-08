"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>My projects</SectionHeading>
      <p className="text-gray-700 dark:text-white/80 text-center">
        Check out all my projects at my project cabinet{" "}
        <a className="underline" href="https://project-cabinet.vercel.app/">
          Click here
        </a>
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
