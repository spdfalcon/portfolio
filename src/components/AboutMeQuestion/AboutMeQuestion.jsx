import React from "react";

export default function AboutMeQuestion() {
  return (
    <div>
      <div className="max-w-[435px]">
        <h2 className="text-xl md:text-2xl lg:text-5xl">Have Questions? Get in Touch!</h2>
        <p className="text-work-text-gray mt-5 text-xs md:text-base">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim.
        </p>
        <div className="contact gap-5 mt-5 flex flex-col">
          <div className="flex gap-5 items-center">
            <div className="left bg-[#edece2] w-10 h-10 lg:w-14 lg:h-14  rounded-xl flex justify-center items-center lg:text-2xl">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="right text-xs lg:text-base max-w-[328px]">
                <h4>India — 723 17th Street, Office 478 Mumbai, IM 81566</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="left bg-[#edece2] w-10 h-10 lg:w-14 lg:h-14 rounded-xl flex justify-center items-center lg:text-2xl">
            <i className="bi bi-envelope"></i>
            </div>
            <div className="right text-xs lg:text-base max-w-[328px]">
                <h4>spd.mohammadreza@gmail.com</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="left bg-[#edece2] w-10 h-10 lg:w-14 lg:h-14 rounded-xl flex justify-center items-center lg:text-2xl">
            <i className="bi bi-telephone"></i>
            </div>
            <div className="right text-xs lg:text-base max-w-[328px]">
                <h4>+91 846 954 7012</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
