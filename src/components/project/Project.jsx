import React from "react";

export default function Project() {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-tr from-gradient-boxA1 via-gradient-boxA2 to-gradient-boxA3 rounded-2xl overflow-hidden">
        <div className="img">
            <img className="w-full object-none" src="./img/projects/project1.png"/>
        </div>
        <div className="texts p-4">
            <span className="text-gray-text2 text-sm">May -July 2017</span>
            <h3 className="text-black-me text-2xl font-inter600">Grids & Alignment</h3>
            <h4 className="text-orange-text text-sm">Mobile, UX, Vivid, Concept</h4>
            <p className="text-gray-text2 text-sm ">Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.</p>
        </div>
      </div>
    </>
  );
}
