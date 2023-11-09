import React, { useEffect } from "react";
import WorkProject from "../WorkProject/WorkProject";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolios } from "../../Redux/store/portfolio";

export default function WorkProjects() {
  const portfolios = useSelector(store=>store.portfolios)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPortfolios())
  },[])
  return (
    <div className="container mt-44 grid grid-cols-1 lg:grid-cols-2 gap-y-20">
      {
        portfolios.map(item=>(
          <WorkProject
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            type1={item.type1}
            type2={item.type2}
            type3={item.type3}
          ></WorkProject>
        ))
      }
    </div>
  );
}
