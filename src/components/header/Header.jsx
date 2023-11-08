import React, { useEffect, useState } from "react";
import logoipsum from "../../assets/logoipsum.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMenuFromServer } from "../../Redux/store/menu";
import useSize from "../../hooks/useSize";
export default function Header() {
  const dispatch = useDispatch();
  const menus = useSelector((store) => store.menu);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    dispatch(getMenuFromServer());
  }, []);
  return (
    <>
      <div className="relative">
        <div className="top flex justify-center gap-2 text-[8px] md:text-sm py-3 bg-gradient-to-r from-gradient-headerA1 via-gradient-headerA2 to-gradient-headerA3">
          <p className="text-gray-text1  font-inter500">
            Get Quick response via contact us on WhatsApp
          </p>
          <i className="bi bi-whatsapp"></i>
          <a className="font-inter600" href="#">
            +91 84695 47012
          </a>
        </div>
        <div className="down px-5 container flex items-center justify-between py-5">
          <div className="left flex gap-10">
            <img className="w-24 sm:w-auto" src={logoipsum} />
            <div className="input hidden lg:flex items-center bg-gradient-headerB2 px-3 rounded-xl ">
              <i className="bi bi-search"></i>
              <input
                placeholder="Search"
                className="p-2 bg-gradient-headerB2 outline-none"
                type="text"
              />
            </div>
          </div>
          <div className="right hidden lg:block text-sm font-inter500 text-gray-text2">
            {menus.map((item) => (
              <NavLink
                key={item.id}
                className={({ isActive }) =>
                  isActive
                    ? " bg-black-me text-white-me rounded-[10px] px-[14px] py-3"
                    : "px-[14px] py-3"
                }
                to={item.to}
              >
                {item.text}
              </NavLink>
            ))}
          </div>
          <div className="flex lg:hidden cursor-pointer">
            <div
              onClick={() => setIsShow((priv) => !priv)}
              className="flex flex-col gap-[5px]"
            >
              <span
                className={`w-6 h-[3px] duration-300 rounded-sm bg-slate-400 ${
                  isShow ? `rotate-45 translate-y-[8px]` : ""
                }`}
              ></span>
              <span
                className={`w-6 h-[3px] duration-300 rounded-sm bg-slate-400 ${
                  isShow ? `opacity-0` : ""
                }`}
              ></span>
              <span
                className={`w-6 h-[3px] duration-300 rounded-sm bg-slate-400 ${
                  isShow ? `-rotate-45 -translate-y-[8px]` : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
        <div onClick={()=>setIsShow(priv=>!priv)} className={`fixed duration-300 w-full z-10 h-screen bg-gray-400/30 backdrop-blur-md top-0 ring-0 ${isShow ? '' : 'opacity-0 scale-0'} lg:opacity-0 lg:scale-0`}></div>
        <div className={`fixed top-0 right-0 duration-300 bg-white-me/60 shadow-xl w-1/2 h-screen z-20 p-5 ${isShow ? '' : 'translate-x-full'} lg:translate-x-full`}>
          <div className="right flex flex-col gap-4 text-right text-xs sm:text-sm font-inter500 text-gray-text2">
          <div className="flex ">
            <div
              onClick={() => setIsShow((priv) => !priv)}
              className="flex flex-col gap-[5px] cursor-pointer"
            >
              <span
                className={`w-6 h-[3px] duration-300 rounded-sm bg-slate-400 ${
                  isShow ? `rotate-45 translate-y-[8px]` : ""
                }`}
              ></span>
              <span
                className={`w-6 h-[3px] duration-300 rounded-sm bg-slate-400 ${
                  isShow ? `opacity-0` : ""
                }`}
              ></span>
              <span
                className={`w-6 h-[3px] duration-300 rounded-sm bg-slate-400 ${
                  isShow ? `-rotate-45 -translate-y-[8px]` : ""
                }`}
              ></span>
            </div>
          </div>
            {menus.map((item) => (
              <NavLink
                onClick={(e)=>setIsShow(false)}
                key={item.id}
                className={({ isActive }) =>
                  isActive
                    ? " bg-black-me text-white-me rounded-[10px] px-[14px] py-3"
                    : "px-[14px] py-3"
                }
                to={item.to}
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
