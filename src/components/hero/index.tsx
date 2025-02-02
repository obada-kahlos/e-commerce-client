"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { IoSearch } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export const Hero = () => {
  const [search, setSearch] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      window.location.href = `/search/${search}`;
    }
  };

  const onSearchClick = () => {
    window.location.href = `/search/${search}`;
  };

  return (
    <>
      <ul className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-medium mb-8">
        <li className="flex items-center justify-center gap-4">
          <a
            href="http://wa.me/963956958013"
            className="hover:underline"
          >
            WhatsApp
          </a>
          <IoLogoWhatsapp className="text-gray-500" size={20} />
        </li>
        <li className="flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61572406436431"
            className="hover:underline"
          >
            Facebook
          </a>
          <FaFacebook className="text-gray-500" size={20} />
        </li>
        <li className="flex items-center justify-center gap-4">
          <a
            href="https://t.me/laptop_space_net"
            className="hover:underline"
          >
            Telegram
          </a>
          <FaTelegramPlane className="text-gray-500" size={20} />
        </li>
      </ul>
      <div
        className={
          "relative w-full h-auto overflow-hidden rounded-[10px]"
        }
      >
        <img
          src="/back-img.jpg"
          alt="hereo-image"
          className="w-full object-contain"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start lg:justify-center flex-col z-20 md:p-0 p-4 ">
          <h1
            className={`md:text-[45px] text-[20px] text-[#fff] font-sans mb-4 ${inter.className}`}
          >
            .Space Net For Laptop
          </h1>
          <div
            className="relative p-2 rounded-[12px] border-[2px] border-main_color overflow-hidden md:w-[600px] w-[80%]"
            onKeyDown={handleKeyDown}
          >
            <input
              type="text"
              placeholder="أبحث هنا..."
              className="h-full w-full bg-transparent text-white text-[22px]"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              className="absolute top-[50%] left-[10px] md:text-[28px] text-[18px] translate-y-[-50%] text-white"
              onClick={onSearchClick}
            >
              <IoSearch />
            </span>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-10"></div>
      </div>

      <style>
        {`
                
            `}
      </style>
    </>
  );
};
