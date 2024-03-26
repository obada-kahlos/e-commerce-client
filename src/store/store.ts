import { apiSlice } from "@/data-access/api/api";
import { laptopList } from "@/data-access/slices/product-list";
import { accessoryList } from "@/data-access/slices/Accessory-list"

import { configureStore } from "@reduxjs/toolkit";
import { allProductsList } from "@/data-access/slices/all-products-list";
import { productsTypeList } from "@/data-access/slices/products-types";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    laptopList,
    accessoryList,
    allProductsList,
    productsTypeList
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
