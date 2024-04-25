import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
    id: number
    price: number
}

type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

type PurchaseResponse = {
    orderId: string
}

export const api = createApi({
    reducerPath: '',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/',
    }),
    endpoints: (builder) => ({
        getRestaurantList: builder.query<RestauranteProps[], void>({
            query: () => 'restaurantes',
        }),
        getProductList: builder.query<RestauranteProps, number>({
            query: (id) => `restaurantes/${id}`,
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body: body,
            }),
        }),
    }),
})
export const {
    useGetRestaurantListQuery,
    useGetProductListQuery,
    usePurchaseMutation,
} = api

export default api
