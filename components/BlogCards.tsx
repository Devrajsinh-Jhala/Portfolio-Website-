import React from "react";
import { urlFor } from "../sanity";
import { BlogInfo } from "../typings";

type Props = {
  blogInfo: BlogInfo;
};

const BlogCards = ({ blogInfo }: Props) => {
  return (
    <a
      href={`${blogInfo.blogLink}`}
      target={"_blank"}
      rel="noreferrer noopener"
    >
      <div className="max-w-[700px] w-full p-5 rounded-xl dark:hover:bg-gray-200 transition duration-200 ease-in-out  bg-gray-600 hover:bg-gray-700 text-white dark:bg-[#f4f5f6] dark:text-black  ">
        <p className="text-2xl font-bold">{blogInfo.blogHeading}</p>
        <div className="flex items-center justify-start my-1 gap-3">
          <p>
            {new Date(blogInfo.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="h-1 w-1 dark:bg-black bg-white rounded-full" />
          <p>{blogInfo.blogViews} views</p>
        </div>
        <p className="mt-5">{blogInfo.blogDescription}</p>
      </div>
    </a>
  );
};

export default BlogCards;
