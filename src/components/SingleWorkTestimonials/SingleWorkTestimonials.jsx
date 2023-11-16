import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SingleWorkSlider from "../SingleWorkSlider/SingleWorkSlider";
export default function SingleWorkTestimonials() {
  const swiperRef = useRef(null);
  return (
    <>
      <div className="mt-20">
        <div>
          <h2 className="font-inter600 text-2xl lg:text-5xl text-center">
            Testimonials
          </h2>
        </div>
        <div className="relative flex justify-between items-center gap-5 text-center mt-10">
          <div
            className="py-2 px-5 bg-[#f4f8ff] rounded-[50px] cursor-pointer privEl "
            onClick={() => swiperRef.current.slidePrev()}
          >
            <i className="bi bi-arrow-left"></i>
          </div>
          <Swiper
            ref={swiperRef}
            navigation={{
              prevEl: ".privEl",
              nextEl: ".nextEl",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SingleWorkSlider></SingleWorkSlider>
            </SwiperSlide>
            <SwiperSlide>
              <SingleWorkSlider></SingleWorkSlider>
            </SwiperSlide>
            <SwiperSlide>
              <SingleWorkSlider></SingleWorkSlider>
            </SwiperSlide>
          </Swiper>
          <div
            className="py-2 px-5 bg-[#f4f8ff] rounded-[50px] cursor-pointer nextEl"
            onClick={() => swiperRef.current.slideNext()}
          >
            <i className="bi bi-arrow-right"></i>
          </div>
          <div className="absolute -top-8 left-28 z-10 hidden md:block">
            <img src="/img/SingleSlider/1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
