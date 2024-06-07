import React from "react";
import logo from "./../../../public/logo.png";
import Image from "next/image";
import twitter from "./../../../public/twitter.png";
import facebook from "./../../../public/facebook.png";
import instagram from "./../../../public/instagram.png";

const Footer = () => {
  return (
    <div className=" flex justify-around h-96 mb-4 md:h-[427px] w-screen md:w-[1440px] m-auto mt-40 overflow-hidden">
      <div className="max-w-[281px] px-1 h-[full] flex flex-col relative">
        <div className="flex gap-1 cursor-pointer md:gap-3">
          <Image src={logo} className="w-5 h-5 my-auto" alt="logo" />
          <span className="font-bold sm:text-lg md:text-2xl">Travlog</span>
        </div>
        <span className="text-sm font-extralight sm:text-lg md:text-xl pt-9">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </span>
        {/* Icons */}
        <div className="absolute bottom-0 flex gap-2">
          <Image className="cursor-pointer" src={facebook} alt="facebook" />
          <Image className="cursor-pointer" src={twitter} alt="twitter" />
          <Image className="cursor-pointer" src={instagram} alt="instagram" />
        </div>
      </div>
      <div
        className="w-[676px] h-[256px] flex  justify-around
      "
      >
        <div className="flex flex-col gap-3 px-1 sm:gap-5">
          <h2 className="pr-2 font-semibold sm:text-lg md:text-2xl ">
            Company
          </h2>
          <span className="text-xs cursor-pointer sm:text-lg">About</span>
          <span className="text-xs cursor-pointer sm:text-lg">Career</span>
          <span className="text-xs cursor-pointer sm:text-lg">Mobile</span>
        </div>
        <div
          className="flex flex-col gap-3 px-1 sm:gap-5"
        >
          <h2 className="pr-2 font-semibold sm:text-lg md:text-2xl ">
            Contact
          </h2>
          <span className="text-xs cursor-pointer sm:text-lg">
            Why Khalid Travels And Trade links?
          </span>
          <span className="text-xs cursor-pointer sm:text-lg">
            Partner with us
          </span>
          <span className="text-xs cursor-pointer sm:text-lg">FAQ’s</span>
          <span className="text-xs cursor-pointer sm:text-lg">Blog</span>
        </div>
        <div
          className="flex flex-col gap-3 px-1 md:w-48 sm:gap-5"
        >
          <h2 className="font-semibold cursor-pointer sm:text-lg md:text-2xl ">
            Meet Us
          </h2>
          <span className="text-xs cursor-pointer sm:text-lg">
            +919820286814
          </span>
          <span className="text-xs cursor-pointer sm:text-lg">
            Khalidtntl@gmail.com
          </span>
          <span className="text-xs cursor-pointer sm:text-lg">
          A/001, SAKINA MANZIL, GROUND FLOOR, KAKA NAGAR, OPP. BOSTAN HOTEL, OLD MUMBAI PUNE ROAD, KAUSA MUMBRA, THANE, Maharashtra 400612, India
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
