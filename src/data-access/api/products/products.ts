import { apiSlice } from "../api";
import { addLaptopListItem } from "@/data-access/slices/product-list";
import { addAccessoryListItem } from "@/data-access/slices/Accessory-list";
import {
  addAllProductsListItem,
  setAllProductsListItemList,
  resetAllProductsList,
} from "@/data-access/slices/all-products-list";
import { addProductsTypeListItem } from "@/data-access/slices/products-types";
import { addSearchListItem } from "@/data-access/slices/search-list";

export interface ProductList {
  description: string;
  discount: string;
  id: string;
  url1: string;
  name: string;
  price: string;
  type: string;
  age: string;
}

export interface ProductType {
  type: string;
}

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductsList: builder.query({
      query: ({ type }) => ({
        url: ``,
        method: "POST",
        body: {
          query: `
                    query MyQuery{
                        products(where: {type: {_eq: ${type}} , status : {_eq: true }}) {
                          description
                          discount
                          id
                          url1
                          name
                          price
                          type
                          age
                        }
                      }                  
                    `,
        },
      }),
      transformResponse: (response: { data: { products: ProductList[] } }) => {
        const laptopList = response?.data?.products.map((obj) => {
          return {
            description: obj?.description,
            discount: obj?.discount,
            id: obj?.id,
            image: obj?.url1,
            name: obj?.name,
            price: obj?.price,
            type: obj?.type,
            age: obj?.age,
          };
        });

        return laptopList;
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          data.forEach((item) => {
            dispatch(addLaptopListItem(item));
          });
        } catch {
          return;
        }
      },
    }),
    getAccessoryList: builder.query({
      query: () => ({
        url: ``,
        method: "POST",
        body: {
          query: `
                    query MyQuery {
                        products(where: {type: {_eq: Accessory}}) {
                          description
                          discount
                          id
                          url1
                          name
                          price
                          type
                          age
                        }
                      }                  
                    `,
        },
      }),
      transformResponse: (response: { data: { products: ProductList[] } }) => {
        const laptopList = response?.data?.products.map((obj) => {
          return {
            description: obj?.description,
            discount: obj?.discount,
            id: obj?.id,
            image: obj?.url1,
            name: obj?.name,
            price: obj?.price,
            type: obj?.type,
            age: obj?.age,
          };
        });

        return laptopList;
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          data.forEach((item) => {
            dispatch(addAccessoryListItem(item));
          });
        } catch {
          return;
        }
      },
    }),
    getProductById: builder.query({
      query: ({ id }) => ({
        url: ``,
        method: "POST",
        body: {
          query: `
                    query MyQuery {
                        products(where: {id: {_eq: "${id}"}}){
                          description
                          discount
                          id
                          url1
                          url2
                          url3
                          url4
                          url5
                          price
                          type
                          name
                          age
                        }
                      }
                                       
                    `,
        },
      }),
    }),
    getDollar: builder.query({
      query: () => ({
        url: ``,
        method: "POST",
        body: {
          query: `
            query MyQuery {
                dollar_price_by_pk(id: "d930fc44-7061-4184-b8fe-42c6f6cbc069"){
                        dollar_price
                        id
                    }
                }
                                
            `,
        },
      }),
    }),
    getAllProductsList: builder.query({
      query: ({ product_type }) => ({
        url: ``,
        method: "POST",
        body: {
          query: `
                    query MyQuery {
                        products(where: {type: {_eq: ${product_type}}}){
                          description
                          discount
                          id
                          url1
                          name
                          price
                          type
                          age
                        }
                      }                  
                    `,
        },
      }),
      transformResponse: (response: { data: { products: ProductList[] } }) => {
        const laptopList = response?.data?.products.map((obj) => {
          return {
            description: obj?.description,
            discount: obj?.discount,
            id: obj?.id,
            image: obj?.url1,
            name: obj?.name,
            price: obj?.price,
            type: obj?.type,
            age: obj?.age,
          };
        });
        return laptopList;
      },
      async onQueryStarted({ product_type }, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAllProductsListItemList(data));
        } catch {
          return;
        }
      },
    }),
    getAllProductsTypesList: builder.query({
      query: () => ({
        url: ``,
        method: "POST",
        body: {
          query: `
                    query MyQuery {
                        product_type {
                            type
                          }
                      }                  
                    `,
        },
      }),
      transformResponse: (response: {
        data: { Product_Type: ProductType[] };
      }) => {
        const productsTypeList = response?.data?.Product_Type.map((obj) => {
          return {
            type: obj?.type,
          };
        });
        return productsTypeList;
      },
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          data.forEach((item) => {
            dispatch(addProductsTypeListItem(item));
          });
        } catch {
          return;
        }
      },
    }),
    getSearchProductsList: builder.query({
      query: ({ word }) => ({
        url: ``,
        method: "POST",
        body: {
          query: `
                        query MyQuery {
                            products(where: {name: {_ilike: "%${word}%"}}){
                                name
                                count
                                description
                                discount
                                id
                                url1
                                price
                                status
                                type
                                age
                            }
                        }
                    `,
        },
      }),
      transformResponse: (response: { data: { products: ProductList[] } }) => {
        const productsTypeList = response?.data?.products.map((obj) => {
          return {
            description: obj?.description,
            discount: obj?.discount,
            id: obj?.id,
            image: obj?.url1,
            name: obj?.name,
            price: obj?.price,
            type: obj?.type,
            age: obj?.age,
          };
        });
        return productsTypeList;
      },
      async onQueryStarted({ word }, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          data.forEach((item) => {
            dispatch(addSearchListItem(item));
          });
        } catch {
          return;
        }
      },
    }),
  }),
});

export const {
  useGetProductsListQuery,
  useGetAccessoryListQuery,
  useGetProductByIdQuery,
  useGetDollarQuery,
  useGetAllProductsListQuery,
  useGetAllProductsTypesListQuery,
  useGetSearchProductsListQuery,
} = extendedApi;
