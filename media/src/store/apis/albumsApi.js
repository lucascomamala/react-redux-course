import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

// DEV ONLY!!
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      // Remove this line in production
      await pause(1000)
      return fetch(...args)
    }
  }),
  endpoints: (builder) => ({
    addAlbum: builder.mutation({
      invalidatesTags: (result, error, user) => {
        return [{
          type: 'Album',
          id: user.id
        }]
      },
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
      providesTags: (result, error, user) => {
        return [{
          type: 'Album',
          id: user.id
        }]
      },
      query: (user) => ({
        url: '/albums',
        params: {
          userId: user.id
        },
        method: 'GET',
      }),
    }),
    removeAlbum: builder.mutation({
      invalidatesTags: (result, error, album) => {
        return [{
          type: 'Album',
          id: album.userId
        }]
      },
      query: (album) => ({
        url: `/albums/${album.id}`,
        method: 'DELETE',
      }),
    }),
  })

})

export const {
  useGetAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation
} = albumsApi
export default albumsApi
