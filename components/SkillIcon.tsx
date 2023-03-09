import React from "react";

type Props = {
  icon: any;
  name: string;
};

const SkillIcon = ({ icon, name }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full flex items-center justify-center border dark:border-black bg-white border-white sm:w-20 w-16 h-16 sm:h-20">
        <img
          className="w-[30px] h-[30px] sm:h-[40px] sm:w-[40px] object-contain"
          src={icon}
          alt={name}
        />
      </div>
      <p className="dark:text-white font-semibold mt-2 sm:text-base text-xs text-black ">
        {name}
      </p>
    </div>
  );
};

export default SkillIcon;
