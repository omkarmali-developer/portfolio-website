import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import projects from "../data/projects";

const Portfolio = () => (
  <section
    name="portfolio"
    className="section-padding bg-gradient-to-b from-gray-900 to-black w-full text-white"
  >
    <div className="max-w-screen-lg p-4 sm:p-6 mx-auto">
      <SectionHeading
        title="Projects"
        subtitle="Backend services and APIs I've built — microservices, REST endpoints, and database design"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map(
          ({ id, title, description, image, tags, demoUrl, codeUrl }) => (
            <article
              key={id}
              className="group rounded-xl overflow-hidden bg-gray-800/40 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 text-white text-sm hover:bg-cyan-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </a>
                  )}
                  {codeUrl && (
                    <a
                      href={codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-700 text-white text-sm hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-gray-900 text-cyan-400 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4 sm:hidden">
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 text-sm rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    >
                      Demo
                    </a>
                  )}
                  {codeUrl && (
                    <a
                      href={codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 text-sm rounded-md bg-gray-700/50 text-gray-300 border border-gray-600"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  </section>
);

export default Portfolio;
