import React from "react";
// import { skillIcons } from "../constants";
import html from "../public/icons/html.svg";

type Props = {};

const Test = (props: Props) => {
  return (
    <div>
      <img className="w-10 h-10 object-contain" src={html.src} alt={"html"} />
    </div>
  );
};

export default Test;
