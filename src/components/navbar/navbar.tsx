"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

// import { useTranslation } from "next-i18next";

// const navLinks = [{ name: "منتجات", href: "/products" }];

const Navbar = () => {
  const pathname = usePathname();


  const navLinks = [{ name: "اكسسوارات", href: `/accessories` }, { name: "موبايلات", href: `/mobiles` }, { name: "لابتوبات", href: `/` }];

  return (
    <nav className="sticky top-0 left-0 w-full h-[70px] bg-white overflow-hidden shadow-md z-50">
      <ul className="flex items-center justify-center ml-[40px]">
        {navLinks.map((link) => {
          const isActive = pathname?.startsWith(link.href)
          return (
            <Link
              href={link.href}
              key={link.name}
              className={`${isActive ? "active-link" : "link"}`}
            >
              <li className="text-[#fff] text-[1rem] font-[400]">
                {link.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="container mx-auto flex justify-between items-center h-[70px]">
        <Link href={"/"} className="flex items-center gap-2">
          <h4 className="text-[22px] font-[700] md:text-left text-center font-sans">
            .Space Net For Laptop
          </h4>
          <img src="/logo.png" alt="icon" width={"60px"} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
