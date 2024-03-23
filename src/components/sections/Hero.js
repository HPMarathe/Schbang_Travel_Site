import Image from "next/image";
import React from "react";
import explore from "./../../../public/explore.png";
import demo from "./../../../public/demo.png";

const Hero = () => {
  return (
    <div className="w-[1199px] h-[713px] mt-32  mx-auto  ">
      <div className="flex items-center  ">
        <div className="w-[427px] h-[548px] bg-slate-600 relative">
          <div className="flex flex-col">
            <button className="bg-red-100 w-fit flex py-3 px-10 rounded-full text-center gap-2">
              <span className="text-[#F85E9F]  h-[17px]">
                Explore the world
              </span>
              <Image src={explore} alt="explore.png" />
            </button>
            <h1 className="w-full  text-6xl  font-semibold  bg-blue-300 my-8 leading-snug">
              Travel top <br />
              destination <br />
              of the world
            </h1>
            <p className="">
              We always make our customer happy by providing as many choices as
              possible{" "}
            </p>
          </div>
          <div className="flex gap-4 absolute bottom-0">
            <button className=" bg-[#5D50C6]  rounded-full text-white py-2 px-4">
              Get Started
            </button>
            <button className="flex gap-2 border border-gray-400 py-2 px-4 rounded-full">
              <Image src={demo} alt="demo.png" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="w-[772px] h-[713px] bg-blue-500">right</div>
      </div>
    </div>
  );
};

export default Hero;
