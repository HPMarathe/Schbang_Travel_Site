import React from "react";
import expedia from "./../../../public/expedia.png";
import airbnb from "./../../../public/airbnb.png";
import tripadvisor from "./../../../public/tripadvisor.png";
import booking from "./../../../public/booking.png";
import orbitz from "./../../../public/orbitz.png";

import Image from "next/image";

const Bar = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row mx-auto items-center justify-around max-w-[1240px] overflow-hidden py-28">
      <Image className="" src={tripadvisor} alt="tripadvisor.png" />
      <Image src={expedia} alt="demo.png" />
      <Image src={booking} alt="demo.png" />
      <Image src={airbnb} alt="demo.png" />

      <Image
        // className="h-5 w-fit md:w-fit md:h-fit"
        // className="h-fit w-fit "
        src={orbitz}
        alt="demo.png"
      />
    </div>
  );
};

export default Bar;
