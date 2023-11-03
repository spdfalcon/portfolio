import React from "react";

export default function WorkHeader() {
  return (
    <>
      <div className="">
        <div className="flex justify-center container">
          <div className="up flex flex-col items-center py-20 text-center gap-3 w-[654px]">
            <a
              className="text-sm px-[14px] py-[10px] text-work-text bg-[#f4f8ff] rounded-lg"
              href="#"
            >
              Our Work
            </a>
            <h1 className="text-work-text text-5xl font-inter800 ">
              Portfolio
            </h1>
            <p className="text-work-text-gray">
              12 — SaaS companies we’ve helped in the past 24 months. Our
              holistic process takes care of discovery, branding, design, and
              development.
            </p>
          </div>
        </div>
        <div className="down relative">
          <div className="flex justify-between z-20">
          <img src="./img/work-menu/1.png" alt="" />
          <img className="-translate-y-10" src="./img/work-menu/2.png" alt="" />
          <img className="translate-y-5" src="./img/work-menu/3.png" alt="" />
          <img className="translate-y-10" src="./img/work-menu/4.png" alt="" />
          </div>
          <img className="absolute -bottom-16 left-1/2 -translate-x-1/2 -z-10" src="./img/work-menu/shap.png" alt="" />
          <img className="absolute -top-10 right-96" src="./img/work-menu/star1.png" alt="" />
          <img className="absolute top-0 right-72" src="./img/work-menu/star1.png" alt="" />
          <img className="absolute -top-10 right-52" src="./img/work-menu/star2.png" alt="" />
        </div>
      </div>
    </>
  );
}
