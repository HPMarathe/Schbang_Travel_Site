import Image from "next/image";
import React from "react";
import bannergirl from "./../../../public/bannergirl.png";

const DiscountPrice = () => {
  return (
    <div className="w-[1277px] md:h-[700px] flex flex-col md:flex-row mt-28 overflow-hidden m-auto">
      {/* left */}
      <div>
        <Image className="w-screen" src={bannergirl} alt="" />
      </div>
      <div className="bg-blue-300 flex flex-col justify-center max-w-md md:w-[445px]  pl-2 gap-6 ">
        {/* Top */}
        <div className=" bg-gray-300 flex flex-col px-8 gap-8">
          <span className="text-[#F85E9F] text-xl uppercase ">
            Travel Point
          </span>
          <span className="font-semibold text-4xl">
            We helping you find <br /> your dream location
          </span>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        {/* Bottom */}
        <div className="h-1/2 flex flex-col bg-gray-50  gap-6">
          {/* Top */}
          <div className="flex h-1/2 gap-6">
            <div className="w-1/2 bg-red-200 h-full flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200">
              <h2 className="text-[#FF5722] text-3xl">500+</h2>
              <h4>Holiday Package</h4>
            </div>
            <div className="w-1/2 bg-red-200 h-full flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200">
              <h2 className="text-[#FF5722] text-3xl">100+</h2>
              <h4>Luxury Hotel</h4>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex h-1/2 gap-6">
            <div className="w-1/2 bg-red-200 h-full flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200">
              <h2 className="text-[#FF5722] text-3xl">7+</h2>
              <h4>Premium Airlines</h4>
            </div>
            <div className="w-1/2 bg-red-200 h-full flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200">
              <h2 className="text-[#FF5722] text-3xl">2k+</h2>
              <h4>Happy Customer</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPrice;
