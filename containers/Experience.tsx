import React from "react";
import { experiences } from "../utils/experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Props = {
  experience: any;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f3f4f6",
        color: "#000",
      }}
      // className="dark:text-[#fff] dark:bg-[#1d1836] text-black bg-red-500"
      contentArrowStyle={{ borderRight: "7px solid  #f3f4f6" }}
      // date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon.src}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="">
        <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.date}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="px-5 sm:px-0">
      <div className="dark:text-white text-black mt-24 sm:pl-14">
        <p className="text-xs mb-2">WHAT I HAVE DONE SO FAR</p>
        <p className="text-5xl font-bold">Work Experience</p>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
