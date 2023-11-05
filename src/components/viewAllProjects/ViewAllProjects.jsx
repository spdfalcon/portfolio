import React from "react";
import CounterHome from "../CounterHome/CounterHome";

export default function ViewAllProjects() {
  return (
    <>
      <div className="m-12">
        <div className="title text-center w-full py-5 border-b-2 border-black-me">
          <h2 className="text-xl">View All Projects</h2>
        </div>
        <div className="all flex flex-col items-center gap-5 lg:flex-row py-28">
          <div className="left relative basis-1/2">
            <div className="hidden lg:block">
              <img src="./img/uiux/uiux.png" alt="" />
            </div>
            <div className="lg:absolute w-80 h-48 top-72 left-32 bg-black-me p-4 text-white-me">
              <span className="text-[13px]">01</span>
              <h3 className="text-2xl font-inter600">UI/UX Design</h3>
              <p className="text-sm mt-4">
                Expedita laborum suscipit sequi et nobis voluptas fuga placeat.
                Omnis est ratione. Repellendus recusandae a.
              </p>
            </div>
          </div>
          <div className="right basis-1/2">
            <p className="text-gray-text2">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              Wiusmod tempor incididunt.Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-5">
              <h2 className="text-[26px] font-inter600">UX/UI Design</h2>
              <div className="text-[26px] text-gray-text3">
                <h4>Branding</h4>
                <h4>Development</h4>
                <h4>Marketing</h4>
                <h4>Support</h4>
              </div>
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
