import Image from "next/image";
import React from "react";
import email from "./../../../public/email.png";
const NewsLetter = () => {
  return (
    <div className="w-screen md:w-[1110px] px-20 flex flex-col gap-16 mt-16 justify-center items-center m-auto h-[608px] bg-[#FACD4914] overflow-hidden">
      <div className="flex flex-col text-center gap-16 ">
        <span className="text-[#F85E9F] text-xl md:text-2xl  uppercase">
          subscribe to our newsletter
        </span>
        <span className="text-3xl md:text-5xl">
          Prepare yourself & let’s explore the beauty of the world
        </span>
      </div>
      <div className="flex w-10/12 gap-2 md:gap-10 ">
        <div className="w-full flex p-4 rounded-xl  bg-white">
          <Image src={email} className="mr-6" alt="email" />
          <input
            type="email"
            className="text-[#191825BF] "
            placeholder="Your Email"
          />
        </div>
        <button className="bg-[#5D50C6] md:w-2/12  md:text-xl p-3  rounded-xl text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
