import React from "react";
import { Link } from "react-router-dom";

export default function SingleWorkProjectBrief() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 mt-24">
        <div className="left">
            <div className="top">
                <Link to={''} className="py-[10px] px-[14px] bg-[#f4f8ff] rounded-md text-sm ">Our Work</Link>
                <h2 className="mt-5 text-5xl font-inter600">Project Brief</h2>
                <h4 className="mt-7 text-work-text-gray">Our Roles</h4>
            </div>
            <div className="mt-3 down grid grid-cols-2 gap-2 gap-x-40 w-fit text-lg">
                <h3 className="font-inter600 text-work-text">Branding</h3>
                <h3 className="font-inter600 text-work-text">UI/UX Design</h3>
                <h3 className="font-inter600 text-work-text">Web Design</h3>
                <h3 className="font-inter600 text-work-text">Development</h3>
            </div>
        </div>
        <div className="flex justify-center">
        <div className="right w-[487px] ">
            <div className="up text-work-text-gray">
            <p>Our job is to build your website so that it is functional and user friendly but at the same time attractive. My aim is to bring across your message and identity in the most creative way.</p>
            <p className="mt-6">I enjoy turning complex problems into simple, beautiful and intuitive interface designs. When I’m not coding or pushing pixels, you’ll find me in the pool or on the court shooting hoops.</p>
            </div>
            <div className="down mt-6 grid grid-cols-2 gap-y-7">
                <div className="">
                    <h4 className="text-work-text-gray ">Client</h4>
                    <h4 className="text-work-text font-inter600 text-lg">Revitalising </h4>
                </div>
                <div className="">
                    <h4 className="text-work-text-gray ">Role</h4>
                    <h4 className="text-work-text font-inter600 text-lg">Design & Development </h4>
                </div>
                <div className="">
                    <h4 className="text-work-text-gray ">Date</h4>
                    <h4 className="text-work-text font-inter600 text-lg">June 2020 </h4>
                </div>
                <div className="">
                    <h4 className="text-work-text-gray ">Share</h4>
                    <div className="text-work-text font-inter600 text-lg flex gap-4">
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}
