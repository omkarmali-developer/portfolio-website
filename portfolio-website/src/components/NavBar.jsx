import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import profile from "../data/profile";
import navLinks from "../data/navLinks";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const closeMenu = () => setNav(false);

  return (
    <nav className="flex justify-between items-center w-full h-16 sm:h-20 px-4 sm:px-6 text-white bg-black/95 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-800">
      <Link
        to="home"
        smooth
        duration={600}
        className="cursor-pointer min-w-0"
        onClick={closeMenu}
      >
        <h1 className="text-lg sm:text-2xl md:text-3xl font-signature1 truncate">
          {profile.name}
        </h1>
      </Link>

      <ul className="hidden md:flex items-center gap-1">
        {navLinks.map(({ id, link, label }) => (
          <li key={id}>
            <Link
              to={link}
              smooth
              duration={600}
              spy={true}
              activeClass="text-cyan-400"
              offset={-80}
              className="px-3 py-2 cursor-pointer font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setNav(!nav)}
        aria-label={nav ? "Close menu" : "Open menu"}
        className="cursor-pointer text-gray-400 hover:text-white md:hidden"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300 z-40">
          {navLinks.map(({ id, link, label }) => (
            <li key={id} className="py-5">
              <Link
                onClick={closeMenu}
                to={link}
                smooth
                duration={600}
                offset={-80}
                className="text-xl font-medium capitalize hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
