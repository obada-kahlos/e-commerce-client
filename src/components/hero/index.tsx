"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { IoSearch } from "react-icons/io5";

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
      <div
        className={"relative w-full h-[600px] overflow-hidden rounded-[10px]"}
      >
        <img
          src="/homepageImage.webp"
          alt="hereo-image"
          className="w-full object-contain"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col z-20">
          <h1
            className={`text-[60px] text-[#fff] font-sans ${inter.className}`}
          >
            SP<span className="text-main_color">.</span>NET
          </h1>
          <p className="text-white text-[20px] mb-[20px]">
            SP.NET يوفر جميع واحدث انواع الابتوبات
          </p>
          <div
            className="relative p-2 rounded-[12px] border-[2px] border-main_color overflow-hidden w-[600px]"
            onKeyDown={handleKeyDown}
          >
            <input
              type="text"
              placeholder="أبحث هنا..."
              className="h-full w-full bg-transparent text-white text-[22px]"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              className="absolute top-[50%] left-[10px] text-[28px] translate-y-[-50%] text-white"
              onClick={onSearchClick}
            >
              <IoSearch />
            </span>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-10"></div>
      </div>

      <style>
        {`
                
            `}
      </style>
    </>
  );
};
