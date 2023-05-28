import Link from "next/link";
import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid"





export const Footer = () => {
  return (
    <footer className="bg-[#1C1F1F]">
          <div className="flex flex-col md:flex-row md:justify-between p-10">
            <div>
            <h2 className=" rainbow-text font-bold text-3xl pb-10">
              SteinSeinSite
              </h2>
            </div>
            <div className="flex flex-col p-4 gap-3">
            <h2 className="font-bold text-2xl">Quick Links</h2>
              <Link href="">Services</Link>
              <Link href="">Schedule appointment</Link>
              <Link href=""> Complete intake</Link>
              <Link href="">Contact</Link>
            </div>
            <div>  <h3 className="font-bold text-2xl">Contact us</h3>
                  <Link className="flex flex-row gap-4 py-2  " href="tojadave28@gmail.com">
                  <EnvelopeIcon className=" w-5 h5 " />tojadave28@gmail.com</Link></div>
          </div>
    </footer>
  );
};


