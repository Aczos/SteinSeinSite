"use client";
import { Merriweather } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { GenericLink } from "./GenericLink";

const marriweather = Merriweather({
  weight: "700",
  subsets: ["latin"],
});
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" relative top-0 left-0 py-4 ">
      <div className="relative top-0 left-0">
        <div className=" flex px-6 justify-around md:block md:justify-start ">
          <div className="flex items-center ">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo_element.png"
                alt="Logo"
                width={50}
                height={80}
              />
              <span className={`${marriweather.className} text-2xl`}>
                SteinSeinSite
              </span>
            </div>
            <div className="hidden md:flex md:w-full md:justify-center">
              <ul className=" flex  gap-10 space-x-4 capitalize text-xl ">
                {/* Menu items for desktop */}
                <GenericLink href="#" title="home" />
                <GenericLink href="#" title="about" />
                <GenericLink href="#" title="services" />
                <GenericLink href="#" title="contact" />
              </ul>
            </div>
          </div>
          <div className="flex  md:hidden">
            {/* Mobile menu button */}
            <button className={isOpen ? "hidden" : "flex items-center"}>
              <Bars3BottomRightIcon
                className="w-10 h-10"
                onClick={() => setIsOpen(!isOpen)}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="absolute top-0 left-0  w-screen  h-screen   overflow-hidden z-50 bg-black  p-2  md:hidden">
          <div className=" overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div className=" -mr-2 flex w-full justify-end">
                <button className="" onClick={() => setIsOpen(!isOpen)}>
                  <XMarkIcon className="exit-animation w-10 h-10" />
                </button>
              </div>
            </div>
            <ul className=" px-2 pt-2 pb-3 space-y-1 capitalize text-2xl">
              {/* Menu items for mobile */}
              <GenericLink href="#" title="home" isMobile={true} />
              <GenericLink href="#" title="about" isMobile={true} />
              <GenericLink href="#" title="services" isMobile={true} />
              <GenericLink href="#" title="contact" />

              {/* More items... */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
