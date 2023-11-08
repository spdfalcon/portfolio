import React from "react";

export default function Project({img,date,title,type,desc}) {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-tr from-gradient-boxA1 via-gradient-boxA2 to-gradient-boxA3 rounded-2xl overflow-hidden">
        <div className="img">
            <img className="w-full object-none" src={img}/>
        </div>
        <div className="texts p-4">
            <span className="text-gray-text2 text-xs lg:text-sm">{date}</span>
            <h3 className="text-black-me text-lg lg:text-2xl font-inter600">{title}</h3>
            <h4 className="text-orange-text text-xs lg:text-sm">{type}</h4>
            <p className="text-gray-text2 text-xs lg:text-sm ">{desc}</p>
        </div>
      </div>
    </>
  );
}
