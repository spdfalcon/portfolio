import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import './SingleWorkProblems.css'
export default function SingleWorkProblems() {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-3xl lg:text-5xl font-inter600">Problems</h2>
        <div className="text-work-text-gray text-xs lg:text-base mt-11 max-w-[1032px]">
          <p>
            Our eCommerce design starts and ends with a best-in-class experience
            strategy that builds brands and drives transactions.
          </p>
          <p className="mt-6">
            My job is to build your website so that it is functional and user
            friendly but at the same time attractive. My aim is to bring across
            your message and identity in the most creative way. It’s time to
            bring it all together. Nothing is more rewarding for me than making
            great work for clients with meaningful missions.
          </p>
        </div>
        <div className="flex justify-center mt-20">
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable:true
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className=""><div><img src="/img/SingleWorkProblems/problem.png" alt="" /></div></SwiperSlide>
            <SwiperSlide className=""><div><img src="/img/SingleWorkProblems/problem.png" alt="" /></div></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
