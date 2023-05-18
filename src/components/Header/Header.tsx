import Link from "next/link";
import React from "react";

interface HeaderProps {
  title: string;
  description: string;
  section: string;
}

export const Header = ({ section, description, title }: HeaderProps) => {
  const text = title;
  const letters = text.split("");
  return (
    <header>
      <div>
        <div className=" max-w-[1600px] relative z-30 bg-[url('../assets/images/bgeee.jpg')] bg-cover bg-center bg-fixed	 bg-no-repeat w-screen h-screen  bg-  after:bg-black after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-90  ">
          <div className="absolute z-10 top-2/4 -translate-y-2/4 left-1/3 -translate-x-1/3">
            {letters.map((letter, i) => (
              <span
                key={i}
                className="rainbow-text text-4xl lg:text-6xl"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
            <p>{description}</p>
            <Link
              className=" block w-fit px-4 mt-4 py-2 bg-[#AF8946] text-2xl "
              href={""}
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
