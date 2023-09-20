import { createSlice } from '@reduxjs/toolkit'

import { reset } from '../actions'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload)
    },
    removeMovie(state, action) {
      return state.filter(movie => movie !== action.payload)
    },
    clearMovies(state) {
      return []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      return []
    }
    )
  }
})

export const { addMovie, removeMovie, clearMovies } = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer
