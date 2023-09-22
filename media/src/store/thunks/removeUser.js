import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const removeUser = createAsyncThunk('users/removeUser', async (id) => {
  const response = await axios.delete(`http://localhost:3005/users/${id}`)
  // FIX !!!
  return response.data
})

export { removeUser }
