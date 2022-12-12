import React from "react";

type Props = {
  buttonText: string;
};

const Button = ({ buttonText }: Props) => {
  return (
    <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white text-center w-fit rounded-full font-semibold text-sm shadow-md shadow-blue-500">
      {buttonText}
    </button>
  );
};

export default Button;
