"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Products", href: "/products" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 left-0 w-full h-[70px] bg-white overflow-hidden z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h4 className="text-[22px] font-[700]"> EleTec. </h4>
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
    </nav>
  );
};

export default Navbar;
