import React from "react";

export default function AboutMeQuestion() {
  return (
    <div>
      <div className="max-w-[435px]">
        <h2 className="text-2xl lg:text-5xl">Have Questions? Get in Touch!</h2>
        <p className="text-work-text-gray mt-5">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim.
        </p>
        <div className="contact gap-5 mt-5 flex flex-col">
          <div className="flex gap-5 items-center">
            <div className="left bg-[#edece2] w-14 h-14 rounded-xl flex justify-center items-center text-2xl">
              <i class="bi bi-geo-alt"></i>
            </div>
            <div className="right max-w-[328px]">
                <h4>India — 723 17th Street, Office 478 Mumbai, IM 81566</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="left bg-[#edece2] w-14 h-14 rounded-xl flex justify-center items-center text-2xl">
            <i class="bi bi-envelope"></i>
            </div>
            <div className="right max-w-[328px]">
                <h4>kiritgoti007@gmail.com</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="left bg-[#edece2] w-14 h-14 rounded-xl flex justify-center items-center text-2xl">
            <i class="bi bi-telephone"></i>
            </div>
            <div className="right max-w-[328px]">
                <h4>+91 846 954 7012</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
