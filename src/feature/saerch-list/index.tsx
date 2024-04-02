"use client";

import MultipleItems from "@/components/react-slick/react-slick";
import React, { useEffect, useState } from "react";
import { useGetSearchProductsListQuery } from "@/data-access/api/products/products";
import { selectSearchList } from "@/data-access/slices/search-list";

import { useAppSelector } from "@/store";
import Image from "next/image";
import Card from "@/components/card-about/card-about";
import { Skeleton } from "@mui/material";

interface ProductList {
  description?: string;
  discount?: string;
  id?: string;
  images?: string;
  name?: string;
  price?: string;
  type?: string;
}

export const SearchList = ({ word }: { word: string }) => {
  const { data, isLoading } = useGetSearchProductsListQuery({ word });
  const selectedSearchListList: ProductList[] = useAppSelector((state) =>
    selectSearchList(state)
  );

  return (
    <>
      {isLoading ? (
        <div className="container mx-auto">
          <div className="my-[10px]">
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
          <div className="my-[40px]">
            <div className="grid-container">
              {Array.from(new Array(8)).map((_, index) => (
                <div key={index} className="grid-item">
                  <div
                    className={"card"}
                    style={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="100%"
                    />
                    <div className="content">
                      <Skeleton variant="text" width="60%" />
                      <Skeleton variant="text" width="40%" />
                    </div>
                    <div className="card-icons w-full bg-[#dbdbdb] opacity-45 z-40 h-[70px] flex items-center justify-center gap-x-4">
                      <Skeleton variant="circular" width="40px" height="40px" />
                      <Skeleton variant="circular" width="40px" height="40px" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {selectedSearchListList?.length > 0 ? (
            <div className="container mx-auto">
              <div className="my-[10px]">
                <h2 className="text-[34px] text-[#2a2a2a] font-[7000]">
                  نتيجة البحث عن : {word}
                </h2>
                <span className="text-[14px] text-[#a1a1a1] font-[400] ">
                  لابتوبات مكتبية - غيمينغ لابتوب
                </span>
              </div>
              <div className="my-[40px]">
                <div className="grid-container">
                  {selectedSearchListList?.map((laptopItem, key) => (
                    <div key={key} className="grid-item">
                      <Card
                        height="300px"
                        rounded="10px"
                        width="100%"
                        image={laptopItem.images ? laptopItem.images : ""}
                        title={laptopItem.name ? laptopItem.name : ""}
                        price={laptopItem.price ? laptopItem.price : ""}
                        // description={
                        //   laptopItem.description ? laptopItem.description : ""
                        // }
                        icons={true}
                        id={laptopItem.id ? laptopItem.id : ""}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-col w-full h-[400px]">
              <p> لم يتم العثور على منتجات متطابقة مع نتيجة البحث </p>
            </div>
          )}
        </>
      )}
    </>
  );
};
