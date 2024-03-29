"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { IoLanguageSharp } from "react-icons/io5";

// import { useTranslation } from "next-i18next";

const navLinks = [{ name: "Products", href: "/products" }];

const Navbar = () => {
  const pathname = usePathname();

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
                A-Laptop
            </h4>
          </Link>
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
          {/* <label className="relative inline-flex items-center cursor-pointer">
            <input
              onClick={() => setDarkMode(!darkMode)}
              checked={!darkMode}
              type="checkbox"
              value=""
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label> */}
          {/* <button onClick={() => i18n.changeLanguage("en")}>English</button>
          <button onClick={() => i18n.changeLanguage("ar")}>العربية</button> */}
          {/* <IoLanguageSharp
            className="dark:text-dark_heading_color text-light_heading_color"
            fontSize={"2rem"}
            cursor={"pointer"}
            onClick={onClickLanguageChange}
          /> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
