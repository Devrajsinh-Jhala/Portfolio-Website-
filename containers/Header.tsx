import React from "react";
import Button from "../components/Button";
import { HomeInfo } from "../typings";

type Props = {
  homeInfo: HomeInfo;
};

const Header = ({ homeInfo }: Props) => {
  return (
    <header className="flex md:flex-row flex-col-reverse items-center justify-center d:space-x-10">
      {/* Text */}
      <div className="mt-10 md:mt-0 text-center md:text-left">
        <p className="font-bold text-xl sm:text-3xl mb-1">{homeInfo.title}</p>
        <p className="max-w-[400px] text-sm sm:text-base mt-3 w-full">
          {homeInfo.subtitle}
        </p>
        <p className="mb-3">{homeInfo.description}</p>
        <a
          rel="noopener noreferer"
          target={"_blank"}
          href="https://pdfhost.io/v/JLzF.aYKL_My_Resume"
        >
          <Button buttonText="View Resume" />
        </a>
      </div>
      {/* Image */}

      <img
        className="rounded-full border-2 shadow-lg border-white w-36 h-36"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGzOhPWOqYTQA/profile-displayphoto-shrink_400_400/0/1655304743647?e=1674086400&v=beta&t=u-4QYk5OWqp8wfmtheQwjW2ksAs5nNTP2udiq3S03Hc"
        alt="Devraj's"
      />
    </header>
  );
};

export default Header;
