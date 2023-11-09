import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPortfolios } from "../../Redux/store/portfolio";
import SingleWorkSendlane from "../../components/SingleWorkSendlane/SingleWorkSendlane";
import SingleWorkProjectBrief from "../../components/SingleWorkProjectBrief/SingleWorkProjectBrief";
export default function SingleWork() {
  const portfolios = useSelector((store) => store.portfolios);
  const params = Number(useParams().workID);
  const dispatch = useDispatch();
  console.log(portfolios);
  console.log(params);
  const portfolio = portfolios.filter((item) => item.id === params);
  console.log(portfolio);
  useEffect(() => {
    dispatch(getPortfolios());
  }, []);
  return (
    <>
      <div className="mt-20 container">
        <div className="">
          <SingleWorkSendlane></SingleWorkSendlane>
          <SingleWorkProjectBrief></SingleWorkProjectBrief>
        </div>
      </div>
    </>
  );
}
