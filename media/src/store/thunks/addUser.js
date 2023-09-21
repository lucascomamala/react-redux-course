import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { faker } from "@faker-js/faker"

const addUser = createAsyncThunk('users/addUser', async () => {
  const user = {
    name: faker.person.fullName()
  }

  return await axios.post('http://localhost:3005/users', user)
})

export { addUser }
