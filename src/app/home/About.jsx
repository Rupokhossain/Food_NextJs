import Image from "next/image";
import React from "react";
import pizzaImage from "../../../public/assets/images/about.png"; 

import avatar from "../../../public/assets/images/avatar3.png";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="relative w-full h-full min-h-[400px] flex justify-center items-center bg-gray-50 rounded-3xl overflow-hidden order-1 lg:order-1 cursor-pointer">
            
            <Image
              src={pizzaImage}
              alt="Delicious Pizza"
              width={600}
              height={600}
              className="object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="flex flex-col justify-center order-2 lg:order-2">
            {/* Badge */}
            <div className="w-fit bg-orange-100 text-[#f58220] px-5 py-1.5 rounded-full text-sm font-medium mb-6">
              About Us
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] leading-tight mb-6">
              Where quality food meet{" "}
              <span className="text-[#1e293b]">Excellent services.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
              It’s the perfect dining experience where every dish is crafted
              with fresh, high-quality ingredients and served by friendly staff
              who go.
            </p>

            {/* Features Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {/* Card 1: Fast Foods */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 text-center sm:text-left hover:shadow-lg transition-shadow cursor-pointer duration-300">
                <div className="bg-pink-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0 text-2xl">
                  🍔
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Fast Foods
                </h3>
                <p className="text-sm text-gray-500">
                  Healthy Foods are nutrient-Dense Foods
                </p>
              </div>

              {/* Card 2: Healthy Foods */}
              <div className="bg-white p-6 rounded-2xl cursor-pointer duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 text-center sm:text-left hover:shadow-lg transition-shadow">
                <div className="bg-yellow-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0 text-2xl">
                  🥗
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Healthy Foods
                </h3>
                <p className="text-sm text-gray-500">
                  Healthy Foods are nutrient-Dense Foods
                </p>
              </div>

              {/* Card 3: Fast Delivery */}
              <div className="bg-white p-6 rounded-2xl cursor-pointer duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 text-center sm:text-left hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0 text-2xl">
                  🚚
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-sm text-gray-500">
                  Healthy Foods are nutrient-Dense Foods
                </p>
              </div>
            </div>

            {/* Founder Section */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={avatar}
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg">
                  Marley Culhane
                </h4>
                <p className="text-gray-500 text-sm">Founder CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
