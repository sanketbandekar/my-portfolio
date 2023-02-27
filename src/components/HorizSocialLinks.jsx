import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const HorizSocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sanket-bandekar-2255a9169",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sanketbandekar",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:bandekarsanket@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Resume.pdf",

      download: true,
    },
  ];
  return (
    <div className=" bg-transparent">
      <div className="flex flex-row w-full mb-2">
        {links.map(({ id, child, href, download }) => (
          <a
            key={id}
            href={href}
            className=" mx-5"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HorizSocialLinks;
