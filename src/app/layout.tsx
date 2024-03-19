"use client";

import "./global.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Products", href: "/products" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
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
        {children}

        <footer className="bg-whit">
          <div className="container mx-auto w-full p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <div>
                  <h4 className="text-[22px] font-[700]"> EleTec. </h4>
                </div>
                {/* <a href="https://flowbite.com/" className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Flowbite
                  </span>
                </a> */}
              </div>
              {/* grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 */}
              <div className="">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Contact
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        // href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <a
                        // href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Obada.KH
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
