import React from "react";
import logo from "./../../../public/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex mx-auto items-center text-center max-w-[1440px] h-[113px] justify-around overflow-hidden">
      <div className="flex justify-between w-20 sm:w-[145px] h-[40px] cursor-pointer">
        <Image
          className="w-5 h-5 sm:w-8 sm:h-8 md:w-[40px] md:h-[40px] my-auto"
          src={logo}
          alt="logo"
        />
        <div className="w-[89px] h-[40px] flex font-bold text-sm sm:text-xl md:text-2xl items-center justify-between ">
          Travlog
        </div>
      </div>
      <ul className="flex gap-1 md:gap-3 justify-around items-center  md:max-w-[427px] text-black">
        <li className="cursor-pointer text-xs sm:text-sm md:text-lg hover:bg-red-100 rounded-md">
          Home
        </li>
        <li className="cursor-pointer text-xs sm:text-sm md:text-lg hover:bg-red-100 rounded-md">
          Discover
        </li>
        <li className="cursor-pointer text-xs sm:text-sm md:text-lg hover:bg-red-100 rounded-md">
          Special Deals
        </li>
        <li className="cursor-pointer text-xs sm:text-sm md:text-lg hover:bg-red-100 rounded-md ">
          Contact
        </li>
      </ul>
      <div className="flex justify-between">
        <button className="w-9 sm:w-14 mx-2 rounded-3xl max-w-[116px] h-[49px] text-xs sm:text-sm  md:text-lg  hover:scale-105 hover:bg-red-100">
          Log In
        </button>
        <button className="md:w-[116px] w-14   text-xs  sm:text-sm  md:text-lg bg-[#5D50C6] text-white rounded-lg m-1 md:rounded-full hover:bg-blue-400 y-4  hover:scale-105">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
