"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/assets/images/logo.png"; 
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

import { useSession, signOut } from "next-auth/react";

const MainHeader = () => {

  const { data: session, status } = useSession();
  
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Link logic
  const linkClass = (path) =>
    pathname === path
      ? "text-[#f58220] font-medium"
      : "text-[#1e293b] hover:text-[#f58220]";

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="navbar py-3 px-4">
          {/* --- Navbar Start: Mobile Menu Toggle & Logo --- */}
          <div className="navbar-start">
            {/* Hamburger Button */}
            <div
              role="button"
              onClick={() => setMobileMenuOpen(true)}
              className="btn btn-ghost lg:hidden pl-0 pr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <div className="">
                <Image
                  src={logo}
                  alt="logo"
                  width={130}
                  height={40}
                  className="w-28 md:w-[130px] h-auto"
                />
              </div>
            </Link>
          </div>

          {/* --- Navbar Center --- */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium text-base xl:space-x-6 space-x-4">
              <li>
                <Link
                  href="/"
                  className={`${linkClass("/")} bg-transparent! focus:bg-transparent! active:bg-transparent!`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dishes"
                  className={`${linkClass("/dishes")} bg-transparent! focus:bg-transparent! active:bg-transparent!`}
                >
                  Dishes
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className={`${linkClass("/faq")} bg-transparent! focus:bg-transparent! active:bg-transparent!`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${linkClass("/contact")} bg-transparent! focus:bg-transparent! active:bg-transparent!`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Navbar End --- */}
          <div className="navbar-end gap-2 md:gap-4">
            {/* Search Bar */}
            <div className="hidden lg:flex relative">
              <input
                type="text"
                placeholder="Search for items..."
                className="input h-10 w-64 rounded-full bg-[#fb923c33] text-base placeholder-orange-500 placeholder-medium focus:outline-none border-none pl-10"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute left-4 top-3 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Icons Container */}
            <div className="flex items-center gap-1 md:gap-3">
              {/* Cart Icon */}
              <Link href="/cart">
                <div role="button" className="btn btn-ghost btn-circle hover:bg-orange-50 group">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-700 group-hover:text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#f58220] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {totalItems}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              {/* Heart Icon */}
              <Link href="/wishlist">
                <div role="button" className="btn btn-ghost btn-circle hover:bg-orange-50 group">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-700 group-hover:text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {wishlistCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {wishlistCount}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              {/* ============ AUTH SECTION (MODIFIED) ============ */}
              {status === "loading" ? (
                // লোডিং অবস্থা
                <div className="btn btn-ghost btn-circle animate-pulse bg-gray-200"></div>
              ) : status === "authenticated" ? (
                // === LOGGED IN (User Profile & Dropdown) ===
                <div className="dropdown dropdown-end">
                  <div role="button" tabIndex={0} className="btn btn-ghost btn-circle avatar ring-offset-2 hover:ring-2 hover:ring-[#f58220] transition-all">
                    <div className="w-10 rounded-full">
                      {/* Image Error এড়াতে সাধারণ img ট্যাগ ব্যবহার করা হলো */}
                      <Image 
                         src={session?.user?.image || "https://i.ibb.co/tZ2f23s/user.png"} 
                         alt="user" 
                         referrerPolicy="no-referrer"
                         width={32}
                         height={32}
                      />
                    </div>
                  </div>
                  <ul tabIndex={0} className="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-gray-100">
                    <li className="menu-title px-4 py-2 border-b border-gray-100 mb-2">
                       <span className="text-[#f58220] block">{session?.user?.name}</span>
                       <span className="text-xs font-normal text-gray-400 normal-case">{session?.user?.email}</span>
                    </li>
                    <li><button onClick={() => signOut()} className="text-red-500 hover:bg-red-50 font-semibold">Logout</button></li>
                  </ul>
                </div>
              ) : (
                // === LOGGED OUT (Original Login Icon) ===
                <Link href="/login">
                  <div role="button" className="btn btn-ghost btn-circle hover:bg-orange-50 group" title="Login">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-700 group-hover:text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </Link>
              )}
              {/* ================================================= */}

            </div>
          </div>
        </div>

        {/* Mobile Drawer Code */}
        <div
          className={`fixed inset-0 z-40 duration-300 lg:hidden ${
            mobileMenuOpen ? " visible" : " invisible"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <div
          className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar content... */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="w-24">
              <Image src={logo} alt="logo" width={100} height={30} />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-4 px-4">
            <ul className="space-y-4 font-medium text-lg text-gray-600">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block ${linkClass("/")}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dishes"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block ${linkClass("/dishes")}`}
                >
                  Dishes
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block ${linkClass("/faq")}`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block ${linkClass("/contact")}`}
                >
                  Contact Us
                </Link>
              </li>
              
              {/* === Mobile Menu Auth === */}
              <li className="pt-4 border-t border-gray-100">
                {status === "authenticated" ? (
                  <>
                    <div className="flex items-center gap-3 mb-3">
                       {/* Mobile User Image */}
                       <Image 
                          src={session?.user?.image || "https://i.ibb.co/tZ2f23s/user.png"} 
                          alt="user" 
                          className="w-8 h-8 rounded-full"
                          referrerPolicy="no-referrer"
                          width={32}
                          height={32}

                       />
                       <span className="text-sm font-bold text-[#f58220]">{session?.user?.name}</span>
                    </div>
                    <button 
                      onClick={() => signOut()}
                      className="block w-full text-left text-red-500 hover:bg-red-50 px-2 py-2 rounded"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block ${linkClass("/login")}`}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;