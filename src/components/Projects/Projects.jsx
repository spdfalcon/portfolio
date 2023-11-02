import React from "react";
import Project from "../project/Project";

export default function Projects() {
  return (
    <>
      <div className="">
        <h2 className="my-12 text-4xl font-inter600 text-black-me">Projects 😎🐱‍💻</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </div>
      </div>
    </>
  );
}
