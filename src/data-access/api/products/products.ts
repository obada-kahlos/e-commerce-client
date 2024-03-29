import { apiSlice } from "../api";
import { addLaptopListItem } from "@/data-access/slices/product-list";
import { addAccessoryListItem } from "@/data-access/slices/Accessory-list";
import { addAllProductsListItem } from "@/data-access/slices/all-products-list";
import { addProductsTypeListItem } from "@/data-access/slices/products-types";


export interface ProductList {
    description: string;
    discount: string;
    id: string;
    images: string[];
    name: string;
    price: string;
    type: string;
}

export interface ProductType {
    type: string;
}

const extendedApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLaptopList: builder.query({
            query: () => ({
                url: ``,
                method: "POST",
                body: {
                    query: `
                    query MyQuery {
                        Products(where: {type: {_eq: Laptop}}) {
                          description
                          discount
                          id
                          images
                          name
                          price
                          type
                        }
                      }                  
                    `,
                },
            }),
            transformResponse: (response: {
                data: { Products: ProductList[] };
            }) => {
                const laptopList = response?.data?.Products.map(
                    (obj) => {
                        return {
                            description: obj?.description,
                            discount: obj?.discount,
                            id: obj?.id,
                            images: obj?.images[0],
                            name: obj?.name,
                            price: obj?.price,
                            type: obj?.type,
                        };
                    }
                );

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
                        Products(where: {type: {_eq: Accessory}}) {
                          description
                          discount
                          id
                          images
                          name
                          price
                          type
                        }
                      }                  
                    `,
                },
            }),
            transformResponse: (response: {
                data: { Products: ProductList[] };
            }) => {
                const laptopList = response?.data?.Products.map(
                    (obj) => {
                        return {
                            description: obj?.description,
                            discount: obj?.discount,
                            id: obj?.id,
                            images: obj?.images[0],
                            name: obj?.name,
                            price: obj?.price,
                            type: obj?.type,
                        };
                    }
                );

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
                        Products(where: {id: {_eq: "${id}"}}){
                          description
                          discount
                          id
                          images
                          price
                          type
                          name
                        }
                      }
                                       
                    `,
                },
            })
        }),
        getAllProductsList: builder.query({
            query: ({ product_type }) => ({
                url: ``,
                method: "POST",
                body: {
                    query: `
                    query MyQuery {
                        Products{
                          description
                          discount
                          id
                          images
                          name
                          price
                          type
                        }
                      }                  
                    `,
                },
            }),
            transformResponse: (response: {
                data: { Products: ProductList[] };
            }) => {
                const laptopList = response?.data?.Products.map(
                    (obj) => {
                        return {
                            description: obj?.description,
                            discount: obj?.discount,
                            id: obj?.id,
                            images: obj?.images[0],
                            name: obj?.name,
                            price: obj?.price,
                            type: obj?.type,
                        };
                    }
                );

                return laptopList;
            },
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    data.forEach((item) => {
                        dispatch(addAllProductsListItem(item));
                    });
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
                        Product_Type {
                            type
                          }
                      }                  
                    `,
                },
            }),
            transformResponse: (response: {
                data: { Product_Type: ProductType[] };
            }) => {
                const productsTypeList = response?.data?.Product_Type.map(
                    (obj) => {
                        return {
                            type: obj?.type,
                        };
                    }
                );
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
    })
})


export const { useGetLaptopListQuery, useGetAccessoryListQuery, useGetProductByIdQuery, useGetAllProductsListQuery, useGetAllProductsTypesListQuery } = extendedApi