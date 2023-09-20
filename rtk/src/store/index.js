import { configureStore, createSlice, createAction } from '@reduxjs/toolkit'

export const reset = createAction('app/reset')

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
    )}
  })
  
  const store = configureStore({
    reducer: {
      songs: songsSlice.reducer,
      movies: moviesSlice.reducer
    }
  })
  
  export const { addSong, removeSong, clearSongs } = songsSlice.actions
  export const { addMovie, removeMovie } = moviesSlice.actions
  
  export { store }
