import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'


import albumsApi from './apis/albumsApi';
import { usersReducer } from "./slices/usersSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(albumsApi.middleware),
})

setupListeners(store.dispatch)


export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser'
export { useGetAlbumsQuery } from './apis/albumsApi'
