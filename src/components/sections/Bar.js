import React from "react";
import expedia from "./../../../public/expedia.png";
import airbnb from "./../../../public/airbnb.png";
import tripadvisor from "./../../../public/tripadvisor.png";
import booking from "./../../../public/booking.png";
import orbitz from "./../../../public/orbitz.png";

import Image from "next/image";

const Bar = () => {
  return (
    <div className="flex mx-auto items-center justify-around max-w-[1240px] h-[113px] ">
      <Image src={tripadvisor} alt="tripadvisor.png" />
      <Image src={expedia} alt="demo.png" />
      <Image src={booking} alt="demo.png" />
      <Image src={airbnb} alt="demo.png" />

      <Image src={orbitz} alt="demo.png" />
    </div>
  );
};

export default Bar;
