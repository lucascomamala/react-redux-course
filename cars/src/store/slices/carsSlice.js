import { createSlice, nanoid } from '@reduxjs/toolkit'


const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    addCar: (state, action) => {
      // * ASUMPTION
      // * action.payload === { name: 'ab', cost: 40 }
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      })
    },
    removeCar: (state, action) => {
      // * ASUMPTION
      // * action.payload === the id of the car we want to remove
      state.data = state.data.filter(car => car.id !== action.payload)
    }
  }
})

export const {setSearchTerm, addCar, removeCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer
