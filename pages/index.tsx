import type { GetStaticProps } from "next";
import Blog from "../containers/Blog";
import ContactSection from "../containers/ContactSection";
import Header from "../containers/Header";
import Work from "../containers/Projects";
import { BlogInfo, HomeInfo, Projects } from "../typings";
import { fetchBlogInfo } from "../utils/fetchBlogInfo";
import { fetchHomeInfo } from "../utils/fetchHomeInfo";
import { fetchProjects } from "../utils/fetchProjects";

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const homeInfo: HomeInfo = await fetchHomeInfo();
  const projects: Projects[] = await fetchProjects();
  const blogInfo: BlogInfo[] = await fetchBlogInfo();

  return {
    props: {
      homeInfo,
      projects,
      blogInfo,
    },
  };
};
