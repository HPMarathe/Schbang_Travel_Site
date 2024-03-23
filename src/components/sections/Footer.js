import React from "react";
import logo from "./../../../public/logo.png";
import Image from "next/image";
import twitter from "./../../../public/twitter.png";
import facebook from "./../../../public/facebook.png";
import instagram from "./../../../public/instagram.png";

const Footer = () => {
  return (
    <div className=" flex justify-around h-96 mb-4 md:h-[427px] md:w-[1440px]  bg-slate-300 m-auto mt-40 overflow-hidden">
      <div className="w-[281px] h-[full]  bg-fuchsia-300 relative">
        <div className="flex md:gap-3">
          <Image src={logo} alt="logo" />
          <span className="font-bold text-lg md:text-2xl">Travlog</span>
        </div>
        <span className="font-extralight text-lg md:text-xl pt-9">
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
        className="w-[676px] h-[256px] bg-slate-400 flex  justify-around
      "
      >
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-lg pr-2 md:text-2xl ">Company</h2>
          <span>About</span>
          <span>Career</span>
          <span>Mobile</span>
        </div>
        <div
          className="
        flex flex-col gap-5"
        >
          <h2 className="font-semibold text-lg pr-2 md:text-2xl ">Contact</h2>
          <span>Why Travlog?</span>
          <span>Partner with us</span>
          <span>FAQ’s</span>
          <span>Blog</span>
        </div>
        <div
          className=" w-48
        flex flex-col gap-5"
        >
          <h2 className="font-semibold text-lg  md:text-2xl ">Meet Us</h2>
          <span>+00 92 1234 56789</span>
          <span>Partner with us</span>
          <span>info@travlog.com</span>
          <span>205. R Street, New York BD23200</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
