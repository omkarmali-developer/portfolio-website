import React from "react";

const SectionHeading = ({ title, subtitle }) => (
  <div className="pb-8 md:pb-10">
    <h2 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-cyan-500">
      {title}
    </h2>
    {subtitle && (
      <p className="py-4 text-gray-400 text-base sm:text-lg max-w-2xl">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
