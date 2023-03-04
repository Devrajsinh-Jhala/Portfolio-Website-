import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import { MdComputer } from "react-icons/md";
import { GetServerSideProps, GetStaticProps } from "next";
import { Projects } from "../typings";
import Head from "next/head";

type Props = {
  projects: Projects[];
};

const Projects = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Devraj Jhaka | Projects</title>
      </Head>
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
            <div key={project._id} className="col-span-1">
              <ProjectsCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const projectres = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  const projectdata = await projectres.json();
  const projects: Projects[] = projectdata.projects;

  return {
    props: {
      projects,
    },
  };
};
