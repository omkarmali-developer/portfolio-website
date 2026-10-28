import React from "react";
import SectionHeading from "./SectionHeading";
import profile from "../data/profile";

const About = () => (
  <section
    name="about"
    className="section-padding w-full bg-gradient-to-b from-gray-900 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 sm:p-6 mx-auto">
      <SectionHeading
        title="About"
        subtitle="Backend engineer focused on building reliable, scalable server-side systems"
      />

      <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {profile.focusAreas.map(({ title, items }) => (
          <div
            key={title}
            className="p-5 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300"
          >
            <h3 className="text-cyan-400 font-semibold mb-3">{title}</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              {items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
