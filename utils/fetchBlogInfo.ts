import { BlogInfo } from "../typings";

export const fetchBlogInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBlogInfo`
  );

  const data = await res.json();
  const blogInfo: BlogInfo[] = data.blogInfo;

  return blogInfo;
};
