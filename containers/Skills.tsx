import React from "react";
import SkillIcon from "../components/SkillIcon";
import html from "../public/icons/html.svg";
import css from "../public/icons/css.svg";
import javascript from "../public/icons/javascript.svg";
import nodejs from "../public/icons/nodejs.svg";
import react from "../public/icons/reactjs.svg";
import typescript from "../public/icons/typescript.svg";
import next from "../public/icons/nextjs.svg";
import git from "../public/icons/git.svg";
import github from "../public/icons/github.svg";
import mongodb from "../public/icons/mongodb.svg";
import python from "../public/icons/python.svg";
import redux from "../public/icons/redux.svg";
import tailwindcss from "../public/icons/tailwindcss.svg";
import figma from "../public/icons/figma.svg";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="my-20">
      {/* Skill Icons */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7  gap-5 gap-y-7">
        <div className="col-span-1">
          <SkillIcon icon={html.src} name="HTML" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={css.src} name="CSS" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={javascript.src} name="JavaScript" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={react.src} name="React.js" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={nodejs.src} name="Node.js" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={typescript.src} name="TypeScript" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={next.src} name="Next.js" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={git.src} name="Git" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={github.src} name="Github" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={mongodb.src} name="MongoDB" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={python.src} name="Python" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={redux.src} name="Redux" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={tailwindcss.src} name="TailwindCSS" />
        </div>
        <div className="col-span-1">
          <SkillIcon icon={figma.src} name="Figma" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
