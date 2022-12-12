import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import { MdComputer } from "react-icons/md";
import { GetStaticProps } from "next";
import { Projects } from "../typings";
import { fetchProjects } from "../utils/fetchProjects";

type Props = {
  projects: Projects[];
};

const Projects = ({ projects }: Props) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <p className=" flex flex-col items-center justify-center text-xl max-w-[500px] mb-10">
        <p className="text-3xl mb-3">
          <MdComputer />
        </p>
        <p className="text-center">
          I belive in learning by building projects, so here are some of the
          projects I worked on
        </p>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project) => (
          <div className="col-span-1">
            <ProjectsCard key={project._id} project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: Projects[] = await fetchProjects();

  return {
    props: {
      projects,
    },
  };
};
