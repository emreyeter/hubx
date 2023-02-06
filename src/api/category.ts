


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CategoryItem, CategoryResponse } from '../types/category-type'



export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app/' }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse, void>({
      query: () => `getCategories`,
    }),
  }),
})

export const { useGetCategoriesQuery } = categoryApi
