"use client";

import React from "react";
import { useGetAccessoryListQuery } from "@/data-access/api/products/products";
import { selectAccessoryListList } from "@/data-access/slices/Accessory-list";

import { useAppSelector } from "@/store";
import Card from "@/components/card/card";
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

export const AccessoryList = () => {
  const { data, isLoading } = useGetAccessoryListQuery({});
  const selectedAccessoryListList: ProductList[] = useAppSelector((state) =>
    selectAccessoryListList(state)
  );

  return (
    <>
      {isLoading ? (
        <div className="container mx-auto my-[40px]">
          <div className="my-[10px]">
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
          <div className="my-[40px]">
            <div className="grid-container">
              {Array.from(new Array(4)).map((_, index) => (
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
        <div className="container mx-auto my-[40px]">
          <div className="my-[10px]">
            <h2 className="text-[34px] text-[#2a2a2a] font-[7000]">
              Accessory
            </h2>
            <span className="text-[14px] text-[#a1a1a1] font-[400] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              cum!
            </span>
          </div>
          <div className="my-[40px]">
            <div className="grid-container">
              {selectedAccessoryListList?.map((laptopItem, key) => (
                <div className="grid-item" key={key}>
                  <Card
                    height="300px"
                    rounded="10px"
                    width=""
                    image={laptopItem.images ? laptopItem.images : ""}
                    title={laptopItem.name ? laptopItem.name : ""}
                    price={laptopItem.price ? laptopItem.price : ""}
                    description={
                      laptopItem.description ? laptopItem.description : ""
                    }
                    icons={true}
                    id={laptopItem.id ? laptopItem.id : ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
