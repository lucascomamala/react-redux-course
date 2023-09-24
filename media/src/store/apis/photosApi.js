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
    getPhotos: builder.query({}),
    addPhoto: builder.mutation({}),
    removePhoto: builder.mutation({}),
  }),
})    
