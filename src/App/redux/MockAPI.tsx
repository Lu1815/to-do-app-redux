import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type MockApiDTO = {
  name: string,
  avatar: string,
  id: string
}

// Define a service using a base URL and expected endpoints
export const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6172cfe5110a740017222e2b.mockapi.io/' }),
  endpoints: (builder) => ({
    getElementsList: builder.query<MockApiDTO[], void>({
      query: () => `elements`,
    }),
  }),
})

export const { useGetElementsListQuery } = mockApi