import Image from "next/image";
import React from "react";
import bannergirl from "./../../../public/bannergirl.png";
import ticket from "./../../../public/ticket.png";
import percent from "./../../../public/percent.png";

const DiscountPrice = () => {
  return (
    <div className="md:w-[1277px] md:h-[700px] flex flex-col md:flex-row mt-28 overflow-hidden m-auto items-center">
      {/* left */}
      <div className="relative">
        <div className="absolute right-14 top-28 flex gap-3 py-3 px-8 bg-white rounded-full items-center cursor-pointer hover:scale-105 hover:border border-red-200">
          <Image
            // className="w-screen sm:w-[450px] md:w-[780px]"
            src={percent}
            alt=""
          />
          <span className="text-lg font-semibold">Discounted Price</span>
        </div>
        <Image
          className="w-screen sm:w-[450px] md:w-[780px]"
          src={bannergirl}
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-center max-w-md md:w-[445px]  pl-2 gap-6 relative ">
        {/* Top */}
        <div className=" flex flex-col mt-10 px-8 gap-8">
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
        <div className="h-1/2 flex flex-col gap-6">
          {/* Top */}
          <div className="flex h-1/2 gap-6">
            <div className="w-1/2 h-40 bg-red-50  flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-400 hover:scale-105 hover:bg-red-100 cursor-pointer">
              <h2 className="text-[#FF5722] text-3xl">500+</h2>
              <h4>Holiday Package</h4>
            </div>
            <div className="w-1/2 bg-red-50 h-40 flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-400 hover:scale-105 hover:bg-red-100 cursor-pointer">
              <h2 className="text-[#FF5722] text-3xl">100+</h2>
              <h4>Luxury Hotel</h4>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex h-1/2 gap-6">
            <div className="w-1/2 bg-red-50 h-40 flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-400 hover:scale-105 hover:bg-red-100 cursor-pointer">
              <h2 className="text-[#FF5722] text-3xl">7+</h2>
              <h4>Premium Airlines</h4>
            </div>
            <div className="w-1/2 bg-red-50 h-40 flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-400 hover:scale-105 hover:bg-red-100 cursor-pointer">
              <h2 className="text-[#FF5722] text-3xl">2k+</h2>
              <h4>Happy Customer</h4>
            </div>
          </div>
        </div>
        <div className="w-auto cursor-pointer">
          <Image
            className="absolute -right-28 top-40 sm:top-40 md:bottom-16 md:-right-36"
            src={ticket}
            alt="ticket"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default DiscountPrice;
