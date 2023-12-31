import React from "react";
import { Link } from "react-router-dom";
export default function Fwork({ id, bg, img, title }) {
  return (
    <Link className="flex justify-center items-center" to={`/work/${id}`}>
      <div className="flex justify-center items-center w-[160px]">
        <div
          className={`md:py-10 md:px-10 py-4 ${bg} flex flex-col items-center justify-center gap-2 rounded-xl w-full h-full`}
        >
          <img className="" src={img} />
          <span className="">{title}</span>
        </div>
      </div>
    </Link>
  );
}
