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
    <section className="my-10 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
  );
};

export default Projects;
