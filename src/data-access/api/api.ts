import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://closing-bulldog-49.hasura.app/v1/graphql',
        prepareHeaders: async (headers) => {
            headers.set('Content-Type', `application/json`);
            headers.set('x-hasura-admin-secret', `xFo60XppD9JIFdsIXz1mW1T72XSC30aIdZKqUnvLPDTjTgnFiPuzuKwNeDKMQwEU`);
            return headers;
        },
        // credentials: 'include'
    }),
    endpoints: () => ({})
});
