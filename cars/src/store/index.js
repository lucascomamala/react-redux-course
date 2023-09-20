import { configureStore } from "@reduxjs/toolkit"
import {
  carsReducer,
  addCar,
  removeCar,
  setSearchTerm,
} from "./slices/carsSlice"
import { formReducer, setName, setCost } from "./slices/formSlice"

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
})

export {
  store,
  addCar,
  removeCar,
  setSearchTerm,
  setName,
  setCost,
}
