"use client";

import React, { useState } from "react";
import {
  useGetAccessoryListQuery,
  useGetAllProductsListQuery,
  useGetAllProductsTypesListQuery,
  useGetLaptopListQuery,
} from "@/data-access/api/products/products";

import {
  selectAllProductsListList,
  resetAllProductsList,
} from "@/data-access/slices/all-products-list";

import { Skeleton } from "@mui/material";
import { useAppSelector, useAppDispatch } from "@/store";
import Card from "@/components/card/card-about";
import { selectLaptopListList } from "@/data-access/slices/product-list";
import { LaptopList } from "../laptop-list";
import { selectAccessoryListList } from "@/data-access/slices/Accessory-list";
import { AccessoryList } from "../Accessory-list";

interface ProductList {
  description?: string;
  discount?: string;
  id?: string;
  image?: string;
  name?: string;
  price?: string;
  type?: string;
}

export interface ProductType {
  type?: string;
}

export const AllProductPage = () => {
  const [type, setType] = useState("Laptop");

  const dispatch = useAppDispatch();

  const { isLoading: isLoadingLaptop } = useGetLaptopListQuery({});
  const selectedLaptopListList: ProductList[] = useAppSelector((state) =>
    selectLaptopListList(state)
  );

  // const { isLoading: isLoadingAccessory } = useGetAccessoryListQuery({});
  const selectedAccessoryListList: ProductList[] = useAppSelector((state) =>
    selectAccessoryListList(state)
  );

  return (
    <>
      <div className="select-type">
        <div className="flex gap-x-2">
          <button
            className={`${
              type === "Accessory" ? "type-item-active" : "type-item"
            }`}
            onClick={() => {
              setType("Accessory");
            }}
            disabled={isLoadingLaptop}
          >
            أكسسوارات
          </button>
          <button
            className={` ${
              type === "Laptop" ? "type-item-active" : "type-item"
            }`}
            onClick={() => {
              setType("Laptop");
            }}
            disabled={isLoadingLaptop}
          >
            لابتوبات
          </button>
        </div>
      </div>
      {type === "Laptop" ? (
        <LaptopList
          isLoading={isLoadingLaptop}
          selectedList={selectedLaptopListList}
        />
      ) : (
        <AccessoryList
          isLoading={false}
          selectedList={selectedAccessoryListList}
        />
      )}
      <style>
        {`

          div.select-type{
            margin : 14px 0px
          }
          
          div.select-type button {
            text-align: center;
            padding: 10px;
            width : 120px;
            background-color : rgba(0,0,0,0.5);
            color : #fff;
            border-radius : 5px;
          }
          
          div.select-type button.type-item-active {
            position: relative;
            color: #ffffff;
            font-size: 18px;
            font-weight: 400;
            cursor: pointer;
            width: 120px;
            background-color: var(--main-color);
          }
        
          
          `}
      </style>
    </>
  );
};
