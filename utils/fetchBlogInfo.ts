import { BlogInfo } from "../typings";

export const fetchBlogInfo = async () => {
  const res = await fetch(
    `https://devraj-jhala.vercel.app/api/getBlogInfo`
  );

  const data = await res.json();
  const blogInfo: BlogInfo[] = data.blogInfo;

  return blogInfo;
};
