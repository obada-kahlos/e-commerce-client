import "./global.css";
import ProviderComponent from "@/store/ProviderComponnt";
import Navbar from "@/components/navbar/navbar";
import Head from "next/head";


export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"} translate="no" dir="rtl">
      <meta name="viewport" content="width=1024" />
      <meta name="keywords" content="SCPNET..." />
      <meta name="google-site-verification" content="sXMXcw-2VzB_JqJrK5F341-46d9Fydeh6210CvUXqY4" />
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className="bg-white">
        <ProviderComponent>
          <Navbar />
          {children}
        </ProviderComponent>

        <footer className="bg-white">
          <div className="container mx-auto w-full p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    يمكنك التواصل عن طريق
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="http://wa.me/963956958013"
                        className="hover:underline"
                      >
                        WhatsApp
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61572406436431"
                        className="hover:underline"
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://t.me/laptop_space_net"
                        className="hover:underline"
                      >
                        Telegram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-6 md:mb-0">
                <div>
                  <img src="/logo.png" alt="icon" width={"120px"} />
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
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <a href="https://xdevelopment.net/" target="_blank">
              <p
                className={`text-[20px] text-buttons_color text-center`}
              >
                © 2025 <span className="underline">XDevelopment</span>. All rights reserved.
              </p>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
