import Image from "next/image";
import React from "react";
import country from "../../../public/assets/images/country.jpg";

const TopHeader = () => {
  return (
    <div className="bg-[#441507] text-white text-xs md:text-sm py-2 hidden md:flex">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">

        {/* Left: Country */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
          <Image src={country} alt="country" width={21} height={14} />
          <span>English (USA)</span>
        </div>

        {/* Middle: Offer */}
        <div className="text-center">
          <span className="font-normal">Free Delivery Over $50</span>
          <a href="#" className="ml-1 font-semibold underline hover:text-gray-200">
            Claim Offer
          </a>
        </div>

        {/* Right: Menu */}
        <div className="flex items-center gap-4 font-normal">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
