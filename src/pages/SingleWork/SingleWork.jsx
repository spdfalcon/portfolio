import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPortfolios } from "../../Redux/store/portfolio";
import SingleWorkSendlane from "../../components/SingleWorkSendlane/SingleWorkSendlane";
import SingleWorkProjectBrief from "../../components/SingleWorkProjectBrief/SingleWorkProjectBrief";
import SingleWorkProblems from "../../components/SingleWorkProblems/SingleWorkProblems";
import SingleWorkTheSolution from "../../components/SingleWorkTheSolution/SingleWorkTheSolution";
import SingleWorkTestimonials from "../../components/SingleWorkTestimonials/SingleWorkTestimonials";
import StartProject from "../../components/StartProject/StartProject";
import userScroll from "../../hooks/useScroll";
export default function SingleWork() {
  userScroll()
  return (
    <>
      <div className="mt-20">
        <div className="container">
          <SingleWorkSendlane></SingleWorkSendlane>
        </div>
        <SingleWorkProjectBrief></SingleWorkProjectBrief>
        <div className="container">
          <SingleWorkProblems></SingleWorkProblems>
        </div>
        <div>
          <SingleWorkTheSolution></SingleWorkTheSolution>
        </div>
        <div className="container">
          <SingleWorkTestimonials></SingleWorkTestimonials>
        </div>
        <StartProject></StartProject>
      </div>
    </>
  );
}
