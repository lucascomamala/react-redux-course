import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (user) => ({
        url: '/albums',
        params: {
          userId: user.id
        },
        method: 'GET',
      })
    })
  })
})

export const { useGetAlbumsQuery } = albumsApi
export default albumsApi
