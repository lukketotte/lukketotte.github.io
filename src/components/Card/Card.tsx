import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";

export const Card = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <img
        src={require("./lukas.jpg")}
        alt={"Lukas"}
        className={"shadow rounded-full flex items-center justify-center w-64"}
      />
      <div className='flex flex-row justify-center mt-2 text-5xl laptop:text-4xl'>
        <a
          href={"https://github.com/lukketotte"}
          className='hover:text-blue-400'
        >
          <AiFillGithub />
        </a>
        <a
          href={"https://www.linkedin.com/in/lukas-arnroth-b51430140/"}
          className='hover:text-blue-400'
        >
          <AiFillLinkedin />
        </a>
        <a
          href={
            "https://scholar.google.com/citations?user=v07Y_jPhN0cC&hl=en&oi=ao"
          }
          className='hover:text-blue-400'
        >
          <SiGooglescholar />
        </a>
        <a
          href={"mailto: lukas.arnroth@gmail.com"}
          className='hover:text-blue-400'
        >
          <AiFillMail />
        </a>
      </div>
    </div>
  );
};
