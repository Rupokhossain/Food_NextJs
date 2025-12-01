import Image from "next/image";
import React from "react";
import { IoCallOutline } from "react-icons/io5";

const Download = () => {
  return (
    <div className="py-8 lg:py-14 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="rounded-2xl bg-[#f582201a]">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            
            {/* --- Left Content Section --- */}
            <div className="relative h-full p-6 md:p-12 lg:p-20 flex flex-col items-start">
              {/* Pill Badge */}
              <div className="mb-6 inline-flex rounded-full px-4 py-2 text-sm text-[#f58220] bg-[#f5822033]">
                <span className="text-sm font-medium text-[#FF7D29]">
                  Download App
                </span>
              </div>
              
              {/* Heading */}
              <h2 className="mb-6 max-w-sm text-3xl/relaxed font-semibold text-gray-900">
                Get Started With Us Today!
              </h2>

              {/* Description */}
              <p className="mb-8 max-w-md text-base text-gray-700 leading-relaxed">
                Discover food wherever and whenever and get your food delivered
                quickly.
              </p>

              {/* CTA Button */}
              <button className="bg-[#F58220] hover:bg-[#e07010] text-white font-semibold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-lg shadow-orange-500/30 cursor-pointer transition-all duration-300 mb-8 lg:mb-16">
                Order Now
              </button>

              {/* Floating Emojis (Hidden on mobile) */}
              <span className="absolute right-10 top-1/3 rotate-45 text-xl hidden md:block">
                😃
              </span>
              <span className="absolute right-0 top-1/2 rotate-45 text-xl hidden md:block">
                🔥
              </span>
              <span className="absolute bottom-40 right-40 hidden lg:inline-flex h-2 w-2 items-center justify-center rounded-full bg-[#f58220] text-white"></span>

              {/* --- Richard Watson Card (HIDDEN on Mobile/Tablet, VISIBLE on LG) --- */}
              <div className="hidden lg:block absolute -right-6 bottom-10 z-20">
                <div className="rounded-full bg-white p-2 shadow-lg animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-full border border-gray-100">
                      <Image
                        src="https://themes.coderthemes.com/yum_r/assets/avatar4-MaO1PBFO.png"
                        alt="Richard Watson"
                        width={200}
                        height={200}
                        className="object-cover h-full w-full"
                      />
                    </div>

                    <div>
                      <h6 className="mb-1 text-base font-medium text-[#0f172a]">
                        Richard Watson
                      </h6>
                      <p className="text-sm font-medium text-[#64748b]">
                        Food Courier
                      </p>
                    </div>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#f58220] text-white">
                      <IoCallOutline className="text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Right Image Section --- */}
            <div className="relative px-4 pt-0 md:px-10 lg:px-20 lg:pt-20 flex justify-center lg:block">
              <div className="relative w-full max-w-[400px] lg:max-w-full">
                <Image
                  src="https://themes.coderthemes.com/yum_r/assets/mockup-Lbl8JI0l.png"
                  alt="download app mockup"
                  width={532}
                  height={518}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative Icons */}
              <div className="absolute bottom-10 right-4 lg:bottom-28 lg:right-10 -rotate-45 text-2xl lg:text-3xl animate-bounce">
                <span>🔥</span>
              </div>
              <div className="absolute right-1/4 top-4 lg:top-12 -rotate-45 text-xl animate-pulse">
                <span>🤩</span>
              </div>
              
              {/* Dots */}
              <div className="absolute bottom-5 right-1/3 lg:bottom-10 lg:right-20 hidden md:inline-flex h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="absolute right-5 top-1/3 lg:right-10 lg:top-1/4 hidden md:inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;