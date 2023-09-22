import { createSlice } from '@reduxjs/toolkit'

import { fetchUsers } from '../thunks/fetchUsers'
import { addUser } from '../thunks/addUser'
import { removeUser } from '../thunks/removeUser'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // Fetch users
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
    // Add user
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data.push(action.payload.data)
    })
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
    // Remove user
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter((user) => user.id !== action.payload.id)
      console.log(action)
    })
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  }
})

export const usersReducer = usersSlice.reducer
