import Link from "next/link";
import React from "react";

interface GenericLinkProps {
  title: string;
  href: string;
  isMobile?: boolean;
}

export const GenericLink = ({ href, title, isMobile }: GenericLinkProps) => {
  const scrollSmoothly = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <li className={`relative  ${isMobile ? "pb-3" : ""} `}>
      <a
        href={href}
        className={`${
          isMobile ? "mobile-border-animation " : "border-animation"
        } `}
        onClick={(e) => scrollSmoothly(e, href.slice(1))}
      >
        {title}
      </a>
    </li>
  );
};
