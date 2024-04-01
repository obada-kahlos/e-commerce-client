import Card from "@/components/card/card";
import React from "react";
import { LaptopList } from "@/feature/laptop-list";
import { AccessoryList } from "@/feature/Accessory-list";
import { Hero } from "@/components/hero";
import { AllProductPage } from "@/feature/all-products-list";

const products = {
  product1: {
    image: "/product1.png",
    title: "لابتوبات مكتبية - غيمينغ لابتوب",
  },
  // product2: {
  //   image: "/product2.png",
  //   title: "Accessory",
  // },
  product3: {
    image: "/product3.png",
    title: "بطاريات - حقائب - شاشات",
  },
  // product4: {
  //   image: "/product4.png",
  //   title: "Batteries",
  // },
  // product5: {
  //   image: "/product5.png",
  //   title: "Head phone",
  // },
  // product6: {
  //   image: "/product6.png",
  //   title: "Desktop laptop",
  // },
};

export const metadata = {
  title: "Products website",
  description: "جميع انواع الابتوبات و الاكسسوارات",
};

export default function Home() {
  return (
    <div className="sm:container sm:w-full w-[90%] mx-auto my-16 ">
      <Hero />
      <div className="my-[10px]">
        <h2 className="text-[34px] text-[#2a2a2a] font-[7000]">
          {" "}
          التصنيفات الموجودة بالموقع{" "}
        </h2>
        <span className="text-[14px] text-[#a1a1a1] font-[400] ">
          جميع انواع الابتوبات و الملحقات الخاصة باللابتوب
        </span>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-6 col-span-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Card
                height="300px"
                rounded="10px"
                width="100%"
                image={products.product1.image}
                title={products.product1.title}
                price={""}
              />
            </div>
            {/* <div className="col-span-12">
              <Card
                height="300px"
                rounded="10px"
                width="100%"
                image={products.product6.image}
                title={products.product6.title}
                price={""}
              />
            </div> */}
          </div>
        </div>
        <div className="md:col-span-6 col-span-12">
          <div className="grid grid-cols-12 gap-4">
            {/* <div className="md:col-span-6 col-span-12">
              <Card
                height="300px"
                rounded="10px"
                width="100%"
                image={products.product2.image}
                title={products.product2.title}
                price={""}
              />
            </div> */}
            <div className="md:col-span-12 col-span-12">
              <Card
                height="300px"
                rounded="10px"
                width="100%"
                image={products.product3.image}
                title={products.product3.title}
                price={""}
              />
            </div>
            {/* <div className="md:col-span-6 col-span-12">
              <Card
                height="300px"
                rounded="10px"
                width="100%"
                image={products.product4.image}
                title={products.product4.title}
                price={""}
              />
            </div> */}
            {/* <div className="md:col-span-6 col-span-12">
              <Card
                height="300px"
                rounded="10px"
                width="100%"
                image={products.product5.image}
                title={products.product5.title}
                price={""}
              />
            </div> */}
          </div>
        </div>
      </div>
      <AllProductPage />
      {/* <LaptopList />
      <AccessoryList /> */}
    </div>
  );
}
