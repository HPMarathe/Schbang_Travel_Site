import React from "react";
import logo from "./../../../public/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex mx-auto items-center text-center max-w-[1440px] h-[113px] justify-around overflow-hidden">
      <div className="flex justify-between w-[145px] h-[40px]">
        <Image
          className="w-8 h-8 md:w-[40px] md:h-[40px]"
          src={logo}
          alt="logo"
        />
        <div className="w-[89px] h-[40px] flex text-sm items-center justify-between ">
          Travlog
        </div>
      </div>
      <ul className="flex gap-3 justify-around items-center bg-white  md:max-w-[427px] text-black">
        <li className="cursor-pointer text-sm">Home</li>
        <li className="cursor-pointer text-sm">Discover</li>
        <li className="cursor-pointer text-sm">Special Deals</li>
        <li className="cursor-pointer text-sm">Contact</li>
      </ul>
      <div className="flex justify-between">
        <button className="w-16 p-1 m-1 max-w-[116px] h-[49px] text-sm">
          Log In
        </button>
        <button className="md:w-[116px] min-w-20 text-sm h-[49px] bg-[#5D50C6]  rounded-full ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
