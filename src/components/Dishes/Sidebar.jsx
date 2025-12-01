"use client";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; 
import { FaArrowRightLong } from "react-icons/fa6";

const Sidebar = ({
  filtersData,
  handleClick,
  selectedCategory,
  selectedRestaurant,
  handleRestaurantClick,
  priceRange,
  handlePriceChange,
  minPrice,
  maxPrice,
}) => {
  return (
    <div className="space-y-6">
      <div className="border border-gray-200 p-5 rounded-xl bg-white shadow-sm">
        
        {/* --- Category Section --- */}
        <div className="mb-8">
            <h3 className="border-b border-gray-100 pb-3 mb-4 font-bold text-gray-800 text-lg">
                Category
            </h3>
            <div className="space-y-3">
                {filtersData?.tags?.map((tag, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => handleClick(tag.name)}
                >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedCategory === tag.name ? "border-[#f58220] bg-[#f58220]" : "border-gray-300 bg-white"}`}>
                        {selectedCategory === tag.name && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <p className={`text-sm font-medium transition-colors ${selectedCategory === tag.name ? "text-[#f58220]" : "text-gray-600 group-hover:text-[#f58220]"}`}>
                        {tag.name}
                    </p>
                </div>
                ))}
            </div>
        </div>

        {/* --- Price Range --- */}
        <div className="mb-8">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
                 <h3 className="font-bold text-gray-800 text-lg">Price Range</h3>
                 <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    ${priceRange[0]} - ${priceRange[1]}
                 </span>
            </div>
            <div className="px-2">
                <Slider
                    range
                    min={minPrice}
                    max={maxPrice}
                    defaultValue={[minPrice, maxPrice]}
                    value={priceRange}
                    onChange={handlePriceChange}
                    trackStyle={[{ backgroundColor: "#f58220", height: 6 }]}
                    handleStyle={[
                        { borderColor: "#f58220", backgroundColor: "#f58220", opacity: 1, width: 18, height: 18, marginTop: -6, boxShadow: 'none' }, 
                        { borderColor: "#f58220", backgroundColor: "#f58220", opacity: 1, width: 18, height: 18, marginTop: -6, boxShadow: 'none' }
                    ]} 
                    railStyle={{ backgroundColor: "#e2e8f0", height: 6 }} 
                />
            </div>
        </div>

        {/* --- Restaurant --- */}
        <div className="mb-8">
            <h3 className="border-b border-gray-100 pb-3 mb-4 font-bold text-gray-800 text-lg">
              Popular Restaurants
            </h3>
            <div className="space-y-3">
              {filtersData?.restaurants?.map((r, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => handleRestaurantClick(r.name)}
                >
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedRestaurant === r.name ? "border-[#f58220] bg-[#f58220]" : "border-gray-300 bg-white"}`}>
                        {selectedRestaurant === r.name && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <p className={`text-sm font-medium transition-colors ${selectedRestaurant === r.name ? "text-[#f58220]" : "text-gray-600 group-hover:text-[#f58220]"}`}>
                    {r.name}
                  </p>
                </div>
              ))}
            </div>
        </div>

        {/* --- Tags --- */}
        <div>
            <h3 className="border-b border-gray-100 pb-3 mb-4 font-bold text-gray-800 text-lg">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {filtersData?.tags?.map((tag, index) => (
                <span
                  key={index}
                  onClick={() => handleClick(tag.name)}
                  className={`cursor-pointer px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                      selectedCategory === tag.name 
                        ? "bg-[#f58220] text-white border-[#f58220]" 
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[#f58220] hover:text-[#f58220]"
                  }`}
                >
                    {tag.name}
                </span>
              ))}
            </div>
        </div>
      </div>

      {/* Offer Banner */}
      <div className="relative overflow-hidden rounded-xl bg-orange-50 p-8 text-center border border-orange-100 hidden md:block">
          <div className="mb-4 flex justify-center transform hover:scale-110 transition-transform duration-500">
            <Image
              src="https://themes.coderthemes.com/yum_r/assets/filter-offer-dish-4b4xOBRV.png"
              alt="dish"
              width={140}
              height={140}
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Green Healthy Salad
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Tasty and Healthy Salad for you.
          </p>
          <div className="font-bold text-[#f58220] text-lg mb-4">
            Only $59
          </div>
          <button className="w-full bg-[#f58220] text-white py-2.5 rounded-lg font-semibold hover:bg-[#e0751a] transition flex items-center justify-center gap-2 text-sm shadow-md">
            Order Now <FaArrowRightLong />
          </button>
      </div>
    </div>
  );
};

export default Sidebar;