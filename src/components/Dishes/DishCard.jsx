"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaHeart, FaMinus, FaPlus, FaStar, FaTrash } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const DishCard = ({ products }) => {
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800">No Dishes Found</h3>
        <p className="text-gray-500 mt-2">
          Try adjusting your filters to find what youre looking for.
        </p>
      </div>
    );
  }

  const getCartItem = (id) => cart.find((item) => item.id === id);

  return (
    <div className="grid grid-cols-1 gap-6">
      {products.map((p, index) => {
        const cartItem = getCartItem(p.id);
        const isWishlisted = isInWishlist(p.id);

        return (
          <div
            key={index}
            className="group bg-white rounded-xl border border-gray-100 p-4 sm:p-6 transition-all duration-300 hover:border-[#f58220] hover:shadow-lg relative"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Image Section */}
              <div className="shrink-0 w-full md:w-60 h-[200px] relative bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                <Link
                  href={`/dishes/${p.id}`}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={p.image}
                    alt="dish"
                    width={200}
                    height={200}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
              </div>

              {/* Content Section */}
              <div className="flex-1 w-full text-center md:text-left">
                {/* Title & Wishlist */}
                <div className="flex flex-col md:flex-row items-center md:justify-between mb-3 gap-2">
                  <Link href={`/dishes/${p.id}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 hover:text-[#f58220] transition-colors cursor-pointer line-clamp-1">
                      {p.title}
                    </h3>
                  </Link>

                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(p);
                    }}
                    className="cursor-pointer p-2 rounded-full hover:bg-red-50 transition-colors absolute top-4 right-4 md:static"
                  >
                    {isWishlisted ? (
                      <FaHeart className="w-6 h-6 text-red-500" />
                    ) : (
                      <GoHeart className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors" />
                    )}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-500 mb-5 line-clamp-2 leading-relaxed">
                  {p.description}
                </p>

                {/* Action Buttons & Price */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Cart Actions */}
                  <div className="w-full md:w-auto">
                    {!cartItem ? (
                      <button
                        onClick={() => addToCart(p)}
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#f58220] px-6 py-2.5 rounded-lg font-semibold text-white shadow-sm transition-all hover:bg-[#e0751a] active:scale-95"
                      >
                        <PiShoppingCartLight className="text-xl" />
                        Add to Cart
                      </button>
                    ) : (
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <button
                          onClick={() => removeFromCart(p.id)}
                          className="px-4 py-2 bg-red-50 text-red-500 rounded-lg text-sm font-medium hover:bg-red-100 transition flex items-center gap-1"
                        >
                          <FaTrash /> Remove
                        </button>
                        <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden">
                          <button
                            onClick={() => decreaseQty(p.id)}
                            className="w-8 h-9 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600 transition border-r"
                          >
                            {cartItem.quantity === 1 ? (
                              <FaTrash size={12} />
                            ) : (
                              <FaMinus size={12} />
                            )}
                          </button>
                          <span className="w-10 text-center font-bold text-gray-800 text-sm">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(p)}
                            className="w-8 h-9 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-[#f58220] transition border-l"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price & Rating */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="block text-2xl font-bold text-[#f58220]">
                        ${p.price}
                      </span>
                      {p.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${p.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
                    <div className="flex flex-col items-center md:items-start">
                      <div className="flex text-yellow-400 text-xs">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                      </div>
                      <span className="text-xs text-gray-400 mt-1">
                        ({p.rating || 0})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DishCard;
