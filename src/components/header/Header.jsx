import React from "react";
import logoipsum from "../../assets/logoipsum.svg";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="top flex justify-center gap-2 text-sm py-3 bg-gradient-to-r from-gradient-headerA1 via-gradient-headerA2 to-gradient-headerA3">
          <p className="text-gray-text1  font-inter500">
            Get Quick response via contact us on WhatsApp
          </p>
          <i class="bi bi-whatsapp"></i>
          <a className="font-inter600" href="#">
            +91 84695 47012
          </a>
        </div>
        <div className="down container flex items-center justify-between py-5">
          <div className="left flex gap-10">
            <img src={logoipsum} />
            <div className="input flex items-center bg-gradient-headerB2 px-3 rounded-xl ">
              <i className="bi bi-search"></i>
              <input
                placeholder="Search"
                className="p-2 bg-gradient-headerB2 outline-none"
                type="text"
              />
            </div>
          </div>
          <div className="right text-sm font-inter500 text-gray-text2">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " bg-black-me text-white-me rounded-[10px] px-[14px] py-3"
                  : "px-[14px] py-3"
              }
              to={"/work"}
            >
              💼 Work
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " bg-black-me text-white-me rounded-[10px] px-[14px] py-3"
                  : "px-[14px] py-3"
              }
              to={"/about-me"}
            >
              😀 About Me
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " bg-black-me text-white-me rounded-[10px] px-[14px] py-3"
                  : "px-[14px] py-3"
              }
              to={"/"}
            >
              🤙 Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
