import Image from "next/image";
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

      {/* <img
        className="rounded-full border-2 shadow-lg border-white w-36 h-36"
        src={"./devraj.jpeg"}
        alt="Devraj's"
      /> */}
      <Image
        src={
          "https://media.licdn.com/dms/image/C4D03AQGzOhPWOqYTQA/profile-displayphoto-shrink_400_400/0/1655304743647?e=1683158400&v=beta&t=_OWYmDOqoQQY_TjGmdQJwlc6VkhCYVv1PjBbWwY-rHk"
        }
        className="rounded-full border-2 shadow-lg border-white w-36 h-36"
        alt="Devraj's"
        width={36}
        height={36}
      />
    </header>
  );
};

export default Header;
