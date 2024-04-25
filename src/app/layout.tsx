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
    <html lang={"en"} dir="rtl">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-365XQ5XEYX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-365XQ5XEYX');
              `,
          }}
        />
        <meta name="viewport" content="width=1024" />
        <meta name="keywords" content="SCPNET, ..." />
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>
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
                        href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F320185195898738%2F%3Fref%3Dshare_group_link"
                        className="hover:underline"
                      >
                        Facebook
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://t.me/laptopmall"
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
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024
                <a href="https://flowbite.com/" className="hover:underline">
                  SP.NET
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
