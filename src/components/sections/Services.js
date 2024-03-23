import Image from "next/image";
import React from "react";
import guide from "./../../../public/guide.png";
import easybooking from "./../../../public/easybooking.png";

const Services = () => {
  return (
    <div className="flex w-[1199px] h-[444px] mt-12 mx-auto ">
      <div className="flex flex-col w-[444px] h-full bg-blue-200 justify-center gap-4">
        <span className="uppercase text-[#F85E9F]">Services</span>
        <span className="text-4xl font-semibold">
          Our top value <br /> categories for you
        </span>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col text-center  p-16 w-[350px] h-full bg-slate-500 rounded-3xl">
          <div className="w-full h-2/6">
            <Image className="mx-auto" src={guide} alt="" />
          </div>
          <h2 className="h-2/6 font-semibold text-2xl p-3">Best Tour Guide</h2>
          <span className="p-3 h-2/6">
            What looked like a small patch of purple grass, above five feet.
          </span>
        </div>
        <div className="flex flex-col text-center  p-16 w-[350px] h-full bg-slate-500 rounded-3xl">
          <div className="w-full h-2/6">
            <Image className="mx-auto" src={easybooking} alt="" />
          </div>
          <h2 className="h-2/6 font-semibold text-2xl p-3">Easy Booking</h2>
          <span className="p-3 h-2/6">
            Square, was moving across the sand in their direction.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
