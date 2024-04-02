"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

// import { useTranslation } from "next-i18next";

// const navLinks = [{ name: "منتجات", href: "/products" }];

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
      <div className="container mx-auto flex justify-between items-center h-[70px]">
        <Link href={"/"} className="flex items-center gap-4">
          <h4 className="text-[22px] font-[700] w-[120px] md:text-left text-center font-sans">
            SP.NET
          </h4>
          <img src="/logo.png" alt="icon" width={'60px'}/>
        </Link>
        {/* <ul className="flex gap-x-2">
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
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
