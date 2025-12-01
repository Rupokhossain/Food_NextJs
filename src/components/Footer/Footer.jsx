"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaHeart } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 md:pt-16 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          
          {/* --- Left Side: Links Section --- */}
          <div className="lg:col-span-2">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
              
              {/* --- Column 1: About --- */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">About</h4>
                <ul className="space-y-3 md:space-y-4">
                  {["About Us", "Features", "News", "Careers", "Services"].map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-500 hover:text-[#f58220] transition-colors text-sm">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- Column 2: Company --- */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">Company</h4>
                <ul className="space-y-3 md:space-y-4">
                  {["Our Team", "Partner with Us", "FAQs", "Blog"].map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-500 hover:text-[#f58220] transition-colors text-sm">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- Column 3: Support --- */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">Support</h4>
                <ul className="space-y-3 md:space-y-4">
                  {["About", "Support Center", "Feedback", "Contact Us", "Accessibility"].map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-500 hover:text-[#f58220] transition-colors text-sm">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- Column 4: Get in touch --- */}
              <div> 
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">Contact</h4>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-500 text-xs md:text-sm">(+123) 456 789</p>
                  <p className="text-gray-500 text-xs md:text-sm wrap-break-words">example@mail.com</p>

                  {/* Social Icons */}
                  <div className="flex items-center gap-3 mt-4">
                    <Link href="#" className="text-gray-500 hover:text-[#f58220] transition-colors text-lg">
                      <FiPhone />
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-[#f58220] transition-colors text-lg">
                      <FaFacebookF />
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-[#f58220] transition-colors text-lg">
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* --- Right Side: Subscribe Box --- */}
          <div className="lg:col-span-1">
            <div className="bg-[#FFF8F1] rounded-2xl p-6 lg:p-8 h-full">
              <h4 className="text-lg font-bold text-gray-900 mb-4 md:mb-6">Subscribe</h4>

              {/* Input Group */}
              <div className="relative flex items-center mb-4">
                <div className="absolute left-4 text-gray-400">
                  <HiOutlineMail size={20} />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-12 rounded-md border-none pl-12 pr-12 text-sm text-gray-700 outline-none ring-0 focus:ring-1 focus:ring-orange-300 placeholder:text-gray-400 bg-white shadow-sm"
                />
                <button className="cursor-pointer absolute right-0 top-0 bottom-0 bg-[#f58220] hover:bg-[#e07010] text-white px-3 rounded-r-md transition-colors flex items-center justify-center w-12 h-12">
                  <GoArrowRight size={20} />
                </button>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                Subscribe to Yups email notifications to get notified for all
                money saving offers.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* --- Bottom Footer --- */}
      <div className="border-t border-gray-100 py-6 md:py-8 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            
            {/* Copyright */}
            <p className="text-gray-500 text-xs md:text-sm flex items-center justify-center md:justify-start gap-1">
              Designed with <FaHeart className="text-red-500" /> by Coderthemes
            </p>

            {/* Links */}
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="#" className="text-gray-500 text-xs md:text-sm hover:text-[#f58220] transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-500 text-xs md:text-sm hover:text-[#f58220] transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-500 text-xs md:text-sm hover:text-[#f58220] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;