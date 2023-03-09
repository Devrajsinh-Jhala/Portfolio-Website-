import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Projects } from "../typings";

type Props = {
  projects: Projects[];
};

const Projects = ({ projects }: Props) => {
  return (
    <>
      <div className="dark:text-white text-black mt-24 sm:pl-14">
        <p className="text-xs mb-2">WHAT I HAVE BUILT</p>
        <p className="text-5xl font-bold">Projects</p>
        <p className="max-w-[500px] w-full my-3 text-sm">
          I believe in learning by building and hence I always try to build some
          projects if I am learning new technologies and following are my some
          of the best projects. You can view them live or check the github
          repository for documentation.
        </p>
      </div>
      <section className="mb-10 mt-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div key={i} className="cols-span-1">
              <ProjectsCard project={project} />
            </div>
          ))}
        </div>
        <Link href={"/projects"}>
          <li className="mt-8 cursor-pointer hover:underline  flex">
            View More{" "}
            <span className="mt-[4px]">
              <BsArrowRight />
            </span>
          </li>
        </Link>
      </section>
    </>
  );
};

export default Projects;
