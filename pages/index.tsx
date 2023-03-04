import type { GetServerSideProps, GetStaticProps } from "next";
import Blog from "../containers/Blog";
import ContactSection from "../containers/ContactSection";
import Header from "../containers/Header";
import Work from "../containers/Projects";
import { BlogInfo, HomeInfo, Projects } from "../typings";

type Props = {
  homeInfo: HomeInfo;
  projects: Projects[];
  blogInfo: BlogInfo[];
};

const Home = ({ homeInfo, projects, blogInfo }: Props) => {
  return (
    <>
      <Header homeInfo={homeInfo} />
      <Work projects={projects} />
      <Blog blogInfo={blogInfo} />
      <ContactSection />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(`https://devraj-jhala.vercel.app/api/getHomeInfo`);

  const data = await res.json();
  const homeInfo: HomeInfo = data.homeInfo[0];

  const blogres = await fetch(
    `https://devraj-jhala.vercel.app/api/getBlogInfo`
  );

  const blogdata = await blogres.json();
  const blogInfo: BlogInfo[] = blogdata.blogInfo;

  const projectres = await fetch(
    `https://devraj-jhala.vercel.app/api/getProjects`
  );

  const projectdata = await projectres.json();
  const projects: Projects[] = projectdata.projects;

  return {
    props: {
      homeInfo,
      projects,
      blogInfo,
    },
  };
};
