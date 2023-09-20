import { createSlice, nanoid } from '@reduxjs/toolkit'


const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    addCar: (state, action) => {
      // ASUMPTION
      // action.payload === { name: 'ab', cost: 40 }
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      })
    },
    removeCar: (state, action) => {
      // ASUMPTION
      // action.payload === the id of the car we want to remove
      state.cars = state.cars.filter(car => car.id !== action.payload)
    }
  }
})

export const {setSearchTerm, addCar, removeCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer
