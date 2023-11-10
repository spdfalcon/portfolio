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
        <div className="mt-20">
        <iframe
          className="rounded-xl w-full h-[650px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52993.009607584805!2d48.79491879935407!3d33.88802869575732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fec2860fa91d733%3A0x551664c49aac52d3!2z2KjYsdmI2KzYsdiv2Iwg2KfYs9iq2KfZhiDZhNix2LPYqtin2YbYjCDYp9uM2LHYp9mG!5e0!3m2!1sfa!2sde!4v1699651000963!5m2!1sfa!2sde"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
