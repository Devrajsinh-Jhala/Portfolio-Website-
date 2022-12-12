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
      <div className="bg-white hover:-translate-y-3 transition-all duration-500 rounded-lg max-h-[300px] border-8 border-white dark:text-black ">
        <img
          className="object-cover w-full md:w-[388px] h-[170px]"
          src={`${urlFor(blogInfo.blogImage).url()}`}
          alt=""
        />
        <p className="text-center my-5">{blogInfo.blogHeading}</p>
      </div>
    </a>
  );
};

export default BlogCards;
