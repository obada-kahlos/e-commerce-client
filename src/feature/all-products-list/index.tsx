"use client";

import React, { useState } from "react";
import {
  useGetAllProductsListQuery,
  useGetAllProductsTypesListQuery,
} from "@/data-access/api/products/products";

import { selectAllProductsListList } from "@/data-access/slices/all-products-list";
import { selectProductsTypeListList } from "@/data-access/slices/products-types";

import { Skeleton } from "@mui/material";
import { useAppSelector } from "@/store";
import Card from "@/components/card/card";

interface ProductList {
  description?: string;
  discount?: string;
  id?: string;
  images?: string;
  name?: string;
  price?: string;
  type?: string;
}

export interface ProductType {
  type?: string;
}

export const AllProductPage = () => {
  const [type, setType] = useState("Laptop");

  const { isLoading, refetch, isFetching } = useGetAllProductsListQuery({
    product_type: type,
  });
  useGetAllProductsTypesListQuery({});

  const selectedAllProductsListList: ProductList[] = useAppSelector((state) =>
    selectAllProductsListList(state)
  );

  const selectedProductsTypeListList: ProductType[] = useAppSelector((state) =>
    selectProductsTypeListList(state)
  );

  return (
    <>
      {isFetching ? (
        <div className="container mx-auto my-[40px]">
          <div className="my-[10px] flex items-center justify-between w-full">
            <div className="w-full">
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton variant="text" width="120px" />
              <Skeleton variant="text" width="120px" />
            </div>
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
        <div className="container mx-auto my-[40px]">
          <div className="my-[10px] flex items-center justify-between w-full">
            <div>
              <h2 className="text-[34px] text-[#2a2a2a] font-[7000]">
                جميع المنتجات
              </h2>
              <span className="text-[14px] text-[#a1a1a1] font-[400] ">
                جميع منتجات بحصة لابتوبت
              </span>
            </div>

            <div className="select-type">
              <ul className="flex">
                <li
                  className={`${
                    type === "Accessory" ? "type-item-active" : "type-item"
                  }`}
                  onClick={() => {
                    setType("Accessory"), refetch();
                  }}
                >
                  أكسسوارات
                </li>
                <li
                  className={` ${
                    type === "Laptop" ? "type-item-active" : "type-item"
                  }`}
                  onClick={() => {
                    setType("Laptop"), refetch();
                  }}
                >
                  لابتوبات
                </li>
              </ul>
            </div>
            {/* <div className="flex items-center gap-4">
              {selectedProductsTypeListList?.map((productTypeItem, key) => (
                <p key={productTypeItem.type} className="text-[18px]">
                  {productTypeItem.type}
                </p>
              ))}
            </div> */}
          </div>
          <div className="my-[40px]">
            <div className="grid-container">
              {selectedAllProductsListList?.map((laptopItem, key) => (
                <div className="grid-item" key={key}>
                  <Card
                    height="300px"
                    rounded="10px"
                    width=""
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
      )}
      <style>
        {`
          div.select-type {
            border-bottom: 1px solid #cccccc;
          }
          
          div.select-type ul li {
            text-align: center;
            padding-bottom: 10px;
          }
          
          div.select-type ul li.type-item {
            position: relative;
            color: #cccccc;
            font-size: 18px;
            font-weight: 400;
            cursor: pointer;
            width: 120px;
          }
          
          div.select-type ul li.type-item-active {
            position: relative;
            color: #232323;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            width: 120px;
          }
          
          div.select-type ul li.type-item-active::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            border-radius: 50px;
            background-color: var(--main-color);
          }
          
          `}
      </style>
    </>
  );
};
