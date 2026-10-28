import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import socialLinks from "../data/socialLinks";

const iconComponents = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: HiOutlineMail,
  resume: BsFillPersonLinesFill,
};

const cornerStyles = {
  linkedin: "rounded-tr-md",
  resume: "rounded-br-md",
};

const SocialLinks = () => (
  <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
    <ul>
      {socialLinks.map(({ id, label, href, icon, download }) => {
        const Icon = iconComponents[icon];
        return (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700 hover:bg-cyan-600 ${cornerStyles[id] || ""}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target={download ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
            >
              {label}
              {Icon && <Icon size={24} />}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default SocialLinks;
