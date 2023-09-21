import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('http://localhost:3005/users')
  // DEV ONLY!!
  await pause(100000)
  return response.data  
})

// DEV ONLY!!
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


export { fetchUsers }
