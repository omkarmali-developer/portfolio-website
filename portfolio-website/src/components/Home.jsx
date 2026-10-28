import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MyImage from "../assets/myImage.png";
import profile from "../data/profile";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = profile.resumePath;
    link.download = profile.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white pt-16 sm:pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] px-4 sm:px-6 py-12 gap-10 md:gap-16">
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="font-signature1 text-lg sm:text-xl text-cyan-400">
            {profile.greeting}
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {profile.title}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-gray-300">
            {profile.tagline}
          </p>
          <p className="text-gray-400 py-4 max-w-lg mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
            {profile.highlights.map(({ label, value }) => (
              <div
                key={label}
                className="px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700"
              >
                <p className="text-cyan-400 font-bold text-lg">{value}</p>
                <p className="text-xs text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={600}
              offset={-80}
              className="group text-white w-full sm:w-fit px-6 py-3 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 cursor-pointer"
            >
              View My Projects
              <span className="group-hover:translate-x-1 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1" size={20} />
              </span>
            </Link>
            <button
              type="button"
              onClick={handleDownload}
              className="text-white w-full sm:w-fit px-6 py-3 rounded-md border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              Download Resume
            </button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src={MyImage}
            alt={`${profile.name} — ${profile.title}`}
            className="rounded-2xl mx-auto w-56 sm:w-64 md:w-80 lg:w-96 shadow-2xl shadow-cyan-500/10 border border-gray-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
