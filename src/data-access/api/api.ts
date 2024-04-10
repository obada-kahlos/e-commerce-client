import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spc-net.hasura.app/v1/graphql',
        prepareHeaders: async (headers) => {
            headers.set('Content-Type', `application/json`);
            headers.set('x-hasura-admin-secret', `NOFnPHC0owtJH6EC2U4xkJQhfpQ6Umo21TnA4YvJaVzGO5Y9k9YqO3dlyFeCBmAp`);
            return headers;
        },
        // credentials: 'include'
    }),
    endpoints: () => ({})
});
