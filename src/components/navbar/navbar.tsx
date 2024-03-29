"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { IoSearch } from "react-icons/io5";

// import { useTranslation } from "next-i18next";

const navLinks = [{ name: "منتجات", href: "/products" }];

const Navbar = () => {
  const pathname = usePathname();

  const [search, setSearch] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      window.location.href = `/search/${search}`;
    }
  };

  // const [darkMode, setDarkMode] = useState(localStorage?.theme === "dark");
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.theme = "dark";
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.theme = "light";
  //   }
  // }, [darkMode]);

  // const { t, i18n } = useTranslation("common");

  return (
    <nav className="sticky top-0 left-0 w-full h-[70px] bg-white overflow-hidden shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h4 className="text-[22px] font-[700] w-[120px] md:text-left text-center font-sans">
              بحصة لابتوب
            </h4>
          </Link>
        </div>
        <div className="flex items-center" onKeyDown={handleKeyDown}>
          <div className="relative p-2 h-[40px] rounded-[12px] border-[2px] border-main_color overflow-hidden">
            <input
              type="text"
              placeholder="أبحث هنا..."
              className="h-full  w-full"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute top-[50%] left-[10px] text-[20px] translate-y-[-50%] text-main_color">
              <IoSearch />
            </span>
          </div>

          <ul className="flex gap-x-2">
            {navLinks.map((link) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={`${isActive ? "active-link" : "link"}`}
                >
                  <li>{link.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
