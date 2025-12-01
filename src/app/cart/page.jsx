"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

const CartPage = () => {
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();

  // --- Calculations ---
  const subTotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  const tax = subTotal * 0.1;
  const discount = subTotal > 50 ? 5.0 : 0;
  const delivery = 0;
  const total = subTotal + tax + delivery - discount;

  // --- Empty Cart View ---
  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Looks like you havent added any dishes yet.
        </p>
        <Link
          href="/dishes"
          className="bg-[#f58220] text-white px-6 py-2.5 md:py-3 rounded-lg font-medium hover:bg-[#e0751a] transition shadow-md"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-16 bg-[#f8f9fa] min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT SIDE: Product List --- */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 md:p-6 border-b border-gray-200">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  Shopping Cart
                </h2>
              </div>

              {/* === Desktop Table View (Hidden on Mobile) === */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold border-b border-gray-200">
                      <th className="p-4">Products</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Quantity</th>
                      <th className="p-4 text-right">Sub-Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50/50 transition"
                      >
                        {/* Product Info */}
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                            >
                              <IoCloseCircleOutline size={24} />
                            </button>
                            <div className="h-16 w-16 shrink-0 bg-gray-100 rounded-md overflow-hidden relative border border-gray-100">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="font-medium text-gray-700 max-w-[150px] line-clamp-1">
                              {item.title}
                            </span>
                          </div>
                        </td>

                        {/* Price */}
                        <td className="p-4">
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#f58220]">
                              ${item.price}
                            </span>
                            {item.oldPrice && (
                              <span className="text-xs text-gray-400 line-through">
                                ${item.oldPrice}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Quantity Control */}
                        <td className="p-4">
                          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
                            <button
                              onClick={() => decreaseQty(item.id)}
                              className="h-7 w-7 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition cursor-pointer"
                            >
                              {item.quantity === 1 ? (
                                <FaTrash size={10} />
                              ) : (
                                <FaMinus size={10} />
                              )}
                            </button>
                            <span className="w-8 text-center text-sm font-semibold text-gray-700">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              className="h-7 w-7 cursor-pointer flex items-center justify-center rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition"
                            >
                              <FaPlus size={10} />
                            </button>
                          </div>
                        </td>

                        {/* Subtotal */}
                        <td className="p-4 text-right font-bold text-gray-800">
                          ${(Number(item.price) * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* === Mobile Card View (Visible on Mobile Only) === */}
              <div className="md:hidden divide-y divide-gray-100">
                {cart.map((item, index) => (
                  <div key={index} className="p-4 flex gap-4 relative group">
                    {/* Remove Button (Top Right) */}
                    <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 p-2"
                    >
                        <IoCloseCircleOutline size={22} />
                    </button>

                    {/* Image */}
                    <div className="h-20 w-20 shrink-0 bg-gray-100 rounded-lg overflow-hidden relative border border-gray-200">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pr-6">
                        <h4 className="text-sm font-bold text-gray-800 line-clamp-1 mb-1">{item.title}</h4>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[#f58220] font-bold text-sm">${item.price}</span>
                            {item.oldPrice && <span className="text-xs text-gray-400 line-through">${item.oldPrice}</span>}
                        </div>

                        {/* Qty & Subtotal Row */}
                        <div className="flex items-center justify-between">
                            <div className="inline-flex items-center rounded-md border border-gray-200 bg-white p-1 shadow-sm">
                                <button onClick={() => decreaseQty(item.id)} className="h-6 w-6 flex items-center justify-center rounded bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-500 transition">
                                    {item.quantity === 1 ? <FaTrash size={10} /> : <FaMinus size={10} />}
                                </button>
                                <span className="w-8 text-center text-xs font-bold text-gray-700">{item.quantity}</span>
                                <button onClick={() => addToCart(item)} className="h-6 w-6 flex items-center justify-center rounded bg-gray-50 hover:bg-blue-50 text-gray-500 hover:text-blue-500 transition">
                                    <FaPlus size={10} />
                                </button>
                            </div>
                            <span className="text-sm font-bold text-gray-800">
                                ${(Number(item.price) * item.quantity).toFixed(2)}
                            </span>
                        </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shop More Button */}
              <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200">
                <Link
                  href="/dishes"
                  className="inline-block border border-[#f58220] text-[#f58220] px-6 py-2.5 rounded-lg font-medium hover:bg-[#f58220] hover:text-white transition duration-300 text-sm md:text-base w-full md:w-auto text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Cart Totals & Coupon --- */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            
            {/* Cart Total Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-4 mb-4">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Sub-total</span>
                  <span className="font-medium text-gray-800">
                    ${subTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="font-medium text-red-500">
                    -${discount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span className="font-medium text-gray-800">
                    +${tax.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center mb-6">
                <span className="font-bold text-gray-800 text-lg">Total</span>
                <span className="font-bold text-gray-800 text-xl">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link href="/checkout" className="block w-full">
                <button className="w-full bg-[#f58220] cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-[#e0751a] transition shadow-lg hover:shadow-orange-200 active:scale-95 duration-200">
                  Proceed to Checkout
                </button>
              </Link>
            </div>

            {/* Coupon Code Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4">
                Have a Coupon?
              </h3>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#f58220] text-sm"
                />
                <button className="w-full md:w-auto self-end bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-900 transition text-sm cursor-pointer shadow-md">
                  Apply
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;