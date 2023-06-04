import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios/index";

export type userState = {
  profile: { name: string, role: string };
  pending: boolean;
  error: boolean;
};

const initialState: userState = {
  profile: { name: '', role: '' },
  pending: false,
  error: false,
};

export const getKanyeQuote = createAsyncThunk('user/get', async () => {
  const user = await axios.get('https://api.kanye.rest/');
  return user.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //leave this empty
  },
  extraReducers: (builder) => {
    builder
      .addCase(getKanyeQuote.pending, (state) => {
        state.pending = true;
      })
      .addCase(getKanyeQuote.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.profile = payload;
      })
      .addCase(getKanyeQuote.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
