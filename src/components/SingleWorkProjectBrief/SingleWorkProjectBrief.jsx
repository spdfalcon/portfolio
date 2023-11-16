import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPortfolios } from "../../Redux/store/portfolio";
import ProjectPulse from "../ProjectPulse/ProjectPulse";

export default function SingleWorkProjectBrief() {
  const portfolios = useSelector((store) => store.portfolios);
  const params = Number(useParams().workID);
  const dispatch = useDispatch();
  const portfolio =
    portfolios !== "pending" && portfolios !== "rejected"
      ? portfolios.filter((item) => item.id === params)
      : "";
  useEffect(() => {
    dispatch(getPortfolios());
  }, []);
  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-2 mt-24 lg:gap-y-20 gap-y-6">
        <div className="left">
          <div className="top">
            <Link
              to={""}
              className="py-[10px] px-[14px] bg-[#f4f8ff] rounded-md text-sm "
            >
              Our Work
            </Link>
            <h2 className="mt-5 text-3xl lg:text-5xl font-inter600">
              Project Brief
            </h2>
            <h4 className="mt-7 text-work-text-gray text-sm lg:text-base">
              Our Roles
            </h4>
          </div>
          <div className="mt-3 down grid grid-cols-2 gap-2 gap-x-40 w-fit text-sm lg:text-lg">
            <h3 className="font-inter600 text-work-text">Branding</h3>
            <h3 className="font-inter600 text-work-text">UI/UX Design</h3>
            <h3 className="font-inter600 text-work-text">Web Design</h3>
            <h3 className="font-inter600 text-work-text">Development</h3>
          </div>
        </div>
        <div className="lg:flex lg:justify-center">
          <div className="right max-w-[487px] ">
            <div className="up text-work-text-gray text-xs lg:text-base">
              <p>
                Our job is to build your website so that it is functional and
                user friendly but at the same time attractive. My aim is to
                bring across your message and identity in the most creative way.
              </p>
              <p className="mt-6">
                I enjoy turning complex problems into simple, beautiful and
                intuitive interface designs. When I’m not coding or pushing
                pixels, you’ll find me in the pool or on the court shooting
                hoops.
              </p>
            </div>
            <div className="down mt-6 text-sm lg:text-base  grid grid-cols-2 gap-y-7">
              <div className="">
                <h4 className="text-work-text-gray ">Client</h4>
                <h4 className="text-work-text font-inter600 text-sm lg:text-lg">
                  Revitalising{" "}
                </h4>
              </div>
              <div className="">
                <h4 className="text-work-text-gray ">Role</h4>
                <h4 className="text-work-text font-inter600 text-sm lg:text-lg">
                  Design & Development{" "}
                </h4>
              </div>
              <div className="">
                <h4 className="text-work-text-gray ">Date</h4>
                <h4 className="text-work-text font-inter600 text-sm lg:text-lg">
                  June 2020{" "}
                </h4>
              </div>
              <div className="">
                <h4 className="text-work-text-gray ">Share</h4>
                <div className="text-work-text font-inter600 text-sm lg:text-lg flex gap-4">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF%D8%B1%D8%B6%D8%A7-%DA%AF%D9%88%D8%AF%D8%B1%D8%B2%DB%8C-b77646264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a target="_blank" href="https://github.com/spdfalcon">
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/spd.mohammadreza/?next=%2F"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a target="_blank" href="https://t.me/spdmohammadreza">
                    <i className="bi bi-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 mt-10 flex justify-center bg-[#f4f8ff]">
        <div className="relative">
          {portfolios == "pending" && (
            <div className="w-96">
              <ProjectPulse></ProjectPulse>
            </div>
          )}
          {portfolios !== "pending" && portfolios !== "rejected" && (
            <img className="" src={portfolio[0] && portfolio[0].img} />
          )}
          <img
            className="hidden xl:block absolute bottom-0 -left-32"
            src="/img/SingleWorkProjectBrief/women.png"
          />
          <img
            className="hidden xl:block absolute bottom-1/2 translate-y-1/2 -right-32"
            src="/img/SingleWorkProjectBrief/2.png"
          />
        </div>
      </div>
    </>
  );
}
