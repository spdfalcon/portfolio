import React from "react";

export default function Footer() {
  return (
    <div className="bg-black-me pt-20 pb-6 px-36 mt-20">
      <div className="container flex flex-col border-b border-b-white-me/60 pb-14">
        <div className="top text-white-me">
          <h2 className="text-[43px] font-inter800 w-[346px]">
            Entrust Design to Professionals
          </h2>
        </div>
        <div className="mid mt-14 flex gap-16 justify-between">
          <div className="1 w-[267px]">
            <h3 className="font-inter600 bg-gradient-to-r from-gradient-headerB1 from-20% via-gradient-headerB2 via-80% to-gradient-headerB3 to-20% text-transparent bg-clip-text">
              Address
            </h3>
            <p className="font-inter300 text-sm text-white-me/60 w-[174px] mt-5 leading-6">
              Germany — 78515h Street, Office 478 Berlin, De 81566
            </p>
          </div>
          <div className="2 w-[218px]">
            <h3 className="font-inter600 bg-gradient-to-r from-gradient-headerB1 from-20% via-gradient-headerB2 via-80% to-gradient-headerB3 to-20% text-transparent bg-clip-text">
              Say Hellow
            </h3>
            <a
              href="#"
              className="font-inter300 text-sm text-white-me/60 underline decoration-1 decoration-white-me mt-5 block underline-offset-4"
            >
              kiritgoti007@gmailcom
            </a>
            <a
              className="text-sm font-inter500 text-white-me mt-4 block"
              href="#"
            >
              +91 84695 47012
            </a>
          </div>
          <div className="3 w-[131px]">
            <h3 className="font-inter600 bg-gradient-to-r from-gradient-headerB1 from-20% via-gradient-headerB2 via-80% to-gradient-headerB3 to-20% text-transparent bg-clip-text">
              Social
            </h3>
            <a
              href="#"
              className="font-inter300 text-sm text-white-me/60 mt-5 block"
            >
              Facebook
            </a>
            <a
              href="#"
              className="font-inter300 text-sm text-white-me/60 mt-5 block"
            >
              Twitter
            </a>
            <a
              href="#"
              className="font-inter300 text-sm text-white-me/60 mt-5 block"
            >
              Dribble
            </a>
            <a
              href="#"
              className="font-inter300 text-sm text-white-me/60 mt-5 block"
            >
              Instagram
            </a>
          </div>
          <div className="4 w-[330px]">
            <h3 className="font-inter600 bg-gradient-to-r from-gradient-headerB1 from-20% via-gradient-headerB2 via-80% to-gradient-headerB3 to-20% text-transparent bg-clip-text">
              Newsletter
            </h3>
            <div className="text-white-me/60 justify-between items-center mt-5 border-b-2 border-white-me/60 flex gap-2 py-1">
              <div className="flex gap-2">
                <i className="bi bi-envelope"></i>
                <input
                  className="outline-none bg-black-me placeholder:text-sm placeholder:font-inter300 placeholder:text-white-me/60"
                  placeholder="Enter your email"
                  type="text"
                />
              </div>
              <div className="text-[10px]">
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="w-4 h-4 border block rounded border-white-me/60">
              </span>
              <span className="text-white-me/60 text-sm font-inter300">I agree to the Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
        <div className="down container py-6">
          <p className="text-sm text-white-me/60 font-inter300">KiritGoti @ 2023. All Rights Reserved.</p>
        </div>
    </div>
  );
}
