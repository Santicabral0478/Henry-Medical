// redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserTurns = createAsyncThunk('user/fetchUserTurns', async (_, { getState }) => {
  const { user } = getState().user;
  const response = await axios.get(`http://localhost:3005/users/${user.id}`);
  return response.data.turns;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
    turns: [], 
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserTurns.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUserTurns.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.turns = action.payload; 
      })
      .addCase(fetchUserTurns.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
