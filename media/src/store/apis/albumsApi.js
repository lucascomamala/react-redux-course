import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {faker } from '@faker-js/faker'

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints: (builder) => ({
    addAlbum: builder.mutation({
      query: (user) => ({
        url: '/albums',
        method: 'POST',
        body: {
          userId: user.id,
          title: faker.commerce.productName(),
        },
      }),
    }),
    getAlbums: builder.query({
      query: (user) => ({
        url: '/albums',
        params: {
          userId: user.id
        },
        method: 'GET',
      }),
    })
  })
})

export const { useGetAlbumsQuery, useAddAlbumMutation } = albumsApi
export default albumsApi
