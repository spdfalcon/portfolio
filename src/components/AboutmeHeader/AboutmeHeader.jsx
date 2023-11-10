import React from "react";
import CounterHome from "../CounterHome/CounterHome";

export default function AboutmeHeader() {
  return (
    <>
      <div>
        <div className="top flex flex-col items-center text-center py-12">
          <h1 className="text-3xl lg:text-5xl font-inter600 text-work-text">
            About Me
          </h1>
          <div className="flex justify-center mt-5">
            <p className="max-w-[607px] text-work-text-gray">
              12 — SaaS companies we’ve helped in the past 24 months. Our
              holistic process takes care of discovery, branding, design, and
              development.
            </p>
          </div>
          <div className="mt-5 cursor-pointer">
          <i class="bi bi-arrow-down"></i>
          </div>
        </div>
        <div className="down grid grid-cols-1 lg:grid-cols-2">
          <div className="left flex justify-center">
            <img src="/img/uiux/uiux.png" alt="" />
          </div>
          <div className=" right mt-5 lg:mt-0">
            <h2 className="text-3xl lg:text-5xl font-inter600 text-work-text">
              Infuse Your Brand with Excellence
            </h2>
            <p className="mt-5 max-w-[607px] text-work-text-gray">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex gap-2">
                <i class="bi bi-check-circle"></i>
                <h4>Adipiscing eli sed eiusmod</h4>
              </div>
              <div className="flex gap-2">
                <i class="bi bi-check-circle"></i>
                <h4>Tempor incididunt</h4>
              </div>
              <div className="flex gap-2">
                <i class="bi bi-check-circle"></i>
                <h4>Labore et dolore magna</h4>
              </div>
              <button className="text-xl px-5 py-4 bg-gradient-to-r from-gradient-boxB1 via-gradient-headerB2 to-gradient-boxB3 w-fit mt-16 rounded-2xl font-inter600 ">🦾 Contact Us</button>
            </div>
          </div>
        </div>
        <div className="numbers py-12 flex justify-between items-center">
            <CounterHome title={'Project'} count={98}></CounterHome>
            <span className="w-px h-10 lg:h-16 bg-[#dee2d2]"></span>
            <CounterHome title={'People'} count={65}></CounterHome>
            <span className="w-px h-10 lg:h-16 bg-[#dee2d2]"></span>
            <CounterHome title={'Years'} count={10}></CounterHome>
            <span className="w-px h-10 lg:h-16 bg-[#dee2d2]"></span>
            <CounterHome title={'Offices'} count={15}></CounterHome>
        </div>
      </div>
    </>
  );
}
