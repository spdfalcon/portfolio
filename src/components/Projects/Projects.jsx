import React, { useEffect } from "react";
import Project from "../project/Project";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectFromServer } from "../../Redux/store/projects";
import ProjectPulse from "../ProjectPulse/ProjectPulse";

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.projects);
  console.log(projects);
  useEffect(() => {
    dispatch(getAllProjectFromServer());
  }, []);
  return (
    <>
      <div className="">
        <h2 className="my-12 text-2xl lg:text-4xl font-inter600 text-black-me">
          Projects 😎🐱‍💻
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects == "pending" &&
            Array(6)
              .fill(0)
              .map((item, index) => (
                <ProjectPulse></ProjectPulse>
              ))}
          {projects !== "pending" &&
            projects !== "rejected" &&
            projects.map((item) => (
              <Project
                key={item.id}
                img={item.img}
                date={item.date}
                title={item.title}
                type={item.type}
                desc={item.desc}
              ></Project>
            ))}
        </div>
      </div>
    </>
  );
}
