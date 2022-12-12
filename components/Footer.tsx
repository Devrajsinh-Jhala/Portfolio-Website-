import Link from "next/link";
import React from "react";

import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex mt-20 mb-5 items-center justify-between">
      <div className="flex flex-col space-y-1">
        <Link href="/">
          <span className="text-xl font-bold">Devraj Jhala</span>
        </Link>
        <p className="text-sm sm:block hidden ">
          Front-End Developer | React.js | Next.js | TailwindCSS | Blogger at
          Hashnode
        </p>
      </div>
      <div className="flex items-center space-x-5 text-2xl">
        <div className="cursor-pointer hover:scale-125 duration-500">
          <a
            href="https://www.linkedin.com/in/devrajsinh-jhala/"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <FaLinkedin className="text-gray-600 dark:text-slate-100" />
          </a>
        </div>
        <div className="cursor-pointer hover:scale-125 duration-500">
          <FaFacebookSquare className="text-gray-600 dark:text-slate-100" />
        </div>
        <div className="cursor-pointer hover:scale-125 duration-500">
          <FaGithub className="text-gray-600 dark:text-slate-100" />
        </div>
        <div className="cursor-pointer hover:scale-125 duration-500">
          <FaInstagram className="text-gray-600 dark:text-slate-100" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
