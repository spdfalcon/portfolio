import React from "react";
import WorkHeader from "../../components/WorkHeader/WorkHeader";
import WorkProjects from "../../components/WorkProjects/WorkProjects";
import StartProject from "../../components/StartProject/StartProject";
import userScroll from "../../hooks/useScroll";

export default function Work() {
  userScroll()
  return (
    <>
      <div>
        <WorkHeader></WorkHeader>
        <WorkProjects></WorkProjects>
        <StartProject></StartProject>
      </div>
    </>
  );
}
