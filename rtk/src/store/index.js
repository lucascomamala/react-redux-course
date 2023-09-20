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
    }
  }
})

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
})

const startingState = store.getState()
console.log(JSON.stringify(startingState))

store.dispatch({
  type: 'song/addSong',
  payload: 'November Rain'
})

const endingState = store.getState()
console.log(JSON.stringify(endingState))
