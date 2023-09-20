import { createSlice } from '@reduxjs/toolkit'

import { reset } from '../actions'

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload)
    },
    removeSong(state, action) {
      return state.filter(song => song !== action.payload)
    },
    clearSongs(state) {
      return []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      return []
    })
  }
})

export const { addSong, removeSong, clearSongs } = songsSlice.actions
export const songsReducer = songsSlice.reducer
