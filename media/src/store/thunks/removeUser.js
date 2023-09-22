import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/removeUser', async (id) => {
  // !Fix delete
  console.log(id);
  await axios.delete(`http://localhost:3005/users/${id}`);

  return id;
});

export { removeUser };
