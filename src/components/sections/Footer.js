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
        <div className="flex gap-1 md:gap-3 cursor-pointer">
          <Image src={logo} className="w-5 h-5 my-auto" alt="logo" />
          <span className="font-bold sm:text-lg md:text-2xl">Travlog</span>
        </div>
        <span className="font-extralight text-sm sm:text-lg md:text-xl pt-9">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </span>
        {/* Icons */}
        <div className="flex absolute gap-2 bottom-0">
          <Image className="cursor-pointer" src={facebook} alt="facebook" />
          <Image className="cursor-pointer" src={twitter} alt="twitter" />
          <Image className="cursor-pointer" src={instagram} alt="instagram" />
        </div>
      </div>
      <div
        className="w-[676px] h-[256px] flex  justify-around
      "
      >
        <div className="flex flex-col gap-3 sm:gap-5 px-1">
          <h2 className="font-semibold sm:text-lg pr-2 md:text-2xl ">
            Company
          </h2>
          <span className="sm:text-lg cursor-pointer text-xs">About</span>
          <span className="sm:text-lg text-xs cursor-pointer">Career</span>
          <span className="sm:text-lg text-xs cursor-pointer">Mobile</span>
        </div>
        <div
          className="
        flex flex-col gap-3 sm:gap-5 px-1"
        >
          <h2 className="font-semibold sm:text-lg pr-2 md:text-2xl ">
            Contact
          </h2>
          <span className=" sm:text-lg text-xs cursor-pointer">
            Why Travlog?
          </span>
          <span className=" sm:text-lg text-xs cursor-pointer">
            Partner with us
          </span>
          <span className=" sm:text-lg text-xs cursor-pointer">FAQ’s</span>
          <span className=" sm:text-lg text-xs cursor-pointer">Blog</span>
        </div>
        <div
          className=" md:w-48
        flex flex-col gap-3 sm:gap-5 px-1"
        >
          <h2 className="font-semibold  sm:text-lg  md:text-2xl cursor-pointer ">
            Meet Us
          </h2>
          <span className="sm:text-lg text-xs cursor-pointer">
            +00 92 1234 56789
          </span>
          <span className="sm:text-lg text-xs cursor-pointer">
            info@travlog.com
          </span>
          <span className="sm:text-lg text-xs cursor-pointer">
            205. R Street, New York BD23200
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
