"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Menu = ({ menus, categorys }) => {
  const [activeTab, setActiveTab] = useState(categorys[0].id);
  const swiperRef = useRef(null);

  // 1. Sidebar Active Name Logic
  const activeCategoryName = categorys.find(
    (cat) => cat.id === activeTab
  )?.name;

  // 2. Menu Match Logic
  const activeCategory = menus.find((m) => m.name === activeCategoryName);

  return (
    <div className="py-10 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* --- Top Header --- */}
        <div className="mb-8">
          <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
            Menu
          </span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-2 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Special Menu for you...
            </h2>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3 self-end md:self-auto">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition shadow-lg shadow-orange-200 cursor-pointer active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition shadow-lg shadow-orange-200 cursor-pointer active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- Main Layout --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
          
          {/* --- LEFT SIDE: Categories List --- */}
          <div className="w-full lg:w-1/3 xl:w-1/4 relative z-20">
            {/* Sidebar Container */}
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pb-4 lg:pb-0 pr-0 lg:pr-6 h-auto lg:h-[500px] custom-scrollbar scrollbar-hide lg:scrollbar-default">
              {categorys.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setActiveTab(category?.id)}
                  className={`
                      flex items-center gap-3 md:gap-4 px-2 py-2 rounded-full transition-all duration-300 whitespace-nowrap text-left group shrink-0 cursor-pointer
                      ${
                        activeTab === category?.id
                          ? "bg-[#f58220] text-white shadow-lg w-auto lg:w-[90%]"
                          : "bg-white lg:bg-transparent border border-gray-100 lg:border-none text-gray-600 hover:bg-orange-50 w-auto lg:w-[90%]"
                      }
                  `}
                >
                  <div
                    // Added 'shrink-0' to fix squashed icon issue
                    className={`w-10 h-10 md:w-14 md:h-14 p-1 rounded-full flex items-center justify-center bg-white overflow-hidden shadow-sm shrink-0 ${
                      activeTab !== category?.id && "border border-gray-100"
                    }`}
                  >
                    <Image
                      src={category?.image}
                      alt={category?.name}
                      className="object-contain"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-bold text-base xl:text-lg pr-4 lg:pr-0">{category?.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: Swiper Slider --- */}
          <div className="w-full lg:w-2/3 xl:w-3/4 bg-[#FFF8F5] p-4 md:px-6 md:py-8 rounded-3xl lg:rounded-[3rem] relative flex items-center min-h-[450px]">
            <Swiper
              key={activeTab}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                // Tablet (MD): 2 items
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // Laptop (LG): 2 items (As requested)
                1024: {
                  slidesPerView: 2, 
                  spaceBetween: 30,
                },
                // Desktop (XL): 3 items
                1280: {
                   slidesPerView: 3,
                   spaceBetween: 30,
                }
              }}
              className="w-full pb-8 md:pb-10 px-2!"
            >
              {activeCategory?.items?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div className="h-[350px] md:h-[400px] rounded-3xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                    {/* Background Image */}
                    <Image
                      src={item?.image}
                      alt={item?.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={300}
                      height={400}
                    />

                    {/* Dark Gradient Overlay (Fixed Typo: bg-gradient-to-t) */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item?.title}</h3>
                      <p className="text-yellow-400 font-extrabold text-lg mb-3 md:mb-4">
                        $ {item?.price}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold opacity-90 group-hover:opacity-100 hover:text-orange-400 transition-colors">
                        Order Now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                      {/* Dotted underline simulation */}
                      <div className="w-24 h-px border-b border-dashed border-gray-400 mt-1"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Empty State Handler */}
              {activeCategory?.items?.length === 0 && (
                <div className="text-center w-full py-20 text-gray-500 font-medium">
                  No items found in this category.
                </div>
              )}
            </Swiper>

            {/* Decorative Element (Leaf) - Hidden on Mobile */}
            <div className="absolute -bottom-8 right-10 w-16 h-16 lg:w-24 lg:h-24 hidden lg:block rotate-12 z-10 pointer-events-none">
              <Image
                src="https://themes.coderthemes.com/yum_r/assets/leaf-rnX13bVj.png"
                alt="leaf"
                className="w-full h-full object-contain drop-shadow-lg"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;