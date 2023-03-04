import { Projects } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `https://devraj-jhala.vercel.app/api/getProjects`
  );

  const data = await res.json();
  const projects: Projects[] = data.projects;

  return projects;
};
