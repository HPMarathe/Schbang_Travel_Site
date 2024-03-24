import React from "react";
import logo from "./../../../public/logo.png";
import Image from "next/image";
import twitter from "./../../../public/twitter.png";
import facebook from "./../../../public/facebook.png";
import instagram from "./../../../public/instagram.png";

const Footer = () => {
  return (
    <div className=" flex justify-around h-96 mb-4 md:h-[427px] md:w-[1440px] m-auto mt-40 overflow-hidden">
      <div className="w-[281px] px-1 h-[full]  relative">
        <div className="flex gap-1 md:gap-3">
          <Image src={logo} className="w-5 h-5" alt="logo" />
          <span className="font-bold sm:text-lg md:text-2xl">Travlog</span>
        </div>
        <span className="font-extralight text-sm sm:text-lg md:text-xl pt-9">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </span>
        {/* Icons */}
        <div className="flex absolute gap-2 bottom-0">
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
          <Image src={instagram} alt="instagram" />
        </div>
      </div>
      <div
        className="w-[676px] h-[256px] flex  justify-around
      "
      >
        <div className="flex flex-col gap-3 sm:gap-5 px-1">
          <h2 className="font-semibold text- sm:text-lg pr-2 md:text-2xl ">
            Company
          </h2>
          <span className="sm:text-lg text-xs">About</span>
          <span className="sm:text-lg text-xs">Career</span>
          <span className="sm:text-lg text-xs">Mobile</span>
        </div>
        <div
          className="
        flex flex-col gap-3 sm:gap-5 px-1"
        >
          <h2 className="font-semibold sm:text-lg pr-2 md:text-2xl ">
            Contact
          </h2>
          <span className=" sm:text-lg text-xs">Why Travlog?</span>
          <span className=" sm:text-lg text-xs">Partner with us</span>
          <span className=" sm:text-lg text-xs">FAQ’s</span>
          <span className=" sm:text-lg text-xs">Blog</span>
        </div>
        <div
          className=" md:w-48
        flex flex-col gap-3 sm:gap-5 px-1"
        >
          <h2 className="font-semibold  sm:text-lg  md:text-2xl ">Meet Us</h2>
          <span className="sm:text-lg text-xs">+00 92 1234 56789</span>
          <span className="sm:text-lg text-xs">info@travlog.com</span>
          <span className="sm:text-lg text-xs">
            205. R Street, New York BD23200
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
