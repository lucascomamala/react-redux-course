import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

// * DEV ONLY!!
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    // ! Remove this function in production
    fetchFn: async (...args) => {
      await pause(1000)
      return fetch(...args)
    },
  }),
  endpoints: (builder) => ({
    // * Requires an album object
    getPhotos: builder.query({
      query: (album) => ({
        url: `/photos?albumId=${album.id}`,
      }),
    }),
    // * Requires an album object
    addPhoto: builder.mutation({
      query: (album) => ({
        url: '/photos',
        method: 'POST',
        body: {
          albumId: album.id,
          url: faker.image.abstract(150, 150, true),
        },
      }),
    }),
    // * Requires a photo object
    removePhoto: builder.mutation({
      query: (photo) => ({
        url: `/photos/${photo.id}`,
        method: 'DELETE',
      }),
    }),
  }),
})    

export const {
  useGetPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi
export default photosApi
