import { apiSlice } from "../api";
import { addLaptopListItem } from "@/data-access/slices/product-list";
import { addAccessoryListItem } from "@/data-access/slices/Accessory-list";

export interface ProductList {
    description: string;
    discount: string;
    id: string;
    images: string[];
    name: string;
    price: string;
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
    })
})


export const { useGetLaptopListQuery, useGetAccessoryListQuery, useGetProductByIdQuery } = extendedApi