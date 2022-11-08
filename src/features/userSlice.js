import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';

const initialState = {
  // value: 0,
  // status: 'idle',
  user:null
};
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },

  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.userSlice;


export default userSlice.reducer;
