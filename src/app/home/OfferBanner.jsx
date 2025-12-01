"use client";
import Image from "next/image";
import React from "react";

const OfferBanner = () => {
  return (
    <div className="pb-16">
      {/* Main Wrapper */}
      <div className="relative py-16 lg:py-28 overflow-hidden bg-gray-900">
        
        {/* --- Background Image & Overlay --- */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://themes.coderthemes.com/yum_r/assets/offer-bg-lZymwCiF.png')",
            backgroundSize: "cover",
            backgroundPosition: "center right", // মোবাইল ও ডেস্কটপ উভয়ের জন্য সেফ পজিশন
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Black Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 lg:bg-black/30"></div>
        </div>

        {/* --- Container --- */}
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            {/* --- LEFT SIDE: Content --- */}
            <div className="w-full lg:w-1/2 text-left relative">
              
              {/* Cursive Subtitle */}
              <h4
                className="text-yellow-500 text-xl md:text-2xl font-medium mb-4"
                style={{ fontFamily: '"Delicious Handrawn", cursive' }} // Syntax Fixed
              >
                Special Combo Offer
              </h4>

              {/* Main Title - Responsive Text Sizes */}
              <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white leading-tight">
                We make best Food in your town
              </h2>

              {/* Description Paragraph */}
              <p className="mb-8 text-sm md:text-base text-white/80 max-w-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>

              {/* Button & Price Wrapper */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Orange Button */}
                <button className="rounded-full bg-[#f58220] px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-bold text-white transition-all hover:bg-[#e07010] shadow-lg hover:shadow-orange-500/30">
                  Fill My Tummy
                </button>

                {/* Price Tag */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl md:text-3xl font-bold text-yellow-400">
                    $23.47
                  </span>
                  <span className="text-lg md:text-xl text-white/60 line-through Decoration-2">
                    $44.99
                  </span>
                </div>
              </div>
            </div>

            {/* --- RIGHT SIDE / DECORATIVE BADGE --- */}
            <div className="absolute bottom-4 right-4 lg:bottom-10 lg:left-[48%] animate-bounce-slow z-30">
              <div className="w-24 h-24 md:w-32 md:h-32 relative">
                 <Image
                  src={
                    "https://themes.coderthemes.com/yum_r/assets/offer-popup-MubBAgXN.svg"
                  }
                  alt="offer badge"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;