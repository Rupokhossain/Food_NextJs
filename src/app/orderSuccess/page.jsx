"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const OrderSuccessPage = () => {
  // ১. ওয়ার্নিং ফিক্স করার জন্য একটি স্টেট অবজেক্ট ব্যবহার করা হলো
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // পেজ লোড হওয়ার পর একবারেই সব ডাটা সেট হবে
    setOrderDetails({
      id: "#ORD-" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString(),
    });
  }, []);

  // ডাটা না আসা পর্যন্ত কিছু দেখাবে না (Hydration Error ফিক্স)
  if (!orderDetails) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Card Container (Responsive Padding) */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn relative">
        
        {/* Top Decorative Bar */}
        <div className="h-2 bg-[#f58220] w-full absolute top-0 left-0"></div>

        <div className="p-6 md:p-10 text-center mt-2">
          {/* Success Icon (Responsive Size) */}
          <div className="mx-auto flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-green-100 mb-5 md:mb-6 animate-bounce-slow">
            <FaCheckCircle className="h-10 w-10 md:h-12 md:w-12 text-green-500" />
          </div>

          {/* Headings (Responsive Text) */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Order Successful!
          </h2>
          <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base">
            Thank you for your purchase. We have received your order.
          </p>

          {/* Order Details Card */}
          <div className="bg-gray-50 rounded-xl p-5 mb-8 text-left border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-2">
              <span className="text-xs md:text-sm font-medium text-gray-500">Order ID</span>
              <span className="text-sm md:text-base font-bold text-gray-800">{orderDetails.id}</span>
            </div>
            <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-2">
              <span className="text-xs md:text-sm font-medium text-gray-500">Date</span>
              <span className="text-sm md:text-base font-bold text-gray-800">{orderDetails.date}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm font-medium text-gray-500">Payment Method</span>
              <span className="text-sm md:text-base font-bold text-gray-800">Cash on Delivery</span>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-400 mb-8 px-2">
            You will receive an order confirmation email shortly with the expected delivery date.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/dishes" className="w-full">
              <button className="w-full flex items-center justify-center gap-2 bg-[#f58220] text-white px-6 py-3.5 rounded-lg font-bold hover:bg-[#e0751a] transition duration-300 shadow-md transform active:scale-95 cursor-pointer text-sm md:text-base">
                Continue Shopping <FaArrowRight />
              </button>
            </Link>

            <Link href="/" className="w-full">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-600 border border-gray-200 px-6 py-3.5 rounded-lg font-semibold hover:bg-gray-50 hover:text-gray-800 transition duration-300 cursor-pointer text-sm md:text-base">
                <HiOutlineDocumentText className="text-lg md:text-xl"/> View Order History
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;