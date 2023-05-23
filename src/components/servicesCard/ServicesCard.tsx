import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
import { PlayIcon } from "@heroicons/react/24/solid"




interface ServicesCardProps {
  img?: StaticImageData;
  title?: string;
  
}

export const ServicesCard = ({ img, title }: ServicesCardProps) => {
  if(!img) {
    return null
  } 
  return (
    <div className="hover:text-[#C19957] hover:-translate-y-5 cursor-pointer  ">
      <Image src={img} alt="" />
      <span  className="text-xl flex gap-2 items-center py-3 px-4 font-bold bg-black  ">{title} <PlayIcon className="w-5 h-5  " />  </span>
    </div>
  );
};
