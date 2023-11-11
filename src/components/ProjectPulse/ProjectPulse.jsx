import React from "react";

export default function ProjectPulse() {
  return (
    <>
        <div className="border flex flex-col gap-3 border-blue-100 shadow-lg rounded-2xl p-4">
          <div className="img w-full h-[269px] bg-slate-200 animate-pulse rounded-2xl"></div>
          <div className="date w-24 h-4 bg-slate-200 animate-pulse rounded-2xl"></div>
          <div className="date w-44 h-7 bg-slate-200 animate-pulse rounded-2xl"></div>
          <div className="date w-40 h-4 bg-slate-200 animate-pulse rounded-2xl"></div>
          <div className="date w-full h-4 bg-slate-200 animate-pulse rounded-2xl"></div>
          <div className="date w-2/3 h-4 bg-slate-200 animate-pulse rounded-2xl"></div>
        </div>
    </>
  );
}
