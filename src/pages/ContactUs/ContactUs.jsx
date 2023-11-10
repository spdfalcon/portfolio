import React from "react";
import AboutMeQuestion from "../../components/AboutMeQuestion/AboutMeQuestion";
import FormContactus from "../../components/FormContactus/FormContactus";

export default function ContactUs() {
  return (
    <>
      <div>
        <div className=" topheader flex flex-col items-center text-center py-12">
          <h1 className="text-3xl lg:text-5xl font-inter600 text-work-text">
          Contact Us
          </h1>
          <div className="mt-5 cursor-pointer">
            <i class="bi bi-arrow-down"></i>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 container">
        <AboutMeQuestion></AboutMeQuestion>
        <FormContactus></FormContactus>
        </div>
      </div>
    </>
  );
}
