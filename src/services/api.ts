import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RestauranteProps } from '../Pages/Home';

export const api = createApi({
    reducerPath: "",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes',
    }),
    endpoints: (builder) => ({
        getRestaurantList: builder.query<RestauranteProps[], void>({
            query: () => '',
        }),
        getProductList: builder.query<RestauranteProps, number>({
            query: (id) => `/${id}`,
        }),
    }),
});

export const useGetRestaurantListQuery = api.endpoints.getRestaurantList.useQuery;
export const useGetProductListQuery = api.endpoints.getProductList.useQuery;

export default api;
