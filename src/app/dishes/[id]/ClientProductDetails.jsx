"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaHeart, FaStar, FaEye, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const ClientProductDetails = ({ product }) => {
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState("L");

  if (!product) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-xl font-medium text-gray-500">
        Product details not found!
      </div>
    );
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="py-8 lg:py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Grid Layout: LG তে ২ কলাম, বাকি সব স্ক্রিনে ১ কলাম */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* ============ LEFT SIDE: IMAGE ============ */}
          {/* items-center এর কারণে ছবি মাঝখানে থাকবে */}
          <div className="flex flex-col items-center animate-fadeIn">
             <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square lg:h-[500px] bg-gray-50 rounded-2xl flex items-center justify-center p-6 lg:p-8 border border-gray-100 shadow-sm">
                <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    priority
                />
             </div>
          </div>

          {/* ============ RIGHT SIDE: DETAILS ============ */}
          {/* text-center (মোবাইল/ট্যাবলেট) এবং lg:text-left (বড় স্ক্রিন) */}
          <div className="animate-slideUp mt-4 lg:mt-0 text-center lg:text-left">
            
            {/* Title & Restaurant */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1e293b] mb-2 leading-tight">
                {product.title}
            </h1>
            <p className="text-gray-500 mb-4 font-medium text-sm md:text-base">
                by <span className="text-[#f58220] cursor-pointer hover:underline">{product.restaurant || "Unknown Restaurant"}</span>
            </p>

            {/* Ratings: justify-center (MD) -> justify-start (LG) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                 <div className="flex text-yellow-400 text-sm">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300"/>
                 </div>
                 <span className="text-gray-500 text-sm font-medium">| {product.reviews || 0} Reviews</span>
            </div>

            {/* Description */}
            <p className="text-[#475569] mb-6 leading-relaxed text-sm md:text-base">
                {product.description}
            </p>

            {/* Tags: justify-center (MD) -> justify-start (LG) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-8">
                 <span className="inline-flex items-center gap-1 px-3 py-1 border border-red-200 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span> Non Veg
                 </span>
                 {product.tag?.map((tag, i) => (
                     <span key={i} className="px-3 py-1 border border-gray-200 text-gray-600 text-xs font-medium rounded-full bg-white">
                        {tag}
                     </span>
                 ))}
            </div>

            {/* Size Selector: justify-center (MD) -> justify-start (LG) */}
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
                <span className="text-[#1e293b] font-bold mr-0 sm:mr-4 mb-3 sm:mb-0 text-sm md:text-base">Size :</span>
                <div className="inline-flex gap-3">
                    {['S', 'M', 'L'].map((size) => (
                        <button 
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all cursor-pointer shadow-sm
                            ${selectedSize === size ? "bg-[#f58220] text-white ring-2 ring-[#f58220] ring-offset-2" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price & Cart Actions: justify-center (MD) -> justify-start (LG) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-6 mb-8 border-b border-gray-100 pb-8">
                 
                 {/* Price */}
                 <div className="flex items-end justify-center lg:justify-start gap-3">
                    <span className="text-3xl md:text-4xl font-bold text-[#f58220]">${product.price}</span>
                    {product.oldPrice && <span className="text-lg md:text-xl text-gray-400 line-through mb-1 font-medium">${product.oldPrice}</span>}
                 </div>

                 {/* Cart Buttons */}
                 <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
                    {!cartItem ? (
                         <button 
                            onClick={() => addToCart(product)}
                            className="bg-[#f58220] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-bold hover:bg-[#e0751a] transition shadow-lg hover:shadow-orange-200 flex items-center justify-center gap-2 cursor-pointer transform active:scale-95 duration-200 text-sm md:text-base"
                         >
                            <PiShoppingCartLight className="text-xl md:text-2xl"/> Add to Cart
                         </button>
                    ) : (
                        <div className="inline-flex items-center justify-between rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm min-w-[140px]">
                            <button onClick={() => decreaseQty(product.id)} className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-md bg-red-50 text-red-500 hover:bg-red-100 transition cursor-pointer">
                                {cartItem.quantity === 1 ? <FaTrash /> : <FaMinus />}
                            </button>
                            <span className="w-8 md:w-12 text-center font-bold text-gray-800 text-lg">{cartItem.quantity}</span>
                            <button onClick={() => addToCart(product)} className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition cursor-pointer">
                                <FaPlus />
                            </button>
                        </div>
                    )}

                    {/* Wishlist Button */}
                    <button 
                        onClick={() => toggleWishlist(product)}
                        className={`p-3 md:p-3.5 border rounded-lg transition group cursor-pointer shadow-sm active:scale-90 duration-200 ${isWishlisted ? 'border-red-200 bg-red-50' : 'border-gray-200 hover:border-[#f58220] bg-white'}`}
                        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                        {isWishlisted ? (
                             <FaHeart className="text-lg md:text-xl text-red-500" />
                        ) : (
                             <GoHeart className="text-lg md:text-xl text-gray-400 group-hover:text-red-500" />
                        )}
                    </button>
                 </div>
            </div>

            {/* Extra Info: justify-center (MD) -> justify-start (LG) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#f58220] text-sm font-medium bg-orange-50 w-fit px-4 py-2 rounded-full mx-auto lg:mx-0">
                <FaEye />
                <span>152 People are viewing this right now</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProductDetails;