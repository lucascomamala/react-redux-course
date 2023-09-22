import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:3005/'
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: () => 'albums'
    }),
    getAlbum: builder.query({
      query: (user) => `albums?userId=${user.id}`
    }),
  })
})
