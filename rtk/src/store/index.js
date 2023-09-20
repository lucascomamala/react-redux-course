import { configureStore, createSlice } from '@reduxjs/toolkit'

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
    builder.addCase('movies/reset', (state, action) => {
      return []
    })
  }
})

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
    reset(state, action) {
      return []
    }
  }
})

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
})

export { store }
export const { addSong, removeSong, clearSongs } = songsSlice.actions
export const { addMovie, removeMovie, reset } = moviesSlice.actions
