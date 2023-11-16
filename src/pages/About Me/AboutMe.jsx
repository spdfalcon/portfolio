import React from "react";
import AboutmeHeader from "../../components/AboutmeHeader/AboutmeHeader";
import TeamPic from "../../components/TeamPic/TeamPic";
import SingleWorkSlider from "../../components/SingleWorkSlider/SingleWorkSlider";
import SingleWorkTestimonials from "../../components/SingleWorkTestimonials/SingleWorkTestimonials";
import StartProject from "../../components/StartProject/StartProject";
import userScroll from "../../hooks/useScroll";

export default function AboutMe() {
  userScroll()
  return (
    <div>
      <div className="container">
        <AboutmeHeader></AboutmeHeader>
      </div>
      <TeamPic></TeamPic>
      <div className="container">
        <div className="title text-center w-full py-5"></div>
        <div className="all flex flex-col items-center gap-5 lg:flex-row py-28">
          <div className="left relative basis-1/2">
            <div className="hidden lg:block">
              <img src="/img/uiux/uiux.png" alt="" />
            </div>
            <div className="lg:absolute w-80 h-48 top-72 left-32 bg-black-me p-4 text-white-me">
              <span className="text-[13px]">01</span>
              <h3 className="text-2xl font-inter600">Client Brief</h3>
              <p className="text-sm mt-4">
                Expedita laborum suscipit sequi et nobis voluptas fuga placeat.
                Omnis est ratione. Repellendus recusandae a.
              </p>
            </div>
          </div>
          <div className="right basis-1/2">
            <h4 className="text-gray-text2 ">HOW WE WORK</h4>
            <h2 className="text-2xl lg:text-5xl mt-5 text-work-text font-inter600">
              Our Design Process in Four Steps
            </h2>
            <p className="text-gray-text2 mt-5">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
            <div className="mt-5">
              <h2 className="text-[26px] font-inter600">01. Client Brief</h2>
              <div className="text-[26px] text-gray-text3">
                <h4>02. Analytics and Prototyping</h4>
                <h4>03. Design</h4>
                <h4>04. Launching and Support</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/img/Aboutme/1.png" alt="" />
      </div>
      <SingleWorkTestimonials></SingleWorkTestimonials>
      <StartProject></StartProject>
    </div>
  );
}
