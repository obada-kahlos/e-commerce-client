import CardAbout from "@/components/card/card-about";
import React from "react";
import { LaptopList } from "@/feature/laptop-list";
import { AccessoryList } from "@/feature/Accessory-list";
import { Hero } from "@/components/hero";
import { AllProductPage } from "@/feature/all-products-list";
import MultipleItems from "@/components/react-slick/react-slick";

const products = [
  {
    image: "/product1.png",
    title: "لابتوبات مكتبية - غيمينغ لابتوب",
  },

  {
    image: "/product3.png",
    title: "بطاريات - حقائب - شاشات",
  },
];

export const metadata = {
  title: "SCPNET",
  description: "مرحبا في SCPNET, يوجد جميع انواع الابوتوبات و االاكسسوارات",
};

export default function Home() {
  return (
    <div className="sm:container sm:w-full w-[90%] mx-auto my-16 ">
      <Hero />
      <div className="my-[10px]">
        <h2 className="md:text-[34px] text-[20px] text-[#2a2a2a] font-[7000]">
          التصنيفات الموجودة بالموقع
        </h2>
        <span className="text-[14px] text-[#a1a1a1] font-[400] ">
          جميع انواع الابتوبات و الملحقات الخاصة باللابتوب
        </span>
      </div>
      <MultipleItems ProductList={products} />
      <AllProductPage />
    </div>
  );
}
