import React from "react";

export default function SingleWorkSendlane() {
  return (
    <div>
      <div>
        <h4 className="text-dark1 text-xs md:text-sm lg:text-base xl:text-xl">Sendlane —</h4>
        <h1 className="font-inter800 md:text-2xl lg:text-4xl xl:text-[50px] lg:leading-tight max-w-[940px] mt-7">
          Revitalising the website and brand for a premier automated marketing
          platform.
        </h1>
        <div className="mt-8 grid grid-cols-4 relative">

            <img className="absolute -top-3 w-full scale-105" src="/img/singlePage/shapeup.png"  />
            <img className="absolute -bottom-3 w-full scale-105" src="/img/singlePage/shapedown.png"  />
            <img className="" src="/img/singlePage/1.png"  />
            <img className="" src="/img/singlePage/2.png"  />
            <img className="" src="/img/singlePage/3.png"  />
            <img className="" src="/img/singlePage/4.png"  />
        </div>
      </div>
    </div>
  );
}
