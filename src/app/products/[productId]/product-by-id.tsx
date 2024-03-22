"use client";
import React from "react";
import { useGetProductByIdQuery } from "@/data-access/api/products/products";
import { IoMdCart } from "react-icons/io";
import { Skeleton } from "@mui/material";

interface ProductList {
  description?: string;
  discount?: string;
  id?: string;
  images?: string[];
  name?: string;
  price?: string;
  type?: string;
}

export const ProductById = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetProductByIdQuery({ id: id });

  return (
    <>
      {isLoading
        ? Array.from(new Array(1)).map((_, index) => (
            <div className="grid grid-cols-12 gap-2" key={index}>
              <div className="md:col-span-4 col-span-12">
                <div className="w-full h-[400px] p-4 rounded-[0.5rem] bg-[rgba(0,0,0,0.1)] flex items-center justify-center">
                  <Skeleton variant="rectangular" width="80%" height="100%" />
                </div>
              </div>
              <div className="md:col-span-8 col-span-12 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                  </div>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </div>
                <div className="">
                  <Skeleton variant="rectangular" width="150px" height="40px" />
                </div>
              </div>
            </div>
          ))
        : data?.data?.Products?.map((productItem: ProductList, key: number) => {
            return (
              <div className="grid grid-cols-12 gap-2" key={key}>
                <div className="md:col-span-4 col-span-12">
                  <div className="w-full h-[400px] p-4 rounded-[0.5rem] bg-[rgba(0,0,0,0.1)] flex items-center justify-center">
                    {productItem?.images?.map((item, imgKey) => (
                      <img
                        key={imgKey}
                        src={item}
                        alt={productItem.name}
                        className="w-[80%]"
                      />
                    ))}
                  </div>
                </div>
                <div className="md:col-span-8 col-span-12 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-[20px] text-[#191919] font-[500]">
                        Name : {productItem.name}
                      </p>
                      <span className="text-[rgb(255,153,0)] text-[18px]">
                        Type : {productItem.type}
                      </span>
                    </div>
                    <p className="text-[16px] text-[#191919] font-[400]">
                      Price : {productItem.price}, Discount :{" "}
                      {productItem.discount}
                    </p>
                    <p className="text-[16px] text-[#333333] mt-2">
                      description : {productItem.description}
                    </p>
                  </div>
                  <div className="">
                    <a href="https://wa.me/963947059779" target="_blank">
                      <button className="w-[150px] rounded p-4 bg-[rgb(255,153,0)] cursor-pointer text-white flex items-center justify-center gap-2">
                        <IoMdCart /> Order Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default ProductById;
