import React from "react";
import { BsArrowRight } from "react-icons/bs";
import BlogCards from "../components/BlogCards";
import { BlogInfo } from "../typings";

type Props = {
  blogInfo: BlogInfo[];
};

const Blog = ({ blogInfo }: Props) => {
  return (
    <section className="flex flex-col items-center justify-center my-10">
      <p className="max-w-[450px] text-center text-xl w-full mb-10 mt-5 font-semibold">
        I am always keen to learning new things, so I share my learnings by
        writing blogs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {blogInfo.map((blogInfo) => (
          <div key={blogInfo._id}>
            <BlogCards blogInfo={blogInfo} />
          </div>
        ))}
      </div>
      <a target={"_blank"} href="https://devraj-jhala.hashnode.dev/">
        <li className="mt-6 cursor-pointer hover:underline  flex">
          Checkout more blogs{" "}
          <span className="mt-[4px]">
            <BsArrowRight />
          </span>
        </li>
      </a>
    </section>
  );
};

export default Blog;
