import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useTheme } from "next-themes";

type Props = {};

const Navbar = (props: Props) => {
  const navLinks = [
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
  ];

  // Dark Mode Logic
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setOpen(false);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(open);

  return (
    <>
      <nav className="my-10 px-4 py-2 border border-black dark:border-white rounded-full flex items-center justify-between">
        <Link onClick={() => setOpen(false)} href={"/"}>
          <p className="">Devraj Jhala</p>
        </Link>
        <span
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer block md:hidden"
        >
          {open ? <AiOutlineClose /> : <BiMenu />}
        </span>
        <ul
          className={` top-32 transition-all duration-500 ease-in ${
            open ? "block" : "hidden"
          } left-0 w-full md:w-auto md:pl-0 pl-9 fixed md:static pb-12 md:pb-0 md:flex md:items-center md:justify-between  md:space-x-10 bg-light dark:bg-dark  `}
        >
          {navLinks.map((navLink, index) => (
            <Link
              onClick={() => setOpen(false)}
              key={index}
              href={navLink.link}
            >
              <li
                className="cursor-pointer hover:underline my-5 md:my-0 "
                key={index}
              >
                {navLink.name}
              </li>
            </Link>
          ))}
          <a target={"_blank"} href="https://devraj-jhala.hashnode.dev/">
            <li className="cursor-pointer hover:underline  flex">
              Blog{" "}
              <span className="mt-[4px] ">
                <FiArrowUpRight />
              </span>
            </li>
          </a>
          <div onClick={() => setOpen(false)} className="mt-5 md:mt-0">
            {currentTheme === "dark" ? (
              <BsFillSunFill
                onClick={() => setTheme("light")}
                className="text-yellow-500 cursor-pointer"
              />
            ) : (
              <BsMoonStarsFill
                onClick={() => setTheme("dark")}
                className="text-gray-500 cursor-pointer"
              />
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
