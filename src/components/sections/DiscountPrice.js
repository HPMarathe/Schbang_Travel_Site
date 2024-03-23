import Image from "next/image";
import React from "react";
import bannergirl from "./../../../public/bannergirl.png";

const DiscountPrice = () => {
  return (
    <div className="w-[1277px] h-[700px] flex">
      {/* left */}
      <div>
        <Image src={bannergirl} alt="" />
      </div>
      <div className="bg-blue-300 w-[445px] h-[667px] pl-2 mt-28"></div>
    </div>
  );
};

export default DiscountPrice;
