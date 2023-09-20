import { configureStore } from '@reduxjs/toolkit'

import { songsReducer, addSong, removeSong, clearSongs } from './slices/songsSlice'
import { moviesReducer, addMovie, removeMovie, clearMovies } from './slices/moviesSlice'
import { reset } from './actions'

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
})

export { store }
export { addSong, removeSong, clearSongs }
export { addMovie, removeMovie, clearMovies }
export { reset }
