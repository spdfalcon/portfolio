import React from "react";

export default function SingleWorkSlider() {
  return (
    <>
      <div className="p-3 md:p-10 bg-[#F6F1F7] rounded-2xl">
        <div className="top flex justify-between gap-5 border-b-2 py-5 border-b-[#E8DBEC]">
          <div className="left xl:max-w-[671px] text-[7px] md:text-sm lg:text-xl leading-normal xl:text-[27px] text-work-text text-left">
            <p>
              Everyone on the team is expected to meet the same high standards
              and produce work of the highest calibre, Everyone on the team is
              expected to meet the same high standards
            </p>
          </div>
          <div className="right relative">
            <img className="" src="/img/SingleSlider/slider.png" alt="" />
            <img
              className="absolute left-2 bottom-2 "
              src="/img/SingleSlider/play.png"
              alt=""
              
            />
          </div>
        </div>
        <div className="down flex flex-col items-center md:flex-row justify-between mt-7">
            <div className="left flex items-center gap-3 text-left w">
                <div className="left w-7 h-7 md:w-12 md:h-12 rounded-full overflow-hidden bg-cover bg-current">
                    <img className="" src="/img/SingleSlider/slider.png" alt="" />
                </div>
                <div className="right">
                    <h4 className="text-[10px] font-inter300">Michael B. Jordan</h4>
                    <h4 className="text-[9px] md:text-sm ">VP of Marketing, disney</h4>
                </div>
            </div>
            <div className="right">
                <img className="w-10 md:w-auto" src="/img/SingleSlider/logo.png" alt="" />
            </div>
        </div>
        
      </div>
    </>
  );
}
