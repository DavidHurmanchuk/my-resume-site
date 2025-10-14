"use client";

import { projects } from "../constants/projects";
import { FiGithub } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
}

const ProjectItem = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 shadow-2xl hover:shadow-blue-500/30"
      style={{
        transform: "translate3d(0,0,0)",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-center">
        <div
          className={`col-span-12 md:col-span-7 p-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl 
          ${isOdd ? "md:order-last" : "md:order-first"} order-none`}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="aspect-video w-full rounded-md bg-cover bg-center hover:scale-105 transition-transform duration-300 ease-out"
              style={{
                backgroundImage: `url(${
                  project.image || "/default-project.jpg"
                })`,
                minHeight: "200px",
              }}
              aria-label={`Preview of ${project.title}`}
            />
          </a>
        </div>

        <div
          className={`col-span-12 md:col-span-5 flex flex-col justify-center text-left 
          ${
            isOdd
              ? "md:order-first md:text-right"
              : "md:order-last md:text-left"
          } order-none`}
        >
          <p className="text-sm font-semibold uppercase text-blue-400 mb-1">
            Featured Project
          </p>

          <h3 className="text-3xl font-extrabold text-white mb-4">
            {project.title}
          </h3>

          <div className="bg-gray-700 p-4 rounded-lg text-gray-300 mb-4 shadow-inner">
            <p className="text-base">{project.description}</p>
          </div>

          <div
            className={`mt-2 flex flex-wrap gap-2 mb-6 ${
              isOdd ? "md:justify-end" : "md:justify-start"
            } justify-start`}
          >
            {project.tech.map((techItem) => (
              <span
                key={techItem}
                className="text-xs font-semibold text-blue-300 bg-gray-700/50 px-3 py-1 rounded-full
                           transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-md hover:shadow-blue-500/30"
              >
                {techItem}
              </span>
            ))}
          </div>

          <div
            className={`flex gap-4 ${
              isOdd ? "md:justify-end" : "md:justify-start"
            } justify-start`}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-700 transition duration-200 shadow-md text-sm hover:scale-110"
              >
                <FiGithub className="w-6 h-6" />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md text-sm hover:scale-110"
              >
                <FaPlayCircle className="w-6 h-6" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="py-16 px-4 bg-gray-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-14 text-center text-blue-400">
          View All My Projects There!
        </h2>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <ProjectItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
