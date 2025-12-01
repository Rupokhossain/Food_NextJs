"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar, FaTrash } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { cart, addToCart, removeFromCart } = useCart();

  const isInCart = (id) => cart.some((item) => item.id === id);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center bg-gray-50 px-4">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
            <FaHeart className="text-2xl md:text-3xl"/>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Your Wishlist is Empty
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Explore more dishes and shortlist your favorites here.
        </p>
        <Link
          href="/dishes"
          className="bg-[#f58220] text-white px-6 py-2.5 md:py-3 rounded-lg font-medium hover:bg-[#e0751a] transition text-sm md:text-base"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-16 bg-[#f8f9fa] min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
            
            <div className="mb-6 md:mb-8 flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">My Wishlist ({wishlist.length})</h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                
                {wishlist.map((item, index) => {
                    const itemInCart = isInCart(item.id);

                    return (
                        <div 
                            key={index} 
                            // Mobile: flex-col, Desktop: flex-row
                            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition relative group"
                        >
                            {/* 1. Image (Responsive Width) */}
                            <div className="shrink-0 w-full md:w-32 h-40 md:h-32 bg-gray-100 rounded-lg relative overflow-hidden flex items-center justify-center">
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    fill 
                                    className="object-contain p-2"
                                />
                            </div>

                            {/* 2. Content (Centered on Mobile) */}
                            <div className="flex-1 w-full text-center md:text-left">
                                <div className="mb-1 text-[10px] md:text-xs font-bold text-[#f58220] uppercase tracking-wide">
                                    {item.restaurant || "Popular Dish"}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2 line-clamp-1">
                                    {item.title}
                                </h3>
                                <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-500 text-sm mb-3">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
                                    <span className="text-gray-400 text-xs ml-1">({item.rating || 0})</span>
                                </div>
                            </div>

                            {/* 3. Price & Action (Responsive Padding) */}
                            <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto mt-2 md:mt-0 md:pr-14">
                                
                                {/* Price */}
                                <div className="text-center md:text-right">
                                    <p className="text-xl md:text-2xl font-bold text-gray-800">
                                        ${item.price}
                                    </p>
                                    {item.oldPrice && (
                                        <p className="text-xs md:text-sm text-gray-400 line-through">
                                            ${item.oldPrice}
                                        </p>
                                    )}
                                </div>

                                {/* Cart Action Button (Full Width on Mobile) */}
                                {itemInCart ? (
                                    <button 
                                        onClick={() => removeFromCart(item.id)}
                                        className="w-full md:w-auto flex items-center justify-center gap-2 bg-red-100 text-red-500 px-5 py-2.5 rounded-lg font-medium hover:bg-red-200 transition text-sm cursor-pointer"
                                    >
                                        <FaTrash /> Remove
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => addToCart(item)}
                                        className="w-full md:w-auto flex items-center justify-center gap-2 cursor-pointer bg-[#f58220] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#e0751a] transition text-sm shadow-sm"
                                    >
                                        <PiShoppingCartLight className="text-lg"/> Add to Cart
                                    </button>
                                )}
                            </div>

                            {/* 4. Remove From Wishlist Button (Adjusted Position) */}
                            <button 
                                onClick={() => toggleWishlist(item)}
                                className="absolute top-3 right-3 md:top-4 md:right-4 p-2 cursor-pointer text-red-500 hover:bg-red-50 rounded-full transition-colors z-10 bg-white md:bg-transparent shadow-sm md:shadow-none"
                                title="Remove from Wishlist"
                            >
                                <FaHeart className="w-5 h-5 md:w-6 md:h-6" />
                            </button>

                        </div>
                    );
                })}

            </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;