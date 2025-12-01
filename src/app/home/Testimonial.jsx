"use client";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Will Byers",
    role: "Food Enthusiast",
    rating: 5,
    image: "https://themes.coderthemes.com/yum_r/assets/avatar1-lkSFncXM.png",
    review:
      "Food is the best. Besides the many and delicious meals, the service is also very good, especially in the very fast delivery. I highly recommend Food to you.",
  },
  {
    id: 2,
    name: "Eleven Hopper",
    role: "Food Blogger",
    rating: 4,
    image: "https://themes.coderthemes.com/yum_r/assets/avatar2-e3ZdIYj6.png",
    review:
      "Absolutely loved the ambiance and the taste! The burger was juicy and perfectly grilled. The staff was super friendly. Will visit again soon!",
  },
  {
    id: 3,
    name: "Mike Wheeler",
    role: "Chef",
    rating: 5,
    image: "https://themes.coderthemes.com/yum_r/assets/avatar3-vjEY6IHW.png",
    review:
      "As a chef, I am very picky about ingredients. This place uses the freshest vegetables and meat. A solid 10/10 from me!",
  },
  {
    id: 4,
    name: "Max Mayfield",
    role: "Regular Customer",
    rating: 5,
    image: "https://themes.coderthemes.com/yum_r/assets/avatar4-MaO1PBFO.png",
    review:
      "Quick delivery and hot food! I ordered the spicy noodles and they were exactly what I needed. Best service in town.",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = testimonials[activeIndex];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* --- LEFT SIDE: Image & Floating Card --- */}
          <div className="mx-auto lg:mx-0">
            {/* Image Wrapper for responsive control */}
            <div className="relative">
              
              {/* Main Image */}
              <Image
                src="https://themes.coderthemes.com/yum_r/assets/testimonial-img--yJK1ugQ.png"
                alt="Happy Customer"
                width={470}
                height={525}
                className=" object-contain z-10 relative"
              />

              {/* Floating Reviewers Card */}
              {/* Responsive Positioning: Adjusted right/bottom for mobile vs desktop */}
              <div className="absolute -bottom-6 -right-2 sm:right-0 md:-right-8 lg:right-4 xl:right-16 bg-white p-4 md:p-6 rounded-2xl shadow-xl z-20 animate-bounce-slow max-w-[220px] md:max-w-none">
                <p className="mb-2 text-sm md:text-base font-semibold text-gray-900">
                  Our Reviewers
                </p>
                <div className="flex items-center">
                  {/* Small Avatars */}
                  <div className="flex -space-x-3">
                    {testimonials.slice(0, 3).map((t, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                      >
                        <Image
                          src={t.image}
                          alt="user"
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Count Badge */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] md:text-xs font-bold border-2 border-white -ml-3 relative z-10">
                    12K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Content --- */}
          <div className="mt-4 lg:mt-0">
            <span className="bg-orange-100 text-orange-500 px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-4">
              Testimonials
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              What They Say About Us.
            </h2>

            {/* Active User Profile */}
            <div className="flex items-center gap-4 mb-6 transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-md shrink-0">
                <Image
                  src={activeData.image}
                  alt={activeData.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  {activeData.name}
                </h4>
                {/* Stars */}
                <div className="flex gap-1 mt-1 text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={i < activeData.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth={i < activeData.rating ? 0 : 2}
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text Area */}
            <div className="mb-8 md:mb-10 relative">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-orange-500 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21L14.017 18C14.017 16.054 15.659 14.805 17.525 14.184C16.595 13.921 15.656 13.435 15.656 11.667C15.656 9.809 17.18 8.052 19.349 8.052C21.519 8.052 22.95 9.778 22.95 11.667C22.95 14.823 20.371 17.65 18.232 20.842L17.75 21L14.017 21ZM6.01 21L6.01 18C6.01 16.054 7.652 14.805 9.518 14.184C8.588 13.921 7.649 13.435 7.649 11.667C7.649 9.809 9.173 8.052 11.342 8.052C13.512 8.052 14.943 9.778 14.943 11.667C14.943 14.823 12.365 17.65 10.226 20.842L9.743 21L6.01 21Z" />
              </svg>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed italic animate-fade-in">
                {activeData.review}
              </p>

              <div className="flex justify-end mt-2">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-orange-400 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.983 3v3c0 1.946-1.642 3.195-3.508 3.816 0.93 0.263 1.869 0.749 1.869 2.517 0 1.858-1.524 3.615-3.693 3.615-2.17 0-3.601-1.726-3.601-3.615 0-3.156 2.579-5.983 4.718-9.175l0.482-0.158h3.733zM17.99 3v3c0 1.946-1.642 3.195-3.508 3.816 0.93 0.263 1.869 0.749 1.869 2.517 0 1.858-1.524 3.615-3.693 3.615-2.17 0-3.601-1.726-3.601-3.615 0-3.156 2.579-5.983 4.718-9.175l0.482-0.158h3.733z" />
                </svg>
              </div>
            </div>

            {/* --- Thumbnails Navigation --- */}
            <div className="flex gap-3 md:gap-4 flex-wrap">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 transition-all duration-300 p-0.5
                    ${
                      activeIndex === index
                        ? "border-orange-500 scale-110 shadow-lg shadow-orange-200"
                        : "border-transparent opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                    }
                  `}
                >
                  <div className="w-full h-full rounded-full overflow-hidden cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;