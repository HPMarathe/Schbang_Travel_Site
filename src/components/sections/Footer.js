import React from "react";
import logo from "./../../../public/logo.jpeg";
import Image from "next/image";
import twitter from "./../../../public/twitter.png";
import facebook from "./../../../public/facebook.png";
import instagram from "./../../../public/instagram.png";

const Footer = () => {
  return (
    <div className="lg:flex lg:flex-row flex-col justify-between mb-4 md:h-[427px] w-screen md:w-[1440px] m-auto mt-40 overflow-hidden relative">
      <div className="lg:max-w-[350px] max-w-full pl-3 lg:pl-0 flex flex-col relative mb-10 lg:mb-0">
        <div className="flex gap-1 cursor-pointer md:gap-3">
          <Image src={logo} className="w-64 h-20 my-auto" alt="logo" />
        </div>
        <span className="text-sm font-extralight sm:text-lg md:text-xl lg:pt-9 pt-4">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </span>
      </div>
      <div className="w-full flex flex-col lg:flex lg:flex-row justify-evenly pl-3 lg:pl-0">
        <div className="flex flex-col gap-3 px-1 sm:gap-5">
          <h2 className="pr-2 font-semibold pt-3 lg:pt-0 sm:text-lg md:text-2xl">
            Company
          </h2>
          <span className="text-xs cursor-pointer sm:text-lg">About</span>
          <span className="text-xs cursor-pointer sm:text-lg">Career</span>
          <span className="text-xs cursor-pointer sm:text-lg">Mobile</span>
        </div>
        <div className="flex flex-col gap-3 px-1 sm:gap-5">
          <h2 className="pr-2 font-semibold pt-3 lg:pt-0 sm:text-lg md:text-2xl">
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
        <div className="flex flex-col gap-3 px-1 md:w-48 sm:gap-5">
          <h2 className="font-semibold pt-3 lg:pt-0 cursor-pointer sm:text-lg md:text-2xl">
            Meet Us
          </h2>
          <span className="text-xs cursor-pointer sm:text-lg">+919820286814</span>
          <span className="text-xs cursor-pointer sm:text-lg">
            Khalidtntl@gmail.com
          </span>
          <span className="text-xs cursor-pointer sm:text-lg max-w-56">
            A/001, SAKINA MANZIL, GROUND FLOOR, KAKA NAGAR, OPP. BOSTAN HOTEL, OLD MUMBAI PUNE ROAD, KAUSA MUMBRA, THANE, Maharashtra 400612, India
          </span>
        </div>
      </div>
      {/* Icons */}
      <div className="absolute bottom-0 lg:right-auto lg:left-1  right-3 flex justify-center gap-2 pt-10">
        <Image className="cursor-pointer" src={facebook} alt="facebook" />
        <Image className="cursor-pointer" src={twitter} alt="twitter" />
        <Image className="cursor-pointer" src={instagram} alt="instagram" />
      </div>
    </div>
  );
};

export default Footer;
