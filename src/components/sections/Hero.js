import Image from "next/image";
import React from "react";
import explore from "./../../../public/explore.png";
import demo from "./../../../public/demo.png";
import backgroundimg from "./../../../public/backgroundimg.png";
import rect1 from "./../../../public/Rectangle 1.png";
import rect2 from "./../../../public/Rectangle 2.png";
import rect3 from "./../../../public/Rectangle 3.png";

const Hero = () => {
  return (
    <div className="max-w-[1199px] h-[full] m-10 md:mt-28  mx-auto overflow-hidden">
      <div className="  md:flex md:flex-row md:items-center  gap-20 flex flex-col items-center">
        {/* Left */}
        <div className="w-[427px] h-[548px] bg-slate-100 relative">
          <div className="flex flex-col">
            <button className="bg-red-100 w-fit flex py-3 px-10 rounded-full text-center gap-2">
              <span className="text-[#F85E9F]  h-[17px]">
                Explore the world
              </span>
              <Image src={explore} alt="explore.png" />
            </button>
            <h1 className="w-full  text-6xl  font-semibold  bg-blue-100 my-8 leading-snug">
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
        {/* right */}
        <div className="w-screen  md:w-[772px] h-[713px]  relative ">
          <div className="absolute">
            {" "}
            <Image src={backgroundimg} className="" />
          </div>
          <div className=" absolute top-28 left-32  md:left-16 md:top-24 flex items-center gap-5">
            {/* left */}
            <div className="flex flex-col gap-4 w-48 md:w-full">
              <Image src={rect1} />
              <Image src={rect2} />
            </div>
            {/* right */}
            <div className=" w-48 md:w-full">
              <Image src={rect3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
