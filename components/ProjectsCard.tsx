import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { Projects } from "../typings";
import Link from "next/link";
import { urlFor } from "../sanity";

type Props = {
  project: Projects;
};

const ProjectsCard = ({ project }: Props) => {
  return (
    <section className=" sm:max-w-[320px] dark:text-black h-fit sm:max-h-[400px] cursor-pointer hover:-translate-y-3 transition-all duration-500 rounded-lg w-full bg-gray-100 flex flex-col items-center justify-center border-4 border-white">
      {/* Image */}
      <img
        src={urlFor(project.projectImage).url()}
        alt="Image"
        className="object-contain"
      />
      {/* Title */}
      <p className="font-bold mt-2 text-center sm:text-xl">
        {project.projectName}
      </p>
      {/* Techstack */}
      <p className="text-sm text-center px-3 my-2">({project.projectSkills})</p>
      {/* Description */}
      <p className="text-sm text-center px-3 mb-5 ">{project.description}</p>

      <div className="w-full flex items-center mb-2 justify-center space-x-10 text-2xl">
        <Link target={"_blank"} href={`${project.githubLink}`}>
          <BsGithub className="cursor-pointer hover:scale-125 transition-all duration-300" />
        </Link>
        <Link target={"_blank"} href={`${project.liveLink}`}>
          <FiExternalLink className="cursor-pointer hover:scale-125 transition-all duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsCard;
