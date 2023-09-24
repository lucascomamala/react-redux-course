import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints: (builder) => ({
    // * Requires an album object
    getPhotos: builder.query({
      providesTags: (result, error, album) => {
        const tags = result.map((photo) => ({
          type: 'Photo',
          id: photo.id,
        }))
        tags.push({ type: 'AlbumPhoto', id: album.id })
        return tags
      },
      query: (album) => ({
        url: `/photos?albumId=${album.id}`,
      }),
    }),
    // * Requires an album object
    addPhoto: builder.mutation({
      invalidatesTags: (result, error, album) => [{ type: 'AlbumPhoto', id: album.id }],
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
      invalidatesTags: (result, error, photo) => [{ type: 'Photo', id: photo.id }],
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
