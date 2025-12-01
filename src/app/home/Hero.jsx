import Image from "next/image";
import React from "react";
import download from "../../../public/assets/images/download.png";
import ava1 from "../../../public/assets/images/avatar1.png";
import ava2 from "../../../public/assets/images/avatar2.png";
import ava3 from "../../../public/assets/images/avatar3.png";
import hero from "../../../public/assets/images/hero.png";
import burger from "../../../public/assets/images/burger-1.svg";

const Hero = () => {
  return (
    <div className="bg-[#FFF8F5] overflow-hidden">
      <div className="container mx-auto relative">
        
        {/* Background Decorative Blob (Responsive Size) */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 px-5 md:px-10 py-12 lg:py-20 items-center">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          {/* Mobile: Order 2 (Text comes after image), Center Aligned */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#f58220] px-4 py-2 rounded-full text-sm font-medium mb-4 lg:mb-6">
              <span>#Special Food 🍇</span>
            </div>

            {/* Headline (Responsive Text Size) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] leading-tight lg:leading-normal mb-4 lg:mb-6 relative">
              We Offer{" "}
              <span className="relative inline-block z-10">
                Delicious
                <Image
                  src={download}
                  alt="download"
                  width={282}
                  height={90}
                  className="absolute top-0 -z-10 hidden h-full w-full lg:flex"
                />
              </span>{" "}
              <br className="hidden md:block" />
              <span className="text-[#f58220]">Food</span> And Quick <br className="hidden md:block" />
              Service
            </h1>

            {/* Subtext */}
            <p className="py-1 text-[#1e293b] text-base md:text-lg font-medium max-w-md mb-8 leading-relaxed mx-auto lg:mx-0">
              Imagine you dont need a diet because we provide healthy and
              delicious food for you!.
            </p>

            {/* Buttons (Centered on Mobile) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-12">
              {/* Order Now Button */}
              <button className="rounded-full cursor-pointer bg-[#f97316] px-8 py-4 lg:px-10 lg:py-5 font-medium text-white transition-all hover:bg-orange-600 shadow-lg shadow-orange-200">
                Order Now
              </button>

              {/* How to Order Button */}
              <button className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#f58220] group-hover:scale-110 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 lg:w-5 lg:h-5 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-semibold text-[#f58220]">
                  How to Order
                </span>
              </button>
            </div>

            {/* Social Proof (Centered on Mobile) */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                <div className="avatar border-white">
                  <div className="w-10 lg:w-12">
                    <Image src={ava1} alt="User" />
                  </div>
                </div>
                <div className="avatar border-white">
                  <div className="w-10 lg:w-12">
                    <Image src={ava2} alt="User" />
                  </div>
                </div>
                <div className="avatar border-white">
                  <div className="w-10 lg:w-12">
                    <Image src={ava3} alt="User" />
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-gray-800 text-sm">
                  Our Happy Customers
                </p>
                <div className="flex items-center justify-center md:justify-start gap-1 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black">4.7</span>
                  <span>(13.7k Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: IMAGE & FLOATING ELEMENTS --- */}
          {/* Mobile: Order 1 (Image comes first) */}
          <div className="relative px-4 py-2 flex justify-center order-1 lg:order-2">
            {/* Main Wrapper */}
            <div className="relative w-full max-w-[400px] lg:max-w-none">
              
              {/* Hero Img */}
              <Image
                src={hero}
                alt="Happy woman with salad"
                width={497}
                height={537}
                className="object-cover w-full h-auto"
                priority // Added priority for LCP optimization
              />

              {/* --- FLOATING ELEMENTS --- */}

              {/* 1. Fire Icon (Top Left) */}
              <div className="absolute top-0 left-0 md:left-4 lg:left-10 -rotate-40 rounded-full z-20">
                <span className="text-2xl">🔥</span>
              </div>

              {/* 2. Clock Icon (Top Right) */}
              <div className="absolute top-4 right-0 md:right-4 lg:top-10 lg:right-10 bg-[#facc15] p-2 lg:p-3 rounded-lg shadow-lg rotate-12 z-20 scale-75 lg:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 lg:h-6 lg:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* 3. Review Card (Floating Right) - Adjusted position for mobile */}
              <div className="absolute top-1/2 -right-2 md:-right-8 lg:-right-12 transform -translate-y-1/2 z-20 scale-90 lg:scale-100">
                {/* Dotted Arrow SVG (Hidden on Mobile) */}
                <svg
                  className="absolute -top-16 -left-16 w-20 h-20 text-yellow-400 pointer-events-none hidden lg:block"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M10,90 Q40,10 90,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="0"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>

                <div className="flex items-center gap-2 rounded-full bg-default-50 p-2 pe-4 lg:pe-6 bg-white shadow-xl border border-gray-100">
                  <Image
                    src={ava1}
                    alt="Jakob"
                    className="w-10 h-10 lg:w-16 lg:h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-bold text-gray-800">
                      Jakob Culhane
                    </p>
                    <p className="text-[9px] lg:text-[10px] text-gray-500">
                      Healthy & Delicious
                    </p>
                    <div className="flex text-yellow-400 text-xs lg:text-md">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Food Card (Floating Bottom Left) - Adjusted position for mobile */}
              <div className="absolute bottom-4 -left-2 md:-left-8 lg:bottom-10 lg:-left-12 z-20 scale-90 lg:scale-100">
                <div className="flex items-center gap-2 rounded-full bg-default-50 p-2 pe-4 lg:pe-6 bg-white shadow-xl border border-gray-100">
                  <Image
                    src={burger}
                    alt="Burger"
                    className="w-10 h-10 lg:w-16 lg:h-16 bg-[#f5822033] p-1 lg:p-2 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-bold text-gray-800">
                      MCD Veg Burger
                    </p>
     
                    <div className="flex text-yellow-400 text-xs lg:text-md">
                      ★★★★★
                    </div>
                    <h6 className="text-xs lg:text-sm font-bold text-gray-900">
                        <span className="text-[#f58220fc] mr-1">$</span>
                        8.14
                    </h6>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;