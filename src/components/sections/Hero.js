import Image from "next/image";
import React from "react";
import explore from "./../../../public/explore.png";
import demo from "./../../../public/demo.png";
import backgroundimg from "./../../../public/backgroundimg.png";
import rect1 from "./../../../public/rectangle1.png";
import rect2 from "./../../../public/rectangle2.png";
import rect3 from "./../../../public/rectangle3.png";
import heroimg from "./../../../public/heroimg.png";

const Hero = () => {
  return (
    <div className="max-w-[1199px] h-[full] m-10 md:mt-28  mx-auto overflow-hidden">
      <div className="md:flex-row md:items-center gap-6  md:gap-20 flex flex-col items-center">
        {/* Left */}
        <div className="w-[427px] h-[548px] px-8  relative">
          <div className="flex flex-col">
            <button className="bg-red-100 w-fit flex py-3 px-10 rounded-full text-center gap-2 hover:bg-red-200 hover:scale-105">
              <span className="text-[#F85E9F]  h-[17px]">
                Explore the world
              </span>
              <Image src={explore} alt="explore.png" />
            </button>
            <h1 className="w-full text-5xl sm:text-6xl  font-semibold  my-8 leading-snug">
              Travel <span className="text-[#F85E9F]">top destinations </span>
              of the world
            </h1>
            <p className="">
              We always make our customer happy by providing as many choices as
              possible{" "}
            </p>
          </div>
          <div className="flex gap-4 absolute bottom-14 md:bottom-0">
            <button className=" bg-[#5D50C6]  rounded-full text-white py-2 px-4 hover:bg-blue-400  hover:scale-105">
              Get Started
            </button>
            <button className="flex gap-2 border border-gray-400 py-2 px-4 rounded-full hover:bg-blue-100  hover:scale-105">
              <Image src={demo} alt="demo.png" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
        {/* right */}
        {/* <div className="w-screen  md:w-[772px] h-[713px]  relative ">
          <div className="absolute">
            {" "}
            <Image src={backgroundimg} className="z-10" />
          </div>
          <div className=" absolute top-16 sm:top-16 sm:left-16  md:left-16 md:top-24 flex items-center gap-5">
            <div className="flex flex-col gap-4 w-48 md:w-full">
              <Image src={rect1} />
              <Image src={rect2} />
            </div>
            <div className=" w-48 md:w-full">
              <Image src={rect3} />
            </div>
          </div>
        </div> */}
        <div className="cursor-pointer">
          <Image src={heroimg} alt="hero.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
