import {createSlice} from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setCost: (state, action) => {
      state.cost = action.payload
    }
  },
  extraReducers: {
    
})

export const {setName, setCost} = formSlice.actions
export const formReducer = formSlice.reducer
