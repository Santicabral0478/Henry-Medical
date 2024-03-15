import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción asincrónica para obtener los turnos del usuario
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
    // Acción para establecer la información del usuario en el estado
    setUser: (state, action) => {
      state.user = action.payload;
      console.log("Usuario almacenado en el estado global:", action.payload);
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

// Exportar la acción setUser
export const { setUser } = userSlice.actions;

// Exportar el reductor
export default userSlice.reducer;
