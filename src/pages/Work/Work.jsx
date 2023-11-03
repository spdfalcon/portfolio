import React from "react";
import WorkHeader from "../../components/WorkHeader/WorkHeader";
import WorkProjects from "../../components/WorkProjects/WorkProjects";
import StartProject from "../../components/StartProject/StartProject";

export default function Work() {
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
