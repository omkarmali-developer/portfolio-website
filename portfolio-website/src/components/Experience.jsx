import React from "react";
import SectionHeading from "./SectionHeading";
import workExperience from "../data/workExperience";
import skills from "../data/skills";

const Experience = () => (
  <section
    name="experience"
    className="section-padding w-full bg-gradient-to-b from-black to-gray-900 text-white"
  >
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6">
      <SectionHeading
        title="Experience"
        subtitle="Backend roles and the technologies I use to build server-side systems"
      />

      <div className="space-y-8 mb-16">
        {workExperience.map(
          ({
            id,
            role,
            company,
            period,
            location,
            current,
            highlights,
            technologies,
          }) => (
            <article
              key={id}
              className="relative pl-6 sm:pl-8 border-l-2 border-gray-700 hover:border-cyan-500 transition-colors duration-300"
            >
              <span
                className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${
                  current
                    ? "bg-cyan-500 border-cyan-400"
                    : "bg-gray-800 border-gray-600"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-xl font-bold text-white">{role}</h3>
                <span className="text-sm text-cyan-400 font-medium">{period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                {company} · {location}
                {current && (
                  <span className="ml-2 inline-block px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    Current
                  </span>
                )}
              </p>
              <ul className="space-y-2 mb-4">
                {highlights.map((point) => (
                  <li
                    key={point}
                    className="text-gray-300 text-sm sm:text-base flex gap-2"
                  >
                    <span className="text-cyan-400 flex-shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          )
        )}
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-2 border-b-2 border-gray-700 pb-2 inline-block">
          Skills & Technologies
        </h3>
        <p className="text-gray-400 py-4 text-sm sm:text-base">
          Backend-first stack with web fundamentals in HTML, CSS, and JavaScript
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {skills.map(({ id, src, title, shadow, iconClass }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-300 py-4 px-2 rounded-lg bg-gray-800/40 border border-gray-700/50 ${shadow}`}
            >
              <img
                src={src}
                alt={title}
                className={`w-14 sm:w-16 mx-auto ${iconClass || ""}`}
                loading="lazy"
              />
              <p className="mt-3 text-sm text-center text-gray-300">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
