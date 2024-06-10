import React from "react";
import logo from "./../../../public/logo.jpeg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex-col w-full lg:flex lg:flex-row mx-auto items-center text-center max-w-[1440px] justify-around overflow-hidden">
        <div className="w-full flex justify-center items-center lg:block lg:w-1/3 mt-5 lg:mt-0">
        <div className="lg:w-full w-2/3 flex items-center justify-center">
        <Image
          className=""
          src={logo}
          alt="logo"
          width={400}
          layout="responsive"
        />
        </div>
        </div>
      {/* <div className="flex justify-center w-full m-4 lg:m-0 lg:w-20 sm:w-[145px] cursor-pointer">
      </div> */}
      <ul className="flex gap-1 md:gap-3 justify-around items-center md:max-w-[427px] text-black my-10 lg:m-0">
        <li className="text-xs rounded-md cursor-pointer sm:text-sm md:text-lg hover:bg-red-100">
          Home
        </li>
        <li className="text-xs rounded-md cursor-pointer sm:text-sm md:text-lg hover:bg-red-100">
          Discover
        </li>
        <li className="text-xs rounded-md cursor-pointer sm:text-sm md:text-lg hover:bg-red-100">
          Special Deals
        </li>
        <li className="text-xs rounded-md cursor-pointer sm:text-sm md:text-lg hover:bg-red-100">
          Contact
        </li>
      </ul>
      {/* <div className="flex justify-between">
        <button className="w-9 sm:w-14 mx-2 rounded-3xl max-w-[116px] h-[49px] text-xs sm:text-sm md:text-lg hover:scale-105 hover:bg-red-100">
          Log In
        </button>
        <button className="md:w-[116px] w-14 text-xs sm:text-sm md:text-lg bg-[#5D50C6] text-white rounded-lg m-1 md:rounded-full hover:bg-blue-400 y-4 hover:scale-105">
          Sign Up
        </button>
      </div> */}
    </div>
  );
};

export default Header;
