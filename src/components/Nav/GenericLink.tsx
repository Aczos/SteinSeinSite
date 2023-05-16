import Link from "next/link";
import React from "react";

interface GenericLinkProps {
  title: string;
  href: string;
  isMobile?: boolean;
}

export const GenericLink = ({ href, title, isMobile }: GenericLinkProps) => {
  return (
    <li className={`relative  ${isMobile ? "pb-3" : ""} `}>
      <Link
        href={href}
        className={`${
          isMobile ? "mobile-border-animation " : "border-animation"
        } `}
      >
        {title}
      </Link>
    </li>
  );
};
