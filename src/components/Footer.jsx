import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profile from "../data/profile";
import socialLinks from "../data/socialLinks";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: HiOutlineMail,
};

const Footer = () => {
  const mobileLinks = socialLinks.filter((link) => link.id !== "resume");

  return (
    <footer className="bg-black text-gray-400 py-8 px-4 border-t border-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5 lg:hidden">
          {mobileLinks.map(({ id, label, href, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {Icon && <Icon size={22} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
