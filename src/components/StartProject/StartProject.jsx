import React from "react";
import { Link } from "react-router-dom";

export default function StartProject() {
  return (
    <div className="mb-20">
      <div className="flex flex-col justify-center items-center text-center mt-20">
        <h2 className="text-2xl md:text-6xl lg:w-[716px] font-inter800">
          Have a project in mind? Let’s get to work.
        </h2>
        <Link to={'/contact-us'} className="text-xs md:text-xl px-4 py-3 md:px-5 md:py-4 bg-gradient-to-r from-gradient-boxB1 via-gradient-headerB2 to-gradient-boxB3 w-fit mt-16 rounded-2xl font-inter600">🦾 Start Project</Link>
      </div>
    </div>
  );
}
