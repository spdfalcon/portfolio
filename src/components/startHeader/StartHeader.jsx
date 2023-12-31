import React from "react";
import { Link } from "react-router-dom";

export default function StartHeader() {
  return (
    <div>
      <div className="p-5 text-center lg:text-left lg:px-[150px] lg:py-20 bg-gradient-to-r from-gradient-headerB1 from-10% via-gradient-headerB2 via-80% to-gradient-headerB3 to-90% flex flex-col lg:flex-row items-center justify-center">
        <div className="left lg:p-16 basis-1/2">
          <div className="lg:w-[500px]">
            <h1 className="font-inter800 lg:text-4xl">
              Welcome to my new Creative World!
            </h1>
            <p className="font-inter500 mt-3 text-sm lg:text-xl">
              Kirit Goti is a designer focused on building brands and creating
              digital experiences — currently working at TechHive
            </p>
            <Link to={'/contact-us'} className=" bg-dark1 mt-3 rounded-md text-white-me px-2 py-2 text-[8px] sm:text-xs  lg:px-6 lg:py-3 inline-block">
              Let’s Get Started
            </Link>
          </div>
        </div>
        <div className="right basis-1/2 mt-3 shrink-0">
          <img src="/img/startheader/1.png" />
        </div>
      </div>
    </div>
  );
}
