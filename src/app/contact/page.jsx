"use client";

import Image from "next/image";
import React from "react";
import { FaPhoneVolume, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* ============ TOP SECTION: INFO & FORM ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* LEFT SIDE: Text & Image */}
          <div className="flex flex-col">
            <h2 className="text-[#1A2B3D] text-3xl lg:text-4xl font-bold mb-4">
              Contact Information
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Loremum et malesuada fames ac ante ipsum primis in faucibus. Sed
              molestie accumsan dui, non iaculis.
            </p>
            
            {/* Provided Image */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="https://themes.coderthemes.com/yum_r/assets/contact-DMkqYksi.png"
                alt="Contact Illustration"
                className="w-full max-w-sm lg:max-w-md object-contain"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div>
            <form className="flex flex-col gap-6">
              
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[#1A2B3D] font-semibold text-sm">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F27C22] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#1A2B3D] font-semibold text-sm">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F27C22] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[#1A2B3D] font-semibold text-sm">E-mail</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F27C22] transition-colors"
                />
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[#1A2B3D] font-semibold text-sm">Message</label>
                <textarea
                  rows="5"
                  placeholder="Enter Your Message"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F27C22] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  className="bg-[#F27C22] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e0751a] transition shadow-md cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ============ BOTTOM SECTION: INFO CARDS ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Call Us */}
          <div className="bg-gray-50 p-8 rounded-xl flex items-start gap-5">
            <div className="bg-[#F27C22] text-white p-3 rounded-full shrink-0">
              <FaPhoneVolume className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#1A2B3D] mb-3">Call Us</h4>
              <p className="text-gray-500 text-sm mb-1">+1 234 XXXX 123</p>
              <p className="text-gray-500 text-sm">+1 234 XXXX 567</p>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-gray-50 p-8 rounded-xl flex items-start gap-5">
            <div className="bg-[#F27C22] text-white p-3 rounded-full shrink-0">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#1A2B3D] mb-3">Email</h4>
              <p className="text-gray-500 text-sm mb-1">support@coderthemes.com</p>
              <p className="text-gray-500 text-sm">helpdemo123@mail.com</p>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="bg-gray-50 p-8 rounded-xl flex items-start gap-5">
            <div className="bg-[#F27C22] text-white p-3 rounded-full shrink-0">
              <FaLocationDot className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#1A2B3D] mb-3">Address</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                37125 Maya Estate Dr, Victoria Road, Warsaw, Poland - 234834
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}