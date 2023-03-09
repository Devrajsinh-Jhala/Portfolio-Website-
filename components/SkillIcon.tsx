import React from "react";

type Props = {
  icon: any;
  name: string;
};

const SkillIcon = ({ icon, name }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full flex items-center justify-center border dark:border-black bg-white border-white w-20 h-20">
        <img
          className="w-[40px] h-[40px] object-contain"
          src={icon}
          alt={name}
        />
      </div>
      <p className="dark:text-white font-semibold mt-2 text-black ">{name}</p>
    </div>
  );
};

export default SkillIcon;
