import Image, { StaticImageData } from "next/image";
import React from "react";

interface ServicesCardProps {
  img?: StaticImageData;
  title?: string;
}

export const ServicesCard = ({ img, title }: ServicesCardProps) => {
  return (
    <div>
      <Image src={""} alt="" />
      <span></span>
    </div>
  );
};
