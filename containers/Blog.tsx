import React from "react";
import { BsArrowRight } from "react-icons/bs";
import BlogCards from "../components/BlogCards";
import { BlogInfo } from "../typings";

type Props = {
  blogInfo: BlogInfo[];
};

const Blog = ({ blogInfo }: Props) => {
  return (
    <div className="px-5 sm:px-0">
      <div className="dark:text-white text-black mt-24 sm:pl-10">
        <p className="text-xs mb-2">SOME OF MY WRITINGS</p>
        <p className="text-5xl font-bold">My Blogs</p>
        <p className="max-w-[500px] w-full my-3 text-sm">
          I am always keen to learning new things, so I share my learnings by
          writing blogs and here are some of the blogs well appreciated by
          readers.
        </p>
      </div>
      <section className="flex flex-col sm:pl-10 mt-10">
        <div className="grid grid-cols-1 gap-8 ">
          {blogInfo.map((blogInfo) => (
            <div key={blogInfo._id}>
              <BlogCards blogInfo={blogInfo} />
            </div>
          ))}
        </div>
      </section>
      <div className="flex mt-3 items-center justify-center">
        <a
          target={"_blank"}
          className="text-center"
          href="https://devraj-jhala.hashnode.dev/"
        >
          <li className="mt-3 cursor-pointer hover:underline  flex">
            Checkout more blogs{" "}
            <span className="mt-[4px]">
              <BsArrowRight />
            </span>
          </li>
        </a>
      </div>
    </div>
  );
};

export default Blog;
