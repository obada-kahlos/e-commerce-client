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
      <div className="container mx-auto flex justify-between items-center h-[70px]">
        <ul className="flex items-center justify-center">
          <a
            href={'/'}
            className={`${pathname == "/" ? "active-link" : "link"}`}
          >
            <li className="text-[1rem] font-[400]">
              لابتوبات
            </li>
          </a>
          <a
            href={'/mobiles'}
            className={`${pathname == "/mobiles" ? "active-link" : "link"}`}
          >
            <li className="text-[#000] text-[1rem] font-[400]">
              موبايلات
            </li>
          </a>
          <a
            href={'/accessories'}
            className={`${pathname == "/accessories" ? "active-link" : "link"}`}
          >
            <li className="text-[#000] text-[1rem] font-[400]">
              اكسسوارات
            </li>
          </a>
          {/* {navLinks.map((link) => {
            const isActive = pathname?.startsWith(link.href)
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`${isActive ? "active-link" : "link"}`}
              >
                <li className="text-[#000] text-[1rem] font-[400]">
                  {link.name}
                </li>
              </Link>
            );
          })} */}
        </ul>
        <Link href={"/"} className="flex items-center gap-2">
          <h4 className="text-[16px] md:text-[22px] font-[700] md:text-left text-center font-sans">
            .Space Net For Laptop
          </h4>
          <img src="/logo.png" alt="icon" width={"60px"} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
