"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DishCard from "./DishCard";
import { FaFilter } from "react-icons/fa6"; 

const DishesClient = ({ filtersData, products }) => {
  const minPrice = 0;
  const maxPrice = filtersData?.priceRange?.max || 1000;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [showFilter, setShowFilter] = useState(false); 

  const handleClick = (categoryName) => {
    selectedCategory === categoryName ? setSelectedCategory(null) : setSelectedCategory(categoryName);
  };

  const handleRestaurantClick = (restaurantName) => {
    selectedRestaurant === restaurantName ? setSelectedRestaurant(null) : setSelectedRestaurant(restaurantName);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  // Filter Logic
  const filteredProducts = products.filter((p) => {
    const categoryMatch = selectedCategory ? p.tag?.includes(selectedCategory) : true;
    const restaurantMatch = selectedRestaurant ? p.restaurant === selectedRestaurant : true;
    const productPrice = Number(p.price);
    const priceMatch = productPrice >= priceRange[0] && productPrice <= priceRange[1];
    return categoryMatch && restaurantMatch && priceMatch;
  });

  return (
    <div className="py-8 lg:py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-6">
            <button 
                onClick={() => setShowFilter(!showFilter)} 
                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg font-medium text-gray-700 shadow-sm w-full justify-center"
            >
                <FaFilter className="text-[#f58220]" />
                {showFilter ? "Hide Filters" : "Show Filters"}
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* Sidebar Area (Responsive) */}
          <div className={`lg:col-span-3 lg:block ${showFilter ? "block" : "hidden"}`}>
            <Sidebar
              filtersData={filtersData}
              selectedCategory={selectedCategory}
              selectedRestaurant={selectedRestaurant}
              handleClick={handleClick}
              handleRestaurantClick={handleRestaurantClick}
              priceRange={priceRange}
              handlePriceChange={handlePriceChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>

          {/* Dish Card Area */}
          <div className="lg:col-span-9">
            <DishCard products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishesClient;