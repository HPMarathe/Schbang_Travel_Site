import React from "react";
import logo from "./../../../public/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex mx-auto items-center text-center max-w-[1440px] h-[113px] bg-black text-white justify-around">
      <div className="flex justify-between w-[145px] h-[40px]">
        <Image className="w-[40px] h-[40px]" src={logo} alt="logo" />
        <div className="w-[89px] h-[40px] flex items-center justify-between ">
          Travlog
        </div>
      </div>
      <ul className="flex gap-3 justify-around items-center bg-white max-w-[427px] text-black">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Discover</li>
        <li className="cursor-pointer">Special Deals</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-3 justify-between">
        <button className=" w-[221px] h-[49px]">Log In</button>
        <button className="w-[116px] h-[49px] bg-[#5D50C6]  rounded-full ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
